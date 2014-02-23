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
ewen.dragdrop.event__GT_dd_event = (function event__GT_dd_event(event,event_type){return new cljs.core.PersistentArrayMap.fromArray([event_type,domina.events.target.call(null,event),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"clientX","clientX",1874491743).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"clientY","clientY",1874491744).cljs$core$IFn$_invoke$arity$1(event)], true, false);
});
ewen.dragdrop.convert_event_dispatcher = (function convert_event_dispatcher(event){var G__18427 = domina.events.event_type.call(null,event);if(cljs.core._EQ_.call(null,"mouseup",G__18427))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drop","drop",1016996449));
} else
{if(cljs.core._EQ_.call(null,"mousedown",G__18427))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"handle","handle",4084294042));
} else
{if(cljs.core._EQ_.call(null,"mousemove",G__18427))
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
return (function (p1__18428_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__18428_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop.event_types),listen_fn));var c__5595__auto___18459 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18449){var state_val_18450 = (state_18449[1]);if((state_val_18450 === 2))
{var inst_18445 = (state_18449[2]);var inst_18446 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_18447 = cljs.core.dorun.call(null,inst_18446);var state_18449__$1 = (function (){var statearr_18451 = state_18449;(statearr_18451[7] = inst_18445);
return statearr_18451;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18449__$1,inst_18447);
} else
{if((state_val_18450 === 1))
{var state_18449__$1 = state_18449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18449__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_18455 = [null,null,null,null,null,null,null,null];(statearr_18455[0] = state_machine__5581__auto__);
(statearr_18455[1] = 1);
return statearr_18455;
});
var state_machine__5581__auto____1 = (function (state_18449){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18449);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18456){if((e18456 instanceof Object))
{var ex__5584__auto__ = e18456;var statearr_18457_18460 = state_18449;(statearr_18457_18460[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18461 = state_18449;
state_18449 = G__18461;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18449){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18458 = f__5596__auto__.call(null);(statearr_18458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18459);
return statearr_18458;
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
var c__5595__auto___18665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18597){var state_val_18598 = (state_18597[1]);if((state_val_18598 === 7))
{var inst_18566 = (state_18597[7]);var inst_18592 = (state_18597[2]);var inst_18593 = cljs.core.async.untap.call(null,down_events,inst_18566);var state_18597__$1 = (function (){var statearr_18600 = state_18597;(statearr_18600[8] = inst_18592);
return statearr_18600;
})();var statearr_18601_18666 = state_18597__$1;(statearr_18601_18666[2] = inst_18593);
(statearr_18601_18666[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18598 === 6))
{var state_18597__$1 = state_18597;var statearr_18602_18667 = state_18597__$1;(statearr_18602_18667[2] = null);
(statearr_18602_18667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18598 === 5))
{var inst_18566 = (state_18597[7]);var inst_18569 = (state_18597[9]);var inst_18571 = (function (){var down_e = inst_18569;var temp__4092__auto__ = inst_18569;var down_ch = inst_18566;return ((function (down_e,temp__4092__auto__,down_ch,inst_18566,inst_18569,state_val_18598){
return (function (p1__18462_SHARP_){return (ewen.dragdrop.timestamp.call(null,p1__18462_SHARP_) > ewen.dragdrop.timestamp.call(null,down_e));
});
;})(down_e,temp__4092__auto__,down_ch,inst_18566,inst_18569,state_val_18598))
})();var inst_18572 = cljs.core.async.put_BANG_.call(null,pred_ch,inst_18571);var inst_18573 = cljs.core.async.muxch_STAR_.call(null,out_mix);var inst_18574 = cljs.core.async.put_BANG_.call(null,inst_18573,inst_18569);var inst_18575 = [move_ch];var inst_18576 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18577 = [false];var inst_18578 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18576,inst_18577);var inst_18579 = [inst_18578];var inst_18580 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18575,inst_18579);var inst_18581 = cljs.core.async.toggle.call(null,out_mix,inst_18580);var inst_18582 = [up_ch];var inst_18583 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18584 = [false];var inst_18585 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18583,inst_18584);var inst_18586 = [inst_18585];var inst_18587 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18582,inst_18586);var inst_18588 = cljs.core.async.toggle.call(null,out_mix,inst_18587);var tmp18599 = inst_18566;var inst_18566__$1 = tmp18599;var state_18597__$1 = (function (){var statearr_18603 = state_18597;(statearr_18603[7] = inst_18566__$1);
(statearr_18603[10] = inst_18581);
(statearr_18603[11] = inst_18572);
(statearr_18603[12] = inst_18574);
(statearr_18603[13] = inst_18588);
return statearr_18603;
})();var statearr_18604_18668 = state_18597__$1;(statearr_18604_18668[2] = null);
(statearr_18604_18668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18598 === 4))
{var inst_18569 = (state_18597[9]);var inst_18569__$1 = (state_18597[2]);var state_18597__$1 = (function (){var statearr_18605 = state_18597;(statearr_18605[9] = inst_18569__$1);
return statearr_18605;
})();if(cljs.core.truth_(inst_18569__$1))
{var statearr_18606_18669 = state_18597__$1;(statearr_18606_18669[1] = 5);
} else
{var statearr_18607_18670 = state_18597__$1;(statearr_18607_18670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18598 === 3))
{var inst_18595 = (state_18597[2]);var state_18597__$1 = state_18597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18597__$1,inst_18595);
} else
{if((state_val_18598 === 2))
{var inst_18566 = (state_18597[7]);var state_18597__$1 = state_18597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18597__$1,4,inst_18566);
} else
{if((state_val_18598 === 1))
{var inst_18564 = cljs.core.async.chan.call(null);var inst_18565 = cljs.core.async.tap.call(null,down_events,inst_18564);var inst_18566 = inst_18565;var state_18597__$1 = (function (){var statearr_18608 = state_18597;(statearr_18608[7] = inst_18566);
return statearr_18608;
})();var statearr_18609_18671 = state_18597__$1;(statearr_18609_18671[2] = null);
(statearr_18609_18671[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_18613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18613[0] = state_machine__5581__auto__);
(statearr_18613[1] = 1);
return statearr_18613;
});
var state_machine__5581__auto____1 = (function (state_18597){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18597);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18614){if((e18614 instanceof Object))
{var ex__5584__auto__ = e18614;var statearr_18615_18672 = state_18597;(statearr_18615_18672[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18673 = state_18597;
state_18597 = G__18673;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18597){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18616 = f__5596__auto__.call(null);(statearr_18616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18665);
return statearr_18616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var c__5595__auto___18674 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18646){var state_val_18647 = (state_18646[1]);if((state_val_18647 === 7))
{var inst_18619 = (state_18646[7]);var inst_18641 = (state_18646[2]);var inst_18642 = cljs.core.async.untap.call(null,up_events,inst_18619);var state_18646__$1 = (function (){var statearr_18649 = state_18646;(statearr_18649[8] = inst_18641);
return statearr_18649;
})();var statearr_18650_18675 = state_18646__$1;(statearr_18650_18675[2] = inst_18642);
(statearr_18650_18675[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 6))
{var state_18646__$1 = state_18646;var statearr_18651_18676 = state_18646__$1;(statearr_18651_18676[2] = null);
(statearr_18651_18676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 5))
{var inst_18619 = (state_18646[7]);var inst_18624 = [move_ch];var inst_18625 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18626 = [true];var inst_18627 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18625,inst_18626);var inst_18628 = [inst_18627];var inst_18629 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18624,inst_18628);var inst_18630 = cljs.core.async.toggle.call(null,out_mix,inst_18629);var inst_18631 = [up_ch];var inst_18632 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18633 = [true];var inst_18634 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18632,inst_18633);var inst_18635 = [inst_18634];var inst_18636 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18631,inst_18635);var inst_18637 = cljs.core.async.toggle.call(null,out_mix,inst_18636);var tmp18648 = inst_18619;var inst_18619__$1 = tmp18648;var state_18646__$1 = (function (){var statearr_18652 = state_18646;(statearr_18652[9] = inst_18637);
(statearr_18652[10] = inst_18630);
(statearr_18652[7] = inst_18619__$1);
return statearr_18652;
})();var statearr_18653_18677 = state_18646__$1;(statearr_18653_18677[2] = null);
(statearr_18653_18677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 4))
{var inst_18622 = (state_18646[2]);var state_18646__$1 = state_18646;if(cljs.core.truth_(inst_18622))
{var statearr_18654_18678 = state_18646__$1;(statearr_18654_18678[1] = 5);
} else
{var statearr_18655_18679 = state_18646__$1;(statearr_18655_18679[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 3))
{var inst_18644 = (state_18646[2]);var state_18646__$1 = state_18646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18646__$1,inst_18644);
} else
{if((state_val_18647 === 2))
{var inst_18619 = (state_18646[7]);var state_18646__$1 = state_18646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18646__$1,4,inst_18619);
} else
{if((state_val_18647 === 1))
{var inst_18617 = cljs.core.async.chan.call(null);var inst_18618 = cljs.core.async.tap.call(null,up_events,inst_18617);var inst_18619 = inst_18618;var state_18646__$1 = (function (){var statearr_18656 = state_18646;(statearr_18656[7] = inst_18619);
return statearr_18656;
})();var statearr_18657_18680 = state_18646__$1;(statearr_18657_18680[2] = null);
(statearr_18657_18680[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_18661 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18661[0] = state_machine__5581__auto__);
(statearr_18661[1] = 1);
return statearr_18661;
});
var state_machine__5581__auto____1 = (function (state_18646){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18662){if((e18662 instanceof Object))
{var ex__5584__auto__ = e18662;var statearr_18663_18681 = state_18646;(statearr_18663_18681[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18682 = state_18646;
state_18646 = G__18682;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18646){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18664 = f__5596__auto__.call(null);(statearr_18664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18674);
return statearr_18664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});
ewen.dragdrop.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.async_plus.map_LT_.call(null,ewen.dragdrop.convert_event_dispatcher,ewen.dragdrop.create_dd_raw.call(null,down_events,move_events,up_events));
});
ewen.dragdrop.long_press = (function long_press(down_events,up_events,delay_time){var long_press_events = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___18803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18777){var state_val_18778 = (state_18777[1]);if((state_val_18778 === 1))
{var inst_18743 = cljs.core.async.chan.call(null);var inst_18744 = cljs.core.async.tap.call(null,down_events,inst_18743);var inst_18745 = inst_18744;var state_18777__$1 = (function (){var statearr_18779 = state_18777;(statearr_18779[7] = inst_18745);
return statearr_18779;
})();var statearr_18780_18804 = state_18777__$1;(statearr_18780_18804[2] = null);
(statearr_18780_18804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 2))
{var inst_18745 = (state_18777[7]);var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18777__$1,4,inst_18745);
} else
{if((state_val_18778 === 3))
{var inst_18775 = (state_18777[2]);var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18777__$1,inst_18775);
} else
{if((state_val_18778 === 4))
{var inst_18748 = (state_18777[8]);var inst_18748__$1 = (state_18777[2]);var state_18777__$1 = (function (){var statearr_18781 = state_18777;(statearr_18781[8] = inst_18748__$1);
return statearr_18781;
})();if(cljs.core.truth_(inst_18748__$1))
{var statearr_18782_18805 = state_18777__$1;(statearr_18782_18805[1] = 5);
} else
{var statearr_18783_18806 = state_18777__$1;(statearr_18783_18806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 5))
{var inst_18752 = (state_18777[9]);var inst_18751 = cljs.core.async.chan.call(null);var inst_18752__$1 = cljs.core.async.tap.call(null,up_events,inst_18751);var inst_18753 = cljs.core.async.timeout.call(null,delay_time);var inst_18754 = [inst_18753,inst_18752__$1];var inst_18755 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18754,null));var state_18777__$1 = (function (){var statearr_18784 = state_18777;(statearr_18784[9] = inst_18752__$1);
return statearr_18784;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18777__$1,8,inst_18755);
} else
{if((state_val_18778 === 6))
{var state_18777__$1 = state_18777;var statearr_18785_18807 = state_18777__$1;(statearr_18785_18807[2] = null);
(statearr_18785_18807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 7))
{var inst_18745 = (state_18777[7]);var inst_18772 = (state_18777[2]);var inst_18773 = cljs.core.async.untap.call(null,down_events,inst_18745);var state_18777__$1 = (function (){var statearr_18786 = state_18777;(statearr_18786[10] = inst_18772);
return statearr_18786;
})();var statearr_18787_18808 = state_18777__$1;(statearr_18787_18808[2] = inst_18773);
(statearr_18787_18808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 8))
{var inst_18752 = (state_18777[9]);var inst_18757 = (state_18777[2]);var inst_18758 = cljs.core.nth.call(null,inst_18757,0,null);var inst_18759 = cljs.core.nth.call(null,inst_18757,1,null);var inst_18760 = cljs.core.async.untap.call(null,up_events,inst_18752);var inst_18761 = cljs.core.not_EQ_.call(null,inst_18752,inst_18759);var state_18777__$1 = (function (){var statearr_18788 = state_18777;(statearr_18788[11] = inst_18760);
(statearr_18788[12] = inst_18758);
return statearr_18788;
})();if(inst_18761)
{var statearr_18789_18809 = state_18777__$1;(statearr_18789_18809[1] = 9);
} else
{var statearr_18790_18810 = state_18777__$1;(statearr_18790_18810[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 9))
{var inst_18748 = (state_18777[8]);var inst_18763 = cljs.core.async.muxch_STAR_.call(null,long_press_events);var state_18777__$1 = state_18777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18777__$1,12,inst_18763,inst_18748);
} else
{if((state_val_18778 === 10))
{var state_18777__$1 = state_18777;var statearr_18792_18811 = state_18777__$1;(statearr_18792_18811[2] = null);
(statearr_18792_18811[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 11))
{var inst_18745 = (state_18777[7]);var inst_18768 = (state_18777[2]);var tmp18791 = inst_18745;var inst_18745__$1 = tmp18791;var state_18777__$1 = (function (){var statearr_18793 = state_18777;(statearr_18793[13] = inst_18768);
(statearr_18793[7] = inst_18745__$1);
return statearr_18793;
})();var statearr_18794_18812 = state_18777__$1;(statearr_18794_18812[2] = null);
(statearr_18794_18812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18778 === 12))
{var inst_18765 = (state_18777[2]);var state_18777__$1 = state_18777;var statearr_18795_18813 = state_18777__$1;(statearr_18795_18813[2] = inst_18765);
(statearr_18795_18813[1] = 11);
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
var state_machine__5581__auto____0 = (function (){var statearr_18799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18799[0] = state_machine__5581__auto__);
(statearr_18799[1] = 1);
return statearr_18799;
});
var state_machine__5581__auto____1 = (function (state_18777){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18800){if((e18800 instanceof Object))
{var ex__5584__auto__ = e18800;var statearr_18801_18814 = state_18777;(statearr_18801_18814[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18815 = state_18777;
state_18777 = G__18815;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18777){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18802 = f__5596__auto__.call(null);(statearr_18802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18803);
return statearr_18802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return long_press_events;
});

//# sourceMappingURL=dragdrop.js.map