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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21097 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21097 = (function (owner,cursor,typical_draggable,meta21098){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta21098 = meta21098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21097.cljs$lang$type = true;
ewen.dragdrop.examples.t21097.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21097";
ewen.dragdrop.examples.t21097.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21097");
});
ewen.dragdrop.examples.t21097.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21097.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21100 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21100,0,null);var y = cljs.core.nth.call(null,vec__21100,1,null);var vec__21101 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21101,0,null);var h = cljs.core.nth.call(null,vec__21101,1,null);var obj21103 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21103;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21105 = {"position":"static","z-index":0};return obj21105;
})():null));return React.DOM.div((function (){var obj21107 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj21107;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21097.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21097.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21097.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21097.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21117 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_21118 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21117);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21118);
var vec__21108 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21108,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21108,1,null);var vec__21109 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21109,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21109,1,null);var vec__21110 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21110,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21110,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,cljs.core.prn,move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21111){var map__21112 = p__21111;var map__21112__$1 = ((cljs.core.seq_QMARK_.call(null,map__21112))?cljs.core.apply.call(null,cljs.core.hash_map,map__21112):map__21112);var top = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21074_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21074_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21113){var map__21114 = p__21113;var map__21114__$1 = ((cljs.core.seq_QMARK_.call(null,map__21114))?cljs.core.apply.call(null,cljs.core.hash_map,map__21114):map__21114);var top = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21114__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21115 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21115,0,null);var init_top = cljs.core.nth.call(null,vec__21115,1,null);var vec__21116 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21116,0,null);var handle_top = cljs.core.nth.call(null,vec__21116,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21075_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21075_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21076_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21076_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21099){var self__ = this;
var _21099__$1 = this;return self__.meta21098;
});
ewen.dragdrop.examples.t21097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21099,meta21098__$1){var self__ = this;
var _21099__$1 = this;return (new ewen.dragdrop.examples.t21097(self__.owner,self__.cursor,self__.typical_draggable,meta21098__$1));
});
ewen.dragdrop.examples.__GT_t21097 = (function __GT_t21097(owner__$1,cursor__$1,typical_draggable__$1,meta21098){return (new ewen.dragdrop.examples.t21097(owner__$1,cursor__$1,typical_draggable__$1,meta21098));
});
}
return (new ewen.dragdrop.examples.t21097(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21119 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21119 = (function (owner,app,meta21120){
this.owner = owner;
this.app = app;
this.meta21120 = meta21120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21119.cljs$lang$type = true;
ewen.dragdrop.examples.t21119.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21119";
ewen.dragdrop.examples.t21119.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21119");
});
ewen.dragdrop.examples.t21119.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21119.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21121){var self__ = this;
var _21121__$1 = this;return self__.meta21120;
});
ewen.dragdrop.examples.t21119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21121,meta21120__$1){var self__ = this;
var _21121__$1 = this;return (new ewen.dragdrop.examples.t21119(self__.owner,self__.app,meta21120__$1));
});
ewen.dragdrop.examples.__GT_t21119 = (function __GT_t21119(owner__$1,app__$1,meta21120){return (new ewen.dragdrop.examples.t21119(owner__$1,app__$1,meta21120));
});
}
return (new ewen.dragdrop.examples.t21119(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21145 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21145 = (function (owner,cursor,delayed_draggable,meta21146){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta21146 = meta21146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21145.cljs$lang$type = true;
ewen.dragdrop.examples.t21145.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21145";
ewen.dragdrop.examples.t21145.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21145");
});
ewen.dragdrop.examples.t21145.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21145.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21148 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21148,0,null);var y = cljs.core.nth.call(null,vec__21148,1,null);var vec__21149 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21149,0,null);var h = cljs.core.nth.call(null,vec__21149,1,null);var obj21151 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21151;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21153 = {"position":"static","z-index":0};return obj21153;
})():null));return React.DOM.div((function (){var obj21155 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj21155;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t21145.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21145.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21145.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21145.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21165 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_21166 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21165);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21166);
var vec__21156 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21156,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21156,1,null);var vec__21157 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21157,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21157,1,null);var vec__21158 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21158,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21158,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21159){var map__21160 = p__21159;var map__21160__$1 = ((cljs.core.seq_QMARK_.call(null,map__21160))?cljs.core.apply.call(null,cljs.core.hash_map,map__21160):map__21160);var top = cljs.core.get.call(null,map__21160__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21160__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21122_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21122_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21161){var map__21162 = p__21161;var map__21162__$1 = ((cljs.core.seq_QMARK_.call(null,map__21162))?cljs.core.apply.call(null,cljs.core.hash_map,map__21162):map__21162);var top = cljs.core.get.call(null,map__21162__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21162__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21163 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21163,0,null);var init_top = cljs.core.nth.call(null,vec__21163,1,null);var vec__21164 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21164,0,null);var handle_top = cljs.core.nth.call(null,vec__21164,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21123_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21123_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21124_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21124_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21147){var self__ = this;
var _21147__$1 = this;return self__.meta21146;
});
ewen.dragdrop.examples.t21145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21147,meta21146__$1){var self__ = this;
var _21147__$1 = this;return (new ewen.dragdrop.examples.t21145(self__.owner,self__.cursor,self__.delayed_draggable,meta21146__$1));
});
ewen.dragdrop.examples.__GT_t21145 = (function __GT_t21145(owner__$1,cursor__$1,delayed_draggable__$1,meta21146){return (new ewen.dragdrop.examples.t21145(owner__$1,cursor__$1,delayed_draggable__$1,meta21146));
});
}
return (new ewen.dragdrop.examples.t21145(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21167 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21167 = (function (owner,app,meta21168){
this.owner = owner;
this.app = app;
this.meta21168 = meta21168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21167.cljs$lang$type = true;
ewen.dragdrop.examples.t21167.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21167";
ewen.dragdrop.examples.t21167.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21167");
});
ewen.dragdrop.examples.t21167.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21167.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21169){var self__ = this;
var _21169__$1 = this;return self__.meta21168;
});
ewen.dragdrop.examples.t21167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21169,meta21168__$1){var self__ = this;
var _21169__$1 = this;return (new ewen.dragdrop.examples.t21167(self__.owner,self__.app,meta21168__$1));
});
ewen.dragdrop.examples.__GT_t21167 = (function __GT_t21167(owner__$1,app__$1,meta21168){return (new ewen.dragdrop.examples.t21167(owner__$1,app__$1,meta21168));
});
}
return (new ewen.dragdrop.examples.t21167(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21193 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21193 = (function (owner,cursor,hook_draggable,meta21194){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta21194 = meta21194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21193.cljs$lang$type = true;
ewen.dragdrop.examples.t21193.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21193";
ewen.dragdrop.examples.t21193.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21193");
});
ewen.dragdrop.examples.t21193.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21193.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21196 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21196,0,null);var y = cljs.core.nth.call(null,vec__21196,1,null);var vec__21197 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21197,0,null);var h = cljs.core.nth.call(null,vec__21197,1,null);var obj21199 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21199;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21201 = {"position":"static","z-index":0};return obj21201;
})():null));return React.DOM.div((function (){var obj21203 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj21203;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21193.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21193.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21193.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21193.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21213 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_21214 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21213);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21214);
var vec__21204 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21204,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21204,1,null);var vec__21205 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21205,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21205,1,null);var vec__21206 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21206,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21206,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21207){var map__21208 = p__21207;var map__21208__$1 = ((cljs.core.seq_QMARK_.call(null,map__21208))?cljs.core.apply.call(null,cljs.core.hash_map,map__21208):map__21208);var top = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21170_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21170_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21209){var map__21210 = p__21209;var map__21210__$1 = ((cljs.core.seq_QMARK_.call(null,map__21210))?cljs.core.apply.call(null,cljs.core.hash_map,map__21210):map__21210);var top = cljs.core.get.call(null,map__21210__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21210__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21211 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21211,0,null);var init_top = cljs.core.nth.call(null,vec__21211,1,null);var vec__21212 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21212,0,null);var handle_top = cljs.core.nth.call(null,vec__21212,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21171_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21171_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21172_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21172_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21195){var self__ = this;
var _21195__$1 = this;return self__.meta21194;
});
ewen.dragdrop.examples.t21193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21195,meta21194__$1){var self__ = this;
var _21195__$1 = this;return (new ewen.dragdrop.examples.t21193(self__.owner,self__.cursor,self__.hook_draggable,meta21194__$1));
});
ewen.dragdrop.examples.__GT_t21193 = (function __GT_t21193(owner__$1,cursor__$1,hook_draggable__$1,meta21194){return (new ewen.dragdrop.examples.t21193(owner__$1,cursor__$1,hook_draggable__$1,meta21194));
});
}
return (new ewen.dragdrop.examples.t21193(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21215 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21215 = (function (owner,app,meta21216){
this.owner = owner;
this.app = app;
this.meta21216 = meta21216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21215.cljs$lang$type = true;
ewen.dragdrop.examples.t21215.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21215";
ewen.dragdrop.examples.t21215.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21215");
});
ewen.dragdrop.examples.t21215.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21215.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21217){var self__ = this;
var _21217__$1 = this;return self__.meta21216;
});
ewen.dragdrop.examples.t21215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21217,meta21216__$1){var self__ = this;
var _21217__$1 = this;return (new ewen.dragdrop.examples.t21215(self__.owner,self__.app,meta21216__$1));
});
ewen.dragdrop.examples.__GT_t21215 = (function __GT_t21215(owner__$1,app__$1,meta21216){return (new ewen.dragdrop.examples.t21215(owner__$1,app__$1,meta21216));
});
}
return (new ewen.dragdrop.examples.t21215(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21241 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21241 = (function (owner,cursor,long_press_draggable,meta21242){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta21242 = meta21242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21241.cljs$lang$type = true;
ewen.dragdrop.examples.t21241.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21241";
ewen.dragdrop.examples.t21241.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21241");
});
ewen.dragdrop.examples.t21241.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21241.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21244 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21244,0,null);var y = cljs.core.nth.call(null,vec__21244,1,null);var vec__21245 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21245,0,null);var h = cljs.core.nth.call(null,vec__21245,1,null);var obj21247 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21247;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21249 = {"position":"static","z-index":0};return obj21249;
})():null));return React.DOM.div((function (){var obj21251 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj21251;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t21241.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21241.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21241.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21241.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21261 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_21262 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21261);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21262);
var vec__21252 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21252,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21252,1,null);var vec__21253 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21253,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21253,1,null);var vec__21254 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21254,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21254,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21255){var map__21256 = p__21255;var map__21256__$1 = ((cljs.core.seq_QMARK_.call(null,map__21256))?cljs.core.apply.call(null,cljs.core.hash_map,map__21256):map__21256);var top = cljs.core.get.call(null,map__21256__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21256__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21218_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21218_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21257){var map__21258 = p__21257;var map__21258__$1 = ((cljs.core.seq_QMARK_.call(null,map__21258))?cljs.core.apply.call(null,cljs.core.hash_map,map__21258):map__21258);var top = cljs.core.get.call(null,map__21258__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21258__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21259 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21259,0,null);var init_top = cljs.core.nth.call(null,vec__21259,1,null);var vec__21260 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21260,0,null);var handle_top = cljs.core.nth.call(null,vec__21260,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21219_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21219_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21220_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21220_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21243){var self__ = this;
var _21243__$1 = this;return self__.meta21242;
});
ewen.dragdrop.examples.t21241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21243,meta21242__$1){var self__ = this;
var _21243__$1 = this;return (new ewen.dragdrop.examples.t21241(self__.owner,self__.cursor,self__.long_press_draggable,meta21242__$1));
});
ewen.dragdrop.examples.__GT_t21241 = (function __GT_t21241(owner__$1,cursor__$1,long_press_draggable__$1,meta21242){return (new ewen.dragdrop.examples.t21241(owner__$1,cursor__$1,long_press_draggable__$1,meta21242));
});
}
return (new ewen.dragdrop.examples.t21241(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21263 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21263 = (function (owner,app,meta21264){
this.owner = owner;
this.app = app;
this.meta21264 = meta21264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21263.cljs$lang$type = true;
ewen.dragdrop.examples.t21263.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21263";
ewen.dragdrop.examples.t21263.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21263");
});
ewen.dragdrop.examples.t21263.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21263.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21265){var self__ = this;
var _21265__$1 = this;return self__.meta21264;
});
ewen.dragdrop.examples.t21263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21265,meta21264__$1){var self__ = this;
var _21265__$1 = this;return (new ewen.dragdrop.examples.t21263(self__.owner,self__.app,meta21264__$1));
});
ewen.dragdrop.examples.__GT_t21263 = (function __GT_t21263(owner__$1,app__$1,meta21264){return (new ewen.dragdrop.examples.t21263(owner__$1,app__$1,meta21264));
});
}
return (new ewen.dragdrop.examples.t21263(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map