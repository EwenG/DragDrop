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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22075 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22075 = (function (owner,cursor,typical_draggable,meta22076){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta22076 = meta22076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22075.cljs$lang$type = true;
ewen.dragdrop.examples.t22075.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22075";
ewen.dragdrop.examples.t22075.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22075");
});
ewen.dragdrop.examples.t22075.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22075.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22078 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22078,0,null);var y = cljs.core.nth.call(null,vec__22078,1,null);var vec__22079 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22079,0,null);var h = cljs.core.nth.call(null,vec__22079,1,null);var obj22081 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22081;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22083 = {"position":"static","z-index":0};return obj22083;
})():null));return React.DOM.div((function (){var obj22085 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj22085;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22075.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22075.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22075.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22075.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22095 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_22096 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22095);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22096);
var vec__22086 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22086,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22086,1,null);var vec__22087 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22087,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22087,1,null);var vec__22088 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22088,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22088,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__22051_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__22051_SHARP_)))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22089){var map__22090 = p__22089;var map__22090__$1 = ((cljs.core.seq_QMARK_.call(null,map__22090))?cljs.core.apply.call(null,cljs.core.hash_map,map__22090):map__22090);var top = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22052_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22052_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22091){var map__22092 = p__22091;var map__22092__$1 = ((cljs.core.seq_QMARK_.call(null,map__22092))?cljs.core.apply.call(null,cljs.core.hash_map,map__22092):map__22092);var top = cljs.core.get.call(null,map__22092__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22092__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22093 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22093,0,null);var init_top = cljs.core.nth.call(null,vec__22093,1,null);var vec__22094 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22094,0,null);var handle_top = cljs.core.nth.call(null,vec__22094,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22053_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22053_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22054_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22054_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22077){var self__ = this;
var _22077__$1 = this;return self__.meta22076;
});
ewen.dragdrop.examples.t22075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22077,meta22076__$1){var self__ = this;
var _22077__$1 = this;return (new ewen.dragdrop.examples.t22075(self__.owner,self__.cursor,self__.typical_draggable,meta22076__$1));
});
ewen.dragdrop.examples.__GT_t22075 = (function __GT_t22075(owner__$1,cursor__$1,typical_draggable__$1,meta22076){return (new ewen.dragdrop.examples.t22075(owner__$1,cursor__$1,typical_draggable__$1,meta22076));
});
}
return (new ewen.dragdrop.examples.t22075(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22097 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22097 = (function (owner,app,meta22098){
this.owner = owner;
this.app = app;
this.meta22098 = meta22098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22097.cljs$lang$type = true;
ewen.dragdrop.examples.t22097.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22097";
ewen.dragdrop.examples.t22097.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22097");
});
ewen.dragdrop.examples.t22097.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22097.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22099){var self__ = this;
var _22099__$1 = this;return self__.meta22098;
});
ewen.dragdrop.examples.t22097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22099,meta22098__$1){var self__ = this;
var _22099__$1 = this;return (new ewen.dragdrop.examples.t22097(self__.owner,self__.app,meta22098__$1));
});
ewen.dragdrop.examples.__GT_t22097 = (function __GT_t22097(owner__$1,app__$1,meta22098){return (new ewen.dragdrop.examples.t22097(owner__$1,app__$1,meta22098));
});
}
return (new ewen.dragdrop.examples.t22097(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22123 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22123 = (function (owner,cursor,delayed_draggable,meta22124){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta22124 = meta22124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22123.cljs$lang$type = true;
ewen.dragdrop.examples.t22123.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22123";
ewen.dragdrop.examples.t22123.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22123");
});
ewen.dragdrop.examples.t22123.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22123.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22126 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22126,0,null);var y = cljs.core.nth.call(null,vec__22126,1,null);var vec__22127 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22127,0,null);var h = cljs.core.nth.call(null,vec__22127,1,null);var obj22129 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22129;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22131 = {"position":"static","z-index":0};return obj22131;
})():null));return React.DOM.div((function (){var obj22133 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj22133;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t22123.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22123.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22123.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22123.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22143 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_22144 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22143);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22144);
var vec__22134 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22134,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22134,1,null);var vec__22135 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22135,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22135,1,null);var vec__22136 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22136,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22136,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22137){var map__22138 = p__22137;var map__22138__$1 = ((cljs.core.seq_QMARK_.call(null,map__22138))?cljs.core.apply.call(null,cljs.core.hash_map,map__22138):map__22138);var top = cljs.core.get.call(null,map__22138__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22138__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22100_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22100_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22139){var map__22140 = p__22139;var map__22140__$1 = ((cljs.core.seq_QMARK_.call(null,map__22140))?cljs.core.apply.call(null,cljs.core.hash_map,map__22140):map__22140);var top = cljs.core.get.call(null,map__22140__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22140__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22141 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22141,0,null);var init_top = cljs.core.nth.call(null,vec__22141,1,null);var vec__22142 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22142,0,null);var handle_top = cljs.core.nth.call(null,vec__22142,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22101_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22101_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22102_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22102_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22125){var self__ = this;
var _22125__$1 = this;return self__.meta22124;
});
ewen.dragdrop.examples.t22123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22125,meta22124__$1){var self__ = this;
var _22125__$1 = this;return (new ewen.dragdrop.examples.t22123(self__.owner,self__.cursor,self__.delayed_draggable,meta22124__$1));
});
ewen.dragdrop.examples.__GT_t22123 = (function __GT_t22123(owner__$1,cursor__$1,delayed_draggable__$1,meta22124){return (new ewen.dragdrop.examples.t22123(owner__$1,cursor__$1,delayed_draggable__$1,meta22124));
});
}
return (new ewen.dragdrop.examples.t22123(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22145 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22145 = (function (owner,app,meta22146){
this.owner = owner;
this.app = app;
this.meta22146 = meta22146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22145.cljs$lang$type = true;
ewen.dragdrop.examples.t22145.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22145";
ewen.dragdrop.examples.t22145.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22145");
});
ewen.dragdrop.examples.t22145.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22145.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22147){var self__ = this;
var _22147__$1 = this;return self__.meta22146;
});
ewen.dragdrop.examples.t22145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22147,meta22146__$1){var self__ = this;
var _22147__$1 = this;return (new ewen.dragdrop.examples.t22145(self__.owner,self__.app,meta22146__$1));
});
ewen.dragdrop.examples.__GT_t22145 = (function __GT_t22145(owner__$1,app__$1,meta22146){return (new ewen.dragdrop.examples.t22145(owner__$1,app__$1,meta22146));
});
}
return (new ewen.dragdrop.examples.t22145(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22171 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22171 = (function (owner,cursor,hook_draggable,meta22172){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta22172 = meta22172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22171.cljs$lang$type = true;
ewen.dragdrop.examples.t22171.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22171";
ewen.dragdrop.examples.t22171.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22171");
});
ewen.dragdrop.examples.t22171.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22171.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22174 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22174,0,null);var y = cljs.core.nth.call(null,vec__22174,1,null);var vec__22175 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22175,0,null);var h = cljs.core.nth.call(null,vec__22175,1,null);var obj22177 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22177;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22179 = {"position":"static","z-index":0};return obj22179;
})():null));return React.DOM.div((function (){var obj22181 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj22181;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22171.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22171.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22171.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22171.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22191 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_22192 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22191);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22192);
var vec__22182 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22182,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22182,1,null);var vec__22183 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22183,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22183,1,null);var vec__22184 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22184,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22184,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22185){var map__22186 = p__22185;var map__22186__$1 = ((cljs.core.seq_QMARK_.call(null,map__22186))?cljs.core.apply.call(null,cljs.core.hash_map,map__22186):map__22186);var top = cljs.core.get.call(null,map__22186__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22186__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22148_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22148_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22187){var map__22188 = p__22187;var map__22188__$1 = ((cljs.core.seq_QMARK_.call(null,map__22188))?cljs.core.apply.call(null,cljs.core.hash_map,map__22188):map__22188);var top = cljs.core.get.call(null,map__22188__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22188__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22189 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22189,0,null);var init_top = cljs.core.nth.call(null,vec__22189,1,null);var vec__22190 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22190,0,null);var handle_top = cljs.core.nth.call(null,vec__22190,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22149_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22149_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22150_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22150_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22173){var self__ = this;
var _22173__$1 = this;return self__.meta22172;
});
ewen.dragdrop.examples.t22171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22173,meta22172__$1){var self__ = this;
var _22173__$1 = this;return (new ewen.dragdrop.examples.t22171(self__.owner,self__.cursor,self__.hook_draggable,meta22172__$1));
});
ewen.dragdrop.examples.__GT_t22171 = (function __GT_t22171(owner__$1,cursor__$1,hook_draggable__$1,meta22172){return (new ewen.dragdrop.examples.t22171(owner__$1,cursor__$1,hook_draggable__$1,meta22172));
});
}
return (new ewen.dragdrop.examples.t22171(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22193 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22193 = (function (owner,app,meta22194){
this.owner = owner;
this.app = app;
this.meta22194 = meta22194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22193.cljs$lang$type = true;
ewen.dragdrop.examples.t22193.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22193";
ewen.dragdrop.examples.t22193.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22193");
});
ewen.dragdrop.examples.t22193.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22193.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22195){var self__ = this;
var _22195__$1 = this;return self__.meta22194;
});
ewen.dragdrop.examples.t22193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22195,meta22194__$1){var self__ = this;
var _22195__$1 = this;return (new ewen.dragdrop.examples.t22193(self__.owner,self__.app,meta22194__$1));
});
ewen.dragdrop.examples.__GT_t22193 = (function __GT_t22193(owner__$1,app__$1,meta22194){return (new ewen.dragdrop.examples.t22193(owner__$1,app__$1,meta22194));
});
}
return (new ewen.dragdrop.examples.t22193(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22219 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22219 = (function (owner,cursor,long_press_draggable,meta22220){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta22220 = meta22220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22219.cljs$lang$type = true;
ewen.dragdrop.examples.t22219.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22219";
ewen.dragdrop.examples.t22219.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22219");
});
ewen.dragdrop.examples.t22219.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22219.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22222 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22222,0,null);var y = cljs.core.nth.call(null,vec__22222,1,null);var vec__22223 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22223,0,null);var h = cljs.core.nth.call(null,vec__22223,1,null);var obj22225 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22225;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22227 = {"position":"static","z-index":0};return obj22227;
})():null));return React.DOM.div((function (){var obj22229 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj22229;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t22219.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22219.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22219.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22219.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22239 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_22240 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22239);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22240);
var vec__22230 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22230,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22230,1,null);var vec__22231 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22231,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22231,1,null);var vec__22232 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22232,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22232,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22233){var map__22234 = p__22233;var map__22234__$1 = ((cljs.core.seq_QMARK_.call(null,map__22234))?cljs.core.apply.call(null,cljs.core.hash_map,map__22234):map__22234);var top = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22196_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22196_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22235){var map__22236 = p__22235;var map__22236__$1 = ((cljs.core.seq_QMARK_.call(null,map__22236))?cljs.core.apply.call(null,cljs.core.hash_map,map__22236):map__22236);var top = cljs.core.get.call(null,map__22236__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22236__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22237 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22237,0,null);var init_top = cljs.core.nth.call(null,vec__22237,1,null);var vec__22238 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22238,0,null);var handle_top = cljs.core.nth.call(null,vec__22238,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22197_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22197_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22198_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22198_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22221){var self__ = this;
var _22221__$1 = this;return self__.meta22220;
});
ewen.dragdrop.examples.t22219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22221,meta22220__$1){var self__ = this;
var _22221__$1 = this;return (new ewen.dragdrop.examples.t22219(self__.owner,self__.cursor,self__.long_press_draggable,meta22220__$1));
});
ewen.dragdrop.examples.__GT_t22219 = (function __GT_t22219(owner__$1,cursor__$1,long_press_draggable__$1,meta22220){return (new ewen.dragdrop.examples.t22219(owner__$1,cursor__$1,long_press_draggable__$1,meta22220));
});
}
return (new ewen.dragdrop.examples.t22219(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22241 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22241 = (function (owner,app,meta22242){
this.owner = owner;
this.app = app;
this.meta22242 = meta22242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22241.cljs$lang$type = true;
ewen.dragdrop.examples.t22241.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22241";
ewen.dragdrop.examples.t22241.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22241");
});
ewen.dragdrop.examples.t22241.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22241.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22243){var self__ = this;
var _22243__$1 = this;return self__.meta22242;
});
ewen.dragdrop.examples.t22241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22243,meta22242__$1){var self__ = this;
var _22243__$1 = this;return (new ewen.dragdrop.examples.t22241(self__.owner,self__.app,meta22242__$1));
});
ewen.dragdrop.examples.__GT_t22241 = (function __GT_t22241(owner__$1,app__$1,meta22242){return (new ewen.dragdrop.examples.t22241(owner__$1,app__$1,meta22242));
});
}
return (new ewen.dragdrop.examples.t22241(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map