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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20668 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20668 = (function (owner,cursor,typical_draggable,meta20669){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta20669 = meta20669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20668.cljs$lang$type = true;
ewen.dragdrop.examples.t20668.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20668";
ewen.dragdrop.examples.t20668.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20668");
});
ewen.dragdrop.examples.t20668.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20668.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20671 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20671,0,null);var y = cljs.core.nth.call(null,vec__20671,1,null);var vec__20672 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20672,0,null);var h = cljs.core.nth.call(null,vec__20672,1,null);var obj20674 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20674;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20676 = {"position":"static","z-index":0};return obj20676;
})():null));return React.DOM.div((function (){var obj20678 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj20678;
})(),"Drag me!");
});
ewen.dragdrop.examples.t20668.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20668.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20668.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20668.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20688 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_20689 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20688);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20689);
var vec__20679 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__20679,0,null);var up_unlisten = cljs.core.nth.call(null,vec__20679,1,null);var vec__20680 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__20680,0,null);var down_unlisten = cljs.core.nth.call(null,vec__20680,1,null);var vec__20681 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__20681,0,null);var move_unlisten = cljs.core.nth.call(null,vec__20681,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__20682){var map__20683 = p__20682;var map__20683__$1 = ((cljs.core.seq_QMARK_.call(null,map__20683))?cljs.core.apply.call(null,cljs.core.hash_map,map__20683):map__20683);var top = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20645_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20645_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__20684){var map__20685 = p__20684;var map__20685__$1 = ((cljs.core.seq_QMARK_.call(null,map__20685))?cljs.core.apply.call(null,cljs.core.hash_map,map__20685):map__20685);var top = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__20686 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__20686,0,null);var init_top = cljs.core.nth.call(null,vec__20686,1,null);var vec__20687 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__20687,0,null);var handle_top = cljs.core.nth.call(null,vec__20687,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20646_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20646_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20647_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20647_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20670){var self__ = this;
var _20670__$1 = this;return self__.meta20669;
});
ewen.dragdrop.examples.t20668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20670,meta20669__$1){var self__ = this;
var _20670__$1 = this;return (new ewen.dragdrop.examples.t20668(self__.owner,self__.cursor,self__.typical_draggable,meta20669__$1));
});
ewen.dragdrop.examples.__GT_t20668 = (function __GT_t20668(owner__$1,cursor__$1,typical_draggable__$1,meta20669){return (new ewen.dragdrop.examples.t20668(owner__$1,cursor__$1,typical_draggable__$1,meta20669));
});
}
return (new ewen.dragdrop.examples.t20668(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20690 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20690 = (function (owner,app,meta20691){
this.owner = owner;
this.app = app;
this.meta20691 = meta20691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20690.cljs$lang$type = true;
ewen.dragdrop.examples.t20690.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20690";
ewen.dragdrop.examples.t20690.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20690");
});
ewen.dragdrop.examples.t20690.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20690.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20692){var self__ = this;
var _20692__$1 = this;return self__.meta20691;
});
ewen.dragdrop.examples.t20690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20692,meta20691__$1){var self__ = this;
var _20692__$1 = this;return (new ewen.dragdrop.examples.t20690(self__.owner,self__.app,meta20691__$1));
});
ewen.dragdrop.examples.__GT_t20690 = (function __GT_t20690(owner__$1,app__$1,meta20691){return (new ewen.dragdrop.examples.t20690(owner__$1,app__$1,meta20691));
});
}
return (new ewen.dragdrop.examples.t20690(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20716 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20716 = (function (owner,cursor,delayed_draggable,meta20717){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta20717 = meta20717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20716.cljs$lang$type = true;
ewen.dragdrop.examples.t20716.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20716";
ewen.dragdrop.examples.t20716.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20716");
});
ewen.dragdrop.examples.t20716.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20716.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20719 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20719,0,null);var y = cljs.core.nth.call(null,vec__20719,1,null);var vec__20720 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20720,0,null);var h = cljs.core.nth.call(null,vec__20720,1,null);var obj20722 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20722;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20724 = {"position":"static","z-index":0};return obj20724;
})():null));return React.DOM.div((function (){var obj20726 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj20726;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t20716.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20716.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20716.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20716.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20736 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_20737 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20736);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20737);
var vec__20727 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__20727,0,null);var up_unlisten = cljs.core.nth.call(null,vec__20727,1,null);var vec__20728 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__20728,0,null);var down_unlisten = cljs.core.nth.call(null,vec__20728,1,null);var vec__20729 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__20729,0,null);var move_unlisten = cljs.core.nth.call(null,vec__20729,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__20730){var map__20731 = p__20730;var map__20731__$1 = ((cljs.core.seq_QMARK_.call(null,map__20731))?cljs.core.apply.call(null,cljs.core.hash_map,map__20731):map__20731);var top = cljs.core.get.call(null,map__20731__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20731__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20693_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20693_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__20732){var map__20733 = p__20732;var map__20733__$1 = ((cljs.core.seq_QMARK_.call(null,map__20733))?cljs.core.apply.call(null,cljs.core.hash_map,map__20733):map__20733);var top = cljs.core.get.call(null,map__20733__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20733__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__20734 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__20734,0,null);var init_top = cljs.core.nth.call(null,vec__20734,1,null);var vec__20735 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__20735,0,null);var handle_top = cljs.core.nth.call(null,vec__20735,1,null);return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20694_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20694_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20695_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20695_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20718){var self__ = this;
var _20718__$1 = this;return self__.meta20717;
});
ewen.dragdrop.examples.t20716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20718,meta20717__$1){var self__ = this;
var _20718__$1 = this;return (new ewen.dragdrop.examples.t20716(self__.owner,self__.cursor,self__.delayed_draggable,meta20717__$1));
});
ewen.dragdrop.examples.__GT_t20716 = (function __GT_t20716(owner__$1,cursor__$1,delayed_draggable__$1,meta20717){return (new ewen.dragdrop.examples.t20716(owner__$1,cursor__$1,delayed_draggable__$1,meta20717));
});
}
return (new ewen.dragdrop.examples.t20716(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20738 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20738 = (function (owner,app,meta20739){
this.owner = owner;
this.app = app;
this.meta20739 = meta20739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20738.cljs$lang$type = true;
ewen.dragdrop.examples.t20738.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20738";
ewen.dragdrop.examples.t20738.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20738");
});
ewen.dragdrop.examples.t20738.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20738.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20740){var self__ = this;
var _20740__$1 = this;return self__.meta20739;
});
ewen.dragdrop.examples.t20738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20740,meta20739__$1){var self__ = this;
var _20740__$1 = this;return (new ewen.dragdrop.examples.t20738(self__.owner,self__.app,meta20739__$1));
});
ewen.dragdrop.examples.__GT_t20738 = (function __GT_t20738(owner__$1,app__$1,meta20739){return (new ewen.dragdrop.examples.t20738(owner__$1,app__$1,meta20739));
});
}
return (new ewen.dragdrop.examples.t20738(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20764 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20764 = (function (owner,cursor,hook_draggable,meta20765){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta20765 = meta20765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20764.cljs$lang$type = true;
ewen.dragdrop.examples.t20764.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20764";
ewen.dragdrop.examples.t20764.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20764");
});
ewen.dragdrop.examples.t20764.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20764.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20767 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20767,0,null);var y = cljs.core.nth.call(null,vec__20767,1,null);var vec__20768 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20768,0,null);var h = cljs.core.nth.call(null,vec__20768,1,null);var obj20770 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20770;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20772 = {"position":"static","z-index":0};return obj20772;
})():null));return React.DOM.div((function (){var obj20774 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj20774;
})(),"Drag me!");
});
ewen.dragdrop.examples.t20764.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20764.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20764.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20764.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20784 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_20785 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20784);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20785);
var vec__20775 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__20775,0,null);var up_unlisten = cljs.core.nth.call(null,vec__20775,1,null);var vec__20776 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__20776,0,null);var down_unlisten = cljs.core.nth.call(null,vec__20776,1,null);var vec__20777 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__20777,0,null);var move_unlisten = cljs.core.nth.call(null,vec__20777,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__20778){var map__20779 = p__20778;var map__20779__$1 = ((cljs.core.seq_QMARK_.call(null,map__20779))?cljs.core.apply.call(null,cljs.core.hash_map,map__20779):map__20779);var top = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20741_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20741_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__20780){var map__20781 = p__20780;var map__20781__$1 = ((cljs.core.seq_QMARK_.call(null,map__20781))?cljs.core.apply.call(null,cljs.core.hash_map,map__20781):map__20781);var top = cljs.core.get.call(null,map__20781__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20781__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__20782 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__20782,0,null);var init_top = cljs.core.nth.call(null,vec__20782,1,null);var vec__20783 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__20783,0,null);var handle_top = cljs.core.nth.call(null,vec__20783,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20742_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20742_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20743_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20743_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20766){var self__ = this;
var _20766__$1 = this;return self__.meta20765;
});
ewen.dragdrop.examples.t20764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20766,meta20765__$1){var self__ = this;
var _20766__$1 = this;return (new ewen.dragdrop.examples.t20764(self__.owner,self__.cursor,self__.hook_draggable,meta20765__$1));
});
ewen.dragdrop.examples.__GT_t20764 = (function __GT_t20764(owner__$1,cursor__$1,hook_draggable__$1,meta20765){return (new ewen.dragdrop.examples.t20764(owner__$1,cursor__$1,hook_draggable__$1,meta20765));
});
}
return (new ewen.dragdrop.examples.t20764(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20786 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20786 = (function (owner,app,meta20787){
this.owner = owner;
this.app = app;
this.meta20787 = meta20787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20786.cljs$lang$type = true;
ewen.dragdrop.examples.t20786.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20786";
ewen.dragdrop.examples.t20786.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20786");
});
ewen.dragdrop.examples.t20786.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20786.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20788){var self__ = this;
var _20788__$1 = this;return self__.meta20787;
});
ewen.dragdrop.examples.t20786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20788,meta20787__$1){var self__ = this;
var _20788__$1 = this;return (new ewen.dragdrop.examples.t20786(self__.owner,self__.app,meta20787__$1));
});
ewen.dragdrop.examples.__GT_t20786 = (function __GT_t20786(owner__$1,app__$1,meta20787){return (new ewen.dragdrop.examples.t20786(owner__$1,app__$1,meta20787));
});
}
return (new ewen.dragdrop.examples.t20786(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20812 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20812 = (function (owner,cursor,long_press_draggable,meta20813){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta20813 = meta20813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20812.cljs$lang$type = true;
ewen.dragdrop.examples.t20812.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20812";
ewen.dragdrop.examples.t20812.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20812");
});
ewen.dragdrop.examples.t20812.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20812.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20815 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20815,0,null);var y = cljs.core.nth.call(null,vec__20815,1,null);var vec__20816 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20816,0,null);var h = cljs.core.nth.call(null,vec__20816,1,null);var obj20818 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20818;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20820 = {"position":"static","z-index":0};return obj20820;
})():null));return React.DOM.div((function (){var obj20822 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj20822;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t20812.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20812.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20812.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20812.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20832 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_20833 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20832);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20833);
var vec__20823 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__20823,0,null);var up_unlisten = cljs.core.nth.call(null,vec__20823,1,null);var vec__20824 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__20824,0,null);var down_unlisten = cljs.core.nth.call(null,vec__20824,1,null);var vec__20825 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__20825,0,null);var move_unlisten = cljs.core.nth.call(null,vec__20825,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__20826){var map__20827 = p__20826;var map__20827__$1 = ((cljs.core.seq_QMARK_.call(null,map__20827))?cljs.core.apply.call(null,cljs.core.hash_map,map__20827):map__20827);var top = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20789_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20789_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__20828){var map__20829 = p__20828;var map__20829__$1 = ((cljs.core.seq_QMARK_.call(null,map__20829))?cljs.core.apply.call(null,cljs.core.hash_map,map__20829):map__20829);var top = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__20830 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__20830,0,null);var init_top = cljs.core.nth.call(null,vec__20830,1,null);var vec__20831 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__20831,0,null);var handle_top = cljs.core.nth.call(null,vec__20831,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20790_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20790_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20791_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20791_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20814){var self__ = this;
var _20814__$1 = this;return self__.meta20813;
});
ewen.dragdrop.examples.t20812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20814,meta20813__$1){var self__ = this;
var _20814__$1 = this;return (new ewen.dragdrop.examples.t20812(self__.owner,self__.cursor,self__.long_press_draggable,meta20813__$1));
});
ewen.dragdrop.examples.__GT_t20812 = (function __GT_t20812(owner__$1,cursor__$1,long_press_draggable__$1,meta20813){return (new ewen.dragdrop.examples.t20812(owner__$1,cursor__$1,long_press_draggable__$1,meta20813));
});
}
return (new ewen.dragdrop.examples.t20812(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20834 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20834 = (function (owner,app,meta20835){
this.owner = owner;
this.app = app;
this.meta20835 = meta20835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20834.cljs$lang$type = true;
ewen.dragdrop.examples.t20834.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20834";
ewen.dragdrop.examples.t20834.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20834");
});
ewen.dragdrop.examples.t20834.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20834.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20836){var self__ = this;
var _20836__$1 = this;return self__.meta20835;
});
ewen.dragdrop.examples.t20834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20836,meta20835__$1){var self__ = this;
var _20836__$1 = this;return (new ewen.dragdrop.examples.t20834(self__.owner,self__.app,meta20835__$1));
});
ewen.dragdrop.examples.__GT_t20834 = (function __GT_t20834(owner__$1,app__$1,meta20835){return (new ewen.dragdrop.examples.t20834(owner__$1,app__$1,meta20835));
});
}
return (new ewen.dragdrop.examples.t20834(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map