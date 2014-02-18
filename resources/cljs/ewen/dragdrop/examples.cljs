(ns ewen.dragdrop.examples
  (:require [domina.events :as events :refer [listen! unlisten! unlisten-by-key!]]
            [domina.css :refer [sel]]
            [domina :refer [single-node]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.style :as gstyle]
            [schema.core :as s]
            [ewen.flapjax-cljs :as F-cljs]
            [ewen.dragdrop :as dd])
  (:require-macros [schema.macros :as sm]))

(enable-console-print!)

(defn gsize->vec [size]
  [(.-width size) (.-height size)])

(defn gloc->vec [loc]
  [(.-x loc) (.-y loc)])

(defn dragging? [owner]
  (om/get-state owner :dragging))


#_(-> (sel "#typical-dd") single-node gstyle/getPosition gloc->vec)


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
               (let [[up-events up-unlisten] (dd/extract-events :up)
                     [down-events down-unlisten] (dd/extract-events node :down)
                     [move-events move-unlisten] (dd/extract-events :move)
                     dd-events (dd/create-dd down-events move-events up-events)]
                 (F-cljs/mapE #(prn (str (js-keys (events/raw-event %)))) move-events)
                 (F-cljs/mapE #(prn (str (.-pageX (.item (.-changedTouches (.getBrowserEvent (events/raw-event %))) 0)))) move-events)
                 (om/set-state! owner :unlisten (comp up-unlisten
                                                      down-unlisten
                                                      move-unlisten))
                 (om/set-state! owner :dd-events dd-events)

                 (->> (F-cljs/filterE #(:handle %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (om/set-state! owner :handle-location [left top]))))

                 (->> (F-cljs/filterE #(:drag %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner
                                                      :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))])))))

                 (->> (F-cljs/filterE #(:drop %) dd-events)
                      (F-cljs/mapE #(om/set-state! owner :dragging false)))))
    om/IWillUnmount
    (will-unmount [_ _]
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
               (let [[up-events up-unlisten] (dd/extract-events :up)
                     [down-events down-unlisten] (dd/extract-events node :down)
                     [move-events move-unlisten] (dd/extract-events :move)
                     dd-events (dd/create-dd down-events
                                             (-> move-events
                                                 (F-cljs/delayE (F-cljs/constantB 500)))
                                             up-events)]
                 (om/set-state! owner :unlisten (comp up-unlisten
                                                      down-unlisten
                                                      move-unlisten))
                 (om/set-state! owner :dd-events dd-events)

                 (->> (F-cljs/filterE #(:handle %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (om/set-state! owner :handle-location [left top]))))

                 (->> (F-cljs/filterE #(:drag %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))])))))

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
                     "Drag me! But I'm slow!")))))

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
               (let [[up-events up-unlisten] (dd/extract-events :up)
                     [down-events down-unlisten] (dd/extract-events node :down)
                     [move-events move-unlisten] (dd/extract-events :move)
                     dd-events (dd/create-dd down-events
                                             move-events
                                             up-events)]
                 (om/set-state! owner :unlisten (comp up-unlisten
                                                      down-unlisten
                                                      move-unlisten))
                 (om/set-state! owner :dd-events dd-events)

                 (->> (F-cljs/filterE #(:handle %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (om/set-state! owner :handle-location [left top])
                                     (-> (sel "#hook-div")
                                     single-node
                                     (.-innerHTML)
                                     (set! "Handled!")))))

                 (->> (F-cljs/filterE #(:drag %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))])))))

                 (->> (F-cljs/filterE #(:drop %) dd-events)
                      (F-cljs/mapE (fn [] (om/set-state! owner :dragging false)
                                     (-> (sel "#hook-div")
                                     single-node
                                     (.-innerHTML)
                                     (set! "Droped!")))))))
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
                                         "left" x "top" y
                                         "z-index" 1
                                         "width" w "height" h))
                               :else
                               (js-obj "position" "static" "z-index" 0))]
                    (dom/div
                     (js-obj "className" (if (dragging? owner)
                                           "well dragging"
                                           "well")
                             "id" "hook-div"
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
               (let [[up-events up-unlisten] (dd/extract-events :up)
                     [down-events down-unlisten] (dd/extract-events node :down)
                     [move-events move-unlisten] (dd/extract-events :move)
                     dd-events (dd/create-dd (dd/long-press down-events up-events 1000)
                                             move-events
                                             up-events)]
                 (om/set-state! owner :unlisten (comp up-unlisten
                                                      down-unlisten
                                                      move-unlisten))
                 (om/set-state! owner :dd-events dd-events)

                 (->> (F-cljs/filterE #(:handle %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (om/set-state! owner :handle-location [left top]))))

                 (->> (F-cljs/filterE #(:drag %) dd-events)
                      (F-cljs/mapE (fn [{:keys [left top]}]
                                     (let [[init-left init-top]
                                           (om/get-state owner :init-location)
                                           [handle-left handle-top]
                                           (om/get-state owner :handle-location)]
                                       (om/set-state! owner :dragging true)
                                       (om/set-state! owner :location
                                                      [(+ init-left (- left handle-left))
                                                       (+ init-top (- top handle-top))])))))

                 (->> (F-cljs/filterE #(:drop %) dd-events)
                      (F-cljs/mapE (fn [] (om/set-state! owner :dragging false))))))
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
