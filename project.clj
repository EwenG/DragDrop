(defproject ewen/dragdrop "0.1.0-SNAPSHOT"
  :description "Drag and drop helpers"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [domina "1.0.2"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/js/dragdrop.js"
                :output-dir "resources/js/"
                :optimizations :none
                :source-map true}}]})
