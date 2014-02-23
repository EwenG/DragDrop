// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.dragdrop.examples');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('schema.core');
goog.require('cljs.core.async');
goog.require('ewen.flapjax_cljs');
goog.require('domina.events');
goog.require('schema.core');
goog.require('goog.style');
goog.require('domina.events');
goog.require('ewen.async_plus');
goog.require('om.dom');
goog.require('om.core');
goog.require('ewen.flapjax_cljs');
goog.require('om.core');
goog.require('domina');
goog.require('ewen.async_plus');
goog.require('om.dom');
goog.require('ewen.dragdrop');
goog.require('ewen.dragdrop');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('domina.css');
cljs.core.enable_console_print_BANG_.call(null);
ewen.dragdrop.examples.gsize__GT_vec = (function gsize__GT_vec(size){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size.width,size.height], null);
});
ewen.dragdrop.examples.gloc__GT_vec = (function gloc__GT_vec(loc){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc.x,loc.y], null);
});
ewen.dragdrop.examples.dragging_QMARK_ = (function dragging_QMARK_(owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633));
});
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t18995 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t18995 = (function (owner,cursor,typical_draggable,meta18996){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta18996 = meta18996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t18995.cljs$lang$type = true;
ewen.dragdrop.examples.t18995.cljs$lang$ctorStr = "ewen.dragdrop.examples/t18995";
ewen.dragdrop.examples.t18995.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t18995");
});
ewen.dragdrop.examples.t18995.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t18995.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__18998 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__18998,0,null);var y = cljs.core.nth.call(null,vec__18998,1,null);var vec__18999 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__18999,0,null);var h = cljs.core.nth.call(null,vec__18999,1,null);var obj19001 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj19001;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj19003 = {"position":"static","z-index":0};return obj19003;
})():null));return React.DOM.div((function (){var obj19005 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj19005;
})(),"Drag me!");
});
ewen.dragdrop.examples.t18995.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t18995.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t18995.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t18995.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_19170 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_19171 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_19170);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_19171);
var up_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var down_events = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var move_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,(function (){return ewen.async_plus.close_BANG_.call(null,up_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,down_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,move_events);
})));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
var handle_events_19172 = ewen.async_plus.filter_LT_.call(null,(function (p1__18817_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__18817_SHARP_);
}),dd_events);var c__5595__auto___19173 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19033){var state_val_19034 = (state_19033[1]);if((state_val_19034 === 1))
{var inst_19006 = cljs.core.async.chan.call(null);var inst_19007 = cljs.core.async.tap.call(null,handle_events_19172,inst_19006);var inst_19008 = inst_19007;var state_19033__$1 = (function (){var statearr_19035 = state_19033;(statearr_19035[7] = inst_19008);
return statearr_19035;
})();var statearr_19036_19174 = state_19033__$1;(statearr_19036_19174[2] = null);
(statearr_19036_19174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 2))
{var inst_19008 = (state_19033[7]);var state_19033__$1 = state_19033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19033__$1,4,inst_19008);
} else
{if((state_val_19034 === 3))
{var inst_19031 = (state_19033[2]);var state_19033__$1 = state_19033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19033__$1,inst_19031);
} else
{if((state_val_19034 === 4))
{var inst_19011 = (state_19033[8]);var inst_19011__$1 = (state_19033[2]);var state_19033__$1 = (function (){var statearr_19037 = state_19033;(statearr_19037[8] = inst_19011__$1);
return statearr_19037;
})();if(cljs.core.truth_(inst_19011__$1))
{var statearr_19038_19175 = state_19033__$1;(statearr_19038_19175[1] = 5);
} else
{var statearr_19039_19176 = state_19033__$1;(statearr_19039_19176[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 5))
{var inst_19011 = (state_19033[8]);var inst_19014 = cljs.core.seq_QMARK_.call(null,inst_19011);var state_19033__$1 = state_19033;if(inst_19014)
{var statearr_19040_19177 = state_19033__$1;(statearr_19040_19177[1] = 8);
} else
{var statearr_19041_19178 = state_19033__$1;(statearr_19041_19178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 6))
{var state_19033__$1 = state_19033;var statearr_19042_19179 = state_19033__$1;(statearr_19042_19179[2] = null);
(statearr_19042_19179[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 7))
{var inst_19008 = (state_19033[7]);var inst_19028 = (state_19033[2]);var inst_19029 = cljs.core.async.untap.call(null,handle_events_19172,inst_19008);var state_19033__$1 = (function (){var statearr_19043 = state_19033;(statearr_19043[9] = inst_19028);
return statearr_19043;
})();var statearr_19044_19180 = state_19033__$1;(statearr_19044_19180[2] = inst_19029);
(statearr_19044_19180[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 8))
{var inst_19011 = (state_19033[8]);var inst_19016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19011);var state_19033__$1 = state_19033;var statearr_19046_19181 = state_19033__$1;(statearr_19046_19181[2] = inst_19016);
(statearr_19046_19181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 9))
{var inst_19011 = (state_19033[8]);var state_19033__$1 = state_19033;var statearr_19047_19182 = state_19033__$1;(statearr_19047_19182[2] = inst_19011);
(statearr_19047_19182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19034 === 10))
{var inst_19008 = (state_19033[7]);var inst_19019 = (state_19033[2]);var inst_19020 = cljs.core.get.call(null,inst_19019,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19021 = cljs.core.get.call(null,inst_19019,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19022 = [inst_19021,inst_19020];var inst_19023 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19022,null));var inst_19024 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),inst_19023);var tmp19045 = inst_19008;var inst_19008__$1 = tmp19045;var state_19033__$1 = (function (){var statearr_19048 = state_19033;(statearr_19048[10] = inst_19024);
(statearr_19048[7] = inst_19008__$1);
return statearr_19048;
})();var statearr_19049_19183 = state_19033__$1;(statearr_19049_19183[2] = null);
(statearr_19049_19183[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19053 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19053[0] = state_machine__5581__auto__);
(statearr_19053[1] = 1);
return statearr_19053;
});
var state_machine__5581__auto____1 = (function (state_19033){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19033);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19054){if((e19054 instanceof Object))
{var ex__5584__auto__ = e19054;var statearr_19055_19184 = state_19033;(statearr_19055_19184[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19185 = state_19033;
state_19033 = G__19185;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19033){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19056 = f__5596__auto__.call(null);(statearr_19056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___19173);
return statearr_19056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drag_events_19186 = ewen.async_plus.filter_LT_.call(null,(function (p1__18818_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__18818_SHARP_);
}),dd_events);var c__5595__auto___19187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19097){var state_val_19098 = (state_19097[1]);if((state_val_19098 === 1))
{var inst_19057 = cljs.core.async.chan.call(null);var inst_19058 = cljs.core.async.tap.call(null,drag_events_19186,inst_19057);var inst_19059 = inst_19058;var state_19097__$1 = (function (){var statearr_19099 = state_19097;(statearr_19099[7] = inst_19059);
return statearr_19099;
})();var statearr_19100_19188 = state_19097__$1;(statearr_19100_19188[2] = null);
(statearr_19100_19188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 2))
{var inst_19059 = (state_19097[7]);var state_19097__$1 = state_19097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19097__$1,4,inst_19059);
} else
{if((state_val_19098 === 3))
{var inst_19095 = (state_19097[2]);var state_19097__$1 = state_19097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19097__$1,inst_19095);
} else
{if((state_val_19098 === 4))
{var inst_19062 = (state_19097[8]);var inst_19062__$1 = (state_19097[2]);var state_19097__$1 = (function (){var statearr_19101 = state_19097;(statearr_19101[8] = inst_19062__$1);
return statearr_19101;
})();if(cljs.core.truth_(inst_19062__$1))
{var statearr_19102_19189 = state_19097__$1;(statearr_19102_19189[1] = 5);
} else
{var statearr_19103_19190 = state_19097__$1;(statearr_19103_19190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 5))
{var inst_19062 = (state_19097[8]);var inst_19065 = cljs.core.seq_QMARK_.call(null,inst_19062);var state_19097__$1 = state_19097;if(inst_19065)
{var statearr_19104_19191 = state_19097__$1;(statearr_19104_19191[1] = 8);
} else
{var statearr_19105_19192 = state_19097__$1;(statearr_19105_19192[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 6))
{var state_19097__$1 = state_19097;var statearr_19106_19193 = state_19097__$1;(statearr_19106_19193[2] = null);
(statearr_19106_19193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 7))
{var inst_19059 = (state_19097[7]);var inst_19092 = (state_19097[2]);var inst_19093 = cljs.core.async.untap.call(null,drag_events_19186,inst_19059);var state_19097__$1 = (function (){var statearr_19107 = state_19097;(statearr_19107[9] = inst_19092);
return statearr_19107;
})();var statearr_19108_19194 = state_19097__$1;(statearr_19108_19194[2] = inst_19093);
(statearr_19108_19194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 8))
{var inst_19062 = (state_19097[8]);var inst_19067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19062);var state_19097__$1 = state_19097;var statearr_19110_19195 = state_19097__$1;(statearr_19110_19195[2] = inst_19067);
(statearr_19110_19195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 9))
{var inst_19062 = (state_19097[8]);var state_19097__$1 = state_19097;var statearr_19111_19196 = state_19097__$1;(statearr_19111_19196[2] = inst_19062);
(statearr_19111_19196[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19098 === 10))
{var inst_19059 = (state_19097[7]);var inst_19070 = (state_19097[2]);var inst_19071 = cljs.core.get.call(null,inst_19070,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19072 = cljs.core.get.call(null,inst_19070,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19075 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var inst_19076 = cljs.core.nth.call(null,inst_19075,0,null);var inst_19077 = cljs.core.nth.call(null,inst_19075,1,null);var inst_19078 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var inst_19079 = cljs.core.nth.call(null,inst_19078,0,null);var inst_19080 = cljs.core.nth.call(null,inst_19078,1,null);var inst_19081 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);var inst_19082 = (inst_19072 - inst_19079);var inst_19083 = (inst_19076 + inst_19082);var inst_19084 = (inst_19071 - inst_19080);var inst_19085 = (inst_19077 + inst_19084);var inst_19086 = [inst_19083,inst_19085];var inst_19087 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19086,null));var inst_19088 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),inst_19087);var tmp19109 = inst_19059;var inst_19059__$1 = tmp19109;var state_19097__$1 = (function (){var statearr_19112 = state_19097;(statearr_19112[10] = inst_19088);
(statearr_19112[11] = inst_19081);
(statearr_19112[7] = inst_19059__$1);
return statearr_19112;
})();var statearr_19113_19197 = state_19097__$1;(statearr_19113_19197[2] = null);
(statearr_19113_19197[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19117 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19117[0] = state_machine__5581__auto__);
(statearr_19117[1] = 1);
return statearr_19117;
});
var state_machine__5581__auto____1 = (function (state_19097){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19118){if((e19118 instanceof Object))
{var ex__5584__auto__ = e19118;var statearr_19119_19198 = state_19097;(statearr_19119_19198[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19199 = state_19097;
state_19097 = G__19199;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19097){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19120 = f__5596__auto__.call(null);(statearr_19120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___19187);
return statearr_19120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drop_events = ewen.async_plus.filter_LT_.call(null,(function (p1__18819_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__18819_SHARP_);
}),dd_events);var c__5595__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19146){var state_val_19147 = (state_19146[1]);if((state_val_19147 === 1))
{var inst_19121 = cljs.core.async.chan.call(null);var inst_19122 = cljs.core.async.tap.call(null,drop_events,inst_19121);var inst_19123 = inst_19122;var state_19146__$1 = (function (){var statearr_19148 = state_19146;(statearr_19148[7] = inst_19123);
return statearr_19148;
})();var statearr_19149_19200 = state_19146__$1;(statearr_19149_19200[2] = null);
(statearr_19149_19200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 2))
{var inst_19123 = (state_19146[7]);var state_19146__$1 = state_19146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19146__$1,4,inst_19123);
} else
{if((state_val_19147 === 3))
{var inst_19144 = (state_19146[2]);var state_19146__$1 = state_19146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19146__$1,inst_19144);
} else
{if((state_val_19147 === 4))
{var inst_19126 = (state_19146[8]);var inst_19126__$1 = (state_19146[2]);var state_19146__$1 = (function (){var statearr_19150 = state_19146;(statearr_19150[8] = inst_19126__$1);
return statearr_19150;
})();if(cljs.core.truth_(inst_19126__$1))
{var statearr_19151_19201 = state_19146__$1;(statearr_19151_19201[1] = 5);
} else
{var statearr_19152_19202 = state_19146__$1;(statearr_19152_19202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 5))
{var inst_19126 = (state_19146[8]);var inst_19129 = cljs.core.seq_QMARK_.call(null,inst_19126);var state_19146__$1 = state_19146;if(inst_19129)
{var statearr_19153_19203 = state_19146__$1;(statearr_19153_19203[1] = 8);
} else
{var statearr_19154_19204 = state_19146__$1;(statearr_19154_19204[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 6))
{var state_19146__$1 = state_19146;var statearr_19155_19205 = state_19146__$1;(statearr_19155_19205[2] = null);
(statearr_19155_19205[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 7))
{var inst_19123 = (state_19146[7]);var inst_19141 = (state_19146[2]);var inst_19142 = cljs.core.async.untap.call(null,drop_events,inst_19123);var state_19146__$1 = (function (){var statearr_19156 = state_19146;(statearr_19156[9] = inst_19141);
return statearr_19156;
})();var statearr_19157_19206 = state_19146__$1;(statearr_19157_19206[2] = inst_19142);
(statearr_19157_19206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 8))
{var inst_19126 = (state_19146[8]);var inst_19131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19126);var state_19146__$1 = state_19146;var statearr_19159_19207 = state_19146__$1;(statearr_19159_19207[2] = inst_19131);
(statearr_19159_19207[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 9))
{var inst_19126 = (state_19146[8]);var state_19146__$1 = state_19146;var statearr_19160_19208 = state_19146__$1;(statearr_19160_19208[2] = inst_19126);
(statearr_19160_19208[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 10))
{var inst_19123 = (state_19146[7]);var inst_19134 = (state_19146[2]);var inst_19135 = cljs.core.get.call(null,inst_19134,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19136 = cljs.core.get.call(null,inst_19134,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19137 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);var tmp19158 = inst_19123;var inst_19123__$1 = tmp19158;var state_19146__$1 = (function (){var statearr_19161 = state_19146;(statearr_19161[10] = inst_19137);
(statearr_19161[11] = inst_19136);
(statearr_19161[12] = inst_19135);
(statearr_19161[7] = inst_19123__$1);
return statearr_19161;
})();var statearr_19162_19209 = state_19146__$1;(statearr_19162_19209[2] = null);
(statearr_19162_19209[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19166 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19166[0] = state_machine__5581__auto__);
(statearr_19166[1] = 1);
return statearr_19166;
});
var state_machine__5581__auto____1 = (function (state_19146){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19146);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19167){if((e19167 instanceof Object))
{var ex__5584__auto__ = e19167;var statearr_19168_19210 = state_19146;(statearr_19168_19210[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19167;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19211 = state_19146;
state_19146 = G__19211;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19146){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19169 = f__5596__auto__.call(null);(statearr_19169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto__);
return statearr_19169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return c__5595__auto__;
});
ewen.dragdrop.examples.t18995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18997){var self__ = this;
var _18997__$1 = this;return self__.meta18996;
});
ewen.dragdrop.examples.t18995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18997,meta18996__$1){var self__ = this;
var _18997__$1 = this;return (new ewen.dragdrop.examples.t18995(self__.owner,self__.cursor,self__.typical_draggable,meta18996__$1));
});
ewen.dragdrop.examples.__GT_t18995 = (function __GT_t18995(owner__$1,cursor__$1,typical_draggable__$1,meta18996){return (new ewen.dragdrop.examples.t18995(owner__$1,cursor__$1,typical_draggable__$1,meta18996));
});
}
return (new ewen.dragdrop.examples.t18995(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t19212 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t19212 = (function (owner,app,meta19213){
this.owner = owner;
this.app = app;
this.meta19213 = meta19213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t19212.cljs$lang$type = true;
ewen.dragdrop.examples.t19212.cljs$lang$ctorStr = "ewen.dragdrop.examples/t19212";
ewen.dragdrop.examples.t19212.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t19212");
});
ewen.dragdrop.examples.t19212.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t19212.prototype.om$core$IRender$render$arity$1 = (function (this__9277__auto__){var self__ = this;
var this__9277__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t19212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19214){var self__ = this;
var _19214__$1 = this;return self__.meta19213;
});
ewen.dragdrop.examples.t19212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19214,meta19213__$1){var self__ = this;
var _19214__$1 = this;return (new ewen.dragdrop.examples.t19212(self__.owner,self__.app,meta19213__$1));
});
ewen.dragdrop.examples.__GT_t19212 = (function __GT_t19212(owner__$1,app__$1,meta19213){return (new ewen.dragdrop.examples.t19212(owner__$1,app__$1,meta19213));
});
}
return (new ewen.dragdrop.examples.t19212(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t19393 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t19393 = (function (owner,cursor,delayed_draggable,meta19394){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta19394 = meta19394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t19393.cljs$lang$type = true;
ewen.dragdrop.examples.t19393.cljs$lang$ctorStr = "ewen.dragdrop.examples/t19393";
ewen.dragdrop.examples.t19393.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t19393");
});
ewen.dragdrop.examples.t19393.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t19393.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__19396 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__19396,0,null);var y = cljs.core.nth.call(null,vec__19396,1,null);var vec__19397 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__19397,0,null);var h = cljs.core.nth.call(null,vec__19397,1,null);var obj19399 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj19399;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj19401 = {"position":"static","z-index":0};return obj19401;
})():null));return React.DOM.div((function (){var obj19403 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj19403;
})(),"Drag me! But i'm slow...");
});
ewen.dragdrop.examples.t19393.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t19393.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t19393.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t19393.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_19568 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_19569 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_19568);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_19569);
var up_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var down_events = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var move_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.async_plus.delay_LT_.call(null,500,move_events),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,(function (){return ewen.async_plus.close_BANG_.call(null,up_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,down_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,move_events);
})));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
var handle_events_19570 = ewen.async_plus.filter_LT_.call(null,(function (p1__19215_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__19215_SHARP_);
}),dd_events);var c__5595__auto___19571 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19431){var state_val_19432 = (state_19431[1]);if((state_val_19432 === 1))
{var inst_19404 = cljs.core.async.chan.call(null);var inst_19405 = cljs.core.async.tap.call(null,handle_events_19570,inst_19404);var inst_19406 = inst_19405;var state_19431__$1 = (function (){var statearr_19433 = state_19431;(statearr_19433[7] = inst_19406);
return statearr_19433;
})();var statearr_19434_19572 = state_19431__$1;(statearr_19434_19572[2] = null);
(statearr_19434_19572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 2))
{var inst_19406 = (state_19431[7]);var state_19431__$1 = state_19431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19431__$1,4,inst_19406);
} else
{if((state_val_19432 === 3))
{var inst_19429 = (state_19431[2]);var state_19431__$1 = state_19431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19431__$1,inst_19429);
} else
{if((state_val_19432 === 4))
{var inst_19409 = (state_19431[8]);var inst_19409__$1 = (state_19431[2]);var state_19431__$1 = (function (){var statearr_19435 = state_19431;(statearr_19435[8] = inst_19409__$1);
return statearr_19435;
})();if(cljs.core.truth_(inst_19409__$1))
{var statearr_19436_19573 = state_19431__$1;(statearr_19436_19573[1] = 5);
} else
{var statearr_19437_19574 = state_19431__$1;(statearr_19437_19574[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 5))
{var inst_19409 = (state_19431[8]);var inst_19412 = cljs.core.seq_QMARK_.call(null,inst_19409);var state_19431__$1 = state_19431;if(inst_19412)
{var statearr_19438_19575 = state_19431__$1;(statearr_19438_19575[1] = 8);
} else
{var statearr_19439_19576 = state_19431__$1;(statearr_19439_19576[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 6))
{var state_19431__$1 = state_19431;var statearr_19440_19577 = state_19431__$1;(statearr_19440_19577[2] = null);
(statearr_19440_19577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 7))
{var inst_19406 = (state_19431[7]);var inst_19426 = (state_19431[2]);var inst_19427 = cljs.core.async.untap.call(null,handle_events_19570,inst_19406);var state_19431__$1 = (function (){var statearr_19441 = state_19431;(statearr_19441[9] = inst_19426);
return statearr_19441;
})();var statearr_19442_19578 = state_19431__$1;(statearr_19442_19578[2] = inst_19427);
(statearr_19442_19578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 8))
{var inst_19409 = (state_19431[8]);var inst_19414 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19409);var state_19431__$1 = state_19431;var statearr_19444_19579 = state_19431__$1;(statearr_19444_19579[2] = inst_19414);
(statearr_19444_19579[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 9))
{var inst_19409 = (state_19431[8]);var state_19431__$1 = state_19431;var statearr_19445_19580 = state_19431__$1;(statearr_19445_19580[2] = inst_19409);
(statearr_19445_19580[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19432 === 10))
{var inst_19406 = (state_19431[7]);var inst_19417 = (state_19431[2]);var inst_19418 = cljs.core.get.call(null,inst_19417,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19419 = cljs.core.get.call(null,inst_19417,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19420 = [inst_19419,inst_19418];var inst_19421 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19420,null));var inst_19422 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),inst_19421);var tmp19443 = inst_19406;var inst_19406__$1 = tmp19443;var state_19431__$1 = (function (){var statearr_19446 = state_19431;(statearr_19446[10] = inst_19422);
(statearr_19446[7] = inst_19406__$1);
return statearr_19446;
})();var statearr_19447_19581 = state_19431__$1;(statearr_19447_19581[2] = null);
(statearr_19447_19581[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19451 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19451[0] = state_machine__5581__auto__);
(statearr_19451[1] = 1);
return statearr_19451;
});
var state_machine__5581__auto____1 = (function (state_19431){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19431);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19452){if((e19452 instanceof Object))
{var ex__5584__auto__ = e19452;var statearr_19453_19582 = state_19431;(statearr_19453_19582[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19583 = state_19431;
state_19431 = G__19583;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19431){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19454 = f__5596__auto__.call(null);(statearr_19454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___19571);
return statearr_19454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drag_events_19584 = ewen.async_plus.filter_LT_.call(null,(function (p1__19216_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__19216_SHARP_);
}),dd_events);var c__5595__auto___19585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19495){var state_val_19496 = (state_19495[1]);if((state_val_19496 === 1))
{var inst_19455 = cljs.core.async.chan.call(null);var inst_19456 = cljs.core.async.tap.call(null,drag_events_19584,inst_19455);var inst_19457 = inst_19456;var state_19495__$1 = (function (){var statearr_19497 = state_19495;(statearr_19497[7] = inst_19457);
return statearr_19497;
})();var statearr_19498_19586 = state_19495__$1;(statearr_19498_19586[2] = null);
(statearr_19498_19586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 2))
{var inst_19457 = (state_19495[7]);var state_19495__$1 = state_19495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19495__$1,4,inst_19457);
} else
{if((state_val_19496 === 3))
{var inst_19493 = (state_19495[2]);var state_19495__$1 = state_19495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19495__$1,inst_19493);
} else
{if((state_val_19496 === 4))
{var inst_19460 = (state_19495[8]);var inst_19460__$1 = (state_19495[2]);var state_19495__$1 = (function (){var statearr_19499 = state_19495;(statearr_19499[8] = inst_19460__$1);
return statearr_19499;
})();if(cljs.core.truth_(inst_19460__$1))
{var statearr_19500_19587 = state_19495__$1;(statearr_19500_19587[1] = 5);
} else
{var statearr_19501_19588 = state_19495__$1;(statearr_19501_19588[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 5))
{var inst_19460 = (state_19495[8]);var inst_19463 = cljs.core.seq_QMARK_.call(null,inst_19460);var state_19495__$1 = state_19495;if(inst_19463)
{var statearr_19502_19589 = state_19495__$1;(statearr_19502_19589[1] = 8);
} else
{var statearr_19503_19590 = state_19495__$1;(statearr_19503_19590[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 6))
{var state_19495__$1 = state_19495;var statearr_19504_19591 = state_19495__$1;(statearr_19504_19591[2] = null);
(statearr_19504_19591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 7))
{var inst_19457 = (state_19495[7]);var inst_19490 = (state_19495[2]);var inst_19491 = cljs.core.async.untap.call(null,drag_events_19584,inst_19457);var state_19495__$1 = (function (){var statearr_19505 = state_19495;(statearr_19505[9] = inst_19490);
return statearr_19505;
})();var statearr_19506_19592 = state_19495__$1;(statearr_19506_19592[2] = inst_19491);
(statearr_19506_19592[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 8))
{var inst_19460 = (state_19495[8]);var inst_19465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19460);var state_19495__$1 = state_19495;var statearr_19508_19593 = state_19495__$1;(statearr_19508_19593[2] = inst_19465);
(statearr_19508_19593[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 9))
{var inst_19460 = (state_19495[8]);var state_19495__$1 = state_19495;var statearr_19509_19594 = state_19495__$1;(statearr_19509_19594[2] = inst_19460);
(statearr_19509_19594[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19496 === 10))
{var inst_19457 = (state_19495[7]);var inst_19468 = (state_19495[2]);var inst_19469 = cljs.core.get.call(null,inst_19468,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19470 = cljs.core.get.call(null,inst_19468,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19473 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var inst_19474 = cljs.core.nth.call(null,inst_19473,0,null);var inst_19475 = cljs.core.nth.call(null,inst_19473,1,null);var inst_19476 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var inst_19477 = cljs.core.nth.call(null,inst_19476,0,null);var inst_19478 = cljs.core.nth.call(null,inst_19476,1,null);var inst_19479 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);var inst_19480 = (inst_19470 - inst_19477);var inst_19481 = (inst_19474 + inst_19480);var inst_19482 = (inst_19469 - inst_19478);var inst_19483 = (inst_19475 + inst_19482);var inst_19484 = [inst_19481,inst_19483];var inst_19485 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19484,null));var inst_19486 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),inst_19485);var tmp19507 = inst_19457;var inst_19457__$1 = tmp19507;var state_19495__$1 = (function (){var statearr_19510 = state_19495;(statearr_19510[7] = inst_19457__$1);
(statearr_19510[10] = inst_19479);
(statearr_19510[11] = inst_19486);
return statearr_19510;
})();var statearr_19511_19595 = state_19495__$1;(statearr_19511_19595[2] = null);
(statearr_19511_19595[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19515 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19515[0] = state_machine__5581__auto__);
(statearr_19515[1] = 1);
return statearr_19515;
});
var state_machine__5581__auto____1 = (function (state_19495){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19516){if((e19516 instanceof Object))
{var ex__5584__auto__ = e19516;var statearr_19517_19596 = state_19495;(statearr_19517_19596[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19597 = state_19495;
state_19495 = G__19597;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19495){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19518 = f__5596__auto__.call(null);(statearr_19518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___19585);
return statearr_19518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drop_events = ewen.async_plus.filter_LT_.call(null,(function (p1__19217_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__19217_SHARP_);
}),dd_events);var c__5595__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19544){var state_val_19545 = (state_19544[1]);if((state_val_19545 === 1))
{var inst_19519 = cljs.core.async.chan.call(null);var inst_19520 = cljs.core.async.tap.call(null,drop_events,inst_19519);var inst_19521 = inst_19520;var state_19544__$1 = (function (){var statearr_19546 = state_19544;(statearr_19546[7] = inst_19521);
return statearr_19546;
})();var statearr_19547_19598 = state_19544__$1;(statearr_19547_19598[2] = null);
(statearr_19547_19598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 2))
{var inst_19521 = (state_19544[7]);var state_19544__$1 = state_19544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19544__$1,4,inst_19521);
} else
{if((state_val_19545 === 3))
{var inst_19542 = (state_19544[2]);var state_19544__$1 = state_19544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19544__$1,inst_19542);
} else
{if((state_val_19545 === 4))
{var inst_19524 = (state_19544[8]);var inst_19524__$1 = (state_19544[2]);var state_19544__$1 = (function (){var statearr_19548 = state_19544;(statearr_19548[8] = inst_19524__$1);
return statearr_19548;
})();if(cljs.core.truth_(inst_19524__$1))
{var statearr_19549_19599 = state_19544__$1;(statearr_19549_19599[1] = 5);
} else
{var statearr_19550_19600 = state_19544__$1;(statearr_19550_19600[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 5))
{var inst_19524 = (state_19544[8]);var inst_19527 = cljs.core.seq_QMARK_.call(null,inst_19524);var state_19544__$1 = state_19544;if(inst_19527)
{var statearr_19551_19601 = state_19544__$1;(statearr_19551_19601[1] = 8);
} else
{var statearr_19552_19602 = state_19544__$1;(statearr_19552_19602[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 6))
{var state_19544__$1 = state_19544;var statearr_19553_19603 = state_19544__$1;(statearr_19553_19603[2] = null);
(statearr_19553_19603[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 7))
{var inst_19521 = (state_19544[7]);var inst_19539 = (state_19544[2]);var inst_19540 = cljs.core.async.untap.call(null,drop_events,inst_19521);var state_19544__$1 = (function (){var statearr_19554 = state_19544;(statearr_19554[9] = inst_19539);
return statearr_19554;
})();var statearr_19555_19604 = state_19544__$1;(statearr_19555_19604[2] = inst_19540);
(statearr_19555_19604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 8))
{var inst_19524 = (state_19544[8]);var inst_19529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19524);var state_19544__$1 = state_19544;var statearr_19557_19605 = state_19544__$1;(statearr_19557_19605[2] = inst_19529);
(statearr_19557_19605[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 9))
{var inst_19524 = (state_19544[8]);var state_19544__$1 = state_19544;var statearr_19558_19606 = state_19544__$1;(statearr_19558_19606[2] = inst_19524);
(statearr_19558_19606[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19545 === 10))
{var inst_19521 = (state_19544[7]);var inst_19532 = (state_19544[2]);var inst_19533 = cljs.core.get.call(null,inst_19532,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19534 = cljs.core.get.call(null,inst_19532,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19535 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);var tmp19556 = inst_19521;var inst_19521__$1 = tmp19556;var state_19544__$1 = (function (){var statearr_19559 = state_19544;(statearr_19559[10] = inst_19535);
(statearr_19559[11] = inst_19533);
(statearr_19559[12] = inst_19534);
(statearr_19559[7] = inst_19521__$1);
return statearr_19559;
})();var statearr_19560_19607 = state_19544__$1;(statearr_19560_19607[2] = null);
(statearr_19560_19607[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19564 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19564[0] = state_machine__5581__auto__);
(statearr_19564[1] = 1);
return statearr_19564;
});
var state_machine__5581__auto____1 = (function (state_19544){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19544);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19565){if((e19565 instanceof Object))
{var ex__5584__auto__ = e19565;var statearr_19566_19608 = state_19544;(statearr_19566_19608[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19544);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19609 = state_19544;
state_19544 = G__19609;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19544){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19567 = f__5596__auto__.call(null);(statearr_19567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto__);
return statearr_19567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return c__5595__auto__;
});
ewen.dragdrop.examples.t19393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19395){var self__ = this;
var _19395__$1 = this;return self__.meta19394;
});
ewen.dragdrop.examples.t19393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19395,meta19394__$1){var self__ = this;
var _19395__$1 = this;return (new ewen.dragdrop.examples.t19393(self__.owner,self__.cursor,self__.delayed_draggable,meta19394__$1));
});
ewen.dragdrop.examples.__GT_t19393 = (function __GT_t19393(owner__$1,cursor__$1,delayed_draggable__$1,meta19394){return (new ewen.dragdrop.examples.t19393(owner__$1,cursor__$1,delayed_draggable__$1,meta19394));
});
}
return (new ewen.dragdrop.examples.t19393(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t19610 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t19610 = (function (owner,app,meta19611){
this.owner = owner;
this.app = app;
this.meta19611 = meta19611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t19610.cljs$lang$type = true;
ewen.dragdrop.examples.t19610.cljs$lang$ctorStr = "ewen.dragdrop.examples/t19610";
ewen.dragdrop.examples.t19610.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t19610");
});
ewen.dragdrop.examples.t19610.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t19610.prototype.om$core$IRender$render$arity$1 = (function (this__9277__auto__){var self__ = this;
var this__9277__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t19610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19612){var self__ = this;
var _19612__$1 = this;return self__.meta19611;
});
ewen.dragdrop.examples.t19610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19612,meta19611__$1){var self__ = this;
var _19612__$1 = this;return (new ewen.dragdrop.examples.t19610(self__.owner,self__.app,meta19611__$1));
});
ewen.dragdrop.examples.__GT_t19610 = (function __GT_t19610(owner__$1,app__$1,meta19611){return (new ewen.dragdrop.examples.t19610(owner__$1,app__$1,meta19611));
});
}
return (new ewen.dragdrop.examples.t19610(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t19794 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t19794 = (function (owner,cursor,hook_draggable,meta19795){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta19795 = meta19795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t19794.cljs$lang$type = true;
ewen.dragdrop.examples.t19794.cljs$lang$ctorStr = "ewen.dragdrop.examples/t19794";
ewen.dragdrop.examples.t19794.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t19794");
});
ewen.dragdrop.examples.t19794.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t19794.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__19797 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__19797,0,null);var y = cljs.core.nth.call(null,vec__19797,1,null);var vec__19798 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__19798,0,null);var h = cljs.core.nth.call(null,vec__19798,1,null);var obj19800 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj19800;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj19802 = {"position":"static","z-index":0};return obj19802;
})():null));return React.DOM.div((function (){var obj19804 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"hook-draggable"};return obj19804;
})(),"Drag me!");
});
ewen.dragdrop.examples.t19794.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t19794.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t19794.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t19794.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_19972 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_19973 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_19972);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_19973);
var up_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var down_events = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var move_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,(function (){return ewen.async_plus.close_BANG_.call(null,up_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,down_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,move_events);
})));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
var handle_events_19974 = ewen.async_plus.filter_LT_.call(null,(function (p1__19613_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__19613_SHARP_);
}),dd_events);var c__5595__auto___19975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19833){var state_val_19834 = (state_19833[1]);if((state_val_19834 === 1))
{var inst_19805 = cljs.core.async.chan.call(null);var inst_19806 = cljs.core.async.tap.call(null,handle_events_19974,inst_19805);var inst_19807 = inst_19806;var state_19833__$1 = (function (){var statearr_19835 = state_19833;(statearr_19835[7] = inst_19807);
return statearr_19835;
})();var statearr_19836_19976 = state_19833__$1;(statearr_19836_19976[2] = null);
(statearr_19836_19976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 2))
{var inst_19807 = (state_19833[7]);var state_19833__$1 = state_19833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19833__$1,4,inst_19807);
} else
{if((state_val_19834 === 3))
{var inst_19831 = (state_19833[2]);var state_19833__$1 = state_19833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19833__$1,inst_19831);
} else
{if((state_val_19834 === 4))
{var inst_19810 = (state_19833[8]);var inst_19810__$1 = (state_19833[2]);var state_19833__$1 = (function (){var statearr_19837 = state_19833;(statearr_19837[8] = inst_19810__$1);
return statearr_19837;
})();if(cljs.core.truth_(inst_19810__$1))
{var statearr_19838_19977 = state_19833__$1;(statearr_19838_19977[1] = 5);
} else
{var statearr_19839_19978 = state_19833__$1;(statearr_19839_19978[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 5))
{var inst_19810 = (state_19833[8]);var inst_19813 = cljs.core.seq_QMARK_.call(null,inst_19810);var state_19833__$1 = state_19833;if(inst_19813)
{var statearr_19840_19979 = state_19833__$1;(statearr_19840_19979[1] = 8);
} else
{var statearr_19841_19980 = state_19833__$1;(statearr_19841_19980[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 6))
{var state_19833__$1 = state_19833;var statearr_19842_19981 = state_19833__$1;(statearr_19842_19981[2] = null);
(statearr_19842_19981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 7))
{var inst_19807 = (state_19833[7]);var inst_19828 = (state_19833[2]);var inst_19829 = cljs.core.async.untap.call(null,handle_events_19974,inst_19807);var state_19833__$1 = (function (){var statearr_19843 = state_19833;(statearr_19843[9] = inst_19828);
return statearr_19843;
})();var statearr_19844_19982 = state_19833__$1;(statearr_19844_19982[2] = inst_19829);
(statearr_19844_19982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 8))
{var inst_19810 = (state_19833[8]);var inst_19815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19810);var state_19833__$1 = state_19833;var statearr_19846_19983 = state_19833__$1;(statearr_19846_19983[2] = inst_19815);
(statearr_19846_19983[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 9))
{var inst_19810 = (state_19833[8]);var state_19833__$1 = state_19833;var statearr_19847_19984 = state_19833__$1;(statearr_19847_19984[2] = inst_19810);
(statearr_19847_19984[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19834 === 10))
{var inst_19807 = (state_19833[7]);var inst_19818 = (state_19833[2]);var inst_19819 = cljs.core.get.call(null,inst_19818,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19820 = cljs.core.get.call(null,inst_19818,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19821 = [inst_19820,inst_19819];var inst_19822 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19821,null));var inst_19823 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),inst_19822);var inst_19824 = node.innerHTML = "Handled";var tmp19845 = inst_19807;var inst_19807__$1 = tmp19845;var state_19833__$1 = (function (){var statearr_19848 = state_19833;(statearr_19848[10] = inst_19824);
(statearr_19848[11] = inst_19823);
(statearr_19848[7] = inst_19807__$1);
return statearr_19848;
})();var statearr_19849_19985 = state_19833__$1;(statearr_19849_19985[2] = null);
(statearr_19849_19985[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19853 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19853[0] = state_machine__5581__auto__);
(statearr_19853[1] = 1);
return statearr_19853;
});
var state_machine__5581__auto____1 = (function (state_19833){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19854){if((e19854 instanceof Object))
{var ex__5584__auto__ = e19854;var statearr_19855_19986 = state_19833;(statearr_19855_19986[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19987 = state_19833;
state_19833 = G__19987;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19833){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19856 = f__5596__auto__.call(null);(statearr_19856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___19975);
return statearr_19856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drag_events_19988 = ewen.async_plus.filter_LT_.call(null,(function (p1__19614_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__19614_SHARP_);
}),dd_events);var c__5595__auto___19989 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19898){var state_val_19899 = (state_19898[1]);if((state_val_19899 === 1))
{var inst_19857 = cljs.core.async.chan.call(null);var inst_19858 = cljs.core.async.tap.call(null,drag_events_19988,inst_19857);var inst_19859 = inst_19858;var state_19898__$1 = (function (){var statearr_19900 = state_19898;(statearr_19900[7] = inst_19859);
return statearr_19900;
})();var statearr_19901_19990 = state_19898__$1;(statearr_19901_19990[2] = null);
(statearr_19901_19990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 2))
{var inst_19859 = (state_19898[7]);var state_19898__$1 = state_19898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19898__$1,4,inst_19859);
} else
{if((state_val_19899 === 3))
{var inst_19896 = (state_19898[2]);var state_19898__$1 = state_19898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19898__$1,inst_19896);
} else
{if((state_val_19899 === 4))
{var inst_19862 = (state_19898[8]);var inst_19862__$1 = (state_19898[2]);var state_19898__$1 = (function (){var statearr_19902 = state_19898;(statearr_19902[8] = inst_19862__$1);
return statearr_19902;
})();if(cljs.core.truth_(inst_19862__$1))
{var statearr_19903_19991 = state_19898__$1;(statearr_19903_19991[1] = 5);
} else
{var statearr_19904_19992 = state_19898__$1;(statearr_19904_19992[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 5))
{var inst_19862 = (state_19898[8]);var inst_19865 = cljs.core.seq_QMARK_.call(null,inst_19862);var state_19898__$1 = state_19898;if(inst_19865)
{var statearr_19905_19993 = state_19898__$1;(statearr_19905_19993[1] = 8);
} else
{var statearr_19906_19994 = state_19898__$1;(statearr_19906_19994[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 6))
{var state_19898__$1 = state_19898;var statearr_19907_19995 = state_19898__$1;(statearr_19907_19995[2] = null);
(statearr_19907_19995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 7))
{var inst_19859 = (state_19898[7]);var inst_19893 = (state_19898[2]);var inst_19894 = cljs.core.async.untap.call(null,drag_events_19988,inst_19859);var state_19898__$1 = (function (){var statearr_19908 = state_19898;(statearr_19908[9] = inst_19893);
return statearr_19908;
})();var statearr_19909_19996 = state_19898__$1;(statearr_19909_19996[2] = inst_19894);
(statearr_19909_19996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 8))
{var inst_19862 = (state_19898[8]);var inst_19867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19862);var state_19898__$1 = state_19898;var statearr_19911_19997 = state_19898__$1;(statearr_19911_19997[2] = inst_19867);
(statearr_19911_19997[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 9))
{var inst_19862 = (state_19898[8]);var state_19898__$1 = state_19898;var statearr_19912_19998 = state_19898__$1;(statearr_19912_19998[2] = inst_19862);
(statearr_19912_19998[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19899 === 10))
{var inst_19859 = (state_19898[7]);var inst_19870 = (state_19898[2]);var inst_19871 = cljs.core.get.call(null,inst_19870,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19872 = cljs.core.get.call(null,inst_19870,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19875 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var inst_19876 = cljs.core.nth.call(null,inst_19875,0,null);var inst_19877 = cljs.core.nth.call(null,inst_19875,1,null);var inst_19878 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var inst_19879 = cljs.core.nth.call(null,inst_19878,0,null);var inst_19880 = cljs.core.nth.call(null,inst_19878,1,null);var inst_19881 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);var inst_19882 = (inst_19872 - inst_19879);var inst_19883 = (inst_19876 + inst_19882);var inst_19884 = (inst_19871 - inst_19880);var inst_19885 = (inst_19877 + inst_19884);var inst_19886 = [inst_19883,inst_19885];var inst_19887 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19886,null));var inst_19888 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),inst_19887);var inst_19889 = node.innerHTML = "Drag";var tmp19910 = inst_19859;var inst_19859__$1 = tmp19910;var state_19898__$1 = (function (){var statearr_19913 = state_19898;(statearr_19913[7] = inst_19859__$1);
(statearr_19913[10] = inst_19889);
(statearr_19913[11] = inst_19888);
(statearr_19913[12] = inst_19881);
return statearr_19913;
})();var statearr_19914_19999 = state_19898__$1;(statearr_19914_19999[2] = null);
(statearr_19914_19999[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19918 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19918[0] = state_machine__5581__auto__);
(statearr_19918[1] = 1);
return statearr_19918;
});
var state_machine__5581__auto____1 = (function (state_19898){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19919){if((e19919 instanceof Object))
{var ex__5584__auto__ = e19919;var statearr_19920_20000 = state_19898;(statearr_19920_20000[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20001 = state_19898;
state_19898 = G__20001;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19898){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19921 = f__5596__auto__.call(null);(statearr_19921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___19989);
return statearr_19921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drop_events = ewen.async_plus.filter_LT_.call(null,(function (p1__19615_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__19615_SHARP_);
}),dd_events);var c__5595__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_19948){var state_val_19949 = (state_19948[1]);if((state_val_19949 === 1))
{var inst_19922 = cljs.core.async.chan.call(null);var inst_19923 = cljs.core.async.tap.call(null,drop_events,inst_19922);var inst_19924 = inst_19923;var state_19948__$1 = (function (){var statearr_19950 = state_19948;(statearr_19950[7] = inst_19924);
return statearr_19950;
})();var statearr_19951_20002 = state_19948__$1;(statearr_19951_20002[2] = null);
(statearr_19951_20002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 2))
{var inst_19924 = (state_19948[7]);var state_19948__$1 = state_19948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19948__$1,4,inst_19924);
} else
{if((state_val_19949 === 3))
{var inst_19946 = (state_19948[2]);var state_19948__$1 = state_19948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19948__$1,inst_19946);
} else
{if((state_val_19949 === 4))
{var inst_19927 = (state_19948[8]);var inst_19927__$1 = (state_19948[2]);var state_19948__$1 = (function (){var statearr_19952 = state_19948;(statearr_19952[8] = inst_19927__$1);
return statearr_19952;
})();if(cljs.core.truth_(inst_19927__$1))
{var statearr_19953_20003 = state_19948__$1;(statearr_19953_20003[1] = 5);
} else
{var statearr_19954_20004 = state_19948__$1;(statearr_19954_20004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 5))
{var inst_19927 = (state_19948[8]);var inst_19930 = cljs.core.seq_QMARK_.call(null,inst_19927);var state_19948__$1 = state_19948;if(inst_19930)
{var statearr_19955_20005 = state_19948__$1;(statearr_19955_20005[1] = 8);
} else
{var statearr_19956_20006 = state_19948__$1;(statearr_19956_20006[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 6))
{var state_19948__$1 = state_19948;var statearr_19957_20007 = state_19948__$1;(statearr_19957_20007[2] = null);
(statearr_19957_20007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 7))
{var inst_19924 = (state_19948[7]);var inst_19943 = (state_19948[2]);var inst_19944 = cljs.core.async.untap.call(null,drop_events,inst_19924);var state_19948__$1 = (function (){var statearr_19958 = state_19948;(statearr_19958[9] = inst_19943);
return statearr_19958;
})();var statearr_19959_20008 = state_19948__$1;(statearr_19959_20008[2] = inst_19944);
(statearr_19959_20008[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 8))
{var inst_19927 = (state_19948[8]);var inst_19932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19927);var state_19948__$1 = state_19948;var statearr_19961_20009 = state_19948__$1;(statearr_19961_20009[2] = inst_19932);
(statearr_19961_20009[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 9))
{var inst_19927 = (state_19948[8]);var state_19948__$1 = state_19948;var statearr_19962_20010 = state_19948__$1;(statearr_19962_20010[2] = inst_19927);
(statearr_19962_20010[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19949 === 10))
{var inst_19924 = (state_19948[7]);var inst_19935 = (state_19948[2]);var inst_19936 = cljs.core.get.call(null,inst_19935,new cljs.core.Keyword(null,"top","top",1014019271));var inst_19937 = cljs.core.get.call(null,inst_19935,new cljs.core.Keyword(null,"left","left",1017222009));var inst_19938 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);var inst_19939 = node.innerHTML = "Droped";var tmp19960 = inst_19924;var inst_19924__$1 = tmp19960;var state_19948__$1 = (function (){var statearr_19963 = state_19948;(statearr_19963[10] = inst_19937);
(statearr_19963[11] = inst_19938);
(statearr_19963[12] = inst_19939);
(statearr_19963[13] = inst_19936);
(statearr_19963[7] = inst_19924__$1);
return statearr_19963;
})();var statearr_19964_20011 = state_19948__$1;(statearr_19964_20011[2] = null);
(statearr_19964_20011[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_19968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19968[0] = state_machine__5581__auto__);
(statearr_19968[1] = 1);
return statearr_19968;
});
var state_machine__5581__auto____1 = (function (state_19948){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_19948);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e19969){if((e19969 instanceof Object))
{var ex__5584__auto__ = e19969;var statearr_19970_20012 = state_19948;(statearr_19970_20012[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20013 = state_19948;
state_19948 = G__20013;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_19948){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_19948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_19971 = f__5596__auto__.call(null);(statearr_19971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto__);
return statearr_19971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return c__5595__auto__;
});
ewen.dragdrop.examples.t19794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19796){var self__ = this;
var _19796__$1 = this;return self__.meta19795;
});
ewen.dragdrop.examples.t19794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19796,meta19795__$1){var self__ = this;
var _19796__$1 = this;return (new ewen.dragdrop.examples.t19794(self__.owner,self__.cursor,self__.hook_draggable,meta19795__$1));
});
ewen.dragdrop.examples.__GT_t19794 = (function __GT_t19794(owner__$1,cursor__$1,hook_draggable__$1,meta19795){return (new ewen.dragdrop.examples.t19794(owner__$1,cursor__$1,hook_draggable__$1,meta19795));
});
}
return (new ewen.dragdrop.examples.t19794(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20014 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20014 = (function (owner,app,meta20015){
this.owner = owner;
this.app = app;
this.meta20015 = meta20015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20014.cljs$lang$type = true;
ewen.dragdrop.examples.t20014.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20014";
ewen.dragdrop.examples.t20014.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20014");
});
ewen.dragdrop.examples.t20014.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20014.prototype.om$core$IRender$render$arity$1 = (function (this__9277__auto__){var self__ = this;
var this__9277__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20016){var self__ = this;
var _20016__$1 = this;return self__.meta20015;
});
ewen.dragdrop.examples.t20014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20016,meta20015__$1){var self__ = this;
var _20016__$1 = this;return (new ewen.dragdrop.examples.t20014(self__.owner,self__.app,meta20015__$1));
});
ewen.dragdrop.examples.__GT_t20014 = (function __GT_t20014(owner__$1,app__$1,meta20015){return (new ewen.dragdrop.examples.t20014(owner__$1,app__$1,meta20015));
});
}
return (new ewen.dragdrop.examples.t20014(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20195 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20195 = (function (owner,cursor,long_press_draggable,meta20196){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta20196 = meta20196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20195.cljs$lang$type = true;
ewen.dragdrop.examples.t20195.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20195";
ewen.dragdrop.examples.t20195.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20195");
});
ewen.dragdrop.examples.t20195.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20195.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20198 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20198,0,null);var y = cljs.core.nth.call(null,vec__20198,1,null);var vec__20199 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20199,0,null);var h = cljs.core.nth.call(null,vec__20199,1,null);var obj20201 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20201;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20203 = {"position":"static","z-index":0};return obj20203;
})():null));return React.DOM.div((function (){var obj20205 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj20205;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t20195.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20195.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20195.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20195.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20370 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_20371 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20370);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20371);
var up_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var down_events = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var move_events = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,(function (){return ewen.async_plus.close_BANG_.call(null,up_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,down_events);
}),(function (){return ewen.async_plus.close_BANG_.call(null,move_events);
})));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
var handle_events_20372 = ewen.async_plus.filter_LT_.call(null,(function (p1__20017_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20017_SHARP_);
}),dd_events);var c__5595__auto___20373 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_20233){var state_val_20234 = (state_20233[1]);if((state_val_20234 === 1))
{var inst_20206 = cljs.core.async.chan.call(null);var inst_20207 = cljs.core.async.tap.call(null,handle_events_20372,inst_20206);var inst_20208 = inst_20207;var state_20233__$1 = (function (){var statearr_20235 = state_20233;(statearr_20235[7] = inst_20208);
return statearr_20235;
})();var statearr_20236_20374 = state_20233__$1;(statearr_20236_20374[2] = null);
(statearr_20236_20374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 2))
{var inst_20208 = (state_20233[7]);var state_20233__$1 = state_20233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20233__$1,4,inst_20208);
} else
{if((state_val_20234 === 3))
{var inst_20231 = (state_20233[2]);var state_20233__$1 = state_20233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20233__$1,inst_20231);
} else
{if((state_val_20234 === 4))
{var inst_20211 = (state_20233[8]);var inst_20211__$1 = (state_20233[2]);var state_20233__$1 = (function (){var statearr_20237 = state_20233;(statearr_20237[8] = inst_20211__$1);
return statearr_20237;
})();if(cljs.core.truth_(inst_20211__$1))
{var statearr_20238_20375 = state_20233__$1;(statearr_20238_20375[1] = 5);
} else
{var statearr_20239_20376 = state_20233__$1;(statearr_20239_20376[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 5))
{var inst_20211 = (state_20233[8]);var inst_20214 = cljs.core.seq_QMARK_.call(null,inst_20211);var state_20233__$1 = state_20233;if(inst_20214)
{var statearr_20240_20377 = state_20233__$1;(statearr_20240_20377[1] = 8);
} else
{var statearr_20241_20378 = state_20233__$1;(statearr_20241_20378[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 6))
{var state_20233__$1 = state_20233;var statearr_20242_20379 = state_20233__$1;(statearr_20242_20379[2] = null);
(statearr_20242_20379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 7))
{var inst_20208 = (state_20233[7]);var inst_20228 = (state_20233[2]);var inst_20229 = cljs.core.async.untap.call(null,handle_events_20372,inst_20208);var state_20233__$1 = (function (){var statearr_20243 = state_20233;(statearr_20243[9] = inst_20228);
return statearr_20243;
})();var statearr_20244_20380 = state_20233__$1;(statearr_20244_20380[2] = inst_20229);
(statearr_20244_20380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 8))
{var inst_20211 = (state_20233[8]);var inst_20216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20211);var state_20233__$1 = state_20233;var statearr_20246_20381 = state_20233__$1;(statearr_20246_20381[2] = inst_20216);
(statearr_20246_20381[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 9))
{var inst_20211 = (state_20233[8]);var state_20233__$1 = state_20233;var statearr_20247_20382 = state_20233__$1;(statearr_20247_20382[2] = inst_20211);
(statearr_20247_20382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20234 === 10))
{var inst_20208 = (state_20233[7]);var inst_20219 = (state_20233[2]);var inst_20220 = cljs.core.get.call(null,inst_20219,new cljs.core.Keyword(null,"top","top",1014019271));var inst_20221 = cljs.core.get.call(null,inst_20219,new cljs.core.Keyword(null,"left","left",1017222009));var inst_20222 = [inst_20221,inst_20220];var inst_20223 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20222,null));var inst_20224 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),inst_20223);var tmp20245 = inst_20208;var inst_20208__$1 = tmp20245;var state_20233__$1 = (function (){var statearr_20248 = state_20233;(statearr_20248[10] = inst_20224);
(statearr_20248[7] = inst_20208__$1);
return statearr_20248;
})();var statearr_20249_20383 = state_20233__$1;(statearr_20249_20383[2] = null);
(statearr_20249_20383[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_20253 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20253[0] = state_machine__5581__auto__);
(statearr_20253[1] = 1);
return statearr_20253;
});
var state_machine__5581__auto____1 = (function (state_20233){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_20233);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e20254){if((e20254 instanceof Object))
{var ex__5584__auto__ = e20254;var statearr_20255_20384 = state_20233;(statearr_20255_20384[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20385 = state_20233;
state_20233 = G__20385;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_20233){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_20233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_20256 = f__5596__auto__.call(null);(statearr_20256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___20373);
return statearr_20256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drag_events_20386 = ewen.async_plus.filter_LT_.call(null,(function (p1__20018_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20018_SHARP_);
}),dd_events);var c__5595__auto___20387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_20297){var state_val_20298 = (state_20297[1]);if((state_val_20298 === 1))
{var inst_20257 = cljs.core.async.chan.call(null);var inst_20258 = cljs.core.async.tap.call(null,drag_events_20386,inst_20257);var inst_20259 = inst_20258;var state_20297__$1 = (function (){var statearr_20299 = state_20297;(statearr_20299[7] = inst_20259);
return statearr_20299;
})();var statearr_20300_20388 = state_20297__$1;(statearr_20300_20388[2] = null);
(statearr_20300_20388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 2))
{var inst_20259 = (state_20297[7]);var state_20297__$1 = state_20297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20297__$1,4,inst_20259);
} else
{if((state_val_20298 === 3))
{var inst_20295 = (state_20297[2]);var state_20297__$1 = state_20297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20297__$1,inst_20295);
} else
{if((state_val_20298 === 4))
{var inst_20262 = (state_20297[8]);var inst_20262__$1 = (state_20297[2]);var state_20297__$1 = (function (){var statearr_20301 = state_20297;(statearr_20301[8] = inst_20262__$1);
return statearr_20301;
})();if(cljs.core.truth_(inst_20262__$1))
{var statearr_20302_20389 = state_20297__$1;(statearr_20302_20389[1] = 5);
} else
{var statearr_20303_20390 = state_20297__$1;(statearr_20303_20390[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 5))
{var inst_20262 = (state_20297[8]);var inst_20265 = cljs.core.seq_QMARK_.call(null,inst_20262);var state_20297__$1 = state_20297;if(inst_20265)
{var statearr_20304_20391 = state_20297__$1;(statearr_20304_20391[1] = 8);
} else
{var statearr_20305_20392 = state_20297__$1;(statearr_20305_20392[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 6))
{var state_20297__$1 = state_20297;var statearr_20306_20393 = state_20297__$1;(statearr_20306_20393[2] = null);
(statearr_20306_20393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 7))
{var inst_20259 = (state_20297[7]);var inst_20292 = (state_20297[2]);var inst_20293 = cljs.core.async.untap.call(null,drag_events_20386,inst_20259);var state_20297__$1 = (function (){var statearr_20307 = state_20297;(statearr_20307[9] = inst_20292);
return statearr_20307;
})();var statearr_20308_20394 = state_20297__$1;(statearr_20308_20394[2] = inst_20293);
(statearr_20308_20394[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 8))
{var inst_20262 = (state_20297[8]);var inst_20267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20262);var state_20297__$1 = state_20297;var statearr_20310_20395 = state_20297__$1;(statearr_20310_20395[2] = inst_20267);
(statearr_20310_20395[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 9))
{var inst_20262 = (state_20297[8]);var state_20297__$1 = state_20297;var statearr_20311_20396 = state_20297__$1;(statearr_20311_20396[2] = inst_20262);
(statearr_20311_20396[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20298 === 10))
{var inst_20259 = (state_20297[7]);var inst_20270 = (state_20297[2]);var inst_20271 = cljs.core.get.call(null,inst_20270,new cljs.core.Keyword(null,"top","top",1014019271));var inst_20272 = cljs.core.get.call(null,inst_20270,new cljs.core.Keyword(null,"left","left",1017222009));var inst_20275 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var inst_20276 = cljs.core.nth.call(null,inst_20275,0,null);var inst_20277 = cljs.core.nth.call(null,inst_20275,1,null);var inst_20278 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var inst_20279 = cljs.core.nth.call(null,inst_20278,0,null);var inst_20280 = cljs.core.nth.call(null,inst_20278,1,null);var inst_20281 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);var inst_20282 = (inst_20272 - inst_20279);var inst_20283 = (inst_20276 + inst_20282);var inst_20284 = (inst_20271 - inst_20280);var inst_20285 = (inst_20277 + inst_20284);var inst_20286 = [inst_20283,inst_20285];var inst_20287 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20286,null));var inst_20288 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),inst_20287);var tmp20309 = inst_20259;var inst_20259__$1 = tmp20309;var state_20297__$1 = (function (){var statearr_20312 = state_20297;(statearr_20312[10] = inst_20281);
(statearr_20312[11] = inst_20288);
(statearr_20312[7] = inst_20259__$1);
return statearr_20312;
})();var statearr_20313_20397 = state_20297__$1;(statearr_20313_20397[2] = null);
(statearr_20313_20397[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_20317 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20317[0] = state_machine__5581__auto__);
(statearr_20317[1] = 1);
return statearr_20317;
});
var state_machine__5581__auto____1 = (function (state_20297){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_20297);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e20318){if((e20318 instanceof Object))
{var ex__5584__auto__ = e20318;var statearr_20319_20398 = state_20297;(statearr_20319_20398[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20399 = state_20297;
state_20297 = G__20399;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_20297){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_20297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_20320 = f__5596__auto__.call(null);(statearr_20320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto___20387);
return statearr_20320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
var drop_events = ewen.async_plus.filter_LT_.call(null,(function (p1__20019_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20019_SHARP_);
}),dd_events);var c__5595__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5596__auto__ = (function (){var switch__5580__auto__ = (function (state_20346){var state_val_20347 = (state_20346[1]);if((state_val_20347 === 1))
{var inst_20321 = cljs.core.async.chan.call(null);var inst_20322 = cljs.core.async.tap.call(null,drop_events,inst_20321);var inst_20323 = inst_20322;var state_20346__$1 = (function (){var statearr_20348 = state_20346;(statearr_20348[7] = inst_20323);
return statearr_20348;
})();var statearr_20349_20400 = state_20346__$1;(statearr_20349_20400[2] = null);
(statearr_20349_20400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 2))
{var inst_20323 = (state_20346[7]);var state_20346__$1 = state_20346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20346__$1,4,inst_20323);
} else
{if((state_val_20347 === 3))
{var inst_20344 = (state_20346[2]);var state_20346__$1 = state_20346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20346__$1,inst_20344);
} else
{if((state_val_20347 === 4))
{var inst_20326 = (state_20346[8]);var inst_20326__$1 = (state_20346[2]);var state_20346__$1 = (function (){var statearr_20350 = state_20346;(statearr_20350[8] = inst_20326__$1);
return statearr_20350;
})();if(cljs.core.truth_(inst_20326__$1))
{var statearr_20351_20401 = state_20346__$1;(statearr_20351_20401[1] = 5);
} else
{var statearr_20352_20402 = state_20346__$1;(statearr_20352_20402[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 5))
{var inst_20326 = (state_20346[8]);var inst_20329 = cljs.core.seq_QMARK_.call(null,inst_20326);var state_20346__$1 = state_20346;if(inst_20329)
{var statearr_20353_20403 = state_20346__$1;(statearr_20353_20403[1] = 8);
} else
{var statearr_20354_20404 = state_20346__$1;(statearr_20354_20404[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 6))
{var state_20346__$1 = state_20346;var statearr_20355_20405 = state_20346__$1;(statearr_20355_20405[2] = null);
(statearr_20355_20405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 7))
{var inst_20323 = (state_20346[7]);var inst_20341 = (state_20346[2]);var inst_20342 = cljs.core.async.untap.call(null,drop_events,inst_20323);var state_20346__$1 = (function (){var statearr_20356 = state_20346;(statearr_20356[9] = inst_20341);
return statearr_20356;
})();var statearr_20357_20406 = state_20346__$1;(statearr_20357_20406[2] = inst_20342);
(statearr_20357_20406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 8))
{var inst_20326 = (state_20346[8]);var inst_20331 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20326);var state_20346__$1 = state_20346;var statearr_20359_20407 = state_20346__$1;(statearr_20359_20407[2] = inst_20331);
(statearr_20359_20407[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 9))
{var inst_20326 = (state_20346[8]);var state_20346__$1 = state_20346;var statearr_20360_20408 = state_20346__$1;(statearr_20360_20408[2] = inst_20326);
(statearr_20360_20408[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20347 === 10))
{var inst_20323 = (state_20346[7]);var inst_20334 = (state_20346[2]);var inst_20335 = cljs.core.get.call(null,inst_20334,new cljs.core.Keyword(null,"top","top",1014019271));var inst_20336 = cljs.core.get.call(null,inst_20334,new cljs.core.Keyword(null,"left","left",1017222009));var inst_20337 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);var tmp20358 = inst_20323;var inst_20323__$1 = tmp20358;var state_20346__$1 = (function (){var statearr_20361 = state_20346;(statearr_20361[10] = inst_20337);
(statearr_20361[7] = inst_20323__$1);
(statearr_20361[11] = inst_20335);
(statearr_20361[12] = inst_20336);
return statearr_20361;
})();var statearr_20362_20409 = state_20346__$1;(statearr_20362_20409[2] = null);
(statearr_20362_20409[1] = 2);
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
});return ((function (switch__5580__auto__){
return (function() {
var state_machine__5581__auto__ = null;
var state_machine__5581__auto____0 = (function (){var statearr_20366 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20366[0] = state_machine__5581__auto__);
(statearr_20366[1] = 1);
return statearr_20366;
});
var state_machine__5581__auto____1 = (function (state_20346){while(true){
var ret_value__5582__auto__ = (function (){try{while(true){
var result__5583__auto__ = switch__5580__auto__.call(null,state_20346);if(cljs.core.keyword_identical_QMARK_.call(null,result__5583__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5583__auto__;
}
break;
}
}catch (e20367){if((e20367 instanceof Object))
{var ex__5584__auto__ = e20367;var statearr_20368_20410 = state_20346;(statearr_20368_20410[5] = ex__5584__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5582__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20411 = state_20346;
state_20346 = G__20411;
continue;
}
} else
{return ret_value__5582__auto__;
}
break;
}
});
state_machine__5581__auto__ = function(state_20346){
switch(arguments.length){
case 0:
return state_machine__5581__auto____0.call(this);
case 1:
return state_machine__5581__auto____1.call(this,state_20346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5581__auto____0;
state_machine__5581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5581__auto____1;
return state_machine__5581__auto__;
})()
;})(switch__5580__auto__))
})();var state__5597__auto__ = (function (){var statearr_20369 = f__5596__auto__.call(null);(statearr_20369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5595__auto__);
return statearr_20369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5597__auto__);
}));
return c__5595__auto__;
});
ewen.dragdrop.examples.t20195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20197){var self__ = this;
var _20197__$1 = this;return self__.meta20196;
});
ewen.dragdrop.examples.t20195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20197,meta20196__$1){var self__ = this;
var _20197__$1 = this;return (new ewen.dragdrop.examples.t20195(self__.owner,self__.cursor,self__.long_press_draggable,meta20196__$1));
});
ewen.dragdrop.examples.__GT_t20195 = (function __GT_t20195(owner__$1,cursor__$1,long_press_draggable__$1,meta20196){return (new ewen.dragdrop.examples.t20195(owner__$1,cursor__$1,long_press_draggable__$1,meta20196));
});
}
return (new ewen.dragdrop.examples.t20195(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20412 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20412 = (function (owner,app,meta20413){
this.owner = owner;
this.app = app;
this.meta20413 = meta20413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20412.cljs$lang$type = true;
ewen.dragdrop.examples.t20412.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20412";
ewen.dragdrop.examples.t20412.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20412");
});
ewen.dragdrop.examples.t20412.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20412.prototype.om$core$IRender$render$arity$1 = (function (this__9277__auto__){var self__ = this;
var this__9277__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20414){var self__ = this;
var _20414__$1 = this;return self__.meta20413;
});
ewen.dragdrop.examples.t20412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20414,meta20413__$1){var self__ = this;
var _20414__$1 = this;return (new ewen.dragdrop.examples.t20412(self__.owner,self__.app,meta20413__$1));
});
ewen.dragdrop.examples.__GT_t20412 = (function __GT_t20412(owner__$1,app__$1,meta20413){return (new ewen.dragdrop.examples.t20412(owner__$1,app__$1,meta20413));
});
}
return (new ewen.dragdrop.examples.t20412(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map