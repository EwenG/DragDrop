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
               (let [[up-events up-unlisten] (extract-events :up)
                     [down-events down-unlisten] (extract-events node :down)
                     [move-events move-unlisten] (extract-events :move)
                     dd-events (create-dd down-events move-events up-events)]
                 (om/set-state! owner :unlisten (comp up-unlisten
                                                      down-unlisten
                                                      move-unlisten))
                 (om/set-state! owner :dd-events dd-events)

                 (->> (F-cljs/filterE #(:handle %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (om/set-state! owner :dragging true)
                                     (om/set-state! owner :location [left top]))))

                 (->> (F-cljs/filterE #(:drag %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (om/set-state! owner :location [left top]))))

                 (->> (F-cljs/filterE #(:drop %) dd-events)
                      (F-cljs/mapE #(om/set-state! owner :dragging false)))))
    om/IWillUnmount
    (will-unmount [_ _]
                  ((om/get-state! owner :unlisten)))
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
        (om/build draggable app {:init-state {}}))))
         (-> (sel "#app") single-node))



  )
