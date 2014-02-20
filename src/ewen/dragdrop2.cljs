(ns ewen.dragdrop2
  (:require [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [ewen.mult.async :as masync]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [ewen.mult.async.macros :as masyncm]))


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

(defn event->dd-event [event event-type]
  {event-type (events/target event)
   :left (:clientX event)
   :top (:clientY event)})

(defn extract-events
  ([src event-type]
   (let [out-ch (async/chan)
         close-ch (async/chan)
         listen-fn #(when-not (async/put! out-ch %)
                      (async/put! close-ch :unlisten))
         listen-key (if src (listen! src (event-type event-types)
                                     listen-fn)
                      (listen! (event-type event-types)
                               listen-fn))]
     (go (async/<! close-ch)
         (dorun (map unlisten-by-key! listen-key)))
     (async/mult out-ch)))
  ([event-type]
   (extract-events nil event-type)))

(defn create-dd
  [down-events move-events up-events]
  (let [out-ch (async/chan)]
    (go-loop []
             (when-let [down-e (masyncm/<! down-events)]
               (async/put! out-ch down-e)
               (masyncm/go-loop [move-ch move-events
                                 up-ch up-events]
                                (let [[move-or-up _] (async/alts! [up-ch move-ch]
                                                                  {:priority true})
                                      e-type (events/event-type move-or-up)]
                                  (async/put! out-ch move-or-up)
                                  (when (= "mousemove" e-type)
                                    (recur move-ch up-ch))))
             (recur)))
    (async/mult out-ch)))

(comment

  (def ccc (extract-events (-> (sel "#typical-dd") single-node) :down))
  (go-loop [ch (async/tap ccc (async/chan))]
           (when-let [val (async/<! ch)]
             (prn val) (recur ch)))

  (masync/close! ccc)

  (def down-events (extract-events (-> (sel "#typical-dd") single-node) :down))
  (def move-events (extract-events :move))
  (def up-events (extract-events :up))
  (def uu (create-dd down-events move-events up-events))

  (go-loop [ch (async/tap uu (async/chan))]
           (when-let [val (async/<! ch)]
             (prn (events/event-type val))
             (recur ch)))

 )
