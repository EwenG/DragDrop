// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.async_plus');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ewen.async_plus.map_LT_ = (function map_LT_(f,mult){var ch = cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null));var out_ch = cljs.core.async.map_LT_.call(null,f,ch);return cljs.core.async.mult.call(null,out_ch);
});
ewen.async_plus.filter_LT_ = (function filter_LT_(pred_ch,mult){if(cljs.core._EQ_.call(null,"function",typeof pred_ch))
{var ch = cljs.core.async.chan.call(null);var c__5595__auto___8566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_8511){var state_val_8512 = (state_8511[1]);if((state_val_8512 === 2))
{var inst_8509 = (state_8511[2]);var state_8511__$1 = state_8511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8511__$1,inst_8509);
} else
{if((state_val_8512 === 1))
{var state_8511__$1 = state_8511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8511__$1,2,ch,pred_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_8516 = [null,null,null,null,null,null,null];(statearr_8516[0] = state_machine__5581__auto__);
(statearr_8516[1] = 1);
return statearr_8516;
});
var state_machine__5581__auto____1 = (function (state_8511){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_8511);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e8517){if((e8517 instanceof Object))
{var ex__5584__auto__ = e8517;var statearr_8518_8567 = state_8511;(statearr_8518_8567[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8568 = state_8511;
state_8511 = G__8568;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_8511){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_8511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_8519 = f__5596__auto__.call(null);(statearr_8519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___8566);
return statearr_8519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return filter_LT_.call(null,ch,mult);
} else
{var out_ch = cljs.core.async.chan.call(null);var c__5595__auto___8569 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_8546){var state_val_8547 = (state_8546[1]);if((state_val_8547 === 7))
{var inst_8524 = (state_8546[7]);var inst_8538 = (state_8546[2]);var inst_8539 = cljs.core.async.untap.call(null,mult,inst_8524);var inst_8540 = cljs.core.async.chan.call(null);var inst_8541 = cljs.core.async.tap.call(null,mult,inst_8540);var inst_8542 = cljs.core.async.pipe.call(null,inst_8541,out_ch);var state_8546__$1 = (function (){var statearr_8548 = state_8546;(statearr_8548[8] = inst_8539);
(statearr_8548[9] = inst_8538);
return statearr_8548;
})();var statearr_8549_8570 = state_8546__$1;(statearr_8549_8570[2] = inst_8542);
(statearr_8549_8570[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8547 === 6))
{var state_8546__$1 = state_8546;var statearr_8550_8571 = state_8546__$1;(statearr_8550_8571[2] = null);
(statearr_8550_8571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8547 === 5))
{var inst_8529 = (state_8546[10]);var inst_8524 = (state_8546[7]);var inst_8531 = cljs.core.async.untap.call(null,mult,inst_8524);var inst_8532 = cljs.core.async.chan.call(null);var inst_8533 = cljs.core.async.tap.call(null,mult,inst_8532);var inst_8534 = cljs.core.async.filter_LT_.call(null,inst_8529,inst_8533);var inst_8524__$1 = inst_8533;var inst_8525 = inst_8534;var state_8546__$1 = (function (){var statearr_8551 = state_8546;(statearr_8551[11] = inst_8531);
(statearr_8551[12] = inst_8525);
(statearr_8551[7] = inst_8524__$1);
return statearr_8551;
})();var statearr_8552_8572 = state_8546__$1;(statearr_8552_8572[2] = null);
(statearr_8552_8572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8547 === 4))
{var inst_8529 = (state_8546[10]);var inst_8529__$1 = (state_8546[2]);var state_8546__$1 = (function (){var statearr_8553 = state_8546;(statearr_8553[10] = inst_8529__$1);
return statearr_8553;
})();if(cljs.core.truth_(inst_8529__$1))
{var statearr_8554_8573 = state_8546__$1;(statearr_8554_8573[1] = 5);
} else
{var statearr_8555_8574 = state_8546__$1;(statearr_8555_8574[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8547 === 3))
{var inst_8544 = (state_8546[2]);var state_8546__$1 = state_8546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8546__$1,inst_8544);
} else
{if((state_val_8547 === 2))
{var inst_8525 = (state_8546[12]);var inst_8527 = cljs.core.async.pipe.call(null,inst_8525,out_ch,false);var state_8546__$1 = (function (){var statearr_8556 = state_8546;(statearr_8556[13] = inst_8527);
return statearr_8556;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8546__$1,4,pred_ch);
} else
{if((state_val_8547 === 1))
{var inst_8520 = cljs.core.async.chan.call(null);var inst_8521 = cljs.core.async.tap.call(null,mult,inst_8520);var inst_8522 = (function (){var in_ch = inst_8521;return ((function (in_ch,inst_8520,inst_8521,state_val_8547){
return (function (){return cljs.core.constantly.call(null,true);
});
;})(in_ch,inst_8520,inst_8521,state_val_8547))
})();var inst_8523 = cljs.core.async.filter_LT_.call(null,inst_8522,inst_8521);var inst_8524 = inst_8521;var inst_8525 = inst_8523;var state_8546__$1 = (function (){var statearr_8557 = state_8546;(statearr_8557[12] = inst_8525);
(statearr_8557[7] = inst_8524);
return statearr_8557;
})();var statearr_8558_8575 = state_8546__$1;(statearr_8558_8575[2] = null);
(statearr_8558_8575[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_8562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8562[0] = state_machine__5581__auto__);
(statearr_8562[1] = 1);
return statearr_8562;
});
var state_machine__5581__auto____1 = (function (state_8546){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_8546);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e8563){if((e8563 instanceof Object))
{var ex__5584__auto__ = e8563;var statearr_8564_8576 = state_8546;(statearr_8564_8576[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8577 = state_8546;
state_8546 = G__8577;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_8546){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_8546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_8565 = f__5596__auto__.call(null);(statearr_8565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___8569);
return statearr_8565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,out_ch);
}
});
ewen.async_plus.delay_LT_ = (function delay_LT_(delay,mult){var out_mult = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___8652 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_8632){var state_val_8633 = (state_8632[1]);if((state_val_8633 === 7))
{var inst_8617 = (state_8632[7]);var inst_8627 = (state_8632[2]);var inst_8628 = cljs.core.async.untap.call(null,mult,inst_8617);var state_8632__$1 = (function (){var statearr_8635 = state_8632;(statearr_8635[8] = inst_8627);
return statearr_8635;
})();var statearr_8636_8653 = state_8632__$1;(statearr_8636_8653[2] = inst_8628);
(statearr_8636_8653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8633 === 6))
{var state_8632__$1 = state_8632;var statearr_8637_8654 = state_8632__$1;(statearr_8637_8654[2] = null);
(statearr_8637_8654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8633 === 5))
{var inst_8617 = (state_8632[7]);var inst_8620 = (state_8632[9]);var inst_8622 = (function (){var val = inst_8620;var temp__4092__auto__ = inst_8620;var ch = inst_8617;return ((function (val,temp__4092__auto__,ch,inst_8617,inst_8620,state_val_8633){
return (function (){return cljs.core.async.put_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,out_mult),val);
});
;})(val,temp__4092__auto__,ch,inst_8617,inst_8620,state_val_8633))
})();var inst_8623 = setTimeout(inst_8622,delay);var tmp8634 = inst_8617;var inst_8617__$1 = tmp8634;var state_8632__$1 = (function (){var statearr_8638 = state_8632;(statearr_8638[7] = inst_8617__$1);
(statearr_8638[10] = inst_8623);
return statearr_8638;
})();var statearr_8639_8655 = state_8632__$1;(statearr_8639_8655[2] = null);
(statearr_8639_8655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8633 === 4))
{var inst_8620 = (state_8632[9]);var inst_8620__$1 = (state_8632[2]);var state_8632__$1 = (function (){var statearr_8640 = state_8632;(statearr_8640[9] = inst_8620__$1);
return statearr_8640;
})();if(cljs.core.truth_(inst_8620__$1))
{var statearr_8641_8656 = state_8632__$1;(statearr_8641_8656[1] = 5);
} else
{var statearr_8642_8657 = state_8632__$1;(statearr_8642_8657[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8633 === 3))
{var inst_8630 = (state_8632[2]);var state_8632__$1 = state_8632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8632__$1,inst_8630);
} else
{if((state_val_8633 === 2))
{var inst_8617 = (state_8632[7]);var state_8632__$1 = state_8632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8632__$1,4,inst_8617);
} else
{if((state_val_8633 === 1))
{var inst_8615 = cljs.core.async.chan.call(null);var inst_8616 = cljs.core.async.tap.call(null,mult,inst_8615);var inst_8617 = inst_8616;var state_8632__$1 = (function (){var statearr_8643 = state_8632;(statearr_8643[7] = inst_8617);
return statearr_8643;
})();var statearr_8644_8658 = state_8632__$1;(statearr_8644_8658[2] = null);
(statearr_8644_8658[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_8648 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_8648[0] = state_machine__5581__auto__);
(statearr_8648[1] = 1);
return statearr_8648;
});
var state_machine__5581__auto____1 = (function (state_8632){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_8632);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e8649){if((e8649 instanceof Object))
{var ex__5584__auto__ = e8649;var statearr_8650_8659 = state_8632;(statearr_8650_8659[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8660 = state_8632;
state_8632 = G__8660;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_8632){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_8632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_8651 = f__5596__auto__.call(null);(statearr_8651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___8652);
return statearr_8651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return out_mult;
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