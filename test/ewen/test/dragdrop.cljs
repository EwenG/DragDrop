(ns ewen.test.dragdrop
  (:require-macros [cemerick.cljs.test
                    :refer [is deftest with-test run-tests testing test-var]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cemerick.cljs.test :as t]
            [ewen.dragdrop :as dd]
            [domina.css :refer [sel]]
            [domina.events :refer [event-type dispatch!]]
            [domina :refer [single-node]]
            [cljs.core.async :as async]))

(enable-console-print!)

(deftest extract-events
  (let [drag-chan (dd/extract-events
                   (-> (sel ".draggable")
                       single-node)
                   (:down dd/event-types))]
    (go (-> (async/<! drag-chan) event-type (= "mousedown") is))
    (dispatch! (-> (sel ".draggable") single-node)
               (:down dd/event-types) nil)
    (async/close! drag-chan)))


#_(t/test-ns 'ewen.test.dragdrop)

(comment



  (enable-console-print!)


  (deftest somewhat-less-wat
    (is (= "{}[]" (+ {} []))))

  (deftest javascript-allows-div0
    (is (= js/Infinity (/ 1 0) (/ (int 1) (int 0)))))

(with-test
  (defn pennies->dollar-string
    [pennies]
    {:pre [(integer? pennies)]}
    (str "$" (int (/ pennies 100)) "." (mod pennies 100)))
  (testing "assertions are nice"
    (is (thrown-with-msg? js/Error #"integer?" (pennies->dollar-string 564.2)))))


  (def gg (dd/extract-events
           (-> (sel ".draggable")
               single-node)
           (:down dd/event-types)))
  (dispatch! (-> (sel ".draggable")
               single-node)
             (:down dd/event-types)
             nil)
  (go (prn (event-type (async/<! gg))))

  )
