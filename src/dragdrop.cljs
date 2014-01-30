(ns dragdrop
  (:require [cljs.core.async :as async]
            [domina.events :refer [listen! unlisten!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(comment

  (def ccc1 (async/chan))
  (def ccc11 (async/chan))
  (def ccc12 (async/chan))
  (go (async/>! ccc1 ccc11))
  (go (async/>! ccc1 ccc12))
  (go (async/>! ccc11 1))
  (go (async/>! ccc12 2))
  (go-loop []
           (prn (async/alts! ccc1)))
  )


(enable-console-print!)

#_(listen! (sel ".draggable") :touchend (fn [evt] (prn "e")))

#_(unlisten! (sel ".draggable") :touchend)

(defn event-x-pos [event]
  (-> event (.changedTouches) (.item) (.-pageX)))

(defn event-y-pos [event]
  (-> event (.changedTouches) (.item) (.-pageY)))



(let [chan (-> (sel ".draggable")
               single-node
               (extract-events :mouseup)
               (async/tap (async/chan)))]
  (go-loop []
           (prn (async/<! chan))
           (recur)))

(defmulti extract-events
  (fn [src event-type]
    (type src)))


;By default we suppose that the source is a DOM element. TODO: improve this.
(defmethod extract-events :default [src event-type]
  (let [mult (-> (async/chan) async/mult)]
    (listen! src event-type #(go (async/>! (async/muxch* mult) %)))
    mult))

(def ccc (async/chan))

(go (async/>! ccc 3))

(def ttt (go (async/<! ccc)))
ttt

(defmethod extract-events
  :cljs.core.async.impl.channels/ManyToManyChannel
  [src event-type]
  (let [mult (-> (async/chan) async/mult)
        elt (go (async/<! src))]
    (listen!)))


#_(def mult1 (async/mult (async/chan)))
#_(prn (type (async/tap mult1 (async/chan))))



(defn drag-E [elt]
  (let [dropEE
        (F-cljs/mapE (fn [tu]
                       (.preventDefault tu)
                       (F-cljs/oneE {:drop elt :left (event-X-pos tu) :top (event-Y-pos tu)}))
                     (F-cljs/extractEventE elt "touchend"))
        false-E (-> dropEE (F-cljs/constantE false))
        moveEE
        (F-cljs/mapE
         (fn [ts]
           (.preventDefault ts)
           (F-cljs/mergeE
            (F-cljs/oneE {:handle elt :left (event-X-pos ts) :top (event-Y-pos ts)})
            (F-cljs/mapE
             (fn [tm]
               (.preventDefault tm)
               {:drag elt :left (.-pageX (.item (.-changedTouches tm) 0)) :top (.-pageY (.item (.-changedTouches tm) 0))})
             (-> false-E (F-cljs/startsWith elt) (F-cljs/extractEventE "touchmove")))))
         (F-cljs/extractEventE elt "touchstart"))]
    (F-cljs/switchE (F-cljs/mergeE moveEE dropEE))))