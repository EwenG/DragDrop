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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23438 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23438 = (function (owner,cursor,typical_draggable,meta23439){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta23439 = meta23439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23438.cljs$lang$type = true;
ewen.dragdrop.examples.t23438.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23438";
ewen.dragdrop.examples.t23438.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23438");
});
ewen.dragdrop.examples.t23438.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23438.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23441 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23441,0,null);var y = cljs.core.nth.call(null,vec__23441,1,null);var vec__23442 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23442,0,null);var h = cljs.core.nth.call(null,vec__23442,1,null);var obj23444 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23444;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23446 = {"position":"static","z-index":0};return obj23446;
})():null));return React.DOM.div((function (){var obj23448 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj23448;
})(),"Drag me!");
});
ewen.dragdrop.examples.t23438.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23438.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23438.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23438.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23458 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_23459 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23458);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23459);
var vec__23449 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23449,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23449,1,null);var vec__23450 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23450,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23450,1,null);var vec__23451 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23451,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23451,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__23414_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__23414_SHARP_)))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23452){var map__23453 = p__23452;var map__23453__$1 = ((cljs.core.seq_QMARK_.call(null,map__23453))?cljs.core.apply.call(null,cljs.core.hash_map,map__23453):map__23453);var top = cljs.core.get.call(null,map__23453__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23453__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23415_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23415_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23454){var map__23455 = p__23454;var map__23455__$1 = ((cljs.core.seq_QMARK_.call(null,map__23455))?cljs.core.apply.call(null,cljs.core.hash_map,map__23455):map__23455);var top = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23456 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23456,0,null);var init_top = cljs.core.nth.call(null,vec__23456,1,null);var vec__23457 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23457,0,null);var handle_top = cljs.core.nth.call(null,vec__23457,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23416_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23416_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23417_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23417_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23440){var self__ = this;
var _23440__$1 = this;return self__.meta23439;
});
ewen.dragdrop.examples.t23438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23440,meta23439__$1){var self__ = this;
var _23440__$1 = this;return (new ewen.dragdrop.examples.t23438(self__.owner,self__.cursor,self__.typical_draggable,meta23439__$1));
});
ewen.dragdrop.examples.__GT_t23438 = (function __GT_t23438(owner__$1,cursor__$1,typical_draggable__$1,meta23439){return (new ewen.dragdrop.examples.t23438(owner__$1,cursor__$1,typical_draggable__$1,meta23439));
});
}
return (new ewen.dragdrop.examples.t23438(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23460 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23460 = (function (owner,app,meta23461){
this.owner = owner;
this.app = app;
this.meta23461 = meta23461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23460.cljs$lang$type = true;
ewen.dragdrop.examples.t23460.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23460";
ewen.dragdrop.examples.t23460.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23460");
});
ewen.dragdrop.examples.t23460.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23460.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23462){var self__ = this;
var _23462__$1 = this;return self__.meta23461;
});
ewen.dragdrop.examples.t23460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23462,meta23461__$1){var self__ = this;
var _23462__$1 = this;return (new ewen.dragdrop.examples.t23460(self__.owner,self__.app,meta23461__$1));
});
ewen.dragdrop.examples.__GT_t23460 = (function __GT_t23460(owner__$1,app__$1,meta23461){return (new ewen.dragdrop.examples.t23460(owner__$1,app__$1,meta23461));
});
}
return (new ewen.dragdrop.examples.t23460(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23486 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23486 = (function (owner,cursor,delayed_draggable,meta23487){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta23487 = meta23487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23486.cljs$lang$type = true;
ewen.dragdrop.examples.t23486.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23486";
ewen.dragdrop.examples.t23486.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23486");
});
ewen.dragdrop.examples.t23486.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23486.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23489 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23489,0,null);var y = cljs.core.nth.call(null,vec__23489,1,null);var vec__23490 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23490,0,null);var h = cljs.core.nth.call(null,vec__23490,1,null);var obj23492 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23492;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23494 = {"position":"static","z-index":0};return obj23494;
})():null));return React.DOM.div((function (){var obj23496 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj23496;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t23486.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23486.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23486.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23486.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23506 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_23507 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23506);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23507);
var vec__23497 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23497,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23497,1,null);var vec__23498 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23498,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23498,1,null);var vec__23499 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23499,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23499,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23500){var map__23501 = p__23500;var map__23501__$1 = ((cljs.core.seq_QMARK_.call(null,map__23501))?cljs.core.apply.call(null,cljs.core.hash_map,map__23501):map__23501);var top = cljs.core.get.call(null,map__23501__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23501__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23463_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23463_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23502){var map__23503 = p__23502;var map__23503__$1 = ((cljs.core.seq_QMARK_.call(null,map__23503))?cljs.core.apply.call(null,cljs.core.hash_map,map__23503):map__23503);var top = cljs.core.get.call(null,map__23503__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23503__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23504 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23504,0,null);var init_top = cljs.core.nth.call(null,vec__23504,1,null);var vec__23505 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23505,0,null);var handle_top = cljs.core.nth.call(null,vec__23505,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23464_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23464_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23465_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23465_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23488){var self__ = this;
var _23488__$1 = this;return self__.meta23487;
});
ewen.dragdrop.examples.t23486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23488,meta23487__$1){var self__ = this;
var _23488__$1 = this;return (new ewen.dragdrop.examples.t23486(self__.owner,self__.cursor,self__.delayed_draggable,meta23487__$1));
});
ewen.dragdrop.examples.__GT_t23486 = (function __GT_t23486(owner__$1,cursor__$1,delayed_draggable__$1,meta23487){return (new ewen.dragdrop.examples.t23486(owner__$1,cursor__$1,delayed_draggable__$1,meta23487));
});
}
return (new ewen.dragdrop.examples.t23486(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23508 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23508 = (function (owner,app,meta23509){
this.owner = owner;
this.app = app;
this.meta23509 = meta23509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23508.cljs$lang$type = true;
ewen.dragdrop.examples.t23508.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23508";
ewen.dragdrop.examples.t23508.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23508");
});
ewen.dragdrop.examples.t23508.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23508.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23510){var self__ = this;
var _23510__$1 = this;return self__.meta23509;
});
ewen.dragdrop.examples.t23508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23510,meta23509__$1){var self__ = this;
var _23510__$1 = this;return (new ewen.dragdrop.examples.t23508(self__.owner,self__.app,meta23509__$1));
});
ewen.dragdrop.examples.__GT_t23508 = (function __GT_t23508(owner__$1,app__$1,meta23509){return (new ewen.dragdrop.examples.t23508(owner__$1,app__$1,meta23509));
});
}
return (new ewen.dragdrop.examples.t23508(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23534 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23534 = (function (owner,cursor,hook_draggable,meta23535){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta23535 = meta23535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23534.cljs$lang$type = true;
ewen.dragdrop.examples.t23534.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23534";
ewen.dragdrop.examples.t23534.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23534");
});
ewen.dragdrop.examples.t23534.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23534.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23537 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23537,0,null);var y = cljs.core.nth.call(null,vec__23537,1,null);var vec__23538 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23538,0,null);var h = cljs.core.nth.call(null,vec__23538,1,null);var obj23540 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23540;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23542 = {"position":"static","z-index":0};return obj23542;
})():null));return React.DOM.div((function (){var obj23544 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj23544;
})(),"Drag me!");
});
ewen.dragdrop.examples.t23534.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23534.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23534.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23534.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23554 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_23555 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23554);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23555);
var vec__23545 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23545,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23545,1,null);var vec__23546 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23546,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23546,1,null);var vec__23547 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23547,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23547,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23548){var map__23549 = p__23548;var map__23549__$1 = ((cljs.core.seq_QMARK_.call(null,map__23549))?cljs.core.apply.call(null,cljs.core.hash_map,map__23549):map__23549);var top = cljs.core.get.call(null,map__23549__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23549__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23511_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23511_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23550){var map__23551 = p__23550;var map__23551__$1 = ((cljs.core.seq_QMARK_.call(null,map__23551))?cljs.core.apply.call(null,cljs.core.hash_map,map__23551):map__23551);var top = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23552 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23552,0,null);var init_top = cljs.core.nth.call(null,vec__23552,1,null);var vec__23553 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23553,0,null);var handle_top = cljs.core.nth.call(null,vec__23553,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23512_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23512_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23513_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23513_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23536){var self__ = this;
var _23536__$1 = this;return self__.meta23535;
});
ewen.dragdrop.examples.t23534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23536,meta23535__$1){var self__ = this;
var _23536__$1 = this;return (new ewen.dragdrop.examples.t23534(self__.owner,self__.cursor,self__.hook_draggable,meta23535__$1));
});
ewen.dragdrop.examples.__GT_t23534 = (function __GT_t23534(owner__$1,cursor__$1,hook_draggable__$1,meta23535){return (new ewen.dragdrop.examples.t23534(owner__$1,cursor__$1,hook_draggable__$1,meta23535));
});
}
return (new ewen.dragdrop.examples.t23534(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23556 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23556 = (function (owner,app,meta23557){
this.owner = owner;
this.app = app;
this.meta23557 = meta23557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23556.cljs$lang$type = true;
ewen.dragdrop.examples.t23556.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23556";
ewen.dragdrop.examples.t23556.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23556");
});
ewen.dragdrop.examples.t23556.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23556.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23558){var self__ = this;
var _23558__$1 = this;return self__.meta23557;
});
ewen.dragdrop.examples.t23556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23558,meta23557__$1){var self__ = this;
var _23558__$1 = this;return (new ewen.dragdrop.examples.t23556(self__.owner,self__.app,meta23557__$1));
});
ewen.dragdrop.examples.__GT_t23556 = (function __GT_t23556(owner__$1,app__$1,meta23557){return (new ewen.dragdrop.examples.t23556(owner__$1,app__$1,meta23557));
});
}
return (new ewen.dragdrop.examples.t23556(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23582 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23582 = (function (owner,cursor,long_press_draggable,meta23583){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta23583 = meta23583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23582.cljs$lang$type = true;
ewen.dragdrop.examples.t23582.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23582";
ewen.dragdrop.examples.t23582.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23582");
});
ewen.dragdrop.examples.t23582.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23582.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23585 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23585,0,null);var y = cljs.core.nth.call(null,vec__23585,1,null);var vec__23586 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23586,0,null);var h = cljs.core.nth.call(null,vec__23586,1,null);var obj23588 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23588;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23590 = {"position":"static","z-index":0};return obj23590;
})():null));return React.DOM.div((function (){var obj23592 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj23592;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t23582.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23582.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23582.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23582.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23602 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_23603 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23602);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23603);
var vec__23593 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23593,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23593,1,null);var vec__23594 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23594,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23594,1,null);var vec__23595 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23595,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23595,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23596){var map__23597 = p__23596;var map__23597__$1 = ((cljs.core.seq_QMARK_.call(null,map__23597))?cljs.core.apply.call(null,cljs.core.hash_map,map__23597):map__23597);var top = cljs.core.get.call(null,map__23597__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23597__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23559_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23559_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23598){var map__23599 = p__23598;var map__23599__$1 = ((cljs.core.seq_QMARK_.call(null,map__23599))?cljs.core.apply.call(null,cljs.core.hash_map,map__23599):map__23599);var top = cljs.core.get.call(null,map__23599__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23599__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23600 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23600,0,null);var init_top = cljs.core.nth.call(null,vec__23600,1,null);var vec__23601 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23601,0,null);var handle_top = cljs.core.nth.call(null,vec__23601,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23560_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23560_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23561_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23561_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23584){var self__ = this;
var _23584__$1 = this;return self__.meta23583;
});
ewen.dragdrop.examples.t23582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23584,meta23583__$1){var self__ = this;
var _23584__$1 = this;return (new ewen.dragdrop.examples.t23582(self__.owner,self__.cursor,self__.long_press_draggable,meta23583__$1));
});
ewen.dragdrop.examples.__GT_t23582 = (function __GT_t23582(owner__$1,cursor__$1,long_press_draggable__$1,meta23583){return (new ewen.dragdrop.examples.t23582(owner__$1,cursor__$1,long_press_draggable__$1,meta23583));
});
}
return (new ewen.dragdrop.examples.t23582(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23604 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23604 = (function (owner,app,meta23605){
this.owner = owner;
this.app = app;
this.meta23605 = meta23605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23604.cljs$lang$type = true;
ewen.dragdrop.examples.t23604.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23604";
ewen.dragdrop.examples.t23604.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23604");
});
ewen.dragdrop.examples.t23604.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23604.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23606){var self__ = this;
var _23606__$1 = this;return self__.meta23605;
});
ewen.dragdrop.examples.t23604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23606,meta23605__$1){var self__ = this;
var _23606__$1 = this;return (new ewen.dragdrop.examples.t23604(self__.owner,self__.app,meta23605__$1));
});
ewen.dragdrop.examples.__GT_t23604 = (function __GT_t23604(owner__$1,app__$1,meta23605){return (new ewen.dragdrop.examples.t23604(owner__$1,app__$1,meta23605));
});
}
return (new ewen.dragdrop.examples.t23604(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map