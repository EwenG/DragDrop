(ns ewen.async-plus
  (:refer-clojure :exclude [merge] :as core)
  (:require [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))



(defn map> [f mult]
  (let [ch (async/tap mult (async/chan))
        out-ch (async/map> f ch)]
    (async/mult out-ch)))

(defn filter< [pred-ch mult]
  (let [out-ch (async/chan)]
    (go-loop [in-ch (async/tap mult (async/chan))
              filtered-ch (async/filter<
                           #(constantly true)
                           in-ch)]
             (async/pipe filtered-ch out-ch false)
             (when-let [pred (async/<! pred-ch)]
               (async/close! in-ch)
               (let [new-ch (async/tap mult (async/chan))]
                 (recur new-ch
                        (async/filter<
                         #(constantly true) new-ch))))
             (async/close! in-ch)
             (async/pipe (async/tap mult (async/chan))
                         out-ch))
    (async/mult out-ch)))


(defn merge
  ([mults] (merge mults nil))
  ([mults buf-or-n]
   (let [out-chs (async/map async/tap mults)
         out-ch (async/merge out-chs buf-or-n)]
     (async/mult out-ch))))

(defn close! [mult]
  (async/close! (async/muxch* mult)))
