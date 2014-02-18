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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25182 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25182 = (function (owner,cursor,typical_draggable,meta25183){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta25183 = meta25183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25182.cljs$lang$type = true;
ewen.dragdrop.examples.t25182.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25182";
ewen.dragdrop.examples.t25182.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25182");
});
ewen.dragdrop.examples.t25182.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25182.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25185 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25185,0,null);var y = cljs.core.nth.call(null,vec__25185,1,null);var vec__25186 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25186,0,null);var h = cljs.core.nth.call(null,vec__25186,1,null);var obj25188 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25188;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25190 = {"position":"static","z-index":0};return obj25190;
})():null));return React.DOM.div((function (){var obj25192 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj25192;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25182.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25182.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25182.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25182.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25202 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_25203 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25202);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25203);
var vec__25193 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25193,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25193,1,null);var vec__25194 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25194,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25194,1,null);var vec__25195 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25195,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25195,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__25154_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25154_SHARP_).pageX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25155_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__25155_SHARP_)))].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25156_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25156_SHARP_).clientX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25157_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25157_SHARP_).offsetX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25158_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__25158_SHARP_).screenX)].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25196){var map__25197 = p__25196;var map__25197__$1 = ((cljs.core.seq_QMARK_.call(null,map__25197))?cljs.core.apply.call(null,cljs.core.hash_map,map__25197):map__25197);var top = cljs.core.get.call(null,map__25197__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25197__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25159_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25159_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25198){var map__25199 = p__25198;var map__25199__$1 = ((cljs.core.seq_QMARK_.call(null,map__25199))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);var top = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25200 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25200,0,null);var init_top = cljs.core.nth.call(null,vec__25200,1,null);var vec__25201 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25201,0,null);var handle_top = cljs.core.nth.call(null,vec__25201,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25160_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25161_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25161_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25184){var self__ = this;
var _25184__$1 = this;return self__.meta25183;
});
ewen.dragdrop.examples.t25182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25184,meta25183__$1){var self__ = this;
var _25184__$1 = this;return (new ewen.dragdrop.examples.t25182(self__.owner,self__.cursor,self__.typical_draggable,meta25183__$1));
});
ewen.dragdrop.examples.__GT_t25182 = (function __GT_t25182(owner__$1,cursor__$1,typical_draggable__$1,meta25183){return (new ewen.dragdrop.examples.t25182(owner__$1,cursor__$1,typical_draggable__$1,meta25183));
});
}
return (new ewen.dragdrop.examples.t25182(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25204 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25204 = (function (owner,app,meta25205){
this.owner = owner;
this.app = app;
this.meta25205 = meta25205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25204.cljs$lang$type = true;
ewen.dragdrop.examples.t25204.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25204";
ewen.dragdrop.examples.t25204.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25204");
});
ewen.dragdrop.examples.t25204.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25204.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25206){var self__ = this;
var _25206__$1 = this;return self__.meta25205;
});
ewen.dragdrop.examples.t25204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25206,meta25205__$1){var self__ = this;
var _25206__$1 = this;return (new ewen.dragdrop.examples.t25204(self__.owner,self__.app,meta25205__$1));
});
ewen.dragdrop.examples.__GT_t25204 = (function __GT_t25204(owner__$1,app__$1,meta25205){return (new ewen.dragdrop.examples.t25204(owner__$1,app__$1,meta25205));
});
}
return (new ewen.dragdrop.examples.t25204(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25230 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25230 = (function (owner,cursor,delayed_draggable,meta25231){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta25231 = meta25231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25230.cljs$lang$type = true;
ewen.dragdrop.examples.t25230.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25230";
ewen.dragdrop.examples.t25230.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25230");
});
ewen.dragdrop.examples.t25230.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25230.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25233 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25233,0,null);var y = cljs.core.nth.call(null,vec__25233,1,null);var vec__25234 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25234,0,null);var h = cljs.core.nth.call(null,vec__25234,1,null);var obj25236 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25236;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25238 = {"position":"static","z-index":0};return obj25238;
})():null));return React.DOM.div((function (){var obj25240 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj25240;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t25230.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25230.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25230.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25230.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25250 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_25251 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25250);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25251);
var vec__25241 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25241,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25241,1,null);var vec__25242 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25242,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25242,1,null);var vec__25243 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25243,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25243,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25244){var map__25245 = p__25244;var map__25245__$1 = ((cljs.core.seq_QMARK_.call(null,map__25245))?cljs.core.apply.call(null,cljs.core.hash_map,map__25245):map__25245);var top = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25207_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25207_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25246){var map__25247 = p__25246;var map__25247__$1 = ((cljs.core.seq_QMARK_.call(null,map__25247))?cljs.core.apply.call(null,cljs.core.hash_map,map__25247):map__25247);var top = cljs.core.get.call(null,map__25247__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25247__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25248 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25248,0,null);var init_top = cljs.core.nth.call(null,vec__25248,1,null);var vec__25249 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25249,0,null);var handle_top = cljs.core.nth.call(null,vec__25249,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25208_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25208_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25209_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25209_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25232){var self__ = this;
var _25232__$1 = this;return self__.meta25231;
});
ewen.dragdrop.examples.t25230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25232,meta25231__$1){var self__ = this;
var _25232__$1 = this;return (new ewen.dragdrop.examples.t25230(self__.owner,self__.cursor,self__.delayed_draggable,meta25231__$1));
});
ewen.dragdrop.examples.__GT_t25230 = (function __GT_t25230(owner__$1,cursor__$1,delayed_draggable__$1,meta25231){return (new ewen.dragdrop.examples.t25230(owner__$1,cursor__$1,delayed_draggable__$1,meta25231));
});
}
return (new ewen.dragdrop.examples.t25230(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25252 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25252 = (function (owner,app,meta25253){
this.owner = owner;
this.app = app;
this.meta25253 = meta25253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25252.cljs$lang$type = true;
ewen.dragdrop.examples.t25252.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25252";
ewen.dragdrop.examples.t25252.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25252");
});
ewen.dragdrop.examples.t25252.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25252.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25254){var self__ = this;
var _25254__$1 = this;return self__.meta25253;
});
ewen.dragdrop.examples.t25252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25254,meta25253__$1){var self__ = this;
var _25254__$1 = this;return (new ewen.dragdrop.examples.t25252(self__.owner,self__.app,meta25253__$1));
});
ewen.dragdrop.examples.__GT_t25252 = (function __GT_t25252(owner__$1,app__$1,meta25253){return (new ewen.dragdrop.examples.t25252(owner__$1,app__$1,meta25253));
});
}
return (new ewen.dragdrop.examples.t25252(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25278 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25278 = (function (owner,cursor,hook_draggable,meta25279){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta25279 = meta25279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25278.cljs$lang$type = true;
ewen.dragdrop.examples.t25278.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25278";
ewen.dragdrop.examples.t25278.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25278");
});
ewen.dragdrop.examples.t25278.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25278.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25281 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25281,0,null);var y = cljs.core.nth.call(null,vec__25281,1,null);var vec__25282 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25282,0,null);var h = cljs.core.nth.call(null,vec__25282,1,null);var obj25284 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25284;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25286 = {"position":"static","z-index":0};return obj25286;
})():null));return React.DOM.div((function (){var obj25288 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj25288;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25278.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25278.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25278.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25278.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25298 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_25299 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25298);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25299);
var vec__25289 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25289,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25289,1,null);var vec__25290 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25290,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25290,1,null);var vec__25291 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25291,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25291,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25292){var map__25293 = p__25292;var map__25293__$1 = ((cljs.core.seq_QMARK_.call(null,map__25293))?cljs.core.apply.call(null,cljs.core.hash_map,map__25293):map__25293);var top = cljs.core.get.call(null,map__25293__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25293__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25255_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25255_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25294){var map__25295 = p__25294;var map__25295__$1 = ((cljs.core.seq_QMARK_.call(null,map__25295))?cljs.core.apply.call(null,cljs.core.hash_map,map__25295):map__25295);var top = cljs.core.get.call(null,map__25295__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25295__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25296 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25296,0,null);var init_top = cljs.core.nth.call(null,vec__25296,1,null);var vec__25297 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25297,0,null);var handle_top = cljs.core.nth.call(null,vec__25297,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25256_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25256_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25257_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25257_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25280){var self__ = this;
var _25280__$1 = this;return self__.meta25279;
});
ewen.dragdrop.examples.t25278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25280,meta25279__$1){var self__ = this;
var _25280__$1 = this;return (new ewen.dragdrop.examples.t25278(self__.owner,self__.cursor,self__.hook_draggable,meta25279__$1));
});
ewen.dragdrop.examples.__GT_t25278 = (function __GT_t25278(owner__$1,cursor__$1,hook_draggable__$1,meta25279){return (new ewen.dragdrop.examples.t25278(owner__$1,cursor__$1,hook_draggable__$1,meta25279));
});
}
return (new ewen.dragdrop.examples.t25278(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25300 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25300 = (function (owner,app,meta25301){
this.owner = owner;
this.app = app;
this.meta25301 = meta25301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25300.cljs$lang$type = true;
ewen.dragdrop.examples.t25300.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25300";
ewen.dragdrop.examples.t25300.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25300");
});
ewen.dragdrop.examples.t25300.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25300.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25302){var self__ = this;
var _25302__$1 = this;return self__.meta25301;
});
ewen.dragdrop.examples.t25300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25302,meta25301__$1){var self__ = this;
var _25302__$1 = this;return (new ewen.dragdrop.examples.t25300(self__.owner,self__.app,meta25301__$1));
});
ewen.dragdrop.examples.__GT_t25300 = (function __GT_t25300(owner__$1,app__$1,meta25301){return (new ewen.dragdrop.examples.t25300(owner__$1,app__$1,meta25301));
});
}
return (new ewen.dragdrop.examples.t25300(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25326 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25326 = (function (owner,cursor,long_press_draggable,meta25327){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta25327 = meta25327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25326.cljs$lang$type = true;
ewen.dragdrop.examples.t25326.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25326";
ewen.dragdrop.examples.t25326.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25326");
});
ewen.dragdrop.examples.t25326.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25326.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25329 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25329,0,null);var y = cljs.core.nth.call(null,vec__25329,1,null);var vec__25330 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25330,0,null);var h = cljs.core.nth.call(null,vec__25330,1,null);var obj25332 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25332;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25334 = {"position":"static","z-index":0};return obj25334;
})():null));return React.DOM.div((function (){var obj25336 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj25336;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t25326.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25326.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25326.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25326.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25346 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_25347 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25346);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25347);
var vec__25337 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25337,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25337,1,null);var vec__25338 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25338,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25338,1,null);var vec__25339 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25339,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25339,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25340){var map__25341 = p__25340;var map__25341__$1 = ((cljs.core.seq_QMARK_.call(null,map__25341))?cljs.core.apply.call(null,cljs.core.hash_map,map__25341):map__25341);var top = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25303_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25303_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25342){var map__25343 = p__25342;var map__25343__$1 = ((cljs.core.seq_QMARK_.call(null,map__25343))?cljs.core.apply.call(null,cljs.core.hash_map,map__25343):map__25343);var top = cljs.core.get.call(null,map__25343__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25343__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25344 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25344,0,null);var init_top = cljs.core.nth.call(null,vec__25344,1,null);var vec__25345 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25345,0,null);var handle_top = cljs.core.nth.call(null,vec__25345,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25304_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25304_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25305_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25305_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25328){var self__ = this;
var _25328__$1 = this;return self__.meta25327;
});
ewen.dragdrop.examples.t25326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25328,meta25327__$1){var self__ = this;
var _25328__$1 = this;return (new ewen.dragdrop.examples.t25326(self__.owner,self__.cursor,self__.long_press_draggable,meta25327__$1));
});
ewen.dragdrop.examples.__GT_t25326 = (function __GT_t25326(owner__$1,cursor__$1,long_press_draggable__$1,meta25327){return (new ewen.dragdrop.examples.t25326(owner__$1,cursor__$1,long_press_draggable__$1,meta25327));
});
}
return (new ewen.dragdrop.examples.t25326(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25348 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25348 = (function (owner,app,meta25349){
this.owner = owner;
this.app = app;
this.meta25349 = meta25349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25348.cljs$lang$type = true;
ewen.dragdrop.examples.t25348.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25348";
ewen.dragdrop.examples.t25348.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25348");
});
ewen.dragdrop.examples.t25348.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25348.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25350){var self__ = this;
var _25350__$1 = this;return self__.meta25349;
});
ewen.dragdrop.examples.t25348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25350,meta25349__$1){var self__ = this;
var _25350__$1 = this;return (new ewen.dragdrop.examples.t25348(self__.owner,self__.app,meta25349__$1));
});
ewen.dragdrop.examples.__GT_t25348 = (function __GT_t25348(owner__$1,app__$1,meta25349){return (new ewen.dragdrop.examples.t25348(owner__$1,app__$1,meta25349));
});
}
return (new ewen.dragdrop.examples.t25348(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map