(defproject ewen/dragdrop "0.1.0-SNAPSHOT"
  :description "Drag and drop helpers"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [ewen/flapjax-cljs "1.0.2"]
                 [domina "1.0.2"]
                 [prismatic/schema "0.2.1-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :profiles {:dev {:dependencies [[om "0.3.5"]
                                  [com.facebook/react "0.8.0.1"]
                                  [com.cemerick/clojurescript.test "0.3.0-SNAPSHOT"]]}}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src" "test"]
              :compiler {
                :output-to "resources/cljs/dragdrop.js"
                :output-dir "resources/cljs/"
                :optimizations :none
                :source-map true}}]})
