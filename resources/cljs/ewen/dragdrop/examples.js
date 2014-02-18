// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.dragdrop.examples');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('schema.core');
goog.require('ewen.flapjax_cljs');
goog.require('domina.events');
goog.require('schema.core');
goog.require('goog.style');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('ewen.flapjax_cljs');
goog.require('om.core');
goog.require('domina');
goog.require('om.dom');
goog.require('ewen.dragdrop');
goog.require('ewen.dragdrop');
goog.require('goog.style');
goog.require('domina.css');
cljs.core.enable_console_print_BANG_.call(null);
ewen.dragdrop.examples.gsize__GT_vec = (function gsize__GT_vec(size){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size.width,size.height], null);
});
ewen.dragdrop.examples.gloc__GT_vec = (function gloc__GT_vec(loc){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc.x,loc.y], null);
});
ewen.dragdrop.examples.dragging_QMARK_ = (function dragging_QMARK_(owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633));
});
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25776 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25776 = (function (owner,cursor,typical_draggable,meta25777){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta25777 = meta25777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25776.cljs$lang$type = true;
ewen.dragdrop.examples.t25776.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25776";
ewen.dragdrop.examples.t25776.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25776");
});
ewen.dragdrop.examples.t25776.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25776.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25779 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25779,0,null);var y = cljs.core.nth.call(null,vec__25779,1,null);var vec__25780 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25780,0,null);var h = cljs.core.nth.call(null,vec__25780,1,null);var obj25782 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25782;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25784 = {"position":"static","z-index":0};return obj25784;
})():null));return React.DOM.div((function (){var obj25786 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj25786;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25776.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25776.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25776.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25776.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25796 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_25797 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25796);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25797);
var vec__25787 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25787,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25787,1,null);var vec__25788 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25788,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25788,1,null);var vec__25789 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25789,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25789,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__25747_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25747_SHARP_).pageX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25748_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__25748_SHARP_)))].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25749_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25749_SHARP_).clientX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25750_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25750_SHARP_).offsetX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25751_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25751_SHARP_).screenX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25752_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__25752_SHARP_).getBrowserEvent()))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25790){var map__25791 = p__25790;var map__25791__$1 = ((cljs.core.seq_QMARK_.call(null,map__25791))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);var top = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25753_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25753_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25792){var map__25793 = p__25792;var map__25793__$1 = ((cljs.core.seq_QMARK_.call(null,map__25793))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);var top = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25794 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25794,0,null);var init_top = cljs.core.nth.call(null,vec__25794,1,null);var vec__25795 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25795,0,null);var handle_top = cljs.core.nth.call(null,vec__25795,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25754_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25754_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25755_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25755_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25778){var self__ = this;
var _25778__$1 = this;return self__.meta25777;
});
ewen.dragdrop.examples.t25776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25778,meta25777__$1){var self__ = this;
var _25778__$1 = this;return (new ewen.dragdrop.examples.t25776(self__.owner,self__.cursor,self__.typical_draggable,meta25777__$1));
});
ewen.dragdrop.examples.__GT_t25776 = (function __GT_t25776(owner__$1,cursor__$1,typical_draggable__$1,meta25777){return (new ewen.dragdrop.examples.t25776(owner__$1,cursor__$1,typical_draggable__$1,meta25777));
});
}
return (new ewen.dragdrop.examples.t25776(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25798 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25798 = (function (owner,app,meta25799){
this.owner = owner;
this.app = app;
this.meta25799 = meta25799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25798.cljs$lang$type = true;
ewen.dragdrop.examples.t25798.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25798";
ewen.dragdrop.examples.t25798.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25798");
});
ewen.dragdrop.examples.t25798.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25798.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25800){var self__ = this;
var _25800__$1 = this;return self__.meta25799;
});
ewen.dragdrop.examples.t25798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25800,meta25799__$1){var self__ = this;
var _25800__$1 = this;return (new ewen.dragdrop.examples.t25798(self__.owner,self__.app,meta25799__$1));
});
ewen.dragdrop.examples.__GT_t25798 = (function __GT_t25798(owner__$1,app__$1,meta25799){return (new ewen.dragdrop.examples.t25798(owner__$1,app__$1,meta25799));
});
}
return (new ewen.dragdrop.examples.t25798(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25824 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25824 = (function (owner,cursor,delayed_draggable,meta25825){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta25825 = meta25825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25824.cljs$lang$type = true;
ewen.dragdrop.examples.t25824.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25824";
ewen.dragdrop.examples.t25824.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25824");
});
ewen.dragdrop.examples.t25824.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25824.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25827 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25827,0,null);var y = cljs.core.nth.call(null,vec__25827,1,null);var vec__25828 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25828,0,null);var h = cljs.core.nth.call(null,vec__25828,1,null);var obj25830 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25830;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25832 = {"position":"static","z-index":0};return obj25832;
})():null));return React.DOM.div((function (){var obj25834 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj25834;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t25824.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25824.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25824.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25824.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25844 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_25845 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25844);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25845);
var vec__25835 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25835,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25835,1,null);var vec__25836 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25836,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25836,1,null);var vec__25837 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25837,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25837,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25838){var map__25839 = p__25838;var map__25839__$1 = ((cljs.core.seq_QMARK_.call(null,map__25839))?cljs.core.apply.call(null,cljs.core.hash_map,map__25839):map__25839);var top = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25801_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25801_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25840){var map__25841 = p__25840;var map__25841__$1 = ((cljs.core.seq_QMARK_.call(null,map__25841))?cljs.core.apply.call(null,cljs.core.hash_map,map__25841):map__25841);var top = cljs.core.get.call(null,map__25841__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25841__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25842 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25842,0,null);var init_top = cljs.core.nth.call(null,vec__25842,1,null);var vec__25843 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25843,0,null);var handle_top = cljs.core.nth.call(null,vec__25843,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25802_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25802_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25803_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25803_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25826){var self__ = this;
var _25826__$1 = this;return self__.meta25825;
});
ewen.dragdrop.examples.t25824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25826,meta25825__$1){var self__ = this;
var _25826__$1 = this;return (new ewen.dragdrop.examples.t25824(self__.owner,self__.cursor,self__.delayed_draggable,meta25825__$1));
});
ewen.dragdrop.examples.__GT_t25824 = (function __GT_t25824(owner__$1,cursor__$1,delayed_draggable__$1,meta25825){return (new ewen.dragdrop.examples.t25824(owner__$1,cursor__$1,delayed_draggable__$1,meta25825));
});
}
return (new ewen.dragdrop.examples.t25824(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25846 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25846 = (function (owner,app,meta25847){
this.owner = owner;
this.app = app;
this.meta25847 = meta25847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25846.cljs$lang$type = true;
ewen.dragdrop.examples.t25846.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25846";
ewen.dragdrop.examples.t25846.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25846");
});
ewen.dragdrop.examples.t25846.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25846.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25848){var self__ = this;
var _25848__$1 = this;return self__.meta25847;
});
ewen.dragdrop.examples.t25846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25848,meta25847__$1){var self__ = this;
var _25848__$1 = this;return (new ewen.dragdrop.examples.t25846(self__.owner,self__.app,meta25847__$1));
});
ewen.dragdrop.examples.__GT_t25846 = (function __GT_t25846(owner__$1,app__$1,meta25847){return (new ewen.dragdrop.examples.t25846(owner__$1,app__$1,meta25847));
});
}
return (new ewen.dragdrop.examples.t25846(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25872 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25872 = (function (owner,cursor,hook_draggable,meta25873){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta25873 = meta25873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25872.cljs$lang$type = true;
ewen.dragdrop.examples.t25872.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25872";
ewen.dragdrop.examples.t25872.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25872");
});
ewen.dragdrop.examples.t25872.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25872.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25875 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25875,0,null);var y = cljs.core.nth.call(null,vec__25875,1,null);var vec__25876 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25876,0,null);var h = cljs.core.nth.call(null,vec__25876,1,null);var obj25878 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25878;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25880 = {"position":"static","z-index":0};return obj25880;
})():null));return React.DOM.div((function (){var obj25882 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj25882;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25872.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25872.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25872.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25872.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25892 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_25893 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25892);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25893);
var vec__25883 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25883,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25883,1,null);var vec__25884 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25884,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25884,1,null);var vec__25885 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25885,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25885,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25886){var map__25887 = p__25886;var map__25887__$1 = ((cljs.core.seq_QMARK_.call(null,map__25887))?cljs.core.apply.call(null,cljs.core.hash_map,map__25887):map__25887);var top = cljs.core.get.call(null,map__25887__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25887__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25849_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25849_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25888){var map__25889 = p__25888;var map__25889__$1 = ((cljs.core.seq_QMARK_.call(null,map__25889))?cljs.core.apply.call(null,cljs.core.hash_map,map__25889):map__25889);var top = cljs.core.get.call(null,map__25889__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25889__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25890 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25890,0,null);var init_top = cljs.core.nth.call(null,vec__25890,1,null);var vec__25891 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25891,0,null);var handle_top = cljs.core.nth.call(null,vec__25891,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25850_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25850_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25851_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25851_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25874){var self__ = this;
var _25874__$1 = this;return self__.meta25873;
});
ewen.dragdrop.examples.t25872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25874,meta25873__$1){var self__ = this;
var _25874__$1 = this;return (new ewen.dragdrop.examples.t25872(self__.owner,self__.cursor,self__.hook_draggable,meta25873__$1));
});
ewen.dragdrop.examples.__GT_t25872 = (function __GT_t25872(owner__$1,cursor__$1,hook_draggable__$1,meta25873){return (new ewen.dragdrop.examples.t25872(owner__$1,cursor__$1,hook_draggable__$1,meta25873));
});
}
return (new ewen.dragdrop.examples.t25872(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25894 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25894 = (function (owner,app,meta25895){
this.owner = owner;
this.app = app;
this.meta25895 = meta25895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25894.cljs$lang$type = true;
ewen.dragdrop.examples.t25894.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25894";
ewen.dragdrop.examples.t25894.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25894");
});
ewen.dragdrop.examples.t25894.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25894.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25896){var self__ = this;
var _25896__$1 = this;return self__.meta25895;
});
ewen.dragdrop.examples.t25894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25896,meta25895__$1){var self__ = this;
var _25896__$1 = this;return (new ewen.dragdrop.examples.t25894(self__.owner,self__.app,meta25895__$1));
});
ewen.dragdrop.examples.__GT_t25894 = (function __GT_t25894(owner__$1,app__$1,meta25895){return (new ewen.dragdrop.examples.t25894(owner__$1,app__$1,meta25895));
});
}
return (new ewen.dragdrop.examples.t25894(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25920 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25920 = (function (owner,cursor,long_press_draggable,meta25921){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta25921 = meta25921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25920.cljs$lang$type = true;
ewen.dragdrop.examples.t25920.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25920";
ewen.dragdrop.examples.t25920.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25920");
});
ewen.dragdrop.examples.t25920.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25920.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25923 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25923,0,null);var y = cljs.core.nth.call(null,vec__25923,1,null);var vec__25924 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25924,0,null);var h = cljs.core.nth.call(null,vec__25924,1,null);var obj25926 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25926;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25928 = {"position":"static","z-index":0};return obj25928;
})():null));return React.DOM.div((function (){var obj25930 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj25930;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t25920.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25920.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25920.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25920.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25940 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_25941 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25940);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25941);
var vec__25931 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25931,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25931,1,null);var vec__25932 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25932,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25932,1,null);var vec__25933 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25933,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25933,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25934){var map__25935 = p__25934;var map__25935__$1 = ((cljs.core.seq_QMARK_.call(null,map__25935))?cljs.core.apply.call(null,cljs.core.hash_map,map__25935):map__25935);var top = cljs.core.get.call(null,map__25935__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25935__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25897_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25897_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25936){var map__25937 = p__25936;var map__25937__$1 = ((cljs.core.seq_QMARK_.call(null,map__25937))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937):map__25937);var top = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25938 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25938,0,null);var init_top = cljs.core.nth.call(null,vec__25938,1,null);var vec__25939 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25939,0,null);var handle_top = cljs.core.nth.call(null,vec__25939,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25898_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25898_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25899_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25899_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25922){var self__ = this;
var _25922__$1 = this;return self__.meta25921;
});
ewen.dragdrop.examples.t25920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25922,meta25921__$1){var self__ = this;
var _25922__$1 = this;return (new ewen.dragdrop.examples.t25920(self__.owner,self__.cursor,self__.long_press_draggable,meta25921__$1));
});
ewen.dragdrop.examples.__GT_t25920 = (function __GT_t25920(owner__$1,cursor__$1,long_press_draggable__$1,meta25921){return (new ewen.dragdrop.examples.t25920(owner__$1,cursor__$1,long_press_draggable__$1,meta25921));
});
}
return (new ewen.dragdrop.examples.t25920(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25942 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25942 = (function (owner,app,meta25943){
this.owner = owner;
this.app = app;
this.meta25943 = meta25943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25942.cljs$lang$type = true;
ewen.dragdrop.examples.t25942.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25942";
ewen.dragdrop.examples.t25942.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25942");
});
ewen.dragdrop.examples.t25942.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25942.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25944){var self__ = this;
var _25944__$1 = this;return self__.meta25943;
});
ewen.dragdrop.examples.t25942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25944,meta25943__$1){var self__ = this;
var _25944__$1 = this;return (new ewen.dragdrop.examples.t25942(self__.owner,self__.app,meta25943__$1));
});
ewen.dragdrop.examples.__GT_t25942 = (function __GT_t25942(owner__$1,app__$1,meta25943){return (new ewen.dragdrop.examples.t25942(owner__$1,app__$1,meta25943));
});
}
return (new ewen.dragdrop.examples.t25942(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map