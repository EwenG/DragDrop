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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21676 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21676 = (function (owner,cursor,typical_draggable,meta21677){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta21677 = meta21677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21676.cljs$lang$type = true;
ewen.dragdrop.examples.t21676.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21676";
ewen.dragdrop.examples.t21676.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21676");
});
ewen.dragdrop.examples.t21676.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21676.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21679 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21679,0,null);var y = cljs.core.nth.call(null,vec__21679,1,null);var vec__21680 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21680,0,null);var h = cljs.core.nth.call(null,vec__21680,1,null);var obj21682 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21682;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21684 = {"position":"static","z-index":0};return obj21684;
})():null));return React.DOM.div((function (){var obj21686 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj21686;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21676.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21676.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21676.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21676.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21696 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_21697 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21696);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21697);
var vec__21687 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21687,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21687,1,null);var vec__21688 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21688,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21688,1,null);var vec__21689 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21689,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21689,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__21652_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(ewen.dragdrop.event__GT_dd_event.call(null,p1__21652_SHARP_,new cljs.core.Keyword(null,"drag","drag",1016996006)))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21690){var map__21691 = p__21690;var map__21691__$1 = ((cljs.core.seq_QMARK_.call(null,map__21691))?cljs.core.apply.call(null,cljs.core.hash_map,map__21691):map__21691);var top = cljs.core.get.call(null,map__21691__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21691__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21653_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21653_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21692){var map__21693 = p__21692;var map__21693__$1 = ((cljs.core.seq_QMARK_.call(null,map__21693))?cljs.core.apply.call(null,cljs.core.hash_map,map__21693):map__21693);var top = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21693__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21694 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21694,0,null);var init_top = cljs.core.nth.call(null,vec__21694,1,null);var vec__21695 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21695,0,null);var handle_top = cljs.core.nth.call(null,vec__21695,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21654_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21654_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21655_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21655_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21678){var self__ = this;
var _21678__$1 = this;return self__.meta21677;
});
ewen.dragdrop.examples.t21676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21678,meta21677__$1){var self__ = this;
var _21678__$1 = this;return (new ewen.dragdrop.examples.t21676(self__.owner,self__.cursor,self__.typical_draggable,meta21677__$1));
});
ewen.dragdrop.examples.__GT_t21676 = (function __GT_t21676(owner__$1,cursor__$1,typical_draggable__$1,meta21677){return (new ewen.dragdrop.examples.t21676(owner__$1,cursor__$1,typical_draggable__$1,meta21677));
});
}
return (new ewen.dragdrop.examples.t21676(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21698 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21698 = (function (owner,app,meta21699){
this.owner = owner;
this.app = app;
this.meta21699 = meta21699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21698.cljs$lang$type = true;
ewen.dragdrop.examples.t21698.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21698";
ewen.dragdrop.examples.t21698.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21698");
});
ewen.dragdrop.examples.t21698.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21698.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21700){var self__ = this;
var _21700__$1 = this;return self__.meta21699;
});
ewen.dragdrop.examples.t21698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21700,meta21699__$1){var self__ = this;
var _21700__$1 = this;return (new ewen.dragdrop.examples.t21698(self__.owner,self__.app,meta21699__$1));
});
ewen.dragdrop.examples.__GT_t21698 = (function __GT_t21698(owner__$1,app__$1,meta21699){return (new ewen.dragdrop.examples.t21698(owner__$1,app__$1,meta21699));
});
}
return (new ewen.dragdrop.examples.t21698(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21724 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21724 = (function (owner,cursor,delayed_draggable,meta21725){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta21725 = meta21725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21724.cljs$lang$type = true;
ewen.dragdrop.examples.t21724.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21724";
ewen.dragdrop.examples.t21724.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21724");
});
ewen.dragdrop.examples.t21724.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21724.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21727 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21727,0,null);var y = cljs.core.nth.call(null,vec__21727,1,null);var vec__21728 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21728,0,null);var h = cljs.core.nth.call(null,vec__21728,1,null);var obj21730 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21730;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21732 = {"position":"static","z-index":0};return obj21732;
})():null));return React.DOM.div((function (){var obj21734 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj21734;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t21724.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21724.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21724.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21724.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21744 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_21745 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21744);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21745);
var vec__21735 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21735,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21735,1,null);var vec__21736 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21736,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21736,1,null);var vec__21737 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21737,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21737,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21738){var map__21739 = p__21738;var map__21739__$1 = ((cljs.core.seq_QMARK_.call(null,map__21739))?cljs.core.apply.call(null,cljs.core.hash_map,map__21739):map__21739);var top = cljs.core.get.call(null,map__21739__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21739__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21701_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21701_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21740){var map__21741 = p__21740;var map__21741__$1 = ((cljs.core.seq_QMARK_.call(null,map__21741))?cljs.core.apply.call(null,cljs.core.hash_map,map__21741):map__21741);var top = cljs.core.get.call(null,map__21741__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21741__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21742 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21742,0,null);var init_top = cljs.core.nth.call(null,vec__21742,1,null);var vec__21743 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21743,0,null);var handle_top = cljs.core.nth.call(null,vec__21743,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21702_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21702_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21703_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21703_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21726){var self__ = this;
var _21726__$1 = this;return self__.meta21725;
});
ewen.dragdrop.examples.t21724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21726,meta21725__$1){var self__ = this;
var _21726__$1 = this;return (new ewen.dragdrop.examples.t21724(self__.owner,self__.cursor,self__.delayed_draggable,meta21725__$1));
});
ewen.dragdrop.examples.__GT_t21724 = (function __GT_t21724(owner__$1,cursor__$1,delayed_draggable__$1,meta21725){return (new ewen.dragdrop.examples.t21724(owner__$1,cursor__$1,delayed_draggable__$1,meta21725));
});
}
return (new ewen.dragdrop.examples.t21724(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21746 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21746 = (function (owner,app,meta21747){
this.owner = owner;
this.app = app;
this.meta21747 = meta21747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21746.cljs$lang$type = true;
ewen.dragdrop.examples.t21746.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21746";
ewen.dragdrop.examples.t21746.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21746");
});
ewen.dragdrop.examples.t21746.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21746.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21748){var self__ = this;
var _21748__$1 = this;return self__.meta21747;
});
ewen.dragdrop.examples.t21746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21748,meta21747__$1){var self__ = this;
var _21748__$1 = this;return (new ewen.dragdrop.examples.t21746(self__.owner,self__.app,meta21747__$1));
});
ewen.dragdrop.examples.__GT_t21746 = (function __GT_t21746(owner__$1,app__$1,meta21747){return (new ewen.dragdrop.examples.t21746(owner__$1,app__$1,meta21747));
});
}
return (new ewen.dragdrop.examples.t21746(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21772 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21772 = (function (owner,cursor,hook_draggable,meta21773){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta21773 = meta21773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21772.cljs$lang$type = true;
ewen.dragdrop.examples.t21772.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21772";
ewen.dragdrop.examples.t21772.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21772");
});
ewen.dragdrop.examples.t21772.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21772.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21775 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21775,0,null);var y = cljs.core.nth.call(null,vec__21775,1,null);var vec__21776 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21776,0,null);var h = cljs.core.nth.call(null,vec__21776,1,null);var obj21778 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21778;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21780 = {"position":"static","z-index":0};return obj21780;
})():null));return React.DOM.div((function (){var obj21782 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj21782;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21772.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21772.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21772.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21772.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21792 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_21793 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21792);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21793);
var vec__21783 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21783,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21783,1,null);var vec__21784 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21784,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21784,1,null);var vec__21785 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21785,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21785,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21786){var map__21787 = p__21786;var map__21787__$1 = ((cljs.core.seq_QMARK_.call(null,map__21787))?cljs.core.apply.call(null,cljs.core.hash_map,map__21787):map__21787);var top = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21787__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21749_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21749_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21788){var map__21789 = p__21788;var map__21789__$1 = ((cljs.core.seq_QMARK_.call(null,map__21789))?cljs.core.apply.call(null,cljs.core.hash_map,map__21789):map__21789);var top = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21790 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21790,0,null);var init_top = cljs.core.nth.call(null,vec__21790,1,null);var vec__21791 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21791,0,null);var handle_top = cljs.core.nth.call(null,vec__21791,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21750_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21750_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21751_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21751_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21774){var self__ = this;
var _21774__$1 = this;return self__.meta21773;
});
ewen.dragdrop.examples.t21772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21774,meta21773__$1){var self__ = this;
var _21774__$1 = this;return (new ewen.dragdrop.examples.t21772(self__.owner,self__.cursor,self__.hook_draggable,meta21773__$1));
});
ewen.dragdrop.examples.__GT_t21772 = (function __GT_t21772(owner__$1,cursor__$1,hook_draggable__$1,meta21773){return (new ewen.dragdrop.examples.t21772(owner__$1,cursor__$1,hook_draggable__$1,meta21773));
});
}
return (new ewen.dragdrop.examples.t21772(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21794 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21794 = (function (owner,app,meta21795){
this.owner = owner;
this.app = app;
this.meta21795 = meta21795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21794.cljs$lang$type = true;
ewen.dragdrop.examples.t21794.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21794";
ewen.dragdrop.examples.t21794.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21794");
});
ewen.dragdrop.examples.t21794.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21794.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21796){var self__ = this;
var _21796__$1 = this;return self__.meta21795;
});
ewen.dragdrop.examples.t21794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21796,meta21795__$1){var self__ = this;
var _21796__$1 = this;return (new ewen.dragdrop.examples.t21794(self__.owner,self__.app,meta21795__$1));
});
ewen.dragdrop.examples.__GT_t21794 = (function __GT_t21794(owner__$1,app__$1,meta21795){return (new ewen.dragdrop.examples.t21794(owner__$1,app__$1,meta21795));
});
}
return (new ewen.dragdrop.examples.t21794(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21820 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21820 = (function (owner,cursor,long_press_draggable,meta21821){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta21821 = meta21821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21820.cljs$lang$type = true;
ewen.dragdrop.examples.t21820.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21820";
ewen.dragdrop.examples.t21820.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21820");
});
ewen.dragdrop.examples.t21820.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21820.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21823 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21823,0,null);var y = cljs.core.nth.call(null,vec__21823,1,null);var vec__21824 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21824,0,null);var h = cljs.core.nth.call(null,vec__21824,1,null);var obj21826 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21826;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21828 = {"position":"static","z-index":0};return obj21828;
})():null));return React.DOM.div((function (){var obj21830 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj21830;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t21820.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21820.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21820.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21820.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21840 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_21841 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21840);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21841);
var vec__21831 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21831,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21831,1,null);var vec__21832 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21832,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21832,1,null);var vec__21833 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21833,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21833,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21834){var map__21835 = p__21834;var map__21835__$1 = ((cljs.core.seq_QMARK_.call(null,map__21835))?cljs.core.apply.call(null,cljs.core.hash_map,map__21835):map__21835);var top = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21797_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21797_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21836){var map__21837 = p__21836;var map__21837__$1 = ((cljs.core.seq_QMARK_.call(null,map__21837))?cljs.core.apply.call(null,cljs.core.hash_map,map__21837):map__21837);var top = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21838 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21838,0,null);var init_top = cljs.core.nth.call(null,vec__21838,1,null);var vec__21839 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21839,0,null);var handle_top = cljs.core.nth.call(null,vec__21839,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21798_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21798_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21799_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21799_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21822){var self__ = this;
var _21822__$1 = this;return self__.meta21821;
});
ewen.dragdrop.examples.t21820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21822,meta21821__$1){var self__ = this;
var _21822__$1 = this;return (new ewen.dragdrop.examples.t21820(self__.owner,self__.cursor,self__.long_press_draggable,meta21821__$1));
});
ewen.dragdrop.examples.__GT_t21820 = (function __GT_t21820(owner__$1,cursor__$1,long_press_draggable__$1,meta21821){return (new ewen.dragdrop.examples.t21820(owner__$1,cursor__$1,long_press_draggable__$1,meta21821));
});
}
return (new ewen.dragdrop.examples.t21820(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21842 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21842 = (function (owner,app,meta21843){
this.owner = owner;
this.app = app;
this.meta21843 = meta21843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21842.cljs$lang$type = true;
ewen.dragdrop.examples.t21842.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21842";
ewen.dragdrop.examples.t21842.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21842");
});
ewen.dragdrop.examples.t21842.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21842.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21844){var self__ = this;
var _21844__$1 = this;return self__.meta21843;
});
ewen.dragdrop.examples.t21842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21844,meta21843__$1){var self__ = this;
var _21844__$1 = this;return (new ewen.dragdrop.examples.t21842(self__.owner,self__.app,meta21843__$1));
});
ewen.dragdrop.examples.__GT_t21842 = (function __GT_t21842(owner__$1,app__$1,meta21843){return (new ewen.dragdrop.examples.t21842(owner__$1,app__$1,meta21843));
});
}
return (new ewen.dragdrop.examples.t21842(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map