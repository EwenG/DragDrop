// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.dragdrop2');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('ewen.mult.async');
goog.require('ewen.mult.async');
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
return (function (p1__154877_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__154877_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop2.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop2.event_types),listen_fn));var c__5539__auto___154908 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_154898){var state_val_154899 = (state_154898[1]);if((state_val_154899 === 2))
{var inst_154894 = (state_154898[2]);var inst_154895 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_154896 = cljs.core.dorun.call(null,inst_154895);var state_154898__$1 = (function (){var statearr_154900 = state_154898;(statearr_154900[7] = inst_154894);
return statearr_154900;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154898__$1,inst_154896);
} else
{if((state_val_154899 === 1))
{var state_154898__$1 = state_154898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154898__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_154904 = [null,null,null,null,null,null,null,null];(statearr_154904[0] = state_machine__5525__auto__);
(statearr_154904[1] = 1);
return statearr_154904;
});
var state_machine__5525__auto____1 = (function (state_154898){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_154898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e154905){if((e154905 instanceof Object))
{var ex__5528__auto__ = e154905;var statearr_154906_154909 = state_154898;(statearr_154906_154909[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154910 = state_154898;
state_154898 = G__154910;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_154898){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_154898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_154907 = f__5540__auto__.call(null);(statearr_154907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___154908);
return statearr_154907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
ewen.dragdrop2.create_dd = (function create_dd(down_events,move_events,up_events){var out_ch = cljs.core.async.chan.call(null);var c__5539__auto___155085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_155050){var state_val_155051 = (state_155050[1]);if((state_val_155051 === 7))
{var inst_155046 = (state_155050[2]);var state_155050__$1 = state_155050;var statearr_155052_155086 = state_155050__$1;(statearr_155052_155086[2] = inst_155046);
(statearr_155052_155086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155051 === 6))
{var state_155050__$1 = state_155050;var statearr_155053_155087 = state_155050__$1;(statearr_155053_155087[2] = null);
(statearr_155053_155087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155051 === 5))
{var inst_155002 = (state_155050[7]);var inst_155005 = cljs.core.async.put_BANG_.call(null,out_ch,inst_155002);var inst_155040 = cljs.core.async.chan.call(null,1);var inst_155041 = (function (){var c__5539__auto____$1 = inst_155040;var down_e = inst_155002;var temp__4092__auto__ = inst_155002;return ((function (c__5539__auto____$1,down_e,temp__4092__auto__,inst_155002,inst_155005,inst_155040,state_val_155051){
return (function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = ((function (c__5539__auto____$1,down_e,temp__4092__auto__,inst_155002,inst_155005,inst_155040,state_val_155051){
return (function (state_155036){var state_val_155037 = (state_155036[1]);if((state_val_155037 === 7))
{var inst_155010 = (state_155036[7]);var inst_155011 = (state_155036[8]);var inst_155030 = (state_155036[2]);var inst_155031 = cljs.core.async.untap.call(null,move_events,inst_155010);var inst_155032 = cljs.core.async.untap.call(null,up_events,inst_155011);var state_155036__$1 = (function (){var statearr_155054 = state_155036;(statearr_155054[9] = inst_155031);
(statearr_155054[10] = inst_155030);
return statearr_155054;
})();var statearr_155055_155088 = state_155036__$1;(statearr_155055_155088[2] = inst_155032);
(statearr_155055_155088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155037 === 6))
{var state_155036__$1 = state_155036;var statearr_155056_155089 = state_155036__$1;(statearr_155056_155089[2] = null);
(statearr_155056_155089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155037 === 5))
{var inst_155010 = (state_155036[7]);var inst_155011 = (state_155036[8]);var tmp155038 = inst_155010;var tmp155039 = inst_155011;var inst_155010__$1 = tmp155038;var inst_155011__$1 = tmp155039;var state_155036__$1 = (function (){var statearr_155057 = state_155036;(statearr_155057[7] = inst_155010__$1);
(statearr_155057[8] = inst_155011__$1);
return statearr_155057;
})();var statearr_155058_155090 = state_155036__$1;(statearr_155058_155090[2] = null);
(statearr_155058_155090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155037 === 4))
{var inst_155020 = (state_155036[2]);var inst_155021 = cljs.core.nth.call(null,inst_155020,0,null);var inst_155022 = cljs.core.nth.call(null,inst_155020,1,null);var inst_155023 = domina.events.event_type.call(null,inst_155021);var inst_155024 = cljs.core.async.put_BANG_.call(null,out_ch,inst_155021);var inst_155025 = cljs.core._EQ_.call(null,"mousemove",inst_155023);var state_155036__$1 = (function (){var statearr_155059 = state_155036;(statearr_155059[11] = inst_155024);
(statearr_155059[12] = inst_155022);
return statearr_155059;
})();if(inst_155025)
{var statearr_155060_155091 = state_155036__$1;(statearr_155060_155091[1] = 5);
} else
{var statearr_155061_155092 = state_155036__$1;(statearr_155061_155092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155037 === 3))
{var inst_155034 = (state_155036[2]);var state_155036__$1 = state_155036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155036__$1,inst_155034);
} else
{if((state_val_155037 === 2))
{var inst_155010 = (state_155036[7]);var inst_155011 = (state_155036[8]);var inst_155014 = [inst_155011,inst_155010];var inst_155015 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_155014,null));var inst_155016 = [new cljs.core.Keyword(null,"priority","priority",4143410454)];var inst_155017 = [true];var inst_155018 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_155016,inst_155017);var state_155036__$1 = state_155036;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_155036__$1,4,inst_155015,inst_155018);
} else
{if((state_val_155037 === 1))
{var inst_155006 = cljs.core.async.chan.call(null);var inst_155007 = cljs.core.async.tap.call(null,move_events,inst_155006);var inst_155008 = cljs.core.async.chan.call(null);var inst_155009 = cljs.core.async.tap.call(null,up_events,inst_155008);var inst_155010 = inst_155007;var inst_155011 = inst_155009;var state_155036__$1 = (function (){var statearr_155062 = state_155036;(statearr_155062[7] = inst_155010);
(statearr_155062[8] = inst_155011);
return statearr_155062;
})();var statearr_155063_155093 = state_155036__$1;(statearr_155063_155093[2] = null);
(statearr_155063_155093[1] = 2);
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
});})(c__5539__auto____$1,down_e,temp__4092__auto__,inst_155002,inst_155005,inst_155040,state_val_155051))
;return ((function (switch__5524__auto__,c__5539__auto____$1,down_e,temp__4092__auto__,inst_155002,inst_155005,inst_155040,state_val_155051){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_155067 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_155067[0] = state_machine__5525__auto__);
(statearr_155067[1] = 1);
return statearr_155067;
});
var state_machine__5525__auto____1 = (function (state_155036){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_155036);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e155068){if((e155068 instanceof Object))
{var ex__5528__auto__ = e155068;var statearr_155069_155094 = state_155036;(statearr_155069_155094[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155036);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e155068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__155095 = state_155036;
state_155036 = G__155095;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_155036){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_155036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__,c__5539__auto____$1,down_e,temp__4092__auto__,inst_155002,inst_155005,inst_155040,state_val_155051))
})();var state__5541__auto__ = (function (){var statearr_155070 = f__5540__auto__.call(null);(statearr_155070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto____$1);
return statearr_155070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
});
;})(c__5539__auto____$1,down_e,temp__4092__auto__,inst_155002,inst_155005,inst_155040,state_val_155051))
})();var inst_155042 = cljs.core.async.impl.dispatch.run.call(null,inst_155041);var state_155050__$1 = (function (){var statearr_155071 = state_155050;(statearr_155071[8] = inst_155042);
(statearr_155071[9] = inst_155005);
return statearr_155071;
})();var statearr_155072_155096 = state_155050__$1;(statearr_155072_155096[2] = null);
(statearr_155072_155096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155051 === 4))
{var inst_155002 = (state_155050[7]);var inst_155000 = (state_155050[10]);var inst_155002__$1 = (state_155050[2]);var inst_155003 = cljs.core.async.untap.call(null,down_events,inst_155000);var state_155050__$1 = (function (){var statearr_155073 = state_155050;(statearr_155073[11] = inst_155003);
(statearr_155073[7] = inst_155002__$1);
return statearr_155073;
})();if(cljs.core.truth_(inst_155002__$1))
{var statearr_155074_155097 = state_155050__$1;(statearr_155074_155097[1] = 5);
} else
{var statearr_155075_155098 = state_155050__$1;(statearr_155075_155098[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155051 === 3))
{var inst_155048 = (state_155050[2]);var state_155050__$1 = state_155050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155050__$1,inst_155048);
} else
{if((state_val_155051 === 2))
{var inst_155000 = (state_155050[10]);var inst_154999 = cljs.core.async.chan.call(null);var inst_155000__$1 = cljs.core.async.tap.call(null,down_events,inst_154999);var state_155050__$1 = (function (){var statearr_155076 = state_155050;(statearr_155076[10] = inst_155000__$1);
return statearr_155076;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155050__$1,4,inst_155000__$1);
} else
{if((state_val_155051 === 1))
{var state_155050__$1 = state_155050;var statearr_155077_155099 = state_155050__$1;(statearr_155077_155099[2] = null);
(statearr_155077_155099[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_155081 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_155081[0] = state_machine__5525__auto__);
(statearr_155081[1] = 1);
return statearr_155081;
});
var state_machine__5525__auto____1 = (function (state_155050){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_155050);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e155082){if((e155082 instanceof Object))
{var ex__5528__auto__ = e155082;var statearr_155083_155100 = state_155050;(statearr_155083_155100[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155050);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e155082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__155101 = state_155050;
state_155050 = G__155101;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_155050){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_155050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_155084 = f__5540__auto__.call(null);(statearr_155084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___155085);
return statearr_155084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return cljs.core.async.mult.call(null,out_ch);
});

//# sourceMappingURL=dragdrop2.js.map