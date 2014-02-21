// Compiled by ClojureScript 0.0-2156
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj30250 = {};return obj30250;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.prevent_default[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.prevent_default["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.target[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.target["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.current_target[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.current_target["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.event_type[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.event_type["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.raw_event[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.raw_event["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t30254 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t30254 = (function (evt,f,create_listener_function,meta30255){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta30255 = meta30255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t30254.cljs$lang$type = true;
domina.events.t30254.cljs$lang$ctorStr = "domina.events/t30254";
domina.events.t30254.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"domina.events/t30254");
});
domina.events.t30254.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t30254.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3457__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return not_found;
}
});
domina.events.t30254.prototype.domina$events$Event$ = true;
domina.events.t30254.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t30254.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t30254.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t30254.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t30254.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t30254.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t30254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30256){var self__ = this;
var _30256__$1 = this;return self__.meta30255;
});
domina.events.t30254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30256,meta30255__$1){var self__ = this;
var _30256__$1 = this;return (new domina.events.t30254(self__.evt,self__.f,self__.create_listener_function,meta30255__$1));
});
domina.events.__GT_t30254 = (function __GT_t30254(evt__$1,f__$1,create_listener_function__$1,meta30255){return (new domina.events.t30254(evt__$1,f__$1,create_listener_function__$1,meta30255));
});
}
return (new domina.events.t30254(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4174__auto__ = (function iter__30261(s__30262){return (new cljs.core.LazySeq(null,(function (){var s__30262__$1 = s__30262;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30262__$1);if(temp__4092__auto__)
{var s__30262__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30262__$2))
{var c__4172__auto__ = cljs.core.chunk_first.call(null,s__30262__$2);var size__4173__auto__ = cljs.core.count.call(null,c__4172__auto__);var b__30264 = cljs.core.chunk_buffer.call(null,size__4173__auto__);if((function (){var i__30263 = 0;while(true){
if((i__30263 < size__4173__auto__))
{var node = cljs.core._nth.call(null,c__4172__auto__,i__30263);cljs.core.chunk_append.call(null,b__30264,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__30265 = (i__30263 + 1);
i__30263 = G__30265;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30264),iter__30261.call(null,cljs.core.chunk_rest.call(null,s__30262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30264),null);
}
} else
{var node = cljs.core.first.call(null,s__30262__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__30261.call(null,cljs.core.rest.call(null,s__30262__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4174__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__30274 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30275 = null;var count__30276 = 0;var i__30277 = 0;while(true){
if((i__30277 < count__30276))
{var node = cljs.core._nth.call(null,chunk__30275,i__30277);goog.events.removeAll(node);
{
var G__30282 = seq__30274;
var G__30283 = chunk__30275;
var G__30284 = count__30276;
var G__30285 = (i__30277 + 1);
seq__30274 = G__30282;
chunk__30275 = G__30283;
count__30276 = G__30284;
i__30277 = G__30285;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30274);if(temp__4092__auto__)
{var seq__30274__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30274__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__30274__$1);{
var G__30286 = cljs.core.chunk_rest.call(null,seq__30274__$1);
var G__30287 = c__4205__auto__;
var G__30288 = cljs.core.count.call(null,c__4205__auto__);
var G__30289 = 0;
seq__30274 = G__30286;
chunk__30275 = G__30287;
count__30276 = G__30288;
i__30277 = G__30289;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30274__$1);goog.events.removeAll(node);
{
var G__30290 = cljs.core.next.call(null,seq__30274__$1);
var G__30291 = null;
var G__30292 = 0;
var G__30293 = 0;
seq__30274 = G__30290;
chunk__30275 = G__30291;
count__30276 = G__30292;
i__30277 = G__30293;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__30278 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30279 = null;var count__30280 = 0;var i__30281 = 0;while(true){
if((i__30281 < count__30280))
{var node = cljs.core._nth.call(null,chunk__30279,i__30281);goog.events.removeAll(node,type__$1);
{
var G__30294 = seq__30278;
var G__30295 = chunk__30279;
var G__30296 = count__30280;
var G__30297 = (i__30281 + 1);
seq__30278 = G__30294;
chunk__30279 = G__30295;
count__30280 = G__30296;
i__30281 = G__30297;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30278);if(temp__4092__auto__)
{var seq__30278__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30278__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__30278__$1);{
var G__30298 = cljs.core.chunk_rest.call(null,seq__30278__$1);
var G__30299 = c__4205__auto__;
var G__30300 = cljs.core.count.call(null,c__4205__auto__);
var G__30301 = 0;
seq__30278 = G__30298;
chunk__30279 = G__30299;
count__30280 = G__30300;
i__30281 = G__30301;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30278__$1);goog.events.removeAll(node,type__$1);
{
var G__30302 = cljs.core.next.call(null,seq__30278__$1);
var G__30303 = null;
var G__30304 = 0;
var G__30305 = 0;
seq__30278 = G__30302;
chunk__30279 = G__30303;
count__30280 = G__30304;
i__30281 = G__30305;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__30306 = parent;
var G__30307 = cljs.core.cons.call(null,parent,so_far);
n = G__30306;
so_far = G__30307;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__30316_30324 = cljs.core.seq.call(null,ancestors);var chunk__30317_30325 = null;var count__30318_30326 = 0;var i__30319_30327 = 0;while(true){
if((i__30319_30327 < count__30318_30326))
{var n_30328 = cljs.core._nth.call(null,chunk__30317_30325,i__30319_30327);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30328;
goog.events.fireListeners(n_30328,evt.type,true,evt);
}
{
var G__30329 = seq__30316_30324;
var G__30330 = chunk__30317_30325;
var G__30331 = count__30318_30326;
var G__30332 = (i__30319_30327 + 1);
seq__30316_30324 = G__30329;
chunk__30317_30325 = G__30330;
count__30318_30326 = G__30331;
i__30319_30327 = G__30332;
continue;
}
} else
{var temp__4092__auto___30333 = cljs.core.seq.call(null,seq__30316_30324);if(temp__4092__auto___30333)
{var seq__30316_30334__$1 = temp__4092__auto___30333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30316_30334__$1))
{var c__4205__auto___30335 = cljs.core.chunk_first.call(null,seq__30316_30334__$1);{
var G__30336 = cljs.core.chunk_rest.call(null,seq__30316_30334__$1);
var G__30337 = c__4205__auto___30335;
var G__30338 = cljs.core.count.call(null,c__4205__auto___30335);
var G__30339 = 0;
seq__30316_30324 = G__30336;
chunk__30317_30325 = G__30337;
count__30318_30326 = G__30338;
i__30319_30327 = G__30339;
continue;
}
} else
{var n_30340 = cljs.core.first.call(null,seq__30316_30334__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30340;
goog.events.fireListeners(n_30340,evt.type,true,evt);
}
{
var G__30341 = cljs.core.next.call(null,seq__30316_30334__$1);
var G__30342 = null;
var G__30343 = 0;
var G__30344 = 0;
seq__30316_30324 = G__30341;
chunk__30317_30325 = G__30342;
count__30318_30326 = G__30343;
i__30319_30327 = G__30344;
continue;
}
}
} else
{}
}
break;
}
var seq__30320_30345 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__30321_30346 = null;var count__30322_30347 = 0;var i__30323_30348 = 0;while(true){
if((i__30323_30348 < count__30322_30347))
{var n_30349 = cljs.core._nth.call(null,chunk__30321_30346,i__30323_30348);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30349;
goog.events.fireListeners(n_30349,evt.type,false,evt);
}
{
var G__30350 = seq__30320_30345;
var G__30351 = chunk__30321_30346;
var G__30352 = count__30322_30347;
var G__30353 = (i__30323_30348 + 1);
seq__30320_30345 = G__30350;
chunk__30321_30346 = G__30351;
count__30322_30347 = G__30352;
i__30323_30348 = G__30353;
continue;
}
} else
{var temp__4092__auto___30354 = cljs.core.seq.call(null,seq__30320_30345);if(temp__4092__auto___30354)
{var seq__30320_30355__$1 = temp__4092__auto___30354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30320_30355__$1))
{var c__4205__auto___30356 = cljs.core.chunk_first.call(null,seq__30320_30355__$1);{
var G__30357 = cljs.core.chunk_rest.call(null,seq__30320_30355__$1);
var G__30358 = c__4205__auto___30356;
var G__30359 = cljs.core.count.call(null,c__4205__auto___30356);
var G__30360 = 0;
seq__30320_30345 = G__30357;
chunk__30321_30346 = G__30358;
count__30322_30347 = G__30359;
i__30323_30348 = G__30360;
continue;
}
} else
{var n_30361 = cljs.core.first.call(null,seq__30320_30355__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30361;
goog.events.fireListeners(n_30361,evt.type,false,evt);
}
{
var G__30362 = cljs.core.next.call(null,seq__30320_30355__$1);
var G__30363 = null;
var G__30364 = 0;
var G__30365 = 0;
seq__30320_30345 = G__30362;
chunk__30321_30346 = G__30363;
count__30322_30347 = G__30364;
i__30323_30348 = G__30365;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3445__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3445__auto__))
{return o.dispatchEvent;
} else
{return and__3445__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__30372_30378 = cljs.core.seq.call(null,evt_map);var chunk__30373_30379 = null;var count__30374_30380 = 0;var i__30375_30381 = 0;while(true){
if((i__30375_30381 < count__30374_30380))
{var vec__30376_30382 = cljs.core._nth.call(null,chunk__30373_30379,i__30375_30381);var k_30383 = cljs.core.nth.call(null,vec__30376_30382,0,null);var v_30384 = cljs.core.nth.call(null,vec__30376_30382,1,null);(evt[k_30383] = v_30384);
{
var G__30385 = seq__30372_30378;
var G__30386 = chunk__30373_30379;
var G__30387 = count__30374_30380;
var G__30388 = (i__30375_30381 + 1);
seq__30372_30378 = G__30385;
chunk__30373_30379 = G__30386;
count__30374_30380 = G__30387;
i__30375_30381 = G__30388;
continue;
}
} else
{var temp__4092__auto___30389 = cljs.core.seq.call(null,seq__30372_30378);if(temp__4092__auto___30389)
{var seq__30372_30390__$1 = temp__4092__auto___30389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30372_30390__$1))
{var c__4205__auto___30391 = cljs.core.chunk_first.call(null,seq__30372_30390__$1);{
var G__30392 = cljs.core.chunk_rest.call(null,seq__30372_30390__$1);
var G__30393 = c__4205__auto___30391;
var G__30394 = cljs.core.count.call(null,c__4205__auto___30391);
var G__30395 = 0;
seq__30372_30378 = G__30392;
chunk__30373_30379 = G__30393;
count__30374_30380 = G__30394;
i__30375_30381 = G__30395;
continue;
}
} else
{var vec__30377_30396 = cljs.core.first.call(null,seq__30372_30390__$1);var k_30397 = cljs.core.nth.call(null,vec__30377_30396,0,null);var v_30398 = cljs.core.nth.call(null,vec__30377_30396,1,null);(evt[k_30397] = v_30398);
{
var G__30399 = cljs.core.next.call(null,seq__30372_30390__$1);
var G__30400 = null;
var G__30401 = 0;
var G__30402 = 0;
seq__30372_30378 = G__30399;
chunk__30373_30379 = G__30400;
count__30374_30380 = G__30401;
i__30375_30381 = G__30402;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__30403_SHARP_){return goog.events.getListeners(p1__30403_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map