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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20895 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20895 = (function (owner,cursor,typical_draggable,meta20896){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta20896 = meta20896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20895.cljs$lang$type = true;
ewen.dragdrop.examples.t20895.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20895";
ewen.dragdrop.examples.t20895.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20895");
});
ewen.dragdrop.examples.t20895.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20895.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20898 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20898,0,null);var y = cljs.core.nth.call(null,vec__20898,1,null);var vec__20899 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20899,0,null);var h = cljs.core.nth.call(null,vec__20899,1,null);var obj20901 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20901;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20903 = {"position":"static","z-index":0};return obj20903;
})():null));return React.DOM.div((function (){var obj20905 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj20905;
})(),"Drag me!");
});
ewen.dragdrop.examples.t20895.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20895.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20895.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20895.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20915 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_20916 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20915);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20916);
var vec__20906 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__20906,0,null);var up_unlisten = cljs.core.nth.call(null,vec__20906,1,null);var vec__20907 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__20907,0,null);var down_unlisten = cljs.core.nth.call(null,vec__20907,1,null);var vec__20908 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__20908,0,null);var move_unlisten = cljs.core.nth.call(null,vec__20908,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__20909){var map__20910 = p__20909;var map__20910__$1 = ((cljs.core.seq_QMARK_.call(null,map__20910))?cljs.core.apply.call(null,cljs.core.hash_map,map__20910):map__20910);var top = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20872_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20872_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__20911){var map__20912 = p__20911;var map__20912__$1 = ((cljs.core.seq_QMARK_.call(null,map__20912))?cljs.core.apply.call(null,cljs.core.hash_map,map__20912):map__20912);var top = cljs.core.get.call(null,map__20912__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20912__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__20913 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__20913,0,null);var init_top = cljs.core.nth.call(null,vec__20913,1,null);var vec__20914 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__20914,0,null);var handle_top = cljs.core.nth.call(null,vec__20914,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20873_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20873_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20874_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20874_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20897){var self__ = this;
var _20897__$1 = this;return self__.meta20896;
});
ewen.dragdrop.examples.t20895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20897,meta20896__$1){var self__ = this;
var _20897__$1 = this;return (new ewen.dragdrop.examples.t20895(self__.owner,self__.cursor,self__.typical_draggable,meta20896__$1));
});
ewen.dragdrop.examples.__GT_t20895 = (function __GT_t20895(owner__$1,cursor__$1,typical_draggable__$1,meta20896){return (new ewen.dragdrop.examples.t20895(owner__$1,cursor__$1,typical_draggable__$1,meta20896));
});
}
return (new ewen.dragdrop.examples.t20895(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20917 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20917 = (function (owner,app,meta20918){
this.owner = owner;
this.app = app;
this.meta20918 = meta20918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20917.cljs$lang$type = true;
ewen.dragdrop.examples.t20917.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20917";
ewen.dragdrop.examples.t20917.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20917");
});
ewen.dragdrop.examples.t20917.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20917.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20919){var self__ = this;
var _20919__$1 = this;return self__.meta20918;
});
ewen.dragdrop.examples.t20917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20919,meta20918__$1){var self__ = this;
var _20919__$1 = this;return (new ewen.dragdrop.examples.t20917(self__.owner,self__.app,meta20918__$1));
});
ewen.dragdrop.examples.__GT_t20917 = (function __GT_t20917(owner__$1,app__$1,meta20918){return (new ewen.dragdrop.examples.t20917(owner__$1,app__$1,meta20918));
});
}
return (new ewen.dragdrop.examples.t20917(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20943 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20943 = (function (owner,cursor,delayed_draggable,meta20944){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta20944 = meta20944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20943.cljs$lang$type = true;
ewen.dragdrop.examples.t20943.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20943";
ewen.dragdrop.examples.t20943.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20943");
});
ewen.dragdrop.examples.t20943.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20943.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20946 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20946,0,null);var y = cljs.core.nth.call(null,vec__20946,1,null);var vec__20947 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20947,0,null);var h = cljs.core.nth.call(null,vec__20947,1,null);var obj20949 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20949;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20951 = {"position":"static","z-index":0};return obj20951;
})():null));return React.DOM.div((function (){var obj20953 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj20953;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t20943.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20943.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20943.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20943.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_20963 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_20964 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_20963);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_20964);
var vec__20954 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__20954,0,null);var up_unlisten = cljs.core.nth.call(null,vec__20954,1,null);var vec__20955 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__20955,0,null);var down_unlisten = cljs.core.nth.call(null,vec__20955,1,null);var vec__20956 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__20956,0,null);var move_unlisten = cljs.core.nth.call(null,vec__20956,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__20957){var map__20958 = p__20957;var map__20958__$1 = ((cljs.core.seq_QMARK_.call(null,map__20958))?cljs.core.apply.call(null,cljs.core.hash_map,map__20958):map__20958);var top = cljs.core.get.call(null,map__20958__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20958__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20920_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20920_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__20959){var map__20960 = p__20959;var map__20960__$1 = ((cljs.core.seq_QMARK_.call(null,map__20960))?cljs.core.apply.call(null,cljs.core.hash_map,map__20960):map__20960);var top = cljs.core.get.call(null,map__20960__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__20960__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__20961 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__20961,0,null);var init_top = cljs.core.nth.call(null,vec__20961,1,null);var vec__20962 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__20962,0,null);var handle_top = cljs.core.nth.call(null,vec__20962,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20921_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20921_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20922_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20922_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20945){var self__ = this;
var _20945__$1 = this;return self__.meta20944;
});
ewen.dragdrop.examples.t20943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20945,meta20944__$1){var self__ = this;
var _20945__$1 = this;return (new ewen.dragdrop.examples.t20943(self__.owner,self__.cursor,self__.delayed_draggable,meta20944__$1));
});
ewen.dragdrop.examples.__GT_t20943 = (function __GT_t20943(owner__$1,cursor__$1,delayed_draggable__$1,meta20944){return (new ewen.dragdrop.examples.t20943(owner__$1,cursor__$1,delayed_draggable__$1,meta20944));
});
}
return (new ewen.dragdrop.examples.t20943(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t20965 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20965 = (function (owner,app,meta20966){
this.owner = owner;
this.app = app;
this.meta20966 = meta20966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20965.cljs$lang$type = true;
ewen.dragdrop.examples.t20965.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20965";
ewen.dragdrop.examples.t20965.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20965");
});
ewen.dragdrop.examples.t20965.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t20965.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t20965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20967){var self__ = this;
var _20967__$1 = this;return self__.meta20966;
});
ewen.dragdrop.examples.t20965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20967,meta20966__$1){var self__ = this;
var _20967__$1 = this;return (new ewen.dragdrop.examples.t20965(self__.owner,self__.app,meta20966__$1));
});
ewen.dragdrop.examples.__GT_t20965 = (function __GT_t20965(owner__$1,app__$1,meta20966){return (new ewen.dragdrop.examples.t20965(owner__$1,app__$1,meta20966));
});
}
return (new ewen.dragdrop.examples.t20965(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t20991 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t20991 = (function (owner,cursor,hook_draggable,meta20992){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta20992 = meta20992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t20991.cljs$lang$type = true;
ewen.dragdrop.examples.t20991.cljs$lang$ctorStr = "ewen.dragdrop.examples/t20991";
ewen.dragdrop.examples.t20991.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t20991");
});
ewen.dragdrop.examples.t20991.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t20991.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__20994 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__20994,0,null);var y = cljs.core.nth.call(null,vec__20994,1,null);var vec__20995 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__20995,0,null);var h = cljs.core.nth.call(null,vec__20995,1,null);var obj20997 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj20997;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj20999 = {"position":"static","z-index":0};return obj20999;
})():null));return React.DOM.div((function (){var obj21001 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj21001;
})(),"Drag me!");
});
ewen.dragdrop.examples.t20991.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t20991.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t20991.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t20991.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21011 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_21012 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21011);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21012);
var vec__21002 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21002,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21002,1,null);var vec__21003 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21003,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21003,1,null);var vec__21004 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21004,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21004,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21005){var map__21006 = p__21005;var map__21006__$1 = ((cljs.core.seq_QMARK_.call(null,map__21006))?cljs.core.apply.call(null,cljs.core.hash_map,map__21006):map__21006);var top = cljs.core.get.call(null,map__21006__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21006__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20968_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__20968_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21007){var map__21008 = p__21007;var map__21008__$1 = ((cljs.core.seq_QMARK_.call(null,map__21008))?cljs.core.apply.call(null,cljs.core.hash_map,map__21008):map__21008);var top = cljs.core.get.call(null,map__21008__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21008__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21009 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21009,0,null);var init_top = cljs.core.nth.call(null,vec__21009,1,null);var vec__21010 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21010,0,null);var handle_top = cljs.core.nth.call(null,vec__21010,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20969_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__20969_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__20970_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__20970_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t20991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20993){var self__ = this;
var _20993__$1 = this;return self__.meta20992;
});
ewen.dragdrop.examples.t20991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20993,meta20992__$1){var self__ = this;
var _20993__$1 = this;return (new ewen.dragdrop.examples.t20991(self__.owner,self__.cursor,self__.hook_draggable,meta20992__$1));
});
ewen.dragdrop.examples.__GT_t20991 = (function __GT_t20991(owner__$1,cursor__$1,hook_draggable__$1,meta20992){return (new ewen.dragdrop.examples.t20991(owner__$1,cursor__$1,hook_draggable__$1,meta20992));
});
}
return (new ewen.dragdrop.examples.t20991(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21013 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21013 = (function (owner,app,meta21014){
this.owner = owner;
this.app = app;
this.meta21014 = meta21014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21013.cljs$lang$type = true;
ewen.dragdrop.examples.t21013.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21013";
ewen.dragdrop.examples.t21013.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21013");
});
ewen.dragdrop.examples.t21013.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21013.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21015){var self__ = this;
var _21015__$1 = this;return self__.meta21014;
});
ewen.dragdrop.examples.t21013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21015,meta21014__$1){var self__ = this;
var _21015__$1 = this;return (new ewen.dragdrop.examples.t21013(self__.owner,self__.app,meta21014__$1));
});
ewen.dragdrop.examples.__GT_t21013 = (function __GT_t21013(owner__$1,app__$1,meta21014){return (new ewen.dragdrop.examples.t21013(owner__$1,app__$1,meta21014));
});
}
return (new ewen.dragdrop.examples.t21013(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21039 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21039 = (function (owner,cursor,long_press_draggable,meta21040){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta21040 = meta21040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21039.cljs$lang$type = true;
ewen.dragdrop.examples.t21039.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21039";
ewen.dragdrop.examples.t21039.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21039");
});
ewen.dragdrop.examples.t21039.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21039.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21042 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21042,0,null);var y = cljs.core.nth.call(null,vec__21042,1,null);var vec__21043 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21043,0,null);var h = cljs.core.nth.call(null,vec__21043,1,null);var obj21045 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21045;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21047 = {"position":"static","z-index":0};return obj21047;
})():null));return React.DOM.div((function (){var obj21049 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj21049;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t21039.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21039.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21039.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21039.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21059 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_21060 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21059);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21060);
var vec__21050 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21050,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21050,1,null);var vec__21051 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21051,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21051,1,null);var vec__21052 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21052,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21052,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21053){var map__21054 = p__21053;var map__21054__$1 = ((cljs.core.seq_QMARK_.call(null,map__21054))?cljs.core.apply.call(null,cljs.core.hash_map,map__21054):map__21054);var top = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21054__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21016_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21016_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21055){var map__21056 = p__21055;var map__21056__$1 = ((cljs.core.seq_QMARK_.call(null,map__21056))?cljs.core.apply.call(null,cljs.core.hash_map,map__21056):map__21056);var top = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21057 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21057,0,null);var init_top = cljs.core.nth.call(null,vec__21057,1,null);var vec__21058 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21058,0,null);var handle_top = cljs.core.nth.call(null,vec__21058,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21017_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21017_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21018_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21018_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21041){var self__ = this;
var _21041__$1 = this;return self__.meta21040;
});
ewen.dragdrop.examples.t21039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21041,meta21040__$1){var self__ = this;
var _21041__$1 = this;return (new ewen.dragdrop.examples.t21039(self__.owner,self__.cursor,self__.long_press_draggable,meta21040__$1));
});
ewen.dragdrop.examples.__GT_t21039 = (function __GT_t21039(owner__$1,cursor__$1,long_press_draggable__$1,meta21040){return (new ewen.dragdrop.examples.t21039(owner__$1,cursor__$1,long_press_draggable__$1,meta21040));
});
}
return (new ewen.dragdrop.examples.t21039(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21061 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21061 = (function (owner,app,meta21062){
this.owner = owner;
this.app = app;
this.meta21062 = meta21062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21061.cljs$lang$type = true;
ewen.dragdrop.examples.t21061.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21061";
ewen.dragdrop.examples.t21061.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21061");
});
ewen.dragdrop.examples.t21061.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21061.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21063){var self__ = this;
var _21063__$1 = this;return self__.meta21062;
});
ewen.dragdrop.examples.t21061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21063,meta21062__$1){var self__ = this;
var _21063__$1 = this;return (new ewen.dragdrop.examples.t21061(self__.owner,self__.app,meta21062__$1));
});
ewen.dragdrop.examples.__GT_t21061 = (function __GT_t21061(owner__$1,app__$1,meta21062){return (new ewen.dragdrop.examples.t21061(owner__$1,app__$1,meta21062));
});
}
return (new ewen.dragdrop.examples.t21061(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map