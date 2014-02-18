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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23052 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23052 = (function (owner,cursor,typical_draggable,meta23053){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta23053 = meta23053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23052.cljs$lang$type = true;
ewen.dragdrop.examples.t23052.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23052";
ewen.dragdrop.examples.t23052.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23052");
});
ewen.dragdrop.examples.t23052.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23052.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23055 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23055,0,null);var y = cljs.core.nth.call(null,vec__23055,1,null);var vec__23056 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23056,0,null);var h = cljs.core.nth.call(null,vec__23056,1,null);var obj23058 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23058;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23060 = {"position":"static","z-index":0};return obj23060;
})():null));return React.DOM.div((function (){var obj23062 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj23062;
})(),"Drag me!");
});
ewen.dragdrop.examples.t23052.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23052.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23052.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23052.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23072 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_23073 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23072);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23073);
var vec__23063 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23063,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23063,1,null);var vec__23064 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23064,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23064,1,null);var vec__23065 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23065,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23065,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__23028_SHARP_){return cljs.core.prn.call(null,p1__23028_SHARP_.changedTouches.item(0).pageX);
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23066){var map__23067 = p__23066;var map__23067__$1 = ((cljs.core.seq_QMARK_.call(null,map__23067))?cljs.core.apply.call(null,cljs.core.hash_map,map__23067):map__23067);var top = cljs.core.get.call(null,map__23067__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23067__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23029_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23029_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23068){var map__23069 = p__23068;var map__23069__$1 = ((cljs.core.seq_QMARK_.call(null,map__23069))?cljs.core.apply.call(null,cljs.core.hash_map,map__23069):map__23069);var top = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23070 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23070,0,null);var init_top = cljs.core.nth.call(null,vec__23070,1,null);var vec__23071 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23071,0,null);var handle_top = cljs.core.nth.call(null,vec__23071,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23030_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23030_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23031_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23031_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23054){var self__ = this;
var _23054__$1 = this;return self__.meta23053;
});
ewen.dragdrop.examples.t23052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23054,meta23053__$1){var self__ = this;
var _23054__$1 = this;return (new ewen.dragdrop.examples.t23052(self__.owner,self__.cursor,self__.typical_draggable,meta23053__$1));
});
ewen.dragdrop.examples.__GT_t23052 = (function __GT_t23052(owner__$1,cursor__$1,typical_draggable__$1,meta23053){return (new ewen.dragdrop.examples.t23052(owner__$1,cursor__$1,typical_draggable__$1,meta23053));
});
}
return (new ewen.dragdrop.examples.t23052(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23074 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23074 = (function (owner,app,meta23075){
this.owner = owner;
this.app = app;
this.meta23075 = meta23075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23074.cljs$lang$type = true;
ewen.dragdrop.examples.t23074.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23074";
ewen.dragdrop.examples.t23074.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23074");
});
ewen.dragdrop.examples.t23074.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23074.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23076){var self__ = this;
var _23076__$1 = this;return self__.meta23075;
});
ewen.dragdrop.examples.t23074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23076,meta23075__$1){var self__ = this;
var _23076__$1 = this;return (new ewen.dragdrop.examples.t23074(self__.owner,self__.app,meta23075__$1));
});
ewen.dragdrop.examples.__GT_t23074 = (function __GT_t23074(owner__$1,app__$1,meta23075){return (new ewen.dragdrop.examples.t23074(owner__$1,app__$1,meta23075));
});
}
return (new ewen.dragdrop.examples.t23074(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23100 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23100 = (function (owner,cursor,delayed_draggable,meta23101){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta23101 = meta23101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23100.cljs$lang$type = true;
ewen.dragdrop.examples.t23100.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23100";
ewen.dragdrop.examples.t23100.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23100");
});
ewen.dragdrop.examples.t23100.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23100.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23103 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23103,0,null);var y = cljs.core.nth.call(null,vec__23103,1,null);var vec__23104 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23104,0,null);var h = cljs.core.nth.call(null,vec__23104,1,null);var obj23106 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23106;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23108 = {"position":"static","z-index":0};return obj23108;
})():null));return React.DOM.div((function (){var obj23110 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj23110;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t23100.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23100.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23100.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23100.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23120 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_23121 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23120);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23121);
var vec__23111 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23111,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23111,1,null);var vec__23112 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23112,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23112,1,null);var vec__23113 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23113,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23113,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23114){var map__23115 = p__23114;var map__23115__$1 = ((cljs.core.seq_QMARK_.call(null,map__23115))?cljs.core.apply.call(null,cljs.core.hash_map,map__23115):map__23115);var top = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23077_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23077_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23116){var map__23117 = p__23116;var map__23117__$1 = ((cljs.core.seq_QMARK_.call(null,map__23117))?cljs.core.apply.call(null,cljs.core.hash_map,map__23117):map__23117);var top = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23118 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23118,0,null);var init_top = cljs.core.nth.call(null,vec__23118,1,null);var vec__23119 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23119,0,null);var handle_top = cljs.core.nth.call(null,vec__23119,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23078_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23078_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23079_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23079_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23102){var self__ = this;
var _23102__$1 = this;return self__.meta23101;
});
ewen.dragdrop.examples.t23100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23102,meta23101__$1){var self__ = this;
var _23102__$1 = this;return (new ewen.dragdrop.examples.t23100(self__.owner,self__.cursor,self__.delayed_draggable,meta23101__$1));
});
ewen.dragdrop.examples.__GT_t23100 = (function __GT_t23100(owner__$1,cursor__$1,delayed_draggable__$1,meta23101){return (new ewen.dragdrop.examples.t23100(owner__$1,cursor__$1,delayed_draggable__$1,meta23101));
});
}
return (new ewen.dragdrop.examples.t23100(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23122 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23122 = (function (owner,app,meta23123){
this.owner = owner;
this.app = app;
this.meta23123 = meta23123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23122.cljs$lang$type = true;
ewen.dragdrop.examples.t23122.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23122";
ewen.dragdrop.examples.t23122.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23122");
});
ewen.dragdrop.examples.t23122.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23122.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23124){var self__ = this;
var _23124__$1 = this;return self__.meta23123;
});
ewen.dragdrop.examples.t23122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23124,meta23123__$1){var self__ = this;
var _23124__$1 = this;return (new ewen.dragdrop.examples.t23122(self__.owner,self__.app,meta23123__$1));
});
ewen.dragdrop.examples.__GT_t23122 = (function __GT_t23122(owner__$1,app__$1,meta23123){return (new ewen.dragdrop.examples.t23122(owner__$1,app__$1,meta23123));
});
}
return (new ewen.dragdrop.examples.t23122(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23148 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23148 = (function (owner,cursor,hook_draggable,meta23149){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta23149 = meta23149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23148.cljs$lang$type = true;
ewen.dragdrop.examples.t23148.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23148";
ewen.dragdrop.examples.t23148.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23148");
});
ewen.dragdrop.examples.t23148.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23148.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23151 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23151,0,null);var y = cljs.core.nth.call(null,vec__23151,1,null);var vec__23152 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23152,0,null);var h = cljs.core.nth.call(null,vec__23152,1,null);var obj23154 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23154;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23156 = {"position":"static","z-index":0};return obj23156;
})():null));return React.DOM.div((function (){var obj23158 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj23158;
})(),"Drag me!");
});
ewen.dragdrop.examples.t23148.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23148.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23148.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23148.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23168 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_23169 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23168);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23169);
var vec__23159 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23159,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23159,1,null);var vec__23160 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23160,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23160,1,null);var vec__23161 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23161,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23161,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23162){var map__23163 = p__23162;var map__23163__$1 = ((cljs.core.seq_QMARK_.call(null,map__23163))?cljs.core.apply.call(null,cljs.core.hash_map,map__23163):map__23163);var top = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23125_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23125_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23164){var map__23165 = p__23164;var map__23165__$1 = ((cljs.core.seq_QMARK_.call(null,map__23165))?cljs.core.apply.call(null,cljs.core.hash_map,map__23165):map__23165);var top = cljs.core.get.call(null,map__23165__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23165__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23166 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23166,0,null);var init_top = cljs.core.nth.call(null,vec__23166,1,null);var vec__23167 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23167,0,null);var handle_top = cljs.core.nth.call(null,vec__23167,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23126_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23126_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23127_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23127_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23150){var self__ = this;
var _23150__$1 = this;return self__.meta23149;
});
ewen.dragdrop.examples.t23148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23150,meta23149__$1){var self__ = this;
var _23150__$1 = this;return (new ewen.dragdrop.examples.t23148(self__.owner,self__.cursor,self__.hook_draggable,meta23149__$1));
});
ewen.dragdrop.examples.__GT_t23148 = (function __GT_t23148(owner__$1,cursor__$1,hook_draggable__$1,meta23149){return (new ewen.dragdrop.examples.t23148(owner__$1,cursor__$1,hook_draggable__$1,meta23149));
});
}
return (new ewen.dragdrop.examples.t23148(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23170 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23170 = (function (owner,app,meta23171){
this.owner = owner;
this.app = app;
this.meta23171 = meta23171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23170.cljs$lang$type = true;
ewen.dragdrop.examples.t23170.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23170";
ewen.dragdrop.examples.t23170.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23170");
});
ewen.dragdrop.examples.t23170.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23170.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23172){var self__ = this;
var _23172__$1 = this;return self__.meta23171;
});
ewen.dragdrop.examples.t23170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23172,meta23171__$1){var self__ = this;
var _23172__$1 = this;return (new ewen.dragdrop.examples.t23170(self__.owner,self__.app,meta23171__$1));
});
ewen.dragdrop.examples.__GT_t23170 = (function __GT_t23170(owner__$1,app__$1,meta23171){return (new ewen.dragdrop.examples.t23170(owner__$1,app__$1,meta23171));
});
}
return (new ewen.dragdrop.examples.t23170(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t23196 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23196 = (function (owner,cursor,long_press_draggable,meta23197){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta23197 = meta23197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23196.cljs$lang$type = true;
ewen.dragdrop.examples.t23196.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23196";
ewen.dragdrop.examples.t23196.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23196");
});
ewen.dragdrop.examples.t23196.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t23196.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__23199 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__23199,0,null);var y = cljs.core.nth.call(null,vec__23199,1,null);var vec__23200 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__23200,0,null);var h = cljs.core.nth.call(null,vec__23200,1,null);var obj23202 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj23202;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj23204 = {"position":"static","z-index":0};return obj23204;
})():null));return React.DOM.div((function (){var obj23206 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj23206;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t23196.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t23196.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t23196.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t23196.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_23216 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_23217 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_23216);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_23217);
var vec__23207 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__23207,0,null);var up_unlisten = cljs.core.nth.call(null,vec__23207,1,null);var vec__23208 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__23208,0,null);var down_unlisten = cljs.core.nth.call(null,vec__23208,1,null);var vec__23209 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__23209,0,null);var move_unlisten = cljs.core.nth.call(null,vec__23209,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__23210){var map__23211 = p__23210;var map__23211__$1 = ((cljs.core.seq_QMARK_.call(null,map__23211))?cljs.core.apply.call(null,cljs.core.hash_map,map__23211):map__23211);var top = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23173_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__23173_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__23212){var map__23213 = p__23212;var map__23213__$1 = ((cljs.core.seq_QMARK_.call(null,map__23213))?cljs.core.apply.call(null,cljs.core.hash_map,map__23213):map__23213);var top = cljs.core.get.call(null,map__23213__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__23213__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__23214 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__23214,0,null);var init_top = cljs.core.nth.call(null,vec__23214,1,null);var vec__23215 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__23215,0,null);var handle_top = cljs.core.nth.call(null,vec__23215,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23174_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__23174_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__23175_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__23175_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t23196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23198){var self__ = this;
var _23198__$1 = this;return self__.meta23197;
});
ewen.dragdrop.examples.t23196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23198,meta23197__$1){var self__ = this;
var _23198__$1 = this;return (new ewen.dragdrop.examples.t23196(self__.owner,self__.cursor,self__.long_press_draggable,meta23197__$1));
});
ewen.dragdrop.examples.__GT_t23196 = (function __GT_t23196(owner__$1,cursor__$1,long_press_draggable__$1,meta23197){return (new ewen.dragdrop.examples.t23196(owner__$1,cursor__$1,long_press_draggable__$1,meta23197));
});
}
return (new ewen.dragdrop.examples.t23196(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t23218 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t23218 = (function (owner,app,meta23219){
this.owner = owner;
this.app = app;
this.meta23219 = meta23219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t23218.cljs$lang$type = true;
ewen.dragdrop.examples.t23218.cljs$lang$ctorStr = "ewen.dragdrop.examples/t23218";
ewen.dragdrop.examples.t23218.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t23218");
});
ewen.dragdrop.examples.t23218.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t23218.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t23218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23220){var self__ = this;
var _23220__$1 = this;return self__.meta23219;
});
ewen.dragdrop.examples.t23218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23220,meta23219__$1){var self__ = this;
var _23220__$1 = this;return (new ewen.dragdrop.examples.t23218(self__.owner,self__.app,meta23219__$1));
});
ewen.dragdrop.examples.__GT_t23218 = (function __GT_t23218(owner__$1,app__$1,meta23219){return (new ewen.dragdrop.examples.t23218(owner__$1,app__$1,meta23219));
});
}
return (new ewen.dragdrop.examples.t23218(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map