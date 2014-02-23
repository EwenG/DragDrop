(ns ewen.async-plus.macros)

(defmacro <! [mult]
  `(let [ch# (cljs.core.async/tap ~mult (cljs.core.async/chan))
        val# (cljs.core.async/<! ch#)]
    (cljs.core.async/untap ~mult ch#)
    val#))

(defmacro go-loop [mult-bindings & body]
  (let [bindings (for [[symb mult] (->> mult-bindings
                                        (partition 2))]
                   [symb (list 'cljs.core.async/tap mult
                               '(cljs.core.async/chan))])
        bindings (->> bindings (reduce concat) vec)
        untaps (for [[symb mult] (->> mult-bindings
                                        (partition 2))]
                   (list 'cljs.core.async/untap mult symb))
        untaps (cons 'do untaps)]
    `(cljs.core.async.macros/go-loop ~bindings ~@body ~untaps)))

#_(macroexpand-1 '(go-loop [move-ch move-events
                                 up-ch up-events]
                                (let [[move-or-up _] (async/alts! [up-ch move-ch]
                                                                  {:priority true})
                                      e-type (events/event-type move-or-up)]
                                  (async/put! out-ch move-or-up)
                                  (when (= "mousemove" e-type)
                                    (recur move-ch up-ch)))))

(macroexpand-1
 '(go-loop [gg-ch gg]
                   (prn (async/<! gg-ch))
                   (recur gg-ch)))
