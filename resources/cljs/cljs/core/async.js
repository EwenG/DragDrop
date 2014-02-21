// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27260 = (function (f,fn_handler,meta27261){
this.f = f;
this.fn_handler = fn_handler;
this.meta27261 = meta27261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27260.cljs$lang$type = true;
cljs.core.async.t27260.cljs$lang$ctorStr = "cljs.core.async/t27260";
cljs.core.async.t27260.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27260");
});
cljs.core.async.t27260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27262){var self__ = this;
var _27262__$1 = this;return self__.meta27261;
});
cljs.core.async.t27260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27262,meta27261__$1){var self__ = this;
var _27262__$1 = this;return (new cljs.core.async.t27260(self__.f,self__.fn_handler,meta27261__$1));
});
cljs.core.async.__GT_t27260 = (function __GT_t27260(f__$1,fn_handler__$1,meta27261){return (new cljs.core.async.t27260(f__$1,fn_handler__$1,meta27261));
});
}
return (new cljs.core.async.t27260(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27264 = buff;if(G__27264)
{var bit__4107__auto__ = null;if(cljs.core.truth_((function (){var or__3457__auto__ = bit__4107__auto__;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return G__27264.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27264);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_27265 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27265);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_27265);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4305__auto___27266 = n;var x_27267 = 0;while(true){
if((x_27267 < n__4305__auto___27266))
{(a[x_27267] = 0);
{
var G__27268 = (x_27267 + 1);
x_27267 = G__27268;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__27269 = (i + 1);
i = G__27269;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27273 = (function (flag,alt_flag,meta27274){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27274 = meta27274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27273.cljs$lang$type = true;
cljs.core.async.t27273.cljs$lang$ctorStr = "cljs.core.async/t27273";
cljs.core.async.t27273.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27273");
});
cljs.core.async.t27273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t27273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t27273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27275){var self__ = this;
var _27275__$1 = this;return self__.meta27274;
});
cljs.core.async.t27273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27275,meta27274__$1){var self__ = this;
var _27275__$1 = this;return (new cljs.core.async.t27273(self__.flag,self__.alt_flag,meta27274__$1));
});
cljs.core.async.__GT_t27273 = (function __GT_t27273(flag__$1,alt_flag__$1,meta27274){return (new cljs.core.async.t27273(flag__$1,alt_flag__$1,meta27274));
});
}
return (new cljs.core.async.t27273(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27279 = (function (cb,flag,alt_handler,meta27280){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27280 = meta27280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27279.cljs$lang$type = true;
cljs.core.async.t27279.cljs$lang$ctorStr = "cljs.core.async/t27279";
cljs.core.async.t27279.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27279");
});
cljs.core.async.t27279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27281){var self__ = this;
var _27281__$1 = this;return self__.meta27280;
});
cljs.core.async.t27279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27281,meta27280__$1){var self__ = this;
var _27281__$1 = this;return (new cljs.core.async.t27279(self__.cb,self__.flag,self__.alt_handler,meta27280__$1));
});
cljs.core.async.__GT_t27279 = (function __GT_t27279(cb__$1,flag__$1,alt_handler__$1,meta27280){return (new cljs.core.async.t27279(cb__$1,flag__$1,alt_handler__$1,meta27280));
});
}
return (new cljs.core.async.t27279(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27282_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27282_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27283_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27283_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3457__auto__ = wport;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__27284 = (i + 1);
i = G__27284;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3457__auto__ = ret;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3445__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3445__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3445__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__27285){var map__27287 = p__27285;var map__27287__$1 = ((cljs.core.seq_QMARK_.call(null,map__27287))?cljs.core.apply.call(null,cljs.core.hash_map,map__27287):map__27287);var opts = map__27287__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27285 = null;if (arguments.length > 1) {
  p__27285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27285);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27288){
var ports = cljs.core.first(arglist__27288);
var p__27285 = cljs.core.rest(arglist__27288);
return alts_BANG___delegate(ports,p__27285);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27296 = (function (ch,f,map_LT_,meta27297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27297 = meta27297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27296.cljs$lang$type = true;
cljs.core.async.t27296.cljs$lang$ctorStr = "cljs.core.async/t27296";
cljs.core.async.t27296.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27296");
});
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27299 = (function (fn1,_,meta27297,ch,f,map_LT_,meta27300){
this.fn1 = fn1;
this._ = _;
this.meta27297 = meta27297;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27300 = meta27300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27299.cljs$lang$type = true;
cljs.core.async.t27299.cljs$lang$ctorStr = "cljs.core.async/t27299";
cljs.core.async.t27299.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27299");
});
cljs.core.async.t27299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t27299.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t27299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__27289_SHARP_){return f1.call(null,(((p1__27289_SHARP_ == null))?null:self__.f.call(null,p1__27289_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t27299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27301){var self__ = this;
var _27301__$1 = this;return self__.meta27300;
});
cljs.core.async.t27299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27301,meta27300__$1){var self__ = this;
var _27301__$1 = this;return (new cljs.core.async.t27299(self__.fn1,self__._,self__.meta27297,self__.ch,self__.f,self__.map_LT_,meta27300__$1));
});
cljs.core.async.__GT_t27299 = (function __GT_t27299(fn1__$1,___$2,meta27297__$1,ch__$2,f__$2,map_LT___$2,meta27300){return (new cljs.core.async.t27299(fn1__$1,___$2,meta27297__$1,ch__$2,f__$2,map_LT___$2,meta27300));
});
}
return (new cljs.core.async.t27299(fn1,___$1,self__.meta27297,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3445__auto__ = ret;if(cljs.core.truth_(and__3445__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3445__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27298){var self__ = this;
var _27298__$1 = this;return self__.meta27297;
});
cljs.core.async.t27296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27298,meta27297__$1){var self__ = this;
var _27298__$1 = this;return (new cljs.core.async.t27296(self__.ch,self__.f,self__.map_LT_,meta27297__$1));
});
cljs.core.async.__GT_t27296 = (function __GT_t27296(ch__$1,f__$1,map_LT___$1,meta27297){return (new cljs.core.async.t27296(ch__$1,f__$1,map_LT___$1,meta27297));
});
}
return (new cljs.core.async.t27296(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27305 = (function (ch,f,map_GT_,meta27306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27306 = meta27306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27305.cljs$lang$type = true;
cljs.core.async.t27305.cljs$lang$ctorStr = "cljs.core.async/t27305";
cljs.core.async.t27305.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27305");
});
cljs.core.async.t27305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27307){var self__ = this;
var _27307__$1 = this;return self__.meta27306;
});
cljs.core.async.t27305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27307,meta27306__$1){var self__ = this;
var _27307__$1 = this;return (new cljs.core.async.t27305(self__.ch,self__.f,self__.map_GT_,meta27306__$1));
});
cljs.core.async.__GT_t27305 = (function __GT_t27305(ch__$1,f__$1,map_GT___$1,meta27306){return (new cljs.core.async.t27305(ch__$1,f__$1,map_GT___$1,meta27306));
});
}
return (new cljs.core.async.t27305(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27311 = (function (ch,p,filter_GT_,meta27312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27312 = meta27312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27311.cljs$lang$type = true;
cljs.core.async.t27311.cljs$lang$ctorStr = "cljs.core.async/t27311";
cljs.core.async.t27311.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t27311");
});
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27313){var self__ = this;
var _27313__$1 = this;return self__.meta27312;
});
cljs.core.async.t27311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27313,meta27312__$1){var self__ = this;
var _27313__$1 = this;return (new cljs.core.async.t27311(self__.ch,self__.p,self__.filter_GT_,meta27312__$1));
});
cljs.core.async.__GT_t27311 = (function __GT_t27311(ch__$1,p__$1,filter_GT___$1,meta27312){return (new cljs.core.async.t27311(ch__$1,p__$1,filter_GT___$1,meta27312));
});
}
return (new cljs.core.async.t27311(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5593__auto___27396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_27375){var state_val_27376 = (state_27375[1]);if((state_val_27376 === 1))
{var state_27375__$1 = state_27375;var statearr_27377_27397 = state_27375__$1;(statearr_27377_27397[2] = null);
(statearr_27377_27397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 2))
{var state_27375__$1 = state_27375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27375__$1,4,ch);
} else
{if((state_val_27376 === 3))
{var inst_27373 = (state_27375[2]);var state_27375__$1 = state_27375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27375__$1,inst_27373);
} else
{if((state_val_27376 === 4))
{var inst_27357 = (state_27375[7]);var inst_27357__$1 = (state_27375[2]);var inst_27358 = (inst_27357__$1 == null);var state_27375__$1 = (function (){var statearr_27378 = state_27375;(statearr_27378[7] = inst_27357__$1);
return statearr_27378;
})();if(cljs.core.truth_(inst_27358))
{var statearr_27379_27398 = state_27375__$1;(statearr_27379_27398[1] = 5);
} else
{var statearr_27380_27399 = state_27375__$1;(statearr_27380_27399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 5))
{var inst_27360 = cljs.core.async.close_BANG_.call(null,out);var state_27375__$1 = state_27375;var statearr_27381_27400 = state_27375__$1;(statearr_27381_27400[2] = inst_27360);
(statearr_27381_27400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 6))
{var inst_27357 = (state_27375[7]);var inst_27362 = p.call(null,inst_27357);var state_27375__$1 = state_27375;if(cljs.core.truth_(inst_27362))
{var statearr_27382_27401 = state_27375__$1;(statearr_27382_27401[1] = 8);
} else
{var statearr_27383_27402 = state_27375__$1;(statearr_27383_27402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 7))
{var inst_27371 = (state_27375[2]);var state_27375__$1 = state_27375;var statearr_27384_27403 = state_27375__$1;(statearr_27384_27403[2] = inst_27371);
(statearr_27384_27403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 8))
{var inst_27357 = (state_27375[7]);var state_27375__$1 = state_27375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27375__$1,11,out,inst_27357);
} else
{if((state_val_27376 === 9))
{var state_27375__$1 = state_27375;var statearr_27385_27404 = state_27375__$1;(statearr_27385_27404[2] = null);
(statearr_27385_27404[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 10))
{var inst_27368 = (state_27375[2]);var state_27375__$1 = (function (){var statearr_27386 = state_27375;(statearr_27386[8] = inst_27368);
return statearr_27386;
})();var statearr_27387_27405 = state_27375__$1;(statearr_27387_27405[2] = null);
(statearr_27387_27405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27376 === 11))
{var inst_27365 = (state_27375[2]);var state_27375__$1 = state_27375;var statearr_27388_27406 = state_27375__$1;(statearr_27388_27406[2] = inst_27365);
(statearr_27388_27406[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_27392 = [null,null,null,null,null,null,null,null,null];(statearr_27392[0] = state_machine__5579__auto__);
(statearr_27392[1] = 1);
return statearr_27392;
});
var state_machine__5579__auto____1 = (function (state_27375){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_27375);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e27393){if((e27393 instanceof Object))
{var ex__5582__auto__ = e27393;var statearr_27394_27407 = state_27375;(statearr_27394_27407[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27408 = state_27375;
state_27375 = G__27408;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_27375){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_27375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_27395 = f__5594__auto__.call(null);(statearr_27395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___27396);
return statearr_27395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5593__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_27574){var state_val_27575 = (state_27574[1]);if((state_val_27575 === 1))
{var state_27574__$1 = state_27574;var statearr_27576_27617 = state_27574__$1;(statearr_27576_27617[2] = null);
(statearr_27576_27617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 2))
{var state_27574__$1 = state_27574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27574__$1,4,in$);
} else
{if((state_val_27575 === 3))
{var inst_27572 = (state_27574[2]);var state_27574__$1 = state_27574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27574__$1,inst_27572);
} else
{if((state_val_27575 === 4))
{var inst_27515 = (state_27574[7]);var inst_27515__$1 = (state_27574[2]);var inst_27516 = (inst_27515__$1 == null);var state_27574__$1 = (function (){var statearr_27577 = state_27574;(statearr_27577[7] = inst_27515__$1);
return statearr_27577;
})();if(cljs.core.truth_(inst_27516))
{var statearr_27578_27618 = state_27574__$1;(statearr_27578_27618[1] = 5);
} else
{var statearr_27579_27619 = state_27574__$1;(statearr_27579_27619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 5))
{var inst_27518 = cljs.core.async.close_BANG_.call(null,out);var state_27574__$1 = state_27574;var statearr_27580_27620 = state_27574__$1;(statearr_27580_27620[2] = inst_27518);
(statearr_27580_27620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 6))
{var inst_27515 = (state_27574[7]);var inst_27524 = f.call(null,inst_27515);var inst_27525 = cljs.core.seq.call(null,inst_27524);var inst_27526 = inst_27525;var inst_27527 = null;var inst_27528 = 0;var inst_27529 = 0;var state_27574__$1 = (function (){var statearr_27581 = state_27574;(statearr_27581[8] = inst_27526);
(statearr_27581[9] = inst_27527);
(statearr_27581[10] = inst_27528);
(statearr_27581[11] = inst_27529);
return statearr_27581;
})();var statearr_27582_27621 = state_27574__$1;(statearr_27582_27621[2] = null);
(statearr_27582_27621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 7))
{var inst_27570 = (state_27574[2]);var state_27574__$1 = state_27574;var statearr_27583_27622 = state_27574__$1;(statearr_27583_27622[2] = inst_27570);
(statearr_27583_27622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 8))
{var inst_27528 = (state_27574[10]);var inst_27529 = (state_27574[11]);var inst_27531 = (inst_27529 < inst_27528);var inst_27532 = inst_27531;var state_27574__$1 = state_27574;if(cljs.core.truth_(inst_27532))
{var statearr_27584_27623 = state_27574__$1;(statearr_27584_27623[1] = 10);
} else
{var statearr_27585_27624 = state_27574__$1;(statearr_27585_27624[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 9))
{var inst_27562 = (state_27574[2]);var inst_27563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27574__$1 = (function (){var statearr_27586 = state_27574;(statearr_27586[12] = inst_27562);
return statearr_27586;
})();if(cljs.core.truth_(inst_27563))
{var statearr_27587_27625 = state_27574__$1;(statearr_27587_27625[1] = 21);
} else
{var statearr_27588_27626 = state_27574__$1;(statearr_27588_27626[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 10))
{var inst_27527 = (state_27574[9]);var inst_27529 = (state_27574[11]);var inst_27534 = cljs.core._nth.call(null,inst_27527,inst_27529);var state_27574__$1 = state_27574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27574__$1,13,out,inst_27534);
} else
{if((state_val_27575 === 11))
{var inst_27526 = (state_27574[8]);var inst_27540 = (state_27574[13]);var inst_27540__$1 = cljs.core.seq.call(null,inst_27526);var state_27574__$1 = (function (){var statearr_27592 = state_27574;(statearr_27592[13] = inst_27540__$1);
return statearr_27592;
})();if(inst_27540__$1)
{var statearr_27593_27627 = state_27574__$1;(statearr_27593_27627[1] = 14);
} else
{var statearr_27594_27628 = state_27574__$1;(statearr_27594_27628[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 12))
{var inst_27560 = (state_27574[2]);var state_27574__$1 = state_27574;var statearr_27595_27629 = state_27574__$1;(statearr_27595_27629[2] = inst_27560);
(statearr_27595_27629[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 13))
{var inst_27526 = (state_27574[8]);var inst_27527 = (state_27574[9]);var inst_27528 = (state_27574[10]);var inst_27529 = (state_27574[11]);var inst_27536 = (state_27574[2]);var inst_27537 = (inst_27529 + 1);var tmp27589 = inst_27526;var tmp27590 = inst_27527;var tmp27591 = inst_27528;var inst_27526__$1 = tmp27589;var inst_27527__$1 = tmp27590;var inst_27528__$1 = tmp27591;var inst_27529__$1 = inst_27537;var state_27574__$1 = (function (){var statearr_27596 = state_27574;(statearr_27596[8] = inst_27526__$1);
(statearr_27596[9] = inst_27527__$1);
(statearr_27596[10] = inst_27528__$1);
(statearr_27596[14] = inst_27536);
(statearr_27596[11] = inst_27529__$1);
return statearr_27596;
})();var statearr_27597_27630 = state_27574__$1;(statearr_27597_27630[2] = null);
(statearr_27597_27630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 14))
{var inst_27540 = (state_27574[13]);var inst_27542 = cljs.core.chunked_seq_QMARK_.call(null,inst_27540);var state_27574__$1 = state_27574;if(inst_27542)
{var statearr_27598_27631 = state_27574__$1;(statearr_27598_27631[1] = 17);
} else
{var statearr_27599_27632 = state_27574__$1;(statearr_27599_27632[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 15))
{var state_27574__$1 = state_27574;var statearr_27600_27633 = state_27574__$1;(statearr_27600_27633[2] = null);
(statearr_27600_27633[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 16))
{var inst_27558 = (state_27574[2]);var state_27574__$1 = state_27574;var statearr_27601_27634 = state_27574__$1;(statearr_27601_27634[2] = inst_27558);
(statearr_27601_27634[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 17))
{var inst_27540 = (state_27574[13]);var inst_27544 = cljs.core.chunk_first.call(null,inst_27540);var inst_27545 = cljs.core.chunk_rest.call(null,inst_27540);var inst_27546 = cljs.core.count.call(null,inst_27544);var inst_27526 = inst_27545;var inst_27527 = inst_27544;var inst_27528 = inst_27546;var inst_27529 = 0;var state_27574__$1 = (function (){var statearr_27602 = state_27574;(statearr_27602[8] = inst_27526);
(statearr_27602[9] = inst_27527);
(statearr_27602[10] = inst_27528);
(statearr_27602[11] = inst_27529);
return statearr_27602;
})();var statearr_27603_27635 = state_27574__$1;(statearr_27603_27635[2] = null);
(statearr_27603_27635[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 18))
{var inst_27540 = (state_27574[13]);var inst_27549 = cljs.core.first.call(null,inst_27540);var state_27574__$1 = state_27574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27574__$1,20,out,inst_27549);
} else
{if((state_val_27575 === 19))
{var inst_27555 = (state_27574[2]);var state_27574__$1 = state_27574;var statearr_27604_27636 = state_27574__$1;(statearr_27604_27636[2] = inst_27555);
(statearr_27604_27636[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 20))
{var inst_27540 = (state_27574[13]);var inst_27551 = (state_27574[2]);var inst_27552 = cljs.core.next.call(null,inst_27540);var inst_27526 = inst_27552;var inst_27527 = null;var inst_27528 = 0;var inst_27529 = 0;var state_27574__$1 = (function (){var statearr_27605 = state_27574;(statearr_27605[8] = inst_27526);
(statearr_27605[15] = inst_27551);
(statearr_27605[9] = inst_27527);
(statearr_27605[10] = inst_27528);
(statearr_27605[11] = inst_27529);
return statearr_27605;
})();var statearr_27606_27637 = state_27574__$1;(statearr_27606_27637[2] = null);
(statearr_27606_27637[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 21))
{var state_27574__$1 = state_27574;var statearr_27607_27638 = state_27574__$1;(statearr_27607_27638[2] = null);
(statearr_27607_27638[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 22))
{var state_27574__$1 = state_27574;var statearr_27608_27639 = state_27574__$1;(statearr_27608_27639[2] = null);
(statearr_27608_27639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27575 === 23))
{var inst_27568 = (state_27574[2]);var state_27574__$1 = state_27574;var statearr_27609_27640 = state_27574__$1;(statearr_27609_27640[2] = inst_27568);
(statearr_27609_27640[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_27613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27613[0] = state_machine__5579__auto__);
(statearr_27613[1] = 1);
return statearr_27613;
});
var state_machine__5579__auto____1 = (function (state_27574){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_27574);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e27614){if((e27614 instanceof Object))
{var ex__5582__auto__ = e27614;var statearr_27615_27641 = state_27574;(statearr_27615_27641[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27642 = state_27574;
state_27574 = G__27642;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_27574){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_27574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_27616 = f__5594__auto__.call(null);(statearr_27616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto__);
return statearr_27616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return c__5593__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5593__auto___27737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_27713){var state_val_27714 = (state_27713[1]);if((state_val_27714 === 1))
{var state_27713__$1 = state_27713;var statearr_27715_27738 = state_27713__$1;(statearr_27715_27738[2] = null);
(statearr_27715_27738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 2))
{var state_27713__$1 = state_27713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27713__$1,4,from);
} else
{if((state_val_27714 === 3))
{var inst_27711 = (state_27713[2]);var state_27713__$1 = state_27713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27713__$1,inst_27711);
} else
{if((state_val_27714 === 4))
{var inst_27692 = (state_27713[7]);var inst_27692__$1 = (state_27713[2]);var inst_27693 = (inst_27692__$1 == null);var state_27713__$1 = (function (){var statearr_27716 = state_27713;(statearr_27716[7] = inst_27692__$1);
return statearr_27716;
})();if(cljs.core.truth_(inst_27693))
{var statearr_27717_27739 = state_27713__$1;(statearr_27717_27739[1] = 5);
} else
{var statearr_27718_27740 = state_27713__$1;(statearr_27718_27740[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 5))
{var state_27713__$1 = state_27713;if(cljs.core.truth_(close_QMARK_))
{var statearr_27719_27741 = state_27713__$1;(statearr_27719_27741[1] = 8);
} else
{var statearr_27720_27742 = state_27713__$1;(statearr_27720_27742[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 6))
{var inst_27692 = (state_27713[7]);var state_27713__$1 = state_27713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27713__$1,11,to,inst_27692);
} else
{if((state_val_27714 === 7))
{var inst_27709 = (state_27713[2]);var state_27713__$1 = state_27713;var statearr_27721_27743 = state_27713__$1;(statearr_27721_27743[2] = inst_27709);
(statearr_27721_27743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 8))
{var inst_27696 = cljs.core.async.close_BANG_.call(null,to);var state_27713__$1 = state_27713;var statearr_27722_27744 = state_27713__$1;(statearr_27722_27744[2] = inst_27696);
(statearr_27722_27744[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 9))
{var state_27713__$1 = state_27713;var statearr_27723_27745 = state_27713__$1;(statearr_27723_27745[2] = null);
(statearr_27723_27745[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 10))
{var inst_27699 = (state_27713[2]);var state_27713__$1 = state_27713;var statearr_27724_27746 = state_27713__$1;(statearr_27724_27746[2] = inst_27699);
(statearr_27724_27746[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 11))
{var inst_27702 = (state_27713[2]);var state_27713__$1 = state_27713;if(cljs.core.truth_(inst_27702))
{var statearr_27725_27747 = state_27713__$1;(statearr_27725_27747[1] = 12);
} else
{var statearr_27726_27748 = state_27713__$1;(statearr_27726_27748[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 12))
{var state_27713__$1 = state_27713;var statearr_27727_27749 = state_27713__$1;(statearr_27727_27749[2] = null);
(statearr_27727_27749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 13))
{var state_27713__$1 = state_27713;var statearr_27728_27750 = state_27713__$1;(statearr_27728_27750[2] = null);
(statearr_27728_27750[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27714 === 14))
{var inst_27707 = (state_27713[2]);var state_27713__$1 = state_27713;var statearr_27729_27751 = state_27713__$1;(statearr_27729_27751[2] = inst_27707);
(statearr_27729_27751[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_27733 = [null,null,null,null,null,null,null,null];(statearr_27733[0] = state_machine__5579__auto__);
(statearr_27733[1] = 1);
return statearr_27733;
});
var state_machine__5579__auto____1 = (function (state_27713){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_27713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e27734){if((e27734 instanceof Object))
{var ex__5582__auto__ = e27734;var statearr_27735_27752 = state_27713;(statearr_27735_27752[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27753 = state_27713;
state_27713 = G__27753;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_27713){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_27713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_27736 = f__5594__auto__.call(null);(statearr_27736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___27737);
return statearr_27736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5593__auto___27854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_27829){var state_val_27830 = (state_27829[1]);if((state_val_27830 === 1))
{var state_27829__$1 = state_27829;var statearr_27831_27855 = state_27829__$1;(statearr_27831_27855[2] = null);
(statearr_27831_27855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 2))
{var state_27829__$1 = state_27829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27829__$1,4,ch);
} else
{if((state_val_27830 === 3))
{var inst_27827 = (state_27829[2]);var state_27829__$1 = state_27829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27829__$1,inst_27827);
} else
{if((state_val_27830 === 4))
{var inst_27806 = (state_27829[7]);var inst_27806__$1 = (state_27829[2]);var inst_27807 = (inst_27806__$1 == null);var state_27829__$1 = (function (){var statearr_27832 = state_27829;(statearr_27832[7] = inst_27806__$1);
return statearr_27832;
})();if(cljs.core.truth_(inst_27807))
{var statearr_27833_27856 = state_27829__$1;(statearr_27833_27856[1] = 5);
} else
{var statearr_27834_27857 = state_27829__$1;(statearr_27834_27857[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 5))
{var inst_27809 = cljs.core.async.close_BANG_.call(null,tc);var inst_27810 = cljs.core.async.close_BANG_.call(null,fc);var state_27829__$1 = (function (){var statearr_27835 = state_27829;(statearr_27835[8] = inst_27809);
return statearr_27835;
})();var statearr_27836_27858 = state_27829__$1;(statearr_27836_27858[2] = inst_27810);
(statearr_27836_27858[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 6))
{var inst_27806 = (state_27829[7]);var inst_27812 = p.call(null,inst_27806);var state_27829__$1 = state_27829;if(cljs.core.truth_(inst_27812))
{var statearr_27837_27859 = state_27829__$1;(statearr_27837_27859[1] = 9);
} else
{var statearr_27838_27860 = state_27829__$1;(statearr_27838_27860[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 7))
{var inst_27825 = (state_27829[2]);var state_27829__$1 = state_27829;var statearr_27839_27861 = state_27829__$1;(statearr_27839_27861[2] = inst_27825);
(statearr_27839_27861[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 8))
{var inst_27818 = (state_27829[2]);var state_27829__$1 = state_27829;if(cljs.core.truth_(inst_27818))
{var statearr_27840_27862 = state_27829__$1;(statearr_27840_27862[1] = 12);
} else
{var statearr_27841_27863 = state_27829__$1;(statearr_27841_27863[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 9))
{var state_27829__$1 = state_27829;var statearr_27842_27864 = state_27829__$1;(statearr_27842_27864[2] = tc);
(statearr_27842_27864[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 10))
{var state_27829__$1 = state_27829;var statearr_27843_27865 = state_27829__$1;(statearr_27843_27865[2] = fc);
(statearr_27843_27865[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 11))
{var inst_27806 = (state_27829[7]);var inst_27816 = (state_27829[2]);var state_27829__$1 = state_27829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27829__$1,8,inst_27816,inst_27806);
} else
{if((state_val_27830 === 12))
{var state_27829__$1 = state_27829;var statearr_27844_27866 = state_27829__$1;(statearr_27844_27866[2] = null);
(statearr_27844_27866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 13))
{var state_27829__$1 = state_27829;var statearr_27845_27867 = state_27829__$1;(statearr_27845_27867[2] = null);
(statearr_27845_27867[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27830 === 14))
{var inst_27823 = (state_27829[2]);var state_27829__$1 = state_27829;var statearr_27846_27868 = state_27829__$1;(statearr_27846_27868[2] = inst_27823);
(statearr_27846_27868[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_27850 = [null,null,null,null,null,null,null,null,null];(statearr_27850[0] = state_machine__5579__auto__);
(statearr_27850[1] = 1);
return statearr_27850;
});
var state_machine__5579__auto____1 = (function (state_27829){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_27829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e27851){if((e27851 instanceof Object))
{var ex__5582__auto__ = e27851;var statearr_27852_27869 = state_27829;(statearr_27852_27869[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27870 = state_27829;
state_27829 = G__27870;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_27853 = f__5594__auto__.call(null);(statearr_27853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___27854);
return statearr_27853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5593__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_27917){var state_val_27918 = (state_27917[1]);if((state_val_27918 === 7))
{var inst_27913 = (state_27917[2]);var state_27917__$1 = state_27917;var statearr_27919_27935 = state_27917__$1;(statearr_27919_27935[2] = inst_27913);
(statearr_27919_27935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 6))
{var inst_27903 = (state_27917[7]);var inst_27906 = (state_27917[8]);var inst_27910 = f.call(null,inst_27903,inst_27906);var inst_27903__$1 = inst_27910;var state_27917__$1 = (function (){var statearr_27920 = state_27917;(statearr_27920[7] = inst_27903__$1);
return statearr_27920;
})();var statearr_27921_27936 = state_27917__$1;(statearr_27921_27936[2] = null);
(statearr_27921_27936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 5))
{var inst_27903 = (state_27917[7]);var state_27917__$1 = state_27917;var statearr_27922_27937 = state_27917__$1;(statearr_27922_27937[2] = inst_27903);
(statearr_27922_27937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 4))
{var inst_27906 = (state_27917[8]);var inst_27906__$1 = (state_27917[2]);var inst_27907 = (inst_27906__$1 == null);var state_27917__$1 = (function (){var statearr_27923 = state_27917;(statearr_27923[8] = inst_27906__$1);
return statearr_27923;
})();if(cljs.core.truth_(inst_27907))
{var statearr_27924_27938 = state_27917__$1;(statearr_27924_27938[1] = 5);
} else
{var statearr_27925_27939 = state_27917__$1;(statearr_27925_27939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 3))
{var inst_27915 = (state_27917[2]);var state_27917__$1 = state_27917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27917__$1,inst_27915);
} else
{if((state_val_27918 === 2))
{var state_27917__$1 = state_27917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,4,ch);
} else
{if((state_val_27918 === 1))
{var inst_27903 = init;var state_27917__$1 = (function (){var statearr_27926 = state_27917;(statearr_27926[7] = inst_27903);
return statearr_27926;
})();var statearr_27927_27940 = state_27917__$1;(statearr_27927_27940[2] = null);
(statearr_27927_27940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_27931 = [null,null,null,null,null,null,null,null,null];(statearr_27931[0] = state_machine__5579__auto__);
(statearr_27931[1] = 1);
return statearr_27931;
});
var state_machine__5579__auto____1 = (function (state_27917){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_27917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e27932){if((e27932 instanceof Object))
{var ex__5582__auto__ = e27932;var statearr_27933_27941 = state_27917;(statearr_27933_27941[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27942 = state_27917;
state_27917 = G__27942;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_27917){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_27917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_27934 = f__5594__auto__.call(null);(statearr_27934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto__);
return statearr_27934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return c__5593__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5593__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_28016){var state_val_28017 = (state_28016[1]);if((state_val_28017 === 1))
{var inst_27992 = cljs.core.seq.call(null,coll);var inst_27993 = inst_27992;var state_28016__$1 = (function (){var statearr_28018 = state_28016;(statearr_28018[7] = inst_27993);
return statearr_28018;
})();var statearr_28019_28041 = state_28016__$1;(statearr_28019_28041[2] = null);
(statearr_28019_28041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 2))
{var inst_27993 = (state_28016[7]);var state_28016__$1 = state_28016;if(cljs.core.truth_(inst_27993))
{var statearr_28020_28042 = state_28016__$1;(statearr_28020_28042[1] = 4);
} else
{var statearr_28021_28043 = state_28016__$1;(statearr_28021_28043[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 3))
{var inst_28014 = (state_28016[2]);var state_28016__$1 = state_28016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28016__$1,inst_28014);
} else
{if((state_val_28017 === 4))
{var inst_27993 = (state_28016[7]);var inst_27996 = cljs.core.first.call(null,inst_27993);var state_28016__$1 = state_28016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28016__$1,7,ch,inst_27996);
} else
{if((state_val_28017 === 5))
{var inst_27993 = (state_28016[7]);var state_28016__$1 = state_28016;var statearr_28022_28044 = state_28016__$1;(statearr_28022_28044[2] = inst_27993);
(statearr_28022_28044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 6))
{var inst_28001 = (state_28016[2]);var state_28016__$1 = state_28016;if(cljs.core.truth_(inst_28001))
{var statearr_28023_28045 = state_28016__$1;(statearr_28023_28045[1] = 8);
} else
{var statearr_28024_28046 = state_28016__$1;(statearr_28024_28046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 7))
{var inst_27998 = (state_28016[2]);var state_28016__$1 = state_28016;var statearr_28025_28047 = state_28016__$1;(statearr_28025_28047[2] = inst_27998);
(statearr_28025_28047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 8))
{var inst_27993 = (state_28016[7]);var inst_28003 = cljs.core.next.call(null,inst_27993);var inst_27993__$1 = inst_28003;var state_28016__$1 = (function (){var statearr_28026 = state_28016;(statearr_28026[7] = inst_27993__$1);
return statearr_28026;
})();var statearr_28027_28048 = state_28016__$1;(statearr_28027_28048[2] = null);
(statearr_28027_28048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 9))
{var state_28016__$1 = state_28016;if(cljs.core.truth_(close_QMARK_))
{var statearr_28028_28049 = state_28016__$1;(statearr_28028_28049[1] = 11);
} else
{var statearr_28029_28050 = state_28016__$1;(statearr_28029_28050[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 10))
{var inst_28012 = (state_28016[2]);var state_28016__$1 = state_28016;var statearr_28030_28051 = state_28016__$1;(statearr_28030_28051[2] = inst_28012);
(statearr_28030_28051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 11))
{var inst_28007 = cljs.core.async.close_BANG_.call(null,ch);var state_28016__$1 = state_28016;var statearr_28031_28052 = state_28016__$1;(statearr_28031_28052[2] = inst_28007);
(statearr_28031_28052[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 12))
{var state_28016__$1 = state_28016;var statearr_28032_28053 = state_28016__$1;(statearr_28032_28053[2] = null);
(statearr_28032_28053[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28017 === 13))
{var inst_28010 = (state_28016[2]);var state_28016__$1 = state_28016;var statearr_28033_28054 = state_28016__$1;(statearr_28033_28054[2] = inst_28010);
(statearr_28033_28054[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_28037 = [null,null,null,null,null,null,null,null];(statearr_28037[0] = state_machine__5579__auto__);
(statearr_28037[1] = 1);
return statearr_28037;
});
var state_machine__5579__auto____1 = (function (state_28016){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_28016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object))
{var ex__5582__auto__ = e28038;var statearr_28039_28055 = state_28016;(statearr_28039_28055[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28056 = state_28016;
state_28016 = G__28056;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_28016){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_28016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_28040 = f__5594__auto__.call(null);(statearr_28040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto__);
return statearr_28040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return c__5593__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj28058 = {};return obj28058;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3445__auto__ = _;if(and__3445__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3445__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4084__auto__ = (((_ == null))?null:_);return (function (){var or__3457__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj28060 = {};return obj28060;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28282 = (function (cs,ch,mult,meta28283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28283 = meta28283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28282.cljs$lang$type = true;
cljs.core.async.t28282.cljs$lang$ctorStr = "cljs.core.async/t28282";
cljs.core.async.t28282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t28282");
});})(cs))
;
cljs.core.async.t28282.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28284){var self__ = this;
var _28284__$1 = this;return self__.meta28283;
});})(cs))
;
cljs.core.async.t28282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28284,meta28283__$1){var self__ = this;
var _28284__$1 = this;return (new cljs.core.async.t28282(self__.cs,self__.ch,self__.mult,meta28283__$1));
});})(cs))
;
cljs.core.async.__GT_t28282 = ((function (cs){
return (function __GT_t28282(cs__$1,ch__$1,mult__$1,meta28283){return (new cljs.core.async.t28282(cs__$1,ch__$1,mult__$1,meta28283));
});})(cs))
;
}
return (new cljs.core.async.t28282(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5593__auto___28503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_28415){var state_val_28416 = (state_28415[1]);if((state_val_28416 === 32))
{var inst_28357 = (state_28415[7]);var inst_28358 = (state_28415[8]);var inst_28355 = (state_28415[9]);var inst_28356 = (state_28415[10]);var inst_28370 = (state_28415[2]);var inst_28371 = (inst_28358 + 1);var tmp28417 = inst_28357;var tmp28418 = inst_28355;var tmp28419 = inst_28356;var inst_28355__$1 = tmp28418;var inst_28356__$1 = tmp28419;var inst_28357__$1 = tmp28417;var inst_28358__$1 = inst_28371;var state_28415__$1 = (function (){var statearr_28420 = state_28415;(statearr_28420[11] = inst_28370);
(statearr_28420[7] = inst_28357__$1);
(statearr_28420[8] = inst_28358__$1);
(statearr_28420[9] = inst_28355__$1);
(statearr_28420[10] = inst_28356__$1);
return statearr_28420;
})();var statearr_28421_28504 = state_28415__$1;(statearr_28421_28504[2] = null);
(statearr_28421_28504[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 1))
{var state_28415__$1 = state_28415;var statearr_28422_28505 = state_28415__$1;(statearr_28422_28505[2] = null);
(statearr_28422_28505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 33))
{var inst_28374 = (state_28415[12]);var inst_28376 = cljs.core.chunked_seq_QMARK_.call(null,inst_28374);var state_28415__$1 = state_28415;if(inst_28376)
{var statearr_28423_28506 = state_28415__$1;(statearr_28423_28506[1] = 36);
} else
{var statearr_28424_28507 = state_28415__$1;(statearr_28424_28507[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 2))
{var state_28415__$1 = state_28415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,4,ch);
} else
{if((state_val_28416 === 34))
{var state_28415__$1 = state_28415;var statearr_28425_28508 = state_28415__$1;(statearr_28425_28508[2] = null);
(statearr_28425_28508[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 3))
{var inst_28413 = (state_28415[2]);var state_28415__$1 = state_28415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28415__$1,inst_28413);
} else
{if((state_val_28416 === 35))
{var inst_28397 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28426_28509 = state_28415__$1;(statearr_28426_28509[2] = inst_28397);
(statearr_28426_28509[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 4))
{var inst_28287 = (state_28415[13]);var inst_28287__$1 = (state_28415[2]);var inst_28288 = (inst_28287__$1 == null);var state_28415__$1 = (function (){var statearr_28427 = state_28415;(statearr_28427[13] = inst_28287__$1);
return statearr_28427;
})();if(cljs.core.truth_(inst_28288))
{var statearr_28428_28510 = state_28415__$1;(statearr_28428_28510[1] = 5);
} else
{var statearr_28429_28511 = state_28415__$1;(statearr_28429_28511[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 36))
{var inst_28374 = (state_28415[12]);var inst_28378 = cljs.core.chunk_first.call(null,inst_28374);var inst_28379 = cljs.core.chunk_rest.call(null,inst_28374);var inst_28380 = cljs.core.count.call(null,inst_28378);var inst_28355 = inst_28379;var inst_28356 = inst_28378;var inst_28357 = inst_28380;var inst_28358 = 0;var state_28415__$1 = (function (){var statearr_28430 = state_28415;(statearr_28430[7] = inst_28357);
(statearr_28430[8] = inst_28358);
(statearr_28430[9] = inst_28355);
(statearr_28430[10] = inst_28356);
return statearr_28430;
})();var statearr_28431_28512 = state_28415__$1;(statearr_28431_28512[2] = null);
(statearr_28431_28512[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 5))
{var inst_28294 = cljs.core.deref.call(null,cs);var inst_28295 = cljs.core.seq.call(null,inst_28294);var inst_28296 = inst_28295;var inst_28297 = null;var inst_28298 = 0;var inst_28299 = 0;var state_28415__$1 = (function (){var statearr_28432 = state_28415;(statearr_28432[14] = inst_28297);
(statearr_28432[15] = inst_28296);
(statearr_28432[16] = inst_28299);
(statearr_28432[17] = inst_28298);
return statearr_28432;
})();var statearr_28433_28513 = state_28415__$1;(statearr_28433_28513[2] = null);
(statearr_28433_28513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 37))
{var inst_28287 = (state_28415[13]);var inst_28383 = (state_28415[18]);var inst_28374 = (state_28415[12]);var inst_28383__$1 = cljs.core.first.call(null,inst_28374);var inst_28384 = cljs.core.async.put_BANG_.call(null,inst_28383__$1,inst_28287,done);var state_28415__$1 = (function (){var statearr_28434 = state_28415;(statearr_28434[18] = inst_28383__$1);
return statearr_28434;
})();if(cljs.core.truth_(inst_28384))
{var statearr_28435_28514 = state_28415__$1;(statearr_28435_28514[1] = 39);
} else
{var statearr_28436_28515 = state_28415__$1;(statearr_28436_28515[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 6))
{var inst_28347 = (state_28415[19]);var inst_28346 = cljs.core.deref.call(null,cs);var inst_28347__$1 = cljs.core.keys.call(null,inst_28346);var inst_28348 = cljs.core.count.call(null,inst_28347__$1);var inst_28349 = cljs.core.reset_BANG_.call(null,dctr,inst_28348);var inst_28354 = cljs.core.seq.call(null,inst_28347__$1);var inst_28355 = inst_28354;var inst_28356 = null;var inst_28357 = 0;var inst_28358 = 0;var state_28415__$1 = (function (){var statearr_28437 = state_28415;(statearr_28437[19] = inst_28347__$1);
(statearr_28437[7] = inst_28357);
(statearr_28437[8] = inst_28358);
(statearr_28437[9] = inst_28355);
(statearr_28437[10] = inst_28356);
(statearr_28437[20] = inst_28349);
return statearr_28437;
})();var statearr_28438_28516 = state_28415__$1;(statearr_28438_28516[2] = null);
(statearr_28438_28516[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 38))
{var inst_28394 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28439_28517 = state_28415__$1;(statearr_28439_28517[2] = inst_28394);
(statearr_28439_28517[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 7))
{var inst_28411 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28440_28518 = state_28415__$1;(statearr_28440_28518[2] = inst_28411);
(statearr_28440_28518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 39))
{var state_28415__$1 = state_28415;var statearr_28441_28519 = state_28415__$1;(statearr_28441_28519[2] = null);
(statearr_28441_28519[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 8))
{var inst_28299 = (state_28415[16]);var inst_28298 = (state_28415[17]);var inst_28301 = (inst_28299 < inst_28298);var inst_28302 = inst_28301;var state_28415__$1 = state_28415;if(cljs.core.truth_(inst_28302))
{var statearr_28442_28520 = state_28415__$1;(statearr_28442_28520[1] = 10);
} else
{var statearr_28443_28521 = state_28415__$1;(statearr_28443_28521[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 40))
{var inst_28383 = (state_28415[18]);var inst_28387 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28388 = cljs.core.async.untap_STAR_.call(null,m,inst_28383);var state_28415__$1 = (function (){var statearr_28444 = state_28415;(statearr_28444[21] = inst_28387);
return statearr_28444;
})();var statearr_28445_28522 = state_28415__$1;(statearr_28445_28522[2] = inst_28388);
(statearr_28445_28522[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 9))
{var inst_28344 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28446_28523 = state_28415__$1;(statearr_28446_28523[2] = inst_28344);
(statearr_28446_28523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 41))
{var inst_28374 = (state_28415[12]);var inst_28390 = (state_28415[2]);var inst_28391 = cljs.core.next.call(null,inst_28374);var inst_28355 = inst_28391;var inst_28356 = null;var inst_28357 = 0;var inst_28358 = 0;var state_28415__$1 = (function (){var statearr_28447 = state_28415;(statearr_28447[22] = inst_28390);
(statearr_28447[7] = inst_28357);
(statearr_28447[8] = inst_28358);
(statearr_28447[9] = inst_28355);
(statearr_28447[10] = inst_28356);
return statearr_28447;
})();var statearr_28448_28524 = state_28415__$1;(statearr_28448_28524[2] = null);
(statearr_28448_28524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 10))
{var inst_28297 = (state_28415[14]);var inst_28299 = (state_28415[16]);var inst_28305 = cljs.core._nth.call(null,inst_28297,inst_28299);var inst_28306 = cljs.core.nth.call(null,inst_28305,0,null);var inst_28307 = cljs.core.nth.call(null,inst_28305,1,null);var state_28415__$1 = (function (){var statearr_28449 = state_28415;(statearr_28449[23] = inst_28306);
return statearr_28449;
})();if(cljs.core.truth_(inst_28307))
{var statearr_28450_28525 = state_28415__$1;(statearr_28450_28525[1] = 13);
} else
{var statearr_28451_28526 = state_28415__$1;(statearr_28451_28526[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 42))
{var state_28415__$1 = state_28415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,45,dchan);
} else
{if((state_val_28416 === 11))
{var inst_28296 = (state_28415[15]);var inst_28316 = (state_28415[24]);var inst_28316__$1 = cljs.core.seq.call(null,inst_28296);var state_28415__$1 = (function (){var statearr_28452 = state_28415;(statearr_28452[24] = inst_28316__$1);
return statearr_28452;
})();if(inst_28316__$1)
{var statearr_28453_28527 = state_28415__$1;(statearr_28453_28527[1] = 16);
} else
{var statearr_28454_28528 = state_28415__$1;(statearr_28454_28528[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 43))
{var state_28415__$1 = state_28415;var statearr_28455_28529 = state_28415__$1;(statearr_28455_28529[2] = null);
(statearr_28455_28529[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 12))
{var inst_28342 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28456_28530 = state_28415__$1;(statearr_28456_28530[2] = inst_28342);
(statearr_28456_28530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 44))
{var inst_28408 = (state_28415[2]);var state_28415__$1 = (function (){var statearr_28457 = state_28415;(statearr_28457[25] = inst_28408);
return statearr_28457;
})();var statearr_28458_28531 = state_28415__$1;(statearr_28458_28531[2] = null);
(statearr_28458_28531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 13))
{var inst_28306 = (state_28415[23]);var inst_28309 = cljs.core.async.close_BANG_.call(null,inst_28306);var state_28415__$1 = state_28415;var statearr_28459_28532 = state_28415__$1;(statearr_28459_28532[2] = inst_28309);
(statearr_28459_28532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 45))
{var inst_28405 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28463_28533 = state_28415__$1;(statearr_28463_28533[2] = inst_28405);
(statearr_28463_28533[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 14))
{var state_28415__$1 = state_28415;var statearr_28464_28534 = state_28415__$1;(statearr_28464_28534[2] = null);
(statearr_28464_28534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 15))
{var inst_28297 = (state_28415[14]);var inst_28296 = (state_28415[15]);var inst_28299 = (state_28415[16]);var inst_28298 = (state_28415[17]);var inst_28312 = (state_28415[2]);var inst_28313 = (inst_28299 + 1);var tmp28460 = inst_28297;var tmp28461 = inst_28296;var tmp28462 = inst_28298;var inst_28296__$1 = tmp28461;var inst_28297__$1 = tmp28460;var inst_28298__$1 = tmp28462;var inst_28299__$1 = inst_28313;var state_28415__$1 = (function (){var statearr_28465 = state_28415;(statearr_28465[14] = inst_28297__$1);
(statearr_28465[15] = inst_28296__$1);
(statearr_28465[16] = inst_28299__$1);
(statearr_28465[17] = inst_28298__$1);
(statearr_28465[26] = inst_28312);
return statearr_28465;
})();var statearr_28466_28535 = state_28415__$1;(statearr_28466_28535[2] = null);
(statearr_28466_28535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 16))
{var inst_28316 = (state_28415[24]);var inst_28318 = cljs.core.chunked_seq_QMARK_.call(null,inst_28316);var state_28415__$1 = state_28415;if(inst_28318)
{var statearr_28467_28536 = state_28415__$1;(statearr_28467_28536[1] = 19);
} else
{var statearr_28468_28537 = state_28415__$1;(statearr_28468_28537[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 17))
{var state_28415__$1 = state_28415;var statearr_28469_28538 = state_28415__$1;(statearr_28469_28538[2] = null);
(statearr_28469_28538[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 18))
{var inst_28340 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28470_28539 = state_28415__$1;(statearr_28470_28539[2] = inst_28340);
(statearr_28470_28539[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 19))
{var inst_28316 = (state_28415[24]);var inst_28320 = cljs.core.chunk_first.call(null,inst_28316);var inst_28321 = cljs.core.chunk_rest.call(null,inst_28316);var inst_28322 = cljs.core.count.call(null,inst_28320);var inst_28296 = inst_28321;var inst_28297 = inst_28320;var inst_28298 = inst_28322;var inst_28299 = 0;var state_28415__$1 = (function (){var statearr_28471 = state_28415;(statearr_28471[14] = inst_28297);
(statearr_28471[15] = inst_28296);
(statearr_28471[16] = inst_28299);
(statearr_28471[17] = inst_28298);
return statearr_28471;
})();var statearr_28472_28540 = state_28415__$1;(statearr_28472_28540[2] = null);
(statearr_28472_28540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 20))
{var inst_28316 = (state_28415[24]);var inst_28326 = cljs.core.first.call(null,inst_28316);var inst_28327 = cljs.core.nth.call(null,inst_28326,0,null);var inst_28328 = cljs.core.nth.call(null,inst_28326,1,null);var state_28415__$1 = (function (){var statearr_28473 = state_28415;(statearr_28473[27] = inst_28327);
return statearr_28473;
})();if(cljs.core.truth_(inst_28328))
{var statearr_28474_28541 = state_28415__$1;(statearr_28474_28541[1] = 22);
} else
{var statearr_28475_28542 = state_28415__$1;(statearr_28475_28542[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 21))
{var inst_28337 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28476_28543 = state_28415__$1;(statearr_28476_28543[2] = inst_28337);
(statearr_28476_28543[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 22))
{var inst_28327 = (state_28415[27]);var inst_28330 = cljs.core.async.close_BANG_.call(null,inst_28327);var state_28415__$1 = state_28415;var statearr_28477_28544 = state_28415__$1;(statearr_28477_28544[2] = inst_28330);
(statearr_28477_28544[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 23))
{var state_28415__$1 = state_28415;var statearr_28478_28545 = state_28415__$1;(statearr_28478_28545[2] = null);
(statearr_28478_28545[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 24))
{var inst_28316 = (state_28415[24]);var inst_28333 = (state_28415[2]);var inst_28334 = cljs.core.next.call(null,inst_28316);var inst_28296 = inst_28334;var inst_28297 = null;var inst_28298 = 0;var inst_28299 = 0;var state_28415__$1 = (function (){var statearr_28479 = state_28415;(statearr_28479[28] = inst_28333);
(statearr_28479[14] = inst_28297);
(statearr_28479[15] = inst_28296);
(statearr_28479[16] = inst_28299);
(statearr_28479[17] = inst_28298);
return statearr_28479;
})();var statearr_28480_28546 = state_28415__$1;(statearr_28480_28546[2] = null);
(statearr_28480_28546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 25))
{var inst_28357 = (state_28415[7]);var inst_28358 = (state_28415[8]);var inst_28360 = (inst_28358 < inst_28357);var inst_28361 = inst_28360;var state_28415__$1 = state_28415;if(cljs.core.truth_(inst_28361))
{var statearr_28481_28547 = state_28415__$1;(statearr_28481_28547[1] = 27);
} else
{var statearr_28482_28548 = state_28415__$1;(statearr_28482_28548[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 26))
{var inst_28347 = (state_28415[19]);var inst_28401 = (state_28415[2]);var inst_28402 = cljs.core.seq.call(null,inst_28347);var state_28415__$1 = (function (){var statearr_28483 = state_28415;(statearr_28483[29] = inst_28401);
return statearr_28483;
})();if(inst_28402)
{var statearr_28484_28549 = state_28415__$1;(statearr_28484_28549[1] = 42);
} else
{var statearr_28485_28550 = state_28415__$1;(statearr_28485_28550[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 27))
{var inst_28363 = (state_28415[30]);var inst_28287 = (state_28415[13]);var inst_28358 = (state_28415[8]);var inst_28356 = (state_28415[10]);var inst_28363__$1 = cljs.core._nth.call(null,inst_28356,inst_28358);var inst_28364 = cljs.core.async.put_BANG_.call(null,inst_28363__$1,inst_28287,done);var state_28415__$1 = (function (){var statearr_28486 = state_28415;(statearr_28486[30] = inst_28363__$1);
return statearr_28486;
})();if(cljs.core.truth_(inst_28364))
{var statearr_28487_28551 = state_28415__$1;(statearr_28487_28551[1] = 30);
} else
{var statearr_28488_28552 = state_28415__$1;(statearr_28488_28552[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 28))
{var inst_28374 = (state_28415[12]);var inst_28355 = (state_28415[9]);var inst_28374__$1 = cljs.core.seq.call(null,inst_28355);var state_28415__$1 = (function (){var statearr_28489 = state_28415;(statearr_28489[12] = inst_28374__$1);
return statearr_28489;
})();if(inst_28374__$1)
{var statearr_28490_28553 = state_28415__$1;(statearr_28490_28553[1] = 33);
} else
{var statearr_28491_28554 = state_28415__$1;(statearr_28491_28554[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 29))
{var inst_28399 = (state_28415[2]);var state_28415__$1 = state_28415;var statearr_28492_28555 = state_28415__$1;(statearr_28492_28555[2] = inst_28399);
(statearr_28492_28555[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 30))
{var state_28415__$1 = state_28415;var statearr_28493_28556 = state_28415__$1;(statearr_28493_28556[2] = null);
(statearr_28493_28556[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28416 === 31))
{var inst_28363 = (state_28415[30]);var inst_28367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28368 = cljs.core.async.untap_STAR_.call(null,m,inst_28363);var state_28415__$1 = (function (){var statearr_28494 = state_28415;(statearr_28494[31] = inst_28367);
return statearr_28494;
})();var statearr_28495_28557 = state_28415__$1;(statearr_28495_28557[2] = inst_28368);
(statearr_28495_28557[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_28499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28499[0] = state_machine__5579__auto__);
(statearr_28499[1] = 1);
return statearr_28499;
});
var state_machine__5579__auto____1 = (function (state_28415){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_28415);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e28500){if((e28500 instanceof Object))
{var ex__5582__auto__ = e28500;var statearr_28501_28558 = state_28415;(statearr_28501_28558[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28559 = state_28415;
state_28415 = G__28559;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_28415){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_28415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_28502 = f__5594__auto__.call(null);(statearr_28502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___28503);
return statearr_28502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj28561 = {};return obj28561;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3445__auto__ = m;if(and__3445__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3445__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4084__auto__ = (((m == null))?null:m);return (function (){var or__3457__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t28681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28681 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta28682){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta28682 = meta28682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28681.cljs$lang$type = true;
cljs.core.async.t28681.cljs$lang$ctorStr = "cljs.core.async/t28681";
cljs.core.async.t28681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t28681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28683){var self__ = this;
var _28683__$1 = this;return self__.meta28682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28683,meta28682__$1){var self__ = this;
var _28683__$1 = this;return (new cljs.core.async.t28681(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta28682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta28682){return (new cljs.core.async.t28681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta28682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28681(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5593__auto___28800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_28753){var state_val_28754 = (state_28753[1]);if((state_val_28754 === 1))
{var inst_28687 = (state_28753[7]);var inst_28687__$1 = calc_state.call(null);var inst_28688 = cljs.core.seq_QMARK_.call(null,inst_28687__$1);var state_28753__$1 = (function (){var statearr_28755 = state_28753;(statearr_28755[7] = inst_28687__$1);
return statearr_28755;
})();if(inst_28688)
{var statearr_28756_28801 = state_28753__$1;(statearr_28756_28801[1] = 2);
} else
{var statearr_28757_28802 = state_28753__$1;(statearr_28757_28802[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 2))
{var inst_28687 = (state_28753[7]);var inst_28690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28687);var state_28753__$1 = state_28753;var statearr_28758_28803 = state_28753__$1;(statearr_28758_28803[2] = inst_28690);
(statearr_28758_28803[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 3))
{var inst_28687 = (state_28753[7]);var state_28753__$1 = state_28753;var statearr_28759_28804 = state_28753__$1;(statearr_28759_28804[2] = inst_28687);
(statearr_28759_28804[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 4))
{var inst_28687 = (state_28753[7]);var inst_28693 = (state_28753[2]);var inst_28694 = cljs.core.get.call(null,inst_28693,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_28695 = cljs.core.get.call(null,inst_28693,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_28696 = cljs.core.get.call(null,inst_28693,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_28697 = inst_28687;var state_28753__$1 = (function (){var statearr_28760 = state_28753;(statearr_28760[8] = inst_28696);
(statearr_28760[9] = inst_28697);
(statearr_28760[10] = inst_28695);
(statearr_28760[11] = inst_28694);
return statearr_28760;
})();var statearr_28761_28805 = state_28753__$1;(statearr_28761_28805[2] = null);
(statearr_28761_28805[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 5))
{var inst_28697 = (state_28753[9]);var inst_28700 = cljs.core.seq_QMARK_.call(null,inst_28697);var state_28753__$1 = state_28753;if(inst_28700)
{var statearr_28762_28806 = state_28753__$1;(statearr_28762_28806[1] = 7);
} else
{var statearr_28763_28807 = state_28753__$1;(statearr_28763_28807[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 6))
{var inst_28751 = (state_28753[2]);var state_28753__$1 = state_28753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28753__$1,inst_28751);
} else
{if((state_val_28754 === 7))
{var inst_28697 = (state_28753[9]);var inst_28702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28697);var state_28753__$1 = state_28753;var statearr_28764_28808 = state_28753__$1;(statearr_28764_28808[2] = inst_28702);
(statearr_28764_28808[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 8))
{var inst_28697 = (state_28753[9]);var state_28753__$1 = state_28753;var statearr_28765_28809 = state_28753__$1;(statearr_28765_28809[2] = inst_28697);
(statearr_28765_28809[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 9))
{var inst_28705 = (state_28753[12]);var inst_28705__$1 = (state_28753[2]);var inst_28706 = cljs.core.get.call(null,inst_28705__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_28707 = cljs.core.get.call(null,inst_28705__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_28708 = cljs.core.get.call(null,inst_28705__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_28753__$1 = (function (){var statearr_28766 = state_28753;(statearr_28766[13] = inst_28708);
(statearr_28766[12] = inst_28705__$1);
(statearr_28766[14] = inst_28707);
return statearr_28766;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28753__$1,10,inst_28706);
} else
{if((state_val_28754 === 10))
{var inst_28713 = (state_28753[15]);var inst_28712 = (state_28753[16]);var inst_28711 = (state_28753[2]);var inst_28712__$1 = cljs.core.nth.call(null,inst_28711,0,null);var inst_28713__$1 = cljs.core.nth.call(null,inst_28711,1,null);var inst_28714 = (inst_28712__$1 == null);var inst_28715 = cljs.core._EQ_.call(null,inst_28713__$1,change);var inst_28716 = (inst_28714) || (inst_28715);var state_28753__$1 = (function (){var statearr_28767 = state_28753;(statearr_28767[15] = inst_28713__$1);
(statearr_28767[16] = inst_28712__$1);
return statearr_28767;
})();if(cljs.core.truth_(inst_28716))
{var statearr_28768_28810 = state_28753__$1;(statearr_28768_28810[1] = 11);
} else
{var statearr_28769_28811 = state_28753__$1;(statearr_28769_28811[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 11))
{var inst_28712 = (state_28753[16]);var inst_28718 = (inst_28712 == null);var state_28753__$1 = state_28753;if(cljs.core.truth_(inst_28718))
{var statearr_28770_28812 = state_28753__$1;(statearr_28770_28812[1] = 14);
} else
{var statearr_28771_28813 = state_28753__$1;(statearr_28771_28813[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 12))
{var inst_28727 = (state_28753[17]);var inst_28708 = (state_28753[13]);var inst_28713 = (state_28753[15]);var inst_28727__$1 = inst_28708.call(null,inst_28713);var state_28753__$1 = (function (){var statearr_28772 = state_28753;(statearr_28772[17] = inst_28727__$1);
return statearr_28772;
})();if(cljs.core.truth_(inst_28727__$1))
{var statearr_28773_28814 = state_28753__$1;(statearr_28773_28814[1] = 17);
} else
{var statearr_28774_28815 = state_28753__$1;(statearr_28774_28815[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 13))
{var inst_28749 = (state_28753[2]);var state_28753__$1 = state_28753;var statearr_28775_28816 = state_28753__$1;(statearr_28775_28816[2] = inst_28749);
(statearr_28775_28816[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 14))
{var inst_28713 = (state_28753[15]);var inst_28720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28713);var state_28753__$1 = state_28753;var statearr_28776_28817 = state_28753__$1;(statearr_28776_28817[2] = inst_28720);
(statearr_28776_28817[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 15))
{var state_28753__$1 = state_28753;var statearr_28777_28818 = state_28753__$1;(statearr_28777_28818[2] = null);
(statearr_28777_28818[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 16))
{var inst_28723 = (state_28753[2]);var inst_28724 = calc_state.call(null);var inst_28697 = inst_28724;var state_28753__$1 = (function (){var statearr_28778 = state_28753;(statearr_28778[9] = inst_28697);
(statearr_28778[18] = inst_28723);
return statearr_28778;
})();var statearr_28779_28819 = state_28753__$1;(statearr_28779_28819[2] = null);
(statearr_28779_28819[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 17))
{var inst_28727 = (state_28753[17]);var state_28753__$1 = state_28753;var statearr_28780_28820 = state_28753__$1;(statearr_28780_28820[2] = inst_28727);
(statearr_28780_28820[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 18))
{var inst_28708 = (state_28753[13]);var inst_28713 = (state_28753[15]);var inst_28707 = (state_28753[14]);var inst_28730 = cljs.core.empty_QMARK_.call(null,inst_28708);var inst_28731 = inst_28707.call(null,inst_28713);var inst_28732 = cljs.core.not.call(null,inst_28731);var inst_28733 = (inst_28730) && (inst_28732);var state_28753__$1 = state_28753;var statearr_28781_28821 = state_28753__$1;(statearr_28781_28821[2] = inst_28733);
(statearr_28781_28821[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 19))
{var inst_28735 = (state_28753[2]);var state_28753__$1 = state_28753;if(cljs.core.truth_(inst_28735))
{var statearr_28782_28822 = state_28753__$1;(statearr_28782_28822[1] = 20);
} else
{var statearr_28783_28823 = state_28753__$1;(statearr_28783_28823[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 20))
{var inst_28712 = (state_28753[16]);var state_28753__$1 = state_28753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28753__$1,23,out,inst_28712);
} else
{if((state_val_28754 === 21))
{var inst_28705 = (state_28753[12]);var inst_28697 = inst_28705;var state_28753__$1 = (function (){var statearr_28784 = state_28753;(statearr_28784[9] = inst_28697);
return statearr_28784;
})();var statearr_28785_28824 = state_28753__$1;(statearr_28785_28824[2] = null);
(statearr_28785_28824[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 22))
{var inst_28747 = (state_28753[2]);var state_28753__$1 = state_28753;var statearr_28786_28825 = state_28753__$1;(statearr_28786_28825[2] = inst_28747);
(statearr_28786_28825[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 23))
{var inst_28738 = (state_28753[2]);var state_28753__$1 = state_28753;if(cljs.core.truth_(inst_28738))
{var statearr_28787_28826 = state_28753__$1;(statearr_28787_28826[1] = 24);
} else
{var statearr_28788_28827 = state_28753__$1;(statearr_28788_28827[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 24))
{var inst_28705 = (state_28753[12]);var inst_28697 = inst_28705;var state_28753__$1 = (function (){var statearr_28789 = state_28753;(statearr_28789[9] = inst_28697);
return statearr_28789;
})();var statearr_28790_28828 = state_28753__$1;(statearr_28790_28828[2] = null);
(statearr_28790_28828[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 25))
{var state_28753__$1 = state_28753;var statearr_28791_28829 = state_28753__$1;(statearr_28791_28829[2] = null);
(statearr_28791_28829[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28754 === 26))
{var inst_28743 = (state_28753[2]);var state_28753__$1 = state_28753;var statearr_28792_28830 = state_28753__$1;(statearr_28792_28830[2] = inst_28743);
(statearr_28792_28830[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_28796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28796[0] = state_machine__5579__auto__);
(statearr_28796[1] = 1);
return statearr_28796;
});
var state_machine__5579__auto____1 = (function (state_28753){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_28753);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e28797){if((e28797 instanceof Object))
{var ex__5582__auto__ = e28797;var statearr_28798_28831 = state_28753;(statearr_28798_28831[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28832 = state_28753;
state_28753 = G__28832;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_28753){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_28753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_28799 = f__5594__auto__.call(null);(statearr_28799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___28800);
return statearr_28799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj28834 = {};return obj28834;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3445__auto__ = p;if(and__3445__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3445__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4084__auto__ = (((p == null))?null:p);return (function (){var or__3457__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3445__auto__ = p;if(and__3445__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3445__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4084__auto__ = (((p == null))?null:p);return (function (){var or__3457__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3445__auto__ = p;if(and__3445__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3445__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4084__auto__ = (((p == null))?null:p);return (function (){var or__3457__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3445__auto__ = p;if(and__3445__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3445__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4084__auto__ = (((p == null))?null:p);return (function (){var or__3457__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3457__auto__,mults){
return (function (p1__28835_SHARP_){if(cljs.core.truth_(p1__28835_SHARP_.call(null,topic)))
{return p1__28835_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28835_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3457__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28950 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28951){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28951 = meta28951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28950.cljs$lang$type = true;
cljs.core.async.t28950.cljs$lang$ctorStr = "cljs.core.async/t28950";
cljs.core.async.t28950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"cljs.core.async/t28950");
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28952){var self__ = this;
var _28952__$1 = this;return self__.meta28951;
});})(mults,ensure_mult))
;
cljs.core.async.t28950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28952,meta28951__$1){var self__ = this;
var _28952__$1 = this;return (new cljs.core.async.t28950(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28951__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28950 = ((function (mults,ensure_mult){
return (function __GT_t28950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28951){return (new cljs.core.async.t28950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28951));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28950(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5593__auto___29064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29020){var state_val_29021 = (state_29020[1]);if((state_val_29021 === 1))
{var state_29020__$1 = state_29020;var statearr_29022_29065 = state_29020__$1;(statearr_29022_29065[2] = null);
(statearr_29022_29065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 2))
{var state_29020__$1 = state_29020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29020__$1,4,ch);
} else
{if((state_val_29021 === 3))
{var inst_29018 = (state_29020[2]);var state_29020__$1 = state_29020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29020__$1,inst_29018);
} else
{if((state_val_29021 === 4))
{var inst_28955 = (state_29020[7]);var inst_28955__$1 = (state_29020[2]);var inst_28956 = (inst_28955__$1 == null);var state_29020__$1 = (function (){var statearr_29023 = state_29020;(statearr_29023[7] = inst_28955__$1);
return statearr_29023;
})();if(cljs.core.truth_(inst_28956))
{var statearr_29024_29066 = state_29020__$1;(statearr_29024_29066[1] = 5);
} else
{var statearr_29025_29067 = state_29020__$1;(statearr_29025_29067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 5))
{var inst_28962 = cljs.core.deref.call(null,mults);var inst_28963 = cljs.core.vals.call(null,inst_28962);var inst_28964 = cljs.core.seq.call(null,inst_28963);var inst_28965 = inst_28964;var inst_28966 = null;var inst_28967 = 0;var inst_28968 = 0;var state_29020__$1 = (function (){var statearr_29026 = state_29020;(statearr_29026[8] = inst_28968);
(statearr_29026[9] = inst_28967);
(statearr_29026[10] = inst_28966);
(statearr_29026[11] = inst_28965);
return statearr_29026;
})();var statearr_29027_29068 = state_29020__$1;(statearr_29027_29068[2] = null);
(statearr_29027_29068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 6))
{var inst_28955 = (state_29020[7]);var inst_29003 = (state_29020[12]);var inst_29003__$1 = topic_fn.call(null,inst_28955);var inst_29004 = cljs.core.deref.call(null,mults);var inst_29005 = cljs.core.get.call(null,inst_29004,inst_29003__$1);var inst_29006 = cljs.core.async.muxch_STAR_.call(null,inst_29005);var state_29020__$1 = (function (){var statearr_29028 = state_29020;(statearr_29028[12] = inst_29003__$1);
return statearr_29028;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29020__$1,19,inst_29006,inst_28955);
} else
{if((state_val_29021 === 7))
{var inst_29016 = (state_29020[2]);var state_29020__$1 = state_29020;var statearr_29029_29069 = state_29020__$1;(statearr_29029_29069[2] = inst_29016);
(statearr_29029_29069[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 8))
{var inst_28968 = (state_29020[8]);var inst_28967 = (state_29020[9]);var inst_28970 = (inst_28968 < inst_28967);var inst_28971 = inst_28970;var state_29020__$1 = state_29020;if(cljs.core.truth_(inst_28971))
{var statearr_29033_29070 = state_29020__$1;(statearr_29033_29070[1] = 10);
} else
{var statearr_29034_29071 = state_29020__$1;(statearr_29034_29071[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 9))
{var inst_29001 = (state_29020[2]);var state_29020__$1 = state_29020;var statearr_29035_29072 = state_29020__$1;(statearr_29035_29072[2] = inst_29001);
(statearr_29035_29072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 10))
{var inst_28968 = (state_29020[8]);var inst_28967 = (state_29020[9]);var inst_28966 = (state_29020[10]);var inst_28965 = (state_29020[11]);var inst_28973 = cljs.core._nth.call(null,inst_28966,inst_28968);var inst_28974 = cljs.core.async.muxch_STAR_.call(null,inst_28973);var inst_28975 = cljs.core.async.close_BANG_.call(null,inst_28974);var inst_28976 = (inst_28968 + 1);var tmp29030 = inst_28967;var tmp29031 = inst_28966;var tmp29032 = inst_28965;var inst_28965__$1 = tmp29032;var inst_28966__$1 = tmp29031;var inst_28967__$1 = tmp29030;var inst_28968__$1 = inst_28976;var state_29020__$1 = (function (){var statearr_29036 = state_29020;(statearr_29036[8] = inst_28968__$1);
(statearr_29036[13] = inst_28975);
(statearr_29036[9] = inst_28967__$1);
(statearr_29036[10] = inst_28966__$1);
(statearr_29036[11] = inst_28965__$1);
return statearr_29036;
})();var statearr_29037_29073 = state_29020__$1;(statearr_29037_29073[2] = null);
(statearr_29037_29073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 11))
{var inst_28965 = (state_29020[11]);var inst_28979 = (state_29020[14]);var inst_28979__$1 = cljs.core.seq.call(null,inst_28965);var state_29020__$1 = (function (){var statearr_29038 = state_29020;(statearr_29038[14] = inst_28979__$1);
return statearr_29038;
})();if(inst_28979__$1)
{var statearr_29039_29074 = state_29020__$1;(statearr_29039_29074[1] = 13);
} else
{var statearr_29040_29075 = state_29020__$1;(statearr_29040_29075[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 12))
{var inst_28999 = (state_29020[2]);var state_29020__$1 = state_29020;var statearr_29041_29076 = state_29020__$1;(statearr_29041_29076[2] = inst_28999);
(statearr_29041_29076[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 13))
{var inst_28979 = (state_29020[14]);var inst_28981 = cljs.core.chunked_seq_QMARK_.call(null,inst_28979);var state_29020__$1 = state_29020;if(inst_28981)
{var statearr_29042_29077 = state_29020__$1;(statearr_29042_29077[1] = 16);
} else
{var statearr_29043_29078 = state_29020__$1;(statearr_29043_29078[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 14))
{var state_29020__$1 = state_29020;var statearr_29044_29079 = state_29020__$1;(statearr_29044_29079[2] = null);
(statearr_29044_29079[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 15))
{var inst_28997 = (state_29020[2]);var state_29020__$1 = state_29020;var statearr_29045_29080 = state_29020__$1;(statearr_29045_29080[2] = inst_28997);
(statearr_29045_29080[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 16))
{var inst_28979 = (state_29020[14]);var inst_28983 = cljs.core.chunk_first.call(null,inst_28979);var inst_28984 = cljs.core.chunk_rest.call(null,inst_28979);var inst_28985 = cljs.core.count.call(null,inst_28983);var inst_28965 = inst_28984;var inst_28966 = inst_28983;var inst_28967 = inst_28985;var inst_28968 = 0;var state_29020__$1 = (function (){var statearr_29046 = state_29020;(statearr_29046[8] = inst_28968);
(statearr_29046[9] = inst_28967);
(statearr_29046[10] = inst_28966);
(statearr_29046[11] = inst_28965);
return statearr_29046;
})();var statearr_29047_29081 = state_29020__$1;(statearr_29047_29081[2] = null);
(statearr_29047_29081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 17))
{var inst_28979 = (state_29020[14]);var inst_28988 = cljs.core.first.call(null,inst_28979);var inst_28989 = cljs.core.async.muxch_STAR_.call(null,inst_28988);var inst_28990 = cljs.core.async.close_BANG_.call(null,inst_28989);var inst_28991 = cljs.core.next.call(null,inst_28979);var inst_28965 = inst_28991;var inst_28966 = null;var inst_28967 = 0;var inst_28968 = 0;var state_29020__$1 = (function (){var statearr_29048 = state_29020;(statearr_29048[8] = inst_28968);
(statearr_29048[9] = inst_28967);
(statearr_29048[10] = inst_28966);
(statearr_29048[11] = inst_28965);
(statearr_29048[15] = inst_28990);
return statearr_29048;
})();var statearr_29049_29082 = state_29020__$1;(statearr_29049_29082[2] = null);
(statearr_29049_29082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 18))
{var inst_28994 = (state_29020[2]);var state_29020__$1 = state_29020;var statearr_29050_29083 = state_29020__$1;(statearr_29050_29083[2] = inst_28994);
(statearr_29050_29083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 19))
{var inst_29008 = (state_29020[2]);var state_29020__$1 = state_29020;if(cljs.core.truth_(inst_29008))
{var statearr_29051_29084 = state_29020__$1;(statearr_29051_29084[1] = 20);
} else
{var statearr_29052_29085 = state_29020__$1;(statearr_29052_29085[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 20))
{var state_29020__$1 = state_29020;var statearr_29053_29086 = state_29020__$1;(statearr_29053_29086[2] = null);
(statearr_29053_29086[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 21))
{var inst_29003 = (state_29020[12]);var inst_29011 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29003);var state_29020__$1 = state_29020;var statearr_29054_29087 = state_29020__$1;(statearr_29054_29087[2] = inst_29011);
(statearr_29054_29087[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29021 === 22))
{var inst_29013 = (state_29020[2]);var state_29020__$1 = (function (){var statearr_29055 = state_29020;(statearr_29055[16] = inst_29013);
return statearr_29055;
})();var statearr_29056_29088 = state_29020__$1;(statearr_29056_29088[2] = null);
(statearr_29056_29088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29060[0] = state_machine__5579__auto__);
(statearr_29060[1] = 1);
return statearr_29060;
});
var state_machine__5579__auto____1 = (function (state_29020){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29061){if((e29061 instanceof Object))
{var ex__5582__auto__ = e29061;var statearr_29062_29089 = state_29020;(statearr_29062_29089[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29090 = state_29020;
state_29020 = G__29090;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29020){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29063 = f__5594__auto__.call(null);(statearr_29063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29064);
return statearr_29063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5593__auto___29227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29197){var state_val_29198 = (state_29197[1]);if((state_val_29198 === 1))
{var state_29197__$1 = state_29197;var statearr_29199_29228 = state_29197__$1;(statearr_29199_29228[2] = null);
(statearr_29199_29228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 2))
{var inst_29160 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29161 = 0;var state_29197__$1 = (function (){var statearr_29200 = state_29197;(statearr_29200[7] = inst_29161);
(statearr_29200[8] = inst_29160);
return statearr_29200;
})();var statearr_29201_29229 = state_29197__$1;(statearr_29201_29229[2] = null);
(statearr_29201_29229[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 3))
{var inst_29195 = (state_29197[2]);var state_29197__$1 = state_29197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29197__$1,inst_29195);
} else
{if((state_val_29198 === 4))
{var inst_29161 = (state_29197[7]);var inst_29163 = (inst_29161 < cnt);var state_29197__$1 = state_29197;if(cljs.core.truth_(inst_29163))
{var statearr_29202_29230 = state_29197__$1;(statearr_29202_29230[1] = 6);
} else
{var statearr_29203_29231 = state_29197__$1;(statearr_29203_29231[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 5))
{var inst_29181 = (state_29197[2]);var state_29197__$1 = (function (){var statearr_29204 = state_29197;(statearr_29204[9] = inst_29181);
return statearr_29204;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29197__$1,12,dchan);
} else
{if((state_val_29198 === 6))
{var state_29197__$1 = state_29197;var statearr_29205_29232 = state_29197__$1;(statearr_29205_29232[2] = null);
(statearr_29205_29232[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 7))
{var state_29197__$1 = state_29197;var statearr_29206_29233 = state_29197__$1;(statearr_29206_29233[2] = null);
(statearr_29206_29233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 8))
{var inst_29179 = (state_29197[2]);var state_29197__$1 = state_29197;var statearr_29207_29234 = state_29197__$1;(statearr_29207_29234[2] = inst_29179);
(statearr_29207_29234[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 9))
{var inst_29161 = (state_29197[7]);var inst_29174 = (state_29197[2]);var inst_29175 = (inst_29161 + 1);var inst_29161__$1 = inst_29175;var state_29197__$1 = (function (){var statearr_29208 = state_29197;(statearr_29208[7] = inst_29161__$1);
(statearr_29208[10] = inst_29174);
return statearr_29208;
})();var statearr_29209_29235 = state_29197__$1;(statearr_29209_29235[2] = null);
(statearr_29209_29235[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 10))
{var inst_29165 = (state_29197[2]);var inst_29166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29197__$1 = (function (){var statearr_29210 = state_29197;(statearr_29210[11] = inst_29165);
return statearr_29210;
})();var statearr_29211_29236 = state_29197__$1;(statearr_29211_29236[2] = inst_29166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 11))
{var inst_29161 = (state_29197[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29197,10,Object,null,9);var inst_29170 = chs__$1.call(null,inst_29161);var inst_29171 = done.call(null,inst_29161);var inst_29172 = cljs.core.async.take_BANG_.call(null,inst_29170,inst_29171);var state_29197__$1 = state_29197;var statearr_29212_29237 = state_29197__$1;(statearr_29212_29237[2] = inst_29172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 12))
{var inst_29183 = (state_29197[12]);var inst_29183__$1 = (state_29197[2]);var inst_29184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29183__$1);var state_29197__$1 = (function (){var statearr_29213 = state_29197;(statearr_29213[12] = inst_29183__$1);
return statearr_29213;
})();if(cljs.core.truth_(inst_29184))
{var statearr_29214_29238 = state_29197__$1;(statearr_29214_29238[1] = 13);
} else
{var statearr_29215_29239 = state_29197__$1;(statearr_29215_29239[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 13))
{var inst_29186 = cljs.core.async.close_BANG_.call(null,out);var state_29197__$1 = state_29197;var statearr_29216_29240 = state_29197__$1;(statearr_29216_29240[2] = inst_29186);
(statearr_29216_29240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 14))
{var inst_29183 = (state_29197[12]);var inst_29188 = cljs.core.apply.call(null,f,inst_29183);var state_29197__$1 = state_29197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29197__$1,16,out,inst_29188);
} else
{if((state_val_29198 === 15))
{var inst_29193 = (state_29197[2]);var state_29197__$1 = state_29197;var statearr_29217_29241 = state_29197__$1;(statearr_29217_29241[2] = inst_29193);
(statearr_29217_29241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29198 === 16))
{var inst_29190 = (state_29197[2]);var state_29197__$1 = (function (){var statearr_29218 = state_29197;(statearr_29218[13] = inst_29190);
return statearr_29218;
})();var statearr_29219_29242 = state_29197__$1;(statearr_29219_29242[2] = null);
(statearr_29219_29242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29223[0] = state_machine__5579__auto__);
(statearr_29223[1] = 1);
return statearr_29223;
});
var state_machine__5579__auto____1 = (function (state_29197){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29197);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29224){if((e29224 instanceof Object))
{var ex__5582__auto__ = e29224;var statearr_29225_29243 = state_29197;(statearr_29225_29243[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29244 = state_29197;
state_29197 = G__29244;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29197){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29226 = f__5594__auto__.call(null);(statearr_29226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29227);
return statearr_29226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5593__auto___29352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29328){var state_val_29329 = (state_29328[1]);if((state_val_29329 === 1))
{var inst_29299 = cljs.core.vec.call(null,chs);var inst_29300 = inst_29299;var state_29328__$1 = (function (){var statearr_29330 = state_29328;(statearr_29330[7] = inst_29300);
return statearr_29330;
})();var statearr_29331_29353 = state_29328__$1;(statearr_29331_29353[2] = null);
(statearr_29331_29353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 2))
{var inst_29300 = (state_29328[7]);var inst_29302 = cljs.core.count.call(null,inst_29300);var inst_29303 = (inst_29302 > 0);var state_29328__$1 = state_29328;if(cljs.core.truth_(inst_29303))
{var statearr_29332_29354 = state_29328__$1;(statearr_29332_29354[1] = 4);
} else
{var statearr_29333_29355 = state_29328__$1;(statearr_29333_29355[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 3))
{var inst_29326 = (state_29328[2]);var state_29328__$1 = state_29328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29328__$1,inst_29326);
} else
{if((state_val_29329 === 4))
{var inst_29300 = (state_29328[7]);var state_29328__$1 = state_29328;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29328__$1,7,inst_29300);
} else
{if((state_val_29329 === 5))
{var inst_29322 = cljs.core.async.close_BANG_.call(null,out);var state_29328__$1 = state_29328;var statearr_29334_29356 = state_29328__$1;(statearr_29334_29356[2] = inst_29322);
(statearr_29334_29356[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 6))
{var inst_29324 = (state_29328[2]);var state_29328__$1 = state_29328;var statearr_29335_29357 = state_29328__$1;(statearr_29335_29357[2] = inst_29324);
(statearr_29335_29357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 7))
{var inst_29308 = (state_29328[8]);var inst_29307 = (state_29328[9]);var inst_29307__$1 = (state_29328[2]);var inst_29308__$1 = cljs.core.nth.call(null,inst_29307__$1,0,null);var inst_29309 = cljs.core.nth.call(null,inst_29307__$1,1,null);var inst_29310 = (inst_29308__$1 == null);var state_29328__$1 = (function (){var statearr_29336 = state_29328;(statearr_29336[8] = inst_29308__$1);
(statearr_29336[9] = inst_29307__$1);
(statearr_29336[10] = inst_29309);
return statearr_29336;
})();if(cljs.core.truth_(inst_29310))
{var statearr_29337_29358 = state_29328__$1;(statearr_29337_29358[1] = 8);
} else
{var statearr_29338_29359 = state_29328__$1;(statearr_29338_29359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 8))
{var inst_29308 = (state_29328[8]);var inst_29307 = (state_29328[9]);var inst_29300 = (state_29328[7]);var inst_29309 = (state_29328[10]);var inst_29312 = (function (){var c = inst_29309;var v = inst_29308;var vec__29305 = inst_29307;var cs = inst_29300;return ((function (c,v,vec__29305,cs,inst_29308,inst_29307,inst_29300,inst_29309,state_val_29329){
return (function (p1__29245_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29245_SHARP_);
});
;})(c,v,vec__29305,cs,inst_29308,inst_29307,inst_29300,inst_29309,state_val_29329))
})();var inst_29313 = cljs.core.filterv.call(null,inst_29312,inst_29300);var inst_29300__$1 = inst_29313;var state_29328__$1 = (function (){var statearr_29339 = state_29328;(statearr_29339[7] = inst_29300__$1);
return statearr_29339;
})();var statearr_29340_29360 = state_29328__$1;(statearr_29340_29360[2] = null);
(statearr_29340_29360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 9))
{var inst_29308 = (state_29328[8]);var state_29328__$1 = state_29328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29328__$1,11,out,inst_29308);
} else
{if((state_val_29329 === 10))
{var inst_29320 = (state_29328[2]);var state_29328__$1 = state_29328;var statearr_29342_29361 = state_29328__$1;(statearr_29342_29361[2] = inst_29320);
(statearr_29342_29361[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29329 === 11))
{var inst_29300 = (state_29328[7]);var inst_29317 = (state_29328[2]);var tmp29341 = inst_29300;var inst_29300__$1 = tmp29341;var state_29328__$1 = (function (){var statearr_29343 = state_29328;(statearr_29343[7] = inst_29300__$1);
(statearr_29343[11] = inst_29317);
return statearr_29343;
})();var statearr_29344_29362 = state_29328__$1;(statearr_29344_29362[2] = null);
(statearr_29344_29362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29348 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29348[0] = state_machine__5579__auto__);
(statearr_29348[1] = 1);
return statearr_29348;
});
var state_machine__5579__auto____1 = (function (state_29328){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29328);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29349){if((e29349 instanceof Object))
{var ex__5582__auto__ = e29349;var statearr_29350_29363 = state_29328;(statearr_29350_29363[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29364 = state_29328;
state_29328 = G__29364;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29328){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29351 = f__5594__auto__.call(null);(statearr_29351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29352);
return statearr_29351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5593__auto___29457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29434){var state_val_29435 = (state_29434[1]);if((state_val_29435 === 1))
{var inst_29411 = 0;var state_29434__$1 = (function (){var statearr_29436 = state_29434;(statearr_29436[7] = inst_29411);
return statearr_29436;
})();var statearr_29437_29458 = state_29434__$1;(statearr_29437_29458[2] = null);
(statearr_29437_29458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 2))
{var inst_29411 = (state_29434[7]);var inst_29413 = (inst_29411 < n);var state_29434__$1 = state_29434;if(cljs.core.truth_(inst_29413))
{var statearr_29438_29459 = state_29434__$1;(statearr_29438_29459[1] = 4);
} else
{var statearr_29439_29460 = state_29434__$1;(statearr_29439_29460[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 3))
{var inst_29431 = (state_29434[2]);var inst_29432 = cljs.core.async.close_BANG_.call(null,out);var state_29434__$1 = (function (){var statearr_29440 = state_29434;(statearr_29440[8] = inst_29431);
return statearr_29440;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29434__$1,inst_29432);
} else
{if((state_val_29435 === 4))
{var state_29434__$1 = state_29434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29434__$1,7,ch);
} else
{if((state_val_29435 === 5))
{var state_29434__$1 = state_29434;var statearr_29441_29461 = state_29434__$1;(statearr_29441_29461[2] = null);
(statearr_29441_29461[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 6))
{var inst_29429 = (state_29434[2]);var state_29434__$1 = state_29434;var statearr_29442_29462 = state_29434__$1;(statearr_29442_29462[2] = inst_29429);
(statearr_29442_29462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 7))
{var inst_29416 = (state_29434[9]);var inst_29416__$1 = (state_29434[2]);var inst_29417 = (inst_29416__$1 == null);var inst_29418 = cljs.core.not.call(null,inst_29417);var state_29434__$1 = (function (){var statearr_29443 = state_29434;(statearr_29443[9] = inst_29416__$1);
return statearr_29443;
})();if(inst_29418)
{var statearr_29444_29463 = state_29434__$1;(statearr_29444_29463[1] = 8);
} else
{var statearr_29445_29464 = state_29434__$1;(statearr_29445_29464[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 8))
{var inst_29416 = (state_29434[9]);var state_29434__$1 = state_29434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29434__$1,11,out,inst_29416);
} else
{if((state_val_29435 === 9))
{var state_29434__$1 = state_29434;var statearr_29446_29465 = state_29434__$1;(statearr_29446_29465[2] = null);
(statearr_29446_29465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 10))
{var inst_29426 = (state_29434[2]);var state_29434__$1 = state_29434;var statearr_29447_29466 = state_29434__$1;(statearr_29447_29466[2] = inst_29426);
(statearr_29447_29466[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29435 === 11))
{var inst_29411 = (state_29434[7]);var inst_29421 = (state_29434[2]);var inst_29422 = (inst_29411 + 1);var inst_29411__$1 = inst_29422;var state_29434__$1 = (function (){var statearr_29448 = state_29434;(statearr_29448[7] = inst_29411__$1);
(statearr_29448[10] = inst_29421);
return statearr_29448;
})();var statearr_29449_29467 = state_29434__$1;(statearr_29449_29467[2] = null);
(statearr_29449_29467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29453 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29453[0] = state_machine__5579__auto__);
(statearr_29453[1] = 1);
return statearr_29453;
});
var state_machine__5579__auto____1 = (function (state_29434){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29434);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29454){if((e29454 instanceof Object))
{var ex__5582__auto__ = e29454;var statearr_29455_29468 = state_29434;(statearr_29455_29468[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29469 = state_29434;
state_29434 = G__29469;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29434){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29456 = f__5594__auto__.call(null);(statearr_29456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29457);
return statearr_29456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5593__auto___29566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29541){var state_val_29542 = (state_29541[1]);if((state_val_29542 === 1))
{var inst_29518 = null;var state_29541__$1 = (function (){var statearr_29543 = state_29541;(statearr_29543[7] = inst_29518);
return statearr_29543;
})();var statearr_29544_29567 = state_29541__$1;(statearr_29544_29567[2] = null);
(statearr_29544_29567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 2))
{var state_29541__$1 = state_29541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29541__$1,4,ch);
} else
{if((state_val_29542 === 3))
{var inst_29538 = (state_29541[2]);var inst_29539 = cljs.core.async.close_BANG_.call(null,out);var state_29541__$1 = (function (){var statearr_29545 = state_29541;(statearr_29545[8] = inst_29538);
return statearr_29545;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29541__$1,inst_29539);
} else
{if((state_val_29542 === 4))
{var inst_29521 = (state_29541[9]);var inst_29521__$1 = (state_29541[2]);var inst_29522 = (inst_29521__$1 == null);var inst_29523 = cljs.core.not.call(null,inst_29522);var state_29541__$1 = (function (){var statearr_29546 = state_29541;(statearr_29546[9] = inst_29521__$1);
return statearr_29546;
})();if(inst_29523)
{var statearr_29547_29568 = state_29541__$1;(statearr_29547_29568[1] = 5);
} else
{var statearr_29548_29569 = state_29541__$1;(statearr_29548_29569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 5))
{var inst_29518 = (state_29541[7]);var inst_29521 = (state_29541[9]);var inst_29525 = cljs.core._EQ_.call(null,inst_29521,inst_29518);var state_29541__$1 = state_29541;if(inst_29525)
{var statearr_29549_29570 = state_29541__$1;(statearr_29549_29570[1] = 8);
} else
{var statearr_29550_29571 = state_29541__$1;(statearr_29550_29571[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 6))
{var state_29541__$1 = state_29541;var statearr_29552_29572 = state_29541__$1;(statearr_29552_29572[2] = null);
(statearr_29552_29572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 7))
{var inst_29536 = (state_29541[2]);var state_29541__$1 = state_29541;var statearr_29553_29573 = state_29541__$1;(statearr_29553_29573[2] = inst_29536);
(statearr_29553_29573[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 8))
{var inst_29518 = (state_29541[7]);var tmp29551 = inst_29518;var inst_29518__$1 = tmp29551;var state_29541__$1 = (function (){var statearr_29554 = state_29541;(statearr_29554[7] = inst_29518__$1);
return statearr_29554;
})();var statearr_29555_29574 = state_29541__$1;(statearr_29555_29574[2] = null);
(statearr_29555_29574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 9))
{var inst_29521 = (state_29541[9]);var state_29541__$1 = state_29541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29541__$1,11,out,inst_29521);
} else
{if((state_val_29542 === 10))
{var inst_29533 = (state_29541[2]);var state_29541__$1 = state_29541;var statearr_29556_29575 = state_29541__$1;(statearr_29556_29575[2] = inst_29533);
(statearr_29556_29575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29542 === 11))
{var inst_29521 = (state_29541[9]);var inst_29530 = (state_29541[2]);var inst_29518 = inst_29521;var state_29541__$1 = (function (){var statearr_29557 = state_29541;(statearr_29557[10] = inst_29530);
(statearr_29557[7] = inst_29518);
return statearr_29557;
})();var statearr_29558_29576 = state_29541__$1;(statearr_29558_29576[2] = null);
(statearr_29558_29576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29562 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29562[0] = state_machine__5579__auto__);
(statearr_29562[1] = 1);
return statearr_29562;
});
var state_machine__5579__auto____1 = (function (state_29541){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29541);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29563){if((e29563 instanceof Object))
{var ex__5582__auto__ = e29563;var statearr_29564_29577 = state_29541;(statearr_29564_29577[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29578 = state_29541;
state_29541 = G__29578;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29541){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29565 = f__5594__auto__.call(null);(statearr_29565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29566);
return statearr_29565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5593__auto___29713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29683){var state_val_29684 = (state_29683[1]);if((state_val_29684 === 1))
{var inst_29646 = (new Array(n));var inst_29647 = inst_29646;var inst_29648 = 0;var state_29683__$1 = (function (){var statearr_29685 = state_29683;(statearr_29685[7] = inst_29648);
(statearr_29685[8] = inst_29647);
return statearr_29685;
})();var statearr_29686_29714 = state_29683__$1;(statearr_29686_29714[2] = null);
(statearr_29686_29714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 2))
{var state_29683__$1 = state_29683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29683__$1,4,ch);
} else
{if((state_val_29684 === 3))
{var inst_29681 = (state_29683[2]);var state_29683__$1 = state_29683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29683__$1,inst_29681);
} else
{if((state_val_29684 === 4))
{var inst_29651 = (state_29683[9]);var inst_29651__$1 = (state_29683[2]);var inst_29652 = (inst_29651__$1 == null);var inst_29653 = cljs.core.not.call(null,inst_29652);var state_29683__$1 = (function (){var statearr_29687 = state_29683;(statearr_29687[9] = inst_29651__$1);
return statearr_29687;
})();if(inst_29653)
{var statearr_29688_29715 = state_29683__$1;(statearr_29688_29715[1] = 5);
} else
{var statearr_29689_29716 = state_29683__$1;(statearr_29689_29716[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 5))
{var inst_29656 = (state_29683[10]);var inst_29651 = (state_29683[9]);var inst_29648 = (state_29683[7]);var inst_29647 = (state_29683[8]);var inst_29655 = (inst_29647[inst_29648] = inst_29651);var inst_29656__$1 = (inst_29648 + 1);var inst_29657 = (inst_29656__$1 < n);var state_29683__$1 = (function (){var statearr_29690 = state_29683;(statearr_29690[11] = inst_29655);
(statearr_29690[10] = inst_29656__$1);
return statearr_29690;
})();if(cljs.core.truth_(inst_29657))
{var statearr_29691_29717 = state_29683__$1;(statearr_29691_29717[1] = 8);
} else
{var statearr_29692_29718 = state_29683__$1;(statearr_29692_29718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 6))
{var inst_29648 = (state_29683[7]);var inst_29669 = (inst_29648 > 0);var state_29683__$1 = state_29683;if(cljs.core.truth_(inst_29669))
{var statearr_29694_29719 = state_29683__$1;(statearr_29694_29719[1] = 12);
} else
{var statearr_29695_29720 = state_29683__$1;(statearr_29695_29720[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 7))
{var inst_29679 = (state_29683[2]);var state_29683__$1 = state_29683;var statearr_29696_29721 = state_29683__$1;(statearr_29696_29721[2] = inst_29679);
(statearr_29696_29721[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 8))
{var inst_29656 = (state_29683[10]);var inst_29647 = (state_29683[8]);var tmp29693 = inst_29647;var inst_29647__$1 = tmp29693;var inst_29648 = inst_29656;var state_29683__$1 = (function (){var statearr_29697 = state_29683;(statearr_29697[7] = inst_29648);
(statearr_29697[8] = inst_29647__$1);
return statearr_29697;
})();var statearr_29698_29722 = state_29683__$1;(statearr_29698_29722[2] = null);
(statearr_29698_29722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 9))
{var inst_29647 = (state_29683[8]);var inst_29661 = cljs.core.vec.call(null,inst_29647);var state_29683__$1 = state_29683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29683__$1,11,out,inst_29661);
} else
{if((state_val_29684 === 10))
{var inst_29667 = (state_29683[2]);var state_29683__$1 = state_29683;var statearr_29699_29723 = state_29683__$1;(statearr_29699_29723[2] = inst_29667);
(statearr_29699_29723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 11))
{var inst_29663 = (state_29683[2]);var inst_29664 = (new Array(n));var inst_29647 = inst_29664;var inst_29648 = 0;var state_29683__$1 = (function (){var statearr_29700 = state_29683;(statearr_29700[12] = inst_29663);
(statearr_29700[7] = inst_29648);
(statearr_29700[8] = inst_29647);
return statearr_29700;
})();var statearr_29701_29724 = state_29683__$1;(statearr_29701_29724[2] = null);
(statearr_29701_29724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 12))
{var inst_29647 = (state_29683[8]);var inst_29671 = cljs.core.vec.call(null,inst_29647);var state_29683__$1 = state_29683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29683__$1,15,out,inst_29671);
} else
{if((state_val_29684 === 13))
{var state_29683__$1 = state_29683;var statearr_29702_29725 = state_29683__$1;(statearr_29702_29725[2] = null);
(statearr_29702_29725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 14))
{var inst_29676 = (state_29683[2]);var inst_29677 = cljs.core.async.close_BANG_.call(null,out);var state_29683__$1 = (function (){var statearr_29703 = state_29683;(statearr_29703[13] = inst_29676);
return statearr_29703;
})();var statearr_29704_29726 = state_29683__$1;(statearr_29704_29726[2] = inst_29677);
(statearr_29704_29726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29684 === 15))
{var inst_29673 = (state_29683[2]);var state_29683__$1 = state_29683;var statearr_29705_29727 = state_29683__$1;(statearr_29705_29727[2] = inst_29673);
(statearr_29705_29727[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29709[0] = state_machine__5579__auto__);
(statearr_29709[1] = 1);
return statearr_29709;
});
var state_machine__5579__auto____1 = (function (state_29683){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29683);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29710){if((e29710 instanceof Object))
{var ex__5582__auto__ = e29710;var statearr_29711_29728 = state_29683;(statearr_29711_29728[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29729 = state_29683;
state_29683 = G__29729;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29683){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29712 = f__5594__auto__.call(null);(statearr_29712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29713);
return statearr_29712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5593__auto___29872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5594__auto__ = (function (){var switch__5578__auto__ = (function (state_29842){var state_val_29843 = (state_29842[1]);if((state_val_29843 === 1))
{var inst_29801 = [];var inst_29802 = inst_29801;var inst_29803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_29842__$1 = (function (){var statearr_29844 = state_29842;(statearr_29844[7] = inst_29803);
(statearr_29844[8] = inst_29802);
return statearr_29844;
})();var statearr_29845_29873 = state_29842__$1;(statearr_29845_29873[2] = null);
(statearr_29845_29873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 2))
{var state_29842__$1 = state_29842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29842__$1,4,ch);
} else
{if((state_val_29843 === 3))
{var inst_29840 = (state_29842[2]);var state_29842__$1 = state_29842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29842__$1,inst_29840);
} else
{if((state_val_29843 === 4))
{var inst_29806 = (state_29842[9]);var inst_29806__$1 = (state_29842[2]);var inst_29807 = (inst_29806__$1 == null);var inst_29808 = cljs.core.not.call(null,inst_29807);var state_29842__$1 = (function (){var statearr_29846 = state_29842;(statearr_29846[9] = inst_29806__$1);
return statearr_29846;
})();if(inst_29808)
{var statearr_29847_29874 = state_29842__$1;(statearr_29847_29874[1] = 5);
} else
{var statearr_29848_29875 = state_29842__$1;(statearr_29848_29875[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 5))
{var inst_29810 = (state_29842[10]);var inst_29806 = (state_29842[9]);var inst_29803 = (state_29842[7]);var inst_29810__$1 = f.call(null,inst_29806);var inst_29811 = cljs.core._EQ_.call(null,inst_29810__$1,inst_29803);var inst_29812 = cljs.core.keyword_identical_QMARK_.call(null,inst_29803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_29813 = (inst_29811) || (inst_29812);var state_29842__$1 = (function (){var statearr_29849 = state_29842;(statearr_29849[10] = inst_29810__$1);
return statearr_29849;
})();if(cljs.core.truth_(inst_29813))
{var statearr_29850_29876 = state_29842__$1;(statearr_29850_29876[1] = 8);
} else
{var statearr_29851_29877 = state_29842__$1;(statearr_29851_29877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 6))
{var inst_29802 = (state_29842[8]);var inst_29827 = inst_29802.length;var inst_29828 = (inst_29827 > 0);var state_29842__$1 = state_29842;if(cljs.core.truth_(inst_29828))
{var statearr_29853_29878 = state_29842__$1;(statearr_29853_29878[1] = 12);
} else
{var statearr_29854_29879 = state_29842__$1;(statearr_29854_29879[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 7))
{var inst_29838 = (state_29842[2]);var state_29842__$1 = state_29842;var statearr_29855_29880 = state_29842__$1;(statearr_29855_29880[2] = inst_29838);
(statearr_29855_29880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 8))
{var inst_29810 = (state_29842[10]);var inst_29806 = (state_29842[9]);var inst_29802 = (state_29842[8]);var inst_29815 = inst_29802.push(inst_29806);var tmp29852 = inst_29802;var inst_29802__$1 = tmp29852;var inst_29803 = inst_29810;var state_29842__$1 = (function (){var statearr_29856 = state_29842;(statearr_29856[11] = inst_29815);
(statearr_29856[7] = inst_29803);
(statearr_29856[8] = inst_29802__$1);
return statearr_29856;
})();var statearr_29857_29881 = state_29842__$1;(statearr_29857_29881[2] = null);
(statearr_29857_29881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 9))
{var inst_29802 = (state_29842[8]);var inst_29818 = cljs.core.vec.call(null,inst_29802);var state_29842__$1 = state_29842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29842__$1,11,out,inst_29818);
} else
{if((state_val_29843 === 10))
{var inst_29825 = (state_29842[2]);var state_29842__$1 = state_29842;var statearr_29858_29882 = state_29842__$1;(statearr_29858_29882[2] = inst_29825);
(statearr_29858_29882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 11))
{var inst_29810 = (state_29842[10]);var inst_29806 = (state_29842[9]);var inst_29820 = (state_29842[2]);var inst_29821 = [];var inst_29822 = inst_29821.push(inst_29806);var inst_29802 = inst_29821;var inst_29803 = inst_29810;var state_29842__$1 = (function (){var statearr_29859 = state_29842;(statearr_29859[12] = inst_29822);
(statearr_29859[13] = inst_29820);
(statearr_29859[7] = inst_29803);
(statearr_29859[8] = inst_29802);
return statearr_29859;
})();var statearr_29860_29883 = state_29842__$1;(statearr_29860_29883[2] = null);
(statearr_29860_29883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 12))
{var inst_29802 = (state_29842[8]);var inst_29830 = cljs.core.vec.call(null,inst_29802);var state_29842__$1 = state_29842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29842__$1,15,out,inst_29830);
} else
{if((state_val_29843 === 13))
{var state_29842__$1 = state_29842;var statearr_29861_29884 = state_29842__$1;(statearr_29861_29884[2] = null);
(statearr_29861_29884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 14))
{var inst_29835 = (state_29842[2]);var inst_29836 = cljs.core.async.close_BANG_.call(null,out);var state_29842__$1 = (function (){var statearr_29862 = state_29842;(statearr_29862[14] = inst_29835);
return statearr_29862;
})();var statearr_29863_29885 = state_29842__$1;(statearr_29863_29885[2] = inst_29836);
(statearr_29863_29885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29843 === 15))
{var inst_29832 = (state_29842[2]);var state_29842__$1 = state_29842;var statearr_29864_29886 = state_29842__$1;(statearr_29864_29886[2] = inst_29832);
(statearr_29864_29886[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5578__auto__){
return (function() {
var state_machine__5579__auto__ = null;
var state_machine__5579__auto____0 = (function (){var statearr_29868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29868[0] = state_machine__5579__auto__);
(statearr_29868[1] = 1);
return statearr_29868;
});
var state_machine__5579__auto____1 = (function (state_29842){while(true){
var ret_value__5580__auto__ = (function (){try{while(true){
var result__5581__auto__ = switch__5578__auto__.call(null,state_29842);if(cljs.core.keyword_identical_QMARK_.call(null,result__5581__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5581__auto__;
}
break;
}
}catch (e29869){if((e29869 instanceof Object))
{var ex__5582__auto__ = e29869;var statearr_29870_29887 = state_29842;(statearr_29870_29887[5] = ex__5582__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5580__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29888 = state_29842;
state_29842 = G__29888;
continue;
}
} else
{return ret_value__5580__auto__;
}
break;
}
});
state_machine__5579__auto__ = function(state_29842){
switch(arguments.length){
case 0:
return state_machine__5579__auto____0.call(this);
case 1:
return state_machine__5579__auto____1.call(this,state_29842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5579__auto____0;
state_machine__5579__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5579__auto____1;
return state_machine__5579__auto__;
})()
;})(switch__5578__auto__))
})();var state__5595__auto__ = (function (){var statearr_29871 = f__5594__auto__.call(null);(statearr_29871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5593__auto___29872);
return statearr_29871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5595__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map