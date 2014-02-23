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
ewen.dragdrop.convert_event_dispatcher = (function convert_event_dispatcher(event){if(cljs.core._EQ_.call(null,domina.events.event_type.call(null,event),cljs.core.name.call(null,new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(ewen.dragdrop.event_types))))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drag","drag",1016996006));
} else
{if(cljs.core._EQ_.call(null,domina.events.event_type.call(null,event),cljs.core.name.call(null,new cljs.core.Keyword(null,"down","down",1016993812).cljs$core$IFn$_invoke$arity$1(ewen.dragdrop.event_types))))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"handle","handle",4084294042));
} else
{if(cljs.core._EQ_.call(null,domina.events.event_type.call(null,event),cljs.core.name.call(null,new cljs.core.Keyword(null,"up","up",1013907981).cljs$core$IFn$_invoke$arity$1(ewen.dragdrop.event_types))))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drop","drop",1016996449));
} else
{return null;
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
return (function (p1__22368_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__22368_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop.event_types),listen_fn));var c__5595__auto___22399 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22389){var state_val_22390 = (state_22389[1]);if((state_val_22390 === 2))
{var inst_22385 = (state_22389[2]);var inst_22386 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_22387 = cljs.core.dorun.call(null,inst_22386);var state_22389__$1 = (function (){var statearr_22391 = state_22389;(statearr_22391[7] = inst_22385);
return statearr_22391;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22389__$1,inst_22387);
} else
{if((state_val_22390 === 1))
{var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22389__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_22395 = [null,null,null,null,null,null,null,null];(statearr_22395[0] = state_machine__5581__auto__);
(statearr_22395[1] = 1);
return statearr_22395;
});
var state_machine__5581__auto____1 = (function (state_22389){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22389);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22396){if((e22396 instanceof Object))
{var ex__5584__auto__ = e22396;var statearr_22397_22400 = state_22389;(statearr_22397_22400[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22401 = state_22389;
state_22389 = G__22401;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22389){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22398 = f__5596__auto__.call(null);(statearr_22398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___22399);
return statearr_22398;
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
var c__5595__auto___22605 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22537){var state_val_22538 = (state_22537[1]);if((state_val_22538 === 7))
{var inst_22506 = (state_22537[7]);var inst_22532 = (state_22537[2]);var inst_22533 = cljs.core.async.untap.call(null,down_events,inst_22506);var state_22537__$1 = (function (){var statearr_22540 = state_22537;(statearr_22540[8] = inst_22532);
return statearr_22540;
})();var statearr_22541_22606 = state_22537__$1;(statearr_22541_22606[2] = inst_22533);
(statearr_22541_22606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22538 === 6))
{var state_22537__$1 = state_22537;var statearr_22542_22607 = state_22537__$1;(statearr_22542_22607[2] = null);
(statearr_22542_22607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22538 === 5))
{var inst_22506 = (state_22537[7]);var inst_22509 = (state_22537[9]);var inst_22511 = (function (){var down_e = inst_22509;var temp__4092__auto__ = inst_22509;var down_ch = inst_22506;return ((function (down_e,temp__4092__auto__,down_ch,inst_22506,inst_22509,state_val_22538){
return (function (p1__22402_SHARP_){return (ewen.dragdrop.timestamp.call(null,p1__22402_SHARP_) > ewen.dragdrop.timestamp.call(null,down_e));
});
;})(down_e,temp__4092__auto__,down_ch,inst_22506,inst_22509,state_val_22538))
})();var inst_22512 = cljs.core.async.put_BANG_.call(null,pred_ch,inst_22511);var inst_22513 = cljs.core.async.muxch_STAR_.call(null,out_mix);var inst_22514 = cljs.core.async.put_BANG_.call(null,inst_22513,inst_22509);var inst_22515 = [move_ch];var inst_22516 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22517 = [false];var inst_22518 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22516,inst_22517);var inst_22519 = [inst_22518];var inst_22520 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22515,inst_22519);var inst_22521 = cljs.core.async.toggle.call(null,out_mix,inst_22520);var inst_22522 = [up_ch];var inst_22523 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22524 = [false];var inst_22525 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22523,inst_22524);var inst_22526 = [inst_22525];var inst_22527 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22522,inst_22526);var inst_22528 = cljs.core.async.toggle.call(null,out_mix,inst_22527);var tmp22539 = inst_22506;var inst_22506__$1 = tmp22539;var state_22537__$1 = (function (){var statearr_22543 = state_22537;(statearr_22543[10] = inst_22528);
(statearr_22543[7] = inst_22506__$1);
(statearr_22543[11] = inst_22521);
(statearr_22543[12] = inst_22512);
(statearr_22543[13] = inst_22514);
return statearr_22543;
})();var statearr_22544_22608 = state_22537__$1;(statearr_22544_22608[2] = null);
(statearr_22544_22608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22538 === 4))
{var inst_22509 = (state_22537[9]);var inst_22509__$1 = (state_22537[2]);var state_22537__$1 = (function (){var statearr_22545 = state_22537;(statearr_22545[9] = inst_22509__$1);
return statearr_22545;
})();if(cljs.core.truth_(inst_22509__$1))
{var statearr_22546_22609 = state_22537__$1;(statearr_22546_22609[1] = 5);
} else
{var statearr_22547_22610 = state_22537__$1;(statearr_22547_22610[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22538 === 3))
{var inst_22535 = (state_22537[2]);var state_22537__$1 = state_22537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22537__$1,inst_22535);
} else
{if((state_val_22538 === 2))
{var inst_22506 = (state_22537[7]);var state_22537__$1 = state_22537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22537__$1,4,inst_22506);
} else
{if((state_val_22538 === 1))
{var inst_22504 = cljs.core.async.chan.call(null);var inst_22505 = cljs.core.async.tap.call(null,down_events,inst_22504);var inst_22506 = inst_22505;var state_22537__$1 = (function (){var statearr_22548 = state_22537;(statearr_22548[7] = inst_22506);
return statearr_22548;
})();var statearr_22549_22611 = state_22537__$1;(statearr_22549_22611[2] = null);
(statearr_22549_22611[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_22553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22553[0] = state_machine__5581__auto__);
(statearr_22553[1] = 1);
return statearr_22553;
});
var state_machine__5581__auto____1 = (function (state_22537){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22554){if((e22554 instanceof Object))
{var ex__5584__auto__ = e22554;var statearr_22555_22612 = state_22537;(statearr_22555_22612[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22613 = state_22537;
state_22537 = G__22613;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22537){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22556 = f__5596__auto__.call(null);(statearr_22556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___22605);
return statearr_22556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var c__5595__auto___22614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22586){var state_val_22587 = (state_22586[1]);if((state_val_22587 === 7))
{var inst_22559 = (state_22586[7]);var inst_22581 = (state_22586[2]);var inst_22582 = cljs.core.async.untap.call(null,up_events,inst_22559);var state_22586__$1 = (function (){var statearr_22589 = state_22586;(statearr_22589[8] = inst_22581);
return statearr_22589;
})();var statearr_22590_22615 = state_22586__$1;(statearr_22590_22615[2] = inst_22582);
(statearr_22590_22615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22587 === 6))
{var state_22586__$1 = state_22586;var statearr_22591_22616 = state_22586__$1;(statearr_22591_22616[2] = null);
(statearr_22591_22616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22587 === 5))
{var inst_22559 = (state_22586[7]);var inst_22564 = [move_ch];var inst_22565 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22566 = [true];var inst_22567 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22565,inst_22566);var inst_22568 = [inst_22567];var inst_22569 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22564,inst_22568);var inst_22570 = cljs.core.async.toggle.call(null,out_mix,inst_22569);var inst_22571 = [up_ch];var inst_22572 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22573 = [true];var inst_22574 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22572,inst_22573);var inst_22575 = [inst_22574];var inst_22576 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22571,inst_22575);var inst_22577 = cljs.core.async.toggle.call(null,out_mix,inst_22576);var tmp22588 = inst_22559;var inst_22559__$1 = tmp22588;var state_22586__$1 = (function (){var statearr_22592 = state_22586;(statearr_22592[7] = inst_22559__$1);
(statearr_22592[9] = inst_22577);
(statearr_22592[10] = inst_22570);
return statearr_22592;
})();var statearr_22593_22617 = state_22586__$1;(statearr_22593_22617[2] = null);
(statearr_22593_22617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22587 === 4))
{var inst_22562 = (state_22586[2]);var state_22586__$1 = state_22586;if(cljs.core.truth_(inst_22562))
{var statearr_22594_22618 = state_22586__$1;(statearr_22594_22618[1] = 5);
} else
{var statearr_22595_22619 = state_22586__$1;(statearr_22595_22619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22587 === 3))
{var inst_22584 = (state_22586[2]);var state_22586__$1 = state_22586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22586__$1,inst_22584);
} else
{if((state_val_22587 === 2))
{var inst_22559 = (state_22586[7]);var state_22586__$1 = state_22586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22586__$1,4,inst_22559);
} else
{if((state_val_22587 === 1))
{var inst_22557 = cljs.core.async.chan.call(null);var inst_22558 = cljs.core.async.tap.call(null,up_events,inst_22557);var inst_22559 = inst_22558;var state_22586__$1 = (function (){var statearr_22596 = state_22586;(statearr_22596[7] = inst_22559);
return statearr_22596;
})();var statearr_22597_22620 = state_22586__$1;(statearr_22597_22620[2] = null);
(statearr_22597_22620[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_22601 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22601[0] = state_machine__5581__auto__);
(statearr_22601[1] = 1);
return statearr_22601;
});
var state_machine__5581__auto____1 = (function (state_22586){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22586);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22602){if((e22602 instanceof Object))
{var ex__5584__auto__ = e22602;var statearr_22603_22621 = state_22586;(statearr_22603_22621[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22622 = state_22586;
state_22586 = G__22622;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22586){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22604 = f__5596__auto__.call(null);(statearr_22604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___22614);
return statearr_22604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});
ewen.dragdrop.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.async_plus.map_LT_.call(null,ewen.dragdrop.convert_event_dispatcher,ewen.dragdrop.create_dd_raw.call(null,down_events,move_events,up_events));
});
ewen.dragdrop.long_press = (function long_press(down_events,up_events,delay_time){var long_press_events = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___22743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22717){var state_val_22718 = (state_22717[1]);if((state_val_22718 === 1))
{var inst_22683 = cljs.core.async.chan.call(null);var inst_22684 = cljs.core.async.tap.call(null,down_events,inst_22683);var inst_22685 = inst_22684;var state_22717__$1 = (function (){var statearr_22719 = state_22717;(statearr_22719[7] = inst_22685);
return statearr_22719;
})();var statearr_22720_22744 = state_22717__$1;(statearr_22720_22744[2] = null);
(statearr_22720_22744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 2))
{var inst_22685 = (state_22717[7]);var state_22717__$1 = state_22717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22717__$1,4,inst_22685);
} else
{if((state_val_22718 === 3))
{var inst_22715 = (state_22717[2]);var state_22717__$1 = state_22717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22717__$1,inst_22715);
} else
{if((state_val_22718 === 4))
{var inst_22688 = (state_22717[8]);var inst_22688__$1 = (state_22717[2]);var state_22717__$1 = (function (){var statearr_22721 = state_22717;(statearr_22721[8] = inst_22688__$1);
return statearr_22721;
})();if(cljs.core.truth_(inst_22688__$1))
{var statearr_22722_22745 = state_22717__$1;(statearr_22722_22745[1] = 5);
} else
{var statearr_22723_22746 = state_22717__$1;(statearr_22723_22746[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 5))
{var inst_22692 = (state_22717[9]);var inst_22691 = cljs.core.async.chan.call(null);var inst_22692__$1 = cljs.core.async.tap.call(null,up_events,inst_22691);var inst_22693 = cljs.core.async.timeout.call(null,delay_time);var inst_22694 = [inst_22693,inst_22692__$1];var inst_22695 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22694,null));var state_22717__$1 = (function (){var statearr_22724 = state_22717;(statearr_22724[9] = inst_22692__$1);
return statearr_22724;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22717__$1,8,inst_22695);
} else
{if((state_val_22718 === 6))
{var state_22717__$1 = state_22717;var statearr_22725_22747 = state_22717__$1;(statearr_22725_22747[2] = null);
(statearr_22725_22747[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 7))
{var inst_22685 = (state_22717[7]);var inst_22712 = (state_22717[2]);var inst_22713 = cljs.core.async.untap.call(null,down_events,inst_22685);var state_22717__$1 = (function (){var statearr_22726 = state_22717;(statearr_22726[10] = inst_22712);
return statearr_22726;
})();var statearr_22727_22748 = state_22717__$1;(statearr_22727_22748[2] = inst_22713);
(statearr_22727_22748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 8))
{var inst_22692 = (state_22717[9]);var inst_22697 = (state_22717[2]);var inst_22698 = cljs.core.nth.call(null,inst_22697,0,null);var inst_22699 = cljs.core.nth.call(null,inst_22697,1,null);var inst_22700 = cljs.core.async.untap.call(null,up_events,inst_22692);var inst_22701 = cljs.core.not_EQ_.call(null,inst_22692,inst_22699);var state_22717__$1 = (function (){var statearr_22728 = state_22717;(statearr_22728[11] = inst_22700);
(statearr_22728[12] = inst_22698);
return statearr_22728;
})();if(inst_22701)
{var statearr_22729_22749 = state_22717__$1;(statearr_22729_22749[1] = 9);
} else
{var statearr_22730_22750 = state_22717__$1;(statearr_22730_22750[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 9))
{var inst_22688 = (state_22717[8]);var inst_22703 = cljs.core.async.muxch_STAR_.call(null,long_press_events);var state_22717__$1 = state_22717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22717__$1,12,inst_22703,inst_22688);
} else
{if((state_val_22718 === 10))
{var state_22717__$1 = state_22717;var statearr_22732_22751 = state_22717__$1;(statearr_22732_22751[2] = null);
(statearr_22732_22751[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 11))
{var inst_22685 = (state_22717[7]);var inst_22708 = (state_22717[2]);var tmp22731 = inst_22685;var inst_22685__$1 = tmp22731;var state_22717__$1 = (function (){var statearr_22733 = state_22717;(statearr_22733[13] = inst_22708);
(statearr_22733[7] = inst_22685__$1);
return statearr_22733;
})();var statearr_22734_22752 = state_22717__$1;(statearr_22734_22752[2] = null);
(statearr_22734_22752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22718 === 12))
{var inst_22705 = (state_22717[2]);var state_22717__$1 = state_22717;var statearr_22735_22753 = state_22717__$1;(statearr_22735_22753[2] = inst_22705);
(statearr_22735_22753[1] = 11);
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
var state_machine__5581__auto____0 = (function (){var statearr_22739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22739[0] = state_machine__5581__auto__);
(statearr_22739[1] = 1);
return statearr_22739;
});
var state_machine__5581__auto____1 = (function (state_22717){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22717);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22740){if((e22740 instanceof Object))
{var ex__5584__auto__ = e22740;var statearr_22741_22754 = state_22717;(statearr_22741_22754[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22755 = state_22717;
state_22717 = G__22755;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22717){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22742 = f__5596__auto__.call(null);(statearr_22742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___22743);
return statearr_22742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return long_press_events;
});

//# sourceMappingURL=dragdrop.js.map