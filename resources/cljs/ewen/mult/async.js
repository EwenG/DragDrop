// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.mult.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ewen.mult.async.map_GT_ = (function map_GT_(f,mult){var ch = cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null));var out_ch = cljs.core.async.map_GT_.call(null,f,ch);return cljs.core.async.mult.call(null,out_ch);
});
ewen.mult.async.filter_GT_ = (function filter_GT_(f,mult){var ch = cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null));var out_ch = cljs.core.async.filter_GT_.call(null,f,ch);return cljs.core.async.mult.call(null,out_ch);
});
ewen.mult.async.merge = (function() {
var merge = null;
var merge__1 = (function (mults){return merge.call(null,mults,null);
});
var merge__2 = (function (mults,buf_or_n){var out_chs = cljs.core.async.map.call(null,cljs.core.async.tap,mults);var out_ch = cljs.core.async.merge.call(null,out_chs,buf_or_n);return cljs.core.async.mult.call(null,out_ch);
});
merge = function(mults,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,mults);
case 2:
return merge__2.call(this,mults,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
ewen.mult.async.close_BANG_ = (function close_BANG_(mult){return cljs.core.async.close_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,mult));
});

//# sourceMappingURL=async.js.map