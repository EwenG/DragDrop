(ns ewen.dragdrop.examples
  (:require [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.style :as gstyle]
            [schema.core :as s]
            [ewen.flapjax-cljs :as F-cljs]
            [ewen.dragdrop :as dd]
            [ewen.async-plus :as async+]
            [cljs.core.async :as async])
  (:require-macros [schema.macros :as sm]
                   [cljs.core.async.macros :refer [go go-loop]]
                   [ewen.async-plus.macros :as async+m]))

(enable-console-print!)

(defn gsize->vec [size]
  [(.-width size) (.-height size)])

(defn gloc->vec [loc]
  [(.-x loc) (.-y loc)])

(defn dragging? [owner]
  (om/get-state owner :dragging))



(defn typical-draggable [cursor owner]
  (reify
    om/IDidMount
    (did-mount [_ node]
               (let [dims (-> (om/get-node owner "typical-draggable")
                              gstyle/getSize gsize->vec)
                     init-loc (-> (om/get-node owner "typical-draggable")
                                  gstyle/getPosition gloc->vec)]
                 (om/set-state! owner :dimensions dims)
                 (om/set-state! owner :init-location init-loc))
               (let [up-events (dd/extract-events :up)
                     down-events (dd/extract-events node :down)
                     move-events (dd/extract-events :move)
                     dd-events (dd/create-dd down-events move-events up-events)]
                 (om/set-state! owner :unlisten (comp #(async+/close! up-events)
                                                      #(async+/close! down-events)
                                                      #(async+/close! move-events)))
                 (om/set-state! owner :dd-events dd-events)
                 (let [handle-events (async+/filter< #(:handle %) dd-events)]
                   (async+m/go-loop [handle-ch handle-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! handle-ch)]
                                      (om/set-state! owner :handle-location [left top])
                                      (recur handle-ch))))
                 (let [drag-events (async+/filter< #(:drag %) dd-events)]
                   (async+m/go-loop [drag-ch drag-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drag-ch)]
                                      (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner
                                                      :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))]))
                                      (recur drag-ch))))
                 (let [drop-events (async+/filter< #(:drop %) dd-events)]
                   (async+m/go-loop [drop-ch drop-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drop-ch)]
                                      (om/set-state! owner :dragging false)
                                      (recur drop-ch))))))
    om/IWillUnmount
    (will-unmount [_]
                  ((om/get-state owner :unlisten)))
    om/IRenderState
    (render-state [_ state]
                  (let [style (cond
                               (dragging? owner)
                               (let [[x y] (:location state)
                                     [w h] (:dimensions state)]
                                 (js-obj "position" "absolute"
                                         "left" x "top" y
                                         "z-index" 1
                                         "width" w "height" h))
                               :else
                               (js-obj "position" "static" "z-index" 0))]
                    (dom/div
                     (js-obj "className" (if (dragging? owner)
                                           "well dragging"
                                           "well")
                             "style" style
                             "ref" "typical-draggable")
                     "Drag me!")))))

(def app-state
  (atom {:title "drag-me"}))



(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil
        (om/build typical-draggable app {:init-state {}}))))
         (-> (sel "#typical-dd") single-node))

#_(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil)))
         (-> (sel "#typical-dd") single-node))













(defn delayed-draggable [cursor owner]
  (reify
    om/IDidMount
    (did-mount [_ node]
               (let [dims (-> (om/get-node owner "delayed-draggable")
                              gstyle/getSize gsize->vec)
                     init-loc (-> (om/get-node owner "delayed-draggable")
                                  gstyle/getPosition gloc->vec)]
                 (om/set-state! owner :dimensions dims)
                 (om/set-state! owner :init-location init-loc))
               (let [up-events (dd/extract-events :up)
                     down-events (dd/extract-events node :down)
                     move-events (dd/extract-events :move)
                     dd-events (dd/create-dd down-events
                                             (async+/delay< 500 move-events)
                                             up-events)]
                 (om/set-state! owner :unlisten (comp #(async+/close! up-events)
                                                      #(async+/close! down-events)
                                                      #(async+/close! move-events)))
                 (om/set-state! owner :dd-events dd-events)
                 (let [handle-events (async+/filter< #(:handle %) dd-events)]
                   (async+m/go-loop [handle-ch handle-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! handle-ch)]
                                      (om/set-state! owner :handle-location [left top])
                                      (recur handle-ch))))
                 (let [drag-events (async+/filter< #(:drag %) dd-events)]
                   (async+m/go-loop [drag-ch drag-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drag-ch)]
                                      (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner
                                                      :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))]))
                                      (recur drag-ch))))
                 (let [drop-events (async+/filter< #(:drop %) dd-events)]
                   (async+m/go-loop [drop-ch drop-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drop-ch)]
                                      (om/set-state! owner :dragging false)
                                      (recur drop-ch))))))
    om/IWillUnmount
    (will-unmount [_]
                  ((om/get-state owner :unlisten)))
    om/IRenderState
    (render-state [_ state]
                  (let [style (cond
                               (dragging? owner)
                               (let [[x y] (:location state)
                                     [w h] (:dimensions state)]
                                 (js-obj "position" "absolute"
                                         "left" x "top" y
                                         "z-index" 1
                                         "width" w "height" h))
                               :else
                               (js-obj "position" "static" "z-index" 0))]
                    (dom/div
                     (js-obj "className" (if (dragging? owner)
                                           "well dragging"
                                           "well")
                             "style" style
                             "ref" "delayed-draggable")
                     "Drag me! But i'm slow...")))))


(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil
        (om/build delayed-draggable app {:init-state {}}))))
         (-> (sel "#delayed-dd") single-node))

















(defn hook-draggable [cursor owner]
  (reify
    om/IDidMount
    (did-mount [_ node]
               (let [dims (-> (om/get-node owner "hook-draggable")
                              gstyle/getSize gsize->vec)
                     init-loc (-> (om/get-node owner "hook-draggable")
                                  gstyle/getPosition gloc->vec)]
                 (om/set-state! owner :dimensions dims)
                 (om/set-state! owner :init-location init-loc))
               (let [up-events (dd/extract-events :up)
                     down-events (dd/extract-events node :down)
                     move-events (dd/extract-events :move)
                     dd-events (dd/create-dd down-events move-events up-events)]
                 (om/set-state! owner :unlisten (comp #(async+/close! up-events)
                                                      #(async+/close! down-events)
                                                      #(async+/close! move-events)))
                 (om/set-state! owner :dd-events dd-events)
                 (let [handle-events (async+/filter< #(:handle %) dd-events)]
                   (async+m/go-loop [handle-ch handle-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! handle-ch)]
                                      (om/set-state! owner :handle-location [left top])
                                      (set! (.-innerHTML node) "Handled")
                                      (recur handle-ch))))
                 (let [drag-events (async+/filter< #(:drag %) dd-events)]
                   (async+m/go-loop [drag-ch drag-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drag-ch)]
                                      (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner
                                                      :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))])
                                        (set! (.-innerHTML node) "Drag"))
                                      (recur drag-ch))))
                 (let [drop-events (async+/filter< #(:drop %) dd-events)]
                   (async+m/go-loop [drop-ch drop-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drop-ch)]
                                      (om/set-state! owner :dragging false)
                                      (set! (.-innerHTML node) "Droped")
                                      (recur drop-ch))))))
    om/IWillUnmount
    (will-unmount [_]
                  ((om/get-state owner :unlisten)))
    om/IRenderState
    (render-state [_ state]
                  (let [style (cond
                               (dragging? owner)
                               (let [[x y] (:location state)
                                     [w h] (:dimensions state)]
                                 (js-obj "position" "absolute"
                                         "left" x "top" y
                                         "z-index" 1
                                         "width" w "height" h))
                               :else
                               (js-obj "position" "static" "z-index" 0))]
                    (dom/div
                     (js-obj "className" (if (dragging? owner)
                                           "well dragging"
                                           "well")
                             "style" style
                             "ref" "hook-draggable")
                     "Drag me!")))))




(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil
        (om/build hook-draggable app {:init-state {}}))))
         (-> (sel "#hook-dd") single-node))










(defn long-press-draggable [cursor owner]
  (reify
    om/IDidMount
    (did-mount [_ node]
               (let [dims (-> (om/get-node owner "long-press-draggable")
                              gstyle/getSize gsize->vec)
                     init-loc (-> (om/get-node owner "long-press-draggable")
                                  gstyle/getPosition gloc->vec)]
                 (om/set-state! owner :dimensions dims)
                 (om/set-state! owner :init-location init-loc))
               (let [up-events (dd/extract-events :up)
                     down-events (dd/extract-events node :down)
                     move-events (dd/extract-events :move)
                     dd-events (dd/create-dd (dd/long-press down-events up-events 1000) move-events up-events)]
                 (om/set-state! owner :unlisten (comp #(async+/close! up-events)
                                                      #(async+/close! down-events)
                                                      #(async+/close! move-events)))
                 (om/set-state! owner :dd-events dd-events)
                 (let [handle-events (async+/filter< #(:handle %) dd-events)]
                   (async+m/go-loop [handle-ch handle-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! handle-ch)]
                                      (om/set-state! owner :handle-location [left top])
                                      (recur handle-ch))))
                 (let [drag-events (async+/filter< #(:drag %) dd-events)]
                   (async+m/go-loop [drag-ch drag-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drag-ch)]
                                      (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner
                                                      :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))]))
                                      (recur drag-ch))))
                 (let [drop-events (async+/filter< #(:drop %) dd-events)]
                   (async+m/go-loop [drop-ch drop-events]
                                    (when-let [{:keys [left top]}
                                               (async/<! drop-ch)]
                                      (om/set-state! owner :dragging false)
                                      (recur drop-ch))))))
    om/IWillUnmount
    (will-unmount [_]
                  ((om/get-state owner :unlisten)))
    om/IRenderState
    (render-state [_ state]
                  (let [style (cond
                               (dragging? owner)
                               (let [[x y] (:location state)
                                     [w h] (:dimensions state)]
                                 (js-obj "position" "absolute"
                                         "left" x "top" y
                                         "z-index" 1
                                         "width" w "height" h))
                               :else
                               (js-obj "position" "static" "z-index" 0))]
                    (dom/div
                     (js-obj "className" (if (dragging? owner)
                                           "well dragging"
                                           "well")
                             "style" style
                             "ref" "long-press-draggable")
                     "Long press... Then drag me!")))))


(om/root app-state
  (fn [app owner]
    (om/component
      (dom/div nil
        (om/build long-press-draggable app {:init-state {}}))))
         (-> (sel "#long-press-dd") single-node))
