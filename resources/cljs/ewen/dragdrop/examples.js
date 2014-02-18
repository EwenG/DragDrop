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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25380 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25380 = (function (owner,cursor,typical_draggable,meta25381){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta25381 = meta25381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25380.cljs$lang$type = true;
ewen.dragdrop.examples.t25380.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25380";
ewen.dragdrop.examples.t25380.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25380");
});
ewen.dragdrop.examples.t25380.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25380.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25383 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25383,0,null);var y = cljs.core.nth.call(null,vec__25383,1,null);var vec__25384 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25384,0,null);var h = cljs.core.nth.call(null,vec__25384,1,null);var obj25386 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25386;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25388 = {"position":"static","z-index":0};return obj25388;
})():null));return React.DOM.div((function (){var obj25390 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj25390;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25380.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25380.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25380.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25380.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25400 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_25401 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25400);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25401);
var vec__25391 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25391,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25391,1,null);var vec__25392 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25392,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25392,1,null);var vec__25393 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25393,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25393,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__25351_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25351_SHARP_).pageX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25352_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__25352_SHARP_)))].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25353_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25353_SHARP_).clientX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25354_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25354_SHARP_).offsetX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25355_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25355_SHARP_).screenX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25356_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25356_SHARP_).touches)].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25394){var map__25395 = p__25394;var map__25395__$1 = ((cljs.core.seq_QMARK_.call(null,map__25395))?cljs.core.apply.call(null,cljs.core.hash_map,map__25395):map__25395);var top = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25357_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25357_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25396){var map__25397 = p__25396;var map__25397__$1 = ((cljs.core.seq_QMARK_.call(null,map__25397))?cljs.core.apply.call(null,cljs.core.hash_map,map__25397):map__25397);var top = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25398 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25398,0,null);var init_top = cljs.core.nth.call(null,vec__25398,1,null);var vec__25399 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25399,0,null);var handle_top = cljs.core.nth.call(null,vec__25399,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25358_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25358_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25359_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25359_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25382){var self__ = this;
var _25382__$1 = this;return self__.meta25381;
});
ewen.dragdrop.examples.t25380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25382,meta25381__$1){var self__ = this;
var _25382__$1 = this;return (new ewen.dragdrop.examples.t25380(self__.owner,self__.cursor,self__.typical_draggable,meta25381__$1));
});
ewen.dragdrop.examples.__GT_t25380 = (function __GT_t25380(owner__$1,cursor__$1,typical_draggable__$1,meta25381){return (new ewen.dragdrop.examples.t25380(owner__$1,cursor__$1,typical_draggable__$1,meta25381));
});
}
return (new ewen.dragdrop.examples.t25380(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25402 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25402 = (function (owner,app,meta25403){
this.owner = owner;
this.app = app;
this.meta25403 = meta25403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25402.cljs$lang$type = true;
ewen.dragdrop.examples.t25402.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25402";
ewen.dragdrop.examples.t25402.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25402");
});
ewen.dragdrop.examples.t25402.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25402.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25404){var self__ = this;
var _25404__$1 = this;return self__.meta25403;
});
ewen.dragdrop.examples.t25402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25404,meta25403__$1){var self__ = this;
var _25404__$1 = this;return (new ewen.dragdrop.examples.t25402(self__.owner,self__.app,meta25403__$1));
});
ewen.dragdrop.examples.__GT_t25402 = (function __GT_t25402(owner__$1,app__$1,meta25403){return (new ewen.dragdrop.examples.t25402(owner__$1,app__$1,meta25403));
});
}
return (new ewen.dragdrop.examples.t25402(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25428 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25428 = (function (owner,cursor,delayed_draggable,meta25429){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta25429 = meta25429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25428.cljs$lang$type = true;
ewen.dragdrop.examples.t25428.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25428";
ewen.dragdrop.examples.t25428.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25428");
});
ewen.dragdrop.examples.t25428.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25428.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25431 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25431,0,null);var y = cljs.core.nth.call(null,vec__25431,1,null);var vec__25432 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25432,0,null);var h = cljs.core.nth.call(null,vec__25432,1,null);var obj25434 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25434;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25436 = {"position":"static","z-index":0};return obj25436;
})():null));return React.DOM.div((function (){var obj25438 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj25438;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t25428.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25428.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25428.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25428.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25448 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_25449 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25448);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25449);
var vec__25439 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25439,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25439,1,null);var vec__25440 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25440,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25440,1,null);var vec__25441 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25441,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25441,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25442){var map__25443 = p__25442;var map__25443__$1 = ((cljs.core.seq_QMARK_.call(null,map__25443))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);var top = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25405_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25405_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25444){var map__25445 = p__25444;var map__25445__$1 = ((cljs.core.seq_QMARK_.call(null,map__25445))?cljs.core.apply.call(null,cljs.core.hash_map,map__25445):map__25445);var top = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25446 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25446,0,null);var init_top = cljs.core.nth.call(null,vec__25446,1,null);var vec__25447 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25447,0,null);var handle_top = cljs.core.nth.call(null,vec__25447,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25406_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25406_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25407_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25407_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25430){var self__ = this;
var _25430__$1 = this;return self__.meta25429;
});
ewen.dragdrop.examples.t25428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25430,meta25429__$1){var self__ = this;
var _25430__$1 = this;return (new ewen.dragdrop.examples.t25428(self__.owner,self__.cursor,self__.delayed_draggable,meta25429__$1));
});
ewen.dragdrop.examples.__GT_t25428 = (function __GT_t25428(owner__$1,cursor__$1,delayed_draggable__$1,meta25429){return (new ewen.dragdrop.examples.t25428(owner__$1,cursor__$1,delayed_draggable__$1,meta25429));
});
}
return (new ewen.dragdrop.examples.t25428(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25450 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25450 = (function (owner,app,meta25451){
this.owner = owner;
this.app = app;
this.meta25451 = meta25451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25450.cljs$lang$type = true;
ewen.dragdrop.examples.t25450.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25450";
ewen.dragdrop.examples.t25450.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25450");
});
ewen.dragdrop.examples.t25450.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25450.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25452){var self__ = this;
var _25452__$1 = this;return self__.meta25451;
});
ewen.dragdrop.examples.t25450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25452,meta25451__$1){var self__ = this;
var _25452__$1 = this;return (new ewen.dragdrop.examples.t25450(self__.owner,self__.app,meta25451__$1));
});
ewen.dragdrop.examples.__GT_t25450 = (function __GT_t25450(owner__$1,app__$1,meta25451){return (new ewen.dragdrop.examples.t25450(owner__$1,app__$1,meta25451));
});
}
return (new ewen.dragdrop.examples.t25450(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25476 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25476 = (function (owner,cursor,hook_draggable,meta25477){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta25477 = meta25477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25476.cljs$lang$type = true;
ewen.dragdrop.examples.t25476.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25476";
ewen.dragdrop.examples.t25476.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25476");
});
ewen.dragdrop.examples.t25476.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25476.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25479 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25479,0,null);var y = cljs.core.nth.call(null,vec__25479,1,null);var vec__25480 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25480,0,null);var h = cljs.core.nth.call(null,vec__25480,1,null);var obj25482 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25482;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25484 = {"position":"static","z-index":0};return obj25484;
})():null));return React.DOM.div((function (){var obj25486 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj25486;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25476.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25476.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25476.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25476.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25496 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_25497 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25496);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25497);
var vec__25487 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25487,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25487,1,null);var vec__25488 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25488,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25488,1,null);var vec__25489 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25489,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25489,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25490){var map__25491 = p__25490;var map__25491__$1 = ((cljs.core.seq_QMARK_.call(null,map__25491))?cljs.core.apply.call(null,cljs.core.hash_map,map__25491):map__25491);var top = cljs.core.get.call(null,map__25491__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25491__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25453_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25453_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25492){var map__25493 = p__25492;var map__25493__$1 = ((cljs.core.seq_QMARK_.call(null,map__25493))?cljs.core.apply.call(null,cljs.core.hash_map,map__25493):map__25493);var top = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25494 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25494,0,null);var init_top = cljs.core.nth.call(null,vec__25494,1,null);var vec__25495 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25495,0,null);var handle_top = cljs.core.nth.call(null,vec__25495,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25454_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25454_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25455_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25455_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25478){var self__ = this;
var _25478__$1 = this;return self__.meta25477;
});
ewen.dragdrop.examples.t25476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25478,meta25477__$1){var self__ = this;
var _25478__$1 = this;return (new ewen.dragdrop.examples.t25476(self__.owner,self__.cursor,self__.hook_draggable,meta25477__$1));
});
ewen.dragdrop.examples.__GT_t25476 = (function __GT_t25476(owner__$1,cursor__$1,hook_draggable__$1,meta25477){return (new ewen.dragdrop.examples.t25476(owner__$1,cursor__$1,hook_draggable__$1,meta25477));
});
}
return (new ewen.dragdrop.examples.t25476(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25498 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25498 = (function (owner,app,meta25499){
this.owner = owner;
this.app = app;
this.meta25499 = meta25499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25498.cljs$lang$type = true;
ewen.dragdrop.examples.t25498.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25498";
ewen.dragdrop.examples.t25498.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25498");
});
ewen.dragdrop.examples.t25498.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25498.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25500){var self__ = this;
var _25500__$1 = this;return self__.meta25499;
});
ewen.dragdrop.examples.t25498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25500,meta25499__$1){var self__ = this;
var _25500__$1 = this;return (new ewen.dragdrop.examples.t25498(self__.owner,self__.app,meta25499__$1));
});
ewen.dragdrop.examples.__GT_t25498 = (function __GT_t25498(owner__$1,app__$1,meta25499){return (new ewen.dragdrop.examples.t25498(owner__$1,app__$1,meta25499));
});
}
return (new ewen.dragdrop.examples.t25498(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25524 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25524 = (function (owner,cursor,long_press_draggable,meta25525){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta25525 = meta25525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25524.cljs$lang$type = true;
ewen.dragdrop.examples.t25524.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25524";
ewen.dragdrop.examples.t25524.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25524");
});
ewen.dragdrop.examples.t25524.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25524.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25527 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25527,0,null);var y = cljs.core.nth.call(null,vec__25527,1,null);var vec__25528 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25528,0,null);var h = cljs.core.nth.call(null,vec__25528,1,null);var obj25530 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25530;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25532 = {"position":"static","z-index":0};return obj25532;
})():null));return React.DOM.div((function (){var obj25534 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj25534;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t25524.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25524.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25524.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25524.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25544 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_25545 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25544);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25545);
var vec__25535 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25535,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25535,1,null);var vec__25536 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25536,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25536,1,null);var vec__25537 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25537,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25537,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25538){var map__25539 = p__25538;var map__25539__$1 = ((cljs.core.seq_QMARK_.call(null,map__25539))?cljs.core.apply.call(null,cljs.core.hash_map,map__25539):map__25539);var top = cljs.core.get.call(null,map__25539__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25539__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25501_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25501_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25540){var map__25541 = p__25540;var map__25541__$1 = ((cljs.core.seq_QMARK_.call(null,map__25541))?cljs.core.apply.call(null,cljs.core.hash_map,map__25541):map__25541);var top = cljs.core.get.call(null,map__25541__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25541__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25542 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25542,0,null);var init_top = cljs.core.nth.call(null,vec__25542,1,null);var vec__25543 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25543,0,null);var handle_top = cljs.core.nth.call(null,vec__25543,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25502_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25502_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25503_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25503_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25526){var self__ = this;
var _25526__$1 = this;return self__.meta25525;
});
ewen.dragdrop.examples.t25524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25526,meta25525__$1){var self__ = this;
var _25526__$1 = this;return (new ewen.dragdrop.examples.t25524(self__.owner,self__.cursor,self__.long_press_draggable,meta25525__$1));
});
ewen.dragdrop.examples.__GT_t25524 = (function __GT_t25524(owner__$1,cursor__$1,long_press_draggable__$1,meta25525){return (new ewen.dragdrop.examples.t25524(owner__$1,cursor__$1,long_press_draggable__$1,meta25525));
});
}
return (new ewen.dragdrop.examples.t25524(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25546 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25546 = (function (owner,app,meta25547){
this.owner = owner;
this.app = app;
this.meta25547 = meta25547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25546.cljs$lang$type = true;
ewen.dragdrop.examples.t25546.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25546";
ewen.dragdrop.examples.t25546.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25546");
});
ewen.dragdrop.examples.t25546.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25546.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25548){var self__ = this;
var _25548__$1 = this;return self__.meta25547;
});
ewen.dragdrop.examples.t25546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25548,meta25547__$1){var self__ = this;
var _25548__$1 = this;return (new ewen.dragdrop.examples.t25546(self__.owner,self__.app,meta25547__$1));
});
ewen.dragdrop.examples.__GT_t25546 = (function __GT_t25546(owner__$1,app__$1,meta25547){return (new ewen.dragdrop.examples.t25546(owner__$1,app__$1,meta25547));
});
}
return (new ewen.dragdrop.examples.t25546(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map