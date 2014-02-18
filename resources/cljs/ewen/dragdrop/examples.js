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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24789 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24789 = (function (owner,cursor,typical_draggable,meta24790){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta24790 = meta24790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24789.cljs$lang$type = true;
ewen.dragdrop.examples.t24789.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24789";
ewen.dragdrop.examples.t24789.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24789");
});
ewen.dragdrop.examples.t24789.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24789.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24792 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24792,0,null);var y = cljs.core.nth.call(null,vec__24792,1,null);var vec__24793 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24793,0,null);var h = cljs.core.nth.call(null,vec__24793,1,null);var obj24795 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24795;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24797 = {"position":"static","z-index":0};return obj24797;
})():null));return React.DOM.div((function (){var obj24799 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj24799;
})(),"Drag me!");
});
ewen.dragdrop.examples.t24789.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24789.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24789.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24789.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24809 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_24810 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24809);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24810);
var vec__24800 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24800,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24800,1,null);var vec__24801 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24801,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24801,1,null);var vec__24802 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24802,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24802,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__24764_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(domina.events.raw_event.call(null,p1__24764_SHARP_).pageX)].join(''));
}),move_events);
ewen.flapjax_cljs.mapE.call(null,(function (p1__24765_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,domina.events.raw_event.call(null,p1__24765_SHARP_)))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24803){var map__24804 = p__24803;var map__24804__$1 = ((cljs.core.seq_QMARK_.call(null,map__24804))?cljs.core.apply.call(null,cljs.core.hash_map,map__24804):map__24804);var top = cljs.core.get.call(null,map__24804__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24804__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24766_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24766_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24805){var map__24806 = p__24805;var map__24806__$1 = ((cljs.core.seq_QMARK_.call(null,map__24806))?cljs.core.apply.call(null,cljs.core.hash_map,map__24806):map__24806);var top = cljs.core.get.call(null,map__24806__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24806__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24807 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24807,0,null);var init_top = cljs.core.nth.call(null,vec__24807,1,null);var vec__24808 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24808,0,null);var handle_top = cljs.core.nth.call(null,vec__24808,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24767_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24767_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24768_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24768_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24791){var self__ = this;
var _24791__$1 = this;return self__.meta24790;
});
ewen.dragdrop.examples.t24789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24791,meta24790__$1){var self__ = this;
var _24791__$1 = this;return (new ewen.dragdrop.examples.t24789(self__.owner,self__.cursor,self__.typical_draggable,meta24790__$1));
});
ewen.dragdrop.examples.__GT_t24789 = (function __GT_t24789(owner__$1,cursor__$1,typical_draggable__$1,meta24790){return (new ewen.dragdrop.examples.t24789(owner__$1,cursor__$1,typical_draggable__$1,meta24790));
});
}
return (new ewen.dragdrop.examples.t24789(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24811 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24811 = (function (owner,app,meta24812){
this.owner = owner;
this.app = app;
this.meta24812 = meta24812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24811.cljs$lang$type = true;
ewen.dragdrop.examples.t24811.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24811";
ewen.dragdrop.examples.t24811.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24811");
});
ewen.dragdrop.examples.t24811.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24811.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24813){var self__ = this;
var _24813__$1 = this;return self__.meta24812;
});
ewen.dragdrop.examples.t24811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24813,meta24812__$1){var self__ = this;
var _24813__$1 = this;return (new ewen.dragdrop.examples.t24811(self__.owner,self__.app,meta24812__$1));
});
ewen.dragdrop.examples.__GT_t24811 = (function __GT_t24811(owner__$1,app__$1,meta24812){return (new ewen.dragdrop.examples.t24811(owner__$1,app__$1,meta24812));
});
}
return (new ewen.dragdrop.examples.t24811(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24837 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24837 = (function (owner,cursor,delayed_draggable,meta24838){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta24838 = meta24838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24837.cljs$lang$type = true;
ewen.dragdrop.examples.t24837.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24837";
ewen.dragdrop.examples.t24837.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24837");
});
ewen.dragdrop.examples.t24837.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24837.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24840 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24840,0,null);var y = cljs.core.nth.call(null,vec__24840,1,null);var vec__24841 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24841,0,null);var h = cljs.core.nth.call(null,vec__24841,1,null);var obj24843 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24843;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24845 = {"position":"static","z-index":0};return obj24845;
})():null));return React.DOM.div((function (){var obj24847 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj24847;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t24837.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24837.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24837.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24837.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24857 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_24858 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24857);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24858);
var vec__24848 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24848,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24848,1,null);var vec__24849 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24849,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24849,1,null);var vec__24850 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24850,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24850,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24851){var map__24852 = p__24851;var map__24852__$1 = ((cljs.core.seq_QMARK_.call(null,map__24852))?cljs.core.apply.call(null,cljs.core.hash_map,map__24852):map__24852);var top = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24814_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24814_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24853){var map__24854 = p__24853;var map__24854__$1 = ((cljs.core.seq_QMARK_.call(null,map__24854))?cljs.core.apply.call(null,cljs.core.hash_map,map__24854):map__24854);var top = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24855 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24855,0,null);var init_top = cljs.core.nth.call(null,vec__24855,1,null);var vec__24856 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24856,0,null);var handle_top = cljs.core.nth.call(null,vec__24856,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24815_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24815_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24816_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24816_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24839){var self__ = this;
var _24839__$1 = this;return self__.meta24838;
});
ewen.dragdrop.examples.t24837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24839,meta24838__$1){var self__ = this;
var _24839__$1 = this;return (new ewen.dragdrop.examples.t24837(self__.owner,self__.cursor,self__.delayed_draggable,meta24838__$1));
});
ewen.dragdrop.examples.__GT_t24837 = (function __GT_t24837(owner__$1,cursor__$1,delayed_draggable__$1,meta24838){return (new ewen.dragdrop.examples.t24837(owner__$1,cursor__$1,delayed_draggable__$1,meta24838));
});
}
return (new ewen.dragdrop.examples.t24837(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24859 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24859 = (function (owner,app,meta24860){
this.owner = owner;
this.app = app;
this.meta24860 = meta24860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24859.cljs$lang$type = true;
ewen.dragdrop.examples.t24859.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24859";
ewen.dragdrop.examples.t24859.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24859");
});
ewen.dragdrop.examples.t24859.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24859.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24861){var self__ = this;
var _24861__$1 = this;return self__.meta24860;
});
ewen.dragdrop.examples.t24859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24861,meta24860__$1){var self__ = this;
var _24861__$1 = this;return (new ewen.dragdrop.examples.t24859(self__.owner,self__.app,meta24860__$1));
});
ewen.dragdrop.examples.__GT_t24859 = (function __GT_t24859(owner__$1,app__$1,meta24860){return (new ewen.dragdrop.examples.t24859(owner__$1,app__$1,meta24860));
});
}
return (new ewen.dragdrop.examples.t24859(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24885 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24885 = (function (owner,cursor,hook_draggable,meta24886){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta24886 = meta24886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24885.cljs$lang$type = true;
ewen.dragdrop.examples.t24885.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24885";
ewen.dragdrop.examples.t24885.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24885");
});
ewen.dragdrop.examples.t24885.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24885.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24888 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24888,0,null);var y = cljs.core.nth.call(null,vec__24888,1,null);var vec__24889 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24889,0,null);var h = cljs.core.nth.call(null,vec__24889,1,null);var obj24891 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24891;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24893 = {"position":"static","z-index":0};return obj24893;
})():null));return React.DOM.div((function (){var obj24895 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj24895;
})(),"Drag me!");
});
ewen.dragdrop.examples.t24885.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24885.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24885.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24885.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24905 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_24906 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24905);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24906);
var vec__24896 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24896,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24896,1,null);var vec__24897 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24897,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24897,1,null);var vec__24898 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24898,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24898,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24899){var map__24900 = p__24899;var map__24900__$1 = ((cljs.core.seq_QMARK_.call(null,map__24900))?cljs.core.apply.call(null,cljs.core.hash_map,map__24900):map__24900);var top = cljs.core.get.call(null,map__24900__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24900__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24862_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24862_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24901){var map__24902 = p__24901;var map__24902__$1 = ((cljs.core.seq_QMARK_.call(null,map__24902))?cljs.core.apply.call(null,cljs.core.hash_map,map__24902):map__24902);var top = cljs.core.get.call(null,map__24902__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24902__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24903 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24903,0,null);var init_top = cljs.core.nth.call(null,vec__24903,1,null);var vec__24904 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24904,0,null);var handle_top = cljs.core.nth.call(null,vec__24904,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24863_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24863_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24864_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24864_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24887){var self__ = this;
var _24887__$1 = this;return self__.meta24886;
});
ewen.dragdrop.examples.t24885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24887,meta24886__$1){var self__ = this;
var _24887__$1 = this;return (new ewen.dragdrop.examples.t24885(self__.owner,self__.cursor,self__.hook_draggable,meta24886__$1));
});
ewen.dragdrop.examples.__GT_t24885 = (function __GT_t24885(owner__$1,cursor__$1,hook_draggable__$1,meta24886){return (new ewen.dragdrop.examples.t24885(owner__$1,cursor__$1,hook_draggable__$1,meta24886));
});
}
return (new ewen.dragdrop.examples.t24885(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24907 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24907 = (function (owner,app,meta24908){
this.owner = owner;
this.app = app;
this.meta24908 = meta24908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24907.cljs$lang$type = true;
ewen.dragdrop.examples.t24907.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24907";
ewen.dragdrop.examples.t24907.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24907");
});
ewen.dragdrop.examples.t24907.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24907.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24909){var self__ = this;
var _24909__$1 = this;return self__.meta24908;
});
ewen.dragdrop.examples.t24907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24909,meta24908__$1){var self__ = this;
var _24909__$1 = this;return (new ewen.dragdrop.examples.t24907(self__.owner,self__.app,meta24908__$1));
});
ewen.dragdrop.examples.__GT_t24907 = (function __GT_t24907(owner__$1,app__$1,meta24908){return (new ewen.dragdrop.examples.t24907(owner__$1,app__$1,meta24908));
});
}
return (new ewen.dragdrop.examples.t24907(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t24933 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24933 = (function (owner,cursor,long_press_draggable,meta24934){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24933.cljs$lang$type = true;
ewen.dragdrop.examples.t24933.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24933";
ewen.dragdrop.examples.t24933.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24933");
});
ewen.dragdrop.examples.t24933.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t24933.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__24936 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__24936,0,null);var y = cljs.core.nth.call(null,vec__24936,1,null);var vec__24937 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__24937,0,null);var h = cljs.core.nth.call(null,vec__24937,1,null);var obj24939 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj24939;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj24941 = {"position":"static","z-index":0};return obj24941;
})():null));return React.DOM.div((function (){var obj24943 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj24943;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t24933.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t24933.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t24933.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t24933.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_24953 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_24954 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_24953);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_24954);
var vec__24944 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__24944,0,null);var up_unlisten = cljs.core.nth.call(null,vec__24944,1,null);var vec__24945 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__24945,0,null);var down_unlisten = cljs.core.nth.call(null,vec__24945,1,null);var vec__24946 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__24946,0,null);var move_unlisten = cljs.core.nth.call(null,vec__24946,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__24947){var map__24948 = p__24947;var map__24948__$1 = ((cljs.core.seq_QMARK_.call(null,map__24948))?cljs.core.apply.call(null,cljs.core.hash_map,map__24948):map__24948);var top = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24910_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__24910_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__24949){var map__24950 = p__24949;var map__24950__$1 = ((cljs.core.seq_QMARK_.call(null,map__24950))?cljs.core.apply.call(null,cljs.core.hash_map,map__24950):map__24950);var top = cljs.core.get.call(null,map__24950__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__24950__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__24951 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__24951,0,null);var init_top = cljs.core.nth.call(null,vec__24951,1,null);var vec__24952 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__24952,0,null);var handle_top = cljs.core.nth.call(null,vec__24952,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24911_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__24911_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__24912_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__24912_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t24933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24935){var self__ = this;
var _24935__$1 = this;return self__.meta24934;
});
ewen.dragdrop.examples.t24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24935,meta24934__$1){var self__ = this;
var _24935__$1 = this;return (new ewen.dragdrop.examples.t24933(self__.owner,self__.cursor,self__.long_press_draggable,meta24934__$1));
});
ewen.dragdrop.examples.__GT_t24933 = (function __GT_t24933(owner__$1,cursor__$1,long_press_draggable__$1,meta24934){return (new ewen.dragdrop.examples.t24933(owner__$1,cursor__$1,long_press_draggable__$1,meta24934));
});
}
return (new ewen.dragdrop.examples.t24933(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t24955 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t24955 = (function (owner,app,meta24956){
this.owner = owner;
this.app = app;
this.meta24956 = meta24956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t24955.cljs$lang$type = true;
ewen.dragdrop.examples.t24955.cljs$lang$ctorStr = "ewen.dragdrop.examples/t24955";
ewen.dragdrop.examples.t24955.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t24955");
});
ewen.dragdrop.examples.t24955.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t24955.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t24955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24957){var self__ = this;
var _24957__$1 = this;return self__.meta24956;
});
ewen.dragdrop.examples.t24955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24957,meta24956__$1){var self__ = this;
var _24957__$1 = this;return (new ewen.dragdrop.examples.t24955(self__.owner,self__.app,meta24956__$1));
});
ewen.dragdrop.examples.__GT_t24955 = (function __GT_t24955(owner__$1,app__$1,meta24956){return (new ewen.dragdrop.examples.t24955(owner__$1,app__$1,meta24956));
});
}
return (new ewen.dragdrop.examples.t24955(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map