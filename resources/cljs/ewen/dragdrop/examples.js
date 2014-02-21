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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25789 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25789 = (function (owner,cursor,typical_draggable,meta25790){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta25790 = meta25790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25789.cljs$lang$type = true;
ewen.dragdrop.examples.t25789.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25789";
ewen.dragdrop.examples.t25789.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25789");
});
ewen.dragdrop.examples.t25789.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25789.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25792 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25792,0,null);var y = cljs.core.nth.call(null,vec__25792,1,null);var vec__25793 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25793,0,null);var h = cljs.core.nth.call(null,vec__25793,1,null);var obj25795 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25795;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25797 = {"position":"static","z-index":0};return obj25797;
})():null));return React.DOM.div((function (){var obj25799 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj25799;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25789.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25789.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25789.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25789.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25809 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_25810 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25809);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25810);
var vec__25800 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25800,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25800,1,null);var vec__25801 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25801,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25801,1,null);var vec__25802 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25802,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25802,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25803){var map__25804 = p__25803;var map__25804__$1 = ((cljs.core.seq_QMARK_.call(null,map__25804))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);var top = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25766_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25766_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25805){var map__25806 = p__25805;var map__25806__$1 = ((cljs.core.seq_QMARK_.call(null,map__25806))?cljs.core.apply.call(null,cljs.core.hash_map,map__25806):map__25806);var top = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25807 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25807,0,null);var init_top = cljs.core.nth.call(null,vec__25807,1,null);var vec__25808 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25808,0,null);var handle_top = cljs.core.nth.call(null,vec__25808,1,null);return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25767_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25767_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25768_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25768_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25791){var self__ = this;
var _25791__$1 = this;return self__.meta25790;
});
ewen.dragdrop.examples.t25789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25791,meta25790__$1){var self__ = this;
var _25791__$1 = this;return (new ewen.dragdrop.examples.t25789(self__.owner,self__.cursor,self__.typical_draggable,meta25790__$1));
});
ewen.dragdrop.examples.__GT_t25789 = (function __GT_t25789(owner__$1,cursor__$1,typical_draggable__$1,meta25790){return (new ewen.dragdrop.examples.t25789(owner__$1,cursor__$1,typical_draggable__$1,meta25790));
});
}
return (new ewen.dragdrop.examples.t25789(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25811 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25811 = (function (owner,app,meta25812){
this.owner = owner;
this.app = app;
this.meta25812 = meta25812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25811.cljs$lang$type = true;
ewen.dragdrop.examples.t25811.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25811";
ewen.dragdrop.examples.t25811.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25811");
});
ewen.dragdrop.examples.t25811.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25811.prototype.om$core$IRender$render$arity$1 = (function (this__9064__auto__){var self__ = this;
var this__9064__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25813){var self__ = this;
var _25813__$1 = this;return self__.meta25812;
});
ewen.dragdrop.examples.t25811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25813,meta25812__$1){var self__ = this;
var _25813__$1 = this;return (new ewen.dragdrop.examples.t25811(self__.owner,self__.app,meta25812__$1));
});
ewen.dragdrop.examples.__GT_t25811 = (function __GT_t25811(owner__$1,app__$1,meta25812){return (new ewen.dragdrop.examples.t25811(owner__$1,app__$1,meta25812));
});
}
return (new ewen.dragdrop.examples.t25811(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25837 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25837 = (function (owner,cursor,delayed_draggable,meta25838){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta25838 = meta25838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25837.cljs$lang$type = true;
ewen.dragdrop.examples.t25837.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25837";
ewen.dragdrop.examples.t25837.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25837");
});
ewen.dragdrop.examples.t25837.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25837.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25840 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25840,0,null);var y = cljs.core.nth.call(null,vec__25840,1,null);var vec__25841 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25841,0,null);var h = cljs.core.nth.call(null,vec__25841,1,null);var obj25843 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25843;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25845 = {"position":"static","z-index":0};return obj25845;
})():null));return React.DOM.div((function (){var obj25847 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj25847;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t25837.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25837.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25837.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25837.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25857 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_25858 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25857);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25858);
var vec__25848 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25848,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25848,1,null);var vec__25849 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25849,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25849,1,null);var vec__25850 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25850,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25850,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25851){var map__25852 = p__25851;var map__25852__$1 = ((cljs.core.seq_QMARK_.call(null,map__25852))?cljs.core.apply.call(null,cljs.core.hash_map,map__25852):map__25852);var top = cljs.core.get.call(null,map__25852__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25852__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25814_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25814_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25853){var map__25854 = p__25853;var map__25854__$1 = ((cljs.core.seq_QMARK_.call(null,map__25854))?cljs.core.apply.call(null,cljs.core.hash_map,map__25854):map__25854);var top = cljs.core.get.call(null,map__25854__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25854__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25855 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25855,0,null);var init_top = cljs.core.nth.call(null,vec__25855,1,null);var vec__25856 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25856,0,null);var handle_top = cljs.core.nth.call(null,vec__25856,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25815_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25815_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25816_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25816_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25839){var self__ = this;
var _25839__$1 = this;return self__.meta25838;
});
ewen.dragdrop.examples.t25837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25839,meta25838__$1){var self__ = this;
var _25839__$1 = this;return (new ewen.dragdrop.examples.t25837(self__.owner,self__.cursor,self__.delayed_draggable,meta25838__$1));
});
ewen.dragdrop.examples.__GT_t25837 = (function __GT_t25837(owner__$1,cursor__$1,delayed_draggable__$1,meta25838){return (new ewen.dragdrop.examples.t25837(owner__$1,cursor__$1,delayed_draggable__$1,meta25838));
});
}
return (new ewen.dragdrop.examples.t25837(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25859 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25859 = (function (owner,app,meta25860){
this.owner = owner;
this.app = app;
this.meta25860 = meta25860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25859.cljs$lang$type = true;
ewen.dragdrop.examples.t25859.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25859";
ewen.dragdrop.examples.t25859.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25859");
});
ewen.dragdrop.examples.t25859.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25859.prototype.om$core$IRender$render$arity$1 = (function (this__9064__auto__){var self__ = this;
var this__9064__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25861){var self__ = this;
var _25861__$1 = this;return self__.meta25860;
});
ewen.dragdrop.examples.t25859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25861,meta25860__$1){var self__ = this;
var _25861__$1 = this;return (new ewen.dragdrop.examples.t25859(self__.owner,self__.app,meta25860__$1));
});
ewen.dragdrop.examples.__GT_t25859 = (function __GT_t25859(owner__$1,app__$1,meta25860){return (new ewen.dragdrop.examples.t25859(owner__$1,app__$1,meta25860));
});
}
return (new ewen.dragdrop.examples.t25859(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25885 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25885 = (function (owner,cursor,hook_draggable,meta25886){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta25886 = meta25886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25885.cljs$lang$type = true;
ewen.dragdrop.examples.t25885.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25885";
ewen.dragdrop.examples.t25885.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25885");
});
ewen.dragdrop.examples.t25885.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25885.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25888 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25888,0,null);var y = cljs.core.nth.call(null,vec__25888,1,null);var vec__25889 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25889,0,null);var h = cljs.core.nth.call(null,vec__25889,1,null);var obj25891 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25891;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25893 = {"position":"static","z-index":0};return obj25893;
})():null));return React.DOM.div((function (){var obj25895 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj25895;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25885.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25885.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25885.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25885.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25905 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_25906 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25905);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25906);
var vec__25896 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25896,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25896,1,null);var vec__25897 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25897,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25897,1,null);var vec__25898 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25898,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25898,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25899){var map__25900 = p__25899;var map__25900__$1 = ((cljs.core.seq_QMARK_.call(null,map__25900))?cljs.core.apply.call(null,cljs.core.hash_map,map__25900):map__25900);var top = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25862_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25862_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25901){var map__25902 = p__25901;var map__25902__$1 = ((cljs.core.seq_QMARK_.call(null,map__25902))?cljs.core.apply.call(null,cljs.core.hash_map,map__25902):map__25902);var top = cljs.core.get.call(null,map__25902__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25902__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25903 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25903,0,null);var init_top = cljs.core.nth.call(null,vec__25903,1,null);var vec__25904 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25904,0,null);var handle_top = cljs.core.nth.call(null,vec__25904,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25863_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25863_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25864_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25864_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25887){var self__ = this;
var _25887__$1 = this;return self__.meta25886;
});
ewen.dragdrop.examples.t25885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25887,meta25886__$1){var self__ = this;
var _25887__$1 = this;return (new ewen.dragdrop.examples.t25885(self__.owner,self__.cursor,self__.hook_draggable,meta25886__$1));
});
ewen.dragdrop.examples.__GT_t25885 = (function __GT_t25885(owner__$1,cursor__$1,hook_draggable__$1,meta25886){return (new ewen.dragdrop.examples.t25885(owner__$1,cursor__$1,hook_draggable__$1,meta25886));
});
}
return (new ewen.dragdrop.examples.t25885(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25907 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25907 = (function (owner,app,meta25908){
this.owner = owner;
this.app = app;
this.meta25908 = meta25908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25907.cljs$lang$type = true;
ewen.dragdrop.examples.t25907.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25907";
ewen.dragdrop.examples.t25907.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25907");
});
ewen.dragdrop.examples.t25907.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25907.prototype.om$core$IRender$render$arity$1 = (function (this__9064__auto__){var self__ = this;
var this__9064__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25909){var self__ = this;
var _25909__$1 = this;return self__.meta25908;
});
ewen.dragdrop.examples.t25907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25909,meta25908__$1){var self__ = this;
var _25909__$1 = this;return (new ewen.dragdrop.examples.t25907(self__.owner,self__.app,meta25908__$1));
});
ewen.dragdrop.examples.__GT_t25907 = (function __GT_t25907(owner__$1,app__$1,meta25908){return (new ewen.dragdrop.examples.t25907(owner__$1,app__$1,meta25908));
});
}
return (new ewen.dragdrop.examples.t25907(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25933 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25933 = (function (owner,cursor,long_press_draggable,meta25934){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta25934 = meta25934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25933.cljs$lang$type = true;
ewen.dragdrop.examples.t25933.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25933";
ewen.dragdrop.examples.t25933.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25933");
});
ewen.dragdrop.examples.t25933.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25933.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25936 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25936,0,null);var y = cljs.core.nth.call(null,vec__25936,1,null);var vec__25937 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25937,0,null);var h = cljs.core.nth.call(null,vec__25937,1,null);var obj25939 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25939;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25941 = {"position":"static","z-index":0};return obj25941;
})():null));return React.DOM.div((function (){var obj25943 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj25943;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t25933.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25933.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25933.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25933.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25953 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_25954 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25953);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25954);
var vec__25944 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25944,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25944,1,null);var vec__25945 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25945,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25945,1,null);var vec__25946 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25946,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25946,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25947){var map__25948 = p__25947;var map__25948__$1 = ((cljs.core.seq_QMARK_.call(null,map__25948))?cljs.core.apply.call(null,cljs.core.hash_map,map__25948):map__25948);var top = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25910_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25910_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25949){var map__25950 = p__25949;var map__25950__$1 = ((cljs.core.seq_QMARK_.call(null,map__25950))?cljs.core.apply.call(null,cljs.core.hash_map,map__25950):map__25950);var top = cljs.core.get.call(null,map__25950__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25950__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25951 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25951,0,null);var init_top = cljs.core.nth.call(null,vec__25951,1,null);var vec__25952 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25952,0,null);var handle_top = cljs.core.nth.call(null,vec__25952,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25911_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25911_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25912_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25912_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25935){var self__ = this;
var _25935__$1 = this;return self__.meta25934;
});
ewen.dragdrop.examples.t25933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25935,meta25934__$1){var self__ = this;
var _25935__$1 = this;return (new ewen.dragdrop.examples.t25933(self__.owner,self__.cursor,self__.long_press_draggable,meta25934__$1));
});
ewen.dragdrop.examples.__GT_t25933 = (function __GT_t25933(owner__$1,cursor__$1,long_press_draggable__$1,meta25934){return (new ewen.dragdrop.examples.t25933(owner__$1,cursor__$1,long_press_draggable__$1,meta25934));
});
}
return (new ewen.dragdrop.examples.t25933(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25955 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25955 = (function (owner,app,meta25956){
this.owner = owner;
this.app = app;
this.meta25956 = meta25956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25955.cljs$lang$type = true;
ewen.dragdrop.examples.t25955.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25955";
ewen.dragdrop.examples.t25955.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"ewen.dragdrop.examples/t25955");
});
ewen.dragdrop.examples.t25955.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25955.prototype.om$core$IRender$render$arity$1 = (function (this__9064__auto__){var self__ = this;
var this__9064__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25957){var self__ = this;
var _25957__$1 = this;return self__.meta25956;
});
ewen.dragdrop.examples.t25955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25957,meta25956__$1){var self__ = this;
var _25957__$1 = this;return (new ewen.dragdrop.examples.t25955(self__.owner,self__.app,meta25956__$1));
});
ewen.dragdrop.examples.__GT_t25955 = (function __GT_t25955(owner__$1,app__$1,meta25956){return (new ewen.dragdrop.examples.t25955(owner__$1,app__$1,meta25956));
});
}
return (new ewen.dragdrop.examples.t25955(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map