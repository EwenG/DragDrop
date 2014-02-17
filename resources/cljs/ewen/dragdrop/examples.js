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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21483 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21483 = (function (owner,cursor,typical_draggable,meta21484){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta21484 = meta21484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21483.cljs$lang$type = true;
ewen.dragdrop.examples.t21483.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21483";
ewen.dragdrop.examples.t21483.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21483");
});
ewen.dragdrop.examples.t21483.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21483.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21486 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21486,0,null);var y = cljs.core.nth.call(null,vec__21486,1,null);var vec__21487 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21487,0,null);var h = cljs.core.nth.call(null,vec__21487,1,null);var obj21489 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21489;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21491 = {"position":"static","z-index":0};return obj21491;
})():null));return React.DOM.div((function (){var obj21493 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj21493;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21483.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21483.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21483.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21483.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21503 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_21504 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21503);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21504);
var vec__21494 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21494,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21494,1,null);var vec__21495 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21495,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21495,1,null);var vec__21496 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21496,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21496,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__21459_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(p1__21459_SHARP_)].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21497){var map__21498 = p__21497;var map__21498__$1 = ((cljs.core.seq_QMARK_.call(null,map__21498))?cljs.core.apply.call(null,cljs.core.hash_map,map__21498):map__21498);var top = cljs.core.get.call(null,map__21498__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21498__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21460_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21460_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21499){var map__21500 = p__21499;var map__21500__$1 = ((cljs.core.seq_QMARK_.call(null,map__21500))?cljs.core.apply.call(null,cljs.core.hash_map,map__21500):map__21500);var top = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21501 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21501,0,null);var init_top = cljs.core.nth.call(null,vec__21501,1,null);var vec__21502 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21502,0,null);var handle_top = cljs.core.nth.call(null,vec__21502,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21461_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21461_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21462_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21462_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21485){var self__ = this;
var _21485__$1 = this;return self__.meta21484;
});
ewen.dragdrop.examples.t21483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21485,meta21484__$1){var self__ = this;
var _21485__$1 = this;return (new ewen.dragdrop.examples.t21483(self__.owner,self__.cursor,self__.typical_draggable,meta21484__$1));
});
ewen.dragdrop.examples.__GT_t21483 = (function __GT_t21483(owner__$1,cursor__$1,typical_draggable__$1,meta21484){return (new ewen.dragdrop.examples.t21483(owner__$1,cursor__$1,typical_draggable__$1,meta21484));
});
}
return (new ewen.dragdrop.examples.t21483(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21505 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21505 = (function (owner,app,meta21506){
this.owner = owner;
this.app = app;
this.meta21506 = meta21506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21505.cljs$lang$type = true;
ewen.dragdrop.examples.t21505.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21505";
ewen.dragdrop.examples.t21505.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21505");
});
ewen.dragdrop.examples.t21505.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21505.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21507){var self__ = this;
var _21507__$1 = this;return self__.meta21506;
});
ewen.dragdrop.examples.t21505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21507,meta21506__$1){var self__ = this;
var _21507__$1 = this;return (new ewen.dragdrop.examples.t21505(self__.owner,self__.app,meta21506__$1));
});
ewen.dragdrop.examples.__GT_t21505 = (function __GT_t21505(owner__$1,app__$1,meta21506){return (new ewen.dragdrop.examples.t21505(owner__$1,app__$1,meta21506));
});
}
return (new ewen.dragdrop.examples.t21505(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21531 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21531 = (function (owner,cursor,delayed_draggable,meta21532){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta21532 = meta21532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21531.cljs$lang$type = true;
ewen.dragdrop.examples.t21531.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21531";
ewen.dragdrop.examples.t21531.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21531");
});
ewen.dragdrop.examples.t21531.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21531.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21534 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21534,0,null);var y = cljs.core.nth.call(null,vec__21534,1,null);var vec__21535 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21535,0,null);var h = cljs.core.nth.call(null,vec__21535,1,null);var obj21537 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21537;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21539 = {"position":"static","z-index":0};return obj21539;
})():null));return React.DOM.div((function (){var obj21541 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj21541;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t21531.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21531.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21531.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21531.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21551 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_21552 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21551);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21552);
var vec__21542 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21542,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21542,1,null);var vec__21543 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21543,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21543,1,null);var vec__21544 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21544,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21544,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21545){var map__21546 = p__21545;var map__21546__$1 = ((cljs.core.seq_QMARK_.call(null,map__21546))?cljs.core.apply.call(null,cljs.core.hash_map,map__21546):map__21546);var top = cljs.core.get.call(null,map__21546__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21546__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21508_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21508_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21547){var map__21548 = p__21547;var map__21548__$1 = ((cljs.core.seq_QMARK_.call(null,map__21548))?cljs.core.apply.call(null,cljs.core.hash_map,map__21548):map__21548);var top = cljs.core.get.call(null,map__21548__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21548__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21549 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21549,0,null);var init_top = cljs.core.nth.call(null,vec__21549,1,null);var vec__21550 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21550,0,null);var handle_top = cljs.core.nth.call(null,vec__21550,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21509_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21509_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21510_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21510_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21533){var self__ = this;
var _21533__$1 = this;return self__.meta21532;
});
ewen.dragdrop.examples.t21531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21533,meta21532__$1){var self__ = this;
var _21533__$1 = this;return (new ewen.dragdrop.examples.t21531(self__.owner,self__.cursor,self__.delayed_draggable,meta21532__$1));
});
ewen.dragdrop.examples.__GT_t21531 = (function __GT_t21531(owner__$1,cursor__$1,delayed_draggable__$1,meta21532){return (new ewen.dragdrop.examples.t21531(owner__$1,cursor__$1,delayed_draggable__$1,meta21532));
});
}
return (new ewen.dragdrop.examples.t21531(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21553 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21553 = (function (owner,app,meta21554){
this.owner = owner;
this.app = app;
this.meta21554 = meta21554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21553.cljs$lang$type = true;
ewen.dragdrop.examples.t21553.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21553";
ewen.dragdrop.examples.t21553.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21553");
});
ewen.dragdrop.examples.t21553.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21553.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21555){var self__ = this;
var _21555__$1 = this;return self__.meta21554;
});
ewen.dragdrop.examples.t21553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21555,meta21554__$1){var self__ = this;
var _21555__$1 = this;return (new ewen.dragdrop.examples.t21553(self__.owner,self__.app,meta21554__$1));
});
ewen.dragdrop.examples.__GT_t21553 = (function __GT_t21553(owner__$1,app__$1,meta21554){return (new ewen.dragdrop.examples.t21553(owner__$1,app__$1,meta21554));
});
}
return (new ewen.dragdrop.examples.t21553(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21579 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21579 = (function (owner,cursor,hook_draggable,meta21580){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta21580 = meta21580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21579.cljs$lang$type = true;
ewen.dragdrop.examples.t21579.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21579";
ewen.dragdrop.examples.t21579.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21579");
});
ewen.dragdrop.examples.t21579.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21579.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21582 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21582,0,null);var y = cljs.core.nth.call(null,vec__21582,1,null);var vec__21583 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21583,0,null);var h = cljs.core.nth.call(null,vec__21583,1,null);var obj21585 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21585;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21587 = {"position":"static","z-index":0};return obj21587;
})():null));return React.DOM.div((function (){var obj21589 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj21589;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21579.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21579.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21579.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21579.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21599 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_21600 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21599);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21600);
var vec__21590 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21590,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21590,1,null);var vec__21591 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21591,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21591,1,null);var vec__21592 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21592,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21592,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21593){var map__21594 = p__21593;var map__21594__$1 = ((cljs.core.seq_QMARK_.call(null,map__21594))?cljs.core.apply.call(null,cljs.core.hash_map,map__21594):map__21594);var top = cljs.core.get.call(null,map__21594__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21594__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21556_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21556_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21595){var map__21596 = p__21595;var map__21596__$1 = ((cljs.core.seq_QMARK_.call(null,map__21596))?cljs.core.apply.call(null,cljs.core.hash_map,map__21596):map__21596);var top = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21597 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21597,0,null);var init_top = cljs.core.nth.call(null,vec__21597,1,null);var vec__21598 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21598,0,null);var handle_top = cljs.core.nth.call(null,vec__21598,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21557_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21557_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21558_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21558_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21581){var self__ = this;
var _21581__$1 = this;return self__.meta21580;
});
ewen.dragdrop.examples.t21579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21581,meta21580__$1){var self__ = this;
var _21581__$1 = this;return (new ewen.dragdrop.examples.t21579(self__.owner,self__.cursor,self__.hook_draggable,meta21580__$1));
});
ewen.dragdrop.examples.__GT_t21579 = (function __GT_t21579(owner__$1,cursor__$1,hook_draggable__$1,meta21580){return (new ewen.dragdrop.examples.t21579(owner__$1,cursor__$1,hook_draggable__$1,meta21580));
});
}
return (new ewen.dragdrop.examples.t21579(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21601 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21601 = (function (owner,app,meta21602){
this.owner = owner;
this.app = app;
this.meta21602 = meta21602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21601.cljs$lang$type = true;
ewen.dragdrop.examples.t21601.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21601";
ewen.dragdrop.examples.t21601.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21601");
});
ewen.dragdrop.examples.t21601.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21601.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21603){var self__ = this;
var _21603__$1 = this;return self__.meta21602;
});
ewen.dragdrop.examples.t21601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21603,meta21602__$1){var self__ = this;
var _21603__$1 = this;return (new ewen.dragdrop.examples.t21601(self__.owner,self__.app,meta21602__$1));
});
ewen.dragdrop.examples.__GT_t21601 = (function __GT_t21601(owner__$1,app__$1,meta21602){return (new ewen.dragdrop.examples.t21601(owner__$1,app__$1,meta21602));
});
}
return (new ewen.dragdrop.examples.t21601(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21627 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21627 = (function (owner,cursor,long_press_draggable,meta21628){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta21628 = meta21628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21627.cljs$lang$type = true;
ewen.dragdrop.examples.t21627.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21627";
ewen.dragdrop.examples.t21627.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21627");
});
ewen.dragdrop.examples.t21627.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21627.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21630 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21630,0,null);var y = cljs.core.nth.call(null,vec__21630,1,null);var vec__21631 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21631,0,null);var h = cljs.core.nth.call(null,vec__21631,1,null);var obj21633 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21633;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21635 = {"position":"static","z-index":0};return obj21635;
})():null));return React.DOM.div((function (){var obj21637 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj21637;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t21627.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21627.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21627.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21627.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21647 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_21648 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21647);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21648);
var vec__21638 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21638,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21638,1,null);var vec__21639 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21639,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21639,1,null);var vec__21640 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21640,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21640,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21641){var map__21642 = p__21641;var map__21642__$1 = ((cljs.core.seq_QMARK_.call(null,map__21642))?cljs.core.apply.call(null,cljs.core.hash_map,map__21642):map__21642);var top = cljs.core.get.call(null,map__21642__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21642__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21604_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21604_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21643){var map__21644 = p__21643;var map__21644__$1 = ((cljs.core.seq_QMARK_.call(null,map__21644))?cljs.core.apply.call(null,cljs.core.hash_map,map__21644):map__21644);var top = cljs.core.get.call(null,map__21644__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21644__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21645 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21645,0,null);var init_top = cljs.core.nth.call(null,vec__21645,1,null);var vec__21646 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21646,0,null);var handle_top = cljs.core.nth.call(null,vec__21646,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21605_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21605_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21606_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21606_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21629){var self__ = this;
var _21629__$1 = this;return self__.meta21628;
});
ewen.dragdrop.examples.t21627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21629,meta21628__$1){var self__ = this;
var _21629__$1 = this;return (new ewen.dragdrop.examples.t21627(self__.owner,self__.cursor,self__.long_press_draggable,meta21628__$1));
});
ewen.dragdrop.examples.__GT_t21627 = (function __GT_t21627(owner__$1,cursor__$1,long_press_draggable__$1,meta21628){return (new ewen.dragdrop.examples.t21627(owner__$1,cursor__$1,long_press_draggable__$1,meta21628));
});
}
return (new ewen.dragdrop.examples.t21627(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21649 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21649 = (function (owner,app,meta21650){
this.owner = owner;
this.app = app;
this.meta21650 = meta21650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21649.cljs$lang$type = true;
ewen.dragdrop.examples.t21649.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21649";
ewen.dragdrop.examples.t21649.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21649");
});
ewen.dragdrop.examples.t21649.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21649.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21651){var self__ = this;
var _21651__$1 = this;return self__.meta21650;
});
ewen.dragdrop.examples.t21649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21651,meta21650__$1){var self__ = this;
var _21651__$1 = this;return (new ewen.dragdrop.examples.t21649(self__.owner,self__.app,meta21650__$1));
});
ewen.dragdrop.examples.__GT_t21649 = (function __GT_t21649(owner__$1,app__$1,meta21650){return (new ewen.dragdrop.examples.t21649(owner__$1,app__$1,meta21650));
});
}
return (new ewen.dragdrop.examples.t21649(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map