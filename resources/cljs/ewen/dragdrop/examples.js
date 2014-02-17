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
ewen.dragdrop.examples.dragging_QMARK_ = (function dragging_QMARK_(owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633));
});
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17394 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17394 = (function (owner,cursor,typical_draggable,meta17395){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta17395 = meta17395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17394.cljs$lang$type = true;
ewen.dragdrop.examples.t17394.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17394";
ewen.dragdrop.examples.t17394.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17394");
});
ewen.dragdrop.examples.t17394.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17394.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17397 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17397,0,null);var y = cljs.core.nth.call(null,vec__17397,1,null);var vec__17398 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17398,0,null);var h = cljs.core.nth.call(null,vec__17398,1,null);var obj17400 = {"position":"absolute","top":(y - (h / 2)),"left":(x - (w / 2)),"z-index":1,"width":w,"height":h};return obj17400;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17402 = {"position":"static","z-index":0};return obj17402;
})():null));return React.DOM.div((function (){var obj17404 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj17404;
})(),"Drag me!");
});
ewen.dragdrop.examples.t17394.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17394.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17394.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17394.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17412 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17412);
var vec__17405 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17405,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17405,1,null);var vec__17406 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17406,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17406,1,null);var vec__17407 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17407,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17407,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17408){var map__17409 = p__17408;var map__17409__$1 = ((cljs.core.seq_QMARK_.call(null,map__17409))?cljs.core.apply.call(null,cljs.core.hash_map,map__17409):map__17409);var top = cljs.core.get.call(null,map__17409__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17409__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17373_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17373_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17410){var map__17411 = p__17410;var map__17411__$1 = ((cljs.core.seq_QMARK_.call(null,map__17411))?cljs.core.apply.call(null,cljs.core.hash_map,map__17411):map__17411);var top = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17374_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17374_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17375_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17375_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17396){var self__ = this;
var _17396__$1 = this;return self__.meta17395;
});
ewen.dragdrop.examples.t17394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17396,meta17395__$1){var self__ = this;
var _17396__$1 = this;return (new ewen.dragdrop.examples.t17394(self__.owner,self__.cursor,self__.typical_draggable,meta17395__$1));
});
ewen.dragdrop.examples.__GT_t17394 = (function __GT_t17394(owner__$1,cursor__$1,typical_draggable__$1,meta17395){return (new ewen.dragdrop.examples.t17394(owner__$1,cursor__$1,typical_draggable__$1,meta17395));
});
}
return (new ewen.dragdrop.examples.t17394(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17413 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17413 = (function (owner,app,meta17414){
this.owner = owner;
this.app = app;
this.meta17414 = meta17414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17413.cljs$lang$type = true;
ewen.dragdrop.examples.t17413.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17413";
ewen.dragdrop.examples.t17413.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17413");
});
ewen.dragdrop.examples.t17413.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17413.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17415){var self__ = this;
var _17415__$1 = this;return self__.meta17414;
});
ewen.dragdrop.examples.t17413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17415,meta17414__$1){var self__ = this;
var _17415__$1 = this;return (new ewen.dragdrop.examples.t17413(self__.owner,self__.app,meta17414__$1));
});
ewen.dragdrop.examples.__GT_t17413 = (function __GT_t17413(owner__$1,app__$1,meta17414){return (new ewen.dragdrop.examples.t17413(owner__$1,app__$1,meta17414));
});
}
return (new ewen.dragdrop.examples.t17413(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17437 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17437 = (function (owner,cursor,delayed_draggable,meta17438){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta17438 = meta17438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17437.cljs$lang$type = true;
ewen.dragdrop.examples.t17437.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17437";
ewen.dragdrop.examples.t17437.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17437");
});
ewen.dragdrop.examples.t17437.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17437.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17440 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17440,0,null);var y = cljs.core.nth.call(null,vec__17440,1,null);var vec__17441 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17441,0,null);var h = cljs.core.nth.call(null,vec__17441,1,null);var obj17443 = {"position":"absolute","top":(y - (h / 2)),"left":(x - (w / 2)),"z-index":1,"width":w,"height":h};return obj17443;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17445 = {"position":"static","z-index":0};return obj17445;
})():null));return React.DOM.div((function (){var obj17447 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj17447;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t17437.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17437.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17437.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17437.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17455 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17455);
var vec__17448 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17448,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17448,1,null);var vec__17449 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17449,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17449,1,null);var vec__17450 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17450,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17450,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17451){var map__17452 = p__17451;var map__17452__$1 = ((cljs.core.seq_QMARK_.call(null,map__17452))?cljs.core.apply.call(null,cljs.core.hash_map,map__17452):map__17452);var top = cljs.core.get.call(null,map__17452__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17452__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17416_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17416_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17453){var map__17454 = p__17453;var map__17454__$1 = ((cljs.core.seq_QMARK_.call(null,map__17454))?cljs.core.apply.call(null,cljs.core.hash_map,map__17454):map__17454);var top = cljs.core.get.call(null,map__17454__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17454__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17417_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17417_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17418_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17418_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17439){var self__ = this;
var _17439__$1 = this;return self__.meta17438;
});
ewen.dragdrop.examples.t17437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17439,meta17438__$1){var self__ = this;
var _17439__$1 = this;return (new ewen.dragdrop.examples.t17437(self__.owner,self__.cursor,self__.delayed_draggable,meta17438__$1));
});
ewen.dragdrop.examples.__GT_t17437 = (function __GT_t17437(owner__$1,cursor__$1,delayed_draggable__$1,meta17438){return (new ewen.dragdrop.examples.t17437(owner__$1,cursor__$1,delayed_draggable__$1,meta17438));
});
}
return (new ewen.dragdrop.examples.t17437(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17456 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17456 = (function (owner,app,meta17457){
this.owner = owner;
this.app = app;
this.meta17457 = meta17457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17456.cljs$lang$type = true;
ewen.dragdrop.examples.t17456.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17456";
ewen.dragdrop.examples.t17456.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17456");
});
ewen.dragdrop.examples.t17456.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17456.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17458){var self__ = this;
var _17458__$1 = this;return self__.meta17457;
});
ewen.dragdrop.examples.t17456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17458,meta17457__$1){var self__ = this;
var _17458__$1 = this;return (new ewen.dragdrop.examples.t17456(self__.owner,self__.app,meta17457__$1));
});
ewen.dragdrop.examples.__GT_t17456 = (function __GT_t17456(owner__$1,app__$1,meta17457){return (new ewen.dragdrop.examples.t17456(owner__$1,app__$1,meta17457));
});
}
return (new ewen.dragdrop.examples.t17456(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17480 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17480 = (function (owner,cursor,hook_draggable,meta17481){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta17481 = meta17481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17480.cljs$lang$type = true;
ewen.dragdrop.examples.t17480.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17480";
ewen.dragdrop.examples.t17480.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17480");
});
ewen.dragdrop.examples.t17480.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17480.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17483 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17483,0,null);var y = cljs.core.nth.call(null,vec__17483,1,null);var vec__17484 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17484,0,null);var h = cljs.core.nth.call(null,vec__17484,1,null);var obj17486 = {"position":"absolute","top":(y - (h / 2)),"left":(x - (w / 2)),"z-index":1,"width":w,"height":h};return obj17486;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17488 = {"position":"static","z-index":0};return obj17488;
})():null));return React.DOM.div((function (){var obj17490 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj17490;
})(),"Drag me!");
});
ewen.dragdrop.examples.t17480.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17480.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17480.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17480.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17498 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17498);
var vec__17491 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17491,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17491,1,null);var vec__17492 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17492,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17492,1,null);var vec__17493 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17493,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17493,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17494){var map__17495 = p__17494;var map__17495__$1 = ((cljs.core.seq_QMARK_.call(null,map__17495))?cljs.core.apply.call(null,cljs.core.hash_map,map__17495):map__17495);var top = cljs.core.get.call(null,map__17495__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17495__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17459_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17459_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17496){var map__17497 = p__17496;var map__17497__$1 = ((cljs.core.seq_QMARK_.call(null,map__17497))?cljs.core.apply.call(null,cljs.core.hash_map,map__17497):map__17497);var top = cljs.core.get.call(null,map__17497__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17497__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17460_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17460_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17461_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17461_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17482){var self__ = this;
var _17482__$1 = this;return self__.meta17481;
});
ewen.dragdrop.examples.t17480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17482,meta17481__$1){var self__ = this;
var _17482__$1 = this;return (new ewen.dragdrop.examples.t17480(self__.owner,self__.cursor,self__.hook_draggable,meta17481__$1));
});
ewen.dragdrop.examples.__GT_t17480 = (function __GT_t17480(owner__$1,cursor__$1,hook_draggable__$1,meta17481){return (new ewen.dragdrop.examples.t17480(owner__$1,cursor__$1,hook_draggable__$1,meta17481));
});
}
return (new ewen.dragdrop.examples.t17480(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17499 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17499 = (function (owner,app,meta17500){
this.owner = owner;
this.app = app;
this.meta17500 = meta17500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17499.cljs$lang$type = true;
ewen.dragdrop.examples.t17499.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17499";
ewen.dragdrop.examples.t17499.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17499");
});
ewen.dragdrop.examples.t17499.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17499.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17501){var self__ = this;
var _17501__$1 = this;return self__.meta17500;
});
ewen.dragdrop.examples.t17499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17501,meta17500__$1){var self__ = this;
var _17501__$1 = this;return (new ewen.dragdrop.examples.t17499(self__.owner,self__.app,meta17500__$1));
});
ewen.dragdrop.examples.__GT_t17499 = (function __GT_t17499(owner__$1,app__$1,meta17500){return (new ewen.dragdrop.examples.t17499(owner__$1,app__$1,meta17500));
});
}
return (new ewen.dragdrop.examples.t17499(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17523 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17523 = (function (owner,cursor,long_press_draggable,meta17524){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta17524 = meta17524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17523.cljs$lang$type = true;
ewen.dragdrop.examples.t17523.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17523";
ewen.dragdrop.examples.t17523.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17523");
});
ewen.dragdrop.examples.t17523.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17523.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17526 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17526,0,null);var y = cljs.core.nth.call(null,vec__17526,1,null);var vec__17527 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17527,0,null);var h = cljs.core.nth.call(null,vec__17527,1,null);var obj17529 = {"position":"absolute","top":(y - (h / 2)),"left":(x - (w / 2)),"z-index":1,"width":w,"height":h};return obj17529;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17531 = {"position":"static","z-index":0};return obj17531;
})():null));return React.DOM.div((function (){var obj17533 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj17533;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t17523.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17523.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17523.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17523.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17541 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17541);
var vec__17534 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17534,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17534,1,null);var vec__17535 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17535,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17535,1,null);var vec__17536 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17536,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17536,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17537){var map__17538 = p__17537;var map__17538__$1 = ((cljs.core.seq_QMARK_.call(null,map__17538))?cljs.core.apply.call(null,cljs.core.hash_map,map__17538):map__17538);var top = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17502_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17502_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17539){var map__17540 = p__17539;var map__17540__$1 = ((cljs.core.seq_QMARK_.call(null,map__17540))?cljs.core.apply.call(null,cljs.core.hash_map,map__17540):map__17540);var top = cljs.core.get.call(null,map__17540__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17540__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17503_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17503_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17504_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17504_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17525){var self__ = this;
var _17525__$1 = this;return self__.meta17524;
});
ewen.dragdrop.examples.t17523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17525,meta17524__$1){var self__ = this;
var _17525__$1 = this;return (new ewen.dragdrop.examples.t17523(self__.owner,self__.cursor,self__.long_press_draggable,meta17524__$1));
});
ewen.dragdrop.examples.__GT_t17523 = (function __GT_t17523(owner__$1,cursor__$1,long_press_draggable__$1,meta17524){return (new ewen.dragdrop.examples.t17523(owner__$1,cursor__$1,long_press_draggable__$1,meta17524));
});
}
return (new ewen.dragdrop.examples.t17523(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17542 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17542 = (function (owner,app,meta17543){
this.owner = owner;
this.app = app;
this.meta17543 = meta17543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17542.cljs$lang$type = true;
ewen.dragdrop.examples.t17542.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17542";
ewen.dragdrop.examples.t17542.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17542");
});
ewen.dragdrop.examples.t17542.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17542.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17544){var self__ = this;
var _17544__$1 = this;return self__.meta17543;
});
ewen.dragdrop.examples.t17542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17544,meta17543__$1){var self__ = this;
var _17544__$1 = this;return (new ewen.dragdrop.examples.t17542(self__.owner,self__.app,meta17543__$1));
});
ewen.dragdrop.examples.__GT_t17542 = (function __GT_t17542(owner__$1,app__$1,meta17543){return (new ewen.dragdrop.examples.t17542(owner__$1,app__$1,meta17543));
});
}
return (new ewen.dragdrop.examples.t17542(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map