// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.async_plus');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ewen.async_plus.map_GT_ = (function map_GT_(f,mult){var ch = cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null));var out_ch = cljs.core.async.map_GT_.call(null,f,ch);return cljs.core.async.mult.call(null,out_ch);
});
ewen.async_plus.filter_LT_ = (function filter_LT_(pred_ch,mult){var out_ch = cljs.core.async.chan.call(null);var c__5593__auto___33986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_33966){var state_val_33967 = (state_33966[1]);if((state_val_33967 === 7))
{var inst_33943 = (state_33966[7]);var inst_33958 = (state_33966[2]);var inst_33959 = cljs.core.async.close_BANG_.call(null,inst_33943);var inst_33960 = cljs.core.async.chan.call(null);var inst_33961 = cljs.core.async.tap.call(null,mult,inst_33960);var inst_33962 = cljs.core.async.pipe.call(null,inst_33961,out_ch);var state_33966__$1 = (function (){var statearr_33968 = state_33966;(statearr_33968[8] = inst_33958);
(statearr_33968[9] = inst_33959);
return statearr_33968;
})();var statearr_33969_33987 = state_33966__$1;(statearr_33969_33987[2] = inst_33962);
(statearr_33969_33987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33967 === 6))
{var state_33966__$1 = state_33966;var statearr_33970_33988 = state_33966__$1;(statearr_33970_33988[2] = null);
(statearr_33970_33988[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33967 === 5))
{var inst_33943 = (state_33966[7]);var inst_33944 = (state_33966[10]);var inst_33948 = (state_33966[11]);var inst_33950 = cljs.core.async.close_BANG_.call(null,inst_33943);var inst_33951 = cljs.core.async.chan.call(null);var inst_33952 = cljs.core.async.tap.call(null,mult,inst_33951);var inst_33953 = (function (){var new_ch = inst_33952;var pred = inst_33948;var temp__4092__auto__ = inst_33948;var in_ch = inst_33943;var filtered_ch = inst_33944;return ((function (new_ch,pred,temp__4092__auto__,in_ch,filtered_ch,inst_33943,inst_33944,inst_33948,inst_33950,inst_33951,inst_33952,state_val_33967){
return (function (){return cljs.core.constantly.call(null,true);
});
;})(new_ch,pred,temp__4092__auto__,in_ch,filtered_ch,inst_33943,inst_33944,inst_33948,inst_33950,inst_33951,inst_33952,state_val_33967))
})();var inst_33954 = cljs.core.async.filter_LT_.call(null,inst_33953,inst_33952);var inst_33943__$1 = inst_33952;var inst_33944__$1 = inst_33954;var state_33966__$1 = (function (){var statearr_33971 = state_33966;(statearr_33971[12] = inst_33950);
(statearr_33971[7] = inst_33943__$1);
(statearr_33971[10] = inst_33944__$1);
return statearr_33971;
})();var statearr_33972_33989 = state_33966__$1;(statearr_33972_33989[2] = null);
(statearr_33972_33989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33967 === 4))
{var inst_33948 = (state_33966[11]);var inst_33948__$1 = (state_33966[2]);var state_33966__$1 = (function (){var statearr_33973 = state_33966;(statearr_33973[11] = inst_33948__$1);
return statearr_33973;
})();if(cljs.core.truth_(inst_33948__$1))
{var statearr_33974_33990 = state_33966__$1;(statearr_33974_33990[1] = 5);
} else
{var statearr_33975_33991 = state_33966__$1;(statearr_33975_33991[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33967 === 3))
{var inst_33964 = (state_33966[2]);var state_33966__$1 = state_33966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33966__$1,inst_33964);
} else
{if((state_val_33967 === 2))
{var inst_33944 = (state_33966[10]);var inst_33946 = cljs.core.async.pipe.call(null,inst_33944,out_ch,false);var state_33966__$1 = (function (){var statearr_33976 = state_33966;(statearr_33976[13] = inst_33946);
return statearr_33976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33966__$1,4,pred_ch);
} else
{if((state_val_33967 === 1))
{var inst_33939 = cljs.core.async.chan.call(null);var inst_33940 = cljs.core.async.tap.call(null,mult,inst_33939);var inst_33941 = (function (){var in_ch = inst_33940;return ((function (in_ch,inst_33939,inst_33940,state_val_33967){
return (function (){return cljs.core.constantly.call(null,true);
});
;})(in_ch,inst_33939,inst_33940,state_val_33967))
})();var inst_33942 = cljs.core.async.filter_LT_.call(null,inst_33941,inst_33940);var inst_33943 = inst_33940;var inst_33944 = inst_33942;var state_33966__$1 = (function (){var statearr_33977 = state_33966;(statearr_33977[7] = inst_33943);
(statearr_33977[10] = inst_33944);
return statearr_33977;
})();var statearr_33978_33992 = state_33966__$1;(statearr_33978_33992[2] = null);
(statearr_33978_33992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_33982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33982[0] = state_machine__5579__auto__);
(statearr_33982[1] = 1);
return statearr_33982;
});
var state_machine__5579__auto____1 = (function (state_33966){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_33966);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e33983){if((e33983 instanceof Object))
{var ex__5582__auto__ = e33983;var statearr_33984_33993 = state_33966;(statearr_33984_33993[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33966);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33994 = state_33966;
state_33966 = G__33994;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_33966){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_33966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_33985 = f__5594__auto__.call(null);(statearr_33985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___33986);
return statearr_33985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return cljs.core.async.mult.call(null,out_ch);
});
ewen.async_plus.merge = (function() {
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
ewen.async_plus.close_BANG_ = (function close_BANG_(mult){return cljs.core.async.close_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,mult));
});

//# sourceMappingURL=async_plus.js.map