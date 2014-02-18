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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22667 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22667 = (function (owner,cursor,typical_draggable,meta22668){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta22668 = meta22668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22667.cljs$lang$type = true;
ewen.dragdrop.examples.t22667.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22667";
ewen.dragdrop.examples.t22667.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22667");
});
ewen.dragdrop.examples.t22667.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22667.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22670 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22670,0,null);var y = cljs.core.nth.call(null,vec__22670,1,null);var vec__22671 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22671,0,null);var h = cljs.core.nth.call(null,vec__22671,1,null);var obj22673 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22673;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22675 = {"position":"static","z-index":0};return obj22675;
})():null));return React.DOM.div((function (){var obj22677 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj22677;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22667.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22667.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22667.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22667.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22687 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_22688 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22687);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22688);
var vec__22678 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22678,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22678,1,null);var vec__22679 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22679,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22679,1,null);var vec__22680 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22680,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22680,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__22643_SHARP_){return cljs.core.prn.call(null,domina.events.raw_event.call(null,p1__22643_SHARP_).pageX);
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22681){var map__22682 = p__22681;var map__22682__$1 = ((cljs.core.seq_QMARK_.call(null,map__22682))?cljs.core.apply.call(null,cljs.core.hash_map,map__22682):map__22682);var top = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22644_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22644_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22683){var map__22684 = p__22683;var map__22684__$1 = ((cljs.core.seq_QMARK_.call(null,map__22684))?cljs.core.apply.call(null,cljs.core.hash_map,map__22684):map__22684);var top = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22685 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22685,0,null);var init_top = cljs.core.nth.call(null,vec__22685,1,null);var vec__22686 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22686,0,null);var handle_top = cljs.core.nth.call(null,vec__22686,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22645_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22645_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22646_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22646_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22669){var self__ = this;
var _22669__$1 = this;return self__.meta22668;
});
ewen.dragdrop.examples.t22667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22669,meta22668__$1){var self__ = this;
var _22669__$1 = this;return (new ewen.dragdrop.examples.t22667(self__.owner,self__.cursor,self__.typical_draggable,meta22668__$1));
});
ewen.dragdrop.examples.__GT_t22667 = (function __GT_t22667(owner__$1,cursor__$1,typical_draggable__$1,meta22668){return (new ewen.dragdrop.examples.t22667(owner__$1,cursor__$1,typical_draggable__$1,meta22668));
});
}
return (new ewen.dragdrop.examples.t22667(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22689 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22689 = (function (owner,app,meta22690){
this.owner = owner;
this.app = app;
this.meta22690 = meta22690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22689.cljs$lang$type = true;
ewen.dragdrop.examples.t22689.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22689";
ewen.dragdrop.examples.t22689.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22689");
});
ewen.dragdrop.examples.t22689.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22689.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22691){var self__ = this;
var _22691__$1 = this;return self__.meta22690;
});
ewen.dragdrop.examples.t22689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22691,meta22690__$1){var self__ = this;
var _22691__$1 = this;return (new ewen.dragdrop.examples.t22689(self__.owner,self__.app,meta22690__$1));
});
ewen.dragdrop.examples.__GT_t22689 = (function __GT_t22689(owner__$1,app__$1,meta22690){return (new ewen.dragdrop.examples.t22689(owner__$1,app__$1,meta22690));
});
}
return (new ewen.dragdrop.examples.t22689(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22715 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22715 = (function (owner,cursor,delayed_draggable,meta22716){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta22716 = meta22716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22715.cljs$lang$type = true;
ewen.dragdrop.examples.t22715.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22715";
ewen.dragdrop.examples.t22715.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22715");
});
ewen.dragdrop.examples.t22715.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22715.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22718 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22718,0,null);var y = cljs.core.nth.call(null,vec__22718,1,null);var vec__22719 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22719,0,null);var h = cljs.core.nth.call(null,vec__22719,1,null);var obj22721 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22721;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22723 = {"position":"static","z-index":0};return obj22723;
})():null));return React.DOM.div((function (){var obj22725 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj22725;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t22715.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22715.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22715.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22715.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22735 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_22736 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22735);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22736);
var vec__22726 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22726,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22726,1,null);var vec__22727 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22727,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22727,1,null);var vec__22728 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22728,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22728,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22729){var map__22730 = p__22729;var map__22730__$1 = ((cljs.core.seq_QMARK_.call(null,map__22730))?cljs.core.apply.call(null,cljs.core.hash_map,map__22730):map__22730);var top = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22692_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22692_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22731){var map__22732 = p__22731;var map__22732__$1 = ((cljs.core.seq_QMARK_.call(null,map__22732))?cljs.core.apply.call(null,cljs.core.hash_map,map__22732):map__22732);var top = cljs.core.get.call(null,map__22732__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22732__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22733 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22733,0,null);var init_top = cljs.core.nth.call(null,vec__22733,1,null);var vec__22734 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22734,0,null);var handle_top = cljs.core.nth.call(null,vec__22734,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22693_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22693_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22694_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22694_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22717){var self__ = this;
var _22717__$1 = this;return self__.meta22716;
});
ewen.dragdrop.examples.t22715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22717,meta22716__$1){var self__ = this;
var _22717__$1 = this;return (new ewen.dragdrop.examples.t22715(self__.owner,self__.cursor,self__.delayed_draggable,meta22716__$1));
});
ewen.dragdrop.examples.__GT_t22715 = (function __GT_t22715(owner__$1,cursor__$1,delayed_draggable__$1,meta22716){return (new ewen.dragdrop.examples.t22715(owner__$1,cursor__$1,delayed_draggable__$1,meta22716));
});
}
return (new ewen.dragdrop.examples.t22715(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22737 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22737 = (function (owner,app,meta22738){
this.owner = owner;
this.app = app;
this.meta22738 = meta22738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22737.cljs$lang$type = true;
ewen.dragdrop.examples.t22737.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22737";
ewen.dragdrop.examples.t22737.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22737");
});
ewen.dragdrop.examples.t22737.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22737.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22739){var self__ = this;
var _22739__$1 = this;return self__.meta22738;
});
ewen.dragdrop.examples.t22737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22739,meta22738__$1){var self__ = this;
var _22739__$1 = this;return (new ewen.dragdrop.examples.t22737(self__.owner,self__.app,meta22738__$1));
});
ewen.dragdrop.examples.__GT_t22737 = (function __GT_t22737(owner__$1,app__$1,meta22738){return (new ewen.dragdrop.examples.t22737(owner__$1,app__$1,meta22738));
});
}
return (new ewen.dragdrop.examples.t22737(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22763 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22763 = (function (owner,cursor,hook_draggable,meta22764){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta22764 = meta22764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22763.cljs$lang$type = true;
ewen.dragdrop.examples.t22763.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22763";
ewen.dragdrop.examples.t22763.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22763");
});
ewen.dragdrop.examples.t22763.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22763.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22766 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22766,0,null);var y = cljs.core.nth.call(null,vec__22766,1,null);var vec__22767 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22767,0,null);var h = cljs.core.nth.call(null,vec__22767,1,null);var obj22769 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22769;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22771 = {"position":"static","z-index":0};return obj22771;
})():null));return React.DOM.div((function (){var obj22773 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj22773;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22763.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22763.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22763.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22763.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22783 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_22784 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22783);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22784);
var vec__22774 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22774,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22774,1,null);var vec__22775 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22775,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22775,1,null);var vec__22776 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22776,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22776,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22777){var map__22778 = p__22777;var map__22778__$1 = ((cljs.core.seq_QMARK_.call(null,map__22778))?cljs.core.apply.call(null,cljs.core.hash_map,map__22778):map__22778);var top = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22740_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22740_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22779){var map__22780 = p__22779;var map__22780__$1 = ((cljs.core.seq_QMARK_.call(null,map__22780))?cljs.core.apply.call(null,cljs.core.hash_map,map__22780):map__22780);var top = cljs.core.get.call(null,map__22780__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22780__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22781 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22781,0,null);var init_top = cljs.core.nth.call(null,vec__22781,1,null);var vec__22782 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22782,0,null);var handle_top = cljs.core.nth.call(null,vec__22782,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22741_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22741_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22742_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22742_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22765){var self__ = this;
var _22765__$1 = this;return self__.meta22764;
});
ewen.dragdrop.examples.t22763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22765,meta22764__$1){var self__ = this;
var _22765__$1 = this;return (new ewen.dragdrop.examples.t22763(self__.owner,self__.cursor,self__.hook_draggable,meta22764__$1));
});
ewen.dragdrop.examples.__GT_t22763 = (function __GT_t22763(owner__$1,cursor__$1,hook_draggable__$1,meta22764){return (new ewen.dragdrop.examples.t22763(owner__$1,cursor__$1,hook_draggable__$1,meta22764));
});
}
return (new ewen.dragdrop.examples.t22763(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22785 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22785 = (function (owner,app,meta22786){
this.owner = owner;
this.app = app;
this.meta22786 = meta22786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22785.cljs$lang$type = true;
ewen.dragdrop.examples.t22785.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22785";
ewen.dragdrop.examples.t22785.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22785");
});
ewen.dragdrop.examples.t22785.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22785.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22787){var self__ = this;
var _22787__$1 = this;return self__.meta22786;
});
ewen.dragdrop.examples.t22785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22787,meta22786__$1){var self__ = this;
var _22787__$1 = this;return (new ewen.dragdrop.examples.t22785(self__.owner,self__.app,meta22786__$1));
});
ewen.dragdrop.examples.__GT_t22785 = (function __GT_t22785(owner__$1,app__$1,meta22786){return (new ewen.dragdrop.examples.t22785(owner__$1,app__$1,meta22786));
});
}
return (new ewen.dragdrop.examples.t22785(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22811 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22811 = (function (owner,cursor,long_press_draggable,meta22812){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta22812 = meta22812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22811.cljs$lang$type = true;
ewen.dragdrop.examples.t22811.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22811";
ewen.dragdrop.examples.t22811.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22811");
});
ewen.dragdrop.examples.t22811.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22811.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22814 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22814,0,null);var y = cljs.core.nth.call(null,vec__22814,1,null);var vec__22815 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22815,0,null);var h = cljs.core.nth.call(null,vec__22815,1,null);var obj22817 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22817;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22819 = {"position":"static","z-index":0};return obj22819;
})():null));return React.DOM.div((function (){var obj22821 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj22821;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t22811.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22811.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22811.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22811.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22831 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_22832 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22831);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22832);
var vec__22822 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22822,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22822,1,null);var vec__22823 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22823,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22823,1,null);var vec__22824 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22824,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22824,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22825){var map__22826 = p__22825;var map__22826__$1 = ((cljs.core.seq_QMARK_.call(null,map__22826))?cljs.core.apply.call(null,cljs.core.hash_map,map__22826):map__22826);var top = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22788_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22788_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22827){var map__22828 = p__22827;var map__22828__$1 = ((cljs.core.seq_QMARK_.call(null,map__22828))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);var top = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22829 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22829,0,null);var init_top = cljs.core.nth.call(null,vec__22829,1,null);var vec__22830 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22830,0,null);var handle_top = cljs.core.nth.call(null,vec__22830,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22789_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22789_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22790_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22790_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22813){var self__ = this;
var _22813__$1 = this;return self__.meta22812;
});
ewen.dragdrop.examples.t22811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22813,meta22812__$1){var self__ = this;
var _22813__$1 = this;return (new ewen.dragdrop.examples.t22811(self__.owner,self__.cursor,self__.long_press_draggable,meta22812__$1));
});
ewen.dragdrop.examples.__GT_t22811 = (function __GT_t22811(owner__$1,cursor__$1,long_press_draggable__$1,meta22812){return (new ewen.dragdrop.examples.t22811(owner__$1,cursor__$1,long_press_draggable__$1,meta22812));
});
}
return (new ewen.dragdrop.examples.t22811(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22833 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22833 = (function (owner,app,meta22834){
this.owner = owner;
this.app = app;
this.meta22834 = meta22834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22833.cljs$lang$type = true;
ewen.dragdrop.examples.t22833.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22833";
ewen.dragdrop.examples.t22833.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22833");
});
ewen.dragdrop.examples.t22833.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22833.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22835){var self__ = this;
var _22835__$1 = this;return self__.meta22834;
});
ewen.dragdrop.examples.t22833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22835,meta22834__$1){var self__ = this;
var _22835__$1 = this;return (new ewen.dragdrop.examples.t22833(self__.owner,self__.app,meta22834__$1));
});
ewen.dragdrop.examples.__GT_t22833 = (function __GT_t22833(owner__$1,app__$1,meta22834){return (new ewen.dragdrop.examples.t22833(owner__$1,app__$1,meta22834));
});
}
return (new ewen.dragdrop.examples.t22833(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map