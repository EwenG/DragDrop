(ns ewen.dragdrop
  "A drag and drop library written in clojurescript."
  (:require [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.style :as gstyle]
            [schema.core :as s]
            [ewen.flapjax-cljs :as F-cljs])
  (:require-macros [schema.macros :as sm]))





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


(defn extract-events
  ([src event-type]
   (let [evt-stream (F-cljs/receiverE)
         listen-key (listen! src (event-type event-types)
                             #(F-cljs/sendEvent evt-stream %))]
     [evt-stream #(dorun (map unlisten-by-key! listen-key))]))
  ([event-type]
   (let [evt-stream (F-cljs/receiverE)
         listen-key (listen! (event-type event-types)
                             #(F-cljs/sendEvent evt-stream %))]
     [evt-stream #(dorun (map unlisten-by-key! listen-key))])))

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





(defn E->EE [E]
  (F-cljs/mapE #(F-cljs/oneE %) E))

(defn long-press [down-events up-events delay-time]
  (let [down-EE (E->EE down-events)
        delay-fn #(F-cljs/delayE % (F-cljs/constantB delay-time))
        down-EE (F-cljs/mapE delay-fn down-EE)
        up-EE (E->EE up-events)]
    (->> (F-cljs/mergeE down-EE up-EE)
         F-cljs/switchE
         (F-cljs/filterE #(= (-> (:down event-types) name)
                             (events/event-type %))))))


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










  )
