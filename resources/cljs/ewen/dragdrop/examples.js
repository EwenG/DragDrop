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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26164 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26164 = (function (owner,cursor,typical_draggable,meta26165){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta26165 = meta26165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26164.cljs$lang$type = true;
ewen.dragdrop.examples.t26164.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26164";
ewen.dragdrop.examples.t26164.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26164");
});
ewen.dragdrop.examples.t26164.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26164.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26167 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26167,0,null);var y = cljs.core.nth.call(null,vec__26167,1,null);var vec__26168 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26168,0,null);var h = cljs.core.nth.call(null,vec__26168,1,null);var obj26170 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26170;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26172 = {"position":"static","z-index":0};return obj26172;
})():null));return React.DOM.div((function (){var obj26174 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj26174;
})(),"Drag me!");
});
ewen.dragdrop.examples.t26164.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26164.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26164.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26164.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26184 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_26185 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26184);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26185);
var vec__26175 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26175,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26175,1,null);var vec__26176 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26176,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26176,1,null);var vec__26177 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26177,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26177,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__26139_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__26139_SHARP_)))].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__26140_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__26140_SHARP_).getBrowserEvent().changedTouches.item(0).pageX)].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26178){var map__26179 = p__26178;var map__26179__$1 = ((cljs.core.seq_QMARK_.call(null,map__26179))?cljs.core.apply.call(null,cljs.core.hash_map,map__26179):map__26179);var top = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26141_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__26141_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26180){var map__26181 = p__26180;var map__26181__$1 = ((cljs.core.seq_QMARK_.call(null,map__26181))?cljs.core.apply.call(null,cljs.core.hash_map,map__26181):map__26181);var top = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26182 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26182,0,null);var init_top = cljs.core.nth.call(null,vec__26182,1,null);var vec__26183 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26183,0,null);var handle_top = cljs.core.nth.call(null,vec__26183,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26142_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__26142_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26143_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__26143_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26166){var self__ = this;
var _26166__$1 = this;return self__.meta26165;
});
ewen.dragdrop.examples.t26164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26166,meta26165__$1){var self__ = this;
var _26166__$1 = this;return (new ewen.dragdrop.examples.t26164(self__.owner,self__.cursor,self__.typical_draggable,meta26165__$1));
});
ewen.dragdrop.examples.__GT_t26164 = (function __GT_t26164(owner__$1,cursor__$1,typical_draggable__$1,meta26165){return (new ewen.dragdrop.examples.t26164(owner__$1,cursor__$1,typical_draggable__$1,meta26165));
});
}
return (new ewen.dragdrop.examples.t26164(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26186 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26186 = (function (owner,app,meta26187){
this.owner = owner;
this.app = app;
this.meta26187 = meta26187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26186.cljs$lang$type = true;
ewen.dragdrop.examples.t26186.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26186";
ewen.dragdrop.examples.t26186.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26186");
});
ewen.dragdrop.examples.t26186.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26186.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26188){var self__ = this;
var _26188__$1 = this;return self__.meta26187;
});
ewen.dragdrop.examples.t26186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26188,meta26187__$1){var self__ = this;
var _26188__$1 = this;return (new ewen.dragdrop.examples.t26186(self__.owner,self__.app,meta26187__$1));
});
ewen.dragdrop.examples.__GT_t26186 = (function __GT_t26186(owner__$1,app__$1,meta26187){return (new ewen.dragdrop.examples.t26186(owner__$1,app__$1,meta26187));
});
}
return (new ewen.dragdrop.examples.t26186(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26212 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26212 = (function (owner,cursor,delayed_draggable,meta26213){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta26213 = meta26213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26212.cljs$lang$type = true;
ewen.dragdrop.examples.t26212.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26212";
ewen.dragdrop.examples.t26212.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26212");
});
ewen.dragdrop.examples.t26212.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26212.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26215 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26215,0,null);var y = cljs.core.nth.call(null,vec__26215,1,null);var vec__26216 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26216,0,null);var h = cljs.core.nth.call(null,vec__26216,1,null);var obj26218 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26218;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26220 = {"position":"static","z-index":0};return obj26220;
})():null));return React.DOM.div((function (){var obj26222 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj26222;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t26212.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26212.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26212.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26212.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26232 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_26233 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26232);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26233);
var vec__26223 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26223,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26223,1,null);var vec__26224 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26224,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26224,1,null);var vec__26225 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26225,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26225,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26226){var map__26227 = p__26226;var map__26227__$1 = ((cljs.core.seq_QMARK_.call(null,map__26227))?cljs.core.apply.call(null,cljs.core.hash_map,map__26227):map__26227);var top = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26189_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__26189_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26228){var map__26229 = p__26228;var map__26229__$1 = ((cljs.core.seq_QMARK_.call(null,map__26229))?cljs.core.apply.call(null,cljs.core.hash_map,map__26229):map__26229);var top = cljs.core.get.call(null,map__26229__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26229__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26230 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26230,0,null);var init_top = cljs.core.nth.call(null,vec__26230,1,null);var vec__26231 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26231,0,null);var handle_top = cljs.core.nth.call(null,vec__26231,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26190_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__26190_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26191_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__26191_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26214){var self__ = this;
var _26214__$1 = this;return self__.meta26213;
});
ewen.dragdrop.examples.t26212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26214,meta26213__$1){var self__ = this;
var _26214__$1 = this;return (new ewen.dragdrop.examples.t26212(self__.owner,self__.cursor,self__.delayed_draggable,meta26213__$1));
});
ewen.dragdrop.examples.__GT_t26212 = (function __GT_t26212(owner__$1,cursor__$1,delayed_draggable__$1,meta26213){return (new ewen.dragdrop.examples.t26212(owner__$1,cursor__$1,delayed_draggable__$1,meta26213));
});
}
return (new ewen.dragdrop.examples.t26212(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26234 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26234 = (function (owner,app,meta26235){
this.owner = owner;
this.app = app;
this.meta26235 = meta26235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26234.cljs$lang$type = true;
ewen.dragdrop.examples.t26234.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26234";
ewen.dragdrop.examples.t26234.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26234");
});
ewen.dragdrop.examples.t26234.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26234.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26236){var self__ = this;
var _26236__$1 = this;return self__.meta26235;
});
ewen.dragdrop.examples.t26234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26236,meta26235__$1){var self__ = this;
var _26236__$1 = this;return (new ewen.dragdrop.examples.t26234(self__.owner,self__.app,meta26235__$1));
});
ewen.dragdrop.examples.__GT_t26234 = (function __GT_t26234(owner__$1,app__$1,meta26235){return (new ewen.dragdrop.examples.t26234(owner__$1,app__$1,meta26235));
});
}
return (new ewen.dragdrop.examples.t26234(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26260 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26260 = (function (owner,cursor,hook_draggable,meta26261){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta26261 = meta26261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26260.cljs$lang$type = true;
ewen.dragdrop.examples.t26260.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26260";
ewen.dragdrop.examples.t26260.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26260");
});
ewen.dragdrop.examples.t26260.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26260.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26263 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26263,0,null);var y = cljs.core.nth.call(null,vec__26263,1,null);var vec__26264 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26264,0,null);var h = cljs.core.nth.call(null,vec__26264,1,null);var obj26266 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26266;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26268 = {"position":"static","z-index":0};return obj26268;
})():null));return React.DOM.div((function (){var obj26270 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj26270;
})(),"Drag me!");
});
ewen.dragdrop.examples.t26260.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26260.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26260.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26260.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26280 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_26281 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26280);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26281);
var vec__26271 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26271,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26271,1,null);var vec__26272 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26272,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26272,1,null);var vec__26273 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26273,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26273,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26274){var map__26275 = p__26274;var map__26275__$1 = ((cljs.core.seq_QMARK_.call(null,map__26275))?cljs.core.apply.call(null,cljs.core.hash_map,map__26275):map__26275);var top = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26237_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__26237_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26276){var map__26277 = p__26276;var map__26277__$1 = ((cljs.core.seq_QMARK_.call(null,map__26277))?cljs.core.apply.call(null,cljs.core.hash_map,map__26277):map__26277);var top = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26278 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26278,0,null);var init_top = cljs.core.nth.call(null,vec__26278,1,null);var vec__26279 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26279,0,null);var handle_top = cljs.core.nth.call(null,vec__26279,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26238_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__26238_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26239_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__26239_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26262){var self__ = this;
var _26262__$1 = this;return self__.meta26261;
});
ewen.dragdrop.examples.t26260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26262,meta26261__$1){var self__ = this;
var _26262__$1 = this;return (new ewen.dragdrop.examples.t26260(self__.owner,self__.cursor,self__.hook_draggable,meta26261__$1));
});
ewen.dragdrop.examples.__GT_t26260 = (function __GT_t26260(owner__$1,cursor__$1,hook_draggable__$1,meta26261){return (new ewen.dragdrop.examples.t26260(owner__$1,cursor__$1,hook_draggable__$1,meta26261));
});
}
return (new ewen.dragdrop.examples.t26260(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26282 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26282 = (function (owner,app,meta26283){
this.owner = owner;
this.app = app;
this.meta26283 = meta26283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26282.cljs$lang$type = true;
ewen.dragdrop.examples.t26282.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26282";
ewen.dragdrop.examples.t26282.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26282");
});
ewen.dragdrop.examples.t26282.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26282.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26284){var self__ = this;
var _26284__$1 = this;return self__.meta26283;
});
ewen.dragdrop.examples.t26282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26284,meta26283__$1){var self__ = this;
var _26284__$1 = this;return (new ewen.dragdrop.examples.t26282(self__.owner,self__.app,meta26283__$1));
});
ewen.dragdrop.examples.__GT_t26282 = (function __GT_t26282(owner__$1,app__$1,meta26283){return (new ewen.dragdrop.examples.t26282(owner__$1,app__$1,meta26283));
});
}
return (new ewen.dragdrop.examples.t26282(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t26308 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26308 = (function (owner,cursor,long_press_draggable,meta26309){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta26309 = meta26309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26308.cljs$lang$type = true;
ewen.dragdrop.examples.t26308.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26308";
ewen.dragdrop.examples.t26308.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26308");
});
ewen.dragdrop.examples.t26308.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t26308.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__26311 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__26311,0,null);var y = cljs.core.nth.call(null,vec__26311,1,null);var vec__26312 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__26312,0,null);var h = cljs.core.nth.call(null,vec__26312,1,null);var obj26314 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj26314;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj26316 = {"position":"static","z-index":0};return obj26316;
})():null));return React.DOM.div((function (){var obj26318 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj26318;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t26308.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t26308.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t26308.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t26308.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_26328 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_26329 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_26328);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_26329);
var vec__26319 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__26319,0,null);var up_unlisten = cljs.core.nth.call(null,vec__26319,1,null);var vec__26320 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__26320,0,null);var down_unlisten = cljs.core.nth.call(null,vec__26320,1,null);var vec__26321 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__26321,0,null);var move_unlisten = cljs.core.nth.call(null,vec__26321,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__26322){var map__26323 = p__26322;var map__26323__$1 = ((cljs.core.seq_QMARK_.call(null,map__26323))?cljs.core.apply.call(null,cljs.core.hash_map,map__26323):map__26323);var top = cljs.core.get.call(null,map__26323__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26323__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26285_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__26285_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__26324){var map__26325 = p__26324;var map__26325__$1 = ((cljs.core.seq_QMARK_.call(null,map__26325))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);var top = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__26326 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__26326,0,null);var init_top = cljs.core.nth.call(null,vec__26326,1,null);var vec__26327 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__26327,0,null);var handle_top = cljs.core.nth.call(null,vec__26327,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26286_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__26286_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__26287_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__26287_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t26308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26310){var self__ = this;
var _26310__$1 = this;return self__.meta26309;
});
ewen.dragdrop.examples.t26308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26310,meta26309__$1){var self__ = this;
var _26310__$1 = this;return (new ewen.dragdrop.examples.t26308(self__.owner,self__.cursor,self__.long_press_draggable,meta26309__$1));
});
ewen.dragdrop.examples.__GT_t26308 = (function __GT_t26308(owner__$1,cursor__$1,long_press_draggable__$1,meta26309){return (new ewen.dragdrop.examples.t26308(owner__$1,cursor__$1,long_press_draggable__$1,meta26309));
});
}
return (new ewen.dragdrop.examples.t26308(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t26330 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t26330 = (function (owner,app,meta26331){
this.owner = owner;
this.app = app;
this.meta26331 = meta26331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t26330.cljs$lang$type = true;
ewen.dragdrop.examples.t26330.cljs$lang$ctorStr = "ewen.dragdrop.examples/t26330";
ewen.dragdrop.examples.t26330.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t26330");
});
ewen.dragdrop.examples.t26330.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t26330.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t26330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26332){var self__ = this;
var _26332__$1 = this;return self__.meta26331;
});
ewen.dragdrop.examples.t26330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26332,meta26331__$1){var self__ = this;
var _26332__$1 = this;return (new ewen.dragdrop.examples.t26330(self__.owner,self__.app,meta26331__$1));
});
ewen.dragdrop.examples.__GT_t26330 = (function __GT_t26330(owner__$1,app__$1,meta26331){return (new ewen.dragdrop.examples.t26330(owner__$1,app__$1,meta26331));
});
}
return (new ewen.dragdrop.examples.t26330(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map