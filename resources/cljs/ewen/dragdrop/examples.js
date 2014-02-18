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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22474 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22474 = (function (owner,cursor,typical_draggable,meta22475){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta22475 = meta22475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22474.cljs$lang$type = true;
ewen.dragdrop.examples.t22474.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22474";
ewen.dragdrop.examples.t22474.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22474");
});
ewen.dragdrop.examples.t22474.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22474.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22477 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22477,0,null);var y = cljs.core.nth.call(null,vec__22477,1,null);var vec__22478 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22478,0,null);var h = cljs.core.nth.call(null,vec__22478,1,null);var obj22480 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22480;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22482 = {"position":"static","z-index":0};return obj22482;
})():null));return React.DOM.div((function (){var obj22484 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj22484;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22474.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22474.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22474.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22474.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22494 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_22495 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22494);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22495);
var vec__22485 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22485,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22485,1,null);var vec__22486 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22486,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22486,1,null);var vec__22487 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22487,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22487,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__22450_SHARP_){return cljs.core.prn.call(null,domina.events.raw_event.call(null,p1__22450_SHARP_).clientX);
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22488){var map__22489 = p__22488;var map__22489__$1 = ((cljs.core.seq_QMARK_.call(null,map__22489))?cljs.core.apply.call(null,cljs.core.hash_map,map__22489):map__22489);var top = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22451_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22451_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22490){var map__22491 = p__22490;var map__22491__$1 = ((cljs.core.seq_QMARK_.call(null,map__22491))?cljs.core.apply.call(null,cljs.core.hash_map,map__22491):map__22491);var top = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22492 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22492,0,null);var init_top = cljs.core.nth.call(null,vec__22492,1,null);var vec__22493 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22493,0,null);var handle_top = cljs.core.nth.call(null,vec__22493,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22452_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22452_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22453_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22453_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22476){var self__ = this;
var _22476__$1 = this;return self__.meta22475;
});
ewen.dragdrop.examples.t22474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22476,meta22475__$1){var self__ = this;
var _22476__$1 = this;return (new ewen.dragdrop.examples.t22474(self__.owner,self__.cursor,self__.typical_draggable,meta22475__$1));
});
ewen.dragdrop.examples.__GT_t22474 = (function __GT_t22474(owner__$1,cursor__$1,typical_draggable__$1,meta22475){return (new ewen.dragdrop.examples.t22474(owner__$1,cursor__$1,typical_draggable__$1,meta22475));
});
}
return (new ewen.dragdrop.examples.t22474(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22496 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22496 = (function (owner,app,meta22497){
this.owner = owner;
this.app = app;
this.meta22497 = meta22497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22496.cljs$lang$type = true;
ewen.dragdrop.examples.t22496.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22496";
ewen.dragdrop.examples.t22496.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22496");
});
ewen.dragdrop.examples.t22496.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22496.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22498){var self__ = this;
var _22498__$1 = this;return self__.meta22497;
});
ewen.dragdrop.examples.t22496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22498,meta22497__$1){var self__ = this;
var _22498__$1 = this;return (new ewen.dragdrop.examples.t22496(self__.owner,self__.app,meta22497__$1));
});
ewen.dragdrop.examples.__GT_t22496 = (function __GT_t22496(owner__$1,app__$1,meta22497){return (new ewen.dragdrop.examples.t22496(owner__$1,app__$1,meta22497));
});
}
return (new ewen.dragdrop.examples.t22496(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22522 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22522 = (function (owner,cursor,delayed_draggable,meta22523){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta22523 = meta22523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22522.cljs$lang$type = true;
ewen.dragdrop.examples.t22522.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22522";
ewen.dragdrop.examples.t22522.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22522");
});
ewen.dragdrop.examples.t22522.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22522.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22525 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22525,0,null);var y = cljs.core.nth.call(null,vec__22525,1,null);var vec__22526 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22526,0,null);var h = cljs.core.nth.call(null,vec__22526,1,null);var obj22528 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22528;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22530 = {"position":"static","z-index":0};return obj22530;
})():null));return React.DOM.div((function (){var obj22532 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj22532;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t22522.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22522.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22522.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22522.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22542 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_22543 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22542);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22543);
var vec__22533 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22533,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22533,1,null);var vec__22534 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22534,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22534,1,null);var vec__22535 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22535,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22535,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22536){var map__22537 = p__22536;var map__22537__$1 = ((cljs.core.seq_QMARK_.call(null,map__22537))?cljs.core.apply.call(null,cljs.core.hash_map,map__22537):map__22537);var top = cljs.core.get.call(null,map__22537__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22537__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22499_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22499_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22538){var map__22539 = p__22538;var map__22539__$1 = ((cljs.core.seq_QMARK_.call(null,map__22539))?cljs.core.apply.call(null,cljs.core.hash_map,map__22539):map__22539);var top = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22540 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22540,0,null);var init_top = cljs.core.nth.call(null,vec__22540,1,null);var vec__22541 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22541,0,null);var handle_top = cljs.core.nth.call(null,vec__22541,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22500_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22500_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22501_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22501_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22524){var self__ = this;
var _22524__$1 = this;return self__.meta22523;
});
ewen.dragdrop.examples.t22522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22524,meta22523__$1){var self__ = this;
var _22524__$1 = this;return (new ewen.dragdrop.examples.t22522(self__.owner,self__.cursor,self__.delayed_draggable,meta22523__$1));
});
ewen.dragdrop.examples.__GT_t22522 = (function __GT_t22522(owner__$1,cursor__$1,delayed_draggable__$1,meta22523){return (new ewen.dragdrop.examples.t22522(owner__$1,cursor__$1,delayed_draggable__$1,meta22523));
});
}
return (new ewen.dragdrop.examples.t22522(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22544 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22544 = (function (owner,app,meta22545){
this.owner = owner;
this.app = app;
this.meta22545 = meta22545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22544.cljs$lang$type = true;
ewen.dragdrop.examples.t22544.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22544";
ewen.dragdrop.examples.t22544.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22544");
});
ewen.dragdrop.examples.t22544.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22544.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22546){var self__ = this;
var _22546__$1 = this;return self__.meta22545;
});
ewen.dragdrop.examples.t22544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22546,meta22545__$1){var self__ = this;
var _22546__$1 = this;return (new ewen.dragdrop.examples.t22544(self__.owner,self__.app,meta22545__$1));
});
ewen.dragdrop.examples.__GT_t22544 = (function __GT_t22544(owner__$1,app__$1,meta22545){return (new ewen.dragdrop.examples.t22544(owner__$1,app__$1,meta22545));
});
}
return (new ewen.dragdrop.examples.t22544(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22570 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22570 = (function (owner,cursor,hook_draggable,meta22571){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22570.cljs$lang$type = true;
ewen.dragdrop.examples.t22570.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22570";
ewen.dragdrop.examples.t22570.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22570");
});
ewen.dragdrop.examples.t22570.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22570.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22573 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22573,0,null);var y = cljs.core.nth.call(null,vec__22573,1,null);var vec__22574 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22574,0,null);var h = cljs.core.nth.call(null,vec__22574,1,null);var obj22576 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22576;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22578 = {"position":"static","z-index":0};return obj22578;
})():null));return React.DOM.div((function (){var obj22580 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj22580;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22570.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22570.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22570.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22570.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22590 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_22591 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22590);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22591);
var vec__22581 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22581,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22581,1,null);var vec__22582 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22582,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22582,1,null);var vec__22583 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22583,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22583,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22584){var map__22585 = p__22584;var map__22585__$1 = ((cljs.core.seq_QMARK_.call(null,map__22585))?cljs.core.apply.call(null,cljs.core.hash_map,map__22585):map__22585);var top = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22547_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22547_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22586){var map__22587 = p__22586;var map__22587__$1 = ((cljs.core.seq_QMARK_.call(null,map__22587))?cljs.core.apply.call(null,cljs.core.hash_map,map__22587):map__22587);var top = cljs.core.get.call(null,map__22587__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22587__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22588 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22588,0,null);var init_top = cljs.core.nth.call(null,vec__22588,1,null);var vec__22589 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22589,0,null);var handle_top = cljs.core.nth.call(null,vec__22589,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22548_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22548_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22549_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22549_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22572){var self__ = this;
var _22572__$1 = this;return self__.meta22571;
});
ewen.dragdrop.examples.t22570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22572,meta22571__$1){var self__ = this;
var _22572__$1 = this;return (new ewen.dragdrop.examples.t22570(self__.owner,self__.cursor,self__.hook_draggable,meta22571__$1));
});
ewen.dragdrop.examples.__GT_t22570 = (function __GT_t22570(owner__$1,cursor__$1,hook_draggable__$1,meta22571){return (new ewen.dragdrop.examples.t22570(owner__$1,cursor__$1,hook_draggable__$1,meta22571));
});
}
return (new ewen.dragdrop.examples.t22570(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22592 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22592 = (function (owner,app,meta22593){
this.owner = owner;
this.app = app;
this.meta22593 = meta22593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22592.cljs$lang$type = true;
ewen.dragdrop.examples.t22592.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22592";
ewen.dragdrop.examples.t22592.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22592");
});
ewen.dragdrop.examples.t22592.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22592.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22594){var self__ = this;
var _22594__$1 = this;return self__.meta22593;
});
ewen.dragdrop.examples.t22592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22594,meta22593__$1){var self__ = this;
var _22594__$1 = this;return (new ewen.dragdrop.examples.t22592(self__.owner,self__.app,meta22593__$1));
});
ewen.dragdrop.examples.__GT_t22592 = (function __GT_t22592(owner__$1,app__$1,meta22593){return (new ewen.dragdrop.examples.t22592(owner__$1,app__$1,meta22593));
});
}
return (new ewen.dragdrop.examples.t22592(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22618 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22618 = (function (owner,cursor,long_press_draggable,meta22619){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta22619 = meta22619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22618.cljs$lang$type = true;
ewen.dragdrop.examples.t22618.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22618";
ewen.dragdrop.examples.t22618.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22618");
});
ewen.dragdrop.examples.t22618.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22618.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22621 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22621,0,null);var y = cljs.core.nth.call(null,vec__22621,1,null);var vec__22622 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22622,0,null);var h = cljs.core.nth.call(null,vec__22622,1,null);var obj22624 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22624;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22626 = {"position":"static","z-index":0};return obj22626;
})():null));return React.DOM.div((function (){var obj22628 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj22628;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t22618.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22618.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22618.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22618.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22638 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_22639 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22638);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22639);
var vec__22629 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22629,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22629,1,null);var vec__22630 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22630,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22630,1,null);var vec__22631 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22631,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22631,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22632){var map__22633 = p__22632;var map__22633__$1 = ((cljs.core.seq_QMARK_.call(null,map__22633))?cljs.core.apply.call(null,cljs.core.hash_map,map__22633):map__22633);var top = cljs.core.get.call(null,map__22633__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22633__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22595_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22595_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22634){var map__22635 = p__22634;var map__22635__$1 = ((cljs.core.seq_QMARK_.call(null,map__22635))?cljs.core.apply.call(null,cljs.core.hash_map,map__22635):map__22635);var top = cljs.core.get.call(null,map__22635__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22635__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22636 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22636,0,null);var init_top = cljs.core.nth.call(null,vec__22636,1,null);var vec__22637 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22637,0,null);var handle_top = cljs.core.nth.call(null,vec__22637,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22596_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22596_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22597_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22597_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22620){var self__ = this;
var _22620__$1 = this;return self__.meta22619;
});
ewen.dragdrop.examples.t22618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22620,meta22619__$1){var self__ = this;
var _22620__$1 = this;return (new ewen.dragdrop.examples.t22618(self__.owner,self__.cursor,self__.long_press_draggable,meta22619__$1));
});
ewen.dragdrop.examples.__GT_t22618 = (function __GT_t22618(owner__$1,cursor__$1,long_press_draggable__$1,meta22619){return (new ewen.dragdrop.examples.t22618(owner__$1,cursor__$1,long_press_draggable__$1,meta22619));
});
}
return (new ewen.dragdrop.examples.t22618(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22640 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22640 = (function (owner,app,meta22641){
this.owner = owner;
this.app = app;
this.meta22641 = meta22641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22640.cljs$lang$type = true;
ewen.dragdrop.examples.t22640.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22640";
ewen.dragdrop.examples.t22640.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22640");
});
ewen.dragdrop.examples.t22640.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22640.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22642){var self__ = this;
var _22642__$1 = this;return self__.meta22641;
});
ewen.dragdrop.examples.t22640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22642,meta22641__$1){var self__ = this;
var _22642__$1 = this;return (new ewen.dragdrop.examples.t22640(self__.owner,self__.app,meta22641__$1));
});
ewen.dragdrop.examples.__GT_t22640 = (function __GT_t22640(owner__$1,app__$1,meta22641){return (new ewen.dragdrop.examples.t22640(owner__$1,app__$1,meta22641));
});
}
return (new ewen.dragdrop.examples.t22640(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map