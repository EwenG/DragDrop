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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21290 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21290 = (function (owner,cursor,typical_draggable,meta21291){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta21291 = meta21291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21290.cljs$lang$type = true;
ewen.dragdrop.examples.t21290.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21290";
ewen.dragdrop.examples.t21290.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21290");
});
ewen.dragdrop.examples.t21290.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21290.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21293 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21293,0,null);var y = cljs.core.nth.call(null,vec__21293,1,null);var vec__21294 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21294,0,null);var h = cljs.core.nth.call(null,vec__21294,1,null);var obj21296 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21296;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21298 = {"position":"static","z-index":0};return obj21298;
})():null));return React.DOM.div((function (){var obj21300 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj21300;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21290.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21290.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21290.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21290.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21310 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_21311 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21310);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21311);
var vec__21301 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21301,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21301,1,null);var vec__21302 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21302,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21302,1,null);var vec__21303 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21303,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21303,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__21266_SHARP_){return cljs.core.prn.call(null,new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21266_SHARP_));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21304){var map__21305 = p__21304;var map__21305__$1 = ((cljs.core.seq_QMARK_.call(null,map__21305))?cljs.core.apply.call(null,cljs.core.hash_map,map__21305):map__21305);var top = cljs.core.get.call(null,map__21305__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21305__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21267_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21267_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21306){var map__21307 = p__21306;var map__21307__$1 = ((cljs.core.seq_QMARK_.call(null,map__21307))?cljs.core.apply.call(null,cljs.core.hash_map,map__21307):map__21307);var top = cljs.core.get.call(null,map__21307__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21307__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21308 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21308,0,null);var init_top = cljs.core.nth.call(null,vec__21308,1,null);var vec__21309 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21309,0,null);var handle_top = cljs.core.nth.call(null,vec__21309,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21268_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21268_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21269_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21269_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21292){var self__ = this;
var _21292__$1 = this;return self__.meta21291;
});
ewen.dragdrop.examples.t21290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21292,meta21291__$1){var self__ = this;
var _21292__$1 = this;return (new ewen.dragdrop.examples.t21290(self__.owner,self__.cursor,self__.typical_draggable,meta21291__$1));
});
ewen.dragdrop.examples.__GT_t21290 = (function __GT_t21290(owner__$1,cursor__$1,typical_draggable__$1,meta21291){return (new ewen.dragdrop.examples.t21290(owner__$1,cursor__$1,typical_draggable__$1,meta21291));
});
}
return (new ewen.dragdrop.examples.t21290(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21312 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21312 = (function (owner,app,meta21313){
this.owner = owner;
this.app = app;
this.meta21313 = meta21313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21312.cljs$lang$type = true;
ewen.dragdrop.examples.t21312.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21312";
ewen.dragdrop.examples.t21312.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21312");
});
ewen.dragdrop.examples.t21312.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21312.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21314){var self__ = this;
var _21314__$1 = this;return self__.meta21313;
});
ewen.dragdrop.examples.t21312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21314,meta21313__$1){var self__ = this;
var _21314__$1 = this;return (new ewen.dragdrop.examples.t21312(self__.owner,self__.app,meta21313__$1));
});
ewen.dragdrop.examples.__GT_t21312 = (function __GT_t21312(owner__$1,app__$1,meta21313){return (new ewen.dragdrop.examples.t21312(owner__$1,app__$1,meta21313));
});
}
return (new ewen.dragdrop.examples.t21312(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21338 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21338 = (function (owner,cursor,delayed_draggable,meta21339){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta21339 = meta21339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21338.cljs$lang$type = true;
ewen.dragdrop.examples.t21338.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21338";
ewen.dragdrop.examples.t21338.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21338");
});
ewen.dragdrop.examples.t21338.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21338.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21341 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21341,0,null);var y = cljs.core.nth.call(null,vec__21341,1,null);var vec__21342 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21342,0,null);var h = cljs.core.nth.call(null,vec__21342,1,null);var obj21344 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21344;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21346 = {"position":"static","z-index":0};return obj21346;
})():null));return React.DOM.div((function (){var obj21348 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj21348;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t21338.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21338.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21338.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21338.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21358 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_21359 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21358);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21359);
var vec__21349 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21349,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21349,1,null);var vec__21350 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21350,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21350,1,null);var vec__21351 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21351,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21351,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21352){var map__21353 = p__21352;var map__21353__$1 = ((cljs.core.seq_QMARK_.call(null,map__21353))?cljs.core.apply.call(null,cljs.core.hash_map,map__21353):map__21353);var top = cljs.core.get.call(null,map__21353__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21353__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21315_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21315_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21354){var map__21355 = p__21354;var map__21355__$1 = ((cljs.core.seq_QMARK_.call(null,map__21355))?cljs.core.apply.call(null,cljs.core.hash_map,map__21355):map__21355);var top = cljs.core.get.call(null,map__21355__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21355__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21356 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21356,0,null);var init_top = cljs.core.nth.call(null,vec__21356,1,null);var vec__21357 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21357,0,null);var handle_top = cljs.core.nth.call(null,vec__21357,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21316_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21316_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21317_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21317_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21340){var self__ = this;
var _21340__$1 = this;return self__.meta21339;
});
ewen.dragdrop.examples.t21338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21340,meta21339__$1){var self__ = this;
var _21340__$1 = this;return (new ewen.dragdrop.examples.t21338(self__.owner,self__.cursor,self__.delayed_draggable,meta21339__$1));
});
ewen.dragdrop.examples.__GT_t21338 = (function __GT_t21338(owner__$1,cursor__$1,delayed_draggable__$1,meta21339){return (new ewen.dragdrop.examples.t21338(owner__$1,cursor__$1,delayed_draggable__$1,meta21339));
});
}
return (new ewen.dragdrop.examples.t21338(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21360 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21360 = (function (owner,app,meta21361){
this.owner = owner;
this.app = app;
this.meta21361 = meta21361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21360.cljs$lang$type = true;
ewen.dragdrop.examples.t21360.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21360";
ewen.dragdrop.examples.t21360.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21360");
});
ewen.dragdrop.examples.t21360.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21360.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21362){var self__ = this;
var _21362__$1 = this;return self__.meta21361;
});
ewen.dragdrop.examples.t21360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21362,meta21361__$1){var self__ = this;
var _21362__$1 = this;return (new ewen.dragdrop.examples.t21360(self__.owner,self__.app,meta21361__$1));
});
ewen.dragdrop.examples.__GT_t21360 = (function __GT_t21360(owner__$1,app__$1,meta21361){return (new ewen.dragdrop.examples.t21360(owner__$1,app__$1,meta21361));
});
}
return (new ewen.dragdrop.examples.t21360(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21386 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21386 = (function (owner,cursor,hook_draggable,meta21387){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta21387 = meta21387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21386.cljs$lang$type = true;
ewen.dragdrop.examples.t21386.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21386";
ewen.dragdrop.examples.t21386.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21386");
});
ewen.dragdrop.examples.t21386.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21386.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21389 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21389,0,null);var y = cljs.core.nth.call(null,vec__21389,1,null);var vec__21390 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21390,0,null);var h = cljs.core.nth.call(null,vec__21390,1,null);var obj21392 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21392;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21394 = {"position":"static","z-index":0};return obj21394;
})():null));return React.DOM.div((function (){var obj21396 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj21396;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21386.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21386.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21386.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21386.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21406 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_21407 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21406);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21407);
var vec__21397 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21397,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21397,1,null);var vec__21398 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21398,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21398,1,null);var vec__21399 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21399,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21399,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21400){var map__21401 = p__21400;var map__21401__$1 = ((cljs.core.seq_QMARK_.call(null,map__21401))?cljs.core.apply.call(null,cljs.core.hash_map,map__21401):map__21401);var top = cljs.core.get.call(null,map__21401__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21401__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21363_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21363_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21402){var map__21403 = p__21402;var map__21403__$1 = ((cljs.core.seq_QMARK_.call(null,map__21403))?cljs.core.apply.call(null,cljs.core.hash_map,map__21403):map__21403);var top = cljs.core.get.call(null,map__21403__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21403__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21404 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21404,0,null);var init_top = cljs.core.nth.call(null,vec__21404,1,null);var vec__21405 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21405,0,null);var handle_top = cljs.core.nth.call(null,vec__21405,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21364_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21364_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21365_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21365_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21388){var self__ = this;
var _21388__$1 = this;return self__.meta21387;
});
ewen.dragdrop.examples.t21386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21388,meta21387__$1){var self__ = this;
var _21388__$1 = this;return (new ewen.dragdrop.examples.t21386(self__.owner,self__.cursor,self__.hook_draggable,meta21387__$1));
});
ewen.dragdrop.examples.__GT_t21386 = (function __GT_t21386(owner__$1,cursor__$1,hook_draggable__$1,meta21387){return (new ewen.dragdrop.examples.t21386(owner__$1,cursor__$1,hook_draggable__$1,meta21387));
});
}
return (new ewen.dragdrop.examples.t21386(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21408 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21408 = (function (owner,app,meta21409){
this.owner = owner;
this.app = app;
this.meta21409 = meta21409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21408.cljs$lang$type = true;
ewen.dragdrop.examples.t21408.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21408";
ewen.dragdrop.examples.t21408.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21408");
});
ewen.dragdrop.examples.t21408.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21408.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21410){var self__ = this;
var _21410__$1 = this;return self__.meta21409;
});
ewen.dragdrop.examples.t21408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21410,meta21409__$1){var self__ = this;
var _21410__$1 = this;return (new ewen.dragdrop.examples.t21408(self__.owner,self__.app,meta21409__$1));
});
ewen.dragdrop.examples.__GT_t21408 = (function __GT_t21408(owner__$1,app__$1,meta21409){return (new ewen.dragdrop.examples.t21408(owner__$1,app__$1,meta21409));
});
}
return (new ewen.dragdrop.examples.t21408(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21434 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21434 = (function (owner,cursor,long_press_draggable,meta21435){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta21435 = meta21435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21434.cljs$lang$type = true;
ewen.dragdrop.examples.t21434.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21434";
ewen.dragdrop.examples.t21434.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21434");
});
ewen.dragdrop.examples.t21434.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21434.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21437 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21437,0,null);var y = cljs.core.nth.call(null,vec__21437,1,null);var vec__21438 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21438,0,null);var h = cljs.core.nth.call(null,vec__21438,1,null);var obj21440 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21440;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21442 = {"position":"static","z-index":0};return obj21442;
})():null));return React.DOM.div((function (){var obj21444 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj21444;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t21434.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21434.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21434.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21434.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21454 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_21455 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21454);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21455);
var vec__21445 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21445,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21445,1,null);var vec__21446 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21446,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21446,1,null);var vec__21447 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21447,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21447,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21448){var map__21449 = p__21448;var map__21449__$1 = ((cljs.core.seq_QMARK_.call(null,map__21449))?cljs.core.apply.call(null,cljs.core.hash_map,map__21449):map__21449);var top = cljs.core.get.call(null,map__21449__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21449__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21411_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21411_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21450){var map__21451 = p__21450;var map__21451__$1 = ((cljs.core.seq_QMARK_.call(null,map__21451))?cljs.core.apply.call(null,cljs.core.hash_map,map__21451):map__21451);var top = cljs.core.get.call(null,map__21451__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21451__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21452 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21452,0,null);var init_top = cljs.core.nth.call(null,vec__21452,1,null);var vec__21453 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21453,0,null);var handle_top = cljs.core.nth.call(null,vec__21453,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21412_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21412_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21413_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21413_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21436){var self__ = this;
var _21436__$1 = this;return self__.meta21435;
});
ewen.dragdrop.examples.t21434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21436,meta21435__$1){var self__ = this;
var _21436__$1 = this;return (new ewen.dragdrop.examples.t21434(self__.owner,self__.cursor,self__.long_press_draggable,meta21435__$1));
});
ewen.dragdrop.examples.__GT_t21434 = (function __GT_t21434(owner__$1,cursor__$1,long_press_draggable__$1,meta21435){return (new ewen.dragdrop.examples.t21434(owner__$1,cursor__$1,long_press_draggable__$1,meta21435));
});
}
return (new ewen.dragdrop.examples.t21434(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21456 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21456 = (function (owner,app,meta21457){
this.owner = owner;
this.app = app;
this.meta21457 = meta21457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21456.cljs$lang$type = true;
ewen.dragdrop.examples.t21456.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21456";
ewen.dragdrop.examples.t21456.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21456");
});
ewen.dragdrop.examples.t21456.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21456.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21458){var self__ = this;
var _21458__$1 = this;return self__.meta21457;
});
ewen.dragdrop.examples.t21456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21458,meta21457__$1){var self__ = this;
var _21458__$1 = this;return (new ewen.dragdrop.examples.t21456(self__.owner,self__.app,meta21457__$1));
});
ewen.dragdrop.examples.__GT_t21456 = (function __GT_t21456(owner__$1,app__$1,meta21457){return (new ewen.dragdrop.examples.t21456(owner__$1,app__$1,meta21457));
});
}
return (new ewen.dragdrop.examples.t21456(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map