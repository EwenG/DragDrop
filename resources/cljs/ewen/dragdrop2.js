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
ewen.dragdrop2.convert_event_dispatcher = (function convert_event_dispatcher(event){var G__18036 = domina.events.event_type.call(null,event);if(cljs.core._EQ_.call(null,"mouseup",G__18036))
{return ewen.dragdrop2.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drop","drop",1016996449));
} else
{if(cljs.core._EQ_.call(null,"mousedown",G__18036))
{return ewen.dragdrop2.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"handle","handle",4084294042));
} else
{if(cljs.core._EQ_.call(null,"mousemove",G__18036))
{return ewen.dragdrop2.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drag","drag",1016996006));
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
ewen.dragdrop2.timestamp = (function timestamp(event){return domina.events.raw_event.call(null,event).getBrowserEvent().timeStamp;
});
ewen.dragdrop2.extract_events = (function() {
var extract_events = null;
var extract_events__1 = (function (event_type){return extract_events.call(null,null,event_type);
});
var extract_events__2 = (function (src,event_type){var out_ch = cljs.core.async.chan.call(null);var close_ch = cljs.core.async.chan.call(null);var listen_fn = ((function (out_ch,close_ch){
return (function (p1__18037_SHARP_){if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,out_ch,p1__18037_SHARP_)))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,close_ch,new cljs.core.Keyword(null,"unlisten","unlisten",797899026));
}
});})(out_ch,close_ch))
;var listen_key = (cljs.core.truth_(src)?domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop2.event_types),listen_fn):domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop2.event_types),listen_fn));var c__5595__auto___18068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18058){var state_val_18059 = (state_18058[1]);if((state_val_18059 === 2))
{var inst_18054 = (state_18058[2]);var inst_18055 = cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key);var inst_18056 = cljs.core.dorun.call(null,inst_18055);var state_18058__$1 = (function (){var statearr_18060 = state_18058;(statearr_18060[7] = inst_18054);
return statearr_18060;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18058__$1,inst_18056);
} else
{if((state_val_18059 === 1))
{var state_18058__$1 = state_18058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18058__$1,2,close_ch);
} else
{return null;
}
}
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_18064 = [null,null,null,null,null,null,null,null];(statearr_18064[0] = state_machine__5581__auto__);
(statearr_18064[1] = 1);
return statearr_18064;
});
var state_machine__5581__auto____1 = (function (state_18058){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18058);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18065){if((e18065 instanceof Object))
{var ex__5584__auto__ = e18065;var statearr_18066_18069 = state_18058;(statearr_18066_18069[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18070 = state_18058;
state_18058 = G__18070;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18058){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18067 = f__5596__auto__.call(null);(statearr_18067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18068);
return statearr_18067;
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
ewen.dragdrop2.create_dd_raw = (function create_dd_raw(down_events,move_events,up_events){var out_mix = cljs.core.async.mix.call(null,cljs.core.async.chan.call(null));var pred_ch = cljs.core.async.chan.call(null);var move_events__$1 = ewen.async_plus.filter_LT_.call(null,pred_ch,move_events);var move_ch = cljs.core.async.tap.call(null,move_events__$1,cljs.core.async.chan.call(null));var up_ch = cljs.core.async.tap.call(null,up_events,cljs.core.async.chan.call(null));cljs.core.async.toggle.call(null,out_mix,new cljs.core.PersistentArrayMap.fromArray([move_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute","mute",1017267595),true], null)], true, false));
cljs.core.async.toggle.call(null,out_mix,new cljs.core.PersistentArrayMap.fromArray([up_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mute","mute",1017267595),true], null)], true, false));
var c__5595__auto___18274 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18206){var state_val_18207 = (state_18206[1]);if((state_val_18207 === 7))
{var inst_18175 = (state_18206[7]);var inst_18201 = (state_18206[2]);var inst_18202 = cljs.core.async.untap.call(null,down_events,inst_18175);var state_18206__$1 = (function (){var statearr_18209 = state_18206;(statearr_18209[8] = inst_18201);
return statearr_18209;
})();var statearr_18210_18275 = state_18206__$1;(statearr_18210_18275[2] = inst_18202);
(statearr_18210_18275[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18207 === 6))
{var state_18206__$1 = state_18206;var statearr_18211_18276 = state_18206__$1;(statearr_18211_18276[2] = null);
(statearr_18211_18276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18207 === 5))
{var inst_18178 = (state_18206[9]);var inst_18175 = (state_18206[7]);var inst_18180 = (function (){var down_e = inst_18178;var temp__4092__auto__ = inst_18178;var down_ch = inst_18175;return ((function (down_e,temp__4092__auto__,down_ch,inst_18178,inst_18175,state_val_18207){
return (function (p1__18071_SHARP_){return (ewen.dragdrop2.timestamp.call(null,p1__18071_SHARP_) > ewen.dragdrop2.timestamp.call(null,down_e));
});
;})(down_e,temp__4092__auto__,down_ch,inst_18178,inst_18175,state_val_18207))
})();var inst_18181 = cljs.core.async.put_BANG_.call(null,pred_ch,inst_18180);var inst_18182 = cljs.core.async.muxch_STAR_.call(null,out_mix);var inst_18183 = cljs.core.async.put_BANG_.call(null,inst_18182,inst_18178);var inst_18184 = [move_ch];var inst_18185 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18186 = [false];var inst_18187 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18185,inst_18186);var inst_18188 = [inst_18187];var inst_18189 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18184,inst_18188);var inst_18190 = cljs.core.async.toggle.call(null,out_mix,inst_18189);var inst_18191 = [up_ch];var inst_18192 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18193 = [false];var inst_18194 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18192,inst_18193);var inst_18195 = [inst_18194];var inst_18196 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18191,inst_18195);var inst_18197 = cljs.core.async.toggle.call(null,out_mix,inst_18196);var tmp18208 = inst_18175;var inst_18175__$1 = tmp18208;var state_18206__$1 = (function (){var statearr_18212 = state_18206;(statearr_18212[10] = inst_18197);
(statearr_18212[11] = inst_18190);
(statearr_18212[12] = inst_18183);
(statearr_18212[13] = inst_18181);
(statearr_18212[7] = inst_18175__$1);
return statearr_18212;
})();var statearr_18213_18277 = state_18206__$1;(statearr_18213_18277[2] = null);
(statearr_18213_18277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18207 === 4))
{var inst_18178 = (state_18206[9]);var inst_18178__$1 = (state_18206[2]);var state_18206__$1 = (function (){var statearr_18214 = state_18206;(statearr_18214[9] = inst_18178__$1);
return statearr_18214;
})();if(cljs.core.truth_(inst_18178__$1))
{var statearr_18215_18278 = state_18206__$1;(statearr_18215_18278[1] = 5);
} else
{var statearr_18216_18279 = state_18206__$1;(statearr_18216_18279[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18207 === 3))
{var inst_18204 = (state_18206[2]);var state_18206__$1 = state_18206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18206__$1,inst_18204);
} else
{if((state_val_18207 === 2))
{var inst_18175 = (state_18206[7]);var state_18206__$1 = state_18206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18206__$1,4,inst_18175);
} else
{if((state_val_18207 === 1))
{var inst_18173 = cljs.core.async.chan.call(null);var inst_18174 = cljs.core.async.tap.call(null,down_events,inst_18173);var inst_18175 = inst_18174;var state_18206__$1 = (function (){var statearr_18217 = state_18206;(statearr_18217[7] = inst_18175);
return statearr_18217;
})();var statearr_18218_18280 = state_18206__$1;(statearr_18218_18280[2] = null);
(statearr_18218_18280[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_18222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18222[0] = state_machine__5581__auto__);
(statearr_18222[1] = 1);
return statearr_18222;
});
var state_machine__5581__auto____1 = (function (state_18206){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18223){if((e18223 instanceof Object))
{var ex__5584__auto__ = e18223;var statearr_18224_18281 = state_18206;(statearr_18224_18281[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18282 = state_18206;
state_18206 = G__18282;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18225 = f__5596__auto__.call(null);(statearr_18225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18274);
return statearr_18225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var c__5595__auto___18283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18255){var state_val_18256 = (state_18255[1]);if((state_val_18256 === 7))
{var inst_18228 = (state_18255[7]);var inst_18250 = (state_18255[2]);var inst_18251 = cljs.core.async.untap.call(null,up_events,inst_18228);var state_18255__$1 = (function (){var statearr_18258 = state_18255;(statearr_18258[8] = inst_18250);
return statearr_18258;
})();var statearr_18259_18284 = state_18255__$1;(statearr_18259_18284[2] = inst_18251);
(statearr_18259_18284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18256 === 6))
{var state_18255__$1 = state_18255;var statearr_18260_18285 = state_18255__$1;(statearr_18260_18285[2] = null);
(statearr_18260_18285[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18256 === 5))
{var inst_18228 = (state_18255[7]);var inst_18233 = [move_ch];var inst_18234 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18235 = [true];var inst_18236 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18234,inst_18235);var inst_18237 = [inst_18236];var inst_18238 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18233,inst_18237);var inst_18239 = cljs.core.async.toggle.call(null,out_mix,inst_18238);var inst_18240 = [up_ch];var inst_18241 = [new cljs.core.Keyword(null,"mute","mute",1017267595)];var inst_18242 = [true];var inst_18243 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18241,inst_18242);var inst_18244 = [inst_18243];var inst_18245 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18240,inst_18244);var inst_18246 = cljs.core.async.toggle.call(null,out_mix,inst_18245);var tmp18257 = inst_18228;var inst_18228__$1 = tmp18257;var state_18255__$1 = (function (){var statearr_18261 = state_18255;(statearr_18261[9] = inst_18246);
(statearr_18261[10] = inst_18239);
(statearr_18261[7] = inst_18228__$1);
return statearr_18261;
})();var statearr_18262_18286 = state_18255__$1;(statearr_18262_18286[2] = null);
(statearr_18262_18286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18256 === 4))
{var inst_18231 = (state_18255[2]);var state_18255__$1 = state_18255;if(cljs.core.truth_(inst_18231))
{var statearr_18263_18287 = state_18255__$1;(statearr_18263_18287[1] = 5);
} else
{var statearr_18264_18288 = state_18255__$1;(statearr_18264_18288[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18256 === 3))
{var inst_18253 = (state_18255[2]);var state_18255__$1 = state_18255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18255__$1,inst_18253);
} else
{if((state_val_18256 === 2))
{var inst_18228 = (state_18255[7]);var state_18255__$1 = state_18255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18255__$1,4,inst_18228);
} else
{if((state_val_18256 === 1))
{var inst_18226 = cljs.core.async.chan.call(null);var inst_18227 = cljs.core.async.tap.call(null,up_events,inst_18226);var inst_18228 = inst_18227;var state_18255__$1 = (function (){var statearr_18265 = state_18255;(statearr_18265[7] = inst_18228);
return statearr_18265;
})();var statearr_18266_18289 = state_18255__$1;(statearr_18266_18289[2] = null);
(statearr_18266_18289[1] = 2);
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
var state_machine__5581__auto____0 = (function (){var statearr_18270 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18270[0] = state_machine__5581__auto__);
(statearr_18270[1] = 1);
return statearr_18270;
});
var state_machine__5581__auto____1 = (function (state_18255){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18271){if((e18271 instanceof Object))
{var ex__5584__auto__ = e18271;var statearr_18272_18290 = state_18255;(statearr_18272_18290[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18291 = state_18255;
state_18255 = G__18291;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18255){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18273 = f__5596__auto__.call(null);(statearr_18273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18283);
return statearr_18273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return cljs.core.async.mult.call(null,cljs.core.async.muxch_STAR_.call(null,out_mix));
});
ewen.dragdrop2.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.async_plus.map_LT_.call(null,ewen.dragdrop2.convert_event_dispatcher,ewen.dragdrop2.create_dd_raw.call(null,down_events,move_events,up_events));
});
ewen.dragdrop2.long_press = (function long_press(down_events,up_events,delay_time){var long_press_events = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null));var c__5595__auto___18412 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_18386){var state_val_18387 = (state_18386[1]);if((state_val_18387 === 1))
{var inst_18352 = cljs.core.async.chan.call(null);var inst_18353 = cljs.core.async.tap.call(null,down_events,inst_18352);var inst_18354 = inst_18353;var state_18386__$1 = (function (){var statearr_18388 = state_18386;(statearr_18388[7] = inst_18354);
return statearr_18388;
})();var statearr_18389_18413 = state_18386__$1;(statearr_18389_18413[2] = null);
(statearr_18389_18413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 2))
{var inst_18354 = (state_18386[7]);var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18386__$1,4,inst_18354);
} else
{if((state_val_18387 === 3))
{var inst_18384 = (state_18386[2]);var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18386__$1,inst_18384);
} else
{if((state_val_18387 === 4))
{var inst_18357 = (state_18386[8]);var inst_18357__$1 = (state_18386[2]);var state_18386__$1 = (function (){var statearr_18390 = state_18386;(statearr_18390[8] = inst_18357__$1);
return statearr_18390;
})();if(cljs.core.truth_(inst_18357__$1))
{var statearr_18391_18414 = state_18386__$1;(statearr_18391_18414[1] = 5);
} else
{var statearr_18392_18415 = state_18386__$1;(statearr_18392_18415[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 5))
{var inst_18361 = (state_18386[9]);var inst_18360 = cljs.core.async.chan.call(null);var inst_18361__$1 = cljs.core.async.tap.call(null,up_events,inst_18360);var inst_18362 = cljs.core.async.timeout.call(null,delay_time);var inst_18363 = [inst_18362,inst_18361__$1];var inst_18364 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18363,null));var state_18386__$1 = (function (){var statearr_18393 = state_18386;(statearr_18393[9] = inst_18361__$1);
return statearr_18393;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18386__$1,8,inst_18364);
} else
{if((state_val_18387 === 6))
{var state_18386__$1 = state_18386;var statearr_18394_18416 = state_18386__$1;(statearr_18394_18416[2] = null);
(statearr_18394_18416[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 7))
{var inst_18354 = (state_18386[7]);var inst_18381 = (state_18386[2]);var inst_18382 = cljs.core.async.untap.call(null,down_events,inst_18354);var state_18386__$1 = (function (){var statearr_18395 = state_18386;(statearr_18395[10] = inst_18381);
return statearr_18395;
})();var statearr_18396_18417 = state_18386__$1;(statearr_18396_18417[2] = inst_18382);
(statearr_18396_18417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 8))
{var inst_18361 = (state_18386[9]);var inst_18366 = (state_18386[2]);var inst_18367 = cljs.core.nth.call(null,inst_18366,0,null);var inst_18368 = cljs.core.nth.call(null,inst_18366,1,null);var inst_18369 = cljs.core.async.untap.call(null,up_events,inst_18361);var inst_18370 = cljs.core.not_EQ_.call(null,inst_18361,inst_18368);var state_18386__$1 = (function (){var statearr_18397 = state_18386;(statearr_18397[11] = inst_18369);
(statearr_18397[12] = inst_18367);
return statearr_18397;
})();if(inst_18370)
{var statearr_18398_18418 = state_18386__$1;(statearr_18398_18418[1] = 9);
} else
{var statearr_18399_18419 = state_18386__$1;(statearr_18399_18419[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 9))
{var inst_18357 = (state_18386[8]);var inst_18372 = cljs.core.async.muxch_STAR_.call(null,long_press_events);var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18386__$1,12,inst_18372,inst_18357);
} else
{if((state_val_18387 === 10))
{var state_18386__$1 = state_18386;var statearr_18401_18420 = state_18386__$1;(statearr_18401_18420[2] = null);
(statearr_18401_18420[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 11))
{var inst_18354 = (state_18386[7]);var inst_18377 = (state_18386[2]);var tmp18400 = inst_18354;var inst_18354__$1 = tmp18400;var state_18386__$1 = (function (){var statearr_18402 = state_18386;(statearr_18402[13] = inst_18377);
(statearr_18402[7] = inst_18354__$1);
return statearr_18402;
})();var statearr_18403_18421 = state_18386__$1;(statearr_18403_18421[2] = null);
(statearr_18403_18421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18387 === 12))
{var inst_18374 = (state_18386[2]);var state_18386__$1 = state_18386;var statearr_18404_18422 = state_18386__$1;(statearr_18404_18422[2] = inst_18374);
(statearr_18404_18422[1] = 11);
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
var state_machine__5581__auto____0 = (function (){var statearr_18408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18408[0] = state_machine__5581__auto__);
(statearr_18408[1] = 1);
return statearr_18408;
});
var state_machine__5581__auto____1 = (function (state_18386){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_18386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e18409){if((e18409 instanceof Object))
{var ex__5584__auto__ = e18409;var statearr_18410_18423 = state_18386;(statearr_18410_18423[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18424 = state_18386;
state_18386 = G__18424;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_18386){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_18386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_18411 = f__5596__auto__.call(null);(statearr_18411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___18412);
return statearr_18411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return long_press_events;
});

//# sourceMappingURL=dragdrop2.js.map