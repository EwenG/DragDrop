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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22268 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22268 = (function (owner,cursor,typical_draggable,meta22269){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta22269 = meta22269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22268.cljs$lang$type = true;
ewen.dragdrop.examples.t22268.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22268";
ewen.dragdrop.examples.t22268.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22268");
});
ewen.dragdrop.examples.t22268.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22268.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22271 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22271,0,null);var y = cljs.core.nth.call(null,vec__22271,1,null);var vec__22272 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22272,0,null);var h = cljs.core.nth.call(null,vec__22272,1,null);var obj22274 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22274;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22276 = {"position":"static","z-index":0};return obj22276;
})():null));return React.DOM.div((function (){var obj22278 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj22278;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22268.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22268.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22268.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22268.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22288 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_22289 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22288);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22289);
var vec__22279 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22279,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22279,1,null);var vec__22280 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22280,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22280,1,null);var vec__22281 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22281,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22281,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__22244_SHARP_){return cljs.core.prn.call(null,p1__22244_SHARP_.clientX);
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22282){var map__22283 = p__22282;var map__22283__$1 = ((cljs.core.seq_QMARK_.call(null,map__22283))?cljs.core.apply.call(null,cljs.core.hash_map,map__22283):map__22283);var top = cljs.core.get.call(null,map__22283__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22283__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22245_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22245_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22284){var map__22285 = p__22284;var map__22285__$1 = ((cljs.core.seq_QMARK_.call(null,map__22285))?cljs.core.apply.call(null,cljs.core.hash_map,map__22285):map__22285);var top = cljs.core.get.call(null,map__22285__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22285__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22286 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22286,0,null);var init_top = cljs.core.nth.call(null,vec__22286,1,null);var vec__22287 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22287,0,null);var handle_top = cljs.core.nth.call(null,vec__22287,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22246_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22246_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22247_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22247_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22270){var self__ = this;
var _22270__$1 = this;return self__.meta22269;
});
ewen.dragdrop.examples.t22268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22270,meta22269__$1){var self__ = this;
var _22270__$1 = this;return (new ewen.dragdrop.examples.t22268(self__.owner,self__.cursor,self__.typical_draggable,meta22269__$1));
});
ewen.dragdrop.examples.__GT_t22268 = (function __GT_t22268(owner__$1,cursor__$1,typical_draggable__$1,meta22269){return (new ewen.dragdrop.examples.t22268(owner__$1,cursor__$1,typical_draggable__$1,meta22269));
});
}
return (new ewen.dragdrop.examples.t22268(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22290 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22290 = (function (owner,app,meta22291){
this.owner = owner;
this.app = app;
this.meta22291 = meta22291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22290.cljs$lang$type = true;
ewen.dragdrop.examples.t22290.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22290";
ewen.dragdrop.examples.t22290.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22290");
});
ewen.dragdrop.examples.t22290.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22290.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22292){var self__ = this;
var _22292__$1 = this;return self__.meta22291;
});
ewen.dragdrop.examples.t22290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22292,meta22291__$1){var self__ = this;
var _22292__$1 = this;return (new ewen.dragdrop.examples.t22290(self__.owner,self__.app,meta22291__$1));
});
ewen.dragdrop.examples.__GT_t22290 = (function __GT_t22290(owner__$1,app__$1,meta22291){return (new ewen.dragdrop.examples.t22290(owner__$1,app__$1,meta22291));
});
}
return (new ewen.dragdrop.examples.t22290(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22316 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22316 = (function (owner,cursor,delayed_draggable,meta22317){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta22317 = meta22317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22316.cljs$lang$type = true;
ewen.dragdrop.examples.t22316.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22316";
ewen.dragdrop.examples.t22316.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22316");
});
ewen.dragdrop.examples.t22316.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22316.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22319 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22319,0,null);var y = cljs.core.nth.call(null,vec__22319,1,null);var vec__22320 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22320,0,null);var h = cljs.core.nth.call(null,vec__22320,1,null);var obj22322 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22322;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22324 = {"position":"static","z-index":0};return obj22324;
})():null));return React.DOM.div((function (){var obj22326 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj22326;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t22316.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22316.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22316.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22316.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22336 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_22337 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22336);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22337);
var vec__22327 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22327,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22327,1,null);var vec__22328 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22328,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22328,1,null);var vec__22329 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22329,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22329,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22330){var map__22331 = p__22330;var map__22331__$1 = ((cljs.core.seq_QMARK_.call(null,map__22331))?cljs.core.apply.call(null,cljs.core.hash_map,map__22331):map__22331);var top = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22331__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22293_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22293_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22332){var map__22333 = p__22332;var map__22333__$1 = ((cljs.core.seq_QMARK_.call(null,map__22333))?cljs.core.apply.call(null,cljs.core.hash_map,map__22333):map__22333);var top = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22333__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22334 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22334,0,null);var init_top = cljs.core.nth.call(null,vec__22334,1,null);var vec__22335 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22335,0,null);var handle_top = cljs.core.nth.call(null,vec__22335,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22294_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22294_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22295_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22295_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22318){var self__ = this;
var _22318__$1 = this;return self__.meta22317;
});
ewen.dragdrop.examples.t22316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22318,meta22317__$1){var self__ = this;
var _22318__$1 = this;return (new ewen.dragdrop.examples.t22316(self__.owner,self__.cursor,self__.delayed_draggable,meta22317__$1));
});
ewen.dragdrop.examples.__GT_t22316 = (function __GT_t22316(owner__$1,cursor__$1,delayed_draggable__$1,meta22317){return (new ewen.dragdrop.examples.t22316(owner__$1,cursor__$1,delayed_draggable__$1,meta22317));
});
}
return (new ewen.dragdrop.examples.t22316(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22338 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22338 = (function (owner,app,meta22339){
this.owner = owner;
this.app = app;
this.meta22339 = meta22339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22338.cljs$lang$type = true;
ewen.dragdrop.examples.t22338.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22338";
ewen.dragdrop.examples.t22338.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22338");
});
ewen.dragdrop.examples.t22338.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22338.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22340){var self__ = this;
var _22340__$1 = this;return self__.meta22339;
});
ewen.dragdrop.examples.t22338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22340,meta22339__$1){var self__ = this;
var _22340__$1 = this;return (new ewen.dragdrop.examples.t22338(self__.owner,self__.app,meta22339__$1));
});
ewen.dragdrop.examples.__GT_t22338 = (function __GT_t22338(owner__$1,app__$1,meta22339){return (new ewen.dragdrop.examples.t22338(owner__$1,app__$1,meta22339));
});
}
return (new ewen.dragdrop.examples.t22338(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22364 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22364 = (function (owner,cursor,hook_draggable,meta22365){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta22365 = meta22365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22364.cljs$lang$type = true;
ewen.dragdrop.examples.t22364.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22364";
ewen.dragdrop.examples.t22364.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22364");
});
ewen.dragdrop.examples.t22364.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22364.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22367 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22367,0,null);var y = cljs.core.nth.call(null,vec__22367,1,null);var vec__22368 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22368,0,null);var h = cljs.core.nth.call(null,vec__22368,1,null);var obj22370 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22370;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22372 = {"position":"static","z-index":0};return obj22372;
})():null));return React.DOM.div((function (){var obj22374 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj22374;
})(),"Drag me!");
});
ewen.dragdrop.examples.t22364.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22364.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22364.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22364.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22384 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_22385 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22384);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22385);
var vec__22375 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22375,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22375,1,null);var vec__22376 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22376,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22376,1,null);var vec__22377 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22377,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22377,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22378){var map__22379 = p__22378;var map__22379__$1 = ((cljs.core.seq_QMARK_.call(null,map__22379))?cljs.core.apply.call(null,cljs.core.hash_map,map__22379):map__22379);var top = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22341_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22341_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22380){var map__22381 = p__22380;var map__22381__$1 = ((cljs.core.seq_QMARK_.call(null,map__22381))?cljs.core.apply.call(null,cljs.core.hash_map,map__22381):map__22381);var top = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22382 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22382,0,null);var init_top = cljs.core.nth.call(null,vec__22382,1,null);var vec__22383 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22383,0,null);var handle_top = cljs.core.nth.call(null,vec__22383,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22342_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22342_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22343_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22343_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22366){var self__ = this;
var _22366__$1 = this;return self__.meta22365;
});
ewen.dragdrop.examples.t22364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22366,meta22365__$1){var self__ = this;
var _22366__$1 = this;return (new ewen.dragdrop.examples.t22364(self__.owner,self__.cursor,self__.hook_draggable,meta22365__$1));
});
ewen.dragdrop.examples.__GT_t22364 = (function __GT_t22364(owner__$1,cursor__$1,hook_draggable__$1,meta22365){return (new ewen.dragdrop.examples.t22364(owner__$1,cursor__$1,hook_draggable__$1,meta22365));
});
}
return (new ewen.dragdrop.examples.t22364(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22386 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22386 = (function (owner,app,meta22387){
this.owner = owner;
this.app = app;
this.meta22387 = meta22387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22386.cljs$lang$type = true;
ewen.dragdrop.examples.t22386.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22386";
ewen.dragdrop.examples.t22386.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22386");
});
ewen.dragdrop.examples.t22386.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22386.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22388){var self__ = this;
var _22388__$1 = this;return self__.meta22387;
});
ewen.dragdrop.examples.t22386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22388,meta22387__$1){var self__ = this;
var _22388__$1 = this;return (new ewen.dragdrop.examples.t22386(self__.owner,self__.app,meta22387__$1));
});
ewen.dragdrop.examples.__GT_t22386 = (function __GT_t22386(owner__$1,app__$1,meta22387){return (new ewen.dragdrop.examples.t22386(owner__$1,app__$1,meta22387));
});
}
return (new ewen.dragdrop.examples.t22386(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22412 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22412 = (function (owner,cursor,long_press_draggable,meta22413){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta22413 = meta22413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22412.cljs$lang$type = true;
ewen.dragdrop.examples.t22412.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22412";
ewen.dragdrop.examples.t22412.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22412");
});
ewen.dragdrop.examples.t22412.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22412.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22415 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22415,0,null);var y = cljs.core.nth.call(null,vec__22415,1,null);var vec__22416 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22416,0,null);var h = cljs.core.nth.call(null,vec__22416,1,null);var obj22418 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22418;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22420 = {"position":"static","z-index":0};return obj22420;
})():null));return React.DOM.div((function (){var obj22422 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj22422;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t22412.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22412.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22412.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22412.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22432 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_22433 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22432);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22433);
var vec__22423 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22423,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22423,1,null);var vec__22424 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22424,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22424,1,null);var vec__22425 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22425,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22425,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22426){var map__22427 = p__22426;var map__22427__$1 = ((cljs.core.seq_QMARK_.call(null,map__22427))?cljs.core.apply.call(null,cljs.core.hash_map,map__22427):map__22427);var top = cljs.core.get.call(null,map__22427__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22427__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22389_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__22389_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22428){var map__22429 = p__22428;var map__22429__$1 = ((cljs.core.seq_QMARK_.call(null,map__22429))?cljs.core.apply.call(null,cljs.core.hash_map,map__22429):map__22429);var top = cljs.core.get.call(null,map__22429__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22429__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22430 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22430,0,null);var init_top = cljs.core.nth.call(null,vec__22430,1,null);var vec__22431 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22431,0,null);var handle_top = cljs.core.nth.call(null,vec__22431,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22390_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__22390_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__22391_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__22391_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22414){var self__ = this;
var _22414__$1 = this;return self__.meta22413;
});
ewen.dragdrop.examples.t22412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22414,meta22413__$1){var self__ = this;
var _22414__$1 = this;return (new ewen.dragdrop.examples.t22412(self__.owner,self__.cursor,self__.long_press_draggable,meta22413__$1));
});
ewen.dragdrop.examples.__GT_t22412 = (function __GT_t22412(owner__$1,cursor__$1,long_press_draggable__$1,meta22413){return (new ewen.dragdrop.examples.t22412(owner__$1,cursor__$1,long_press_draggable__$1,meta22413));
});
}
return (new ewen.dragdrop.examples.t22412(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22434 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22434 = (function (owner,app,meta22435){
this.owner = owner;
this.app = app;
this.meta22435 = meta22435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22434.cljs$lang$type = true;
ewen.dragdrop.examples.t22434.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22434";
ewen.dragdrop.examples.t22434.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22434");
});
ewen.dragdrop.examples.t22434.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22434.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22436){var self__ = this;
var _22436__$1 = this;return self__.meta22435;
});
ewen.dragdrop.examples.t22434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22436,meta22435__$1){var self__ = this;
var _22436__$1 = this;return (new ewen.dragdrop.examples.t22434(self__.owner,self__.app,meta22435__$1));
});
ewen.dragdrop.examples.__GT_t22434 = (function __GT_t22434(owner__$1,app__$1,meta22435){return (new ewen.dragdrop.examples.t22434(owner__$1,app__$1,meta22435));
});
}
return (new ewen.dragdrop.examples.t22434(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map