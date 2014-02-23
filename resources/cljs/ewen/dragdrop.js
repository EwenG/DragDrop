// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.dragdrop');
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
ewen.dragdrop.event_types = (cljs.core.truth_('ontouchstart' in window)?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"touchmove","touchmove",1378440962),new cljs.core.Keyword(null,"over","over",1017327686),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"click","click",1108654330),"tap"], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"over","over",1017327686),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"mouseclick","mouseclick",2025167733)], null));
ewen.dragdrop.event__GT_dd_event = (function event__GT_dd_event(event,event_type){if(cljs.core.truth_('ontouchstart' in window))
{return new cljs.core.PersistentArrayMap.fromArray([event_type,domina.events.target.call(null,event),new cljs.core.Keyword(null,"left","left",1017222009),domina.events.raw_event.call(null,event).getBrowserEvent().changedTouches.item(0).pageX,new cljs.core.Keyword(null,"top","top",1014019271),domina.events.raw_event.call(null,event).getBrowserEvent().changedTouches.item(0).pageY], true, false);
} else
{return new cljs.core.PersistentArrayMap.fromArray([event_type,domina.events.target.call(null,event),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"clientX","clientX",1874491743).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"clientY","clientY",1874491744).cljs$core$IFn$_invoke$arity$1(event)], true, false);
}
});
ewen.dragdrop.convert_event_dispatcher = (function convert_event_dispatcher(event){var G__21200 = domina.events.event_type.call(null,event);if(cljs.core._EQ_.call(null,"mouseup",G__21200))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drop","drop",1016996449));
} else
{if(cljs.core._EQ_.call(null,"mousedown",G__21200))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"handle","handle",4084294042));
} else
{if(cljs.core._EQ_.call(null,"mousemove",G__21200))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drag","drag",1016996006));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(domina.events.event_type.call(null,event))].join('')));
} else
{return null;
}
}
}
}
});
ewen.dragdrop.timestamp = (function timestamp(event){return domina.events.raw_event.call(null,event).getBrowserEvent().timeStamp;
});
ewen.dragdrop.extract_events = (function() {
var extract_events = null;
var extract_events__1 = (function (event_type){return extract_events.call(null,null,event_type);
});
var extract_events__2 = (function (src,event_type){var out_ch = cljs.core.async.chan.call(null);var close_ch = cljs.core.async.chan.call(null);var listen_fn = ((function (out_ch,close_ch){
return (function (p1__21201_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__21201_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop.event_types),listen_fn));var c__5595__auto___21232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_21222){var state_val_21223 = (state_21222[1]);if((state_val_21223 === 2))
{var inst_21218 = (state_21222[2]);var inst_21219 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_21220 = cljs.core.dorun.call(null,inst_21219);var state_21222__$1 = (function (){var statearr_21224 = state_21222;(statearr_21224[7] = inst_21218);
return statearr_21224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21222__$1,inst_21220);
} else
{if((state_val_21223 === 1))
{var state_21222__$1 = state_21222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21222__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_21228 = [null,null,null,null,null,null,null,null];(statearr_21228[0] = state_machine__5581__auto__);
(statearr_21228[1] = 1);
return statearr_21228;
});
var state_machine__5581__auto____1 = (function (state_21222){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_21222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e21229){if((e21229 instanceof Object))
{var ex__5584__auto__ = e21229;var statearr_21230_21233 = state_21222;(statearr_21230_21233[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21222);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21234 = state_21222;
state_21222 = G__21234;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_21222){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_21222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_21231 = f__5596__auto__.call(null);(statearr_21231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21232);
return statearr_21231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
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
ewen.dragdrop.create_dd_raw = (function create_dd_raw(down_events,move_events,up_events){var out_mix = cljs.core.async.mix.call(null,cljs.core.async.chan.call(null));var pred_ch = cljs.core.async.chan.call(null);var move_events__$1 = ewen.async_plus.filter_LT_.call(null,pred_ch,move_events);var move_ch = cljs.core.async.tap.call(null,move_events__$1,cljs.core.async.chan.call(null));var up_ch = cljs.core.async.tap.call(null,up_events,cljs.core.async.chan.call(null));cljs.core.async.toggle.call(null,out_mix,new cljs.core.PersistentArrayMap.fromArray([move_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute","mute",1017267595),true], null)], true, false));
cljs.core.async.toggle.call(null,out_mix,new cljs.core.PersistentArrayMap.fromArray([up_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute","mute",1017267595),true], null)], true, false));
var c__5595__auto___21438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_21370){var state_val_21371 = (state_21370[1]);if((state_val_21371 === 7))
{var inst_21339 = (state_21370[7]);var inst_21365 = (state_21370[2]);var inst_21366 = cljs.core.async.untap.call(null,down_events,inst_21339);var state_21370__$1 = (function (){var statearr_21373 = state_21370;(statearr_21373[8] = inst_21365);
return statearr_21373;
})();var statearr_21374_21439 = state_21370__$1;(statearr_21374_21439[2] = inst_21366);
(statearr_21374_21439[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21371 === 6))
{var state_21370__$1 = state_21370;var statearr_21375_21440 = state_21370__$1;(statearr_21375_21440[2] = null);
(statearr_21375_21440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21371 === 5))
{var inst_21342 = (state_21370[9]);var inst_21339 = (state_21370[7]);var inst_21344 = (function (){var down_e = inst_21342;var temp__4092__auto__ = inst_21342;var down_ch = inst_21339;return ((function (down_e,temp__4092__auto__,down_ch,inst_21342,inst_21339,state_val_21371){
return (function (p1__21235_SHARP_){return (ewen.dragdrop.timestamp.call(null,p1__21235_SHARP_) > ewen.dragdrop.timestamp.call(null,down_e));
});
;})(down_e,temp__4092__auto__,down_ch,inst_21342,inst_21339,state_val_21371))
})();var inst_21345 = cljs.core.async.put_BANG_.call(null,pred_ch,inst_21344);var inst_21346 = cljs.core.async.muxch_STAR_.call(null,out_mix);var inst_21347 = cljs.core.async.put_BANG_.call(null,inst_21346,inst_21342);var inst_21348 = [move_ch];var inst_21349 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_21350 = [false];var inst_21351 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21349,inst_21350);var inst_21352 = [inst_21351];var inst_21353 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21348,inst_21352);var inst_21354 = cljs.core.async.toggle.call(null,out_mix,inst_21353);var inst_21355 = [up_ch];var inst_21356 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_21357 = [false];var inst_21358 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21356,inst_21357);var inst_21359 = [inst_21358];var inst_21360 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21355,inst_21359);var inst_21361 = cljs.core.async.toggle.call(null,out_mix,inst_21360);var tmp21372 = inst_21339;var inst_21339__$1 = tmp21372;var state_21370__$1 = (function (){var statearr_21376 = state_21370;(statearr_21376[7] = inst_21339__$1);
(statearr_21376[10] = inst_21361);
(statearr_21376[11] = inst_21345);
(statearr_21376[12] = inst_21354);
(statearr_21376[13] = inst_21347);
return statearr_21376;
})();var statearr_21377_21441 = state_21370__$1;(statearr_21377_21441[2] = null);
(statearr_21377_21441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21371 === 4))
{var inst_21342 = (state_21370[9]);var inst_21342__$1 = (state_21370[2]);var state_21370__$1 = (function (){var statearr_21378 = state_21370;(statearr_21378[9] = inst_21342__$1);
return statearr_21378;
})();if(cljs.core.truth_(inst_21342__$1))
{var statearr_21379_21442 = state_21370__$1;(statearr_21379_21442[1] = 5);
} else
{var statearr_21380_21443 = state_21370__$1;(statearr_21380_21443[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21371 === 3))
{var inst_21368 = (state_21370[2]);var state_21370__$1 = state_21370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21370__$1,inst_21368);
} else
{if((state_val_21371 === 2))
{var inst_21339 = (state_21370[7]);var state_21370__$1 = state_21370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21370__$1,4,inst_21339);
} else
{if((state_val_21371 === 1))
{var inst_21337 = cljs.core.async.chan.call(null);var inst_21338 = cljs.core.async.tap.call(null,down_events,inst_21337);var inst_21339 = inst_21338;var state_21370__$1 = (function (){var statearr_21381 = state_21370;(statearr_21381[7] = inst_21339);
return statearr_21381;
})();var statearr_21382_21444 = state_21370__$1;(statearr_21382_21444[2] = null);
(statearr_21382_21444[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_21386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21386[0] = state_machine__5581__auto__);
(statearr_21386[1] = 1);
return statearr_21386;
});
var state_machine__5581__auto____1 = (function (state_21370){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_21370);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e21387){if((e21387 instanceof Object))
{var ex__5584__auto__ = e21387;var statearr_21388_21445 = state_21370;(statearr_21388_21445[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21446 = state_21370;
state_21370 = G__21446;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_21370){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_21370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_21389 = f__5596__auto__.call(null);(statearr_21389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21438);
return statearr_21389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var c__5595__auto___21447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_21419){var state_val_21420 = (state_21419[1]);if((state_val_21420 === 7))
{var inst_21392 = (state_21419[7]);var inst_21414 = (state_21419[2]);var inst_21415 = cljs.core.async.untap.call(null,up_events,inst_21392);var state_21419__$1 = (function (){var statearr_21422 = state_21419;(statearr_21422[8] = inst_21414);
return statearr_21422;
})();var statearr_21423_21448 = state_21419__$1;(statearr_21423_21448[2] = inst_21415);
(statearr_21423_21448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21420 === 6))
{var state_21419__$1 = state_21419;var statearr_21424_21449 = state_21419__$1;(statearr_21424_21449[2] = null);
(statearr_21424_21449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21420 === 5))
{var inst_21392 = (state_21419[7]);var inst_21397 = [move_ch];var inst_21398 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_21399 = [true];var inst_21400 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21398,inst_21399);var inst_21401 = [inst_21400];var inst_21402 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21397,inst_21401);var inst_21403 = cljs.core.async.toggle.call(null,out_mix,inst_21402);var inst_21404 = [up_ch];var inst_21405 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_21406 = [true];var inst_21407 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21405,inst_21406);var inst_21408 = [inst_21407];var inst_21409 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21404,inst_21408);var inst_21410 = cljs.core.async.toggle.call(null,out_mix,inst_21409);var tmp21421 = inst_21392;var inst_21392__$1 = tmp21421;var state_21419__$1 = (function (){var statearr_21425 = state_21419;(statearr_21425[9] = inst_21410);
(statearr_21425[10] = inst_21403);
(statearr_21425[7] = inst_21392__$1);
return statearr_21425;
})();var statearr_21426_21450 = state_21419__$1;(statearr_21426_21450[2] = null);
(statearr_21426_21450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21420 === 4))
{var inst_21395 = (state_21419[2]);var state_21419__$1 = state_21419;if(cljs.core.truth_(inst_21395))
{var statearr_21427_21451 = state_21419__$1;(statearr_21427_21451[1] = 5);
} else
{var statearr_21428_21452 = state_21419__$1;(statearr_21428_21452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21420 === 3))
{var inst_21417 = (state_21419[2]);var state_21419__$1 = state_21419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21419__$1,inst_21417);
} else
{if((state_val_21420 === 2))
{var inst_21392 = (state_21419[7]);var state_21419__$1 = state_21419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21419__$1,4,inst_21392);
} else
{if((state_val_21420 === 1))
{var inst_21390 = cljs.core.async.chan.call(null);var inst_21391 = cljs.core.async.tap.call(null,up_events,inst_21390);var inst_21392 = inst_21391;var state_21419__$1 = (function (){var statearr_21429 = state_21419;(statearr_21429[7] = inst_21392);
return statearr_21429;
})();var statearr_21430_21453 = state_21419__$1;(statearr_21430_21453[2] = null);
(statearr_21430_21453[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_21434 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21434[0] = state_machine__5581__auto__);
(statearr_21434[1] = 1);
return statearr_21434;
});
var state_machine__5581__auto____1 = (function (state_21419){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_21419);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e21435){if((e21435 instanceof Object))
{var ex__5584__auto__ = e21435;var statearr_21436_21454 = state_21419;(statearr_21436_21454[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21455 = state_21419;
state_21419 = G__21455;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_21419){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_21419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_21437 = f__5596__auto__.call(null);(statearr_21437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21447);
return statearr_21437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});
ewen.dragdrop.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.async_plus.map_LT_.call(null,ewen.dragdrop.convert_event_dispatcher,ewen.dragdrop.create_dd_raw.call(null,down_events,move_events,up_events));
});
ewen.dragdrop.long_press = (function long_press(down_events,up_events,delay_time){var long_press_events = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___21576 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_21550){var state_val_21551 = (state_21550[1]);if((state_val_21551 === 1))
{var inst_21516 = cljs.core.async.chan.call(null);var inst_21517 = cljs.core.async.tap.call(null,down_events,inst_21516);var inst_21518 = inst_21517;var state_21550__$1 = (function (){var statearr_21552 = state_21550;(statearr_21552[7] = inst_21518);
return statearr_21552;
})();var statearr_21553_21577 = state_21550__$1;(statearr_21553_21577[2] = null);
(statearr_21553_21577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 2))
{var inst_21518 = (state_21550[7]);var state_21550__$1 = state_21550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21550__$1,4,inst_21518);
} else
{if((state_val_21551 === 3))
{var inst_21548 = (state_21550[2]);var state_21550__$1 = state_21550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21550__$1,inst_21548);
} else
{if((state_val_21551 === 4))
{var inst_21521 = (state_21550[8]);var inst_21521__$1 = (state_21550[2]);var state_21550__$1 = (function (){var statearr_21554 = state_21550;(statearr_21554[8] = inst_21521__$1);
return statearr_21554;
})();if(cljs.core.truth_(inst_21521__$1))
{var statearr_21555_21578 = state_21550__$1;(statearr_21555_21578[1] = 5);
} else
{var statearr_21556_21579 = state_21550__$1;(statearr_21556_21579[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 5))
{var inst_21525 = (state_21550[9]);var inst_21524 = cljs.core.async.chan.call(null);var inst_21525__$1 = cljs.core.async.tap.call(null,up_events,inst_21524);var inst_21526 = cljs.core.async.timeout.call(null,delay_time);var inst_21527 = [inst_21526,inst_21525__$1];var inst_21528 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21527,null));var state_21550__$1 = (function (){var statearr_21557 = state_21550;(statearr_21557[9] = inst_21525__$1);
return statearr_21557;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21550__$1,8,inst_21528);
} else
{if((state_val_21551 === 6))
{var state_21550__$1 = state_21550;var statearr_21558_21580 = state_21550__$1;(statearr_21558_21580[2] = null);
(statearr_21558_21580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 7))
{var inst_21518 = (state_21550[7]);var inst_21545 = (state_21550[2]);var inst_21546 = cljs.core.async.untap.call(null,down_events,inst_21518);var state_21550__$1 = (function (){var statearr_21559 = state_21550;(statearr_21559[10] = inst_21545);
return statearr_21559;
})();var statearr_21560_21581 = state_21550__$1;(statearr_21560_21581[2] = inst_21546);
(statearr_21560_21581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 8))
{var inst_21525 = (state_21550[9]);var inst_21530 = (state_21550[2]);var inst_21531 = cljs.core.nth.call(null,inst_21530,0,null);var inst_21532 = cljs.core.nth.call(null,inst_21530,1,null);var inst_21533 = cljs.core.async.untap.call(null,up_events,inst_21525);var inst_21534 = cljs.core.not_EQ_.call(null,inst_21525,inst_21532);var state_21550__$1 = (function (){var statearr_21561 = state_21550;(statearr_21561[11] = inst_21533);
(statearr_21561[12] = inst_21531);
return statearr_21561;
})();if(inst_21534)
{var statearr_21562_21582 = state_21550__$1;(statearr_21562_21582[1] = 9);
} else
{var statearr_21563_21583 = state_21550__$1;(statearr_21563_21583[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 9))
{var inst_21521 = (state_21550[8]);var inst_21536 = cljs.core.async.muxch_STAR_.call(null,long_press_events);var state_21550__$1 = state_21550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21550__$1,12,inst_21536,inst_21521);
} else
{if((state_val_21551 === 10))
{var state_21550__$1 = state_21550;var statearr_21565_21584 = state_21550__$1;(statearr_21565_21584[2] = null);
(statearr_21565_21584[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 11))
{var inst_21518 = (state_21550[7]);var inst_21541 = (state_21550[2]);var tmp21564 = inst_21518;var inst_21518__$1 = tmp21564;var state_21550__$1 = (function (){var statearr_21566 = state_21550;(statearr_21566[13] = inst_21541);
(statearr_21566[7] = inst_21518__$1);
return statearr_21566;
})();var statearr_21567_21585 = state_21550__$1;(statearr_21567_21585[2] = null);
(statearr_21567_21585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21551 === 12))
{var inst_21538 = (state_21550[2]);var state_21550__$1 = state_21550;var statearr_21568_21586 = state_21550__$1;(statearr_21568_21586[2] = inst_21538);
(statearr_21568_21586[1] = 11);
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
}
}
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_21572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21572[0] = state_machine__5581__auto__);
(statearr_21572[1] = 1);
return statearr_21572;
});
var state_machine__5581__auto____1 = (function (state_21550){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_21550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e21573){if((e21573 instanceof Object))
{var ex__5584__auto__ = e21573;var statearr_21574_21587 = state_21550;(statearr_21574_21587[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21588 = state_21550;
state_21550 = G__21588;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_21550){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_21550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_21575 = f__5596__auto__.call(null);(statearr_21575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21576);
return statearr_21575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return long_press_events;
});

//# sourceMappingURL=dragdrop.js.map