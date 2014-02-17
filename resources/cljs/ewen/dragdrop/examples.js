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
ewen.dragdrop.examples.typical_draggable = (function typical_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21869 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21869 = (function (owner,cursor,typical_draggable,meta21870){
this.owner = owner;
this.cursor = cursor;
this.typical_draggable = typical_draggable;
this.meta21870 = meta21870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21869.cljs$lang$type = true;
ewen.dragdrop.examples.t21869.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21869";
ewen.dragdrop.examples.t21869.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21869");
});
ewen.dragdrop.examples.t21869.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21869.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21872 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21872,0,null);var y = cljs.core.nth.call(null,vec__21872,1,null);var vec__21873 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21873,0,null);var h = cljs.core.nth.call(null,vec__21873,1,null);var obj21875 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21875;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21877 = {"position":"static","z-index":0};return obj21877;
})():null));return React.DOM.div((function (){var obj21879 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"typical-draggable"};return obj21879;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21869.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21869.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21869.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21869.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21889 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"typical-draggable")));var init_loc_21890 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"typical-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21889);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21890);
var vec__21880 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21880,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21880,1,null);var vec__21881 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21881,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21881,1,null);var vec__21882 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21882,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21882,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);ewen.flapjax_cljs.mapE.call(null,(function (p1__21845_SHARP_){return cljs.core.prn.call(null,[cljs.core.str(cljs.core.js_keys.call(null,p1__21845_SHARP_))].join(''));
}),move_events);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21883){var map__21884 = p__21883;var map__21884__$1 = ((cljs.core.seq_QMARK_.call(null,map__21884))?cljs.core.apply.call(null,cljs.core.hash_map,map__21884):map__21884);var top = cljs.core.get.call(null,map__21884__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21884__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21846_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21846_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21885){var map__21886 = p__21885;var map__21886__$1 = ((cljs.core.seq_QMARK_.call(null,map__21886))?cljs.core.apply.call(null,cljs.core.hash_map,map__21886):map__21886);var top = cljs.core.get.call(null,map__21886__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21886__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21887 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21887,0,null);var init_top = cljs.core.nth.call(null,vec__21887,1,null);var vec__21888 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21888,0,null);var handle_top = cljs.core.nth.call(null,vec__21888,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21847_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21847_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21848_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21848_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21871){var self__ = this;
var _21871__$1 = this;return self__.meta21870;
});
ewen.dragdrop.examples.t21869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21871,meta21870__$1){var self__ = this;
var _21871__$1 = this;return (new ewen.dragdrop.examples.t21869(self__.owner,self__.cursor,self__.typical_draggable,meta21870__$1));
});
ewen.dragdrop.examples.__GT_t21869 = (function __GT_t21869(owner__$1,cursor__$1,typical_draggable__$1,meta21870){return (new ewen.dragdrop.examples.t21869(owner__$1,cursor__$1,typical_draggable__$1,meta21870));
});
}
return (new ewen.dragdrop.examples.t21869(owner,cursor,typical_draggable,null));
});
ewen.dragdrop.examples.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"drag-me"], null));
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21891 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21891 = (function (owner,app,meta21892){
this.owner = owner;
this.app = app;
this.meta21892 = meta21892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21891.cljs$lang$type = true;
ewen.dragdrop.examples.t21891.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21891";
ewen.dragdrop.examples.t21891.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21891");
});
ewen.dragdrop.examples.t21891.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21891.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.typical_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21893){var self__ = this;
var _21893__$1 = this;return self__.meta21892;
});
ewen.dragdrop.examples.t21891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21893,meta21892__$1){var self__ = this;
var _21893__$1 = this;return (new ewen.dragdrop.examples.t21891(self__.owner,self__.app,meta21892__$1));
});
ewen.dragdrop.examples.__GT_t21891 = (function __GT_t21891(owner__$1,app__$1,meta21892){return (new ewen.dragdrop.examples.t21891(owner__$1,app__$1,meta21892));
});
}
return (new ewen.dragdrop.examples.t21891(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#typical-dd")));
ewen.dragdrop.examples.delayed_draggable = (function delayed_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21917 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21917 = (function (owner,cursor,delayed_draggable,meta21918){
this.owner = owner;
this.cursor = cursor;
this.delayed_draggable = delayed_draggable;
this.meta21918 = meta21918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21917.cljs$lang$type = true;
ewen.dragdrop.examples.t21917.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21917";
ewen.dragdrop.examples.t21917.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21917");
});
ewen.dragdrop.examples.t21917.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21917.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21920 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21920,0,null);var y = cljs.core.nth.call(null,vec__21920,1,null);var vec__21921 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21921,0,null);var h = cljs.core.nth.call(null,vec__21921,1,null);var obj21923 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21923;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21925 = {"position":"static","z-index":0};return obj21925;
})():null));return React.DOM.div((function (){var obj21927 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"delayed-draggable"};return obj21927;
})(),"Drag me! But I'm slow!");
});
ewen.dragdrop.examples.t21917.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21917.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21917.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21917.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21937 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"delayed-draggable")));var init_loc_21938 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"delayed-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21937);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21938);
var vec__21928 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21928,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21928,1,null);var vec__21929 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21929,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21929,1,null);var vec__21930 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21930,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21930,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,ewen.flapjax_cljs.delayE.call(null,move_events,ewen.flapjax_cljs.constantB.call(null,500)),up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21931){var map__21932 = p__21931;var map__21932__$1 = ((cljs.core.seq_QMARK_.call(null,map__21932))?cljs.core.apply.call(null,cljs.core.hash_map,map__21932):map__21932);var top = cljs.core.get.call(null,map__21932__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21932__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21894_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21894_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21933){var map__21934 = p__21933;var map__21934__$1 = ((cljs.core.seq_QMARK_.call(null,map__21934))?cljs.core.apply.call(null,cljs.core.hash_map,map__21934):map__21934);var top = cljs.core.get.call(null,map__21934__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21934__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21935 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21935,0,null);var init_top = cljs.core.nth.call(null,vec__21935,1,null);var vec__21936 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21936,0,null);var handle_top = cljs.core.nth.call(null,vec__21936,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21895_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21895_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21896_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21896_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21919){var self__ = this;
var _21919__$1 = this;return self__.meta21918;
});
ewen.dragdrop.examples.t21917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21919,meta21918__$1){var self__ = this;
var _21919__$1 = this;return (new ewen.dragdrop.examples.t21917(self__.owner,self__.cursor,self__.delayed_draggable,meta21918__$1));
});
ewen.dragdrop.examples.__GT_t21917 = (function __GT_t21917(owner__$1,cursor__$1,delayed_draggable__$1,meta21918){return (new ewen.dragdrop.examples.t21917(owner__$1,cursor__$1,delayed_draggable__$1,meta21918));
});
}
return (new ewen.dragdrop.examples.t21917(owner,cursor,delayed_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21939 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21939 = (function (owner,app,meta21940){
this.owner = owner;
this.app = app;
this.meta21940 = meta21940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21939.cljs$lang$type = true;
ewen.dragdrop.examples.t21939.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21939";
ewen.dragdrop.examples.t21939.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21939");
});
ewen.dragdrop.examples.t21939.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21939.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.delayed_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21941){var self__ = this;
var _21941__$1 = this;return self__.meta21940;
});
ewen.dragdrop.examples.t21939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21941,meta21940__$1){var self__ = this;
var _21941__$1 = this;return (new ewen.dragdrop.examples.t21939(self__.owner,self__.app,meta21940__$1));
});
ewen.dragdrop.examples.__GT_t21939 = (function __GT_t21939(owner__$1,app__$1,meta21940){return (new ewen.dragdrop.examples.t21939(owner__$1,app__$1,meta21940));
});
}
return (new ewen.dragdrop.examples.t21939(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#delayed-dd")));
ewen.dragdrop.examples.hook_draggable = (function hook_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t21965 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21965 = (function (owner,cursor,hook_draggable,meta21966){
this.owner = owner;
this.cursor = cursor;
this.hook_draggable = hook_draggable;
this.meta21966 = meta21966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21965.cljs$lang$type = true;
ewen.dragdrop.examples.t21965.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21965";
ewen.dragdrop.examples.t21965.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21965");
});
ewen.dragdrop.examples.t21965.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t21965.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__21968 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__21968,0,null);var y = cljs.core.nth.call(null,vec__21968,1,null);var vec__21969 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__21969,0,null);var h = cljs.core.nth.call(null,vec__21969,1,null);var obj21971 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj21971;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj21973 = {"position":"static","z-index":0};return obj21973;
})():null));return React.DOM.div((function (){var obj21975 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"id":"hook-div","style":style,"ref":"hook-draggable"};return obj21975;
})(),"Drag me!");
});
ewen.dragdrop.examples.t21965.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t21965.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t21965.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t21965.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_21985 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"hook-draggable")));var init_loc_21986 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"hook-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_21985);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_21986);
var vec__21976 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__21976,0,null);var up_unlisten = cljs.core.nth.call(null,vec__21976,1,null);var vec__21977 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__21977,0,null);var down_unlisten = cljs.core.nth.call(null,vec__21977,1,null);var vec__21978 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__21978,0,null);var move_unlisten = cljs.core.nth.call(null,vec__21978,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,down_events,move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__21979){var map__21980 = p__21979;var map__21980__$1 = ((cljs.core.seq_QMARK_.call(null,map__21980))?cljs.core.apply.call(null,cljs.core.hash_map,map__21980):map__21980);var top = cljs.core.get.call(null,map__21980__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21980__$1,new cljs.core.Keyword(null,"left","left",1017222009));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Handled!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21942_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21942_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__21981){var map__21982 = p__21981;var map__21982__$1 = ((cljs.core.seq_QMARK_.call(null,map__21982))?cljs.core.apply.call(null,cljs.core.hash_map,map__21982):map__21982);var top = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__21982__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__21983 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__21983,0,null);var init_top = cljs.core.nth.call(null,vec__21983,1,null);var vec__21984 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__21984,0,null);var handle_top = cljs.core.nth.call(null,vec__21984,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21943_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21943_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
return domina.single_node.call(null,domina.css.sel.call(null,"#hook-div")).innerHTML = "Droped!";
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21944_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21944_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t21965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21967){var self__ = this;
var _21967__$1 = this;return self__.meta21966;
});
ewen.dragdrop.examples.t21965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21967,meta21966__$1){var self__ = this;
var _21967__$1 = this;return (new ewen.dragdrop.examples.t21965(self__.owner,self__.cursor,self__.hook_draggable,meta21966__$1));
});
ewen.dragdrop.examples.__GT_t21965 = (function __GT_t21965(owner__$1,cursor__$1,hook_draggable__$1,meta21966){return (new ewen.dragdrop.examples.t21965(owner__$1,cursor__$1,hook_draggable__$1,meta21966));
});
}
return (new ewen.dragdrop.examples.t21965(owner,cursor,hook_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t21987 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t21987 = (function (owner,app,meta21988){
this.owner = owner;
this.app = app;
this.meta21988 = meta21988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t21987.cljs$lang$type = true;
ewen.dragdrop.examples.t21987.cljs$lang$ctorStr = "ewen.dragdrop.examples/t21987";
ewen.dragdrop.examples.t21987.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t21987");
});
ewen.dragdrop.examples.t21987.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t21987.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.hook_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t21987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21989){var self__ = this;
var _21989__$1 = this;return self__.meta21988;
});
ewen.dragdrop.examples.t21987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21989,meta21988__$1){var self__ = this;
var _21989__$1 = this;return (new ewen.dragdrop.examples.t21987(self__.owner,self__.app,meta21988__$1));
});
ewen.dragdrop.examples.__GT_t21987 = (function __GT_t21987(owner__$1,app__$1,meta21988){return (new ewen.dragdrop.examples.t21987(owner__$1,app__$1,meta21988));
});
}
return (new ewen.dragdrop.examples.t21987(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#hook-dd")));
ewen.dragdrop.examples.long_press_draggable = (function long_press_draggable(cursor,owner){if(typeof ewen.dragdrop.examples.t22013 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22013 = (function (owner,cursor,long_press_draggable,meta22014){
this.owner = owner;
this.cursor = cursor;
this.long_press_draggable = long_press_draggable;
this.meta22014 = meta22014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22013.cljs$lang$type = true;
ewen.dragdrop.examples.t22013.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22013";
ewen.dragdrop.examples.t22013.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22013");
});
ewen.dragdrop.examples.t22013.prototype.om$core$IRenderState$ = true;
ewen.dragdrop.examples.t22013.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__22016 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__22016,0,null);var y = cljs.core.nth.call(null,vec__22016,1,null);var vec__22017 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__22017,0,null);var h = cljs.core.nth.call(null,vec__22017,1,null);var obj22019 = {"position":"absolute","left":x,"top":y,"z-index":1,"width":w,"height":h};return obj22019;
})():((new cljs.core.Keyword(null,"else","else",1017020587))?(function (){var obj22021 = {"position":"static","z-index":0};return obj22021;
})():null));return React.DOM.div((function (){var obj22023 = {"className":(cljs.core.truth_(ewen.dragdrop.examples.dragging_QMARK_.call(null,self__.owner))?"well dragging":"well"),"style":style,"ref":"long-press-draggable"};return obj22023;
})(),"Long press... Then drag me!");
});
ewen.dragdrop.examples.t22013.prototype.om$core$IWillUnmount$ = true;
ewen.dragdrop.examples.t22013.prototype.om$core$IWillUnmount$will_unmount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.get_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026)).call(null);
});
ewen.dragdrop.examples.t22013.prototype.om$core$IDidMount$ = true;
ewen.dragdrop.examples.t22013.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;var dims_22033 = ewen.dragdrop.examples.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"long-press-draggable")));var init_loc_22034 = ewen.dragdrop.examples.gloc__GT_vec.call(null,goog.style.getPosition(om.core.get_node.call(null,self__.owner,"long-press-draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims_22033);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436),init_loc_22034);
var vec__22024 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"up","up",1013907981));var up_events = cljs.core.nth.call(null,vec__22024,0,null);var up_unlisten = cljs.core.nth.call(null,vec__22024,1,null);var vec__22025 = ewen.dragdrop.extract_events.call(null,node,new cljs.core.Keyword(null,"down","down",1016993812));var down_events = cljs.core.nth.call(null,vec__22025,0,null);var down_unlisten = cljs.core.nth.call(null,vec__22025,1,null);var vec__22026 = ewen.dragdrop.extract_events.call(null,new cljs.core.Keyword(null,"move","move",1017261891));var move_events = cljs.core.nth.call(null,vec__22026,0,null);var move_unlisten = cljs.core.nth.call(null,vec__22026,1,null);var dd_events = ewen.dragdrop.create_dd.call(null,ewen.dragdrop.long_press.call(null,down_events,up_events,1000),move_events,up_events);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unlisten","unlisten",797899026),cljs.core.comp.call(null,up_unlisten,down_unlisten,move_unlisten));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dd-events","dd-events",3131056760),dd_events);
ewen.flapjax_cljs.mapE.call(null,(function (p__22027){var map__22028 = p__22027;var map__22028__$1 = ((cljs.core.seq_QMARK_.call(null,map__22028))?cljs.core.apply.call(null,cljs.core.hash_map,map__22028):map__22028);var top = cljs.core.get.call(null,map__22028__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22028__$1,new cljs.core.Keyword(null,"left","left",1017222009));return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21990_SHARP_){return new cljs.core.Keyword(null,"handle","handle",4084294042).cljs$core$IFn$_invoke$arity$1(p1__21990_SHARP_);
}),dd_events));
ewen.flapjax_cljs.mapE.call(null,(function (p__22029){var map__22030 = p__22029;var map__22030__$1 = ((cljs.core.seq_QMARK_.call(null,map__22030))?cljs.core.apply.call(null,cljs.core.hash_map,map__22030):map__22030);var top = cljs.core.get.call(null,map__22030__$1,new cljs.core.Keyword(null,"top","top",1014019271));var left = cljs.core.get.call(null,map__22030__$1,new cljs.core.Keyword(null,"left","left",1017222009));var vec__22031 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"init-location","init-location",2733466436));var init_left = cljs.core.nth.call(null,vec__22031,0,null);var init_top = cljs.core.nth.call(null,vec__22031,1,null);var vec__22032 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-location","handle-location",2199459116));var handle_left = cljs.core.nth.call(null,vec__22032,0,null);var handle_top = cljs.core.nth.call(null,vec__22032,1,null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(init_left + (left - handle_left)),(init_top + (top - handle_top))], null));
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21991_SHARP_){return new cljs.core.Keyword(null,"drag","drag",1016996006).cljs$core$IFn$_invoke$arity$1(p1__21991_SHARP_);
}),dd_events));
return ewen.flapjax_cljs.mapE.call(null,(function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
}),ewen.flapjax_cljs.filterE.call(null,(function (p1__21992_SHARP_){return new cljs.core.Keyword(null,"drop","drop",1016996449).cljs$core$IFn$_invoke$arity$1(p1__21992_SHARP_);
}),dd_events));
});
ewen.dragdrop.examples.t22013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22015){var self__ = this;
var _22015__$1 = this;return self__.meta22014;
});
ewen.dragdrop.examples.t22013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22015,meta22014__$1){var self__ = this;
var _22015__$1 = this;return (new ewen.dragdrop.examples.t22013(self__.owner,self__.cursor,self__.long_press_draggable,meta22014__$1));
});
ewen.dragdrop.examples.__GT_t22013 = (function __GT_t22013(owner__$1,cursor__$1,long_press_draggable__$1,meta22014){return (new ewen.dragdrop.examples.t22013(owner__$1,cursor__$1,long_press_draggable__$1,meta22014));
});
}
return (new ewen.dragdrop.examples.t22013(owner,cursor,long_press_draggable,null));
});
om.core.root.call(null,ewen.dragdrop.examples.app_state,(function (app,owner){if(typeof ewen.dragdrop.examples.t22035 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.dragdrop.examples.t22035 = (function (owner,app,meta22036){
this.owner = owner;
this.app = app;
this.meta22036 = meta22036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ewen.dragdrop.examples.t22035.cljs$lang$type = true;
ewen.dragdrop.examples.t22035.cljs$lang$ctorStr = "ewen.dragdrop.examples/t22035";
ewen.dragdrop.examples.t22035.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"ewen.dragdrop.examples/t22035");
});
ewen.dragdrop.examples.t22035.prototype.om$core$IRender$ = true;
ewen.dragdrop.examples.t22035.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,ewen.dragdrop.examples.long_press_draggable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),cljs.core.PersistentArrayMap.EMPTY], null)));
});
ewen.dragdrop.examples.t22035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22037){var self__ = this;
var _22037__$1 = this;return self__.meta22036;
});
ewen.dragdrop.examples.t22035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22037,meta22036__$1){var self__ = this;
var _22037__$1 = this;return (new ewen.dragdrop.examples.t22035(self__.owner,self__.app,meta22036__$1));
});
ewen.dragdrop.examples.__GT_t22035 = (function __GT_t22035(owner__$1,app__$1,meta22036){return (new ewen.dragdrop.examples.t22035(owner__$1,app__$1,meta22036));
});
}
return (new ewen.dragdrop.examples.t22035(owner,app,null));
}),domina.single_node.call(null,domina.css.sel.call(null,"#long-press-dd")));

//# sourceMappingURL=examples.js.map