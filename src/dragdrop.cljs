(ns dragdrop
  (:require [cljs.core.async :as async]
            [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))




(enable-console-print!)


(if (js* "'ontouchstart' in window")
  (def event-types {:down :touchstart
                    :up :touchend
                    :move :touchmove
                    :over :touchstart
                    :out :touchend
                    :click "tap"})
  (def event-types {:down :mousedown
                    :up :mouseup
                    :move :mousemove
                    :over :mouseover
                    :out :mouseout
                    :click :mouseclick}))



(defn extract-events [src event-type]
  (let [chan (async/chan)
        unlisten-chan (async/chan)
        listen-key (listen! src event-type
                            #(do (when-not (async/put! chan %)
                                   (async/put! unlisten-chan :unlisten))))]
    (go (async/<! unlisten-chan)
        (dorun (map unlisten-by-key! listen-key))
        (async/close! unlisten-chan))
    chan))


(defn- dropE [dom-node]
  (->> (extract-events dom-node (:up event-types))
       (async/map< (fn [event]
                     (events/prevent-default event)
                     {:drop dom-node
                      :left (:clientX event)
                      :top (:clientY event)}))))

(defn- handleE [dom-node]
  (->> (extract-events dom-node (:down event-types))
       (async/map< (fn [event]
                     (events/prevent-default event)
                     {:handle dom-node
                      :left (:clientX event)
                      :top (:clientY event)}))))

(defn- moveE [dom-node]
  (->> (extract-events dom-node (:move event-types))
       (async/map< (fn [event]
                     (events/prevent-default event)
                     {:drag dom-node
                      :left (:clientX event)
                      :top (:clientY event)}))))

(defn dragE [dom-node]
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
               (do
                 (async/toggle mix {move-chan {:mute true}})
                 (async/toggle mix {drop-mix {:mute true}})
                 (async/toggle mix {handle-mix {:mute false}})
                 (recur drop-chan-copy))))
    (go-loop [handle-chan-copy (async/tap mult-handle (async/chan))]
             (when (async/<! handle-chan-copy)
               (do
                 (async/toggle mix {move-chan {:mute false}})
                 (async/toggle mix {drop-mix {:mute false}})
                 (async/toggle mix {handle-mix {:mute true}})
                 (recur handle-chan-copy))))
    (go-loop [copy-out (async/tap mult-out (async/chan))]
             (when (async/<! copy-out)
               (recur copy-out))
             (async/close! drop-chan)
             (async/close! handle-chan)
             (async/close! move-chan))
    (async/tap mult-out (async/chan))))




(defn dragging? [owner]
  (om/get-state owner :dragging))


(defn draggable [item owner]
  (reify
    om/IDidMount
    (did-mount [_ node]
      (:drag-fn (om/get-state owner)))
    om/IWillUpdate
    (will-update [_ next-props next-state]

      )
    om/IRenderState
    (render-state [_ state]
      (let [style (cond
                    (dragging? owner)
                    (let [[x y] (:location state)
                          [w h] (:dimensions state)]
                      #js {:position "absolute"
                           :top y :left x :z-index 1
                           :width w :height h})
                    :else
                    #js {:position "static" :z-index 0})]
        (dom/div
          #js {:className (when (dragging? owner) "dragging")
               :style style
               :ref "draggable"
               :onMouseDown #(drag-start % @item owner)
               :onMouseUp #(drag-stop % @item owner)
               :onMouseMove #(drag % @item owner)}
          (om/build (:view state) item))))))

(defn item [the-item owner]
  (om/component (dom/span nil (str "Item " (:title the-item)))))

(def app-state
  (atom {:title "drag-me"}))

(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil
        (dom/h2 nil "Draggable example")
        (om/build draggable app {:init-state {:view item
                                              :drag-fn dragE}}))))
  (.getElementById js/document "app"))


(comment


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
