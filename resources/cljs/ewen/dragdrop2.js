// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.dragdrop2');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('ewen.async_plus');
goog.require('ewen.async_plus');
goog.require('domina');
goog.require('domina.css');
goog.require('domina.events');
goog.require('domina.events');
ewen.dragdrop2.event_types = (cljs.core.truth_('ontouchstart' in window)?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"touchmove","touchmove",1378440962),new cljs.core.Keyword(null,"over","over",1017327686),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"click","click",1108654330),"tap"], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"over","over",1017327686),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"mouseclick","mouseclick",2025167733)], null));
ewen.dragdrop2.event__GT_dd_event = (function event__GT_dd_event(event,event_type){return new cljs.core.PersistentArrayMap.fromArray([event_type,domina.events.target.call(null,event),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"clientX","clientX",1874491743).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"clientY","clientY",1874491744).cljs$core$IFn$_invoke$arity$1(event)], true, false);
});
ewen.dragdrop2.extract_events = (function() {
var extract_events = null;
var extract_events__1 = (function (event_type){return extract_events.call(null,null,event_type);
});
var extract_events__2 = (function (src,event_type){var out_ch = cljs.core.async.chan.call(null);var close_ch = cljs.core.async.chan.call(null);var listen_fn = ((function (out_ch,close_ch){
return (function (p1__33995_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__33995_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop2.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop2.event_types),listen_fn));var c__5593__auto___34026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_34016){var state_val_34017 = (state_34016[1]);if((state_val_34017 === 2))
{var inst_34012 = (state_34016[2]);var inst_34013 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_34014 = cljs.core.dorun.call(null,inst_34013);var state_34016__$1 = (function (){var statearr_34018 = state_34016;(statearr_34018[7] = inst_34012);
return statearr_34018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34016__$1,inst_34014);
} else
{if((state_val_34017 === 1))
{var state_34016__$1 = state_34016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34016__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_34022 = [null,null,null,null,null,null,null,null];(statearr_34022[0] = state_machine__5579__auto__);
(statearr_34022[1] = 1);
return statearr_34022;
});
var state_machine__5579__auto____1 = (function (state_34016){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_34016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e34023){if((e34023 instanceof Object))
{var ex__5582__auto__ = e34023;var statearr_34024_34027 = state_34016;(statearr_34024_34027[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34028 = state_34016;
state_34016 = G__34028;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_34016){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_34016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_34025 = f__5594__auto__.call(null);(statearr_34025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___34026);
return statearr_34025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return cljs.core.async.mult.call(null,out_ch);
});
extract_events = function(src,event_type){
switch(arguments.length){
case 1:
return extract_events__1.call(this,src);
case 2:
return extract_events__2.call(this,src,event_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extract_events.cljs$core$IFn$_invoke$arity$1 = extract_events__1;
extract_events.cljs$core$IFn$_invoke$arity$2 = extract_events__2;
return extract_events;
})()
;
ewen.dragdrop2.create_dd = (function create_dd(down_events,move_events,up_events){var out_mix = cljs.core.async.mix.call(null,cljs.core.async.chan.call(null));var move_ch = cljs.core.async.tap.call(null,move_events,cljs.core.async.chan.call(null));var up_ch = cljs.core.async.tap.call(null,up_events,cljs.core.async.chan.call(null));cljs.core.async.toggle.call(null,out_mix,new cljs.core.PersistentArrayMap.fromArray([move_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute","mute",1017267595),true], null)], true, false));
cljs.core.async.toggle.call(null,out_mix,new cljs.core.PersistentArrayMap.fromArray([up_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute","mute",1017267595),true], null)], true, false));
var c__5593__auto___34229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_34161){var state_val_34162 = (state_34161[1]);if((state_val_34162 === 8))
{var inst_34131 = (state_34161[7]);var inst_34138 = (state_34161[2]);var inst_34139 = [move_ch];var inst_34140 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_34141 = [false];var inst_34142 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34140,inst_34141);var inst_34143 = [inst_34142];var inst_34144 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34139,inst_34143);var inst_34145 = cljs.core.async.toggle.call(null,out_mix,inst_34144);var inst_34146 = [up_ch];var inst_34147 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_34148 = [false];var inst_34149 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34147,inst_34148);var inst_34150 = [inst_34149];var inst_34151 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34146,inst_34150);var inst_34152 = cljs.core.async.toggle.call(null,out_mix,inst_34151);var tmp34163 = inst_34131;var inst_34131__$1 = tmp34163;var state_34161__$1 = (function (){var statearr_34164 = state_34161;(statearr_34164[7] = inst_34131__$1);
(statearr_34164[8] = inst_34152);
(statearr_34164[9] = inst_34138);
(statearr_34164[10] = inst_34145);
return statearr_34164;
})();var statearr_34165_34230 = state_34161__$1;(statearr_34165_34230[2] = null);
(statearr_34165_34230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34162 === 7))
{var inst_34131 = (state_34161[7]);var inst_34156 = (state_34161[2]);var inst_34157 = cljs.core.async.close_BANG_.call(null,inst_34131);var state_34161__$1 = (function (){var statearr_34166 = state_34161;(statearr_34166[11] = inst_34156);
return statearr_34166;
})();var statearr_34167_34231 = state_34161__$1;(statearr_34167_34231[2] = inst_34157);
(statearr_34167_34231[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34162 === 6))
{var state_34161__$1 = state_34161;var statearr_34168_34232 = state_34161__$1;(statearr_34168_34232[2] = null);
(statearr_34168_34232[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34162 === 5))
{var inst_34134 = (state_34161[12]);var inst_34136 = cljs.core.async.muxch_STAR_.call(null,out_mix);var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34161__$1,8,inst_34136,inst_34134);
} else
{if((state_val_34162 === 4))
{var inst_34134 = (state_34161[12]);var inst_34134__$1 = (state_34161[2]);var state_34161__$1 = (function (){var statearr_34169 = state_34161;(statearr_34169[12] = inst_34134__$1);
return statearr_34169;
})();if(cljs.core.truth_(inst_34134__$1))
{var statearr_34170_34233 = state_34161__$1;(statearr_34170_34233[1] = 5);
} else
{var statearr_34171_34234 = state_34161__$1;(statearr_34171_34234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34162 === 3))
{var inst_34159 = (state_34161[2]);var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34161__$1,inst_34159);
} else
{if((state_val_34162 === 2))
{var inst_34131 = (state_34161[7]);var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34161__$1,4,inst_34131);
} else
{if((state_val_34162 === 1))
{var inst_34129 = cljs.core.async.chan.call(null);var inst_34130 = cljs.core.async.tap.call(null,down_events,inst_34129);var inst_34131 = inst_34130;var state_34161__$1 = (function (){var statearr_34172 = state_34161;(statearr_34172[7] = inst_34131);
return statearr_34172;
})();var statearr_34173_34235 = state_34161__$1;(statearr_34173_34235[2] = null);
(statearr_34173_34235[1] = 2);
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
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_34177 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34177[0] = state_machine__5579__auto__);
(statearr_34177[1] = 1);
return statearr_34177;
});
var state_machine__5579__auto____1 = (function (state_34161){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_34161);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e34178){if((e34178 instanceof Object))
{var ex__5582__auto__ = e34178;var statearr_34179_34236 = state_34161;(statearr_34179_34236[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34161);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34237 = state_34161;
state_34161 = G__34237;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_34161){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_34161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_34180 = f__5594__auto__.call(null);(statearr_34180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___34229);
return statearr_34180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
var c__5593__auto___34238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_34210){var state_val_34211 = (state_34210[1]);if((state_val_34211 === 7))
{var inst_34183 = (state_34210[7]);var inst_34205 = (state_34210[2]);var inst_34206 = cljs.core.async.close_BANG_.call(null,inst_34183);var state_34210__$1 = (function (){var statearr_34213 = state_34210;(statearr_34213[8] = inst_34205);
return statearr_34213;
})();var statearr_34214_34239 = state_34210__$1;(statearr_34214_34239[2] = inst_34206);
(statearr_34214_34239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 6))
{var state_34210__$1 = state_34210;var statearr_34215_34240 = state_34210__$1;(statearr_34215_34240[2] = null);
(statearr_34215_34240[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 5))
{var inst_34183 = (state_34210[7]);var inst_34188 = [move_ch];var inst_34189 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_34190 = [true];var inst_34191 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34189,inst_34190);var inst_34192 = [inst_34191];var inst_34193 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34188,inst_34192);var inst_34194 = cljs.core.async.toggle.call(null,out_mix,inst_34193);var inst_34195 = [up_ch];var inst_34196 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_34197 = [true];var inst_34198 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34196,inst_34197);var inst_34199 = [inst_34198];var inst_34200 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_34195,inst_34199);var inst_34201 = cljs.core.async.toggle.call(null,out_mix,inst_34200);var tmp34212 = inst_34183;var inst_34183__$1 = tmp34212;var state_34210__$1 = (function (){var statearr_34216 = state_34210;(statearr_34216[9] = inst_34201);
(statearr_34216[7] = inst_34183__$1);
(statearr_34216[10] = inst_34194);
return statearr_34216;
})();var statearr_34217_34241 = state_34210__$1;(statearr_34217_34241[2] = null);
(statearr_34217_34241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 4))
{var inst_34186 = (state_34210[2]);var state_34210__$1 = state_34210;if(cljs.core.truth_(inst_34186))
{var statearr_34218_34242 = state_34210__$1;(statearr_34218_34242[1] = 5);
} else
{var statearr_34219_34243 = state_34210__$1;(statearr_34219_34243[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 3))
{var inst_34208 = (state_34210[2]);var state_34210__$1 = state_34210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34210__$1,inst_34208);
} else
{if((state_val_34211 === 2))
{var inst_34183 = (state_34210[7]);var state_34210__$1 = state_34210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34210__$1,4,inst_34183);
} else
{if((state_val_34211 === 1))
{var inst_34181 = cljs.core.async.chan.call(null);var inst_34182 = cljs.core.async.tap.call(null,up_events,inst_34181);var inst_34183 = inst_34182;var state_34210__$1 = (function (){var statearr_34220 = state_34210;(statearr_34220[7] = inst_34183);
return statearr_34220;
})();var statearr_34221_34244 = state_34210__$1;(statearr_34221_34244[2] = null);
(statearr_34221_34244[1] = 2);
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
var state_machine__5579__auto____0 = (function (){var statearr_34225 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34225[0] = state_machine__5579__auto__);
(statearr_34225[1] = 1);
return statearr_34225;
});
var state_machine__5579__auto____1 = (function (state_34210){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_34210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e34226){if((e34226 instanceof Object))
{var ex__5582__auto__ = e34226;var statearr_34227_34245 = state_34210;(statearr_34227_34245[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34246 = state_34210;
state_34210 = G__34246;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_34210){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_34210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_34228 = f__5594__auto__.call(null);(statearr_34228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___34238);
return statearr_34228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});

//# sourceMappingURL=dragdrop2.js.map