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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24210 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24210 = (function (owner,cursor,typical_draggable,meta24211){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta24211 = meta24211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24210.cljs$lang$type = true;
ewen.dragdrop.examples.t24210.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24210";
ewen.dragdrop.examples.t24210.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24210");
});
ewen.dragdrop.examples.t24210.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24210.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24213 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24213,0,null);var y = cljs.core.nth.call(null,vec__24213,1,null);var vec__24214 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24214,0,null);var h = cljs.core.nth.call(null,vec__24214,1,null);var obj24216 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24216;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24218 = {"position":"static","z-index":0};return obj24218;
})():null));return React.DOM.div((function (){var obj24220 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj24220;
})(),"Drag me!");
});
ewen.dragdrop.examples.t24210.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24210.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24210.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24210.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24230 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_24231 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24230);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24231);
var vec__24221 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24221,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24221,1,null);var vec__24222 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24222,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24222,1,null);var vec__24223 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24223,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24223,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__24186_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(new cljs.core.Keyword(null,"offsetX","offsetX",3760464279).cljs$core$IFn$_invoke$arity$1(p1__24186_SHARP_))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24224){var map__24225 = p__24224;var map__24225__$1 = ((cljs.core.seq_QMARK_.call(null,map__24225))?cljs.core.apply.call(null,cljs.core.hash_map,map__24225):map__24225);var top = cljs.core.get.call(null,map__24225__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24225__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24187_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24187_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24226){var map__24227 = p__24226;var map__24227__$1 = ((cljs.core.seq_QMARK_.call(null,map__24227))?cljs.core.apply.call(null,cljs.core.hash_map,map__24227):map__24227);var top = cljs.core.get.call(null,map__24227__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24227__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24228 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24228,0,null);var init_top = cljs.core.nth.call(null,vec__24228,1,null);var vec__24229 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24229,0,null);var handle_top = cljs.core.nth.call(null,vec__24229,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24188_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24188_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24189_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24189_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24212){var self__ = this;
var _24212__$1 = this;return self__.meta24211;
});
ewen.dragdrop.examples.t24210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24212,meta24211__$1){var self__ = this;
var _24212__$1 = this;return (new ewen.dragdrop.examples.t24210(self__.owner,self__.cursor,self__.typical_draggable,meta24211__$1));
});
ewen.dragdrop.examples.__GT_t24210 = (function __GT_t24210(owner__$1,cursor__$1,typical_draggable__$1,meta24211){return (new ewen.dragdrop.examples.t24210(owner__$1,cursor__$1,typical_draggable__$1,meta24211));
});
}
return (new ewen.dragdrop.examples.t24210(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24232 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24232 = (function (owner,app,meta24233){
this.owner = owner;
this.app = app;
this.meta24233 = meta24233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24232.cljs$lang$type = true;
ewen.dragdrop.examples.t24232.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24232";
ewen.dragdrop.examples.t24232.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24232");
});
ewen.dragdrop.examples.t24232.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24232.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24234){var self__ = this;
var _24234__$1 = this;return self__.meta24233;
});
ewen.dragdrop.examples.t24232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24234,meta24233__$1){var self__ = this;
var _24234__$1 = this;return (new ewen.dragdrop.examples.t24232(self__.owner,self__.app,meta24233__$1));
});
ewen.dragdrop.examples.__GT_t24232 = (function __GT_t24232(owner__$1,app__$1,meta24233){return (new ewen.dragdrop.examples.t24232(owner__$1,app__$1,meta24233));
});
}
return (new ewen.dragdrop.examples.t24232(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24258 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24258 = (function (owner,cursor,delayed_draggable,meta24259){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta24259 = meta24259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24258.cljs$lang$type = true;
ewen.dragdrop.examples.t24258.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24258";
ewen.dragdrop.examples.t24258.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24258");
});
ewen.dragdrop.examples.t24258.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24258.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24261 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24261,0,null);var y = cljs.core.nth.call(null,vec__24261,1,null);var vec__24262 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24262,0,null);var h = cljs.core.nth.call(null,vec__24262,1,null);var obj24264 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24264;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24266 = {"position":"static","z-index":0};return obj24266;
})():null));return React.DOM.div((function (){var obj24268 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj24268;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t24258.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24258.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24258.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24258.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24278 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_24279 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24278);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24279);
var vec__24269 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24269,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24269,1,null);var vec__24270 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24270,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24270,1,null);var vec__24271 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24271,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24271,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24272){var map__24273 = p__24272;var map__24273__$1 = ((cljs.core.seq_QMARK_.call(null,map__24273))?cljs.core.apply.call(null,cljs.core.hash_map,map__24273):map__24273);var top = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24235_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24235_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24274){var map__24275 = p__24274;var map__24275__$1 = ((cljs.core.seq_QMARK_.call(null,map__24275))?cljs.core.apply.call(null,cljs.core.hash_map,map__24275):map__24275);var top = cljs.core.get.call(null,map__24275__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24275__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24276 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24276,0,null);var init_top = cljs.core.nth.call(null,vec__24276,1,null);var vec__24277 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24277,0,null);var handle_top = cljs.core.nth.call(null,vec__24277,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24236_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24236_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24237_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24237_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24260){var self__ = this;
var _24260__$1 = this;return self__.meta24259;
});
ewen.dragdrop.examples.t24258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24260,meta24259__$1){var self__ = this;
var _24260__$1 = this;return (new ewen.dragdrop.examples.t24258(self__.owner,self__.cursor,self__.delayed_draggable,meta24259__$1));
});
ewen.dragdrop.examples.__GT_t24258 = (function __GT_t24258(owner__$1,cursor__$1,delayed_draggable__$1,meta24259){return (new ewen.dragdrop.examples.t24258(owner__$1,cursor__$1,delayed_draggable__$1,meta24259));
});
}
return (new ewen.dragdrop.examples.t24258(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24280 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24280 = (function (owner,app,meta24281){
this.owner = owner;
this.app = app;
this.meta24281 = meta24281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24280.cljs$lang$type = true;
ewen.dragdrop.examples.t24280.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24280";
ewen.dragdrop.examples.t24280.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24280");
});
ewen.dragdrop.examples.t24280.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24280.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24282){var self__ = this;
var _24282__$1 = this;return self__.meta24281;
});
ewen.dragdrop.examples.t24280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24282,meta24281__$1){var self__ = this;
var _24282__$1 = this;return (new ewen.dragdrop.examples.t24280(self__.owner,self__.app,meta24281__$1));
});
ewen.dragdrop.examples.__GT_t24280 = (function __GT_t24280(owner__$1,app__$1,meta24281){return (new ewen.dragdrop.examples.t24280(owner__$1,app__$1,meta24281));
});
}
return (new ewen.dragdrop.examples.t24280(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24306 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24306 = (function (owner,cursor,hook_draggable,meta24307){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta24307 = meta24307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24306.cljs$lang$type = true;
ewen.dragdrop.examples.t24306.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24306";
ewen.dragdrop.examples.t24306.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24306");
});
ewen.dragdrop.examples.t24306.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24306.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24309 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24309,0,null);var y = cljs.core.nth.call(null,vec__24309,1,null);var vec__24310 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24310,0,null);var h = cljs.core.nth.call(null,vec__24310,1,null);var obj24312 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24312;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24314 = {"position":"static","z-index":0};return obj24314;
})():null));return React.DOM.div((function (){var obj24316 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj24316;
})(),"Drag me!");
});
ewen.dragdrop.examples.t24306.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24306.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24306.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24306.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24326 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_24327 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24326);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24327);
var vec__24317 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24317,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24317,1,null);var vec__24318 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24318,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24318,1,null);var vec__24319 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24319,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24319,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24320){var map__24321 = p__24320;var map__24321__$1 = ((cljs.core.seq_QMARK_.call(null,map__24321))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);var top = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24283_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24283_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24322){var map__24323 = p__24322;var map__24323__$1 = ((cljs.core.seq_QMARK_.call(null,map__24323))?cljs.core.apply.call(null,cljs.core.hash_map,map__24323):map__24323);var top = cljs.core.get.call(null,map__24323__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24323__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24324 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24324,0,null);var init_top = cljs.core.nth.call(null,vec__24324,1,null);var vec__24325 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24325,0,null);var handle_top = cljs.core.nth.call(null,vec__24325,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24284_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24284_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24285_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24285_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24308){var self__ = this;
var _24308__$1 = this;return self__.meta24307;
});
ewen.dragdrop.examples.t24306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24308,meta24307__$1){var self__ = this;
var _24308__$1 = this;return (new ewen.dragdrop.examples.t24306(self__.owner,self__.cursor,self__.hook_draggable,meta24307__$1));
});
ewen.dragdrop.examples.__GT_t24306 = (function __GT_t24306(owner__$1,cursor__$1,hook_draggable__$1,meta24307){return (new ewen.dragdrop.examples.t24306(owner__$1,cursor__$1,hook_draggable__$1,meta24307));
});
}
return (new ewen.dragdrop.examples.t24306(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24328 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24328 = (function (owner,app,meta24329){
this.owner = owner;
this.app = app;
this.meta24329 = meta24329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24328.cljs$lang$type = true;
ewen.dragdrop.examples.t24328.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24328";
ewen.dragdrop.examples.t24328.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24328");
});
ewen.dragdrop.examples.t24328.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24328.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24330){var self__ = this;
var _24330__$1 = this;return self__.meta24329;
});
ewen.dragdrop.examples.t24328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24330,meta24329__$1){var self__ = this;
var _24330__$1 = this;return (new ewen.dragdrop.examples.t24328(self__.owner,self__.app,meta24329__$1));
});
ewen.dragdrop.examples.__GT_t24328 = (function __GT_t24328(owner__$1,app__$1,meta24329){return (new ewen.dragdrop.examples.t24328(owner__$1,app__$1,meta24329));
});
}
return (new ewen.dragdrop.examples.t24328(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24354 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24354 = (function (owner,cursor,long_press_draggable,meta24355){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta24355 = meta24355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24354.cljs$lang$type = true;
ewen.dragdrop.examples.t24354.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24354";
ewen.dragdrop.examples.t24354.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24354");
});
ewen.dragdrop.examples.t24354.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24354.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24357 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24357,0,null);var y = cljs.core.nth.call(null,vec__24357,1,null);var vec__24358 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24358,0,null);var h = cljs.core.nth.call(null,vec__24358,1,null);var obj24360 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24360;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24362 = {"position":"static","z-index":0};return obj24362;
})():null));return React.DOM.div((function (){var obj24364 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj24364;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t24354.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24354.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24354.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24354.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24374 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_24375 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24374);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24375);
var vec__24365 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24365,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24365,1,null);var vec__24366 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24366,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24366,1,null);var vec__24367 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24367,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24367,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24368){var map__24369 = p__24368;var map__24369__$1 = ((cljs.core.seq_QMARK_.call(null,map__24369))?cljs.core.apply.call(null,cljs.core.hash_map,map__24369):map__24369);var top = cljs.core.get.call(null,map__24369__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24369__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24331_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24331_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24370){var map__24371 = p__24370;var map__24371__$1 = ((cljs.core.seq_QMARK_.call(null,map__24371))?cljs.core.apply.call(null,cljs.core.hash_map,map__24371):map__24371);var top = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24372 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24372,0,null);var init_top = cljs.core.nth.call(null,vec__24372,1,null);var vec__24373 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24373,0,null);var handle_top = cljs.core.nth.call(null,vec__24373,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24332_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24332_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24333_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24333_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24356){var self__ = this;
var _24356__$1 = this;return self__.meta24355;
});
ewen.dragdrop.examples.t24354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24356,meta24355__$1){var self__ = this;
var _24356__$1 = this;return (new ewen.dragdrop.examples.t24354(self__.owner,self__.cursor,self__.long_press_draggable,meta24355__$1));
});
ewen.dragdrop.examples.__GT_t24354 = (function __GT_t24354(owner__$1,cursor__$1,long_press_draggable__$1,meta24355){return (new ewen.dragdrop.examples.t24354(owner__$1,cursor__$1,long_press_draggable__$1,meta24355));
});
}
return (new ewen.dragdrop.examples.t24354(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24376 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24376 = (function (owner,app,meta24377){
this.owner = owner;
this.app = app;
this.meta24377 = meta24377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24376.cljs$lang$type = true;
ewen.dragdrop.examples.t24376.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24376";
ewen.dragdrop.examples.t24376.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24376");
});
ewen.dragdrop.examples.t24376.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24376.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24378){var self__ = this;
var _24378__$1 = this;return self__.meta24377;
});
ewen.dragdrop.examples.t24376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24378,meta24377__$1){var self__ = this;
var _24378__$1 = this;return (new ewen.dragdrop.examples.t24376(self__.owner,self__.app,meta24377__$1));
});
ewen.dragdrop.examples.__GT_t24376 = (function __GT_t24376(owner__$1,app__$1,meta24377){return (new ewen.dragdrop.examples.t24376(owner__$1,app__$1,meta24377));
});
}
return (new ewen.dragdrop.examples.t24376(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map