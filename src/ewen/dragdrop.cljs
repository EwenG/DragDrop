(ns ewen.dragdrop
  (:require [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [ewen.async-plus :as async+]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [ewen.async-plus.macros :as async+m]))


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

(defn convert-event-dispatcher [event]
  (case (events/event-type event)
        "mousemove" (event->dd-event event :drag)
        "mousedown" (event->dd-event event :handle)
        "mouseup" (event->dd-event event :drop)))

(defn timestamp [event]
  (-> (events/raw-event event)
      (.getBrowserEvent)
      (.-timeStamp)))

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


(defn create-dd-raw
  [down-events move-events up-events]
  (let [out-mix (async/mix (async/chan))
        pred-ch (async/chan)
        move-events (async+/filter< pred-ch move-events)
        move-ch (async/tap move-events (async/chan))
        up-ch (async/tap up-events (async/chan))]
    (async/toggle out-mix {move-ch {:mute true}})
    (async/toggle out-mix {up-ch {:mute true}})
    (async+m/go-loop [down-ch down-events]
             (when-let [down-e (async/<! down-ch)]
               (async/put! pred-ch #(> (timestamp %)
                                       (timestamp down-e)))
               (async/put! (async/muxch* out-mix) down-e)
               (async/toggle out-mix {move-ch {:mute false}})
               (async/toggle out-mix {up-ch {:mute false}})
               (recur down-ch)))
    (async+m/go-loop [up-ch2 up-events]
             (when-let [up-e (async/<! up-ch2)]
               (async/toggle out-mix {move-ch {:mute true}})
               (async/toggle out-mix {up-ch {:mute true}})
               (recur up-ch2)))
    (async/mult (async/muxch* out-mix))))

(defn create-dd
  [down-events move-events up-events]
  (async+/map< convert-event-dispatcher
   (create-dd-raw down-events move-events up-events)))

(defn long-press [down-events up-events delay-time]
  (let [long-press-events (async/mult (async/chan))]
    (go-loop [down-ch (async/tap down-events (async/chan))]
             (when-let [down-event (async/<! down-ch)]
               (let [up-ch (async/tap up-events (async/chan))
                     [e alt-ch] (async/alts!
                                 [(async/timeout delay-time)
                                  up-ch])]
                 (async/untap up-events up-ch)
                 (when (not= up-ch alt-ch)
                   (async/>! (async/muxch* long-press-events) down-event))
                 (recur down-ch)))
             (async/untap down-events down-ch))
    long-press-events))

(comment

  (def down-events (extract-events (-> (sel "#typical-dd") single-node) :down))
  (def up-events (extract-events :up))
  (def yyy (long-press down-events up-events 1000))
  (go-loop [ch (async/tap yyy (async/chan))]
           (when-let [val (async/<! ch)]
             (prn val) (recur ch)))


  (def ccc (extract-events (-> (sel "#typical-dd") single-node) :down))
  (go-loop [ch (async/tap ccc (async/chan))]
           (when-let [val (async/<! ch)]
             (prn val) (recur ch)))

  (async+/close! ccc)

  (def down-events (extract-events (-> (sel "#typical-dd") single-node) :down))
  (def move-events (extract-events :move))
  (def up-events (extract-events :up))
  (def uu (create-dd down-events move-events up-events))

  (go-loop [ch (async/tap uu (async/chan))]
           (when-let [val (async/<! ch)]
             (prn val)
             (recur ch)))

  (async+/close! uu)


  (def yy (async/chan))
  (def gg (async/mult yy))

  (def pred-ch (async/chan))
  (def gg-filtered (async+/filter< pred-ch gg))


  (async+m/go-loop [gg-ch gg-filtered]
                   (when-let [tt (async/<! gg-ch)]
                     (prn tt)
                     (recur gg-ch)))

  (go (async/>! yy 3))
  (go (async/>! yy 2))

  (go (async/>! pred-ch #(= 2 %)))

  (async/put! (async/muxch* gg) 4)
  (go-loop [gg-ch (async/tap gg (async/chan))]
                   (when-let [tt (async/<! gg-ch)]
                     (prn tt)
                     (recur gg-ch)))

  (async/untap-all gg)
  (async/close! pred-ch)
  (async+/close! gg)

 )
