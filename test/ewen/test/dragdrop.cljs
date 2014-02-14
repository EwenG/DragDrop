(ns ewen.test.dragdrop
  (:require-macros [cemerick.cljs.test
                    :refer [is deftest with-test run-tests testing test-var done
                            block-or-done use-fixtures]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cemerick.cljs.test :as t]
            [ewen.dragdrop :as dd]
            [domina.css :refer [sel]]
            [domina.events :refer [event-type dispatch!]]
            [domina :refer [single-node]]
            [cljs.core.async :as async]
            [schema.test]))

(enable-console-print!)
#_(use-fixtures :once schema.test/validate-schemas)

(deftest ^:async extract-events
  (let [drag-chan (dd/extract-events
                   (-> (sel ".draggable")
                       single-node)
                   (:down dd/event-types))
        ;Buffer used to complete the async test
        complete (async/chan)]

    (go
     (dispatch! (-> (sel ".draggable") single-node)
                (:down dd/event-types) nil)
     ;First, test that we receive the generated event
     (when (not= "mousedown"
                 (-> (async/<! drag-chan) event-type))
       (async/put! complete (js/Error.)))
     ;Close! should unregister the event listener
     (async/close! drag-chan)
     ;Dispatch an event. This event SHOULD NOT be captured since the event
     ;listener has been unregistered.
     (dispatch! (-> (sel ".draggable") single-node)
                (:down dd/event-types) nil)
     ;Then test that the event handler has been correctly unregister, and the channel closed.
     ;We should receive nil.
     (when (not= nil (async/<! drag-chan))
       (async/put! complete (js/Error.)))
     ;Everything went right, complete the test.
     (async/put! complete true))
    ;Dispatch an event. This event should be correctly captured.
    (block-or-done complete)))




#_(def test-res (run-tests))
#_(:async test-res)

(comment


  (enable-console-print!)

  (def cc (async/chan))
  (go (async/>! cc (throw (js/Error. "e"))))


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
