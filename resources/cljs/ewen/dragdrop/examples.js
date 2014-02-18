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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t25970 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25970 = (function (owner,cursor,typical_draggable,meta25971){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta25971 = meta25971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25970.cljs$lang$type = true;
ewen.dragdrop.examples.t25970.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25970";
ewen.dragdrop.examples.t25970.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25970");
});
ewen.dragdrop.examples.t25970.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t25970.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__25973 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__25973,0,null);var y = cljs.core.nth.call(null,vec__25973,1,null);var vec__25974 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__25974,0,null);var h = cljs.core.nth.call(null,vec__25974,1,null);var obj25976 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj25976;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj25978 = {"position":"static","z-index":0};return obj25978;
})():null));return React.DOM.div((function (){var obj25980 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj25980;
})(),"Drag me!");
});
ewen.dragdrop.examples.t25970.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t25970.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t25970.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t25970.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_25990 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_25991 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_25990);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_25991);
var vec__25981 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__25981,0,null);var up_unlisten = cljs.core.nth.call(null,vec__25981,1,null);var vec__25982 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__25982,0,null);var down_unlisten = cljs.core.nth.call(null,vec__25982,1,null);var vec__25983 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__25983,0,null);var move_unlisten = cljs.core.nth.call(null,vec__25983,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__25945_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__25945_SHARP_)))].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__25946_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__25946_SHARP_).getBrowserEvent()))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__25984){var map__25985 = p__25984;var map__25985__$1 = ((cljs.core.seq_QMARK_.call(null,map__25985))?cljs.core.apply.call(null,cljs.core.hash_map,map__25985):map__25985);var top = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25947_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25947_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__25986){var map__25987 = p__25986;var map__25987__$1 = ((cljs.core.seq_QMARK_.call(null,map__25987))?cljs.core.apply.call(null,cljs.core.hash_map,map__25987):map__25987);var top = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__25988 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__25988,0,null);var init_top = cljs.core.nth.call(null,vec__25988,1,null);var vec__25989 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__25989,0,null);var handle_top = cljs.core.nth.call(null,vec__25989,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25948_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25948_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25949_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25949_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t25970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25972){var self__ = this;
var _25972__$1 = this;return self__.meta25971;
});
ewen.dragdrop.examples.t25970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25972,meta25971__$1){var self__ = this;
var _25972__$1 = this;return (new ewen.dragdrop.examples.t25970(self__.owner,self__.cursor,self__.typical_draggable,meta25971__$1));
});
ewen.dragdrop.examples.__GT_t25970 = (function __GT_t25970(owner__$1,cursor__$1,typical_draggable__$1,meta25971){return (new ewen.dragdrop.examples.t25970(owner__$1,cursor__$1,typical_draggable__$1,meta25971));
});
}
return (new ewen.dragdrop.examples.t25970(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t25992 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t25992 = (function (owner,app,meta25993){
this.owner = owner;
this.app = app;
this.meta25993 = meta25993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t25992.cljs$lang$type = true;
ewen.dragdrop.examples.t25992.cljs$lang$ctorStr = "ewen.dragdrop.examples/t25992";
ewen.dragdrop.examples.t25992.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t25992");
});
ewen.dragdrop.examples.t25992.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t25992.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t25992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25994){var self__ = this;
var _25994__$1 = this;return self__.meta25993;
});
ewen.dragdrop.examples.t25992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25994,meta25993__$1){var self__ = this;
var _25994__$1 = this;return (new ewen.dragdrop.examples.t25992(self__.owner,self__.app,meta25993__$1));
});
ewen.dragdrop.examples.__GT_t25992 = (function __GT_t25992(owner__$1,app__$1,meta25993){return (new ewen.dragdrop.examples.t25992(owner__$1,app__$1,meta25993));
});
}
return (new ewen.dragdrop.examples.t25992(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26018 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26018 = (function (owner,cursor,delayed_draggable,meta26019){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta26019 = meta26019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26018.cljs$lang$type = true;
ewen.dragdrop.examples.t26018.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26018";
ewen.dragdrop.examples.t26018.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26018");
});
ewen.dragdrop.examples.t26018.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26018.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26021 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26021,0,null);var y = cljs.core.nth.call(null,vec__26021,1,null);var vec__26022 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26022,0,null);var h = cljs.core.nth.call(null,vec__26022,1,null);var obj26024 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26024;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26026 = {"position":"static","z-index":0};return obj26026;
})():null));return React.DOM.div((function (){var obj26028 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj26028;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t26018.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26018.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26018.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26018.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26038 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_26039 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26038);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26039);
var vec__26029 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26029,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26029,1,null);var vec__26030 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26030,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26030,1,null);var vec__26031 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26031,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26031,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26032){var map__26033 = p__26032;var map__26033__$1 = ((cljs.core.seq_QMARK_.call(null,map__26033))?cljs.core.apply.call(null,cljs.core.hash_map,map__26033):map__26033);var top = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25995_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__25995_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26034){var map__26035 = p__26034;var map__26035__$1 = ((cljs.core.seq_QMARK_.call(null,map__26035))?cljs.core.apply.call(null,cljs.core.hash_map,map__26035):map__26035);var top = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26036 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26036,0,null);var init_top = cljs.core.nth.call(null,vec__26036,1,null);var vec__26037 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26037,0,null);var handle_top = cljs.core.nth.call(null,vec__26037,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25996_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__25996_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__25997_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__25997_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26020){var self__ = this;
var _26020__$1 = this;return self__.meta26019;
});
ewen.dragdrop.examples.t26018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26020,meta26019__$1){var self__ = this;
var _26020__$1 = this;return (new ewen.dragdrop.examples.t26018(self__.owner,self__.cursor,self__.delayed_draggable,meta26019__$1));
});
ewen.dragdrop.examples.__GT_t26018 = (function __GT_t26018(owner__$1,cursor__$1,delayed_draggable__$1,meta26019){return (new ewen.dragdrop.examples.t26018(owner__$1,cursor__$1,delayed_draggable__$1,meta26019));
});
}
return (new ewen.dragdrop.examples.t26018(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26040 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26040 = (function (owner,app,meta26041){
this.owner = owner;
this.app = app;
this.meta26041 = meta26041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26040.cljs$lang$type = true;
ewen.dragdrop.examples.t26040.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26040";
ewen.dragdrop.examples.t26040.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26040");
});
ewen.dragdrop.examples.t26040.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26040.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26042){var self__ = this;
var _26042__$1 = this;return self__.meta26041;
});
ewen.dragdrop.examples.t26040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26042,meta26041__$1){var self__ = this;
var _26042__$1 = this;return (new ewen.dragdrop.examples.t26040(self__.owner,self__.app,meta26041__$1));
});
ewen.dragdrop.examples.__GT_t26040 = (function __GT_t26040(owner__$1,app__$1,meta26041){return (new ewen.dragdrop.examples.t26040(owner__$1,app__$1,meta26041));
});
}
return (new ewen.dragdrop.examples.t26040(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26066 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26066 = (function (owner,cursor,hook_draggable,meta26067){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta26067 = meta26067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26066.cljs$lang$type = true;
ewen.dragdrop.examples.t26066.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26066";
ewen.dragdrop.examples.t26066.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26066");
});
ewen.dragdrop.examples.t26066.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26066.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26069 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26069,0,null);var y = cljs.core.nth.call(null,vec__26069,1,null);var vec__26070 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26070,0,null);var h = cljs.core.nth.call(null,vec__26070,1,null);var obj26072 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26072;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26074 = {"position":"static","z-index":0};return obj26074;
})():null));return React.DOM.div((function (){var obj26076 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj26076;
})(),"Drag me!");
});
ewen.dragdrop.examples.t26066.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26066.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26066.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26066.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26086 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_26087 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26086);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26087);
var vec__26077 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26077,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26077,1,null);var vec__26078 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26078,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26078,1,null);var vec__26079 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26079,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26079,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26080){var map__26081 = p__26080;var map__26081__$1 = ((cljs.core.seq_QMARK_.call(null,map__26081))?cljs.core.apply.call(null,cljs.core.hash_map,map__26081):map__26081);var top = cljs.core.get.call(null,map__26081__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26081__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26043_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__26043_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26082){var map__26083 = p__26082;var map__26083__$1 = ((cljs.core.seq_QMARK_.call(null,map__26083))?cljs.core.apply.call(null,cljs.core.hash_map,map__26083):map__26083);var top = cljs.core.get.call(null,map__26083__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26083__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26084 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26084,0,null);var init_top = cljs.core.nth.call(null,vec__26084,1,null);var vec__26085 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26085,0,null);var handle_top = cljs.core.nth.call(null,vec__26085,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26044_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__26044_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26045_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__26045_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26068){var self__ = this;
var _26068__$1 = this;return self__.meta26067;
});
ewen.dragdrop.examples.t26066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26068,meta26067__$1){var self__ = this;
var _26068__$1 = this;return (new ewen.dragdrop.examples.t26066(self__.owner,self__.cursor,self__.hook_draggable,meta26067__$1));
});
ewen.dragdrop.examples.__GT_t26066 = (function __GT_t26066(owner__$1,cursor__$1,hook_draggable__$1,meta26067){return (new ewen.dragdrop.examples.t26066(owner__$1,cursor__$1,hook_draggable__$1,meta26067));
});
}
return (new ewen.dragdrop.examples.t26066(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26088 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26088 = (function (owner,app,meta26089){
this.owner = owner;
this.app = app;
this.meta26089 = meta26089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26088.cljs$lang$type = true;
ewen.dragdrop.examples.t26088.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26088";
ewen.dragdrop.examples.t26088.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26088");
});
ewen.dragdrop.examples.t26088.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26088.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26090){var self__ = this;
var _26090__$1 = this;return self__.meta26089;
});
ewen.dragdrop.examples.t26088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26090,meta26089__$1){var self__ = this;
var _26090__$1 = this;return (new ewen.dragdrop.examples.t26088(self__.owner,self__.app,meta26089__$1));
});
ewen.dragdrop.examples.__GT_t26088 = (function __GT_t26088(owner__$1,app__$1,meta26089){return (new ewen.dragdrop.examples.t26088(owner__$1,app__$1,meta26089));
});
}
return (new ewen.dragdrop.examples.t26088(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26114 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26114 = (function (owner,cursor,long_press_draggable,meta26115){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta26115 = meta26115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26114.cljs$lang$type = true;
ewen.dragdrop.examples.t26114.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26114";
ewen.dragdrop.examples.t26114.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26114");
});
ewen.dragdrop.examples.t26114.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26114.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26117 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26117,0,null);var y = cljs.core.nth.call(null,vec__26117,1,null);var vec__26118 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26118,0,null);var h = cljs.core.nth.call(null,vec__26118,1,null);var obj26120 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26120;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26122 = {"position":"static","z-index":0};return obj26122;
})():null));return React.DOM.div((function (){var obj26124 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj26124;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t26114.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26114.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26114.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26114.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26134 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_26135 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26134);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26135);
var vec__26125 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26125,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26125,1,null);var vec__26126 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26126,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26126,1,null);var vec__26127 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26127,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26127,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26128){var map__26129 = p__26128;var map__26129__$1 = ((cljs.core.seq_QMARK_.call(null,map__26129))?cljs.core.apply.call(null,cljs.core.hash_map,map__26129):map__26129);var top = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26129__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26091_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__26091_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26130){var map__26131 = p__26130;var map__26131__$1 = ((cljs.core.seq_QMARK_.call(null,map__26131))?cljs.core.apply.call(null,cljs.core.hash_map,map__26131):map__26131);var top = cljs.core.get.call(null,map__26131__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26131__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26132 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26132,0,null);var init_top = cljs.core.nth.call(null,vec__26132,1,null);var vec__26133 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26133,0,null);var handle_top = cljs.core.nth.call(null,vec__26133,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26092_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__26092_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26093_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__26093_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26116){var self__ = this;
var _26116__$1 = this;return self__.meta26115;
});
ewen.dragdrop.examples.t26114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26116,meta26115__$1){var self__ = this;
var _26116__$1 = this;return (new ewen.dragdrop.examples.t26114(self__.owner,self__.cursor,self__.long_press_draggable,meta26115__$1));
});
ewen.dragdrop.examples.__GT_t26114 = (function __GT_t26114(owner__$1,cursor__$1,long_press_draggable__$1,meta26115){return (new ewen.dragdrop.examples.t26114(owner__$1,cursor__$1,long_press_draggable__$1,meta26115));
});
}
return (new ewen.dragdrop.examples.t26114(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26136 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26136 = (function (owner,app,meta26137){
this.owner = owner;
this.app = app;
this.meta26137 = meta26137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26136.cljs$lang$type = true;
ewen.dragdrop.examples.t26136.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26136";
ewen.dragdrop.examples.t26136.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26136");
});
ewen.dragdrop.examples.t26136.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26136.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26138){var self__ = this;
var _26138__$1 = this;return self__.meta26137;
});
ewen.dragdrop.examples.t26136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26138,meta26137__$1){var self__ = this;
var _26138__$1 = this;return (new ewen.dragdrop.examples.t26136(self__.owner,self__.app,meta26137__$1));
});
ewen.dragdrop.examples.__GT_t26136 = (function __GT_t26136(owner__$1,app__$1,meta26137){return (new ewen.dragdrop.examples.t26136(owner__$1,app__$1,meta26137));
});
}
return (new ewen.dragdrop.examples.t26136(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map