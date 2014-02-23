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
return (function (e){domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,e)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop.event_types),listen_fn));var c__5595__auto___22787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22777){var state_val_22778 = (state_22777[1]);if((state_val_22778 === 2))
{var inst_22773 = (state_22777[2]);var inst_22774 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_22775 = cljs.core.dorun.call(null,inst_22774);var state_22777__$1 = (function (){var statearr_22779 = state_22777;(statearr_22779[7] = inst_22773);
return statearr_22779;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22777__$1,inst_22775);
} else
{if((state_val_22778 === 1))
{var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_22783 = [null,null,null,null,null,null,null,null];(statearr_22783[0] = state_machine__5581__auto__);
(statearr_22783[1] = 1);
return statearr_22783;
});
var state_machine__5581__auto____1 = (function (state_22777){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object))
{var ex__5584__auto__ = e22784;var statearr_22785_22788 = state_22777;(statearr_22785_22788[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22789 = state_22777;
state_22777 = G__22789;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22786 = f__5596__auto__.call(null);(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___22787);
return statearr_22786;
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
var c__5595__auto___22993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22925){var state_val_22926 = (state_22925[1]);if((state_val_22926 === 7))
{var inst_22894 = (state_22925[7]);var inst_22920 = (state_22925[2]);var inst_22921 = cljs.core.async.untap.call(null,down_events,inst_22894);var state_22925__$1 = (function (){var statearr_22928 = state_22925;(statearr_22928[8] = inst_22920);
return statearr_22928;
})();var statearr_22929_22994 = state_22925__$1;(statearr_22929_22994[2] = inst_22921);
(statearr_22929_22994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22926 === 6))
{var state_22925__$1 = state_22925;var statearr_22930_22995 = state_22925__$1;(statearr_22930_22995[2] = null);
(statearr_22930_22995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22926 === 5))
{var inst_22897 = (state_22925[9]);var inst_22894 = (state_22925[7]);var inst_22899 = (function (){var down_e = inst_22897;var temp__4092__auto__ = inst_22897;var down_ch = inst_22894;return ((function (down_e,temp__4092__auto__,down_ch,inst_22897,inst_22894,state_val_22926){
return (function (p1__22790_SHARP_){return (ewen.dragdrop.timestamp.call(null,p1__22790_SHARP_) > ewen.dragdrop.timestamp.call(null,down_e));
});
;})(down_e,temp__4092__auto__,down_ch,inst_22897,inst_22894,state_val_22926))
})();var inst_22900 = cljs.core.async.put_BANG_.call(null,pred_ch,inst_22899);var inst_22901 = cljs.core.async.muxch_STAR_.call(null,out_mix);var inst_22902 = cljs.core.async.put_BANG_.call(null,inst_22901,inst_22897);var inst_22903 = [move_ch];var inst_22904 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22905 = [false];var inst_22906 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22904,inst_22905);var inst_22907 = [inst_22906];var inst_22908 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22903,inst_22907);var inst_22909 = cljs.core.async.toggle.call(null,out_mix,inst_22908);var inst_22910 = [up_ch];var inst_22911 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22912 = [false];var inst_22913 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22911,inst_22912);var inst_22914 = [inst_22913];var inst_22915 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22910,inst_22914);var inst_22916 = cljs.core.async.toggle.call(null,out_mix,inst_22915);var tmp22927 = inst_22894;var inst_22894__$1 = tmp22927;var state_22925__$1 = (function (){var statearr_22931 = state_22925;(statearr_22931[10] = inst_22916);
(statearr_22931[11] = inst_22909);
(statearr_22931[7] = inst_22894__$1);
(statearr_22931[12] = inst_22900);
(statearr_22931[13] = inst_22902);
return statearr_22931;
})();var statearr_22932_22996 = state_22925__$1;(statearr_22932_22996[2] = null);
(statearr_22932_22996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22926 === 4))
{var inst_22897 = (state_22925[9]);var inst_22897__$1 = (state_22925[2]);var state_22925__$1 = (function (){var statearr_22933 = state_22925;(statearr_22933[9] = inst_22897__$1);
return statearr_22933;
})();if(cljs.core.truth_(inst_22897__$1))
{var statearr_22934_22997 = state_22925__$1;(statearr_22934_22997[1] = 5);
} else
{var statearr_22935_22998 = state_22925__$1;(statearr_22935_22998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22926 === 3))
{var inst_22923 = (state_22925[2]);var state_22925__$1 = state_22925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22925__$1,inst_22923);
} else
{if((state_val_22926 === 2))
{var inst_22894 = (state_22925[7]);var state_22925__$1 = state_22925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22925__$1,4,inst_22894);
} else
{if((state_val_22926 === 1))
{var inst_22892 = cljs.core.async.chan.call(null);var inst_22893 = cljs.core.async.tap.call(null,down_events,inst_22892);var inst_22894 = inst_22893;var state_22925__$1 = (function (){var statearr_22936 = state_22925;(statearr_22936[7] = inst_22894);
return statearr_22936;
})();var statearr_22937_22999 = state_22925__$1;(statearr_22937_22999[2] = null);
(statearr_22937_22999[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_22941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22941[0] = state_machine__5581__auto__);
(statearr_22941[1] = 1);
return statearr_22941;
});
var state_machine__5581__auto____1 = (function (state_22925){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22942){if((e22942 instanceof Object))
{var ex__5584__auto__ = e22942;var statearr_22943_23000 = state_22925;(statearr_22943_23000[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23001 = state_22925;
state_22925 = G__23001;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22925){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22944 = f__5596__auto__.call(null);(statearr_22944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___22993);
return statearr_22944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var c__5595__auto___23002 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_22974){var state_val_22975 = (state_22974[1]);if((state_val_22975 === 7))
{var inst_22947 = (state_22974[7]);var inst_22969 = (state_22974[2]);var inst_22970 = cljs.core.async.untap.call(null,up_events,inst_22947);var state_22974__$1 = (function (){var statearr_22977 = state_22974;(statearr_22977[8] = inst_22969);
return statearr_22977;
})();var statearr_22978_23003 = state_22974__$1;(statearr_22978_23003[2] = inst_22970);
(statearr_22978_23003[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22975 === 6))
{var state_22974__$1 = state_22974;var statearr_22979_23004 = state_22974__$1;(statearr_22979_23004[2] = null);
(statearr_22979_23004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22975 === 5))
{var inst_22947 = (state_22974[7]);var inst_22952 = [move_ch];var inst_22953 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22954 = [true];var inst_22955 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22953,inst_22954);var inst_22956 = [inst_22955];var inst_22957 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22952,inst_22956);var inst_22958 = cljs.core.async.toggle.call(null,out_mix,inst_22957);var inst_22959 = [up_ch];var inst_22960 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_22961 = [true];var inst_22962 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22960,inst_22961);var inst_22963 = [inst_22962];var inst_22964 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22959,inst_22963);var inst_22965 = cljs.core.async.toggle.call(null,out_mix,inst_22964);var tmp22976 = inst_22947;var inst_22947__$1 = tmp22976;var state_22974__$1 = (function (){var statearr_22980 = state_22974;(statearr_22980[9] = inst_22958);
(statearr_22980[10] = inst_22965);
(statearr_22980[7] = inst_22947__$1);
return statearr_22980;
})();var statearr_22981_23005 = state_22974__$1;(statearr_22981_23005[2] = null);
(statearr_22981_23005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22975 === 4))
{var inst_22950 = (state_22974[2]);var state_22974__$1 = state_22974;if(cljs.core.truth_(inst_22950))
{var statearr_22982_23006 = state_22974__$1;(statearr_22982_23006[1] = 5);
} else
{var statearr_22983_23007 = state_22974__$1;(statearr_22983_23007[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22975 === 3))
{var inst_22972 = (state_22974[2]);var state_22974__$1 = state_22974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22974__$1,inst_22972);
} else
{if((state_val_22975 === 2))
{var inst_22947 = (state_22974[7]);var state_22974__$1 = state_22974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22974__$1,4,inst_22947);
} else
{if((state_val_22975 === 1))
{var inst_22945 = cljs.core.async.chan.call(null);var inst_22946 = cljs.core.async.tap.call(null,up_events,inst_22945);var inst_22947 = inst_22946;var state_22974__$1 = (function (){var statearr_22984 = state_22974;(statearr_22984[7] = inst_22947);
return statearr_22984;
})();var statearr_22985_23008 = state_22974__$1;(statearr_22985_23008[2] = null);
(statearr_22985_23008[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_22989 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22989[0] = state_machine__5581__auto__);
(statearr_22989[1] = 1);
return statearr_22989;
});
var state_machine__5581__auto____1 = (function (state_22974){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_22974);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e22990){if((e22990 instanceof Object))
{var ex__5584__auto__ = e22990;var statearr_22991_23009 = state_22974;(statearr_22991_23009[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23010 = state_22974;
state_22974 = G__23010;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_22974){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_22974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_22992 = f__5596__auto__.call(null);(statearr_22992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___23002);
return statearr_22992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});
ewen.dragdrop.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.async_plus.map_LT_.call(null,ewen.dragdrop.convert_event_dispatcher,ewen.dragdrop.create_dd_raw.call(null,down_events,move_events,up_events));
});
ewen.dragdrop.long_press = (function long_press(down_events,up_events,delay_time){var long_press_events = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___23131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_23105){var state_val_23106 = (state_23105[1]);if((state_val_23106 === 1))
{var inst_23071 = cljs.core.async.chan.call(null);var inst_23072 = cljs.core.async.tap.call(null,down_events,inst_23071);var inst_23073 = inst_23072;var state_23105__$1 = (function (){var statearr_23107 = state_23105;(statearr_23107[7] = inst_23073);
return statearr_23107;
})();var statearr_23108_23132 = state_23105__$1;(statearr_23108_23132[2] = null);
(statearr_23108_23132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 2))
{var inst_23073 = (state_23105[7]);var state_23105__$1 = state_23105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23105__$1,4,inst_23073);
} else
{if((state_val_23106 === 3))
{var inst_23103 = (state_23105[2]);var state_23105__$1 = state_23105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23105__$1,inst_23103);
} else
{if((state_val_23106 === 4))
{var inst_23076 = (state_23105[8]);var inst_23076__$1 = (state_23105[2]);var state_23105__$1 = (function (){var statearr_23109 = state_23105;(statearr_23109[8] = inst_23076__$1);
return statearr_23109;
})();if(cljs.core.truth_(inst_23076__$1))
{var statearr_23110_23133 = state_23105__$1;(statearr_23110_23133[1] = 5);
} else
{var statearr_23111_23134 = state_23105__$1;(statearr_23111_23134[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 5))
{var inst_23080 = (state_23105[9]);var inst_23079 = cljs.core.async.chan.call(null);var inst_23080__$1 = cljs.core.async.tap.call(null,up_events,inst_23079);var inst_23081 = cljs.core.async.timeout.call(null,delay_time);var inst_23082 = [inst_23081,inst_23080__$1];var inst_23083 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23082,null));var state_23105__$1 = (function (){var statearr_23112 = state_23105;(statearr_23112[9] = inst_23080__$1);
return statearr_23112;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23105__$1,8,inst_23083);
} else
{if((state_val_23106 === 6))
{var state_23105__$1 = state_23105;var statearr_23113_23135 = state_23105__$1;(statearr_23113_23135[2] = null);
(statearr_23113_23135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 7))
{var inst_23073 = (state_23105[7]);var inst_23100 = (state_23105[2]);var inst_23101 = cljs.core.async.untap.call(null,down_events,inst_23073);var state_23105__$1 = (function (){var statearr_23114 = state_23105;(statearr_23114[10] = inst_23100);
return statearr_23114;
})();var statearr_23115_23136 = state_23105__$1;(statearr_23115_23136[2] = inst_23101);
(statearr_23115_23136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 8))
{var inst_23080 = (state_23105[9]);var inst_23085 = (state_23105[2]);var inst_23086 = cljs.core.nth.call(null,inst_23085,0,null);var inst_23087 = cljs.core.nth.call(null,inst_23085,1,null);var inst_23088 = cljs.core.async.untap.call(null,up_events,inst_23080);var inst_23089 = cljs.core.not_EQ_.call(null,inst_23080,inst_23087);var state_23105__$1 = (function (){var statearr_23116 = state_23105;(statearr_23116[11] = inst_23088);
(statearr_23116[12] = inst_23086);
return statearr_23116;
})();if(inst_23089)
{var statearr_23117_23137 = state_23105__$1;(statearr_23117_23137[1] = 9);
} else
{var statearr_23118_23138 = state_23105__$1;(statearr_23118_23138[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 9))
{var inst_23076 = (state_23105[8]);var inst_23091 = cljs.core.async.muxch_STAR_.call(null,long_press_events);var state_23105__$1 = state_23105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23105__$1,12,inst_23091,inst_23076);
} else
{if((state_val_23106 === 10))
{var state_23105__$1 = state_23105;var statearr_23120_23139 = state_23105__$1;(statearr_23120_23139[2] = null);
(statearr_23120_23139[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 11))
{var inst_23073 = (state_23105[7]);var inst_23096 = (state_23105[2]);var tmp23119 = inst_23073;var inst_23073__$1 = tmp23119;var state_23105__$1 = (function (){var statearr_23121 = state_23105;(statearr_23121[7] = inst_23073__$1);
(statearr_23121[13] = inst_23096);
return statearr_23121;
})();var statearr_23122_23140 = state_23105__$1;(statearr_23122_23140[2] = null);
(statearr_23122_23140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 12))
{var inst_23093 = (state_23105[2]);var state_23105__$1 = state_23105;var statearr_23123_23141 = state_23105__$1;(statearr_23123_23141[2] = inst_23093);
(statearr_23123_23141[1] = 11);
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
var state_machine__5581__auto____0 = (function (){var statearr_23127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23127[0] = state_machine__5581__auto__);
(statearr_23127[1] = 1);
return statearr_23127;
});
var state_machine__5581__auto____1 = (function (state_23105){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_23105);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e23128){if((e23128 instanceof Object))
{var ex__5584__auto__ = e23128;var statearr_23129_23142 = state_23105;(statearr_23129_23142[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23143 = state_23105;
state_23105 = G__23143;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_23105){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_23105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_23130 = f__5596__auto__.call(null);(statearr_23130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___23131);
return statearr_23130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return long_press_events;
});

//# sourceMappingURL=dragdrop.js.map