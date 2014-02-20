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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t154702 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154702 = (function (owner,cursor,typical_draggable,meta154703){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta154703 = meta154703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154702.cljs$lang$type = true;
ewen.dragdrop.examples.t154702.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154702";
ewen.dragdrop.examples.t154702.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154702");
});
ewen.dragdrop.examples.t154702.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t154702.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__154705 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__154705,0,null);var y = cljs.core.nth.call(null,vec__154705,1,null);var vec__154706 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__154706,0,null);var h = cljs.core.nth.call(null,vec__154706,1,null);var obj154708 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj154708;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj154710 = {"position":"static","z-index":0};return obj154710;
})():null));return React.DOM.div((function (){var obj154712 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj154712;
})(),"Drag me!");
});
ewen.dragdrop.examples.t154702.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t154702.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t154702.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t154702.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_154722 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_154723 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_154722);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_154723);
var vec__154713 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__154713,0,null);var up_unlisten = cljs.core.nth.call(null,vec__154713,1,null);var vec__154714 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__154714,0,null);var down_unlisten = cljs.core.nth.call(null,vec__154714,1,null);var vec__154715 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__154715,0,null);var move_unlisten = cljs.core.nth.call(null,vec__154715,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__154716){var map__154717 = p__154716;var map__154717__$1 = ((cljs.core.seq_QMARK_.call(null,map__154717))?cljs.core.apply.call(null,cljs.core.hash_map,map__154717):map__154717);var top = cljs.core.get.call(null,map__154717__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154717__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154679_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__154679_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__154718){var map__154719 = p__154718;var map__154719__$1 = ((cljs.core.seq_QMARK_.call(null,map__154719))?cljs.core.apply.call(null,cljs.core.hash_map,map__154719):map__154719);var top = cljs.core.get.call(null,map__154719__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154719__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__154720 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__154720,0,null);var init_top = cljs.core.nth.call(null,vec__154720,1,null);var vec__154721 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__154721,0,null);var handle_top = cljs.core.nth.call(null,vec__154721,1,null);return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154680_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__154680_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154681_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__154681_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t154702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154704){var self__ = this;
var _154704__$1 = this;return self__.meta154703;
});
ewen.dragdrop.examples.t154702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154704,meta154703__$1){var self__ = this;
var _154704__$1 = this;return (new ewen.dragdrop.examples.t154702(self__.owner,self__.cursor,self__.typical_draggable,meta154703__$1));
});
ewen.dragdrop.examples.__GT_t154702 = (function __GT_t154702(owner__$1,cursor__$1,typical_draggable__$1,meta154703){return (new ewen.dragdrop.examples.t154702(owner__$1,cursor__$1,typical_draggable__$1,meta154703));
});
}
return (new ewen.dragdrop.examples.t154702(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t154724 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154724 = (function (owner,app,meta154725){
this.owner = owner;
this.app = app;
this.meta154725 = meta154725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154724.cljs$lang$type = true;
ewen.dragdrop.examples.t154724.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154724";
ewen.dragdrop.examples.t154724.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154724");
});
ewen.dragdrop.examples.t154724.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t154724.prototype.om$core$IRender$render$arity$1 = (function (this__9010__auto__){var self__ = this;
var this__9010__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t154724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154726){var self__ = this;
var _154726__$1 = this;return self__.meta154725;
});
ewen.dragdrop.examples.t154724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154726,meta154725__$1){var self__ = this;
var _154726__$1 = this;return (new ewen.dragdrop.examples.t154724(self__.owner,self__.app,meta154725__$1));
});
ewen.dragdrop.examples.__GT_t154724 = (function __GT_t154724(owner__$1,app__$1,meta154725){return (new ewen.dragdrop.examples.t154724(owner__$1,app__$1,meta154725));
});
}
return (new ewen.dragdrop.examples.t154724(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t154750 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154750 = (function (owner,cursor,delayed_draggable,meta154751){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta154751 = meta154751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154750.cljs$lang$type = true;
ewen.dragdrop.examples.t154750.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154750";
ewen.dragdrop.examples.t154750.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154750");
});
ewen.dragdrop.examples.t154750.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t154750.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__154753 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__154753,0,null);var y = cljs.core.nth.call(null,vec__154753,1,null);var vec__154754 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__154754,0,null);var h = cljs.core.nth.call(null,vec__154754,1,null);var obj154756 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj154756;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj154758 = {"position":"static","z-index":0};return obj154758;
})():null));return React.DOM.div((function (){var obj154760 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj154760;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t154750.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t154750.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t154750.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t154750.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_154770 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_154771 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_154770);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_154771);
var vec__154761 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__154761,0,null);var up_unlisten = cljs.core.nth.call(null,vec__154761,1,null);var vec__154762 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__154762,0,null);var down_unlisten = cljs.core.nth.call(null,vec__154762,1,null);var vec__154763 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__154763,0,null);var move_unlisten = cljs.core.nth.call(null,vec__154763,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__154764){var map__154765 = p__154764;var map__154765__$1 = ((cljs.core.seq_QMARK_.call(null,map__154765))?cljs.core.apply.call(null,cljs.core.hash_map,map__154765):map__154765);var top = cljs.core.get.call(null,map__154765__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154765__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154727_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__154727_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__154766){var map__154767 = p__154766;var map__154767__$1 = ((cljs.core.seq_QMARK_.call(null,map__154767))?cljs.core.apply.call(null,cljs.core.hash_map,map__154767):map__154767);var top = cljs.core.get.call(null,map__154767__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154767__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__154768 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__154768,0,null);var init_top = cljs.core.nth.call(null,vec__154768,1,null);var vec__154769 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__154769,0,null);var handle_top = cljs.core.nth.call(null,vec__154769,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154728_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__154728_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154729_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__154729_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t154750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154752){var self__ = this;
var _154752__$1 = this;return self__.meta154751;
});
ewen.dragdrop.examples.t154750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154752,meta154751__$1){var self__ = this;
var _154752__$1 = this;return (new ewen.dragdrop.examples.t154750(self__.owner,self__.cursor,self__.delayed_draggable,meta154751__$1));
});
ewen.dragdrop.examples.__GT_t154750 = (function __GT_t154750(owner__$1,cursor__$1,delayed_draggable__$1,meta154751){return (new ewen.dragdrop.examples.t154750(owner__$1,cursor__$1,delayed_draggable__$1,meta154751));
});
}
return (new ewen.dragdrop.examples.t154750(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t154772 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154772 = (function (owner,app,meta154773){
this.owner = owner;
this.app = app;
this.meta154773 = meta154773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154772.cljs$lang$type = true;
ewen.dragdrop.examples.t154772.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154772";
ewen.dragdrop.examples.t154772.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154772");
});
ewen.dragdrop.examples.t154772.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t154772.prototype.om$core$IRender$render$arity$1 = (function (this__9010__auto__){var self__ = this;
var this__9010__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t154772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154774){var self__ = this;
var _154774__$1 = this;return self__.meta154773;
});
ewen.dragdrop.examples.t154772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154774,meta154773__$1){var self__ = this;
var _154774__$1 = this;return (new ewen.dragdrop.examples.t154772(self__.owner,self__.app,meta154773__$1));
});
ewen.dragdrop.examples.__GT_t154772 = (function __GT_t154772(owner__$1,app__$1,meta154773){return (new ewen.dragdrop.examples.t154772(owner__$1,app__$1,meta154773));
});
}
return (new ewen.dragdrop.examples.t154772(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t154798 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154798 = (function (owner,cursor,hook_draggable,meta154799){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta154799 = meta154799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154798.cljs$lang$type = true;
ewen.dragdrop.examples.t154798.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154798";
ewen.dragdrop.examples.t154798.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154798");
});
ewen.dragdrop.examples.t154798.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t154798.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__154801 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__154801,0,null);var y = cljs.core.nth.call(null,vec__154801,1,null);var vec__154802 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__154802,0,null);var h = cljs.core.nth.call(null,vec__154802,1,null);var obj154804 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj154804;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj154806 = {"position":"static","z-index":0};return obj154806;
})():null));return React.DOM.div((function (){var obj154808 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj154808;
})(),"Drag me!");
});
ewen.dragdrop.examples.t154798.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t154798.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t154798.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t154798.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_154818 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_154819 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_154818);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_154819);
var vec__154809 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__154809,0,null);var up_unlisten = cljs.core.nth.call(null,vec__154809,1,null);var vec__154810 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__154810,0,null);var down_unlisten = cljs.core.nth.call(null,vec__154810,1,null);var vec__154811 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__154811,0,null);var move_unlisten = cljs.core.nth.call(null,vec__154811,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__154812){var map__154813 = p__154812;var map__154813__$1 = ((cljs.core.seq_QMARK_.call(null,map__154813))?cljs.core.apply.call(null,cljs.core.hash_map,map__154813):map__154813);var top = cljs.core.get.call(null,map__154813__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154813__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154775_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__154775_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__154814){var map__154815 = p__154814;var map__154815__$1 = ((cljs.core.seq_QMARK_.call(null,map__154815))?cljs.core.apply.call(null,cljs.core.hash_map,map__154815):map__154815);var top = cljs.core.get.call(null,map__154815__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154815__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__154816 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__154816,0,null);var init_top = cljs.core.nth.call(null,vec__154816,1,null);var vec__154817 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__154817,0,null);var handle_top = cljs.core.nth.call(null,vec__154817,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154776_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__154776_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154777_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__154777_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t154798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154800){var self__ = this;
var _154800__$1 = this;return self__.meta154799;
});
ewen.dragdrop.examples.t154798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154800,meta154799__$1){var self__ = this;
var _154800__$1 = this;return (new ewen.dragdrop.examples.t154798(self__.owner,self__.cursor,self__.hook_draggable,meta154799__$1));
});
ewen.dragdrop.examples.__GT_t154798 = (function __GT_t154798(owner__$1,cursor__$1,hook_draggable__$1,meta154799){return (new ewen.dragdrop.examples.t154798(owner__$1,cursor__$1,hook_draggable__$1,meta154799));
});
}
return (new ewen.dragdrop.examples.t154798(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t154820 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154820 = (function (owner,app,meta154821){
this.owner = owner;
this.app = app;
this.meta154821 = meta154821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154820.cljs$lang$type = true;
ewen.dragdrop.examples.t154820.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154820";
ewen.dragdrop.examples.t154820.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154820");
});
ewen.dragdrop.examples.t154820.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t154820.prototype.om$core$IRender$render$arity$1 = (function (this__9010__auto__){var self__ = this;
var this__9010__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t154820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154822){var self__ = this;
var _154822__$1 = this;return self__.meta154821;
});
ewen.dragdrop.examples.t154820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154822,meta154821__$1){var self__ = this;
var _154822__$1 = this;return (new ewen.dragdrop.examples.t154820(self__.owner,self__.app,meta154821__$1));
});
ewen.dragdrop.examples.__GT_t154820 = (function __GT_t154820(owner__$1,app__$1,meta154821){return (new ewen.dragdrop.examples.t154820(owner__$1,app__$1,meta154821));
});
}
return (new ewen.dragdrop.examples.t154820(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t154846 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154846 = (function (owner,cursor,long_press_draggable,meta154847){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta154847 = meta154847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154846.cljs$lang$type = true;
ewen.dragdrop.examples.t154846.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154846";
ewen.dragdrop.examples.t154846.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154846");
});
ewen.dragdrop.examples.t154846.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t154846.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__154849 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__154849,0,null);var y = cljs.core.nth.call(null,vec__154849,1,null);var vec__154850 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__154850,0,null);var h = cljs.core.nth.call(null,vec__154850,1,null);var obj154852 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj154852;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj154854 = {"position":"static","z-index":0};return obj154854;
})():null));return React.DOM.div((function (){var obj154856 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj154856;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t154846.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t154846.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t154846.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t154846.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_154866 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_154867 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_154866);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_154867);
var vec__154857 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__154857,0,null);var up_unlisten = cljs.core.nth.call(null,vec__154857,1,null);var vec__154858 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__154858,0,null);var down_unlisten = cljs.core.nth.call(null,vec__154858,1,null);var vec__154859 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__154859,0,null);var move_unlisten = cljs.core.nth.call(null,vec__154859,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__154860){var map__154861 = p__154860;var map__154861__$1 = ((cljs.core.seq_QMARK_.call(null,map__154861))?cljs.core.apply.call(null,cljs.core.hash_map,map__154861):map__154861);var top = cljs.core.get.call(null,map__154861__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154861__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154823_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__154823_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__154862){var map__154863 = p__154862;var map__154863__$1 = ((cljs.core.seq_QMARK_.call(null,map__154863))?cljs.core.apply.call(null,cljs.core.hash_map,map__154863):map__154863);var top = cljs.core.get.call(null,map__154863__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__154863__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__154864 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__154864,0,null);var init_top = cljs.core.nth.call(null,vec__154864,1,null);var vec__154865 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__154865,0,null);var handle_top = cljs.core.nth.call(null,vec__154865,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154824_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__154824_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__154825_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__154825_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t154846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154848){var self__ = this;
var _154848__$1 = this;return self__.meta154847;
});
ewen.dragdrop.examples.t154846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154848,meta154847__$1){var self__ = this;
var _154848__$1 = this;return (new ewen.dragdrop.examples.t154846(self__.owner,self__.cursor,self__.long_press_draggable,meta154847__$1));
});
ewen.dragdrop.examples.__GT_t154846 = (function __GT_t154846(owner__$1,cursor__$1,long_press_draggable__$1,meta154847){return (new ewen.dragdrop.examples.t154846(owner__$1,cursor__$1,long_press_draggable__$1,meta154847));
});
}
return (new ewen.dragdrop.examples.t154846(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t154868 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t154868 = (function (owner,app,meta154869){
this.owner = owner;
this.app = app;
this.meta154869 = meta154869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t154868.cljs$lang$type = true;
ewen.dragdrop.examples.t154868.cljs$lang$ctorStr = "ewen.dragdrop.examples/t154868";
ewen.dragdrop.examples.t154868.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t154868");
});
ewen.dragdrop.examples.t154868.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t154868.prototype.om$core$IRender$render$arity$1 = (function (this__9010__auto__){var self__ = this;
var this__9010__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t154868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154870){var self__ = this;
var _154870__$1 = this;return self__.meta154869;
});
ewen.dragdrop.examples.t154868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154870,meta154869__$1){var self__ = this;
var _154870__$1 = this;return (new ewen.dragdrop.examples.t154868(self__.owner,self__.app,meta154869__$1));
});
ewen.dragdrop.examples.__GT_t154868 = (function __GT_t154868(owner__$1,app__$1,meta154869){return (new ewen.dragdrop.examples.t154868(owner__$1,app__$1,meta154869));
});
}
return (new ewen.dragdrop.examples.t154868(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map