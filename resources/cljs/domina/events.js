// Compiled by ClojureScript 0.0-2156
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj159136 = {};return obj159136;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.prevent_default[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.prevent_default["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.target[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.target["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.current_target[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.current_target["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.event_type[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.event_type["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.raw_event[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.raw_event["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t159140 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t159140 = (function (evt,f,create_listener_function,meta159141){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta159141 = meta159141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t159140.cljs$lang$type = true;
domina.events.t159140.cljs$lang$ctorStr = "domina.events/t159140";
domina.events.t159140.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"domina.events/t159140");
});
domina.events.t159140.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t159140.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3403__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return not_found;
}
});
domina.events.t159140.prototype.domina$events$Event$ = true;
domina.events.t159140.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t159140.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t159140.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t159140.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t159140.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t159140.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t159140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_159142){var self__ = this;
var _159142__$1 = this;return self__.meta159141;
});
domina.events.t159140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_159142,meta159141__$1){var self__ = this;
var _159142__$1 = this;return (new domina.events.t159140(self__.evt,self__.f,self__.create_listener_function,meta159141__$1));
});
domina.events.__GT_t159140 = (function __GT_t159140(evt__$1,f__$1,create_listener_function__$1,meta159141){return (new domina.events.t159140(evt__$1,f__$1,create_listener_function__$1,meta159141));
});
}
return (new domina.events.t159140(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4120__auto__ = (function iter__159147(s__159148){return (new cljs.core.LazySeq(null,(function (){var s__159148__$1 = s__159148;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__159148__$1);if(temp__4092__auto__)
{var s__159148__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__159148__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__159148__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__159150 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__159149 = 0;while(true){
if((i__159149 < size__4119__auto__))
{var node = cljs.core._nth.call(null,c__4118__auto__,i__159149);cljs.core.chunk_append.call(null,b__159150,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__159151 = (i__159149 + 1);
i__159149 = G__159151;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__159150),iter__159147.call(null,cljs.core.chunk_rest.call(null,s__159148__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__159150),null);
}
} else
{var node = cljs.core.first.call(null,s__159148__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__159147.call(null,cljs.core.rest.call(null,s__159148__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__159160 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159161 = null;var count__159162 = 0;var i__159163 = 0;while(true){
if((i__159163 < count__159162))
{var node = cljs.core._nth.call(null,chunk__159161,i__159163);goog.events.removeAll(node);
{
var G__159168 = seq__159160;
var G__159169 = chunk__159161;
var G__159170 = count__159162;
var G__159171 = (i__159163 + 1);
seq__159160 = G__159168;
chunk__159161 = G__159169;
count__159162 = G__159170;
i__159163 = G__159171;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__159160);if(temp__4092__auto__)
{var seq__159160__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159160__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__159160__$1);{
var G__159172 = cljs.core.chunk_rest.call(null,seq__159160__$1);
var G__159173 = c__4151__auto__;
var G__159174 = cljs.core.count.call(null,c__4151__auto__);
var G__159175 = 0;
seq__159160 = G__159172;
chunk__159161 = G__159173;
count__159162 = G__159174;
i__159163 = G__159175;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__159160__$1);goog.events.removeAll(node);
{
var G__159176 = cljs.core.next.call(null,seq__159160__$1);
var G__159177 = null;
var G__159178 = 0;
var G__159179 = 0;
seq__159160 = G__159176;
chunk__159161 = G__159177;
count__159162 = G__159178;
i__159163 = G__159179;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__159164 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159165 = null;var count__159166 = 0;var i__159167 = 0;while(true){
if((i__159167 < count__159166))
{var node = cljs.core._nth.call(null,chunk__159165,i__159167);goog.events.removeAll(node,type__$1);
{
var G__159180 = seq__159164;
var G__159181 = chunk__159165;
var G__159182 = count__159166;
var G__159183 = (i__159167 + 1);
seq__159164 = G__159180;
chunk__159165 = G__159181;
count__159166 = G__159182;
i__159167 = G__159183;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__159164);if(temp__4092__auto__)
{var seq__159164__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159164__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__159164__$1);{
var G__159184 = cljs.core.chunk_rest.call(null,seq__159164__$1);
var G__159185 = c__4151__auto__;
var G__159186 = cljs.core.count.call(null,c__4151__auto__);
var G__159187 = 0;
seq__159164 = G__159184;
chunk__159165 = G__159185;
count__159166 = G__159186;
i__159167 = G__159187;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__159164__$1);goog.events.removeAll(node,type__$1);
{
var G__159188 = cljs.core.next.call(null,seq__159164__$1);
var G__159189 = null;
var G__159190 = 0;
var G__159191 = 0;
seq__159164 = G__159188;
chunk__159165 = G__159189;
count__159166 = G__159190;
i__159167 = G__159191;
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
var G__159192 = parent;
var G__159193 = cljs.core.cons.call(null,parent,so_far);
n = G__159192;
so_far = G__159193;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__159202_159210 = cljs.core.seq.call(null,ancestors);var chunk__159203_159211 = null;var count__159204_159212 = 0;var i__159205_159213 = 0;while(true){
if((i__159205_159213 < count__159204_159212))
{var n_159214 = cljs.core._nth.call(null,chunk__159203_159211,i__159205_159213);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_159214;
goog.events.fireListeners(n_159214,evt.type,true,evt);
}
{
var G__159215 = seq__159202_159210;
var G__159216 = chunk__159203_159211;
var G__159217 = count__159204_159212;
var G__159218 = (i__159205_159213 + 1);
seq__159202_159210 = G__159215;
chunk__159203_159211 = G__159216;
count__159204_159212 = G__159217;
i__159205_159213 = G__159218;
continue;
}
} else
{var temp__4092__auto___159219 = cljs.core.seq.call(null,seq__159202_159210);if(temp__4092__auto___159219)
{var seq__159202_159220__$1 = temp__4092__auto___159219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159202_159220__$1))
{var c__4151__auto___159221 = cljs.core.chunk_first.call(null,seq__159202_159220__$1);{
var G__159222 = cljs.core.chunk_rest.call(null,seq__159202_159220__$1);
var G__159223 = c__4151__auto___159221;
var G__159224 = cljs.core.count.call(null,c__4151__auto___159221);
var G__159225 = 0;
seq__159202_159210 = G__159222;
chunk__159203_159211 = G__159223;
count__159204_159212 = G__159224;
i__159205_159213 = G__159225;
continue;
}
} else
{var n_159226 = cljs.core.first.call(null,seq__159202_159220__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_159226;
goog.events.fireListeners(n_159226,evt.type,true,evt);
}
{
var G__159227 = cljs.core.next.call(null,seq__159202_159220__$1);
var G__159228 = null;
var G__159229 = 0;
var G__159230 = 0;
seq__159202_159210 = G__159227;
chunk__159203_159211 = G__159228;
count__159204_159212 = G__159229;
i__159205_159213 = G__159230;
continue;
}
}
} else
{}
}
break;
}
var seq__159206_159231 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__159207_159232 = null;var count__159208_159233 = 0;var i__159209_159234 = 0;while(true){
if((i__159209_159234 < count__159208_159233))
{var n_159235 = cljs.core._nth.call(null,chunk__159207_159232,i__159209_159234);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_159235;
goog.events.fireListeners(n_159235,evt.type,false,evt);
}
{
var G__159236 = seq__159206_159231;
var G__159237 = chunk__159207_159232;
var G__159238 = count__159208_159233;
var G__159239 = (i__159209_159234 + 1);
seq__159206_159231 = G__159236;
chunk__159207_159232 = G__159237;
count__159208_159233 = G__159238;
i__159209_159234 = G__159239;
continue;
}
} else
{var temp__4092__auto___159240 = cljs.core.seq.call(null,seq__159206_159231);if(temp__4092__auto___159240)
{var seq__159206_159241__$1 = temp__4092__auto___159240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159206_159241__$1))
{var c__4151__auto___159242 = cljs.core.chunk_first.call(null,seq__159206_159241__$1);{
var G__159243 = cljs.core.chunk_rest.call(null,seq__159206_159241__$1);
var G__159244 = c__4151__auto___159242;
var G__159245 = cljs.core.count.call(null,c__4151__auto___159242);
var G__159246 = 0;
seq__159206_159231 = G__159243;
chunk__159207_159232 = G__159244;
count__159208_159233 = G__159245;
i__159209_159234 = G__159246;
continue;
}
} else
{var n_159247 = cljs.core.first.call(null,seq__159206_159241__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_159247;
goog.events.fireListeners(n_159247,evt.type,false,evt);
}
{
var G__159248 = cljs.core.next.call(null,seq__159206_159241__$1);
var G__159249 = null;
var G__159250 = 0;
var G__159251 = 0;
seq__159206_159231 = G__159248;
chunk__159207_159232 = G__159249;
count__159208_159233 = G__159250;
i__159209_159234 = G__159251;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3391__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3391__auto__))
{return o.dispatchEvent;
} else
{return and__3391__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__159258_159264 = cljs.core.seq.call(null,evt_map);var chunk__159259_159265 = null;var count__159260_159266 = 0;var i__159261_159267 = 0;while(true){
if((i__159261_159267 < count__159260_159266))
{var vec__159262_159268 = cljs.core._nth.call(null,chunk__159259_159265,i__159261_159267);var k_159269 = cljs.core.nth.call(null,vec__159262_159268,0,null);var v_159270 = cljs.core.nth.call(null,vec__159262_159268,1,null);(evt[k_159269] = v_159270);
{
var G__159271 = seq__159258_159264;
var G__159272 = chunk__159259_159265;
var G__159273 = count__159260_159266;
var G__159274 = (i__159261_159267 + 1);
seq__159258_159264 = G__159271;
chunk__159259_159265 = G__159272;
count__159260_159266 = G__159273;
i__159261_159267 = G__159274;
continue;
}
} else
{var temp__4092__auto___159275 = cljs.core.seq.call(null,seq__159258_159264);if(temp__4092__auto___159275)
{var seq__159258_159276__$1 = temp__4092__auto___159275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159258_159276__$1))
{var c__4151__auto___159277 = cljs.core.chunk_first.call(null,seq__159258_159276__$1);{
var G__159278 = cljs.core.chunk_rest.call(null,seq__159258_159276__$1);
var G__159279 = c__4151__auto___159277;
var G__159280 = cljs.core.count.call(null,c__4151__auto___159277);
var G__159281 = 0;
seq__159258_159264 = G__159278;
chunk__159259_159265 = G__159279;
count__159260_159266 = G__159280;
i__159261_159267 = G__159281;
continue;
}
} else
{var vec__159263_159282 = cljs.core.first.call(null,seq__159258_159276__$1);var k_159283 = cljs.core.nth.call(null,vec__159263_159282,0,null);var v_159284 = cljs.core.nth.call(null,vec__159263_159282,1,null);(evt[k_159283] = v_159284);
{
var G__159285 = cljs.core.next.call(null,seq__159258_159276__$1);
var G__159286 = null;
var G__159287 = 0;
var G__159288 = 0;
seq__159258_159264 = G__159285;
chunk__159259_159265 = G__159286;
count__159260_159266 = G__159287;
i__159261_159267 = G__159288;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__159289_SHARP_){return goog.events.getListeners(p1__159289_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map