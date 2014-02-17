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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17586 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17586 = (function (owner,cursor,typical_draggable,meta17587){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta17587 = meta17587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17586.cljs$lang$type = true;
ewen.dragdrop.examples.t17586.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17586";
ewen.dragdrop.examples.t17586.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17586");
});
ewen.dragdrop.examples.t17586.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17586.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17589 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17589,0,null);var y = cljs.core.nth.call(null,vec__17589,1,null);var vec__17590 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17590,0,null);var h = cljs.core.nth.call(null,vec__17590,1,null);var obj17592 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj17592;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17594 = {"position":"static","z-index":0};return obj17594;
})():null));return React.DOM.div((function (){var obj17596 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj17596;
})(),"Drag me!");
});
ewen.dragdrop.examples.t17586.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17586.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17586.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17586.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17606 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_17607 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17606);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_17607);
var vec__17597 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17597,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17597,1,null);var vec__17598 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17598,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17598,1,null);var vec__17599 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17599,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17599,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17600){var map__17601 = p__17600;var map__17601__$1 = ((cljs.core.seq_QMARK_.call(null,map__17601))?cljs.core.apply.call(null,cljs.core.hash_map,map__17601):map__17601);var top = cljs.core.get.call(null,map__17601__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17601__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17563_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17563_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17602){var map__17603 = p__17602;var map__17603__$1 = ((cljs.core.seq_QMARK_.call(null,map__17603))?cljs.core.apply.call(null,cljs.core.hash_map,map__17603):map__17603);var top = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17603__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__17604 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__17604,0,null);var init_top = cljs.core.nth.call(null,vec__17604,1,null);var vec__17605 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__17605,0,null);var handle_top = cljs.core.nth.call(null,vec__17605,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17564_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17564_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17565_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17565_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17588){var self__ = this;
var _17588__$1 = this;return self__.meta17587;
});
ewen.dragdrop.examples.t17586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17588,meta17587__$1){var self__ = this;
var _17588__$1 = this;return (new ewen.dragdrop.examples.t17586(self__.owner,self__.cursor,self__.typical_draggable,meta17587__$1));
});
ewen.dragdrop.examples.__GT_t17586 = (function __GT_t17586(owner__$1,cursor__$1,typical_draggable__$1,meta17587){return (new ewen.dragdrop.examples.t17586(owner__$1,cursor__$1,typical_draggable__$1,meta17587));
});
}
return (new ewen.dragdrop.examples.t17586(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17608 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17608 = (function (owner,app,meta17609){
this.owner = owner;
this.app = app;
this.meta17609 = meta17609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17608.cljs$lang$type = true;
ewen.dragdrop.examples.t17608.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17608";
ewen.dragdrop.examples.t17608.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17608");
});
ewen.dragdrop.examples.t17608.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17608.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17610){var self__ = this;
var _17610__$1 = this;return self__.meta17609;
});
ewen.dragdrop.examples.t17608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17610,meta17609__$1){var self__ = this;
var _17610__$1 = this;return (new ewen.dragdrop.examples.t17608(self__.owner,self__.app,meta17609__$1));
});
ewen.dragdrop.examples.__GT_t17608 = (function __GT_t17608(owner__$1,app__$1,meta17609){return (new ewen.dragdrop.examples.t17608(owner__$1,app__$1,meta17609));
});
}
return (new ewen.dragdrop.examples.t17608(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17634 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17634 = (function (owner,cursor,delayed_draggable,meta17635){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta17635 = meta17635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17634.cljs$lang$type = true;
ewen.dragdrop.examples.t17634.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17634";
ewen.dragdrop.examples.t17634.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17634");
});
ewen.dragdrop.examples.t17634.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17634.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17637 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17637,0,null);var y = cljs.core.nth.call(null,vec__17637,1,null);var vec__17638 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17638,0,null);var h = cljs.core.nth.call(null,vec__17638,1,null);var obj17640 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj17640;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17642 = {"position":"static","z-index":0};return obj17642;
})():null));return React.DOM.div((function (){var obj17644 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj17644;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t17634.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17634.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17634.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17634.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17654 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_17655 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17654);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_17655);
var vec__17645 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17645,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17645,1,null);var vec__17646 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17646,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17646,1,null);var vec__17647 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17647,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17647,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17648){var map__17649 = p__17648;var map__17649__$1 = ((cljs.core.seq_QMARK_.call(null,map__17649))?cljs.core.apply.call(null,cljs.core.hash_map,map__17649):map__17649);var top = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17611_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17611_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17650){var map__17651 = p__17650;var map__17651__$1 = ((cljs.core.seq_QMARK_.call(null,map__17651))?cljs.core.apply.call(null,cljs.core.hash_map,map__17651):map__17651);var top = cljs.core.get.call(null,map__17651__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17651__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__17652 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__17652,0,null);var init_top = cljs.core.nth.call(null,vec__17652,1,null);var vec__17653 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__17653,0,null);var handle_top = cljs.core.nth.call(null,vec__17653,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17612_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17612_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17613_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17613_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17636){var self__ = this;
var _17636__$1 = this;return self__.meta17635;
});
ewen.dragdrop.examples.t17634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17636,meta17635__$1){var self__ = this;
var _17636__$1 = this;return (new ewen.dragdrop.examples.t17634(self__.owner,self__.cursor,self__.delayed_draggable,meta17635__$1));
});
ewen.dragdrop.examples.__GT_t17634 = (function __GT_t17634(owner__$1,cursor__$1,delayed_draggable__$1,meta17635){return (new ewen.dragdrop.examples.t17634(owner__$1,cursor__$1,delayed_draggable__$1,meta17635));
});
}
return (new ewen.dragdrop.examples.t17634(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17656 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17656 = (function (owner,app,meta17657){
this.owner = owner;
this.app = app;
this.meta17657 = meta17657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17656.cljs$lang$type = true;
ewen.dragdrop.examples.t17656.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17656";
ewen.dragdrop.examples.t17656.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17656");
});
ewen.dragdrop.examples.t17656.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17656.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17658){var self__ = this;
var _17658__$1 = this;return self__.meta17657;
});
ewen.dragdrop.examples.t17656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17658,meta17657__$1){var self__ = this;
var _17658__$1 = this;return (new ewen.dragdrop.examples.t17656(self__.owner,self__.app,meta17657__$1));
});
ewen.dragdrop.examples.__GT_t17656 = (function __GT_t17656(owner__$1,app__$1,meta17657){return (new ewen.dragdrop.examples.t17656(owner__$1,app__$1,meta17657));
});
}
return (new ewen.dragdrop.examples.t17656(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17682 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17682 = (function (owner,cursor,hook_draggable,meta17683){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta17683 = meta17683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17682.cljs$lang$type = true;
ewen.dragdrop.examples.t17682.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17682";
ewen.dragdrop.examples.t17682.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17682");
});
ewen.dragdrop.examples.t17682.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17682.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17685 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17685,0,null);var y = cljs.core.nth.call(null,vec__17685,1,null);var vec__17686 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17686,0,null);var h = cljs.core.nth.call(null,vec__17686,1,null);var obj17688 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj17688;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17690 = {"position":"static","z-index":0};return obj17690;
})():null));return React.DOM.div((function (){var obj17692 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj17692;
})(),"Drag me!");
});
ewen.dragdrop.examples.t17682.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17682.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17682.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17682.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17702 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_17703 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17702);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_17703);
var vec__17693 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17693,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17693,1,null);var vec__17694 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17694,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17694,1,null);var vec__17695 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17695,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17695,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17696){var map__17697 = p__17696;var map__17697__$1 = ((cljs.core.seq_QMARK_.call(null,map__17697))?cljs.core.apply.call(null,cljs.core.hash_map,map__17697):map__17697);var top = cljs.core.get.call(null,map__17697__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17697__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17659_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17659_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17698){var map__17699 = p__17698;var map__17699__$1 = ((cljs.core.seq_QMARK_.call(null,map__17699))?cljs.core.apply.call(null,cljs.core.hash_map,map__17699):map__17699);var top = cljs.core.get.call(null,map__17699__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17699__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__17700 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__17700,0,null);var init_top = cljs.core.nth.call(null,vec__17700,1,null);var vec__17701 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__17701,0,null);var handle_top = cljs.core.nth.call(null,vec__17701,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17660_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17660_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17661_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17661_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17684){var self__ = this;
var _17684__$1 = this;return self__.meta17683;
});
ewen.dragdrop.examples.t17682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17684,meta17683__$1){var self__ = this;
var _17684__$1 = this;return (new ewen.dragdrop.examples.t17682(self__.owner,self__.cursor,self__.hook_draggable,meta17683__$1));
});
ewen.dragdrop.examples.__GT_t17682 = (function __GT_t17682(owner__$1,cursor__$1,hook_draggable__$1,meta17683){return (new ewen.dragdrop.examples.t17682(owner__$1,cursor__$1,hook_draggable__$1,meta17683));
});
}
return (new ewen.dragdrop.examples.t17682(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17704 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17704 = (function (owner,app,meta17705){
this.owner = owner;
this.app = app;
this.meta17705 = meta17705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17704.cljs$lang$type = true;
ewen.dragdrop.examples.t17704.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17704";
ewen.dragdrop.examples.t17704.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17704");
});
ewen.dragdrop.examples.t17704.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17704.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17706){var self__ = this;
var _17706__$1 = this;return self__.meta17705;
});
ewen.dragdrop.examples.t17704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17706,meta17705__$1){var self__ = this;
var _17706__$1 = this;return (new ewen.dragdrop.examples.t17704(self__.owner,self__.app,meta17705__$1));
});
ewen.dragdrop.examples.__GT_t17704 = (function __GT_t17704(owner__$1,app__$1,meta17705){return (new ewen.dragdrop.examples.t17704(owner__$1,app__$1,meta17705));
});
}
return (new ewen.dragdrop.examples.t17704(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t17730 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17730 = (function (owner,cursor,long_press_draggable,meta17731){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta17731 = meta17731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17730.cljs$lang$type = true;
ewen.dragdrop.examples.t17730.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17730";
ewen.dragdrop.examples.t17730.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17730");
});
ewen.dragdrop.examples.t17730.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t17730.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__17733 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__17733,0,null);var y = cljs.core.nth.call(null,vec__17733,1,null);var vec__17734 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__17734,0,null);var h = cljs.core.nth.call(null,vec__17734,1,null);var obj17736 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj17736;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj17738 = {"position":"static","z-index":0};return obj17738;
})():null));return React.DOM.div((function (){var obj17740 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj17740;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t17730.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t17730.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t17730.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t17730.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_17750 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_17751 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_17750);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_17751);
var vec__17741 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__17741,0,null);var up_unlisten = cljs.core.nth.call(null,vec__17741,1,null);var vec__17742 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__17742,0,null);var down_unlisten = cljs.core.nth.call(null,vec__17742,1,null);var vec__17743 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__17743,0,null);var move_unlisten = cljs.core.nth.call(null,vec__17743,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__17744){var map__17745 = p__17744;var map__17745__$1 = ((cljs.core.seq_QMARK_.call(null,map__17745))?cljs.core.apply.call(null,cljs.core.hash_map,map__17745):map__17745);var top = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17707_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__17707_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__17746){var map__17747 = p__17746;var map__17747__$1 = ((cljs.core.seq_QMARK_.call(null,map__17747))?cljs.core.apply.call(null,cljs.core.hash_map,map__17747):map__17747);var top = cljs.core.get.call(null,map__17747__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__17747__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__17748 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__17748,0,null);var init_top = cljs.core.nth.call(null,vec__17748,1,null);var vec__17749 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__17749,0,null);var handle_top = cljs.core.nth.call(null,vec__17749,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17708_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__17708_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__17709_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__17709_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t17730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17732){var self__ = this;
var _17732__$1 = this;return self__.meta17731;
});
ewen.dragdrop.examples.t17730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17732,meta17731__$1){var self__ = this;
var _17732__$1 = this;return (new ewen.dragdrop.examples.t17730(self__.owner,self__.cursor,self__.long_press_draggable,meta17731__$1));
});
ewen.dragdrop.examples.__GT_t17730 = (function __GT_t17730(owner__$1,cursor__$1,long_press_draggable__$1,meta17731){return (new ewen.dragdrop.examples.t17730(owner__$1,cursor__$1,long_press_draggable__$1,meta17731));
});
}
return (new ewen.dragdrop.examples.t17730(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t17752 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t17752 = (function (owner,app,meta17753){
this.owner = owner;
this.app = app;
this.meta17753 = meta17753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t17752.cljs$lang$type = true;
ewen.dragdrop.examples.t17752.cljs$lang$ctorStr = "ewen.dragdrop.examples/t17752";
ewen.dragdrop.examples.t17752.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t17752");
});
ewen.dragdrop.examples.t17752.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t17752.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t17752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17754){var self__ = this;
var _17754__$1 = this;return self__.meta17753;
});
ewen.dragdrop.examples.t17752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17754,meta17753__$1){var self__ = this;
var _17754__$1 = this;return (new ewen.dragdrop.examples.t17752(self__.owner,self__.app,meta17753__$1));
});
ewen.dragdrop.examples.__GT_t17752 = (function __GT_t17752(owner__$1,app__$1,meta17753){return (new ewen.dragdrop.examples.t17752(owner__$1,app__$1,meta17753));
});
}
return (new ewen.dragdrop.examples.t17752(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map