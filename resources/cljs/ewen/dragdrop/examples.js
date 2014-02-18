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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24595 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24595 = (function (owner,cursor,typical_draggable,meta24596){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta24596 = meta24596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24595.cljs$lang$type = true;
ewen.dragdrop.examples.t24595.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24595";
ewen.dragdrop.examples.t24595.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24595");
});
ewen.dragdrop.examples.t24595.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24595.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24598 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24598,0,null);var y = cljs.core.nth.call(null,vec__24598,1,null);var vec__24599 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24599,0,null);var h = cljs.core.nth.call(null,vec__24599,1,null);var obj24601 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24601;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24603 = {"position":"static","z-index":0};return obj24603;
})():null));return React.DOM.div((function (){var obj24605 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj24605;
})(),"Drag me!");
});
ewen.dragdrop.examples.t24595.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24595.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24595.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24595.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24615 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_24616 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24615);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24616);
var vec__24606 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24606,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24606,1,null);var vec__24607 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24607,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24607,1,null);var vec__24608 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24608,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24608,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__24571_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__24571_SHARP_).pageX)].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24609){var map__24610 = p__24609;var map__24610__$1 = ((cljs.core.seq_QMARK_.call(null,map__24610))?cljs.core.apply.call(null,cljs.core.hash_map,map__24610):map__24610);var top = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24572_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24572_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24611){var map__24612 = p__24611;var map__24612__$1 = ((cljs.core.seq_QMARK_.call(null,map__24612))?cljs.core.apply.call(null,cljs.core.hash_map,map__24612):map__24612);var top = cljs.core.get.call(null,map__24612__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24612__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24613 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24613,0,null);var init_top = cljs.core.nth.call(null,vec__24613,1,null);var vec__24614 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24614,0,null);var handle_top = cljs.core.nth.call(null,vec__24614,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24573_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24573_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24574_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24574_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24597){var self__ = this;
var _24597__$1 = this;return self__.meta24596;
});
ewen.dragdrop.examples.t24595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24597,meta24596__$1){var self__ = this;
var _24597__$1 = this;return (new ewen.dragdrop.examples.t24595(self__.owner,self__.cursor,self__.typical_draggable,meta24596__$1));
});
ewen.dragdrop.examples.__GT_t24595 = (function __GT_t24595(owner__$1,cursor__$1,typical_draggable__$1,meta24596){return (new ewen.dragdrop.examples.t24595(owner__$1,cursor__$1,typical_draggable__$1,meta24596));
});
}
return (new ewen.dragdrop.examples.t24595(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24617 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24617 = (function (owner,app,meta24618){
this.owner = owner;
this.app = app;
this.meta24618 = meta24618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24617.cljs$lang$type = true;
ewen.dragdrop.examples.t24617.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24617";
ewen.dragdrop.examples.t24617.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24617");
});
ewen.dragdrop.examples.t24617.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24617.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24619){var self__ = this;
var _24619__$1 = this;return self__.meta24618;
});
ewen.dragdrop.examples.t24617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24619,meta24618__$1){var self__ = this;
var _24619__$1 = this;return (new ewen.dragdrop.examples.t24617(self__.owner,self__.app,meta24618__$1));
});
ewen.dragdrop.examples.__GT_t24617 = (function __GT_t24617(owner__$1,app__$1,meta24618){return (new ewen.dragdrop.examples.t24617(owner__$1,app__$1,meta24618));
});
}
return (new ewen.dragdrop.examples.t24617(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24643 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24643 = (function (owner,cursor,delayed_draggable,meta24644){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta24644 = meta24644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24643.cljs$lang$type = true;
ewen.dragdrop.examples.t24643.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24643";
ewen.dragdrop.examples.t24643.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24643");
});
ewen.dragdrop.examples.t24643.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24643.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24646 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24646,0,null);var y = cljs.core.nth.call(null,vec__24646,1,null);var vec__24647 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24647,0,null);var h = cljs.core.nth.call(null,vec__24647,1,null);var obj24649 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24649;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24651 = {"position":"static","z-index":0};return obj24651;
})():null));return React.DOM.div((function (){var obj24653 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj24653;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t24643.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24643.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24643.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24643.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24663 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_24664 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24663);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24664);
var vec__24654 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24654,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24654,1,null);var vec__24655 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24655,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24655,1,null);var vec__24656 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24656,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24656,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24657){var map__24658 = p__24657;var map__24658__$1 = ((cljs.core.seq_QMARK_.call(null,map__24658))?cljs.core.apply.call(null,cljs.core.hash_map,map__24658):map__24658);var top = cljs.core.get.call(null,map__24658__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24658__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24620_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24620_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24659){var map__24660 = p__24659;var map__24660__$1 = ((cljs.core.seq_QMARK_.call(null,map__24660))?cljs.core.apply.call(null,cljs.core.hash_map,map__24660):map__24660);var top = cljs.core.get.call(null,map__24660__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24660__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24661 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24661,0,null);var init_top = cljs.core.nth.call(null,vec__24661,1,null);var vec__24662 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24662,0,null);var handle_top = cljs.core.nth.call(null,vec__24662,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24621_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24621_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24622_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24622_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24645){var self__ = this;
var _24645__$1 = this;return self__.meta24644;
});
ewen.dragdrop.examples.t24643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24645,meta24644__$1){var self__ = this;
var _24645__$1 = this;return (new ewen.dragdrop.examples.t24643(self__.owner,self__.cursor,self__.delayed_draggable,meta24644__$1));
});
ewen.dragdrop.examples.__GT_t24643 = (function __GT_t24643(owner__$1,cursor__$1,delayed_draggable__$1,meta24644){return (new ewen.dragdrop.examples.t24643(owner__$1,cursor__$1,delayed_draggable__$1,meta24644));
});
}
return (new ewen.dragdrop.examples.t24643(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24665 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24665 = (function (owner,app,meta24666){
this.owner = owner;
this.app = app;
this.meta24666 = meta24666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24665.cljs$lang$type = true;
ewen.dragdrop.examples.t24665.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24665";
ewen.dragdrop.examples.t24665.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24665");
});
ewen.dragdrop.examples.t24665.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24665.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24667){var self__ = this;
var _24667__$1 = this;return self__.meta24666;
});
ewen.dragdrop.examples.t24665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24667,meta24666__$1){var self__ = this;
var _24667__$1 = this;return (new ewen.dragdrop.examples.t24665(self__.owner,self__.app,meta24666__$1));
});
ewen.dragdrop.examples.__GT_t24665 = (function __GT_t24665(owner__$1,app__$1,meta24666){return (new ewen.dragdrop.examples.t24665(owner__$1,app__$1,meta24666));
});
}
return (new ewen.dragdrop.examples.t24665(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24691 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24691 = (function (owner,cursor,hook_draggable,meta24692){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta24692 = meta24692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24691.cljs$lang$type = true;
ewen.dragdrop.examples.t24691.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24691";
ewen.dragdrop.examples.t24691.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24691");
});
ewen.dragdrop.examples.t24691.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24691.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24694 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24694,0,null);var y = cljs.core.nth.call(null,vec__24694,1,null);var vec__24695 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24695,0,null);var h = cljs.core.nth.call(null,vec__24695,1,null);var obj24697 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24697;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24699 = {"position":"static","z-index":0};return obj24699;
})():null));return React.DOM.div((function (){var obj24701 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj24701;
})(),"Drag me!");
});
ewen.dragdrop.examples.t24691.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24691.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24691.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24691.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24711 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_24712 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24711);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24712);
var vec__24702 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24702,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24702,1,null);var vec__24703 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24703,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24703,1,null);var vec__24704 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24704,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24704,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24705){var map__24706 = p__24705;var map__24706__$1 = ((cljs.core.seq_QMARK_.call(null,map__24706))?cljs.core.apply.call(null,cljs.core.hash_map,map__24706):map__24706);var top = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24668_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24668_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24707){var map__24708 = p__24707;var map__24708__$1 = ((cljs.core.seq_QMARK_.call(null,map__24708))?cljs.core.apply.call(null,cljs.core.hash_map,map__24708):map__24708);var top = cljs.core.get.call(null,map__24708__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24708__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24709 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24709,0,null);var init_top = cljs.core.nth.call(null,vec__24709,1,null);var vec__24710 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24710,0,null);var handle_top = cljs.core.nth.call(null,vec__24710,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24669_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24669_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24670_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24670_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24693){var self__ = this;
var _24693__$1 = this;return self__.meta24692;
});
ewen.dragdrop.examples.t24691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24693,meta24692__$1){var self__ = this;
var _24693__$1 = this;return (new ewen.dragdrop.examples.t24691(self__.owner,self__.cursor,self__.hook_draggable,meta24692__$1));
});
ewen.dragdrop.examples.__GT_t24691 = (function __GT_t24691(owner__$1,cursor__$1,hook_draggable__$1,meta24692){return (new ewen.dragdrop.examples.t24691(owner__$1,cursor__$1,hook_draggable__$1,meta24692));
});
}
return (new ewen.dragdrop.examples.t24691(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24713 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24713 = (function (owner,app,meta24714){
this.owner = owner;
this.app = app;
this.meta24714 = meta24714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24713.cljs$lang$type = true;
ewen.dragdrop.examples.t24713.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24713";
ewen.dragdrop.examples.t24713.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24713");
});
ewen.dragdrop.examples.t24713.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24713.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24715){var self__ = this;
var _24715__$1 = this;return self__.meta24714;
});
ewen.dragdrop.examples.t24713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24715,meta24714__$1){var self__ = this;
var _24715__$1 = this;return (new ewen.dragdrop.examples.t24713(self__.owner,self__.app,meta24714__$1));
});
ewen.dragdrop.examples.__GT_t24713 = (function __GT_t24713(owner__$1,app__$1,meta24714){return (new ewen.dragdrop.examples.t24713(owner__$1,app__$1,meta24714));
});
}
return (new ewen.dragdrop.examples.t24713(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24739 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24739 = (function (owner,cursor,long_press_draggable,meta24740){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta24740 = meta24740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24739.cljs$lang$type = true;
ewen.dragdrop.examples.t24739.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24739";
ewen.dragdrop.examples.t24739.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24739");
});
ewen.dragdrop.examples.t24739.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24739.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24742 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24742,0,null);var y = cljs.core.nth.call(null,vec__24742,1,null);var vec__24743 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24743,0,null);var h = cljs.core.nth.call(null,vec__24743,1,null);var obj24745 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24745;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24747 = {"position":"static","z-index":0};return obj24747;
})():null));return React.DOM.div((function (){var obj24749 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj24749;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t24739.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24739.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24739.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24739.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24759 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_24760 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24759);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24760);
var vec__24750 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24750,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24750,1,null);var vec__24751 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24751,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24751,1,null);var vec__24752 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24752,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24752,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24753){var map__24754 = p__24753;var map__24754__$1 = ((cljs.core.seq_QMARK_.call(null,map__24754))?cljs.core.apply.call(null,cljs.core.hash_map,map__24754):map__24754);var top = cljs.core.get.call(null,map__24754__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24754__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24716_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24716_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24755){var map__24756 = p__24755;var map__24756__$1 = ((cljs.core.seq_QMARK_.call(null,map__24756))?cljs.core.apply.call(null,cljs.core.hash_map,map__24756):map__24756);var top = cljs.core.get.call(null,map__24756__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24756__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24757 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24757,0,null);var init_top = cljs.core.nth.call(null,vec__24757,1,null);var vec__24758 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24758,0,null);var handle_top = cljs.core.nth.call(null,vec__24758,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24717_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24717_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24718_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24718_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24741){var self__ = this;
var _24741__$1 = this;return self__.meta24740;
});
ewen.dragdrop.examples.t24739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24741,meta24740__$1){var self__ = this;
var _24741__$1 = this;return (new ewen.dragdrop.examples.t24739(self__.owner,self__.cursor,self__.long_press_draggable,meta24740__$1));
});
ewen.dragdrop.examples.__GT_t24739 = (function __GT_t24739(owner__$1,cursor__$1,long_press_draggable__$1,meta24740){return (new ewen.dragdrop.examples.t24739(owner__$1,cursor__$1,long_press_draggable__$1,meta24740));
});
}
return (new ewen.dragdrop.examples.t24739(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24761 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24761 = (function (owner,app,meta24762){
this.owner = owner;
this.app = app;
this.meta24762 = meta24762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24761.cljs$lang$type = true;
ewen.dragdrop.examples.t24761.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24761";
ewen.dragdrop.examples.t24761.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24761");
});
ewen.dragdrop.examples.t24761.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24761.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24763){var self__ = this;
var _24763__$1 = this;return self__.meta24762;
});
ewen.dragdrop.examples.t24761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24763,meta24762__$1){var self__ = this;
var _24763__$1 = this;return (new ewen.dragdrop.examples.t24761(self__.owner,self__.app,meta24762__$1));
});
ewen.dragdrop.examples.__GT_t24761 = (function __GT_t24761(owner__$1,app__$1,meta24762){return (new ewen.dragdrop.examples.t24761(owner__$1,app__$1,meta24762));
});
}
return (new ewen.dragdrop.examples.t24761(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map