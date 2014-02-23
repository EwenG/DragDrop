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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21322 = (function (f,fn_handler,meta21323){
this.f = f;
this.fn_handler = fn_handler;
this.meta21323 = meta21323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21322.cljs$lang$type = true;
cljs.core.async.t21322.cljs$lang$ctorStr = "cljs.core.async/t21322";
cljs.core.async.t21322.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21322");
});
cljs.core.async.t21322.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21324){var self__ = this;
var _21324__$1 = this;return self__.meta21323;
});
cljs.core.async.t21322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21324,meta21323__$1){var self__ = this;
var _21324__$1 = this;return (new cljs.core.async.t21322(self__.f,self__.fn_handler,meta21323__$1));
});
cljs.core.async.__GT_t21322 = (function __GT_t21322(f__$1,fn_handler__$1,meta21323){return (new cljs.core.async.t21322(f__$1,fn_handler__$1,meta21323));
});
}
return (new cljs.core.async.t21322(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21326 = buff;if(G__21326)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__21326.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21326.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21326);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21326);
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
{var val_21327 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21327);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21327);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___21328 = n;var x_21329 = 0;while(true){
if((x_21329 < n__4251__auto___21328))
{(a[x_21329] = 0);
{
var G__21330 = (x_21329 + 1);
x_21329 = G__21330;
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
var G__21331 = (i + 1);
i = G__21331;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21335 = (function (flag,alt_flag,meta21336){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21336 = meta21336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21335.cljs$lang$type = true;
cljs.core.async.t21335.cljs$lang$ctorStr = "cljs.core.async/t21335";
cljs.core.async.t21335.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21335");
});
cljs.core.async.t21335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21337){var self__ = this;
var _21337__$1 = this;return self__.meta21336;
});
cljs.core.async.t21335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21337,meta21336__$1){var self__ = this;
var _21337__$1 = this;return (new cljs.core.async.t21335(self__.flag,self__.alt_flag,meta21336__$1));
});
cljs.core.async.__GT_t21335 = (function __GT_t21335(flag__$1,alt_flag__$1,meta21336){return (new cljs.core.async.t21335(flag__$1,alt_flag__$1,meta21336));
});
}
return (new cljs.core.async.t21335(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21341 = (function (cb,flag,alt_handler,meta21342){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21342 = meta21342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21341.cljs$lang$type = true;
cljs.core.async.t21341.cljs$lang$ctorStr = "cljs.core.async/t21341";
cljs.core.async.t21341.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21341");
});
cljs.core.async.t21341.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21343){var self__ = this;
var _21343__$1 = this;return self__.meta21342;
});
cljs.core.async.t21341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21343,meta21342__$1){var self__ = this;
var _21343__$1 = this;return (new cljs.core.async.t21341(self__.cb,self__.flag,self__.alt_handler,meta21342__$1));
});
cljs.core.async.__GT_t21341 = (function __GT_t21341(cb__$1,flag__$1,alt_handler__$1,meta21342){return (new cljs.core.async.t21341(cb__$1,flag__$1,alt_handler__$1,meta21342));
});
}
return (new cljs.core.async.t21341(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21344_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21344_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21345_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21345_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21346 = (i + 1);
i = G__21346;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
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
var alts_BANG___delegate = function (ports,p__21347){var map__21349 = p__21347;var map__21349__$1 = ((cljs.core.seq_QMARK_.call(null,map__21349))?cljs.core.apply.call(null,cljs.core.hash_map,map__21349):map__21349);var opts = map__21349__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21347 = null;if (arguments.length > 1) {
  p__21347 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21347);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21350){
var ports = cljs.core.first(arglist__21350);
var p__21347 = cljs.core.rest(arglist__21350);
return alts_BANG___delegate(ports,p__21347);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21358 = (function (ch,f,map_LT_,meta21359){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21359 = meta21359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21358.cljs$lang$type = true;
cljs.core.async.t21358.cljs$lang$ctorStr = "cljs.core.async/t21358";
cljs.core.async.t21358.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21358");
});
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21361 = (function (fn1,_,meta21359,ch,f,map_LT_,meta21362){
this.fn1 = fn1;
this._ = _;
this.meta21359 = meta21359;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21362 = meta21362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21361.cljs$lang$type = true;
cljs.core.async.t21361.cljs$lang$ctorStr = "cljs.core.async/t21361";
cljs.core.async.t21361.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21361");
});
cljs.core.async.t21361.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21361.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21351_SHARP_){return f1.call(null,(((p1__21351_SHARP_ == null))?null:self__.f.call(null,p1__21351_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21363){var self__ = this;
var _21363__$1 = this;return self__.meta21362;
});
cljs.core.async.t21361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21363,meta21362__$1){var self__ = this;
var _21363__$1 = this;return (new cljs.core.async.t21361(self__.fn1,self__._,self__.meta21359,self__.ch,self__.f,self__.map_LT_,meta21362__$1));
});
cljs.core.async.__GT_t21361 = (function __GT_t21361(fn1__$1,___$2,meta21359__$1,ch__$2,f__$2,map_LT___$2,meta21362){return (new cljs.core.async.t21361(fn1__$1,___$2,meta21359__$1,ch__$2,f__$2,map_LT___$2,meta21362));
});
}
return (new cljs.core.async.t21361(fn1,___$1,self__.meta21359,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21358.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21360){var self__ = this;
var _21360__$1 = this;return self__.meta21359;
});
cljs.core.async.t21358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21360,meta21359__$1){var self__ = this;
var _21360__$1 = this;return (new cljs.core.async.t21358(self__.ch,self__.f,self__.map_LT_,meta21359__$1));
});
cljs.core.async.__GT_t21358 = (function __GT_t21358(ch__$1,f__$1,map_LT___$1,meta21359){return (new cljs.core.async.t21358(ch__$1,f__$1,map_LT___$1,meta21359));
});
}
return (new cljs.core.async.t21358(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21367 = (function (ch,f,map_GT_,meta21368){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21368 = meta21368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21367.cljs$lang$type = true;
cljs.core.async.t21367.cljs$lang$ctorStr = "cljs.core.async/t21367";
cljs.core.async.t21367.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21367");
});
cljs.core.async.t21367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21367.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21369){var self__ = this;
var _21369__$1 = this;return self__.meta21368;
});
cljs.core.async.t21367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21369,meta21368__$1){var self__ = this;
var _21369__$1 = this;return (new cljs.core.async.t21367(self__.ch,self__.f,self__.map_GT_,meta21368__$1));
});
cljs.core.async.__GT_t21367 = (function __GT_t21367(ch__$1,f__$1,map_GT___$1,meta21368){return (new cljs.core.async.t21367(ch__$1,f__$1,map_GT___$1,meta21368));
});
}
return (new cljs.core.async.t21367(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21373 = (function (ch,p,filter_GT_,meta21374){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21374 = meta21374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21373.cljs$lang$type = true;
cljs.core.async.t21373.cljs$lang$ctorStr = "cljs.core.async/t21373";
cljs.core.async.t21373.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t21373");
});
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21375){var self__ = this;
var _21375__$1 = this;return self__.meta21374;
});
cljs.core.async.t21373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21375,meta21374__$1){var self__ = this;
var _21375__$1 = this;return (new cljs.core.async.t21373(self__.ch,self__.p,self__.filter_GT_,meta21374__$1));
});
cljs.core.async.__GT_t21373 = (function __GT_t21373(ch__$1,p__$1,filter_GT___$1,meta21374){return (new cljs.core.async.t21373(ch__$1,p__$1,filter_GT___$1,meta21374));
});
}
return (new cljs.core.async.t21373(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___21458 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_21437){var state_val_21438 = (state_21437[1]);if((state_val_21438 === 1))
{var state_21437__$1 = state_21437;var statearr_21439_21459 = state_21437__$1;(statearr_21439_21459[2] = null);
(statearr_21439_21459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 2))
{var state_21437__$1 = state_21437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21437__$1,4,ch);
} else
{if((state_val_21438 === 3))
{var inst_21435 = (state_21437[2]);var state_21437__$1 = state_21437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21437__$1,inst_21435);
} else
{if((state_val_21438 === 4))
{var inst_21419 = (state_21437[7]);var inst_21419__$1 = (state_21437[2]);var inst_21420 = (inst_21419__$1 == null);var state_21437__$1 = (function (){var statearr_21440 = state_21437;(statearr_21440[7] = inst_21419__$1);
return statearr_21440;
})();if(cljs.core.truth_(inst_21420))
{var statearr_21441_21460 = state_21437__$1;(statearr_21441_21460[1] = 5);
} else
{var statearr_21442_21461 = state_21437__$1;(statearr_21442_21461[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 5))
{var inst_21422 = cljs.core.async.close_BANG_.call(null,out);var state_21437__$1 = state_21437;var statearr_21443_21462 = state_21437__$1;(statearr_21443_21462[2] = inst_21422);
(statearr_21443_21462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 6))
{var inst_21419 = (state_21437[7]);var inst_21424 = p.call(null,inst_21419);var state_21437__$1 = state_21437;if(cljs.core.truth_(inst_21424))
{var statearr_21444_21463 = state_21437__$1;(statearr_21444_21463[1] = 8);
} else
{var statearr_21445_21464 = state_21437__$1;(statearr_21445_21464[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 7))
{var inst_21433 = (state_21437[2]);var state_21437__$1 = state_21437;var statearr_21446_21465 = state_21437__$1;(statearr_21446_21465[2] = inst_21433);
(statearr_21446_21465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 8))
{var inst_21419 = (state_21437[7]);var state_21437__$1 = state_21437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21437__$1,11,out,inst_21419);
} else
{if((state_val_21438 === 9))
{var state_21437__$1 = state_21437;var statearr_21447_21466 = state_21437__$1;(statearr_21447_21466[2] = null);
(statearr_21447_21466[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 10))
{var inst_21430 = (state_21437[2]);var state_21437__$1 = (function (){var statearr_21448 = state_21437;(statearr_21448[8] = inst_21430);
return statearr_21448;
})();var statearr_21449_21467 = state_21437__$1;(statearr_21449_21467[2] = null);
(statearr_21449_21467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21438 === 11))
{var inst_21427 = (state_21437[2]);var state_21437__$1 = state_21437;var statearr_21450_21468 = state_21437__$1;(statearr_21450_21468[2] = inst_21427);
(statearr_21450_21468[1] = 10);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_21454 = [null,null,null,null,null,null,null,null,null];(statearr_21454[0] = state_machine__5525__auto__);
(statearr_21454[1] = 1);
return statearr_21454;
});
var state_machine__5525__auto____1 = (function (state_21437){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_21437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e21455){if((e21455 instanceof Object))
{var ex__5528__auto__ = e21455;var statearr_21456_21469 = state_21437;(statearr_21456_21469[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21470 = state_21437;
state_21437 = G__21470;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_21437){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_21437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_21457 = f__5540__auto__.call(null);(statearr_21457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___21458);
return statearr_21457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_21636){var state_val_21637 = (state_21636[1]);if((state_val_21637 === 1))
{var state_21636__$1 = state_21636;var statearr_21638_21679 = state_21636__$1;(statearr_21638_21679[2] = null);
(statearr_21638_21679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 2))
{var state_21636__$1 = state_21636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21636__$1,4,in$);
} else
{if((state_val_21637 === 3))
{var inst_21634 = (state_21636[2]);var state_21636__$1 = state_21636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21636__$1,inst_21634);
} else
{if((state_val_21637 === 4))
{var inst_21577 = (state_21636[7]);var inst_21577__$1 = (state_21636[2]);var inst_21578 = (inst_21577__$1 == null);var state_21636__$1 = (function (){var statearr_21639 = state_21636;(statearr_21639[7] = inst_21577__$1);
return statearr_21639;
})();if(cljs.core.truth_(inst_21578))
{var statearr_21640_21680 = state_21636__$1;(statearr_21640_21680[1] = 5);
} else
{var statearr_21641_21681 = state_21636__$1;(statearr_21641_21681[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 5))
{var inst_21580 = cljs.core.async.close_BANG_.call(null,out);var state_21636__$1 = state_21636;var statearr_21642_21682 = state_21636__$1;(statearr_21642_21682[2] = inst_21580);
(statearr_21642_21682[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 6))
{var inst_21577 = (state_21636[7]);var inst_21586 = f.call(null,inst_21577);var inst_21587 = cljs.core.seq.call(null,inst_21586);var inst_21588 = inst_21587;var inst_21589 = null;var inst_21590 = 0;var inst_21591 = 0;var state_21636__$1 = (function (){var statearr_21643 = state_21636;(statearr_21643[8] = inst_21590);
(statearr_21643[9] = inst_21591);
(statearr_21643[10] = inst_21588);
(statearr_21643[11] = inst_21589);
return statearr_21643;
})();var statearr_21644_21683 = state_21636__$1;(statearr_21644_21683[2] = null);
(statearr_21644_21683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 7))
{var inst_21632 = (state_21636[2]);var state_21636__$1 = state_21636;var statearr_21645_21684 = state_21636__$1;(statearr_21645_21684[2] = inst_21632);
(statearr_21645_21684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 8))
{var inst_21590 = (state_21636[8]);var inst_21591 = (state_21636[9]);var inst_21593 = (inst_21591 < inst_21590);var inst_21594 = inst_21593;var state_21636__$1 = state_21636;if(cljs.core.truth_(inst_21594))
{var statearr_21646_21685 = state_21636__$1;(statearr_21646_21685[1] = 10);
} else
{var statearr_21647_21686 = state_21636__$1;(statearr_21647_21686[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 9))
{var inst_21624 = (state_21636[2]);var inst_21625 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21636__$1 = (function (){var statearr_21648 = state_21636;(statearr_21648[12] = inst_21624);
return statearr_21648;
})();if(cljs.core.truth_(inst_21625))
{var statearr_21649_21687 = state_21636__$1;(statearr_21649_21687[1] = 21);
} else
{var statearr_21650_21688 = state_21636__$1;(statearr_21650_21688[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 10))
{var inst_21591 = (state_21636[9]);var inst_21589 = (state_21636[11]);var inst_21596 = cljs.core._nth.call(null,inst_21589,inst_21591);var state_21636__$1 = state_21636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21636__$1,13,out,inst_21596);
} else
{if((state_val_21637 === 11))
{var inst_21602 = (state_21636[13]);var inst_21588 = (state_21636[10]);var inst_21602__$1 = cljs.core.seq.call(null,inst_21588);var state_21636__$1 = (function (){var statearr_21654 = state_21636;(statearr_21654[13] = inst_21602__$1);
return statearr_21654;
})();if(inst_21602__$1)
{var statearr_21655_21689 = state_21636__$1;(statearr_21655_21689[1] = 14);
} else
{var statearr_21656_21690 = state_21636__$1;(statearr_21656_21690[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 12))
{var inst_21622 = (state_21636[2]);var state_21636__$1 = state_21636;var statearr_21657_21691 = state_21636__$1;(statearr_21657_21691[2] = inst_21622);
(statearr_21657_21691[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 13))
{var inst_21590 = (state_21636[8]);var inst_21591 = (state_21636[9]);var inst_21588 = (state_21636[10]);var inst_21589 = (state_21636[11]);var inst_21598 = (state_21636[2]);var inst_21599 = (inst_21591 + 1);var tmp21651 = inst_21590;var tmp21652 = inst_21588;var tmp21653 = inst_21589;var inst_21588__$1 = tmp21652;var inst_21589__$1 = tmp21653;var inst_21590__$1 = tmp21651;var inst_21591__$1 = inst_21599;var state_21636__$1 = (function (){var statearr_21658 = state_21636;(statearr_21658[8] = inst_21590__$1);
(statearr_21658[9] = inst_21591__$1);
(statearr_21658[14] = inst_21598);
(statearr_21658[10] = inst_21588__$1);
(statearr_21658[11] = inst_21589__$1);
return statearr_21658;
})();var statearr_21659_21692 = state_21636__$1;(statearr_21659_21692[2] = null);
(statearr_21659_21692[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 14))
{var inst_21602 = (state_21636[13]);var inst_21604 = cljs.core.chunked_seq_QMARK_.call(null,inst_21602);var state_21636__$1 = state_21636;if(inst_21604)
{var statearr_21660_21693 = state_21636__$1;(statearr_21660_21693[1] = 17);
} else
{var statearr_21661_21694 = state_21636__$1;(statearr_21661_21694[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 15))
{var state_21636__$1 = state_21636;var statearr_21662_21695 = state_21636__$1;(statearr_21662_21695[2] = null);
(statearr_21662_21695[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 16))
{var inst_21620 = (state_21636[2]);var state_21636__$1 = state_21636;var statearr_21663_21696 = state_21636__$1;(statearr_21663_21696[2] = inst_21620);
(statearr_21663_21696[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 17))
{var inst_21602 = (state_21636[13]);var inst_21606 = cljs.core.chunk_first.call(null,inst_21602);var inst_21607 = cljs.core.chunk_rest.call(null,inst_21602);var inst_21608 = cljs.core.count.call(null,inst_21606);var inst_21588 = inst_21607;var inst_21589 = inst_21606;var inst_21590 = inst_21608;var inst_21591 = 0;var state_21636__$1 = (function (){var statearr_21664 = state_21636;(statearr_21664[8] = inst_21590);
(statearr_21664[9] = inst_21591);
(statearr_21664[10] = inst_21588);
(statearr_21664[11] = inst_21589);
return statearr_21664;
})();var statearr_21665_21697 = state_21636__$1;(statearr_21665_21697[2] = null);
(statearr_21665_21697[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 18))
{var inst_21602 = (state_21636[13]);var inst_21611 = cljs.core.first.call(null,inst_21602);var state_21636__$1 = state_21636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21636__$1,20,out,inst_21611);
} else
{if((state_val_21637 === 19))
{var inst_21617 = (state_21636[2]);var state_21636__$1 = state_21636;var statearr_21666_21698 = state_21636__$1;(statearr_21666_21698[2] = inst_21617);
(statearr_21666_21698[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 20))
{var inst_21602 = (state_21636[13]);var inst_21613 = (state_21636[2]);var inst_21614 = cljs.core.next.call(null,inst_21602);var inst_21588 = inst_21614;var inst_21589 = null;var inst_21590 = 0;var inst_21591 = 0;var state_21636__$1 = (function (){var statearr_21667 = state_21636;(statearr_21667[8] = inst_21590);
(statearr_21667[9] = inst_21591);
(statearr_21667[15] = inst_21613);
(statearr_21667[10] = inst_21588);
(statearr_21667[11] = inst_21589);
return statearr_21667;
})();var statearr_21668_21699 = state_21636__$1;(statearr_21668_21699[2] = null);
(statearr_21668_21699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 21))
{var state_21636__$1 = state_21636;var statearr_21669_21700 = state_21636__$1;(statearr_21669_21700[2] = null);
(statearr_21669_21700[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 22))
{var state_21636__$1 = state_21636;var statearr_21670_21701 = state_21636__$1;(statearr_21670_21701[2] = null);
(statearr_21670_21701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21637 === 23))
{var inst_21630 = (state_21636[2]);var state_21636__$1 = state_21636;var statearr_21671_21702 = state_21636__$1;(statearr_21671_21702[2] = inst_21630);
(statearr_21671_21702[1] = 7);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_21675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21675[0] = state_machine__5525__auto__);
(statearr_21675[1] = 1);
return statearr_21675;
});
var state_machine__5525__auto____1 = (function (state_21636){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_21636);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e21676){if((e21676 instanceof Object))
{var ex__5528__auto__ = e21676;var statearr_21677_21703 = state_21636;(statearr_21677_21703[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21704 = state_21636;
state_21636 = G__21704;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_21636){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_21636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_21678 = f__5540__auto__.call(null);(statearr_21678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_21678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5539__auto___21799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_21775){var state_val_21776 = (state_21775[1]);if((state_val_21776 === 1))
{var state_21775__$1 = state_21775;var statearr_21777_21800 = state_21775__$1;(statearr_21777_21800[2] = null);
(statearr_21777_21800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 2))
{var state_21775__$1 = state_21775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21775__$1,4,from);
} else
{if((state_val_21776 === 3))
{var inst_21773 = (state_21775[2]);var state_21775__$1 = state_21775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21775__$1,inst_21773);
} else
{if((state_val_21776 === 4))
{var inst_21754 = (state_21775[7]);var inst_21754__$1 = (state_21775[2]);var inst_21755 = (inst_21754__$1 == null);var state_21775__$1 = (function (){var statearr_21778 = state_21775;(statearr_21778[7] = inst_21754__$1);
return statearr_21778;
})();if(cljs.core.truth_(inst_21755))
{var statearr_21779_21801 = state_21775__$1;(statearr_21779_21801[1] = 5);
} else
{var statearr_21780_21802 = state_21775__$1;(statearr_21780_21802[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 5))
{var state_21775__$1 = state_21775;if(cljs.core.truth_(close_QMARK_))
{var statearr_21781_21803 = state_21775__$1;(statearr_21781_21803[1] = 8);
} else
{var statearr_21782_21804 = state_21775__$1;(statearr_21782_21804[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 6))
{var inst_21754 = (state_21775[7]);var state_21775__$1 = state_21775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21775__$1,11,to,inst_21754);
} else
{if((state_val_21776 === 7))
{var inst_21771 = (state_21775[2]);var state_21775__$1 = state_21775;var statearr_21783_21805 = state_21775__$1;(statearr_21783_21805[2] = inst_21771);
(statearr_21783_21805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 8))
{var inst_21758 = cljs.core.async.close_BANG_.call(null,to);var state_21775__$1 = state_21775;var statearr_21784_21806 = state_21775__$1;(statearr_21784_21806[2] = inst_21758);
(statearr_21784_21806[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 9))
{var state_21775__$1 = state_21775;var statearr_21785_21807 = state_21775__$1;(statearr_21785_21807[2] = null);
(statearr_21785_21807[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 10))
{var inst_21761 = (state_21775[2]);var state_21775__$1 = state_21775;var statearr_21786_21808 = state_21775__$1;(statearr_21786_21808[2] = inst_21761);
(statearr_21786_21808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 11))
{var inst_21764 = (state_21775[2]);var state_21775__$1 = state_21775;if(cljs.core.truth_(inst_21764))
{var statearr_21787_21809 = state_21775__$1;(statearr_21787_21809[1] = 12);
} else
{var statearr_21788_21810 = state_21775__$1;(statearr_21788_21810[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 12))
{var state_21775__$1 = state_21775;var statearr_21789_21811 = state_21775__$1;(statearr_21789_21811[2] = null);
(statearr_21789_21811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 13))
{var state_21775__$1 = state_21775;var statearr_21790_21812 = state_21775__$1;(statearr_21790_21812[2] = null);
(statearr_21790_21812[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21776 === 14))
{var inst_21769 = (state_21775[2]);var state_21775__$1 = state_21775;var statearr_21791_21813 = state_21775__$1;(statearr_21791_21813[2] = inst_21769);
(statearr_21791_21813[1] = 7);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_21795 = [null,null,null,null,null,null,null,null];(statearr_21795[0] = state_machine__5525__auto__);
(statearr_21795[1] = 1);
return statearr_21795;
});
var state_machine__5525__auto____1 = (function (state_21775){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_21775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e21796){if((e21796 instanceof Object))
{var ex__5528__auto__ = e21796;var statearr_21797_21814 = state_21775;(statearr_21797_21814[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21815 = state_21775;
state_21775 = G__21815;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_21775){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_21775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_21798 = f__5540__auto__.call(null);(statearr_21798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___21799);
return statearr_21798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5539__auto___21916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_21891){var state_val_21892 = (state_21891[1]);if((state_val_21892 === 1))
{var state_21891__$1 = state_21891;var statearr_21893_21917 = state_21891__$1;(statearr_21893_21917[2] = null);
(statearr_21893_21917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 2))
{var state_21891__$1 = state_21891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21891__$1,4,ch);
} else
{if((state_val_21892 === 3))
{var inst_21889 = (state_21891[2]);var state_21891__$1 = state_21891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21891__$1,inst_21889);
} else
{if((state_val_21892 === 4))
{var inst_21868 = (state_21891[7]);var inst_21868__$1 = (state_21891[2]);var inst_21869 = (inst_21868__$1 == null);var state_21891__$1 = (function (){var statearr_21894 = state_21891;(statearr_21894[7] = inst_21868__$1);
return statearr_21894;
})();if(cljs.core.truth_(inst_21869))
{var statearr_21895_21918 = state_21891__$1;(statearr_21895_21918[1] = 5);
} else
{var statearr_21896_21919 = state_21891__$1;(statearr_21896_21919[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 5))
{var inst_21871 = cljs.core.async.close_BANG_.call(null,tc);var inst_21872 = cljs.core.async.close_BANG_.call(null,fc);var state_21891__$1 = (function (){var statearr_21897 = state_21891;(statearr_21897[8] = inst_21871);
return statearr_21897;
})();var statearr_21898_21920 = state_21891__$1;(statearr_21898_21920[2] = inst_21872);
(statearr_21898_21920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 6))
{var inst_21868 = (state_21891[7]);var inst_21874 = p.call(null,inst_21868);var state_21891__$1 = state_21891;if(cljs.core.truth_(inst_21874))
{var statearr_21899_21921 = state_21891__$1;(statearr_21899_21921[1] = 9);
} else
{var statearr_21900_21922 = state_21891__$1;(statearr_21900_21922[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 7))
{var inst_21887 = (state_21891[2]);var state_21891__$1 = state_21891;var statearr_21901_21923 = state_21891__$1;(statearr_21901_21923[2] = inst_21887);
(statearr_21901_21923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 8))
{var inst_21880 = (state_21891[2]);var state_21891__$1 = state_21891;if(cljs.core.truth_(inst_21880))
{var statearr_21902_21924 = state_21891__$1;(statearr_21902_21924[1] = 12);
} else
{var statearr_21903_21925 = state_21891__$1;(statearr_21903_21925[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 9))
{var state_21891__$1 = state_21891;var statearr_21904_21926 = state_21891__$1;(statearr_21904_21926[2] = tc);
(statearr_21904_21926[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 10))
{var state_21891__$1 = state_21891;var statearr_21905_21927 = state_21891__$1;(statearr_21905_21927[2] = fc);
(statearr_21905_21927[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 11))
{var inst_21868 = (state_21891[7]);var inst_21878 = (state_21891[2]);var state_21891__$1 = state_21891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21891__$1,8,inst_21878,inst_21868);
} else
{if((state_val_21892 === 12))
{var state_21891__$1 = state_21891;var statearr_21906_21928 = state_21891__$1;(statearr_21906_21928[2] = null);
(statearr_21906_21928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 13))
{var state_21891__$1 = state_21891;var statearr_21907_21929 = state_21891__$1;(statearr_21907_21929[2] = null);
(statearr_21907_21929[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21892 === 14))
{var inst_21885 = (state_21891[2]);var state_21891__$1 = state_21891;var statearr_21908_21930 = state_21891__$1;(statearr_21908_21930[2] = inst_21885);
(statearr_21908_21930[1] = 7);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_21912 = [null,null,null,null,null,null,null,null,null];(statearr_21912[0] = state_machine__5525__auto__);
(statearr_21912[1] = 1);
return statearr_21912;
});
var state_machine__5525__auto____1 = (function (state_21891){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_21891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e21913){if((e21913 instanceof Object))
{var ex__5528__auto__ = e21913;var statearr_21914_21931 = state_21891;(statearr_21914_21931[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21932 = state_21891;
state_21891 = G__21932;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_21891){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_21891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_21915 = f__5540__auto__.call(null);(statearr_21915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___21916);
return statearr_21915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_21979){var state_val_21980 = (state_21979[1]);if((state_val_21980 === 7))
{var inst_21975 = (state_21979[2]);var state_21979__$1 = state_21979;var statearr_21981_21997 = state_21979__$1;(statearr_21981_21997[2] = inst_21975);
(statearr_21981_21997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21980 === 6))
{var inst_21965 = (state_21979[7]);var inst_21968 = (state_21979[8]);var inst_21972 = f.call(null,inst_21965,inst_21968);var inst_21965__$1 = inst_21972;var state_21979__$1 = (function (){var statearr_21982 = state_21979;(statearr_21982[7] = inst_21965__$1);
return statearr_21982;
})();var statearr_21983_21998 = state_21979__$1;(statearr_21983_21998[2] = null);
(statearr_21983_21998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21980 === 5))
{var inst_21965 = (state_21979[7]);var state_21979__$1 = state_21979;var statearr_21984_21999 = state_21979__$1;(statearr_21984_21999[2] = inst_21965);
(statearr_21984_21999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21980 === 4))
{var inst_21968 = (state_21979[8]);var inst_21968__$1 = (state_21979[2]);var inst_21969 = (inst_21968__$1 == null);var state_21979__$1 = (function (){var statearr_21985 = state_21979;(statearr_21985[8] = inst_21968__$1);
return statearr_21985;
})();if(cljs.core.truth_(inst_21969))
{var statearr_21986_22000 = state_21979__$1;(statearr_21986_22000[1] = 5);
} else
{var statearr_21987_22001 = state_21979__$1;(statearr_21987_22001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21980 === 3))
{var inst_21977 = (state_21979[2]);var state_21979__$1 = state_21979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21979__$1,inst_21977);
} else
{if((state_val_21980 === 2))
{var state_21979__$1 = state_21979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21979__$1,4,ch);
} else
{if((state_val_21980 === 1))
{var inst_21965 = init;var state_21979__$1 = (function (){var statearr_21988 = state_21979;(statearr_21988[7] = inst_21965);
return statearr_21988;
})();var statearr_21989_22002 = state_21979__$1;(statearr_21989_22002[2] = null);
(statearr_21989_22002[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_21993 = [null,null,null,null,null,null,null,null,null];(statearr_21993[0] = state_machine__5525__auto__);
(statearr_21993[1] = 1);
return statearr_21993;
});
var state_machine__5525__auto____1 = (function (state_21979){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_21979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e21994){if((e21994 instanceof Object))
{var ex__5528__auto__ = e21994;var statearr_21995_22003 = state_21979;(statearr_21995_22003[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22004 = state_21979;
state_21979 = G__22004;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_21979){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_21979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_21996 = f__5540__auto__.call(null);(statearr_21996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_21996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_22078){var state_val_22079 = (state_22078[1]);if((state_val_22079 === 1))
{var inst_22054 = cljs.core.seq.call(null,coll);var inst_22055 = inst_22054;var state_22078__$1 = (function (){var statearr_22080 = state_22078;(statearr_22080[7] = inst_22055);
return statearr_22080;
})();var statearr_22081_22103 = state_22078__$1;(statearr_22081_22103[2] = null);
(statearr_22081_22103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 2))
{var inst_22055 = (state_22078[7]);var state_22078__$1 = state_22078;if(cljs.core.truth_(inst_22055))
{var statearr_22082_22104 = state_22078__$1;(statearr_22082_22104[1] = 4);
} else
{var statearr_22083_22105 = state_22078__$1;(statearr_22083_22105[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 3))
{var inst_22076 = (state_22078[2]);var state_22078__$1 = state_22078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22078__$1,inst_22076);
} else
{if((state_val_22079 === 4))
{var inst_22055 = (state_22078[7]);var inst_22058 = cljs.core.first.call(null,inst_22055);var state_22078__$1 = state_22078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22078__$1,7,ch,inst_22058);
} else
{if((state_val_22079 === 5))
{var inst_22055 = (state_22078[7]);var state_22078__$1 = state_22078;var statearr_22084_22106 = state_22078__$1;(statearr_22084_22106[2] = inst_22055);
(statearr_22084_22106[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 6))
{var inst_22063 = (state_22078[2]);var state_22078__$1 = state_22078;if(cljs.core.truth_(inst_22063))
{var statearr_22085_22107 = state_22078__$1;(statearr_22085_22107[1] = 8);
} else
{var statearr_22086_22108 = state_22078__$1;(statearr_22086_22108[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 7))
{var inst_22060 = (state_22078[2]);var state_22078__$1 = state_22078;var statearr_22087_22109 = state_22078__$1;(statearr_22087_22109[2] = inst_22060);
(statearr_22087_22109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 8))
{var inst_22055 = (state_22078[7]);var inst_22065 = cljs.core.next.call(null,inst_22055);var inst_22055__$1 = inst_22065;var state_22078__$1 = (function (){var statearr_22088 = state_22078;(statearr_22088[7] = inst_22055__$1);
return statearr_22088;
})();var statearr_22089_22110 = state_22078__$1;(statearr_22089_22110[2] = null);
(statearr_22089_22110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 9))
{var state_22078__$1 = state_22078;if(cljs.core.truth_(close_QMARK_))
{var statearr_22090_22111 = state_22078__$1;(statearr_22090_22111[1] = 11);
} else
{var statearr_22091_22112 = state_22078__$1;(statearr_22091_22112[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 10))
{var inst_22074 = (state_22078[2]);var state_22078__$1 = state_22078;var statearr_22092_22113 = state_22078__$1;(statearr_22092_22113[2] = inst_22074);
(statearr_22092_22113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 11))
{var inst_22069 = cljs.core.async.close_BANG_.call(null,ch);var state_22078__$1 = state_22078;var statearr_22093_22114 = state_22078__$1;(statearr_22093_22114[2] = inst_22069);
(statearr_22093_22114[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 12))
{var state_22078__$1 = state_22078;var statearr_22094_22115 = state_22078__$1;(statearr_22094_22115[2] = null);
(statearr_22094_22115[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22079 === 13))
{var inst_22072 = (state_22078[2]);var state_22078__$1 = state_22078;var statearr_22095_22116 = state_22078__$1;(statearr_22095_22116[2] = inst_22072);
(statearr_22095_22116[1] = 10);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_22099 = [null,null,null,null,null,null,null,null];(statearr_22099[0] = state_machine__5525__auto__);
(statearr_22099[1] = 1);
return statearr_22099;
});
var state_machine__5525__auto____1 = (function (state_22078){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_22078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e22100){if((e22100 instanceof Object))
{var ex__5528__auto__ = e22100;var statearr_22101_22117 = state_22078;(statearr_22101_22117[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22118 = state_22078;
state_22078 = G__22118;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_22078){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_22078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_22102 = f__5540__auto__.call(null);(statearr_22102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_22102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
}));
return c__5539__auto__;
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
cljs.core.async.Mux = (function (){var obj22120 = {};return obj22120;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22122 = {};return obj22122;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22344 = (function (cs,ch,mult,meta22345){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22345 = meta22345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22344.cljs$lang$type = true;
cljs.core.async.t22344.cljs$lang$ctorStr = "cljs.core.async/t22344";
cljs.core.async.t22344.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t22344");
});})(cs))
;
cljs.core.async.t22344.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22344.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22346){var self__ = this;
var _22346__$1 = this;return self__.meta22345;
});})(cs))
;
cljs.core.async.t22344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22346,meta22345__$1){var self__ = this;
var _22346__$1 = this;return (new cljs.core.async.t22344(self__.cs,self__.ch,self__.mult,meta22345__$1));
});})(cs))
;
cljs.core.async.__GT_t22344 = ((function (cs){
return (function __GT_t22344(cs__$1,ch__$1,mult__$1,meta22345){return (new cljs.core.async.t22344(cs__$1,ch__$1,mult__$1,meta22345));
});})(cs))
;
}
return (new cljs.core.async.t22344(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5539__auto___22565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_22477){var state_val_22478 = (state_22477[1]);if((state_val_22478 === 32))
{var inst_22420 = (state_22477[7]);var inst_22417 = (state_22477[8]);var inst_22419 = (state_22477[9]);var inst_22418 = (state_22477[10]);var inst_22432 = (state_22477[2]);var inst_22433 = (inst_22420 + 1);var tmp22479 = inst_22417;var tmp22480 = inst_22419;var tmp22481 = inst_22418;var inst_22417__$1 = tmp22479;var inst_22418__$1 = tmp22481;var inst_22419__$1 = tmp22480;var inst_22420__$1 = inst_22433;var state_22477__$1 = (function (){var statearr_22482 = state_22477;(statearr_22482[11] = inst_22432);
(statearr_22482[7] = inst_22420__$1);
(statearr_22482[8] = inst_22417__$1);
(statearr_22482[9] = inst_22419__$1);
(statearr_22482[10] = inst_22418__$1);
return statearr_22482;
})();var statearr_22483_22566 = state_22477__$1;(statearr_22483_22566[2] = null);
(statearr_22483_22566[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 1))
{var state_22477__$1 = state_22477;var statearr_22484_22567 = state_22477__$1;(statearr_22484_22567[2] = null);
(statearr_22484_22567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 33))
{var inst_22436 = (state_22477[12]);var inst_22438 = cljs.core.chunked_seq_QMARK_.call(null,inst_22436);var state_22477__$1 = state_22477;if(inst_22438)
{var statearr_22485_22568 = state_22477__$1;(statearr_22485_22568[1] = 36);
} else
{var statearr_22486_22569 = state_22477__$1;(statearr_22486_22569[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 2))
{var state_22477__$1 = state_22477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22477__$1,4,ch);
} else
{if((state_val_22478 === 34))
{var state_22477__$1 = state_22477;var statearr_22487_22570 = state_22477__$1;(statearr_22487_22570[2] = null);
(statearr_22487_22570[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 3))
{var inst_22475 = (state_22477[2]);var state_22477__$1 = state_22477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22477__$1,inst_22475);
} else
{if((state_val_22478 === 35))
{var inst_22459 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22488_22571 = state_22477__$1;(statearr_22488_22571[2] = inst_22459);
(statearr_22488_22571[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 4))
{var inst_22349 = (state_22477[13]);var inst_22349__$1 = (state_22477[2]);var inst_22350 = (inst_22349__$1 == null);var state_22477__$1 = (function (){var statearr_22489 = state_22477;(statearr_22489[13] = inst_22349__$1);
return statearr_22489;
})();if(cljs.core.truth_(inst_22350))
{var statearr_22490_22572 = state_22477__$1;(statearr_22490_22572[1] = 5);
} else
{var statearr_22491_22573 = state_22477__$1;(statearr_22491_22573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 36))
{var inst_22436 = (state_22477[12]);var inst_22440 = cljs.core.chunk_first.call(null,inst_22436);var inst_22441 = cljs.core.chunk_rest.call(null,inst_22436);var inst_22442 = cljs.core.count.call(null,inst_22440);var inst_22417 = inst_22441;var inst_22418 = inst_22440;var inst_22419 = inst_22442;var inst_22420 = 0;var state_22477__$1 = (function (){var statearr_22492 = state_22477;(statearr_22492[7] = inst_22420);
(statearr_22492[8] = inst_22417);
(statearr_22492[9] = inst_22419);
(statearr_22492[10] = inst_22418);
return statearr_22492;
})();var statearr_22493_22574 = state_22477__$1;(statearr_22493_22574[2] = null);
(statearr_22493_22574[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 5))
{var inst_22356 = cljs.core.deref.call(null,cs);var inst_22357 = cljs.core.seq.call(null,inst_22356);var inst_22358 = inst_22357;var inst_22359 = null;var inst_22360 = 0;var inst_22361 = 0;var state_22477__$1 = (function (){var statearr_22494 = state_22477;(statearr_22494[14] = inst_22360);
(statearr_22494[15] = inst_22361);
(statearr_22494[16] = inst_22358);
(statearr_22494[17] = inst_22359);
return statearr_22494;
})();var statearr_22495_22575 = state_22477__$1;(statearr_22495_22575[2] = null);
(statearr_22495_22575[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 37))
{var inst_22349 = (state_22477[13]);var inst_22445 = (state_22477[18]);var inst_22436 = (state_22477[12]);var inst_22445__$1 = cljs.core.first.call(null,inst_22436);var inst_22446 = cljs.core.async.put_BANG_.call(null,inst_22445__$1,inst_22349,done);var state_22477__$1 = (function (){var statearr_22496 = state_22477;(statearr_22496[18] = inst_22445__$1);
return statearr_22496;
})();if(cljs.core.truth_(inst_22446))
{var statearr_22497_22576 = state_22477__$1;(statearr_22497_22576[1] = 39);
} else
{var statearr_22498_22577 = state_22477__$1;(statearr_22498_22577[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 6))
{var inst_22409 = (state_22477[19]);var inst_22408 = cljs.core.deref.call(null,cs);var inst_22409__$1 = cljs.core.keys.call(null,inst_22408);var inst_22410 = cljs.core.count.call(null,inst_22409__$1);var inst_22411 = cljs.core.reset_BANG_.call(null,dctr,inst_22410);var inst_22416 = cljs.core.seq.call(null,inst_22409__$1);var inst_22417 = inst_22416;var inst_22418 = null;var inst_22419 = 0;var inst_22420 = 0;var state_22477__$1 = (function (){var statearr_22499 = state_22477;(statearr_22499[7] = inst_22420);
(statearr_22499[19] = inst_22409__$1);
(statearr_22499[8] = inst_22417);
(statearr_22499[9] = inst_22419);
(statearr_22499[10] = inst_22418);
(statearr_22499[20] = inst_22411);
return statearr_22499;
})();var statearr_22500_22578 = state_22477__$1;(statearr_22500_22578[2] = null);
(statearr_22500_22578[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 38))
{var inst_22456 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22501_22579 = state_22477__$1;(statearr_22501_22579[2] = inst_22456);
(statearr_22501_22579[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 7))
{var inst_22473 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22502_22580 = state_22477__$1;(statearr_22502_22580[2] = inst_22473);
(statearr_22502_22580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 39))
{var state_22477__$1 = state_22477;var statearr_22503_22581 = state_22477__$1;(statearr_22503_22581[2] = null);
(statearr_22503_22581[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 8))
{var inst_22360 = (state_22477[14]);var inst_22361 = (state_22477[15]);var inst_22363 = (inst_22361 < inst_22360);var inst_22364 = inst_22363;var state_22477__$1 = state_22477;if(cljs.core.truth_(inst_22364))
{var statearr_22504_22582 = state_22477__$1;(statearr_22504_22582[1] = 10);
} else
{var statearr_22505_22583 = state_22477__$1;(statearr_22505_22583[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 40))
{var inst_22445 = (state_22477[18]);var inst_22449 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22450 = cljs.core.async.untap_STAR_.call(null,m,inst_22445);var state_22477__$1 = (function (){var statearr_22506 = state_22477;(statearr_22506[21] = inst_22449);
return statearr_22506;
})();var statearr_22507_22584 = state_22477__$1;(statearr_22507_22584[2] = inst_22450);
(statearr_22507_22584[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 9))
{var inst_22406 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22508_22585 = state_22477__$1;(statearr_22508_22585[2] = inst_22406);
(statearr_22508_22585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 41))
{var inst_22436 = (state_22477[12]);var inst_22452 = (state_22477[2]);var inst_22453 = cljs.core.next.call(null,inst_22436);var inst_22417 = inst_22453;var inst_22418 = null;var inst_22419 = 0;var inst_22420 = 0;var state_22477__$1 = (function (){var statearr_22509 = state_22477;(statearr_22509[7] = inst_22420);
(statearr_22509[8] = inst_22417);
(statearr_22509[9] = inst_22419);
(statearr_22509[10] = inst_22418);
(statearr_22509[22] = inst_22452);
return statearr_22509;
})();var statearr_22510_22586 = state_22477__$1;(statearr_22510_22586[2] = null);
(statearr_22510_22586[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 10))
{var inst_22361 = (state_22477[15]);var inst_22359 = (state_22477[17]);var inst_22367 = cljs.core._nth.call(null,inst_22359,inst_22361);var inst_22368 = cljs.core.nth.call(null,inst_22367,0,null);var inst_22369 = cljs.core.nth.call(null,inst_22367,1,null);var state_22477__$1 = (function (){var statearr_22511 = state_22477;(statearr_22511[23] = inst_22368);
return statearr_22511;
})();if(cljs.core.truth_(inst_22369))
{var statearr_22512_22587 = state_22477__$1;(statearr_22512_22587[1] = 13);
} else
{var statearr_22513_22588 = state_22477__$1;(statearr_22513_22588[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 42))
{var state_22477__$1 = state_22477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22477__$1,45,dchan);
} else
{if((state_val_22478 === 11))
{var inst_22378 = (state_22477[24]);var inst_22358 = (state_22477[16]);var inst_22378__$1 = cljs.core.seq.call(null,inst_22358);var state_22477__$1 = (function (){var statearr_22514 = state_22477;(statearr_22514[24] = inst_22378__$1);
return statearr_22514;
})();if(inst_22378__$1)
{var statearr_22515_22589 = state_22477__$1;(statearr_22515_22589[1] = 16);
} else
{var statearr_22516_22590 = state_22477__$1;(statearr_22516_22590[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 43))
{var state_22477__$1 = state_22477;var statearr_22517_22591 = state_22477__$1;(statearr_22517_22591[2] = null);
(statearr_22517_22591[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 12))
{var inst_22404 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22518_22592 = state_22477__$1;(statearr_22518_22592[2] = inst_22404);
(statearr_22518_22592[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 44))
{var inst_22470 = (state_22477[2]);var state_22477__$1 = (function (){var statearr_22519 = state_22477;(statearr_22519[25] = inst_22470);
return statearr_22519;
})();var statearr_22520_22593 = state_22477__$1;(statearr_22520_22593[2] = null);
(statearr_22520_22593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 13))
{var inst_22368 = (state_22477[23]);var inst_22371 = cljs.core.async.close_BANG_.call(null,inst_22368);var state_22477__$1 = state_22477;var statearr_22521_22594 = state_22477__$1;(statearr_22521_22594[2] = inst_22371);
(statearr_22521_22594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 45))
{var inst_22467 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22525_22595 = state_22477__$1;(statearr_22525_22595[2] = inst_22467);
(statearr_22525_22595[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 14))
{var state_22477__$1 = state_22477;var statearr_22526_22596 = state_22477__$1;(statearr_22526_22596[2] = null);
(statearr_22526_22596[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 15))
{var inst_22360 = (state_22477[14]);var inst_22361 = (state_22477[15]);var inst_22358 = (state_22477[16]);var inst_22359 = (state_22477[17]);var inst_22374 = (state_22477[2]);var inst_22375 = (inst_22361 + 1);var tmp22522 = inst_22360;var tmp22523 = inst_22358;var tmp22524 = inst_22359;var inst_22358__$1 = tmp22523;var inst_22359__$1 = tmp22524;var inst_22360__$1 = tmp22522;var inst_22361__$1 = inst_22375;var state_22477__$1 = (function (){var statearr_22527 = state_22477;(statearr_22527[14] = inst_22360__$1);
(statearr_22527[15] = inst_22361__$1);
(statearr_22527[26] = inst_22374);
(statearr_22527[16] = inst_22358__$1);
(statearr_22527[17] = inst_22359__$1);
return statearr_22527;
})();var statearr_22528_22597 = state_22477__$1;(statearr_22528_22597[2] = null);
(statearr_22528_22597[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 16))
{var inst_22378 = (state_22477[24]);var inst_22380 = cljs.core.chunked_seq_QMARK_.call(null,inst_22378);var state_22477__$1 = state_22477;if(inst_22380)
{var statearr_22529_22598 = state_22477__$1;(statearr_22529_22598[1] = 19);
} else
{var statearr_22530_22599 = state_22477__$1;(statearr_22530_22599[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 17))
{var state_22477__$1 = state_22477;var statearr_22531_22600 = state_22477__$1;(statearr_22531_22600[2] = null);
(statearr_22531_22600[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 18))
{var inst_22402 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22532_22601 = state_22477__$1;(statearr_22532_22601[2] = inst_22402);
(statearr_22532_22601[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 19))
{var inst_22378 = (state_22477[24]);var inst_22382 = cljs.core.chunk_first.call(null,inst_22378);var inst_22383 = cljs.core.chunk_rest.call(null,inst_22378);var inst_22384 = cljs.core.count.call(null,inst_22382);var inst_22358 = inst_22383;var inst_22359 = inst_22382;var inst_22360 = inst_22384;var inst_22361 = 0;var state_22477__$1 = (function (){var statearr_22533 = state_22477;(statearr_22533[14] = inst_22360);
(statearr_22533[15] = inst_22361);
(statearr_22533[16] = inst_22358);
(statearr_22533[17] = inst_22359);
return statearr_22533;
})();var statearr_22534_22602 = state_22477__$1;(statearr_22534_22602[2] = null);
(statearr_22534_22602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 20))
{var inst_22378 = (state_22477[24]);var inst_22388 = cljs.core.first.call(null,inst_22378);var inst_22389 = cljs.core.nth.call(null,inst_22388,0,null);var inst_22390 = cljs.core.nth.call(null,inst_22388,1,null);var state_22477__$1 = (function (){var statearr_22535 = state_22477;(statearr_22535[27] = inst_22389);
return statearr_22535;
})();if(cljs.core.truth_(inst_22390))
{var statearr_22536_22603 = state_22477__$1;(statearr_22536_22603[1] = 22);
} else
{var statearr_22537_22604 = state_22477__$1;(statearr_22537_22604[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 21))
{var inst_22399 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22538_22605 = state_22477__$1;(statearr_22538_22605[2] = inst_22399);
(statearr_22538_22605[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 22))
{var inst_22389 = (state_22477[27]);var inst_22392 = cljs.core.async.close_BANG_.call(null,inst_22389);var state_22477__$1 = state_22477;var statearr_22539_22606 = state_22477__$1;(statearr_22539_22606[2] = inst_22392);
(statearr_22539_22606[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 23))
{var state_22477__$1 = state_22477;var statearr_22540_22607 = state_22477__$1;(statearr_22540_22607[2] = null);
(statearr_22540_22607[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 24))
{var inst_22378 = (state_22477[24]);var inst_22395 = (state_22477[2]);var inst_22396 = cljs.core.next.call(null,inst_22378);var inst_22358 = inst_22396;var inst_22359 = null;var inst_22360 = 0;var inst_22361 = 0;var state_22477__$1 = (function (){var statearr_22541 = state_22477;(statearr_22541[28] = inst_22395);
(statearr_22541[14] = inst_22360);
(statearr_22541[15] = inst_22361);
(statearr_22541[16] = inst_22358);
(statearr_22541[17] = inst_22359);
return statearr_22541;
})();var statearr_22542_22608 = state_22477__$1;(statearr_22542_22608[2] = null);
(statearr_22542_22608[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 25))
{var inst_22420 = (state_22477[7]);var inst_22419 = (state_22477[9]);var inst_22422 = (inst_22420 < inst_22419);var inst_22423 = inst_22422;var state_22477__$1 = state_22477;if(cljs.core.truth_(inst_22423))
{var statearr_22543_22609 = state_22477__$1;(statearr_22543_22609[1] = 27);
} else
{var statearr_22544_22610 = state_22477__$1;(statearr_22544_22610[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 26))
{var inst_22409 = (state_22477[19]);var inst_22463 = (state_22477[2]);var inst_22464 = cljs.core.seq.call(null,inst_22409);var state_22477__$1 = (function (){var statearr_22545 = state_22477;(statearr_22545[29] = inst_22463);
return statearr_22545;
})();if(inst_22464)
{var statearr_22546_22611 = state_22477__$1;(statearr_22546_22611[1] = 42);
} else
{var statearr_22547_22612 = state_22477__$1;(statearr_22547_22612[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 27))
{var inst_22425 = (state_22477[30]);var inst_22349 = (state_22477[13]);var inst_22420 = (state_22477[7]);var inst_22418 = (state_22477[10]);var inst_22425__$1 = cljs.core._nth.call(null,inst_22418,inst_22420);var inst_22426 = cljs.core.async.put_BANG_.call(null,inst_22425__$1,inst_22349,done);var state_22477__$1 = (function (){var statearr_22548 = state_22477;(statearr_22548[30] = inst_22425__$1);
return statearr_22548;
})();if(cljs.core.truth_(inst_22426))
{var statearr_22549_22613 = state_22477__$1;(statearr_22549_22613[1] = 30);
} else
{var statearr_22550_22614 = state_22477__$1;(statearr_22550_22614[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 28))
{var inst_22417 = (state_22477[8]);var inst_22436 = (state_22477[12]);var inst_22436__$1 = cljs.core.seq.call(null,inst_22417);var state_22477__$1 = (function (){var statearr_22551 = state_22477;(statearr_22551[12] = inst_22436__$1);
return statearr_22551;
})();if(inst_22436__$1)
{var statearr_22552_22615 = state_22477__$1;(statearr_22552_22615[1] = 33);
} else
{var statearr_22553_22616 = state_22477__$1;(statearr_22553_22616[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 29))
{var inst_22461 = (state_22477[2]);var state_22477__$1 = state_22477;var statearr_22554_22617 = state_22477__$1;(statearr_22554_22617[2] = inst_22461);
(statearr_22554_22617[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 30))
{var state_22477__$1 = state_22477;var statearr_22555_22618 = state_22477__$1;(statearr_22555_22618[2] = null);
(statearr_22555_22618[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22478 === 31))
{var inst_22425 = (state_22477[30]);var inst_22429 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22430 = cljs.core.async.untap_STAR_.call(null,m,inst_22425);var state_22477__$1 = (function (){var statearr_22556 = state_22477;(statearr_22556[31] = inst_22429);
return statearr_22556;
})();var statearr_22557_22619 = state_22477__$1;(statearr_22557_22619[2] = inst_22430);
(statearr_22557_22619[1] = 32);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_22561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22561[0] = state_machine__5525__auto__);
(statearr_22561[1] = 1);
return statearr_22561;
});
var state_machine__5525__auto____1 = (function (state_22477){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_22477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e22562){if((e22562 instanceof Object))
{var ex__5528__auto__ = e22562;var statearr_22563_22620 = state_22477;(statearr_22563_22620[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22621 = state_22477;
state_22477 = G__22621;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_22477){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_22477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_22564 = f__5540__auto__.call(null);(statearr_22564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___22565);
return statearr_22564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
cljs.core.async.Mix = (function (){var obj22623 = {};return obj22623;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t22743 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22743 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22744){
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
this.meta22744 = meta22744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22743.cljs$lang$type = true;
cljs.core.async.t22743.cljs$lang$ctorStr = "cljs.core.async/t22743";
cljs.core.async.t22743.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t22743");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22743.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22745){var self__ = this;
var _22745__$1 = this;return self__.meta22744;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22745,meta22744__$1){var self__ = this;
var _22745__$1 = this;return (new cljs.core.async.t22743(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22744__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22743 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22743(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22744){return (new cljs.core.async.t22743(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22744));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22743(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5539__auto___22862 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_22815){var state_val_22816 = (state_22815[1]);if((state_val_22816 === 1))
{var inst_22749 = (state_22815[7]);var inst_22749__$1 = calc_state.call(null);var inst_22750 = cljs.core.seq_QMARK_.call(null,inst_22749__$1);var state_22815__$1 = (function (){var statearr_22817 = state_22815;(statearr_22817[7] = inst_22749__$1);
return statearr_22817;
})();if(inst_22750)
{var statearr_22818_22863 = state_22815__$1;(statearr_22818_22863[1] = 2);
} else
{var statearr_22819_22864 = state_22815__$1;(statearr_22819_22864[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 2))
{var inst_22749 = (state_22815[7]);var inst_22752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22749);var state_22815__$1 = state_22815;var statearr_22820_22865 = state_22815__$1;(statearr_22820_22865[2] = inst_22752);
(statearr_22820_22865[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 3))
{var inst_22749 = (state_22815[7]);var state_22815__$1 = state_22815;var statearr_22821_22866 = state_22815__$1;(statearr_22821_22866[2] = inst_22749);
(statearr_22821_22866[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 4))
{var inst_22749 = (state_22815[7]);var inst_22755 = (state_22815[2]);var inst_22756 = cljs.core.get.call(null,inst_22755,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22757 = cljs.core.get.call(null,inst_22755,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22758 = cljs.core.get.call(null,inst_22755,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22759 = inst_22749;var state_22815__$1 = (function (){var statearr_22822 = state_22815;(statearr_22822[8] = inst_22758);
(statearr_22822[9] = inst_22757);
(statearr_22822[10] = inst_22759);
(statearr_22822[11] = inst_22756);
return statearr_22822;
})();var statearr_22823_22867 = state_22815__$1;(statearr_22823_22867[2] = null);
(statearr_22823_22867[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 5))
{var inst_22759 = (state_22815[10]);var inst_22762 = cljs.core.seq_QMARK_.call(null,inst_22759);var state_22815__$1 = state_22815;if(inst_22762)
{var statearr_22824_22868 = state_22815__$1;(statearr_22824_22868[1] = 7);
} else
{var statearr_22825_22869 = state_22815__$1;(statearr_22825_22869[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 6))
{var inst_22813 = (state_22815[2]);var state_22815__$1 = state_22815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22815__$1,inst_22813);
} else
{if((state_val_22816 === 7))
{var inst_22759 = (state_22815[10]);var inst_22764 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22759);var state_22815__$1 = state_22815;var statearr_22826_22870 = state_22815__$1;(statearr_22826_22870[2] = inst_22764);
(statearr_22826_22870[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 8))
{var inst_22759 = (state_22815[10]);var state_22815__$1 = state_22815;var statearr_22827_22871 = state_22815__$1;(statearr_22827_22871[2] = inst_22759);
(statearr_22827_22871[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 9))
{var inst_22767 = (state_22815[12]);var inst_22767__$1 = (state_22815[2]);var inst_22768 = cljs.core.get.call(null,inst_22767__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22769 = cljs.core.get.call(null,inst_22767__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22770 = cljs.core.get.call(null,inst_22767__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22815__$1 = (function (){var statearr_22828 = state_22815;(statearr_22828[13] = inst_22769);
(statearr_22828[12] = inst_22767__$1);
(statearr_22828[14] = inst_22770);
return statearr_22828;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22815__$1,10,inst_22768);
} else
{if((state_val_22816 === 10))
{var inst_22775 = (state_22815[15]);var inst_22774 = (state_22815[16]);var inst_22773 = (state_22815[2]);var inst_22774__$1 = cljs.core.nth.call(null,inst_22773,0,null);var inst_22775__$1 = cljs.core.nth.call(null,inst_22773,1,null);var inst_22776 = (inst_22774__$1 == null);var inst_22777 = cljs.core._EQ_.call(null,inst_22775__$1,change);var inst_22778 = (inst_22776) || (inst_22777);var state_22815__$1 = (function (){var statearr_22829 = state_22815;(statearr_22829[15] = inst_22775__$1);
(statearr_22829[16] = inst_22774__$1);
return statearr_22829;
})();if(cljs.core.truth_(inst_22778))
{var statearr_22830_22872 = state_22815__$1;(statearr_22830_22872[1] = 11);
} else
{var statearr_22831_22873 = state_22815__$1;(statearr_22831_22873[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 11))
{var inst_22774 = (state_22815[16]);var inst_22780 = (inst_22774 == null);var state_22815__$1 = state_22815;if(cljs.core.truth_(inst_22780))
{var statearr_22832_22874 = state_22815__$1;(statearr_22832_22874[1] = 14);
} else
{var statearr_22833_22875 = state_22815__$1;(statearr_22833_22875[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 12))
{var inst_22789 = (state_22815[17]);var inst_22775 = (state_22815[15]);var inst_22770 = (state_22815[14]);var inst_22789__$1 = inst_22770.call(null,inst_22775);var state_22815__$1 = (function (){var statearr_22834 = state_22815;(statearr_22834[17] = inst_22789__$1);
return statearr_22834;
})();if(cljs.core.truth_(inst_22789__$1))
{var statearr_22835_22876 = state_22815__$1;(statearr_22835_22876[1] = 17);
} else
{var statearr_22836_22877 = state_22815__$1;(statearr_22836_22877[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 13))
{var inst_22811 = (state_22815[2]);var state_22815__$1 = state_22815;var statearr_22837_22878 = state_22815__$1;(statearr_22837_22878[2] = inst_22811);
(statearr_22837_22878[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 14))
{var inst_22775 = (state_22815[15]);var inst_22782 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22775);var state_22815__$1 = state_22815;var statearr_22838_22879 = state_22815__$1;(statearr_22838_22879[2] = inst_22782);
(statearr_22838_22879[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 15))
{var state_22815__$1 = state_22815;var statearr_22839_22880 = state_22815__$1;(statearr_22839_22880[2] = null);
(statearr_22839_22880[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 16))
{var inst_22785 = (state_22815[2]);var inst_22786 = calc_state.call(null);var inst_22759 = inst_22786;var state_22815__$1 = (function (){var statearr_22840 = state_22815;(statearr_22840[10] = inst_22759);
(statearr_22840[18] = inst_22785);
return statearr_22840;
})();var statearr_22841_22881 = state_22815__$1;(statearr_22841_22881[2] = null);
(statearr_22841_22881[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 17))
{var inst_22789 = (state_22815[17]);var state_22815__$1 = state_22815;var statearr_22842_22882 = state_22815__$1;(statearr_22842_22882[2] = inst_22789);
(statearr_22842_22882[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 18))
{var inst_22769 = (state_22815[13]);var inst_22775 = (state_22815[15]);var inst_22770 = (state_22815[14]);var inst_22792 = cljs.core.empty_QMARK_.call(null,inst_22770);var inst_22793 = inst_22769.call(null,inst_22775);var inst_22794 = cljs.core.not.call(null,inst_22793);var inst_22795 = (inst_22792) && (inst_22794);var state_22815__$1 = state_22815;var statearr_22843_22883 = state_22815__$1;(statearr_22843_22883[2] = inst_22795);
(statearr_22843_22883[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 19))
{var inst_22797 = (state_22815[2]);var state_22815__$1 = state_22815;if(cljs.core.truth_(inst_22797))
{var statearr_22844_22884 = state_22815__$1;(statearr_22844_22884[1] = 20);
} else
{var statearr_22845_22885 = state_22815__$1;(statearr_22845_22885[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 20))
{var inst_22774 = (state_22815[16]);var state_22815__$1 = state_22815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22815__$1,23,out,inst_22774);
} else
{if((state_val_22816 === 21))
{var inst_22767 = (state_22815[12]);var inst_22759 = inst_22767;var state_22815__$1 = (function (){var statearr_22846 = state_22815;(statearr_22846[10] = inst_22759);
return statearr_22846;
})();var statearr_22847_22886 = state_22815__$1;(statearr_22847_22886[2] = null);
(statearr_22847_22886[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 22))
{var inst_22809 = (state_22815[2]);var state_22815__$1 = state_22815;var statearr_22848_22887 = state_22815__$1;(statearr_22848_22887[2] = inst_22809);
(statearr_22848_22887[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 23))
{var inst_22800 = (state_22815[2]);var state_22815__$1 = state_22815;if(cljs.core.truth_(inst_22800))
{var statearr_22849_22888 = state_22815__$1;(statearr_22849_22888[1] = 24);
} else
{var statearr_22850_22889 = state_22815__$1;(statearr_22850_22889[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 24))
{var inst_22767 = (state_22815[12]);var inst_22759 = inst_22767;var state_22815__$1 = (function (){var statearr_22851 = state_22815;(statearr_22851[10] = inst_22759);
return statearr_22851;
})();var statearr_22852_22890 = state_22815__$1;(statearr_22852_22890[2] = null);
(statearr_22852_22890[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 25))
{var state_22815__$1 = state_22815;var statearr_22853_22891 = state_22815__$1;(statearr_22853_22891[2] = null);
(statearr_22853_22891[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22816 === 26))
{var inst_22805 = (state_22815[2]);var state_22815__$1 = state_22815;var statearr_22854_22892 = state_22815__$1;(statearr_22854_22892[2] = inst_22805);
(statearr_22854_22892[1] = 22);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_22858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22858[0] = state_machine__5525__auto__);
(statearr_22858[1] = 1);
return statearr_22858;
});
var state_machine__5525__auto____1 = (function (state_22815){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_22815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e22859){if((e22859 instanceof Object))
{var ex__5528__auto__ = e22859;var statearr_22860_22893 = state_22815;(statearr_22860_22893[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22894 = state_22815;
state_22815 = G__22894;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_22815){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_22815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_22861 = f__5540__auto__.call(null);(statearr_22861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___22862);
return statearr_22861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
cljs.core.async.Pub = (function (){var obj22896 = {};return obj22896;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__22897_SHARP_){if(cljs.core.truth_(p1__22897_SHARP_.call(null,topic)))
{return p1__22897_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22897_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23012 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23013){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23013 = meta23013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23012.cljs$lang$type = true;
cljs.core.async.t23012.cljs$lang$ctorStr = "cljs.core.async/t23012";
cljs.core.async.t23012.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t23012");
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23014){var self__ = this;
var _23014__$1 = this;return self__.meta23013;
});})(mults,ensure_mult))
;
cljs.core.async.t23012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23014,meta23013__$1){var self__ = this;
var _23014__$1 = this;return (new cljs.core.async.t23012(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23013__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23012 = ((function (mults,ensure_mult){
return (function __GT_t23012(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23013){return (new cljs.core.async.t23012(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23013));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23012(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5539__auto___23126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23082){var state_val_23083 = (state_23082[1]);if((state_val_23083 === 1))
{var state_23082__$1 = state_23082;var statearr_23084_23127 = state_23082__$1;(statearr_23084_23127[2] = null);
(statearr_23084_23127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 2))
{var state_23082__$1 = state_23082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23082__$1,4,ch);
} else
{if((state_val_23083 === 3))
{var inst_23080 = (state_23082[2]);var state_23082__$1 = state_23082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23082__$1,inst_23080);
} else
{if((state_val_23083 === 4))
{var inst_23017 = (state_23082[7]);var inst_23017__$1 = (state_23082[2]);var inst_23018 = (inst_23017__$1 == null);var state_23082__$1 = (function (){var statearr_23085 = state_23082;(statearr_23085[7] = inst_23017__$1);
return statearr_23085;
})();if(cljs.core.truth_(inst_23018))
{var statearr_23086_23128 = state_23082__$1;(statearr_23086_23128[1] = 5);
} else
{var statearr_23087_23129 = state_23082__$1;(statearr_23087_23129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 5))
{var inst_23024 = cljs.core.deref.call(null,mults);var inst_23025 = cljs.core.vals.call(null,inst_23024);var inst_23026 = cljs.core.seq.call(null,inst_23025);var inst_23027 = inst_23026;var inst_23028 = null;var inst_23029 = 0;var inst_23030 = 0;var state_23082__$1 = (function (){var statearr_23088 = state_23082;(statearr_23088[8] = inst_23030);
(statearr_23088[9] = inst_23028);
(statearr_23088[10] = inst_23029);
(statearr_23088[11] = inst_23027);
return statearr_23088;
})();var statearr_23089_23130 = state_23082__$1;(statearr_23089_23130[2] = null);
(statearr_23089_23130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 6))
{var inst_23017 = (state_23082[7]);var inst_23065 = (state_23082[12]);var inst_23065__$1 = topic_fn.call(null,inst_23017);var inst_23066 = cljs.core.deref.call(null,mults);var inst_23067 = cljs.core.get.call(null,inst_23066,inst_23065__$1);var inst_23068 = cljs.core.async.muxch_STAR_.call(null,inst_23067);var state_23082__$1 = (function (){var statearr_23090 = state_23082;(statearr_23090[12] = inst_23065__$1);
return statearr_23090;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23082__$1,19,inst_23068,inst_23017);
} else
{if((state_val_23083 === 7))
{var inst_23078 = (state_23082[2]);var state_23082__$1 = state_23082;var statearr_23091_23131 = state_23082__$1;(statearr_23091_23131[2] = inst_23078);
(statearr_23091_23131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 8))
{var inst_23030 = (state_23082[8]);var inst_23029 = (state_23082[10]);var inst_23032 = (inst_23030 < inst_23029);var inst_23033 = inst_23032;var state_23082__$1 = state_23082;if(cljs.core.truth_(inst_23033))
{var statearr_23095_23132 = state_23082__$1;(statearr_23095_23132[1] = 10);
} else
{var statearr_23096_23133 = state_23082__$1;(statearr_23096_23133[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 9))
{var inst_23063 = (state_23082[2]);var state_23082__$1 = state_23082;var statearr_23097_23134 = state_23082__$1;(statearr_23097_23134[2] = inst_23063);
(statearr_23097_23134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 10))
{var inst_23030 = (state_23082[8]);var inst_23028 = (state_23082[9]);var inst_23029 = (state_23082[10]);var inst_23027 = (state_23082[11]);var inst_23035 = cljs.core._nth.call(null,inst_23028,inst_23030);var inst_23036 = cljs.core.async.muxch_STAR_.call(null,inst_23035);var inst_23037 = cljs.core.async.close_BANG_.call(null,inst_23036);var inst_23038 = (inst_23030 + 1);var tmp23092 = inst_23028;var tmp23093 = inst_23029;var tmp23094 = inst_23027;var inst_23027__$1 = tmp23094;var inst_23028__$1 = tmp23092;var inst_23029__$1 = tmp23093;var inst_23030__$1 = inst_23038;var state_23082__$1 = (function (){var statearr_23098 = state_23082;(statearr_23098[8] = inst_23030__$1);
(statearr_23098[9] = inst_23028__$1);
(statearr_23098[10] = inst_23029__$1);
(statearr_23098[13] = inst_23037);
(statearr_23098[11] = inst_23027__$1);
return statearr_23098;
})();var statearr_23099_23135 = state_23082__$1;(statearr_23099_23135[2] = null);
(statearr_23099_23135[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 11))
{var inst_23041 = (state_23082[14]);var inst_23027 = (state_23082[11]);var inst_23041__$1 = cljs.core.seq.call(null,inst_23027);var state_23082__$1 = (function (){var statearr_23100 = state_23082;(statearr_23100[14] = inst_23041__$1);
return statearr_23100;
})();if(inst_23041__$1)
{var statearr_23101_23136 = state_23082__$1;(statearr_23101_23136[1] = 13);
} else
{var statearr_23102_23137 = state_23082__$1;(statearr_23102_23137[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 12))
{var inst_23061 = (state_23082[2]);var state_23082__$1 = state_23082;var statearr_23103_23138 = state_23082__$1;(statearr_23103_23138[2] = inst_23061);
(statearr_23103_23138[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 13))
{var inst_23041 = (state_23082[14]);var inst_23043 = cljs.core.chunked_seq_QMARK_.call(null,inst_23041);var state_23082__$1 = state_23082;if(inst_23043)
{var statearr_23104_23139 = state_23082__$1;(statearr_23104_23139[1] = 16);
} else
{var statearr_23105_23140 = state_23082__$1;(statearr_23105_23140[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 14))
{var state_23082__$1 = state_23082;var statearr_23106_23141 = state_23082__$1;(statearr_23106_23141[2] = null);
(statearr_23106_23141[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 15))
{var inst_23059 = (state_23082[2]);var state_23082__$1 = state_23082;var statearr_23107_23142 = state_23082__$1;(statearr_23107_23142[2] = inst_23059);
(statearr_23107_23142[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 16))
{var inst_23041 = (state_23082[14]);var inst_23045 = cljs.core.chunk_first.call(null,inst_23041);var inst_23046 = cljs.core.chunk_rest.call(null,inst_23041);var inst_23047 = cljs.core.count.call(null,inst_23045);var inst_23027 = inst_23046;var inst_23028 = inst_23045;var inst_23029 = inst_23047;var inst_23030 = 0;var state_23082__$1 = (function (){var statearr_23108 = state_23082;(statearr_23108[8] = inst_23030);
(statearr_23108[9] = inst_23028);
(statearr_23108[10] = inst_23029);
(statearr_23108[11] = inst_23027);
return statearr_23108;
})();var statearr_23109_23143 = state_23082__$1;(statearr_23109_23143[2] = null);
(statearr_23109_23143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 17))
{var inst_23041 = (state_23082[14]);var inst_23050 = cljs.core.first.call(null,inst_23041);var inst_23051 = cljs.core.async.muxch_STAR_.call(null,inst_23050);var inst_23052 = cljs.core.async.close_BANG_.call(null,inst_23051);var inst_23053 = cljs.core.next.call(null,inst_23041);var inst_23027 = inst_23053;var inst_23028 = null;var inst_23029 = 0;var inst_23030 = 0;var state_23082__$1 = (function (){var statearr_23110 = state_23082;(statearr_23110[8] = inst_23030);
(statearr_23110[9] = inst_23028);
(statearr_23110[10] = inst_23029);
(statearr_23110[11] = inst_23027);
(statearr_23110[15] = inst_23052);
return statearr_23110;
})();var statearr_23111_23144 = state_23082__$1;(statearr_23111_23144[2] = null);
(statearr_23111_23144[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 18))
{var inst_23056 = (state_23082[2]);var state_23082__$1 = state_23082;var statearr_23112_23145 = state_23082__$1;(statearr_23112_23145[2] = inst_23056);
(statearr_23112_23145[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 19))
{var inst_23070 = (state_23082[2]);var state_23082__$1 = state_23082;if(cljs.core.truth_(inst_23070))
{var statearr_23113_23146 = state_23082__$1;(statearr_23113_23146[1] = 20);
} else
{var statearr_23114_23147 = state_23082__$1;(statearr_23114_23147[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 20))
{var state_23082__$1 = state_23082;var statearr_23115_23148 = state_23082__$1;(statearr_23115_23148[2] = null);
(statearr_23115_23148[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 21))
{var inst_23065 = (state_23082[12]);var inst_23073 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23065);var state_23082__$1 = state_23082;var statearr_23116_23149 = state_23082__$1;(statearr_23116_23149[2] = inst_23073);
(statearr_23116_23149[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23083 === 22))
{var inst_23075 = (state_23082[2]);var state_23082__$1 = (function (){var statearr_23117 = state_23082;(statearr_23117[16] = inst_23075);
return statearr_23117;
})();var statearr_23118_23150 = state_23082__$1;(statearr_23118_23150[2] = null);
(statearr_23118_23150[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23122[0] = state_machine__5525__auto__);
(statearr_23122[1] = 1);
return statearr_23122;
});
var state_machine__5525__auto____1 = (function (state_23082){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23082);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23123){if((e23123 instanceof Object))
{var ex__5528__auto__ = e23123;var statearr_23124_23151 = state_23082;(statearr_23124_23151[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23082);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23152 = state_23082;
state_23082 = G__23152;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23082){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23125 = f__5540__auto__.call(null);(statearr_23125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23126);
return statearr_23125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
,cljs.core.range.call(null,cnt));var c__5539__auto___23289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23259){var state_val_23260 = (state_23259[1]);if((state_val_23260 === 1))
{var state_23259__$1 = state_23259;var statearr_23261_23290 = state_23259__$1;(statearr_23261_23290[2] = null);
(statearr_23261_23290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 2))
{var inst_23222 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23223 = 0;var state_23259__$1 = (function (){var statearr_23262 = state_23259;(statearr_23262[7] = inst_23223);
(statearr_23262[8] = inst_23222);
return statearr_23262;
})();var statearr_23263_23291 = state_23259__$1;(statearr_23263_23291[2] = null);
(statearr_23263_23291[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 3))
{var inst_23257 = (state_23259[2]);var state_23259__$1 = state_23259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23259__$1,inst_23257);
} else
{if((state_val_23260 === 4))
{var inst_23223 = (state_23259[7]);var inst_23225 = (inst_23223 < cnt);var state_23259__$1 = state_23259;if(cljs.core.truth_(inst_23225))
{var statearr_23264_23292 = state_23259__$1;(statearr_23264_23292[1] = 6);
} else
{var statearr_23265_23293 = state_23259__$1;(statearr_23265_23293[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 5))
{var inst_23243 = (state_23259[2]);var state_23259__$1 = (function (){var statearr_23266 = state_23259;(statearr_23266[9] = inst_23243);
return statearr_23266;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23259__$1,12,dchan);
} else
{if((state_val_23260 === 6))
{var state_23259__$1 = state_23259;var statearr_23267_23294 = state_23259__$1;(statearr_23267_23294[2] = null);
(statearr_23267_23294[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 7))
{var state_23259__$1 = state_23259;var statearr_23268_23295 = state_23259__$1;(statearr_23268_23295[2] = null);
(statearr_23268_23295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 8))
{var inst_23241 = (state_23259[2]);var state_23259__$1 = state_23259;var statearr_23269_23296 = state_23259__$1;(statearr_23269_23296[2] = inst_23241);
(statearr_23269_23296[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 9))
{var inst_23223 = (state_23259[7]);var inst_23236 = (state_23259[2]);var inst_23237 = (inst_23223 + 1);var inst_23223__$1 = inst_23237;var state_23259__$1 = (function (){var statearr_23270 = state_23259;(statearr_23270[10] = inst_23236);
(statearr_23270[7] = inst_23223__$1);
return statearr_23270;
})();var statearr_23271_23297 = state_23259__$1;(statearr_23271_23297[2] = null);
(statearr_23271_23297[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 10))
{var inst_23227 = (state_23259[2]);var inst_23228 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23259__$1 = (function (){var statearr_23272 = state_23259;(statearr_23272[11] = inst_23227);
return statearr_23272;
})();var statearr_23273_23298 = state_23259__$1;(statearr_23273_23298[2] = inst_23228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23259__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 11))
{var inst_23223 = (state_23259[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23259,10,Object,null,9);var inst_23232 = chs__$1.call(null,inst_23223);var inst_23233 = done.call(null,inst_23223);var inst_23234 = cljs.core.async.take_BANG_.call(null,inst_23232,inst_23233);var state_23259__$1 = state_23259;var statearr_23274_23299 = state_23259__$1;(statearr_23274_23299[2] = inst_23234);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23259__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 12))
{var inst_23245 = (state_23259[12]);var inst_23245__$1 = (state_23259[2]);var inst_23246 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23245__$1);var state_23259__$1 = (function (){var statearr_23275 = state_23259;(statearr_23275[12] = inst_23245__$1);
return statearr_23275;
})();if(cljs.core.truth_(inst_23246))
{var statearr_23276_23300 = state_23259__$1;(statearr_23276_23300[1] = 13);
} else
{var statearr_23277_23301 = state_23259__$1;(statearr_23277_23301[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 13))
{var inst_23248 = cljs.core.async.close_BANG_.call(null,out);var state_23259__$1 = state_23259;var statearr_23278_23302 = state_23259__$1;(statearr_23278_23302[2] = inst_23248);
(statearr_23278_23302[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 14))
{var inst_23245 = (state_23259[12]);var inst_23250 = cljs.core.apply.call(null,f,inst_23245);var state_23259__$1 = state_23259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23259__$1,16,out,inst_23250);
} else
{if((state_val_23260 === 15))
{var inst_23255 = (state_23259[2]);var state_23259__$1 = state_23259;var statearr_23279_23303 = state_23259__$1;(statearr_23279_23303[2] = inst_23255);
(statearr_23279_23303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23260 === 16))
{var inst_23252 = (state_23259[2]);var state_23259__$1 = (function (){var statearr_23280 = state_23259;(statearr_23280[13] = inst_23252);
return statearr_23280;
})();var statearr_23281_23304 = state_23259__$1;(statearr_23281_23304[2] = null);
(statearr_23281_23304[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23285[0] = state_machine__5525__auto__);
(statearr_23285[1] = 1);
return statearr_23285;
});
var state_machine__5525__auto____1 = (function (state_23259){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23259);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23286){if((e23286 instanceof Object))
{var ex__5528__auto__ = e23286;var statearr_23287_23305 = state_23259;(statearr_23287_23305[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23259);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23306 = state_23259;
state_23259 = G__23306;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23259){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23288 = f__5540__auto__.call(null);(statearr_23288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23289);
return statearr_23288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___23414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23390){var state_val_23391 = (state_23390[1]);if((state_val_23391 === 1))
{var inst_23361 = cljs.core.vec.call(null,chs);var inst_23362 = inst_23361;var state_23390__$1 = (function (){var statearr_23392 = state_23390;(statearr_23392[7] = inst_23362);
return statearr_23392;
})();var statearr_23393_23415 = state_23390__$1;(statearr_23393_23415[2] = null);
(statearr_23393_23415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 2))
{var inst_23362 = (state_23390[7]);var inst_23364 = cljs.core.count.call(null,inst_23362);var inst_23365 = (inst_23364 > 0);var state_23390__$1 = state_23390;if(cljs.core.truth_(inst_23365))
{var statearr_23394_23416 = state_23390__$1;(statearr_23394_23416[1] = 4);
} else
{var statearr_23395_23417 = state_23390__$1;(statearr_23395_23417[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 3))
{var inst_23388 = (state_23390[2]);var state_23390__$1 = state_23390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23390__$1,inst_23388);
} else
{if((state_val_23391 === 4))
{var inst_23362 = (state_23390[7]);var state_23390__$1 = state_23390;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23390__$1,7,inst_23362);
} else
{if((state_val_23391 === 5))
{var inst_23384 = cljs.core.async.close_BANG_.call(null,out);var state_23390__$1 = state_23390;var statearr_23396_23418 = state_23390__$1;(statearr_23396_23418[2] = inst_23384);
(statearr_23396_23418[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 6))
{var inst_23386 = (state_23390[2]);var state_23390__$1 = state_23390;var statearr_23397_23419 = state_23390__$1;(statearr_23397_23419[2] = inst_23386);
(statearr_23397_23419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 7))
{var inst_23370 = (state_23390[8]);var inst_23369 = (state_23390[9]);var inst_23369__$1 = (state_23390[2]);var inst_23370__$1 = cljs.core.nth.call(null,inst_23369__$1,0,null);var inst_23371 = cljs.core.nth.call(null,inst_23369__$1,1,null);var inst_23372 = (inst_23370__$1 == null);var state_23390__$1 = (function (){var statearr_23398 = state_23390;(statearr_23398[10] = inst_23371);
(statearr_23398[8] = inst_23370__$1);
(statearr_23398[9] = inst_23369__$1);
return statearr_23398;
})();if(cljs.core.truth_(inst_23372))
{var statearr_23399_23420 = state_23390__$1;(statearr_23399_23420[1] = 8);
} else
{var statearr_23400_23421 = state_23390__$1;(statearr_23400_23421[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 8))
{var inst_23362 = (state_23390[7]);var inst_23371 = (state_23390[10]);var inst_23370 = (state_23390[8]);var inst_23369 = (state_23390[9]);var inst_23374 = (function (){var c = inst_23371;var v = inst_23370;var vec__23367 = inst_23369;var cs = inst_23362;return ((function (c,v,vec__23367,cs,inst_23362,inst_23371,inst_23370,inst_23369,state_val_23391){
return (function (p1__23307_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23307_SHARP_);
});
;})(c,v,vec__23367,cs,inst_23362,inst_23371,inst_23370,inst_23369,state_val_23391))
})();var inst_23375 = cljs.core.filterv.call(null,inst_23374,inst_23362);var inst_23362__$1 = inst_23375;var state_23390__$1 = (function (){var statearr_23401 = state_23390;(statearr_23401[7] = inst_23362__$1);
return statearr_23401;
})();var statearr_23402_23422 = state_23390__$1;(statearr_23402_23422[2] = null);
(statearr_23402_23422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 9))
{var inst_23370 = (state_23390[8]);var state_23390__$1 = state_23390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23390__$1,11,out,inst_23370);
} else
{if((state_val_23391 === 10))
{var inst_23382 = (state_23390[2]);var state_23390__$1 = state_23390;var statearr_23404_23423 = state_23390__$1;(statearr_23404_23423[2] = inst_23382);
(statearr_23404_23423[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23391 === 11))
{var inst_23362 = (state_23390[7]);var inst_23379 = (state_23390[2]);var tmp23403 = inst_23362;var inst_23362__$1 = tmp23403;var state_23390__$1 = (function (){var statearr_23405 = state_23390;(statearr_23405[7] = inst_23362__$1);
(statearr_23405[11] = inst_23379);
return statearr_23405;
})();var statearr_23406_23424 = state_23390__$1;(statearr_23406_23424[2] = null);
(statearr_23406_23424[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23410 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23410[0] = state_machine__5525__auto__);
(statearr_23410[1] = 1);
return statearr_23410;
});
var state_machine__5525__auto____1 = (function (state_23390){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23411){if((e23411 instanceof Object))
{var ex__5528__auto__ = e23411;var statearr_23412_23425 = state_23390;(statearr_23412_23425[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23426 = state_23390;
state_23390 = G__23426;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23390){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23413 = f__5540__auto__.call(null);(statearr_23413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23414);
return statearr_23413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___23519 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23496){var state_val_23497 = (state_23496[1]);if((state_val_23497 === 1))
{var inst_23473 = 0;var state_23496__$1 = (function (){var statearr_23498 = state_23496;(statearr_23498[7] = inst_23473);
return statearr_23498;
})();var statearr_23499_23520 = state_23496__$1;(statearr_23499_23520[2] = null);
(statearr_23499_23520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 2))
{var inst_23473 = (state_23496[7]);var inst_23475 = (inst_23473 < n);var state_23496__$1 = state_23496;if(cljs.core.truth_(inst_23475))
{var statearr_23500_23521 = state_23496__$1;(statearr_23500_23521[1] = 4);
} else
{var statearr_23501_23522 = state_23496__$1;(statearr_23501_23522[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 3))
{var inst_23493 = (state_23496[2]);var inst_23494 = cljs.core.async.close_BANG_.call(null,out);var state_23496__$1 = (function (){var statearr_23502 = state_23496;(statearr_23502[8] = inst_23493);
return statearr_23502;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23496__$1,inst_23494);
} else
{if((state_val_23497 === 4))
{var state_23496__$1 = state_23496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23496__$1,7,ch);
} else
{if((state_val_23497 === 5))
{var state_23496__$1 = state_23496;var statearr_23503_23523 = state_23496__$1;(statearr_23503_23523[2] = null);
(statearr_23503_23523[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 6))
{var inst_23491 = (state_23496[2]);var state_23496__$1 = state_23496;var statearr_23504_23524 = state_23496__$1;(statearr_23504_23524[2] = inst_23491);
(statearr_23504_23524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 7))
{var inst_23478 = (state_23496[9]);var inst_23478__$1 = (state_23496[2]);var inst_23479 = (inst_23478__$1 == null);var inst_23480 = cljs.core.not.call(null,inst_23479);var state_23496__$1 = (function (){var statearr_23505 = state_23496;(statearr_23505[9] = inst_23478__$1);
return statearr_23505;
})();if(inst_23480)
{var statearr_23506_23525 = state_23496__$1;(statearr_23506_23525[1] = 8);
} else
{var statearr_23507_23526 = state_23496__$1;(statearr_23507_23526[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 8))
{var inst_23478 = (state_23496[9]);var state_23496__$1 = state_23496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23496__$1,11,out,inst_23478);
} else
{if((state_val_23497 === 9))
{var state_23496__$1 = state_23496;var statearr_23508_23527 = state_23496__$1;(statearr_23508_23527[2] = null);
(statearr_23508_23527[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 10))
{var inst_23488 = (state_23496[2]);var state_23496__$1 = state_23496;var statearr_23509_23528 = state_23496__$1;(statearr_23509_23528[2] = inst_23488);
(statearr_23509_23528[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23497 === 11))
{var inst_23473 = (state_23496[7]);var inst_23483 = (state_23496[2]);var inst_23484 = (inst_23473 + 1);var inst_23473__$1 = inst_23484;var state_23496__$1 = (function (){var statearr_23510 = state_23496;(statearr_23510[7] = inst_23473__$1);
(statearr_23510[10] = inst_23483);
return statearr_23510;
})();var statearr_23511_23529 = state_23496__$1;(statearr_23511_23529[2] = null);
(statearr_23511_23529[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23515 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23515[0] = state_machine__5525__auto__);
(statearr_23515[1] = 1);
return statearr_23515;
});
var state_machine__5525__auto____1 = (function (state_23496){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23496);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23516){if((e23516 instanceof Object))
{var ex__5528__auto__ = e23516;var statearr_23517_23530 = state_23496;(statearr_23517_23530[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23531 = state_23496;
state_23496 = G__23531;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23496){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23518 = f__5540__auto__.call(null);(statearr_23518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23519);
return statearr_23518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___23628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23603){var state_val_23604 = (state_23603[1]);if((state_val_23604 === 1))
{var inst_23580 = null;var state_23603__$1 = (function (){var statearr_23605 = state_23603;(statearr_23605[7] = inst_23580);
return statearr_23605;
})();var statearr_23606_23629 = state_23603__$1;(statearr_23606_23629[2] = null);
(statearr_23606_23629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 2))
{var state_23603__$1 = state_23603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23603__$1,4,ch);
} else
{if((state_val_23604 === 3))
{var inst_23600 = (state_23603[2]);var inst_23601 = cljs.core.async.close_BANG_.call(null,out);var state_23603__$1 = (function (){var statearr_23607 = state_23603;(statearr_23607[8] = inst_23600);
return statearr_23607;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23603__$1,inst_23601);
} else
{if((state_val_23604 === 4))
{var inst_23583 = (state_23603[9]);var inst_23583__$1 = (state_23603[2]);var inst_23584 = (inst_23583__$1 == null);var inst_23585 = cljs.core.not.call(null,inst_23584);var state_23603__$1 = (function (){var statearr_23608 = state_23603;(statearr_23608[9] = inst_23583__$1);
return statearr_23608;
})();if(inst_23585)
{var statearr_23609_23630 = state_23603__$1;(statearr_23609_23630[1] = 5);
} else
{var statearr_23610_23631 = state_23603__$1;(statearr_23610_23631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 5))
{var inst_23583 = (state_23603[9]);var inst_23580 = (state_23603[7]);var inst_23587 = cljs.core._EQ_.call(null,inst_23583,inst_23580);var state_23603__$1 = state_23603;if(inst_23587)
{var statearr_23611_23632 = state_23603__$1;(statearr_23611_23632[1] = 8);
} else
{var statearr_23612_23633 = state_23603__$1;(statearr_23612_23633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 6))
{var state_23603__$1 = state_23603;var statearr_23614_23634 = state_23603__$1;(statearr_23614_23634[2] = null);
(statearr_23614_23634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 7))
{var inst_23598 = (state_23603[2]);var state_23603__$1 = state_23603;var statearr_23615_23635 = state_23603__$1;(statearr_23615_23635[2] = inst_23598);
(statearr_23615_23635[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 8))
{var inst_23580 = (state_23603[7]);var tmp23613 = inst_23580;var inst_23580__$1 = tmp23613;var state_23603__$1 = (function (){var statearr_23616 = state_23603;(statearr_23616[7] = inst_23580__$1);
return statearr_23616;
})();var statearr_23617_23636 = state_23603__$1;(statearr_23617_23636[2] = null);
(statearr_23617_23636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 9))
{var inst_23583 = (state_23603[9]);var state_23603__$1 = state_23603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23603__$1,11,out,inst_23583);
} else
{if((state_val_23604 === 10))
{var inst_23595 = (state_23603[2]);var state_23603__$1 = state_23603;var statearr_23618_23637 = state_23603__$1;(statearr_23618_23637[2] = inst_23595);
(statearr_23618_23637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23604 === 11))
{var inst_23583 = (state_23603[9]);var inst_23592 = (state_23603[2]);var inst_23580 = inst_23583;var state_23603__$1 = (function (){var statearr_23619 = state_23603;(statearr_23619[10] = inst_23592);
(statearr_23619[7] = inst_23580);
return statearr_23619;
})();var statearr_23620_23638 = state_23603__$1;(statearr_23620_23638[2] = null);
(statearr_23620_23638[1] = 2);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23624 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23624[0] = state_machine__5525__auto__);
(statearr_23624[1] = 1);
return statearr_23624;
});
var state_machine__5525__auto____1 = (function (state_23603){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23625){if((e23625 instanceof Object))
{var ex__5528__auto__ = e23625;var statearr_23626_23639 = state_23603;(statearr_23626_23639[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23640 = state_23603;
state_23603 = G__23640;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23603){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23627 = f__5540__auto__.call(null);(statearr_23627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23628);
return statearr_23627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___23775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23745){var state_val_23746 = (state_23745[1]);if((state_val_23746 === 1))
{var inst_23708 = (new Array(n));var inst_23709 = inst_23708;var inst_23710 = 0;var state_23745__$1 = (function (){var statearr_23747 = state_23745;(statearr_23747[7] = inst_23710);
(statearr_23747[8] = inst_23709);
return statearr_23747;
})();var statearr_23748_23776 = state_23745__$1;(statearr_23748_23776[2] = null);
(statearr_23748_23776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 2))
{var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23745__$1,4,ch);
} else
{if((state_val_23746 === 3))
{var inst_23743 = (state_23745[2]);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else
{if((state_val_23746 === 4))
{var inst_23713 = (state_23745[9]);var inst_23713__$1 = (state_23745[2]);var inst_23714 = (inst_23713__$1 == null);var inst_23715 = cljs.core.not.call(null,inst_23714);var state_23745__$1 = (function (){var statearr_23749 = state_23745;(statearr_23749[9] = inst_23713__$1);
return statearr_23749;
})();if(inst_23715)
{var statearr_23750_23777 = state_23745__$1;(statearr_23750_23777[1] = 5);
} else
{var statearr_23751_23778 = state_23745__$1;(statearr_23751_23778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 5))
{var inst_23710 = (state_23745[7]);var inst_23713 = (state_23745[9]);var inst_23709 = (state_23745[8]);var inst_23718 = (state_23745[10]);var inst_23717 = (inst_23709[inst_23710] = inst_23713);var inst_23718__$1 = (inst_23710 + 1);var inst_23719 = (inst_23718__$1 < n);var state_23745__$1 = (function (){var statearr_23752 = state_23745;(statearr_23752[11] = inst_23717);
(statearr_23752[10] = inst_23718__$1);
return statearr_23752;
})();if(cljs.core.truth_(inst_23719))
{var statearr_23753_23779 = state_23745__$1;(statearr_23753_23779[1] = 8);
} else
{var statearr_23754_23780 = state_23745__$1;(statearr_23754_23780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 6))
{var inst_23710 = (state_23745[7]);var inst_23731 = (inst_23710 > 0);var state_23745__$1 = state_23745;if(cljs.core.truth_(inst_23731))
{var statearr_23756_23781 = state_23745__$1;(statearr_23756_23781[1] = 12);
} else
{var statearr_23757_23782 = state_23745__$1;(statearr_23757_23782[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 7))
{var inst_23741 = (state_23745[2]);var state_23745__$1 = state_23745;var statearr_23758_23783 = state_23745__$1;(statearr_23758_23783[2] = inst_23741);
(statearr_23758_23783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 8))
{var inst_23709 = (state_23745[8]);var inst_23718 = (state_23745[10]);var tmp23755 = inst_23709;var inst_23709__$1 = tmp23755;var inst_23710 = inst_23718;var state_23745__$1 = (function (){var statearr_23759 = state_23745;(statearr_23759[7] = inst_23710);
(statearr_23759[8] = inst_23709__$1);
return statearr_23759;
})();var statearr_23760_23784 = state_23745__$1;(statearr_23760_23784[2] = null);
(statearr_23760_23784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 9))
{var inst_23709 = (state_23745[8]);var inst_23723 = cljs.core.vec.call(null,inst_23709);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,11,out,inst_23723);
} else
{if((state_val_23746 === 10))
{var inst_23729 = (state_23745[2]);var state_23745__$1 = state_23745;var statearr_23761_23785 = state_23745__$1;(statearr_23761_23785[2] = inst_23729);
(statearr_23761_23785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 11))
{var inst_23725 = (state_23745[2]);var inst_23726 = (new Array(n));var inst_23709 = inst_23726;var inst_23710 = 0;var state_23745__$1 = (function (){var statearr_23762 = state_23745;(statearr_23762[12] = inst_23725);
(statearr_23762[7] = inst_23710);
(statearr_23762[8] = inst_23709);
return statearr_23762;
})();var statearr_23763_23786 = state_23745__$1;(statearr_23763_23786[2] = null);
(statearr_23763_23786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 12))
{var inst_23709 = (state_23745[8]);var inst_23733 = cljs.core.vec.call(null,inst_23709);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,15,out,inst_23733);
} else
{if((state_val_23746 === 13))
{var state_23745__$1 = state_23745;var statearr_23764_23787 = state_23745__$1;(statearr_23764_23787[2] = null);
(statearr_23764_23787[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 14))
{var inst_23738 = (state_23745[2]);var inst_23739 = cljs.core.async.close_BANG_.call(null,out);var state_23745__$1 = (function (){var statearr_23765 = state_23745;(statearr_23765[13] = inst_23738);
return statearr_23765;
})();var statearr_23766_23788 = state_23745__$1;(statearr_23766_23788[2] = inst_23739);
(statearr_23766_23788[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 15))
{var inst_23735 = (state_23745[2]);var state_23745__$1 = state_23745;var statearr_23767_23789 = state_23745__$1;(statearr_23767_23789[2] = inst_23735);
(statearr_23767_23789[1] = 14);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23771[0] = state_machine__5525__auto__);
(statearr_23771[1] = 1);
return statearr_23771;
});
var state_machine__5525__auto____1 = (function (state_23745){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23745);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23772){if((e23772 instanceof Object))
{var ex__5528__auto__ = e23772;var statearr_23773_23790 = state_23745;(statearr_23773_23790[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23791 = state_23745;
state_23745 = G__23791;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23774 = f__5540__auto__.call(null);(statearr_23774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23775);
return statearr_23774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___23934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_23904){var state_val_23905 = (state_23904[1]);if((state_val_23905 === 1))
{var inst_23863 = [];var inst_23864 = inst_23863;var inst_23865 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23904__$1 = (function (){var statearr_23906 = state_23904;(statearr_23906[7] = inst_23864);
(statearr_23906[8] = inst_23865);
return statearr_23906;
})();var statearr_23907_23935 = state_23904__$1;(statearr_23907_23935[2] = null);
(statearr_23907_23935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 2))
{var state_23904__$1 = state_23904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23904__$1,4,ch);
} else
{if((state_val_23905 === 3))
{var inst_23902 = (state_23904[2]);var state_23904__$1 = state_23904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23904__$1,inst_23902);
} else
{if((state_val_23905 === 4))
{var inst_23868 = (state_23904[9]);var inst_23868__$1 = (state_23904[2]);var inst_23869 = (inst_23868__$1 == null);var inst_23870 = cljs.core.not.call(null,inst_23869);var state_23904__$1 = (function (){var statearr_23908 = state_23904;(statearr_23908[9] = inst_23868__$1);
return statearr_23908;
})();if(inst_23870)
{var statearr_23909_23936 = state_23904__$1;(statearr_23909_23936[1] = 5);
} else
{var statearr_23910_23937 = state_23904__$1;(statearr_23910_23937[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 5))
{var inst_23865 = (state_23904[8]);var inst_23872 = (state_23904[10]);var inst_23868 = (state_23904[9]);var inst_23872__$1 = f.call(null,inst_23868);var inst_23873 = cljs.core._EQ_.call(null,inst_23872__$1,inst_23865);var inst_23874 = cljs.core.keyword_identical_QMARK_.call(null,inst_23865,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23875 = (inst_23873) || (inst_23874);var state_23904__$1 = (function (){var statearr_23911 = state_23904;(statearr_23911[10] = inst_23872__$1);
return statearr_23911;
})();if(cljs.core.truth_(inst_23875))
{var statearr_23912_23938 = state_23904__$1;(statearr_23912_23938[1] = 8);
} else
{var statearr_23913_23939 = state_23904__$1;(statearr_23913_23939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 6))
{var inst_23864 = (state_23904[7]);var inst_23889 = inst_23864.length;var inst_23890 = (inst_23889 > 0);var state_23904__$1 = state_23904;if(cljs.core.truth_(inst_23890))
{var statearr_23915_23940 = state_23904__$1;(statearr_23915_23940[1] = 12);
} else
{var statearr_23916_23941 = state_23904__$1;(statearr_23916_23941[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 7))
{var inst_23900 = (state_23904[2]);var state_23904__$1 = state_23904;var statearr_23917_23942 = state_23904__$1;(statearr_23917_23942[2] = inst_23900);
(statearr_23917_23942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 8))
{var inst_23864 = (state_23904[7]);var inst_23872 = (state_23904[10]);var inst_23868 = (state_23904[9]);var inst_23877 = inst_23864.push(inst_23868);var tmp23914 = inst_23864;var inst_23864__$1 = tmp23914;var inst_23865 = inst_23872;var state_23904__$1 = (function (){var statearr_23918 = state_23904;(statearr_23918[11] = inst_23877);
(statearr_23918[7] = inst_23864__$1);
(statearr_23918[8] = inst_23865);
return statearr_23918;
})();var statearr_23919_23943 = state_23904__$1;(statearr_23919_23943[2] = null);
(statearr_23919_23943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 9))
{var inst_23864 = (state_23904[7]);var inst_23880 = cljs.core.vec.call(null,inst_23864);var state_23904__$1 = state_23904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23904__$1,11,out,inst_23880);
} else
{if((state_val_23905 === 10))
{var inst_23887 = (state_23904[2]);var state_23904__$1 = state_23904;var statearr_23920_23944 = state_23904__$1;(statearr_23920_23944[2] = inst_23887);
(statearr_23920_23944[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 11))
{var inst_23872 = (state_23904[10]);var inst_23868 = (state_23904[9]);var inst_23882 = (state_23904[2]);var inst_23883 = [];var inst_23884 = inst_23883.push(inst_23868);var inst_23864 = inst_23883;var inst_23865 = inst_23872;var state_23904__$1 = (function (){var statearr_23921 = state_23904;(statearr_23921[12] = inst_23884);
(statearr_23921[13] = inst_23882);
(statearr_23921[7] = inst_23864);
(statearr_23921[8] = inst_23865);
return statearr_23921;
})();var statearr_23922_23945 = state_23904__$1;(statearr_23922_23945[2] = null);
(statearr_23922_23945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 12))
{var inst_23864 = (state_23904[7]);var inst_23892 = cljs.core.vec.call(null,inst_23864);var state_23904__$1 = state_23904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23904__$1,15,out,inst_23892);
} else
{if((state_val_23905 === 13))
{var state_23904__$1 = state_23904;var statearr_23923_23946 = state_23904__$1;(statearr_23923_23946[2] = null);
(statearr_23923_23946[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 14))
{var inst_23897 = (state_23904[2]);var inst_23898 = cljs.core.async.close_BANG_.call(null,out);var state_23904__$1 = (function (){var statearr_23924 = state_23904;(statearr_23924[14] = inst_23897);
return statearr_23924;
})();var statearr_23925_23947 = state_23904__$1;(statearr_23925_23947[2] = inst_23898);
(statearr_23925_23947[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23905 === 15))
{var inst_23894 = (state_23904[2]);var state_23904__$1 = state_23904;var statearr_23926_23948 = state_23904__$1;(statearr_23926_23948[2] = inst_23894);
(statearr_23926_23948[1] = 14);
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
});return ((function (switch__5524__auto__){
return (function() {
var state_machine__5525__auto__ = null;
var state_machine__5525__auto____0 = (function (){var statearr_23930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23930[0] = state_machine__5525__auto__);
(statearr_23930[1] = 1);
return statearr_23930;
});
var state_machine__5525__auto____1 = (function (state_23904){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_23904);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e23931){if((e23931 instanceof Object))
{var ex__5528__auto__ = e23931;var statearr_23932_23949 = state_23904;(statearr_23932_23949[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23904);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23950 = state_23904;
state_23904 = G__23950;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_23904){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_23904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_23933 = f__5540__auto__.call(null);(statearr_23933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___23934);
return statearr_23933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5541__auto__);
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