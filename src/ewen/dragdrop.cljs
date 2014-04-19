(ns ewen.dragdrop
  (:require [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [ewen.async-plus :as async+]
            [cljs.core.async :as async]
            [cljs.core.match])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [ewen.async-plus.macros :as async+m]
                   [cljs.core.match.macros :refer [match]]))

(def event-types
  "A map from keywords to event types. Useful for multiplatform (desktop/mobile) compatibility."
  (if (js* "'ontouchstart' in window")
    {:down "touchstart"
     :up  "touchend"
     :move "touchmove"
     :over "touchstart"
     :out "touchend"
     :click "tap"}
    {:down "mousedown"
     :up "mouseup"
     :move "mousemove"
     :over "mouseover"
     :out "mouseout"
     :click "mouseclick"}))


(defn op-loc [op loc1 loc2]
  {:left (op (:left loc1) (:left loc2))
   :top (op (:top loc1) (:top loc2))})

(defn event->loc
  "Convert a browser event into a clojure map representing the position where the event occured.
  Example of event:
  {:left 56
   :top 98}"
  [event]
  (if (js* "'ontouchstart' in window")
    {:left (-> event
               events/raw-event
               (.getBrowserEvent)
               (.-changedTouches)
               (.item 0)
               (.-pageX))
     :top  (-> event
               events/raw-event
               (.getBrowserEvent)
               (.-changedTouches)
               (.item 0)
               (.-pageY))}
    {:left (:clientX event)
     :top  (:clientY event)}))





(defn timestamp [event]
  "Extract the 'timestamp' field of a browser event."
  (-> (events/raw-event event)
      (.getBrowserEvent)
      (.-timeStamp)))

(defn extract-events
  "Returns a core.async 'mult' that fires the events of type 'event-type' occuring on the DOM element 'src'.
  THe callback function listening for events is unregistered when the mult closes."
  ([src event-type]
   (extract-events src event-type false))
  ([src event-type prevent-default]
   (let [out-ch (async/chan)
         close-ch (async/chan)
         listen-fn (fn [e]
                     (when prevent-default (events/prevent-default e))
                     (when-not (async/put! out-ch e)
                       (async/put! close-ch :unlisten)))
         listen-key (if src (listen! src (event-type event-types)
                                     listen-fn)
                            (listen! (event-type event-types)
                                     listen-fn))]
     (go (async/<! close-ch)
         (dorun (map unlisten-by-key! listen-key)))
     (async/mult out-ch)))
  ([event-type]
   (extract-events nil event-type)))










(defn check-event-type [e type]
  (= (type event-types) (events/event-type e)))




(defn merge-locs
  [loc handle-loc init-loc]
  (let [init-left (if init-loc (:left init-loc) 0)
        init-top (if init-loc (:top init-loc) 0)]
    {:left (+ init-left (- (:left loc) (:left handle-loc)))
     :top  (+ init-top (- (:top loc) (:top handle-loc)))}))










(defn long-press [down-events up-events delay-time]
  "Convert the given core.async mults into a mult that fires events representing long press or long click events."
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
