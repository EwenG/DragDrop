(ns ewen.mult.async
  (:refer-clojure :exclude [merge] :as core)
  (:require [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))



(defn map> [f mult]
  (let [ch (async/tap mult (async/chan))
        out-ch (async/map> f ch)]
    (async/mult out-ch)))

(defn filter> [f mult]
  (let [ch (async/tap mult (async/chan))
        out-ch (async/filter> f ch)]
    (async/mult out-ch)))

(defn merge
  ([mults] (merge mults nil))
  ([mults buf-or-n]
   (let [out-chs (async/map async/tap mults)
         out-ch (async/merge out-chs buf-or-n)]
     (async/mult out-ch))))

(defn close! [mult]
  (async/close! (async/muxch* mult)))
