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
ewen.dragdrop.convert_event_dispatcher = (function convert_event_dispatcher(event){var G__20809 = domina.events.event_type.call(null,event);if(cljs.core._EQ_.call(null,"mouseup",G__20809))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drop","drop",1016996449));
} else
{if(cljs.core._EQ_.call(null,"mousedown",G__20809))
{return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"handle","handle",4084294042));
} else
{if(cljs.core._EQ_.call(null,"mousemove",G__20809))
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
return (function (p1__20810_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__20810_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop.event_types),listen_fn));var c__5595__auto___20841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_20831){var state_val_20832 = (state_20831[1]);if((state_val_20832 === 2))
{var inst_20827 = (state_20831[2]);var inst_20828 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_20829 = cljs.core.dorun.call(null,inst_20828);var state_20831__$1 = (function (){var statearr_20833 = state_20831;(statearr_20833[7] = inst_20827);
return statearr_20833;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20831__$1,inst_20829);
} else
{if((state_val_20832 === 1))
{var state_20831__$1 = state_20831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20831__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_20837 = [null,null,null,null,null,null,null,null];(statearr_20837[0] = state_machine__5581__auto__);
(statearr_20837[1] = 1);
return statearr_20837;
});
var state_machine__5581__auto____1 = (function (state_20831){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_20831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e20838){if((e20838 instanceof Object))
{var ex__5584__auto__ = e20838;var statearr_20839_20842 = state_20831;(statearr_20839_20842[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20843 = state_20831;
state_20831 = G__20843;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_20831){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_20831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_20840 = f__5596__auto__.call(null);(statearr_20840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___20841);
return statearr_20840;
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
var c__5595__auto___21047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_20979){var state_val_20980 = (state_20979[1]);if((state_val_20980 === 7))
{var inst_20948 = (state_20979[7]);var inst_20974 = (state_20979[2]);var inst_20975 = cljs.core.async.untap.call(null,down_events,inst_20948);var state_20979__$1 = (function (){var statearr_20982 = state_20979;(statearr_20982[8] = inst_20974);
return statearr_20982;
})();var statearr_20983_21048 = state_20979__$1;(statearr_20983_21048[2] = inst_20975);
(statearr_20983_21048[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20980 === 6))
{var state_20979__$1 = state_20979;var statearr_20984_21049 = state_20979__$1;(statearr_20984_21049[2] = null);
(statearr_20984_21049[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20980 === 5))
{var inst_20948 = (state_20979[7]);var inst_20951 = (state_20979[9]);var inst_20953 = (function (){var down_e = inst_20951;var temp__4092__auto__ = inst_20951;var down_ch = inst_20948;return ((function (down_e,temp__4092__auto__,down_ch,inst_20948,inst_20951,state_val_20980){
return (function (p1__20844_SHARP_){return (ewen.dragdrop.timestamp.call(null,p1__20844_SHARP_) > ewen.dragdrop.timestamp.call(null,down_e));
});
;})(down_e,temp__4092__auto__,down_ch,inst_20948,inst_20951,state_val_20980))
})();var inst_20954 = cljs.core.async.put_BANG_.call(null,pred_ch,inst_20953);var inst_20955 = cljs.core.async.muxch_STAR_.call(null,out_mix);var inst_20956 = cljs.core.async.put_BANG_.call(null,inst_20955,inst_20951);var inst_20957 = [move_ch];var inst_20958 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_20959 = [false];var inst_20960 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20958,inst_20959);var inst_20961 = [inst_20960];var inst_20962 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20957,inst_20961);var inst_20963 = cljs.core.async.toggle.call(null,out_mix,inst_20962);var inst_20964 = [up_ch];var inst_20965 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_20966 = [false];var inst_20967 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20965,inst_20966);var inst_20968 = [inst_20967];var inst_20969 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20964,inst_20968);var inst_20970 = cljs.core.async.toggle.call(null,out_mix,inst_20969);var tmp20981 = inst_20948;var inst_20948__$1 = tmp20981;var state_20979__$1 = (function (){var statearr_20985 = state_20979;(statearr_20985[10] = inst_20970);
(statearr_20985[11] = inst_20963);
(statearr_20985[7] = inst_20948__$1);
(statearr_20985[12] = inst_20954);
(statearr_20985[13] = inst_20956);
return statearr_20985;
})();var statearr_20986_21050 = state_20979__$1;(statearr_20986_21050[2] = null);
(statearr_20986_21050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20980 === 4))
{var inst_20951 = (state_20979[9]);var inst_20951__$1 = (state_20979[2]);var state_20979__$1 = (function (){var statearr_20987 = state_20979;(statearr_20987[9] = inst_20951__$1);
return statearr_20987;
})();if(cljs.core.truth_(inst_20951__$1))
{var statearr_20988_21051 = state_20979__$1;(statearr_20988_21051[1] = 5);
} else
{var statearr_20989_21052 = state_20979__$1;(statearr_20989_21052[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20980 === 3))
{var inst_20977 = (state_20979[2]);var state_20979__$1 = state_20979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20979__$1,inst_20977);
} else
{if((state_val_20980 === 2))
{var inst_20948 = (state_20979[7]);var state_20979__$1 = state_20979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20979__$1,4,inst_20948);
} else
{if((state_val_20980 === 1))
{var inst_20946 = cljs.core.async.chan.call(null);var inst_20947 = cljs.core.async.tap.call(null,down_events,inst_20946);var inst_20948 = inst_20947;var state_20979__$1 = (function (){var statearr_20990 = state_20979;(statearr_20990[7] = inst_20948);
return statearr_20990;
})();var statearr_20991_21053 = state_20979__$1;(statearr_20991_21053[2] = null);
(statearr_20991_21053[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_20995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20995[0] = state_machine__5581__auto__);
(statearr_20995[1] = 1);
return statearr_20995;
});
var state_machine__5581__auto____1 = (function (state_20979){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_20979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e20996){if((e20996 instanceof Object))
{var ex__5584__auto__ = e20996;var statearr_20997_21054 = state_20979;(statearr_20997_21054[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21055 = state_20979;
state_20979 = G__21055;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_20979){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_20979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_20998 = f__5596__auto__.call(null);(statearr_20998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21047);
return statearr_20998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var c__5595__auto___21056 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_21028){var state_val_21029 = (state_21028[1]);if((state_val_21029 === 7))
{var inst_21001 = (state_21028[7]);var inst_21023 = (state_21028[2]);var inst_21024 = cljs.core.async.untap.call(null,up_events,inst_21001);var state_21028__$1 = (function (){var statearr_21031 = state_21028;(statearr_21031[8] = inst_21023);
return statearr_21031;
})();var statearr_21032_21057 = state_21028__$1;(statearr_21032_21057[2] = inst_21024);
(statearr_21032_21057[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21029 === 6))
{var state_21028__$1 = state_21028;var statearr_21033_21058 = state_21028__$1;(statearr_21033_21058[2] = null);
(statearr_21033_21058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21029 === 5))
{var inst_21001 = (state_21028[7]);var inst_21006 = [move_ch];var inst_21007 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_21008 = [true];var inst_21009 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21007,inst_21008);var inst_21010 = [inst_21009];var inst_21011 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21006,inst_21010);var inst_21012 = cljs.core.async.toggle.call(null,out_mix,inst_21011);var inst_21013 = [up_ch];var inst_21014 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_21015 = [true];var inst_21016 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21014,inst_21015);var inst_21017 = [inst_21016];var inst_21018 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21013,inst_21017);var inst_21019 = cljs.core.async.toggle.call(null,out_mix,inst_21018);var tmp21030 = inst_21001;var inst_21001__$1 = tmp21030;var state_21028__$1 = (function (){var statearr_21034 = state_21028;(statearr_21034[9] = inst_21012);
(statearr_21034[7] = inst_21001__$1);
(statearr_21034[10] = inst_21019);
return statearr_21034;
})();var statearr_21035_21059 = state_21028__$1;(statearr_21035_21059[2] = null);
(statearr_21035_21059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21029 === 4))
{var inst_21004 = (state_21028[2]);var state_21028__$1 = state_21028;if(cljs.core.truth_(inst_21004))
{var statearr_21036_21060 = state_21028__$1;(statearr_21036_21060[1] = 5);
} else
{var statearr_21037_21061 = state_21028__$1;(statearr_21037_21061[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21029 === 3))
{var inst_21026 = (state_21028[2]);var state_21028__$1 = state_21028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21028__$1,inst_21026);
} else
{if((state_val_21029 === 2))
{var inst_21001 = (state_21028[7]);var state_21028__$1 = state_21028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21028__$1,4,inst_21001);
} else
{if((state_val_21029 === 1))
{var inst_20999 = cljs.core.async.chan.call(null);var inst_21000 = cljs.core.async.tap.call(null,up_events,inst_20999);var inst_21001 = inst_21000;var state_21028__$1 = (function (){var statearr_21038 = state_21028;(statearr_21038[7] = inst_21001);
return statearr_21038;
})();var statearr_21039_21062 = state_21028__$1;(statearr_21039_21062[2] = null);
(statearr_21039_21062[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_21043 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21043[0] = state_machine__5581__auto__);
(statearr_21043[1] = 1);
return statearr_21043;
});
var state_machine__5581__auto____1 = (function (state_21028){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_21028);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e21044){if((e21044 instanceof Object))
{var ex__5584__auto__ = e21044;var statearr_21045_21063 = state_21028;(statearr_21045_21063[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21064 = state_21028;
state_21028 = G__21064;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_21028){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_21028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_21046 = f__5596__auto__.call(null);(statearr_21046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21056);
return statearr_21046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});
ewen.dragdrop.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.async_plus.map_LT_.call(null,ewen.dragdrop.convert_event_dispatcher,ewen.dragdrop.create_dd_raw.call(null,down_events,move_events,up_events));
});
ewen.dragdrop.long_press = (function long_press(down_events,up_events,delay_time){var long_press_events = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___21185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_21159){var state_val_21160 = (state_21159[1]);if((state_val_21160 === 1))
{var inst_21125 = cljs.core.async.chan.call(null);var inst_21126 = cljs.core.async.tap.call(null,down_events,inst_21125);var inst_21127 = inst_21126;var state_21159__$1 = (function (){var statearr_21161 = state_21159;(statearr_21161[7] = inst_21127);
return statearr_21161;
})();var statearr_21162_21186 = state_21159__$1;(statearr_21162_21186[2] = null);
(statearr_21162_21186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 2))
{var inst_21127 = (state_21159[7]);var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21159__$1,4,inst_21127);
} else
{if((state_val_21160 === 3))
{var inst_21157 = (state_21159[2]);var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21159__$1,inst_21157);
} else
{if((state_val_21160 === 4))
{var inst_21130 = (state_21159[8]);var inst_21130__$1 = (state_21159[2]);var state_21159__$1 = (function (){var statearr_21163 = state_21159;(statearr_21163[8] = inst_21130__$1);
return statearr_21163;
})();if(cljs.core.truth_(inst_21130__$1))
{var statearr_21164_21187 = state_21159__$1;(statearr_21164_21187[1] = 5);
} else
{var statearr_21165_21188 = state_21159__$1;(statearr_21165_21188[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 5))
{var inst_21134 = (state_21159[9]);var inst_21133 = cljs.core.async.chan.call(null);var inst_21134__$1 = cljs.core.async.tap.call(null,up_events,inst_21133);var inst_21135 = cljs.core.async.timeout.call(null,delay_time);var inst_21136 = [inst_21135,inst_21134__$1];var inst_21137 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21136,null));var state_21159__$1 = (function (){var statearr_21166 = state_21159;(statearr_21166[9] = inst_21134__$1);
return statearr_21166;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21159__$1,8,inst_21137);
} else
{if((state_val_21160 === 6))
{var state_21159__$1 = state_21159;var statearr_21167_21189 = state_21159__$1;(statearr_21167_21189[2] = null);
(statearr_21167_21189[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 7))
{var inst_21127 = (state_21159[7]);var inst_21154 = (state_21159[2]);var inst_21155 = cljs.core.async.untap.call(null,down_events,inst_21127);var state_21159__$1 = (function (){var statearr_21168 = state_21159;(statearr_21168[10] = inst_21154);
return statearr_21168;
})();var statearr_21169_21190 = state_21159__$1;(statearr_21169_21190[2] = inst_21155);
(statearr_21169_21190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 8))
{var inst_21134 = (state_21159[9]);var inst_21139 = (state_21159[2]);var inst_21140 = cljs.core.nth.call(null,inst_21139,0,null);var inst_21141 = cljs.core.nth.call(null,inst_21139,1,null);var inst_21142 = cljs.core.async.untap.call(null,up_events,inst_21134);var inst_21143 = cljs.core.not_EQ_.call(null,inst_21134,inst_21141);var state_21159__$1 = (function (){var statearr_21170 = state_21159;(statearr_21170[11] = inst_21142);
(statearr_21170[12] = inst_21140);
return statearr_21170;
})();if(inst_21143)
{var statearr_21171_21191 = state_21159__$1;(statearr_21171_21191[1] = 9);
} else
{var statearr_21172_21192 = state_21159__$1;(statearr_21172_21192[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 9))
{var inst_21130 = (state_21159[8]);var inst_21145 = cljs.core.async.muxch_STAR_.call(null,long_press_events);var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21159__$1,12,inst_21145,inst_21130);
} else
{if((state_val_21160 === 10))
{var state_21159__$1 = state_21159;var statearr_21174_21193 = state_21159__$1;(statearr_21174_21193[2] = null);
(statearr_21174_21193[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 11))
{var inst_21127 = (state_21159[7]);var inst_21150 = (state_21159[2]);var tmp21173 = inst_21127;var inst_21127__$1 = tmp21173;var state_21159__$1 = (function (){var statearr_21175 = state_21159;(statearr_21175[7] = inst_21127__$1);
(statearr_21175[13] = inst_21150);
return statearr_21175;
})();var statearr_21176_21194 = state_21159__$1;(statearr_21176_21194[2] = null);
(statearr_21176_21194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21160 === 12))
{var inst_21147 = (state_21159[2]);var state_21159__$1 = state_21159;var statearr_21177_21195 = state_21159__$1;(statearr_21177_21195[2] = inst_21147);
(statearr_21177_21195[1] = 11);
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
var state_machine__5581__auto____0 = (function (){var statearr_21181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21181[0] = state_machine__5581__auto__);
(statearr_21181[1] = 1);
return statearr_21181;
});
var state_machine__5581__auto____1 = (function (state_21159){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_21159);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e21182){if((e21182 instanceof Object))
{var ex__5584__auto__ = e21182;var statearr_21183_21196 = state_21159;(statearr_21183_21196[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21197 = state_21159;
state_21159 = G__21197;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_21159){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_21159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_21184 = f__5596__auto__.call(null);(statearr_21184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___21185);
return statearr_21184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return long_press_events;
});

//# sourceMappingURL=dragdrop.js.map