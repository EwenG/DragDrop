(ns ewen.dragdrop
  "A drag and drop library written in clojurescript."
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.style :as gstyle]
            [schema.core :as s]
            [com.ewen.flapjax-cljs :as F-cljs])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [schema.macros :as sm]))





(def event-types
  (if (js* "'ontouchstart' in window")
    {:down :touchstart
     :up :touchend
     :move :touchmove
     :over :touchstart
     :out :touchend
     :click "tap"}
    {:down :mousedown
     :up :mouseup
     :move :mousemove
     :over :mouseover
     :out :mouseout
     :click :mouseclick}))


(sm/defschema event-types-s (->> (keys event-types)
                                 (apply s/enum)))

(defn event->dd-event [event event-type]
  {event-type (events/target event)
   :left (:clientX event)
   :top (:clientY event)})


(sm/defn extract-events :- [(s/one ManyToManyChannel "evt-stream")
                            (s/one (sm/=> nil) "unlisten")]
         [src :- js/HTMLElement event-type :- event-types-s]
         (let [evt-stream (F-cljs/receiverE)
               listen-key (listen! src (event-type event-types)
                                   #(F-cljs/sendEvent evt-stream %))]
           [evt-stream #(dorun (map unlisten-by-key! listen-key))]))

(defn dropEE [up-events]
  (-> (fn [event]
        (events/prevent-default event)
        (F-cljs/oneE (event->dd-event event :drop)))
      (F-cljs/mapE up-events)))

(defn moveEE [move-events]
  (-> (fn [event]
               (events/prevent-default event)
               (event->dd-event event :drag))
      (F-cljs/mapE move-events)))

(defn dragEE [down-events move-events]
  (-> (fn [event]
        (-> (F-cljs/oneE (event->dd-event event :handle))
            (F-cljs/mergeE (moveEE move-events))))
      (F-cljs/mapE down-events)))

(defn create-dd
         [down-events move-events up-events]
  (-> (F-cljs/mergeE (dropEE up-events)
                    (dragEE down-events move-events))
      F-cljs/switchE))




#_(sm/defn extract-events :- ManyToManyChannel
         [src :- js/HTMLElement event-type :- event-types-s]
  (let [chan (async/chan)
        unlisten-chan (async/chan)
        listen-key (listen! src event-type
                            #(do (when-not (async/put! chan %)
                                   (async/put! unlisten-chan :unlisten))))]
    (go (async/<! unlisten-chan)
        (dorun (map unlisten-by-key! listen-key))
        (async/close! unlisten-chan))
    chan))



#_(sm/defn dropE :- ManyToManyChannel
         [dom-node :- js/HTMLElement]
         (->> (extract-events dom-node (:up event-types))
              (async/map< (fn [event]
                            (events/prevent-default event)
                            {:drop dom-node
                             :left (:clientX event)
                             :top (:clientY event)}))))

#_(sm/defn handleE :- ManyToManyChannel
         [dom-node :- js/HTMLElement]
  (->> (extract-events dom-node (:down event-types))
       (async/map< (fn [event]
                     (events/prevent-default event)
                     {:handle dom-node
                      :left (:clientX event)
                      :top (:clientY event)}))))

#_(sm/defn moveE :- ManyToManyChannel
  [dom-node :- js/HTMLElement]
  (->> (extract-events dom-node (:move event-types))
       (async/map< (fn [event]
                     (events/prevent-default event)
                     {:drag dom-node
                      :left (:clientX event)
                      :top (:clientY event)}))))


#_(sm/defn dragE :- ManyToManyChannel
  [dom-node :- js/HTMLElement]
  (let [out-chan (async/chan)
        mult-out (async/mult out-chan)
        mix (async/mix out-chan)
        drop-chan (dropE dom-node)
        handle-chan (handleE dom-node)
        mult-drop (-> drop-chan async/mult)
        mult-handle (-> handle-chan async/mult)
        drop-mix (async/tap mult-drop (async/chan))
        handle-mix (async/tap mult-handle (async/chan))
        move-chan (moveE dom-node)]
    (async/admix mix handle-mix)
    (async/toggle mix {drop-mix {:mute true}})
    (async/toggle mix {move-chan {:mute true}})
    (go-loop [drop-chan-copy (async/tap mult-drop (async/chan))]
             (when (async/<! drop-chan-copy)
               (async/toggle mix {move-chan {:mute true}})
               (async/toggle mix {drop-mix {:mute true}})
               (async/toggle mix {handle-mix {:mute false}})
               (recur drop-chan-copy)))
    (go-loop [handle-chan-copy (async/tap mult-handle (async/chan))]
             (when (async/<! handle-chan-copy)
               (async/toggle mix {move-chan {:mute false}})
               (async/toggle mix {drop-mix {:mute false}})
               (async/toggle mix {handle-mix {:mute true}})
               (recur handle-chan-copy)))
    (go-loop [copy-out (async/tap mult-out (async/chan))]
             (when (async/<! copy-out)
               (recur copy-out))
             (async/close! drop-chan)
             (async/close! handle-chan)
             (async/close! move-chan))
    (async/tap mult-out (async/chan))))


#_(sm/defn long-pressE :- ManyToManyChannel
         [dom-node :- js/HTMLElement press-time :- s/Num]
         (let [handle-chan (handleE dom-node)
               long-press-chan (async/chan)]
           (go-loop [drop-chan (dropE dom-node)
                     drop-chan-mult (async/mult drop-chan)]
                    (when-let [handle-event (async/<! handle-chan)]
                      (when-not (-> (async/alts! [(async/tap drop-chan-mult (async/chan))
                                                  (async/timeout press-time)])
                                    first)
                        (when-not (async/put! long-press-chan handle-event)
                          (prn "close")
                          (async/close! handle-chan)
                          (async/close! drop-chan)))
                      (async/untap-all drop-chan-mult)
                      (recur drop-chan drop-chan-mult)))
           long-press-chan))

#_(def uu (long-pressE (single-node (sel ".draggable")) 2000))
#_(go-loop [] (prn (async/<! uu)) (recur))


#_(def oo (dropE (single-node (sel ".draggable"))))
#_(def oo-mult (async/mult oo))
#_(go-loop [gg (async/tap oo-mult (async/chan))] (prn (async/alts! [gg
                                 (async/timeout 2000)]))
           (async/untap-all oo-mult)
           (recur (async/tap oo-mult (async/chan))))

(comment

  (enable-console-print!)

  (def jjjk (single-node (sel ".draggable")))
  (def iii (create-dd (first (extract-events jjjk :down))
                      (first (extract-events jjjk :move))
                      (first (extract-events jjjk :up))))
  (F-cljs/mapE prn iii)


  (def uu (extract-events (single-node (sel ".draggable")) :down))
  (def ss (first uu))
  (def unlisten (second uu))
  (F-cljs/mapE prn ss)
  (unlisten)


  (set! schema.utils/type-of identity)

  (defrecord FnSchema [output-schema input-schemas] ;; input-schemas sorted by arity
  s/Schema
  (walker [this]
    (fn [x]
      (if (fn? x)
        x
        (sm/validation-error this x (list 'fn? (su/value-name x))))))
  (explain [this]
    (if (> (count input-schemas) 1)
      (list* '=>* (explain output-schema) (map s/explain-input-schema input-schemas))
      (list* '=> (explain output-schema) (s/explain-input-schema (first input-schemas))))))



  (defn- ii ^{:a "r"} [x] x)
  (defn yy "rt" [x] x)
  (meta yy)
  (meta (with-meta yy {:a "e"}))


  (sm/defn with-full-name :- s/Str
                 [m :- (sm/=> s/Str s/Str)]
                 m)

  (sm/=> s/Str s/Str)

  (js-keys with-full-name)
  (.-schema$core$Schema$explain$arity$1 with-full-name)
  (schema.utils/class-schema (schema.utils/type-of with-full-name))

  (sm/with-fn-validation (with-full-name prn))
  (sm/with-fn-validation (with-full-name 3))

  (s/explain (s/fn-schema with-full-name))


  (def OddLong (s/both (s/pred odd?) s/Int))

  (def OddLongString
    (s/both s/Str (s/pred #(odd? (parse-long %)) 'odd-str?)))

  (sm/defn ^{:tag String} simple-validated-defn-new :- OddLongString
           "I am a simple schema fn"
           {:metadata :bla}
           [arg0 :- OddLong]
           (str arg0))

  (def +simple-validated-defn-schema+
    (sm/=> OddLongString OddLong))

  (= +simple-validated-defn-schema+ (s/fn-schema simple-validated-defn-new))

  (js-keys simple-validated-defn-new)
  (su/class-schema (su/type-of simple-validated-defn-new))


  (type (s/fn-schema with-full-name))

  (s/explain (s/fn-schema with-full-name))


(defn gsize->vec [size]
  [(.-width size) (.-height size)])

(defn dragging? [owner]
  (om/get-state owner :dragging))


(defn draggable [cursor owner]
  (reify
    om/IDidMount
    (did-mount [_ node]
               (let [dims (-> (om/get-node owner "draggable")
                              gstyle/getSize gsize->vec)]
                 (om/set-state! owner :dimensions dims))
               (let [drag-fn (:drag-fn (om/get-state owner))
                     mult-drag (-> (drag-fn node) async/mult)]
                 (om/set-state! owner :drag-mult mult-drag)
                 (go-loop [move-chan (->> (async/tap mult-drag (async/chan))
                                          (async/filter< #(or (:handle %) (:drag %))))]
                          (when-let [{:keys [left top]} (async/<! move-chan)]
                            (om/set-state! owner :dragging true)
                            (om/set-state! owner :location [left top])
                            (recur move-chan)))))
    om/IWillUnmount
    (will-unmount [_ _]
                  (-> (om/get-state! owner :drag-mult)
                      async/muxch*
                      async/close!))
    om/IRenderState
    (render-state [_ state]
                  (let [style (cond
                               (dragging? owner)
                               (let [[x y] (:location state)
                                     [w h] (:dimensions state)]
                                 (js-obj "position" "absolute"
                                         "top" (- y (/ h 2))
                                         "left" (- x (/ w 2))
                                         "z-index" 1
                                         "width" w "height" h))
                               :else
                               (js-obj "position" "static" "z-index" 0))]
                    (dom/div
                     (js-obj "className" (if (dragging? owner)
                                           "dragging draggable"
                                           "draggable")
                             "style" style
                             "ref" "draggable"))))))

(def app-state
  (atom {:title "drag-me"}))


(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil
        (dom/h2 nil "Draggable example")
        (om/build draggable app {:init-state {:drag-fn dragE}}))))
         (-> (sel "#app") single-node))




  (def test-drag-e (dragE (single-node (sel ".draggable"))))
  (go-loop []
           (when-let [val (async/<! test-drag-e)]
             (prn "val " val)
             (recur)))
  (async/close! test-drag-e)


  (def test-drop-EE (dropEE (single-node (sel ".draggable")) :mouseup))
  (go-loop []
           (when-let [val (async/<! test-drop-EE)]
             (prn "val " val)
             (prn "val2 " (async/<! val))
             (recur)))

  (go (async/>! test-unlisten-chan :unlisten))
  (go (prn (async/<! test-drop-EE)))
  (async/close! test-drop-EE)


  (def test-move-EE (moveEE (single-node (sel ".draggable"))))
  (go-loop []
           (when-let [val (async/<! test-move-EE)]
             (prn "val " val)
             (prn "val2 " (async/<! val))
             (prn "val3 " (async/<! val))
             (prn "val4 " (async/<! val))
             (prn "val5 " (async/<! val))
             (prn "val6 " (async/<! val))
             (recur)))

  (go (prn (async/<! test-drop-EE)))





  (def ccc1 (async/chan))
  (def ccc11 (async/chan))
  (def ccc12 (async/chan))
  (go (async/>! ccc1 ccc11))
  (go (async/>! ccc1 ccc12))
  (go (async/>! ccc11 1))
  (go (async/>! ccc12 2))
  (go (prn (async/alts! [ccc1])))

  (def rrr (async/onto-chan (async/chan) ["r"]))

  (def eee (async/chan))
  (def rrr (go (async/>! eee "e")))
  (go (prn (async/<! rrr)))
  (go (prn (async/<! eee)))
  rrr

  (def rrr (async/to-chan ["e"]))
  (go (prn (async/<! rrr)))

  (defmethod extract-events :default [src event-type]
  (let [mult (-> (async/chan) async/mult)]
    (listen! src event-type #(go (async/>! (async/muxch* mult) %)))
    mult))

  (def hh (async/chan (async/sliding-buffer 1)))
  (async/put! hh "e")
  (go (prn (async/<! hh)))
  (async/take! hh prn)


  (def mult-chan (-> (async/chan) async/mult))
  (def in-mult (async/muxch* mult-chan))
  (def out-mult1 (async/tap mult-chan (async/chan)))
  (def out-mult2 (async/tap mult-chan (async/chan)))

  (async/put! in-mult 3)
  (go (async/>! in-mult 4) (prn "after >!"))

  (go (prn (async/<! out-mult1)))
  (go (prn (async/<! out-mult2)))
  (async/untap mult-chan out-mult1)
  (async/untap mult-chan out-mult2)

  (let [listen-key (listen! (single-node (sel ".draggable")) :mousedown
                  #(dorun (prn listen-key) (map unlisten-by-key! listen-key)))])


  )
