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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t156146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156146 = (function (f,fn_handler,meta156147){
this.f = f;
this.fn_handler = fn_handler;
this.meta156147 = meta156147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156146.cljs$lang$type = true;
cljs.core.async.t156146.cljs$lang$ctorStr = "cljs.core.async/t156146";
cljs.core.async.t156146.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156146");
});
cljs.core.async.t156146.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t156146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t156146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t156146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156148){var self__ = this;
var _156148__$1 = this;return self__.meta156147;
});
cljs.core.async.t156146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156148,meta156147__$1){var self__ = this;
var _156148__$1 = this;return (new cljs.core.async.t156146(self__.f,self__.fn_handler,meta156147__$1));
});
cljs.core.async.__GT_t156146 = (function __GT_t156146(f__$1,fn_handler__$1,meta156147){return (new cljs.core.async.t156146(f__$1,fn_handler__$1,meta156147));
});
}
return (new cljs.core.async.t156146(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__156150 = buff;if(G__156150)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__156150.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__156150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__156150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__156150);
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
{var val_156151 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_156151);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_156151);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___156152 = n;var x_156153 = 0;while(true){
if((x_156153 < n__4251__auto___156152))
{(a[x_156153] = 0);
{
var G__156154 = (x_156153 + 1);
x_156153 = G__156154;
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
var G__156155 = (i + 1);
i = G__156155;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t156159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156159 = (function (flag,alt_flag,meta156160){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta156160 = meta156160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156159.cljs$lang$type = true;
cljs.core.async.t156159.cljs$lang$ctorStr = "cljs.core.async/t156159";
cljs.core.async.t156159.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156159");
});
cljs.core.async.t156159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t156159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t156159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t156159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156161){var self__ = this;
var _156161__$1 = this;return self__.meta156160;
});
cljs.core.async.t156159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156161,meta156160__$1){var self__ = this;
var _156161__$1 = this;return (new cljs.core.async.t156159(self__.flag,self__.alt_flag,meta156160__$1));
});
cljs.core.async.__GT_t156159 = (function __GT_t156159(flag__$1,alt_flag__$1,meta156160){return (new cljs.core.async.t156159(flag__$1,alt_flag__$1,meta156160));
});
}
return (new cljs.core.async.t156159(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t156165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156165 = (function (cb,flag,alt_handler,meta156166){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta156166 = meta156166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156165.cljs$lang$type = true;
cljs.core.async.t156165.cljs$lang$ctorStr = "cljs.core.async/t156165";
cljs.core.async.t156165.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156165");
});
cljs.core.async.t156165.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t156165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t156165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t156165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156167){var self__ = this;
var _156167__$1 = this;return self__.meta156166;
});
cljs.core.async.t156165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156167,meta156166__$1){var self__ = this;
var _156167__$1 = this;return (new cljs.core.async.t156165(self__.cb,self__.flag,self__.alt_handler,meta156166__$1));
});
cljs.core.async.__GT_t156165 = (function __GT_t156165(cb__$1,flag__$1,alt_handler__$1,meta156166){return (new cljs.core.async.t156165(cb__$1,flag__$1,alt_handler__$1,meta156166));
});
}
return (new cljs.core.async.t156165(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__156168_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__156168_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__156169_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__156169_SHARP_,port], null));
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
var G__156170 = (i + 1);
i = G__156170;
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
var alts_BANG___delegate = function (ports,p__156171){var map__156173 = p__156171;var map__156173__$1 = ((cljs.core.seq_QMARK_.call(null,map__156173))?cljs.core.apply.call(null,cljs.core.hash_map,map__156173):map__156173);var opts = map__156173__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__156171 = null;if (arguments.length > 1) {
  p__156171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__156171);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__156174){
var ports = cljs.core.first(arglist__156174);
var p__156171 = cljs.core.rest(arglist__156174);
return alts_BANG___delegate(ports,p__156171);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t156182 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156182 = (function (ch,f,map_LT_,meta156183){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta156183 = meta156183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156182.cljs$lang$type = true;
cljs.core.async.t156182.cljs$lang$ctorStr = "cljs.core.async/t156182";
cljs.core.async.t156182.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156182");
});
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t156185 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156185 = (function (fn1,_,meta156183,ch,f,map_LT_,meta156186){
this.fn1 = fn1;
this._ = _;
this.meta156183 = meta156183;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta156186 = meta156186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156185.cljs$lang$type = true;
cljs.core.async.t156185.cljs$lang$ctorStr = "cljs.core.async/t156185";
cljs.core.async.t156185.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156185");
});
cljs.core.async.t156185.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t156185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t156185.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t156185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__156175_SHARP_){return f1.call(null,(((p1__156175_SHARP_ == null))?null:self__.f.call(null,p1__156175_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t156185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156187){var self__ = this;
var _156187__$1 = this;return self__.meta156186;
});
cljs.core.async.t156185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156187,meta156186__$1){var self__ = this;
var _156187__$1 = this;return (new cljs.core.async.t156185(self__.fn1,self__._,self__.meta156183,self__.ch,self__.f,self__.map_LT_,meta156186__$1));
});
cljs.core.async.__GT_t156185 = (function __GT_t156185(fn1__$1,___$2,meta156183__$1,ch__$2,f__$2,map_LT___$2,meta156186){return (new cljs.core.async.t156185(fn1__$1,___$2,meta156183__$1,ch__$2,f__$2,map_LT___$2,meta156186));
});
}
return (new cljs.core.async.t156185(fn1,___$1,self__.meta156183,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t156182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t156182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156184){var self__ = this;
var _156184__$1 = this;return self__.meta156183;
});
cljs.core.async.t156182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156184,meta156183__$1){var self__ = this;
var _156184__$1 = this;return (new cljs.core.async.t156182(self__.ch,self__.f,self__.map_LT_,meta156183__$1));
});
cljs.core.async.__GT_t156182 = (function __GT_t156182(ch__$1,f__$1,map_LT___$1,meta156183){return (new cljs.core.async.t156182(ch__$1,f__$1,map_LT___$1,meta156183));
});
}
return (new cljs.core.async.t156182(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t156191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156191 = (function (ch,f,map_GT_,meta156192){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta156192 = meta156192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156191.cljs$lang$type = true;
cljs.core.async.t156191.cljs$lang$ctorStr = "cljs.core.async/t156191";
cljs.core.async.t156191.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156191");
});
cljs.core.async.t156191.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t156191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t156191.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t156191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t156191.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t156191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t156191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156193){var self__ = this;
var _156193__$1 = this;return self__.meta156192;
});
cljs.core.async.t156191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156193,meta156192__$1){var self__ = this;
var _156193__$1 = this;return (new cljs.core.async.t156191(self__.ch,self__.f,self__.map_GT_,meta156192__$1));
});
cljs.core.async.__GT_t156191 = (function __GT_t156191(ch__$1,f__$1,map_GT___$1,meta156192){return (new cljs.core.async.t156191(ch__$1,f__$1,map_GT___$1,meta156192));
});
}
return (new cljs.core.async.t156191(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t156197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t156197 = (function (ch,p,filter_GT_,meta156198){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta156198 = meta156198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t156197.cljs$lang$type = true;
cljs.core.async.t156197.cljs$lang$ctorStr = "cljs.core.async/t156197";
cljs.core.async.t156197.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t156197");
});
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t156197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t156197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156199){var self__ = this;
var _156199__$1 = this;return self__.meta156198;
});
cljs.core.async.t156197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156199,meta156198__$1){var self__ = this;
var _156199__$1 = this;return (new cljs.core.async.t156197(self__.ch,self__.p,self__.filter_GT_,meta156198__$1));
});
cljs.core.async.__GT_t156197 = (function __GT_t156197(ch__$1,p__$1,filter_GT___$1,meta156198){return (new cljs.core.async.t156197(ch__$1,p__$1,filter_GT___$1,meta156198));
});
}
return (new cljs.core.async.t156197(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___156282 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_156261){var state_val_156262 = (state_156261[1]);if((state_val_156262 === 1))
{var state_156261__$1 = state_156261;var statearr_156263_156283 = state_156261__$1;(statearr_156263_156283[2] = null);
(statearr_156263_156283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 2))
{var state_156261__$1 = state_156261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156261__$1,4,ch);
} else
{if((state_val_156262 === 3))
{var inst_156259 = (state_156261[2]);var state_156261__$1 = state_156261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156261__$1,inst_156259);
} else
{if((state_val_156262 === 4))
{var inst_156243 = (state_156261[7]);var inst_156243__$1 = (state_156261[2]);var inst_156244 = (inst_156243__$1 == null);var state_156261__$1 = (function (){var statearr_156264 = state_156261;(statearr_156264[7] = inst_156243__$1);
return statearr_156264;
})();if(cljs.core.truth_(inst_156244))
{var statearr_156265_156284 = state_156261__$1;(statearr_156265_156284[1] = 5);
} else
{var statearr_156266_156285 = state_156261__$1;(statearr_156266_156285[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 5))
{var inst_156246 = cljs.core.async.close_BANG_.call(null,out);var state_156261__$1 = state_156261;var statearr_156267_156286 = state_156261__$1;(statearr_156267_156286[2] = inst_156246);
(statearr_156267_156286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 6))
{var inst_156243 = (state_156261[7]);var inst_156248 = p.call(null,inst_156243);var state_156261__$1 = state_156261;if(cljs.core.truth_(inst_156248))
{var statearr_156268_156287 = state_156261__$1;(statearr_156268_156287[1] = 8);
} else
{var statearr_156269_156288 = state_156261__$1;(statearr_156269_156288[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 7))
{var inst_156257 = (state_156261[2]);var state_156261__$1 = state_156261;var statearr_156270_156289 = state_156261__$1;(statearr_156270_156289[2] = inst_156257);
(statearr_156270_156289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 8))
{var inst_156243 = (state_156261[7]);var state_156261__$1 = state_156261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156261__$1,11,out,inst_156243);
} else
{if((state_val_156262 === 9))
{var state_156261__$1 = state_156261;var statearr_156271_156290 = state_156261__$1;(statearr_156271_156290[2] = null);
(statearr_156271_156290[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 10))
{var inst_156254 = (state_156261[2]);var state_156261__$1 = (function (){var statearr_156272 = state_156261;(statearr_156272[8] = inst_156254);
return statearr_156272;
})();var statearr_156273_156291 = state_156261__$1;(statearr_156273_156291[2] = null);
(statearr_156273_156291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156262 === 11))
{var inst_156251 = (state_156261[2]);var state_156261__$1 = state_156261;var statearr_156274_156292 = state_156261__$1;(statearr_156274_156292[2] = inst_156251);
(statearr_156274_156292[1] = 10);
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
var state_machine__5525__auto____0 = (function (){var statearr_156278 = [null,null,null,null,null,null,null,null,null];(statearr_156278[0] = state_machine__5525__auto__);
(statearr_156278[1] = 1);
return statearr_156278;
});
var state_machine__5525__auto____1 = (function (state_156261){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_156261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e156279){if((e156279 instanceof Object))
{var ex__5528__auto__ = e156279;var statearr_156280_156293 = state_156261;(statearr_156280_156293[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156294 = state_156261;
state_156261 = G__156294;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_156261){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_156261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_156281 = f__5540__auto__.call(null);(statearr_156281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___156282);
return statearr_156281;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_156460){var state_val_156461 = (state_156460[1]);if((state_val_156461 === 1))
{var state_156460__$1 = state_156460;var statearr_156462_156503 = state_156460__$1;(statearr_156462_156503[2] = null);
(statearr_156462_156503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 2))
{var state_156460__$1 = state_156460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156460__$1,4,in$);
} else
{if((state_val_156461 === 3))
{var inst_156458 = (state_156460[2]);var state_156460__$1 = state_156460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156460__$1,inst_156458);
} else
{if((state_val_156461 === 4))
{var inst_156401 = (state_156460[7]);var inst_156401__$1 = (state_156460[2]);var inst_156402 = (inst_156401__$1 == null);var state_156460__$1 = (function (){var statearr_156463 = state_156460;(statearr_156463[7] = inst_156401__$1);
return statearr_156463;
})();if(cljs.core.truth_(inst_156402))
{var statearr_156464_156504 = state_156460__$1;(statearr_156464_156504[1] = 5);
} else
{var statearr_156465_156505 = state_156460__$1;(statearr_156465_156505[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 5))
{var inst_156404 = cljs.core.async.close_BANG_.call(null,out);var state_156460__$1 = state_156460;var statearr_156466_156506 = state_156460__$1;(statearr_156466_156506[2] = inst_156404);
(statearr_156466_156506[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 6))
{var inst_156401 = (state_156460[7]);var inst_156410 = f.call(null,inst_156401);var inst_156411 = cljs.core.seq.call(null,inst_156410);var inst_156412 = inst_156411;var inst_156413 = null;var inst_156414 = 0;var inst_156415 = 0;var state_156460__$1 = (function (){var statearr_156467 = state_156460;(statearr_156467[8] = inst_156412);
(statearr_156467[9] = inst_156413);
(statearr_156467[10] = inst_156414);
(statearr_156467[11] = inst_156415);
return statearr_156467;
})();var statearr_156468_156507 = state_156460__$1;(statearr_156468_156507[2] = null);
(statearr_156468_156507[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 7))
{var inst_156456 = (state_156460[2]);var state_156460__$1 = state_156460;var statearr_156469_156508 = state_156460__$1;(statearr_156469_156508[2] = inst_156456);
(statearr_156469_156508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 8))
{var inst_156414 = (state_156460[10]);var inst_156415 = (state_156460[11]);var inst_156417 = (inst_156415 < inst_156414);var inst_156418 = inst_156417;var state_156460__$1 = state_156460;if(cljs.core.truth_(inst_156418))
{var statearr_156470_156509 = state_156460__$1;(statearr_156470_156509[1] = 10);
} else
{var statearr_156471_156510 = state_156460__$1;(statearr_156471_156510[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 9))
{var inst_156448 = (state_156460[2]);var inst_156449 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_156460__$1 = (function (){var statearr_156472 = state_156460;(statearr_156472[12] = inst_156448);
return statearr_156472;
})();if(cljs.core.truth_(inst_156449))
{var statearr_156473_156511 = state_156460__$1;(statearr_156473_156511[1] = 21);
} else
{var statearr_156474_156512 = state_156460__$1;(statearr_156474_156512[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 10))
{var inst_156413 = (state_156460[9]);var inst_156415 = (state_156460[11]);var inst_156420 = cljs.core._nth.call(null,inst_156413,inst_156415);var state_156460__$1 = state_156460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156460__$1,13,out,inst_156420);
} else
{if((state_val_156461 === 11))
{var inst_156426 = (state_156460[13]);var inst_156412 = (state_156460[8]);var inst_156426__$1 = cljs.core.seq.call(null,inst_156412);var state_156460__$1 = (function (){var statearr_156478 = state_156460;(statearr_156478[13] = inst_156426__$1);
return statearr_156478;
})();if(inst_156426__$1)
{var statearr_156479_156513 = state_156460__$1;(statearr_156479_156513[1] = 14);
} else
{var statearr_156480_156514 = state_156460__$1;(statearr_156480_156514[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 12))
{var inst_156446 = (state_156460[2]);var state_156460__$1 = state_156460;var statearr_156481_156515 = state_156460__$1;(statearr_156481_156515[2] = inst_156446);
(statearr_156481_156515[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 13))
{var inst_156412 = (state_156460[8]);var inst_156413 = (state_156460[9]);var inst_156414 = (state_156460[10]);var inst_156415 = (state_156460[11]);var inst_156422 = (state_156460[2]);var inst_156423 = (inst_156415 + 1);var tmp156475 = inst_156412;var tmp156476 = inst_156413;var tmp156477 = inst_156414;var inst_156412__$1 = tmp156475;var inst_156413__$1 = tmp156476;var inst_156414__$1 = tmp156477;var inst_156415__$1 = inst_156423;var state_156460__$1 = (function (){var statearr_156482 = state_156460;(statearr_156482[14] = inst_156422);
(statearr_156482[8] = inst_156412__$1);
(statearr_156482[9] = inst_156413__$1);
(statearr_156482[10] = inst_156414__$1);
(statearr_156482[11] = inst_156415__$1);
return statearr_156482;
})();var statearr_156483_156516 = state_156460__$1;(statearr_156483_156516[2] = null);
(statearr_156483_156516[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 14))
{var inst_156426 = (state_156460[13]);var inst_156428 = cljs.core.chunked_seq_QMARK_.call(null,inst_156426);var state_156460__$1 = state_156460;if(inst_156428)
{var statearr_156484_156517 = state_156460__$1;(statearr_156484_156517[1] = 17);
} else
{var statearr_156485_156518 = state_156460__$1;(statearr_156485_156518[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 15))
{var state_156460__$1 = state_156460;var statearr_156486_156519 = state_156460__$1;(statearr_156486_156519[2] = null);
(statearr_156486_156519[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 16))
{var inst_156444 = (state_156460[2]);var state_156460__$1 = state_156460;var statearr_156487_156520 = state_156460__$1;(statearr_156487_156520[2] = inst_156444);
(statearr_156487_156520[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 17))
{var inst_156426 = (state_156460[13]);var inst_156430 = cljs.core.chunk_first.call(null,inst_156426);var inst_156431 = cljs.core.chunk_rest.call(null,inst_156426);var inst_156432 = cljs.core.count.call(null,inst_156430);var inst_156412 = inst_156431;var inst_156413 = inst_156430;var inst_156414 = inst_156432;var inst_156415 = 0;var state_156460__$1 = (function (){var statearr_156488 = state_156460;(statearr_156488[8] = inst_156412);
(statearr_156488[9] = inst_156413);
(statearr_156488[10] = inst_156414);
(statearr_156488[11] = inst_156415);
return statearr_156488;
})();var statearr_156489_156521 = state_156460__$1;(statearr_156489_156521[2] = null);
(statearr_156489_156521[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 18))
{var inst_156426 = (state_156460[13]);var inst_156435 = cljs.core.first.call(null,inst_156426);var state_156460__$1 = state_156460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156460__$1,20,out,inst_156435);
} else
{if((state_val_156461 === 19))
{var inst_156441 = (state_156460[2]);var state_156460__$1 = state_156460;var statearr_156490_156522 = state_156460__$1;(statearr_156490_156522[2] = inst_156441);
(statearr_156490_156522[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 20))
{var inst_156426 = (state_156460[13]);var inst_156437 = (state_156460[2]);var inst_156438 = cljs.core.next.call(null,inst_156426);var inst_156412 = inst_156438;var inst_156413 = null;var inst_156414 = 0;var inst_156415 = 0;var state_156460__$1 = (function (){var statearr_156491 = state_156460;(statearr_156491[15] = inst_156437);
(statearr_156491[8] = inst_156412);
(statearr_156491[9] = inst_156413);
(statearr_156491[10] = inst_156414);
(statearr_156491[11] = inst_156415);
return statearr_156491;
})();var statearr_156492_156523 = state_156460__$1;(statearr_156492_156523[2] = null);
(statearr_156492_156523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 21))
{var state_156460__$1 = state_156460;var statearr_156493_156524 = state_156460__$1;(statearr_156493_156524[2] = null);
(statearr_156493_156524[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 22))
{var state_156460__$1 = state_156460;var statearr_156494_156525 = state_156460__$1;(statearr_156494_156525[2] = null);
(statearr_156494_156525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156461 === 23))
{var inst_156454 = (state_156460[2]);var state_156460__$1 = state_156460;var statearr_156495_156526 = state_156460__$1;(statearr_156495_156526[2] = inst_156454);
(statearr_156495_156526[1] = 7);
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
var state_machine__5525__auto____0 = (function (){var statearr_156499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_156499[0] = state_machine__5525__auto__);
(statearr_156499[1] = 1);
return statearr_156499;
});
var state_machine__5525__auto____1 = (function (state_156460){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_156460);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e156500){if((e156500 instanceof Object))
{var ex__5528__auto__ = e156500;var statearr_156501_156527 = state_156460;(statearr_156501_156527[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156460);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156528 = state_156460;
state_156460 = G__156528;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_156460){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_156460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_156502 = f__5540__auto__.call(null);(statearr_156502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_156502;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5539__auto___156623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_156599){var state_val_156600 = (state_156599[1]);if((state_val_156600 === 1))
{var state_156599__$1 = state_156599;var statearr_156601_156624 = state_156599__$1;(statearr_156601_156624[2] = null);
(statearr_156601_156624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 2))
{var state_156599__$1 = state_156599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156599__$1,4,from);
} else
{if((state_val_156600 === 3))
{var inst_156597 = (state_156599[2]);var state_156599__$1 = state_156599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156599__$1,inst_156597);
} else
{if((state_val_156600 === 4))
{var inst_156578 = (state_156599[7]);var inst_156578__$1 = (state_156599[2]);var inst_156579 = (inst_156578__$1 == null);var state_156599__$1 = (function (){var statearr_156602 = state_156599;(statearr_156602[7] = inst_156578__$1);
return statearr_156602;
})();if(cljs.core.truth_(inst_156579))
{var statearr_156603_156625 = state_156599__$1;(statearr_156603_156625[1] = 5);
} else
{var statearr_156604_156626 = state_156599__$1;(statearr_156604_156626[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 5))
{var state_156599__$1 = state_156599;if(cljs.core.truth_(close_QMARK_))
{var statearr_156605_156627 = state_156599__$1;(statearr_156605_156627[1] = 8);
} else
{var statearr_156606_156628 = state_156599__$1;(statearr_156606_156628[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 6))
{var inst_156578 = (state_156599[7]);var state_156599__$1 = state_156599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156599__$1,11,to,inst_156578);
} else
{if((state_val_156600 === 7))
{var inst_156595 = (state_156599[2]);var state_156599__$1 = state_156599;var statearr_156607_156629 = state_156599__$1;(statearr_156607_156629[2] = inst_156595);
(statearr_156607_156629[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 8))
{var inst_156582 = cljs.core.async.close_BANG_.call(null,to);var state_156599__$1 = state_156599;var statearr_156608_156630 = state_156599__$1;(statearr_156608_156630[2] = inst_156582);
(statearr_156608_156630[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 9))
{var state_156599__$1 = state_156599;var statearr_156609_156631 = state_156599__$1;(statearr_156609_156631[2] = null);
(statearr_156609_156631[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 10))
{var inst_156585 = (state_156599[2]);var state_156599__$1 = state_156599;var statearr_156610_156632 = state_156599__$1;(statearr_156610_156632[2] = inst_156585);
(statearr_156610_156632[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 11))
{var inst_156588 = (state_156599[2]);var state_156599__$1 = state_156599;if(cljs.core.truth_(inst_156588))
{var statearr_156611_156633 = state_156599__$1;(statearr_156611_156633[1] = 12);
} else
{var statearr_156612_156634 = state_156599__$1;(statearr_156612_156634[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 12))
{var state_156599__$1 = state_156599;var statearr_156613_156635 = state_156599__$1;(statearr_156613_156635[2] = null);
(statearr_156613_156635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 13))
{var state_156599__$1 = state_156599;var statearr_156614_156636 = state_156599__$1;(statearr_156614_156636[2] = null);
(statearr_156614_156636[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156600 === 14))
{var inst_156593 = (state_156599[2]);var state_156599__$1 = state_156599;var statearr_156615_156637 = state_156599__$1;(statearr_156615_156637[2] = inst_156593);
(statearr_156615_156637[1] = 7);
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
var state_machine__5525__auto____0 = (function (){var statearr_156619 = [null,null,null,null,null,null,null,null];(statearr_156619[0] = state_machine__5525__auto__);
(statearr_156619[1] = 1);
return statearr_156619;
});
var state_machine__5525__auto____1 = (function (state_156599){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_156599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e156620){if((e156620 instanceof Object))
{var ex__5528__auto__ = e156620;var statearr_156621_156638 = state_156599;(statearr_156621_156638[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156639 = state_156599;
state_156599 = G__156639;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_156599){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_156599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_156622 = f__5540__auto__.call(null);(statearr_156622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___156623);
return statearr_156622;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5539__auto___156740 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_156715){var state_val_156716 = (state_156715[1]);if((state_val_156716 === 1))
{var state_156715__$1 = state_156715;var statearr_156717_156741 = state_156715__$1;(statearr_156717_156741[2] = null);
(statearr_156717_156741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 2))
{var state_156715__$1 = state_156715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156715__$1,4,ch);
} else
{if((state_val_156716 === 3))
{var inst_156713 = (state_156715[2]);var state_156715__$1 = state_156715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156715__$1,inst_156713);
} else
{if((state_val_156716 === 4))
{var inst_156692 = (state_156715[7]);var inst_156692__$1 = (state_156715[2]);var inst_156693 = (inst_156692__$1 == null);var state_156715__$1 = (function (){var statearr_156718 = state_156715;(statearr_156718[7] = inst_156692__$1);
return statearr_156718;
})();if(cljs.core.truth_(inst_156693))
{var statearr_156719_156742 = state_156715__$1;(statearr_156719_156742[1] = 5);
} else
{var statearr_156720_156743 = state_156715__$1;(statearr_156720_156743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 5))
{var inst_156695 = cljs.core.async.close_BANG_.call(null,tc);var inst_156696 = cljs.core.async.close_BANG_.call(null,fc);var state_156715__$1 = (function (){var statearr_156721 = state_156715;(statearr_156721[8] = inst_156695);
return statearr_156721;
})();var statearr_156722_156744 = state_156715__$1;(statearr_156722_156744[2] = inst_156696);
(statearr_156722_156744[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 6))
{var inst_156692 = (state_156715[7]);var inst_156698 = p.call(null,inst_156692);var state_156715__$1 = state_156715;if(cljs.core.truth_(inst_156698))
{var statearr_156723_156745 = state_156715__$1;(statearr_156723_156745[1] = 9);
} else
{var statearr_156724_156746 = state_156715__$1;(statearr_156724_156746[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 7))
{var inst_156711 = (state_156715[2]);var state_156715__$1 = state_156715;var statearr_156725_156747 = state_156715__$1;(statearr_156725_156747[2] = inst_156711);
(statearr_156725_156747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 8))
{var inst_156704 = (state_156715[2]);var state_156715__$1 = state_156715;if(cljs.core.truth_(inst_156704))
{var statearr_156726_156748 = state_156715__$1;(statearr_156726_156748[1] = 12);
} else
{var statearr_156727_156749 = state_156715__$1;(statearr_156727_156749[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 9))
{var state_156715__$1 = state_156715;var statearr_156728_156750 = state_156715__$1;(statearr_156728_156750[2] = tc);
(statearr_156728_156750[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 10))
{var state_156715__$1 = state_156715;var statearr_156729_156751 = state_156715__$1;(statearr_156729_156751[2] = fc);
(statearr_156729_156751[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 11))
{var inst_156692 = (state_156715[7]);var inst_156702 = (state_156715[2]);var state_156715__$1 = state_156715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156715__$1,8,inst_156702,inst_156692);
} else
{if((state_val_156716 === 12))
{var state_156715__$1 = state_156715;var statearr_156730_156752 = state_156715__$1;(statearr_156730_156752[2] = null);
(statearr_156730_156752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 13))
{var state_156715__$1 = state_156715;var statearr_156731_156753 = state_156715__$1;(statearr_156731_156753[2] = null);
(statearr_156731_156753[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156716 === 14))
{var inst_156709 = (state_156715[2]);var state_156715__$1 = state_156715;var statearr_156732_156754 = state_156715__$1;(statearr_156732_156754[2] = inst_156709);
(statearr_156732_156754[1] = 7);
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
var state_machine__5525__auto____0 = (function (){var statearr_156736 = [null,null,null,null,null,null,null,null,null];(statearr_156736[0] = state_machine__5525__auto__);
(statearr_156736[1] = 1);
return statearr_156736;
});
var state_machine__5525__auto____1 = (function (state_156715){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_156715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e156737){if((e156737 instanceof Object))
{var ex__5528__auto__ = e156737;var statearr_156738_156755 = state_156715;(statearr_156738_156755[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156756 = state_156715;
state_156715 = G__156756;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_156715){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_156715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_156739 = f__5540__auto__.call(null);(statearr_156739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___156740);
return statearr_156739;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_156803){var state_val_156804 = (state_156803[1]);if((state_val_156804 === 7))
{var inst_156799 = (state_156803[2]);var state_156803__$1 = state_156803;var statearr_156805_156821 = state_156803__$1;(statearr_156805_156821[2] = inst_156799);
(statearr_156805_156821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156804 === 6))
{var inst_156789 = (state_156803[7]);var inst_156792 = (state_156803[8]);var inst_156796 = f.call(null,inst_156789,inst_156792);var inst_156789__$1 = inst_156796;var state_156803__$1 = (function (){var statearr_156806 = state_156803;(statearr_156806[7] = inst_156789__$1);
return statearr_156806;
})();var statearr_156807_156822 = state_156803__$1;(statearr_156807_156822[2] = null);
(statearr_156807_156822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156804 === 5))
{var inst_156789 = (state_156803[7]);var state_156803__$1 = state_156803;var statearr_156808_156823 = state_156803__$1;(statearr_156808_156823[2] = inst_156789);
(statearr_156808_156823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156804 === 4))
{var inst_156792 = (state_156803[8]);var inst_156792__$1 = (state_156803[2]);var inst_156793 = (inst_156792__$1 == null);var state_156803__$1 = (function (){var statearr_156809 = state_156803;(statearr_156809[8] = inst_156792__$1);
return statearr_156809;
})();if(cljs.core.truth_(inst_156793))
{var statearr_156810_156824 = state_156803__$1;(statearr_156810_156824[1] = 5);
} else
{var statearr_156811_156825 = state_156803__$1;(statearr_156811_156825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156804 === 3))
{var inst_156801 = (state_156803[2]);var state_156803__$1 = state_156803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156803__$1,inst_156801);
} else
{if((state_val_156804 === 2))
{var state_156803__$1 = state_156803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156803__$1,4,ch);
} else
{if((state_val_156804 === 1))
{var inst_156789 = init;var state_156803__$1 = (function (){var statearr_156812 = state_156803;(statearr_156812[7] = inst_156789);
return statearr_156812;
})();var statearr_156813_156826 = state_156803__$1;(statearr_156813_156826[2] = null);
(statearr_156813_156826[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_156817 = [null,null,null,null,null,null,null,null,null];(statearr_156817[0] = state_machine__5525__auto__);
(statearr_156817[1] = 1);
return statearr_156817;
});
var state_machine__5525__auto____1 = (function (state_156803){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_156803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e156818){if((e156818 instanceof Object))
{var ex__5528__auto__ = e156818;var statearr_156819_156827 = state_156803;(statearr_156819_156827[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156828 = state_156803;
state_156803 = G__156828;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_156803){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_156803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_156820 = f__5540__auto__.call(null);(statearr_156820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_156820;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5539__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_156902){var state_val_156903 = (state_156902[1]);if((state_val_156903 === 1))
{var inst_156878 = cljs.core.seq.call(null,coll);var inst_156879 = inst_156878;var state_156902__$1 = (function (){var statearr_156904 = state_156902;(statearr_156904[7] = inst_156879);
return statearr_156904;
})();var statearr_156905_156927 = state_156902__$1;(statearr_156905_156927[2] = null);
(statearr_156905_156927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 2))
{var inst_156879 = (state_156902[7]);var state_156902__$1 = state_156902;if(cljs.core.truth_(inst_156879))
{var statearr_156906_156928 = state_156902__$1;(statearr_156906_156928[1] = 4);
} else
{var statearr_156907_156929 = state_156902__$1;(statearr_156907_156929[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 3))
{var inst_156900 = (state_156902[2]);var state_156902__$1 = state_156902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156902__$1,inst_156900);
} else
{if((state_val_156903 === 4))
{var inst_156879 = (state_156902[7]);var inst_156882 = cljs.core.first.call(null,inst_156879);var state_156902__$1 = state_156902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156902__$1,7,ch,inst_156882);
} else
{if((state_val_156903 === 5))
{var inst_156879 = (state_156902[7]);var state_156902__$1 = state_156902;var statearr_156908_156930 = state_156902__$1;(statearr_156908_156930[2] = inst_156879);
(statearr_156908_156930[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 6))
{var inst_156887 = (state_156902[2]);var state_156902__$1 = state_156902;if(cljs.core.truth_(inst_156887))
{var statearr_156909_156931 = state_156902__$1;(statearr_156909_156931[1] = 8);
} else
{var statearr_156910_156932 = state_156902__$1;(statearr_156910_156932[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 7))
{var inst_156884 = (state_156902[2]);var state_156902__$1 = state_156902;var statearr_156911_156933 = state_156902__$1;(statearr_156911_156933[2] = inst_156884);
(statearr_156911_156933[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 8))
{var inst_156879 = (state_156902[7]);var inst_156889 = cljs.core.next.call(null,inst_156879);var inst_156879__$1 = inst_156889;var state_156902__$1 = (function (){var statearr_156912 = state_156902;(statearr_156912[7] = inst_156879__$1);
return statearr_156912;
})();var statearr_156913_156934 = state_156902__$1;(statearr_156913_156934[2] = null);
(statearr_156913_156934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 9))
{var state_156902__$1 = state_156902;if(cljs.core.truth_(close_QMARK_))
{var statearr_156914_156935 = state_156902__$1;(statearr_156914_156935[1] = 11);
} else
{var statearr_156915_156936 = state_156902__$1;(statearr_156915_156936[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 10))
{var inst_156898 = (state_156902[2]);var state_156902__$1 = state_156902;var statearr_156916_156937 = state_156902__$1;(statearr_156916_156937[2] = inst_156898);
(statearr_156916_156937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 11))
{var inst_156893 = cljs.core.async.close_BANG_.call(null,ch);var state_156902__$1 = state_156902;var statearr_156917_156938 = state_156902__$1;(statearr_156917_156938[2] = inst_156893);
(statearr_156917_156938[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 12))
{var state_156902__$1 = state_156902;var statearr_156918_156939 = state_156902__$1;(statearr_156918_156939[2] = null);
(statearr_156918_156939[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156903 === 13))
{var inst_156896 = (state_156902[2]);var state_156902__$1 = state_156902;var statearr_156919_156940 = state_156902__$1;(statearr_156919_156940[2] = inst_156896);
(statearr_156919_156940[1] = 10);
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
var state_machine__5525__auto____0 = (function (){var statearr_156923 = [null,null,null,null,null,null,null,null];(statearr_156923[0] = state_machine__5525__auto__);
(statearr_156923[1] = 1);
return statearr_156923;
});
var state_machine__5525__auto____1 = (function (state_156902){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_156902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e156924){if((e156924 instanceof Object))
{var ex__5528__auto__ = e156924;var statearr_156925_156941 = state_156902;(statearr_156925_156941[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156942 = state_156902;
state_156902 = G__156942;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_156902){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_156902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_156926 = f__5540__auto__.call(null);(statearr_156926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto__);
return statearr_156926;
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
cljs.core.async.Mux = (function (){var obj156944 = {};return obj156944;
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
cljs.core.async.Mult = (function (){var obj156946 = {};return obj156946;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t157168 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t157168 = (function (cs,ch,mult,meta157169){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta157169 = meta157169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t157168.cljs$lang$type = true;
cljs.core.async.t157168.cljs$lang$ctorStr = "cljs.core.async/t157168";
cljs.core.async.t157168.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t157168");
});})(cs))
;
cljs.core.async.t157168.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t157168.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t157168.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t157168.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t157168.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t157168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t157168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_157170){var self__ = this;
var _157170__$1 = this;return self__.meta157169;
});})(cs))
;
cljs.core.async.t157168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_157170,meta157169__$1){var self__ = this;
var _157170__$1 = this;return (new cljs.core.async.t157168(self__.cs,self__.ch,self__.mult,meta157169__$1));
});})(cs))
;
cljs.core.async.__GT_t157168 = ((function (cs){
return (function __GT_t157168(cs__$1,ch__$1,mult__$1,meta157169){return (new cljs.core.async.t157168(cs__$1,ch__$1,mult__$1,meta157169));
});})(cs))
;
}
return (new cljs.core.async.t157168(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5539__auto___157389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_157301){var state_val_157302 = (state_157301[1]);if((state_val_157302 === 32))
{var inst_157244 = (state_157301[7]);var inst_157242 = (state_157301[8]);var inst_157243 = (state_157301[9]);var inst_157241 = (state_157301[10]);var inst_157256 = (state_157301[2]);var inst_157257 = (inst_157244 + 1);var tmp157303 = inst_157242;var tmp157304 = inst_157243;var tmp157305 = inst_157241;var inst_157241__$1 = tmp157305;var inst_157242__$1 = tmp157303;var inst_157243__$1 = tmp157304;var inst_157244__$1 = inst_157257;var state_157301__$1 = (function (){var statearr_157306 = state_157301;(statearr_157306[11] = inst_157256);
(statearr_157306[7] = inst_157244__$1);
(statearr_157306[8] = inst_157242__$1);
(statearr_157306[9] = inst_157243__$1);
(statearr_157306[10] = inst_157241__$1);
return statearr_157306;
})();var statearr_157307_157390 = state_157301__$1;(statearr_157307_157390[2] = null);
(statearr_157307_157390[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 1))
{var state_157301__$1 = state_157301;var statearr_157308_157391 = state_157301__$1;(statearr_157308_157391[2] = null);
(statearr_157308_157391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 33))
{var inst_157260 = (state_157301[12]);var inst_157262 = cljs.core.chunked_seq_QMARK_.call(null,inst_157260);var state_157301__$1 = state_157301;if(inst_157262)
{var statearr_157309_157392 = state_157301__$1;(statearr_157309_157392[1] = 36);
} else
{var statearr_157310_157393 = state_157301__$1;(statearr_157310_157393[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 2))
{var state_157301__$1 = state_157301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157301__$1,4,ch);
} else
{if((state_val_157302 === 34))
{var state_157301__$1 = state_157301;var statearr_157311_157394 = state_157301__$1;(statearr_157311_157394[2] = null);
(statearr_157311_157394[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 3))
{var inst_157299 = (state_157301[2]);var state_157301__$1 = state_157301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157301__$1,inst_157299);
} else
{if((state_val_157302 === 35))
{var inst_157283 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157312_157395 = state_157301__$1;(statearr_157312_157395[2] = inst_157283);
(statearr_157312_157395[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 4))
{var inst_157173 = (state_157301[13]);var inst_157173__$1 = (state_157301[2]);var inst_157174 = (inst_157173__$1 == null);var state_157301__$1 = (function (){var statearr_157313 = state_157301;(statearr_157313[13] = inst_157173__$1);
return statearr_157313;
})();if(cljs.core.truth_(inst_157174))
{var statearr_157314_157396 = state_157301__$1;(statearr_157314_157396[1] = 5);
} else
{var statearr_157315_157397 = state_157301__$1;(statearr_157315_157397[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 36))
{var inst_157260 = (state_157301[12]);var inst_157264 = cljs.core.chunk_first.call(null,inst_157260);var inst_157265 = cljs.core.chunk_rest.call(null,inst_157260);var inst_157266 = cljs.core.count.call(null,inst_157264);var inst_157241 = inst_157265;var inst_157242 = inst_157264;var inst_157243 = inst_157266;var inst_157244 = 0;var state_157301__$1 = (function (){var statearr_157316 = state_157301;(statearr_157316[7] = inst_157244);
(statearr_157316[8] = inst_157242);
(statearr_157316[9] = inst_157243);
(statearr_157316[10] = inst_157241);
return statearr_157316;
})();var statearr_157317_157398 = state_157301__$1;(statearr_157317_157398[2] = null);
(statearr_157317_157398[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 5))
{var inst_157180 = cljs.core.deref.call(null,cs);var inst_157181 = cljs.core.seq.call(null,inst_157180);var inst_157182 = inst_157181;var inst_157183 = null;var inst_157184 = 0;var inst_157185 = 0;var state_157301__$1 = (function (){var statearr_157318 = state_157301;(statearr_157318[14] = inst_157185);
(statearr_157318[15] = inst_157182);
(statearr_157318[16] = inst_157184);
(statearr_157318[17] = inst_157183);
return statearr_157318;
})();var statearr_157319_157399 = state_157301__$1;(statearr_157319_157399[2] = null);
(statearr_157319_157399[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 37))
{var inst_157269 = (state_157301[18]);var inst_157173 = (state_157301[13]);var inst_157260 = (state_157301[12]);var inst_157269__$1 = cljs.core.first.call(null,inst_157260);var inst_157270 = cljs.core.async.put_BANG_.call(null,inst_157269__$1,inst_157173,done);var state_157301__$1 = (function (){var statearr_157320 = state_157301;(statearr_157320[18] = inst_157269__$1);
return statearr_157320;
})();if(cljs.core.truth_(inst_157270))
{var statearr_157321_157400 = state_157301__$1;(statearr_157321_157400[1] = 39);
} else
{var statearr_157322_157401 = state_157301__$1;(statearr_157322_157401[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 6))
{var inst_157233 = (state_157301[19]);var inst_157232 = cljs.core.deref.call(null,cs);var inst_157233__$1 = cljs.core.keys.call(null,inst_157232);var inst_157234 = cljs.core.count.call(null,inst_157233__$1);var inst_157235 = cljs.core.reset_BANG_.call(null,dctr,inst_157234);var inst_157240 = cljs.core.seq.call(null,inst_157233__$1);var inst_157241 = inst_157240;var inst_157242 = null;var inst_157243 = 0;var inst_157244 = 0;var state_157301__$1 = (function (){var statearr_157323 = state_157301;(statearr_157323[7] = inst_157244);
(statearr_157323[8] = inst_157242);
(statearr_157323[9] = inst_157243);
(statearr_157323[10] = inst_157241);
(statearr_157323[20] = inst_157235);
(statearr_157323[19] = inst_157233__$1);
return statearr_157323;
})();var statearr_157324_157402 = state_157301__$1;(statearr_157324_157402[2] = null);
(statearr_157324_157402[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 38))
{var inst_157280 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157325_157403 = state_157301__$1;(statearr_157325_157403[2] = inst_157280);
(statearr_157325_157403[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 7))
{var inst_157297 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157326_157404 = state_157301__$1;(statearr_157326_157404[2] = inst_157297);
(statearr_157326_157404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 39))
{var state_157301__$1 = state_157301;var statearr_157327_157405 = state_157301__$1;(statearr_157327_157405[2] = null);
(statearr_157327_157405[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 8))
{var inst_157185 = (state_157301[14]);var inst_157184 = (state_157301[16]);var inst_157187 = (inst_157185 < inst_157184);var inst_157188 = inst_157187;var state_157301__$1 = state_157301;if(cljs.core.truth_(inst_157188))
{var statearr_157328_157406 = state_157301__$1;(statearr_157328_157406[1] = 10);
} else
{var statearr_157329_157407 = state_157301__$1;(statearr_157329_157407[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 40))
{var inst_157269 = (state_157301[18]);var inst_157273 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_157274 = cljs.core.async.untap_STAR_.call(null,m,inst_157269);var state_157301__$1 = (function (){var statearr_157330 = state_157301;(statearr_157330[21] = inst_157273);
return statearr_157330;
})();var statearr_157331_157408 = state_157301__$1;(statearr_157331_157408[2] = inst_157274);
(statearr_157331_157408[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 9))
{var inst_157230 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157332_157409 = state_157301__$1;(statearr_157332_157409[2] = inst_157230);
(statearr_157332_157409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 41))
{var inst_157260 = (state_157301[12]);var inst_157276 = (state_157301[2]);var inst_157277 = cljs.core.next.call(null,inst_157260);var inst_157241 = inst_157277;var inst_157242 = null;var inst_157243 = 0;var inst_157244 = 0;var state_157301__$1 = (function (){var statearr_157333 = state_157301;(statearr_157333[22] = inst_157276);
(statearr_157333[7] = inst_157244);
(statearr_157333[8] = inst_157242);
(statearr_157333[9] = inst_157243);
(statearr_157333[10] = inst_157241);
return statearr_157333;
})();var statearr_157334_157410 = state_157301__$1;(statearr_157334_157410[2] = null);
(statearr_157334_157410[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 10))
{var inst_157185 = (state_157301[14]);var inst_157183 = (state_157301[17]);var inst_157191 = cljs.core._nth.call(null,inst_157183,inst_157185);var inst_157192 = cljs.core.nth.call(null,inst_157191,0,null);var inst_157193 = cljs.core.nth.call(null,inst_157191,1,null);var state_157301__$1 = (function (){var statearr_157335 = state_157301;(statearr_157335[23] = inst_157192);
return statearr_157335;
})();if(cljs.core.truth_(inst_157193))
{var statearr_157336_157411 = state_157301__$1;(statearr_157336_157411[1] = 13);
} else
{var statearr_157337_157412 = state_157301__$1;(statearr_157337_157412[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 42))
{var state_157301__$1 = state_157301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157301__$1,45,dchan);
} else
{if((state_val_157302 === 11))
{var inst_157182 = (state_157301[15]);var inst_157202 = (state_157301[24]);var inst_157202__$1 = cljs.core.seq.call(null,inst_157182);var state_157301__$1 = (function (){var statearr_157338 = state_157301;(statearr_157338[24] = inst_157202__$1);
return statearr_157338;
})();if(inst_157202__$1)
{var statearr_157339_157413 = state_157301__$1;(statearr_157339_157413[1] = 16);
} else
{var statearr_157340_157414 = state_157301__$1;(statearr_157340_157414[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 43))
{var state_157301__$1 = state_157301;var statearr_157341_157415 = state_157301__$1;(statearr_157341_157415[2] = null);
(statearr_157341_157415[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 12))
{var inst_157228 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157342_157416 = state_157301__$1;(statearr_157342_157416[2] = inst_157228);
(statearr_157342_157416[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 44))
{var inst_157294 = (state_157301[2]);var state_157301__$1 = (function (){var statearr_157343 = state_157301;(statearr_157343[25] = inst_157294);
return statearr_157343;
})();var statearr_157344_157417 = state_157301__$1;(statearr_157344_157417[2] = null);
(statearr_157344_157417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 13))
{var inst_157192 = (state_157301[23]);var inst_157195 = cljs.core.async.close_BANG_.call(null,inst_157192);var state_157301__$1 = state_157301;var statearr_157345_157418 = state_157301__$1;(statearr_157345_157418[2] = inst_157195);
(statearr_157345_157418[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 45))
{var inst_157291 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157349_157419 = state_157301__$1;(statearr_157349_157419[2] = inst_157291);
(statearr_157349_157419[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 14))
{var state_157301__$1 = state_157301;var statearr_157350_157420 = state_157301__$1;(statearr_157350_157420[2] = null);
(statearr_157350_157420[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 15))
{var inst_157185 = (state_157301[14]);var inst_157182 = (state_157301[15]);var inst_157184 = (state_157301[16]);var inst_157183 = (state_157301[17]);var inst_157198 = (state_157301[2]);var inst_157199 = (inst_157185 + 1);var tmp157346 = inst_157182;var tmp157347 = inst_157184;var tmp157348 = inst_157183;var inst_157182__$1 = tmp157346;var inst_157183__$1 = tmp157348;var inst_157184__$1 = tmp157347;var inst_157185__$1 = inst_157199;var state_157301__$1 = (function (){var statearr_157351 = state_157301;(statearr_157351[14] = inst_157185__$1);
(statearr_157351[15] = inst_157182__$1);
(statearr_157351[16] = inst_157184__$1);
(statearr_157351[17] = inst_157183__$1);
(statearr_157351[26] = inst_157198);
return statearr_157351;
})();var statearr_157352_157421 = state_157301__$1;(statearr_157352_157421[2] = null);
(statearr_157352_157421[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 16))
{var inst_157202 = (state_157301[24]);var inst_157204 = cljs.core.chunked_seq_QMARK_.call(null,inst_157202);var state_157301__$1 = state_157301;if(inst_157204)
{var statearr_157353_157422 = state_157301__$1;(statearr_157353_157422[1] = 19);
} else
{var statearr_157354_157423 = state_157301__$1;(statearr_157354_157423[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 17))
{var state_157301__$1 = state_157301;var statearr_157355_157424 = state_157301__$1;(statearr_157355_157424[2] = null);
(statearr_157355_157424[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 18))
{var inst_157226 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157356_157425 = state_157301__$1;(statearr_157356_157425[2] = inst_157226);
(statearr_157356_157425[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 19))
{var inst_157202 = (state_157301[24]);var inst_157206 = cljs.core.chunk_first.call(null,inst_157202);var inst_157207 = cljs.core.chunk_rest.call(null,inst_157202);var inst_157208 = cljs.core.count.call(null,inst_157206);var inst_157182 = inst_157207;var inst_157183 = inst_157206;var inst_157184 = inst_157208;var inst_157185 = 0;var state_157301__$1 = (function (){var statearr_157357 = state_157301;(statearr_157357[14] = inst_157185);
(statearr_157357[15] = inst_157182);
(statearr_157357[16] = inst_157184);
(statearr_157357[17] = inst_157183);
return statearr_157357;
})();var statearr_157358_157426 = state_157301__$1;(statearr_157358_157426[2] = null);
(statearr_157358_157426[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 20))
{var inst_157202 = (state_157301[24]);var inst_157212 = cljs.core.first.call(null,inst_157202);var inst_157213 = cljs.core.nth.call(null,inst_157212,0,null);var inst_157214 = cljs.core.nth.call(null,inst_157212,1,null);var state_157301__$1 = (function (){var statearr_157359 = state_157301;(statearr_157359[27] = inst_157213);
return statearr_157359;
})();if(cljs.core.truth_(inst_157214))
{var statearr_157360_157427 = state_157301__$1;(statearr_157360_157427[1] = 22);
} else
{var statearr_157361_157428 = state_157301__$1;(statearr_157361_157428[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 21))
{var inst_157223 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157362_157429 = state_157301__$1;(statearr_157362_157429[2] = inst_157223);
(statearr_157362_157429[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 22))
{var inst_157213 = (state_157301[27]);var inst_157216 = cljs.core.async.close_BANG_.call(null,inst_157213);var state_157301__$1 = state_157301;var statearr_157363_157430 = state_157301__$1;(statearr_157363_157430[2] = inst_157216);
(statearr_157363_157430[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 23))
{var state_157301__$1 = state_157301;var statearr_157364_157431 = state_157301__$1;(statearr_157364_157431[2] = null);
(statearr_157364_157431[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 24))
{var inst_157202 = (state_157301[24]);var inst_157219 = (state_157301[2]);var inst_157220 = cljs.core.next.call(null,inst_157202);var inst_157182 = inst_157220;var inst_157183 = null;var inst_157184 = 0;var inst_157185 = 0;var state_157301__$1 = (function (){var statearr_157365 = state_157301;(statearr_157365[14] = inst_157185);
(statearr_157365[15] = inst_157182);
(statearr_157365[16] = inst_157184);
(statearr_157365[17] = inst_157183);
(statearr_157365[28] = inst_157219);
return statearr_157365;
})();var statearr_157366_157432 = state_157301__$1;(statearr_157366_157432[2] = null);
(statearr_157366_157432[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 25))
{var inst_157244 = (state_157301[7]);var inst_157243 = (state_157301[9]);var inst_157246 = (inst_157244 < inst_157243);var inst_157247 = inst_157246;var state_157301__$1 = state_157301;if(cljs.core.truth_(inst_157247))
{var statearr_157367_157433 = state_157301__$1;(statearr_157367_157433[1] = 27);
} else
{var statearr_157368_157434 = state_157301__$1;(statearr_157368_157434[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 26))
{var inst_157233 = (state_157301[19]);var inst_157287 = (state_157301[2]);var inst_157288 = cljs.core.seq.call(null,inst_157233);var state_157301__$1 = (function (){var statearr_157369 = state_157301;(statearr_157369[29] = inst_157287);
return statearr_157369;
})();if(inst_157288)
{var statearr_157370_157435 = state_157301__$1;(statearr_157370_157435[1] = 42);
} else
{var statearr_157371_157436 = state_157301__$1;(statearr_157371_157436[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 27))
{var inst_157173 = (state_157301[13]);var inst_157249 = (state_157301[30]);var inst_157244 = (state_157301[7]);var inst_157242 = (state_157301[8]);var inst_157249__$1 = cljs.core._nth.call(null,inst_157242,inst_157244);var inst_157250 = cljs.core.async.put_BANG_.call(null,inst_157249__$1,inst_157173,done);var state_157301__$1 = (function (){var statearr_157372 = state_157301;(statearr_157372[30] = inst_157249__$1);
return statearr_157372;
})();if(cljs.core.truth_(inst_157250))
{var statearr_157373_157437 = state_157301__$1;(statearr_157373_157437[1] = 30);
} else
{var statearr_157374_157438 = state_157301__$1;(statearr_157374_157438[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 28))
{var inst_157260 = (state_157301[12]);var inst_157241 = (state_157301[10]);var inst_157260__$1 = cljs.core.seq.call(null,inst_157241);var state_157301__$1 = (function (){var statearr_157375 = state_157301;(statearr_157375[12] = inst_157260__$1);
return statearr_157375;
})();if(inst_157260__$1)
{var statearr_157376_157439 = state_157301__$1;(statearr_157376_157439[1] = 33);
} else
{var statearr_157377_157440 = state_157301__$1;(statearr_157377_157440[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 29))
{var inst_157285 = (state_157301[2]);var state_157301__$1 = state_157301;var statearr_157378_157441 = state_157301__$1;(statearr_157378_157441[2] = inst_157285);
(statearr_157378_157441[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 30))
{var state_157301__$1 = state_157301;var statearr_157379_157442 = state_157301__$1;(statearr_157379_157442[2] = null);
(statearr_157379_157442[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157302 === 31))
{var inst_157249 = (state_157301[30]);var inst_157253 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_157254 = cljs.core.async.untap_STAR_.call(null,m,inst_157249);var state_157301__$1 = (function (){var statearr_157380 = state_157301;(statearr_157380[31] = inst_157253);
return statearr_157380;
})();var statearr_157381_157443 = state_157301__$1;(statearr_157381_157443[2] = inst_157254);
(statearr_157381_157443[1] = 32);
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
var state_machine__5525__auto____0 = (function (){var statearr_157385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_157385[0] = state_machine__5525__auto__);
(statearr_157385[1] = 1);
return statearr_157385;
});
var state_machine__5525__auto____1 = (function (state_157301){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_157301);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e157386){if((e157386 instanceof Object))
{var ex__5528__auto__ = e157386;var statearr_157387_157444 = state_157301;(statearr_157387_157444[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e157386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__157445 = state_157301;
state_157301 = G__157445;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_157301){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_157301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_157388 = f__5540__auto__.call(null);(statearr_157388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___157389);
return statearr_157388;
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
cljs.core.async.Mix = (function (){var obj157447 = {};return obj157447;
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
;var m = (function (){if(typeof cljs.core.async.t157567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t157567 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta157568){
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
this.meta157568 = meta157568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t157567.cljs$lang$type = true;
cljs.core.async.t157567.cljs$lang$ctorStr = "cljs.core.async/t157567";
cljs.core.async.t157567.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t157567");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t157567.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t157567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_157569){var self__ = this;
var _157569__$1 = this;return self__.meta157568;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t157567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_157569,meta157568__$1){var self__ = this;
var _157569__$1 = this;return (new cljs.core.async.t157567(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta157568__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t157567 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t157567(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta157568){return (new cljs.core.async.t157567(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta157568));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t157567(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5539__auto___157686 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_157639){var state_val_157640 = (state_157639[1]);if((state_val_157640 === 1))
{var inst_157573 = (state_157639[7]);var inst_157573__$1 = calc_state.call(null);var inst_157574 = cljs.core.seq_QMARK_.call(null,inst_157573__$1);var state_157639__$1 = (function (){var statearr_157641 = state_157639;(statearr_157641[7] = inst_157573__$1);
return statearr_157641;
})();if(inst_157574)
{var statearr_157642_157687 = state_157639__$1;(statearr_157642_157687[1] = 2);
} else
{var statearr_157643_157688 = state_157639__$1;(statearr_157643_157688[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 2))
{var inst_157573 = (state_157639[7]);var inst_157576 = cljs.core.apply.call(null,cljs.core.hash_map,inst_157573);var state_157639__$1 = state_157639;var statearr_157644_157689 = state_157639__$1;(statearr_157644_157689[2] = inst_157576);
(statearr_157644_157689[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 3))
{var inst_157573 = (state_157639[7]);var state_157639__$1 = state_157639;var statearr_157645_157690 = state_157639__$1;(statearr_157645_157690[2] = inst_157573);
(statearr_157645_157690[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 4))
{var inst_157573 = (state_157639[7]);var inst_157579 = (state_157639[2]);var inst_157580 = cljs.core.get.call(null,inst_157579,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_157581 = cljs.core.get.call(null,inst_157579,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_157582 = cljs.core.get.call(null,inst_157579,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_157583 = inst_157573;var state_157639__$1 = (function (){var statearr_157646 = state_157639;(statearr_157646[8] = inst_157583);
(statearr_157646[9] = inst_157581);
(statearr_157646[10] = inst_157582);
(statearr_157646[11] = inst_157580);
return statearr_157646;
})();var statearr_157647_157691 = state_157639__$1;(statearr_157647_157691[2] = null);
(statearr_157647_157691[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 5))
{var inst_157583 = (state_157639[8]);var inst_157586 = cljs.core.seq_QMARK_.call(null,inst_157583);var state_157639__$1 = state_157639;if(inst_157586)
{var statearr_157648_157692 = state_157639__$1;(statearr_157648_157692[1] = 7);
} else
{var statearr_157649_157693 = state_157639__$1;(statearr_157649_157693[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 6))
{var inst_157637 = (state_157639[2]);var state_157639__$1 = state_157639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157639__$1,inst_157637);
} else
{if((state_val_157640 === 7))
{var inst_157583 = (state_157639[8]);var inst_157588 = cljs.core.apply.call(null,cljs.core.hash_map,inst_157583);var state_157639__$1 = state_157639;var statearr_157650_157694 = state_157639__$1;(statearr_157650_157694[2] = inst_157588);
(statearr_157650_157694[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 8))
{var inst_157583 = (state_157639[8]);var state_157639__$1 = state_157639;var statearr_157651_157695 = state_157639__$1;(statearr_157651_157695[2] = inst_157583);
(statearr_157651_157695[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 9))
{var inst_157591 = (state_157639[12]);var inst_157591__$1 = (state_157639[2]);var inst_157592 = cljs.core.get.call(null,inst_157591__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_157593 = cljs.core.get.call(null,inst_157591__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_157594 = cljs.core.get.call(null,inst_157591__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_157639__$1 = (function (){var statearr_157652 = state_157639;(statearr_157652[13] = inst_157594);
(statearr_157652[14] = inst_157593);
(statearr_157652[12] = inst_157591__$1);
return statearr_157652;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_157639__$1,10,inst_157592);
} else
{if((state_val_157640 === 10))
{var inst_157599 = (state_157639[15]);var inst_157598 = (state_157639[16]);var inst_157597 = (state_157639[2]);var inst_157598__$1 = cljs.core.nth.call(null,inst_157597,0,null);var inst_157599__$1 = cljs.core.nth.call(null,inst_157597,1,null);var inst_157600 = (inst_157598__$1 == null);var inst_157601 = cljs.core._EQ_.call(null,inst_157599__$1,change);var inst_157602 = (inst_157600) || (inst_157601);var state_157639__$1 = (function (){var statearr_157653 = state_157639;(statearr_157653[15] = inst_157599__$1);
(statearr_157653[16] = inst_157598__$1);
return statearr_157653;
})();if(cljs.core.truth_(inst_157602))
{var statearr_157654_157696 = state_157639__$1;(statearr_157654_157696[1] = 11);
} else
{var statearr_157655_157697 = state_157639__$1;(statearr_157655_157697[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 11))
{var inst_157598 = (state_157639[16]);var inst_157604 = (inst_157598 == null);var state_157639__$1 = state_157639;if(cljs.core.truth_(inst_157604))
{var statearr_157656_157698 = state_157639__$1;(statearr_157656_157698[1] = 14);
} else
{var statearr_157657_157699 = state_157639__$1;(statearr_157657_157699[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 12))
{var inst_157613 = (state_157639[17]);var inst_157594 = (state_157639[13]);var inst_157599 = (state_157639[15]);var inst_157613__$1 = inst_157594.call(null,inst_157599);var state_157639__$1 = (function (){var statearr_157658 = state_157639;(statearr_157658[17] = inst_157613__$1);
return statearr_157658;
})();if(cljs.core.truth_(inst_157613__$1))
{var statearr_157659_157700 = state_157639__$1;(statearr_157659_157700[1] = 17);
} else
{var statearr_157660_157701 = state_157639__$1;(statearr_157660_157701[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 13))
{var inst_157635 = (state_157639[2]);var state_157639__$1 = state_157639;var statearr_157661_157702 = state_157639__$1;(statearr_157661_157702[2] = inst_157635);
(statearr_157661_157702[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 14))
{var inst_157599 = (state_157639[15]);var inst_157606 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_157599);var state_157639__$1 = state_157639;var statearr_157662_157703 = state_157639__$1;(statearr_157662_157703[2] = inst_157606);
(statearr_157662_157703[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 15))
{var state_157639__$1 = state_157639;var statearr_157663_157704 = state_157639__$1;(statearr_157663_157704[2] = null);
(statearr_157663_157704[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 16))
{var inst_157609 = (state_157639[2]);var inst_157610 = calc_state.call(null);var inst_157583 = inst_157610;var state_157639__$1 = (function (){var statearr_157664 = state_157639;(statearr_157664[8] = inst_157583);
(statearr_157664[18] = inst_157609);
return statearr_157664;
})();var statearr_157665_157705 = state_157639__$1;(statearr_157665_157705[2] = null);
(statearr_157665_157705[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 17))
{var inst_157613 = (state_157639[17]);var state_157639__$1 = state_157639;var statearr_157666_157706 = state_157639__$1;(statearr_157666_157706[2] = inst_157613);
(statearr_157666_157706[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 18))
{var inst_157594 = (state_157639[13]);var inst_157593 = (state_157639[14]);var inst_157599 = (state_157639[15]);var inst_157616 = cljs.core.empty_QMARK_.call(null,inst_157594);var inst_157617 = inst_157593.call(null,inst_157599);var inst_157618 = cljs.core.not.call(null,inst_157617);var inst_157619 = (inst_157616) && (inst_157618);var state_157639__$1 = state_157639;var statearr_157667_157707 = state_157639__$1;(statearr_157667_157707[2] = inst_157619);
(statearr_157667_157707[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 19))
{var inst_157621 = (state_157639[2]);var state_157639__$1 = state_157639;if(cljs.core.truth_(inst_157621))
{var statearr_157668_157708 = state_157639__$1;(statearr_157668_157708[1] = 20);
} else
{var statearr_157669_157709 = state_157639__$1;(statearr_157669_157709[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 20))
{var inst_157598 = (state_157639[16]);var state_157639__$1 = state_157639;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_157639__$1,23,out,inst_157598);
} else
{if((state_val_157640 === 21))
{var inst_157591 = (state_157639[12]);var inst_157583 = inst_157591;var state_157639__$1 = (function (){var statearr_157670 = state_157639;(statearr_157670[8] = inst_157583);
return statearr_157670;
})();var statearr_157671_157710 = state_157639__$1;(statearr_157671_157710[2] = null);
(statearr_157671_157710[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 22))
{var inst_157633 = (state_157639[2]);var state_157639__$1 = state_157639;var statearr_157672_157711 = state_157639__$1;(statearr_157672_157711[2] = inst_157633);
(statearr_157672_157711[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 23))
{var inst_157624 = (state_157639[2]);var state_157639__$1 = state_157639;if(cljs.core.truth_(inst_157624))
{var statearr_157673_157712 = state_157639__$1;(statearr_157673_157712[1] = 24);
} else
{var statearr_157674_157713 = state_157639__$1;(statearr_157674_157713[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 24))
{var inst_157591 = (state_157639[12]);var inst_157583 = inst_157591;var state_157639__$1 = (function (){var statearr_157675 = state_157639;(statearr_157675[8] = inst_157583);
return statearr_157675;
})();var statearr_157676_157714 = state_157639__$1;(statearr_157676_157714[2] = null);
(statearr_157676_157714[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 25))
{var state_157639__$1 = state_157639;var statearr_157677_157715 = state_157639__$1;(statearr_157677_157715[2] = null);
(statearr_157677_157715[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157640 === 26))
{var inst_157629 = (state_157639[2]);var state_157639__$1 = state_157639;var statearr_157678_157716 = state_157639__$1;(statearr_157678_157716[2] = inst_157629);
(statearr_157678_157716[1] = 22);
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
var state_machine__5525__auto____0 = (function (){var statearr_157682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_157682[0] = state_machine__5525__auto__);
(statearr_157682[1] = 1);
return statearr_157682;
});
var state_machine__5525__auto____1 = (function (state_157639){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_157639);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e157683){if((e157683 instanceof Object))
{var ex__5528__auto__ = e157683;var statearr_157684_157717 = state_157639;(statearr_157684_157717[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157639);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e157683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__157718 = state_157639;
state_157639 = G__157718;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_157639){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_157639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_157685 = f__5540__auto__.call(null);(statearr_157685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___157686);
return statearr_157685;
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
cljs.core.async.Pub = (function (){var obj157720 = {};return obj157720;
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
return (function (p1__157721_SHARP_){if(cljs.core.truth_(p1__157721_SHARP_.call(null,topic)))
{return p1__157721_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__157721_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t157836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t157836 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta157837){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta157837 = meta157837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t157836.cljs$lang$type = true;
cljs.core.async.t157836.cljs$lang$ctorStr = "cljs.core.async/t157836";
cljs.core.async.t157836.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t157836");
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t157836.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t157836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_157838){var self__ = this;
var _157838__$1 = this;return self__.meta157837;
});})(mults,ensure_mult))
;
cljs.core.async.t157836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_157838,meta157837__$1){var self__ = this;
var _157838__$1 = this;return (new cljs.core.async.t157836(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta157837__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t157836 = ((function (mults,ensure_mult){
return (function __GT_t157836(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta157837){return (new cljs.core.async.t157836(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta157837));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t157836(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5539__auto___157950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_157906){var state_val_157907 = (state_157906[1]);if((state_val_157907 === 1))
{var state_157906__$1 = state_157906;var statearr_157908_157951 = state_157906__$1;(statearr_157908_157951[2] = null);
(statearr_157908_157951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 2))
{var state_157906__$1 = state_157906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157906__$1,4,ch);
} else
{if((state_val_157907 === 3))
{var inst_157904 = (state_157906[2]);var state_157906__$1 = state_157906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157906__$1,inst_157904);
} else
{if((state_val_157907 === 4))
{var inst_157841 = (state_157906[7]);var inst_157841__$1 = (state_157906[2]);var inst_157842 = (inst_157841__$1 == null);var state_157906__$1 = (function (){var statearr_157909 = state_157906;(statearr_157909[7] = inst_157841__$1);
return statearr_157909;
})();if(cljs.core.truth_(inst_157842))
{var statearr_157910_157952 = state_157906__$1;(statearr_157910_157952[1] = 5);
} else
{var statearr_157911_157953 = state_157906__$1;(statearr_157911_157953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 5))
{var inst_157848 = cljs.core.deref.call(null,mults);var inst_157849 = cljs.core.vals.call(null,inst_157848);var inst_157850 = cljs.core.seq.call(null,inst_157849);var inst_157851 = inst_157850;var inst_157852 = null;var inst_157853 = 0;var inst_157854 = 0;var state_157906__$1 = (function (){var statearr_157912 = state_157906;(statearr_157912[8] = inst_157853);
(statearr_157912[9] = inst_157854);
(statearr_157912[10] = inst_157852);
(statearr_157912[11] = inst_157851);
return statearr_157912;
})();var statearr_157913_157954 = state_157906__$1;(statearr_157913_157954[2] = null);
(statearr_157913_157954[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 6))
{var inst_157889 = (state_157906[12]);var inst_157841 = (state_157906[7]);var inst_157889__$1 = topic_fn.call(null,inst_157841);var inst_157890 = cljs.core.deref.call(null,mults);var inst_157891 = cljs.core.get.call(null,inst_157890,inst_157889__$1);var inst_157892 = cljs.core.async.muxch_STAR_.call(null,inst_157891);var state_157906__$1 = (function (){var statearr_157914 = state_157906;(statearr_157914[12] = inst_157889__$1);
return statearr_157914;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_157906__$1,19,inst_157892,inst_157841);
} else
{if((state_val_157907 === 7))
{var inst_157902 = (state_157906[2]);var state_157906__$1 = state_157906;var statearr_157915_157955 = state_157906__$1;(statearr_157915_157955[2] = inst_157902);
(statearr_157915_157955[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 8))
{var inst_157853 = (state_157906[8]);var inst_157854 = (state_157906[9]);var inst_157856 = (inst_157854 < inst_157853);var inst_157857 = inst_157856;var state_157906__$1 = state_157906;if(cljs.core.truth_(inst_157857))
{var statearr_157919_157956 = state_157906__$1;(statearr_157919_157956[1] = 10);
} else
{var statearr_157920_157957 = state_157906__$1;(statearr_157920_157957[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 9))
{var inst_157887 = (state_157906[2]);var state_157906__$1 = state_157906;var statearr_157921_157958 = state_157906__$1;(statearr_157921_157958[2] = inst_157887);
(statearr_157921_157958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 10))
{var inst_157853 = (state_157906[8]);var inst_157854 = (state_157906[9]);var inst_157852 = (state_157906[10]);var inst_157851 = (state_157906[11]);var inst_157859 = cljs.core._nth.call(null,inst_157852,inst_157854);var inst_157860 = cljs.core.async.muxch_STAR_.call(null,inst_157859);var inst_157861 = cljs.core.async.close_BANG_.call(null,inst_157860);var inst_157862 = (inst_157854 + 1);var tmp157916 = inst_157853;var tmp157917 = inst_157852;var tmp157918 = inst_157851;var inst_157851__$1 = tmp157918;var inst_157852__$1 = tmp157917;var inst_157853__$1 = tmp157916;var inst_157854__$1 = inst_157862;var state_157906__$1 = (function (){var statearr_157922 = state_157906;(statearr_157922[8] = inst_157853__$1);
(statearr_157922[9] = inst_157854__$1);
(statearr_157922[13] = inst_157861);
(statearr_157922[10] = inst_157852__$1);
(statearr_157922[11] = inst_157851__$1);
return statearr_157922;
})();var statearr_157923_157959 = state_157906__$1;(statearr_157923_157959[2] = null);
(statearr_157923_157959[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 11))
{var inst_157851 = (state_157906[11]);var inst_157865 = (state_157906[14]);var inst_157865__$1 = cljs.core.seq.call(null,inst_157851);var state_157906__$1 = (function (){var statearr_157924 = state_157906;(statearr_157924[14] = inst_157865__$1);
return statearr_157924;
})();if(inst_157865__$1)
{var statearr_157925_157960 = state_157906__$1;(statearr_157925_157960[1] = 13);
} else
{var statearr_157926_157961 = state_157906__$1;(statearr_157926_157961[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 12))
{var inst_157885 = (state_157906[2]);var state_157906__$1 = state_157906;var statearr_157927_157962 = state_157906__$1;(statearr_157927_157962[2] = inst_157885);
(statearr_157927_157962[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 13))
{var inst_157865 = (state_157906[14]);var inst_157867 = cljs.core.chunked_seq_QMARK_.call(null,inst_157865);var state_157906__$1 = state_157906;if(inst_157867)
{var statearr_157928_157963 = state_157906__$1;(statearr_157928_157963[1] = 16);
} else
{var statearr_157929_157964 = state_157906__$1;(statearr_157929_157964[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 14))
{var state_157906__$1 = state_157906;var statearr_157930_157965 = state_157906__$1;(statearr_157930_157965[2] = null);
(statearr_157930_157965[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 15))
{var inst_157883 = (state_157906[2]);var state_157906__$1 = state_157906;var statearr_157931_157966 = state_157906__$1;(statearr_157931_157966[2] = inst_157883);
(statearr_157931_157966[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 16))
{var inst_157865 = (state_157906[14]);var inst_157869 = cljs.core.chunk_first.call(null,inst_157865);var inst_157870 = cljs.core.chunk_rest.call(null,inst_157865);var inst_157871 = cljs.core.count.call(null,inst_157869);var inst_157851 = inst_157870;var inst_157852 = inst_157869;var inst_157853 = inst_157871;var inst_157854 = 0;var state_157906__$1 = (function (){var statearr_157932 = state_157906;(statearr_157932[8] = inst_157853);
(statearr_157932[9] = inst_157854);
(statearr_157932[10] = inst_157852);
(statearr_157932[11] = inst_157851);
return statearr_157932;
})();var statearr_157933_157967 = state_157906__$1;(statearr_157933_157967[2] = null);
(statearr_157933_157967[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 17))
{var inst_157865 = (state_157906[14]);var inst_157874 = cljs.core.first.call(null,inst_157865);var inst_157875 = cljs.core.async.muxch_STAR_.call(null,inst_157874);var inst_157876 = cljs.core.async.close_BANG_.call(null,inst_157875);var inst_157877 = cljs.core.next.call(null,inst_157865);var inst_157851 = inst_157877;var inst_157852 = null;var inst_157853 = 0;var inst_157854 = 0;var state_157906__$1 = (function (){var statearr_157934 = state_157906;(statearr_157934[8] = inst_157853);
(statearr_157934[9] = inst_157854);
(statearr_157934[10] = inst_157852);
(statearr_157934[11] = inst_157851);
(statearr_157934[15] = inst_157876);
return statearr_157934;
})();var statearr_157935_157968 = state_157906__$1;(statearr_157935_157968[2] = null);
(statearr_157935_157968[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 18))
{var inst_157880 = (state_157906[2]);var state_157906__$1 = state_157906;var statearr_157936_157969 = state_157906__$1;(statearr_157936_157969[2] = inst_157880);
(statearr_157936_157969[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 19))
{var inst_157894 = (state_157906[2]);var state_157906__$1 = state_157906;if(cljs.core.truth_(inst_157894))
{var statearr_157937_157970 = state_157906__$1;(statearr_157937_157970[1] = 20);
} else
{var statearr_157938_157971 = state_157906__$1;(statearr_157938_157971[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 20))
{var state_157906__$1 = state_157906;var statearr_157939_157972 = state_157906__$1;(statearr_157939_157972[2] = null);
(statearr_157939_157972[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 21))
{var inst_157889 = (state_157906[12]);var inst_157897 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_157889);var state_157906__$1 = state_157906;var statearr_157940_157973 = state_157906__$1;(statearr_157940_157973[2] = inst_157897);
(statearr_157940_157973[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_157907 === 22))
{var inst_157899 = (state_157906[2]);var state_157906__$1 = (function (){var statearr_157941 = state_157906;(statearr_157941[16] = inst_157899);
return statearr_157941;
})();var statearr_157942_157974 = state_157906__$1;(statearr_157942_157974[2] = null);
(statearr_157942_157974[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_157946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_157946[0] = state_machine__5525__auto__);
(statearr_157946[1] = 1);
return statearr_157946;
});
var state_machine__5525__auto____1 = (function (state_157906){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_157906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e157947){if((e157947 instanceof Object))
{var ex__5528__auto__ = e157947;var statearr_157948_157975 = state_157906;(statearr_157948_157975[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157906);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e157947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__157976 = state_157906;
state_157906 = G__157976;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_157906){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_157906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_157949 = f__5540__auto__.call(null);(statearr_157949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___157950);
return statearr_157949;
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
,cljs.core.range.call(null,cnt));var c__5539__auto___158113 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_158083){var state_val_158084 = (state_158083[1]);if((state_val_158084 === 1))
{var state_158083__$1 = state_158083;var statearr_158085_158114 = state_158083__$1;(statearr_158085_158114[2] = null);
(statearr_158085_158114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 2))
{var inst_158046 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_158047 = 0;var state_158083__$1 = (function (){var statearr_158086 = state_158083;(statearr_158086[7] = inst_158046);
(statearr_158086[8] = inst_158047);
return statearr_158086;
})();var statearr_158087_158115 = state_158083__$1;(statearr_158087_158115[2] = null);
(statearr_158087_158115[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 3))
{var inst_158081 = (state_158083[2]);var state_158083__$1 = state_158083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158083__$1,inst_158081);
} else
{if((state_val_158084 === 4))
{var inst_158047 = (state_158083[8]);var inst_158049 = (inst_158047 < cnt);var state_158083__$1 = state_158083;if(cljs.core.truth_(inst_158049))
{var statearr_158088_158116 = state_158083__$1;(statearr_158088_158116[1] = 6);
} else
{var statearr_158089_158117 = state_158083__$1;(statearr_158089_158117[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 5))
{var inst_158067 = (state_158083[2]);var state_158083__$1 = (function (){var statearr_158090 = state_158083;(statearr_158090[9] = inst_158067);
return statearr_158090;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158083__$1,12,dchan);
} else
{if((state_val_158084 === 6))
{var state_158083__$1 = state_158083;var statearr_158091_158118 = state_158083__$1;(statearr_158091_158118[2] = null);
(statearr_158091_158118[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 7))
{var state_158083__$1 = state_158083;var statearr_158092_158119 = state_158083__$1;(statearr_158092_158119[2] = null);
(statearr_158092_158119[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 8))
{var inst_158065 = (state_158083[2]);var state_158083__$1 = state_158083;var statearr_158093_158120 = state_158083__$1;(statearr_158093_158120[2] = inst_158065);
(statearr_158093_158120[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 9))
{var inst_158047 = (state_158083[8]);var inst_158060 = (state_158083[2]);var inst_158061 = (inst_158047 + 1);var inst_158047__$1 = inst_158061;var state_158083__$1 = (function (){var statearr_158094 = state_158083;(statearr_158094[10] = inst_158060);
(statearr_158094[8] = inst_158047__$1);
return statearr_158094;
})();var statearr_158095_158121 = state_158083__$1;(statearr_158095_158121[2] = null);
(statearr_158095_158121[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 10))
{var inst_158051 = (state_158083[2]);var inst_158052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_158083__$1 = (function (){var statearr_158096 = state_158083;(statearr_158096[11] = inst_158051);
return statearr_158096;
})();var statearr_158097_158122 = state_158083__$1;(statearr_158097_158122[2] = inst_158052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 11))
{var inst_158047 = (state_158083[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_158083,10,Object,null,9);var inst_158056 = chs__$1.call(null,inst_158047);var inst_158057 = done.call(null,inst_158047);var inst_158058 = cljs.core.async.take_BANG_.call(null,inst_158056,inst_158057);var state_158083__$1 = state_158083;var statearr_158098_158123 = state_158083__$1;(statearr_158098_158123[2] = inst_158058);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 12))
{var inst_158069 = (state_158083[12]);var inst_158069__$1 = (state_158083[2]);var inst_158070 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_158069__$1);var state_158083__$1 = (function (){var statearr_158099 = state_158083;(statearr_158099[12] = inst_158069__$1);
return statearr_158099;
})();if(cljs.core.truth_(inst_158070))
{var statearr_158100_158124 = state_158083__$1;(statearr_158100_158124[1] = 13);
} else
{var statearr_158101_158125 = state_158083__$1;(statearr_158101_158125[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 13))
{var inst_158072 = cljs.core.async.close_BANG_.call(null,out);var state_158083__$1 = state_158083;var statearr_158102_158126 = state_158083__$1;(statearr_158102_158126[2] = inst_158072);
(statearr_158102_158126[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 14))
{var inst_158069 = (state_158083[12]);var inst_158074 = cljs.core.apply.call(null,f,inst_158069);var state_158083__$1 = state_158083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158083__$1,16,out,inst_158074);
} else
{if((state_val_158084 === 15))
{var inst_158079 = (state_158083[2]);var state_158083__$1 = state_158083;var statearr_158103_158127 = state_158083__$1;(statearr_158103_158127[2] = inst_158079);
(statearr_158103_158127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158084 === 16))
{var inst_158076 = (state_158083[2]);var state_158083__$1 = (function (){var statearr_158104 = state_158083;(statearr_158104[13] = inst_158076);
return statearr_158104;
})();var statearr_158105_158128 = state_158083__$1;(statearr_158105_158128[2] = null);
(statearr_158105_158128[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_158109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_158109[0] = state_machine__5525__auto__);
(statearr_158109[1] = 1);
return statearr_158109;
});
var state_machine__5525__auto____1 = (function (state_158083){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_158083);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e158110){if((e158110 instanceof Object))
{var ex__5528__auto__ = e158110;var statearr_158111_158129 = state_158083;(statearr_158111_158129[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158130 = state_158083;
state_158083 = G__158130;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_158083){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_158083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_158112 = f__5540__auto__.call(null);(statearr_158112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___158113);
return statearr_158112;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___158238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_158214){var state_val_158215 = (state_158214[1]);if((state_val_158215 === 1))
{var inst_158185 = cljs.core.vec.call(null,chs);var inst_158186 = inst_158185;var state_158214__$1 = (function (){var statearr_158216 = state_158214;(statearr_158216[7] = inst_158186);
return statearr_158216;
})();var statearr_158217_158239 = state_158214__$1;(statearr_158217_158239[2] = null);
(statearr_158217_158239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 2))
{var inst_158186 = (state_158214[7]);var inst_158188 = cljs.core.count.call(null,inst_158186);var inst_158189 = (inst_158188 > 0);var state_158214__$1 = state_158214;if(cljs.core.truth_(inst_158189))
{var statearr_158218_158240 = state_158214__$1;(statearr_158218_158240[1] = 4);
} else
{var statearr_158219_158241 = state_158214__$1;(statearr_158219_158241[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 3))
{var inst_158212 = (state_158214[2]);var state_158214__$1 = state_158214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158214__$1,inst_158212);
} else
{if((state_val_158215 === 4))
{var inst_158186 = (state_158214[7]);var state_158214__$1 = state_158214;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_158214__$1,7,inst_158186);
} else
{if((state_val_158215 === 5))
{var inst_158208 = cljs.core.async.close_BANG_.call(null,out);var state_158214__$1 = state_158214;var statearr_158220_158242 = state_158214__$1;(statearr_158220_158242[2] = inst_158208);
(statearr_158220_158242[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 6))
{var inst_158210 = (state_158214[2]);var state_158214__$1 = state_158214;var statearr_158221_158243 = state_158214__$1;(statearr_158221_158243[2] = inst_158210);
(statearr_158221_158243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 7))
{var inst_158194 = (state_158214[8]);var inst_158193 = (state_158214[9]);var inst_158193__$1 = (state_158214[2]);var inst_158194__$1 = cljs.core.nth.call(null,inst_158193__$1,0,null);var inst_158195 = cljs.core.nth.call(null,inst_158193__$1,1,null);var inst_158196 = (inst_158194__$1 == null);var state_158214__$1 = (function (){var statearr_158222 = state_158214;(statearr_158222[8] = inst_158194__$1);
(statearr_158222[9] = inst_158193__$1);
(statearr_158222[10] = inst_158195);
return statearr_158222;
})();if(cljs.core.truth_(inst_158196))
{var statearr_158223_158244 = state_158214__$1;(statearr_158223_158244[1] = 8);
} else
{var statearr_158224_158245 = state_158214__$1;(statearr_158224_158245[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 8))
{var inst_158186 = (state_158214[7]);var inst_158194 = (state_158214[8]);var inst_158193 = (state_158214[9]);var inst_158195 = (state_158214[10]);var inst_158198 = (function (){var c = inst_158195;var v = inst_158194;var vec__158191 = inst_158193;var cs = inst_158186;return ((function (c,v,vec__158191,cs,inst_158186,inst_158194,inst_158193,inst_158195,state_val_158215){
return (function (p1__158131_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__158131_SHARP_);
});
;})(c,v,vec__158191,cs,inst_158186,inst_158194,inst_158193,inst_158195,state_val_158215))
})();var inst_158199 = cljs.core.filterv.call(null,inst_158198,inst_158186);var inst_158186__$1 = inst_158199;var state_158214__$1 = (function (){var statearr_158225 = state_158214;(statearr_158225[7] = inst_158186__$1);
return statearr_158225;
})();var statearr_158226_158246 = state_158214__$1;(statearr_158226_158246[2] = null);
(statearr_158226_158246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 9))
{var inst_158194 = (state_158214[8]);var state_158214__$1 = state_158214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158214__$1,11,out,inst_158194);
} else
{if((state_val_158215 === 10))
{var inst_158206 = (state_158214[2]);var state_158214__$1 = state_158214;var statearr_158228_158247 = state_158214__$1;(statearr_158228_158247[2] = inst_158206);
(statearr_158228_158247[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158215 === 11))
{var inst_158186 = (state_158214[7]);var inst_158203 = (state_158214[2]);var tmp158227 = inst_158186;var inst_158186__$1 = tmp158227;var state_158214__$1 = (function (){var statearr_158229 = state_158214;(statearr_158229[7] = inst_158186__$1);
(statearr_158229[11] = inst_158203);
return statearr_158229;
})();var statearr_158230_158248 = state_158214__$1;(statearr_158230_158248[2] = null);
(statearr_158230_158248[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_158234 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_158234[0] = state_machine__5525__auto__);
(statearr_158234[1] = 1);
return statearr_158234;
});
var state_machine__5525__auto____1 = (function (state_158214){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_158214);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e158235){if((e158235 instanceof Object))
{var ex__5528__auto__ = e158235;var statearr_158236_158249 = state_158214;(statearr_158236_158249[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158250 = state_158214;
state_158214 = G__158250;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_158214){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_158214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_158237 = f__5540__auto__.call(null);(statearr_158237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___158238);
return statearr_158237;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___158343 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_158320){var state_val_158321 = (state_158320[1]);if((state_val_158321 === 1))
{var inst_158297 = 0;var state_158320__$1 = (function (){var statearr_158322 = state_158320;(statearr_158322[7] = inst_158297);
return statearr_158322;
})();var statearr_158323_158344 = state_158320__$1;(statearr_158323_158344[2] = null);
(statearr_158323_158344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 2))
{var inst_158297 = (state_158320[7]);var inst_158299 = (inst_158297 < n);var state_158320__$1 = state_158320;if(cljs.core.truth_(inst_158299))
{var statearr_158324_158345 = state_158320__$1;(statearr_158324_158345[1] = 4);
} else
{var statearr_158325_158346 = state_158320__$1;(statearr_158325_158346[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 3))
{var inst_158317 = (state_158320[2]);var inst_158318 = cljs.core.async.close_BANG_.call(null,out);var state_158320__$1 = (function (){var statearr_158326 = state_158320;(statearr_158326[8] = inst_158317);
return statearr_158326;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158320__$1,inst_158318);
} else
{if((state_val_158321 === 4))
{var state_158320__$1 = state_158320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158320__$1,7,ch);
} else
{if((state_val_158321 === 5))
{var state_158320__$1 = state_158320;var statearr_158327_158347 = state_158320__$1;(statearr_158327_158347[2] = null);
(statearr_158327_158347[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 6))
{var inst_158315 = (state_158320[2]);var state_158320__$1 = state_158320;var statearr_158328_158348 = state_158320__$1;(statearr_158328_158348[2] = inst_158315);
(statearr_158328_158348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 7))
{var inst_158302 = (state_158320[9]);var inst_158302__$1 = (state_158320[2]);var inst_158303 = (inst_158302__$1 == null);var inst_158304 = cljs.core.not.call(null,inst_158303);var state_158320__$1 = (function (){var statearr_158329 = state_158320;(statearr_158329[9] = inst_158302__$1);
return statearr_158329;
})();if(inst_158304)
{var statearr_158330_158349 = state_158320__$1;(statearr_158330_158349[1] = 8);
} else
{var statearr_158331_158350 = state_158320__$1;(statearr_158331_158350[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 8))
{var inst_158302 = (state_158320[9]);var state_158320__$1 = state_158320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158320__$1,11,out,inst_158302);
} else
{if((state_val_158321 === 9))
{var state_158320__$1 = state_158320;var statearr_158332_158351 = state_158320__$1;(statearr_158332_158351[2] = null);
(statearr_158332_158351[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 10))
{var inst_158312 = (state_158320[2]);var state_158320__$1 = state_158320;var statearr_158333_158352 = state_158320__$1;(statearr_158333_158352[2] = inst_158312);
(statearr_158333_158352[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158321 === 11))
{var inst_158297 = (state_158320[7]);var inst_158307 = (state_158320[2]);var inst_158308 = (inst_158297 + 1);var inst_158297__$1 = inst_158308;var state_158320__$1 = (function (){var statearr_158334 = state_158320;(statearr_158334[10] = inst_158307);
(statearr_158334[7] = inst_158297__$1);
return statearr_158334;
})();var statearr_158335_158353 = state_158320__$1;(statearr_158335_158353[2] = null);
(statearr_158335_158353[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_158339 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_158339[0] = state_machine__5525__auto__);
(statearr_158339[1] = 1);
return statearr_158339;
});
var state_machine__5525__auto____1 = (function (state_158320){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_158320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e158340){if((e158340 instanceof Object))
{var ex__5528__auto__ = e158340;var statearr_158341_158354 = state_158320;(statearr_158341_158354[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158355 = state_158320;
state_158320 = G__158355;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_158320){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_158320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_158342 = f__5540__auto__.call(null);(statearr_158342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___158343);
return statearr_158342;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___158452 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_158427){var state_val_158428 = (state_158427[1]);if((state_val_158428 === 1))
{var inst_158404 = null;var state_158427__$1 = (function (){var statearr_158429 = state_158427;(statearr_158429[7] = inst_158404);
return statearr_158429;
})();var statearr_158430_158453 = state_158427__$1;(statearr_158430_158453[2] = null);
(statearr_158430_158453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 2))
{var state_158427__$1 = state_158427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158427__$1,4,ch);
} else
{if((state_val_158428 === 3))
{var inst_158424 = (state_158427[2]);var inst_158425 = cljs.core.async.close_BANG_.call(null,out);var state_158427__$1 = (function (){var statearr_158431 = state_158427;(statearr_158431[8] = inst_158424);
return statearr_158431;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158427__$1,inst_158425);
} else
{if((state_val_158428 === 4))
{var inst_158407 = (state_158427[9]);var inst_158407__$1 = (state_158427[2]);var inst_158408 = (inst_158407__$1 == null);var inst_158409 = cljs.core.not.call(null,inst_158408);var state_158427__$1 = (function (){var statearr_158432 = state_158427;(statearr_158432[9] = inst_158407__$1);
return statearr_158432;
})();if(inst_158409)
{var statearr_158433_158454 = state_158427__$1;(statearr_158433_158454[1] = 5);
} else
{var statearr_158434_158455 = state_158427__$1;(statearr_158434_158455[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 5))
{var inst_158407 = (state_158427[9]);var inst_158404 = (state_158427[7]);var inst_158411 = cljs.core._EQ_.call(null,inst_158407,inst_158404);var state_158427__$1 = state_158427;if(inst_158411)
{var statearr_158435_158456 = state_158427__$1;(statearr_158435_158456[1] = 8);
} else
{var statearr_158436_158457 = state_158427__$1;(statearr_158436_158457[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 6))
{var state_158427__$1 = state_158427;var statearr_158438_158458 = state_158427__$1;(statearr_158438_158458[2] = null);
(statearr_158438_158458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 7))
{var inst_158422 = (state_158427[2]);var state_158427__$1 = state_158427;var statearr_158439_158459 = state_158427__$1;(statearr_158439_158459[2] = inst_158422);
(statearr_158439_158459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 8))
{var inst_158404 = (state_158427[7]);var tmp158437 = inst_158404;var inst_158404__$1 = tmp158437;var state_158427__$1 = (function (){var statearr_158440 = state_158427;(statearr_158440[7] = inst_158404__$1);
return statearr_158440;
})();var statearr_158441_158460 = state_158427__$1;(statearr_158441_158460[2] = null);
(statearr_158441_158460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 9))
{var inst_158407 = (state_158427[9]);var state_158427__$1 = state_158427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158427__$1,11,out,inst_158407);
} else
{if((state_val_158428 === 10))
{var inst_158419 = (state_158427[2]);var state_158427__$1 = state_158427;var statearr_158442_158461 = state_158427__$1;(statearr_158442_158461[2] = inst_158419);
(statearr_158442_158461[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158428 === 11))
{var inst_158407 = (state_158427[9]);var inst_158416 = (state_158427[2]);var inst_158404 = inst_158407;var state_158427__$1 = (function (){var statearr_158443 = state_158427;(statearr_158443[10] = inst_158416);
(statearr_158443[7] = inst_158404);
return statearr_158443;
})();var statearr_158444_158462 = state_158427__$1;(statearr_158444_158462[2] = null);
(statearr_158444_158462[1] = 2);
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
var state_machine__5525__auto____0 = (function (){var statearr_158448 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_158448[0] = state_machine__5525__auto__);
(statearr_158448[1] = 1);
return statearr_158448;
});
var state_machine__5525__auto____1 = (function (state_158427){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_158427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e158449){if((e158449 instanceof Object))
{var ex__5528__auto__ = e158449;var statearr_158450_158463 = state_158427;(statearr_158450_158463[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158464 = state_158427;
state_158427 = G__158464;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_158427){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_158427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_158451 = f__5540__auto__.call(null);(statearr_158451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___158452);
return statearr_158451;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___158599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_158569){var state_val_158570 = (state_158569[1]);if((state_val_158570 === 1))
{var inst_158532 = (new Array(n));var inst_158533 = inst_158532;var inst_158534 = 0;var state_158569__$1 = (function (){var statearr_158571 = state_158569;(statearr_158571[7] = inst_158534);
(statearr_158571[8] = inst_158533);
return statearr_158571;
})();var statearr_158572_158600 = state_158569__$1;(statearr_158572_158600[2] = null);
(statearr_158572_158600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 2))
{var state_158569__$1 = state_158569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158569__$1,4,ch);
} else
{if((state_val_158570 === 3))
{var inst_158567 = (state_158569[2]);var state_158569__$1 = state_158569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158569__$1,inst_158567);
} else
{if((state_val_158570 === 4))
{var inst_158537 = (state_158569[9]);var inst_158537__$1 = (state_158569[2]);var inst_158538 = (inst_158537__$1 == null);var inst_158539 = cljs.core.not.call(null,inst_158538);var state_158569__$1 = (function (){var statearr_158573 = state_158569;(statearr_158573[9] = inst_158537__$1);
return statearr_158573;
})();if(inst_158539)
{var statearr_158574_158601 = state_158569__$1;(statearr_158574_158601[1] = 5);
} else
{var statearr_158575_158602 = state_158569__$1;(statearr_158575_158602[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 5))
{var inst_158537 = (state_158569[9]);var inst_158542 = (state_158569[10]);var inst_158534 = (state_158569[7]);var inst_158533 = (state_158569[8]);var inst_158541 = (inst_158533[inst_158534] = inst_158537);var inst_158542__$1 = (inst_158534 + 1);var inst_158543 = (inst_158542__$1 < n);var state_158569__$1 = (function (){var statearr_158576 = state_158569;(statearr_158576[11] = inst_158541);
(statearr_158576[10] = inst_158542__$1);
return statearr_158576;
})();if(cljs.core.truth_(inst_158543))
{var statearr_158577_158603 = state_158569__$1;(statearr_158577_158603[1] = 8);
} else
{var statearr_158578_158604 = state_158569__$1;(statearr_158578_158604[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 6))
{var inst_158534 = (state_158569[7]);var inst_158555 = (inst_158534 > 0);var state_158569__$1 = state_158569;if(cljs.core.truth_(inst_158555))
{var statearr_158580_158605 = state_158569__$1;(statearr_158580_158605[1] = 12);
} else
{var statearr_158581_158606 = state_158569__$1;(statearr_158581_158606[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 7))
{var inst_158565 = (state_158569[2]);var state_158569__$1 = state_158569;var statearr_158582_158607 = state_158569__$1;(statearr_158582_158607[2] = inst_158565);
(statearr_158582_158607[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 8))
{var inst_158542 = (state_158569[10]);var inst_158533 = (state_158569[8]);var tmp158579 = inst_158533;var inst_158533__$1 = tmp158579;var inst_158534 = inst_158542;var state_158569__$1 = (function (){var statearr_158583 = state_158569;(statearr_158583[7] = inst_158534);
(statearr_158583[8] = inst_158533__$1);
return statearr_158583;
})();var statearr_158584_158608 = state_158569__$1;(statearr_158584_158608[2] = null);
(statearr_158584_158608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 9))
{var inst_158533 = (state_158569[8]);var inst_158547 = cljs.core.vec.call(null,inst_158533);var state_158569__$1 = state_158569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158569__$1,11,out,inst_158547);
} else
{if((state_val_158570 === 10))
{var inst_158553 = (state_158569[2]);var state_158569__$1 = state_158569;var statearr_158585_158609 = state_158569__$1;(statearr_158585_158609[2] = inst_158553);
(statearr_158585_158609[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 11))
{var inst_158549 = (state_158569[2]);var inst_158550 = (new Array(n));var inst_158533 = inst_158550;var inst_158534 = 0;var state_158569__$1 = (function (){var statearr_158586 = state_158569;(statearr_158586[12] = inst_158549);
(statearr_158586[7] = inst_158534);
(statearr_158586[8] = inst_158533);
return statearr_158586;
})();var statearr_158587_158610 = state_158569__$1;(statearr_158587_158610[2] = null);
(statearr_158587_158610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 12))
{var inst_158533 = (state_158569[8]);var inst_158557 = cljs.core.vec.call(null,inst_158533);var state_158569__$1 = state_158569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158569__$1,15,out,inst_158557);
} else
{if((state_val_158570 === 13))
{var state_158569__$1 = state_158569;var statearr_158588_158611 = state_158569__$1;(statearr_158588_158611[2] = null);
(statearr_158588_158611[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 14))
{var inst_158562 = (state_158569[2]);var inst_158563 = cljs.core.async.close_BANG_.call(null,out);var state_158569__$1 = (function (){var statearr_158589 = state_158569;(statearr_158589[13] = inst_158562);
return statearr_158589;
})();var statearr_158590_158612 = state_158569__$1;(statearr_158590_158612[2] = inst_158563);
(statearr_158590_158612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158570 === 15))
{var inst_158559 = (state_158569[2]);var state_158569__$1 = state_158569;var statearr_158591_158613 = state_158569__$1;(statearr_158591_158613[2] = inst_158559);
(statearr_158591_158613[1] = 14);
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
var state_machine__5525__auto____0 = (function (){var statearr_158595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_158595[0] = state_machine__5525__auto__);
(statearr_158595[1] = 1);
return statearr_158595;
});
var state_machine__5525__auto____1 = (function (state_158569){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_158569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e158596){if((e158596 instanceof Object))
{var ex__5528__auto__ = e158596;var statearr_158597_158614 = state_158569;(statearr_158597_158614[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158615 = state_158569;
state_158569 = G__158615;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_158569){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_158569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_158598 = f__5540__auto__.call(null);(statearr_158598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___158599);
return statearr_158598;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5539__auto___158758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5540__auto__ = (function (){var switch__5524__auto__ = (function (state_158728){var state_val_158729 = (state_158728[1]);if((state_val_158729 === 1))
{var inst_158687 = [];var inst_158688 = inst_158687;var inst_158689 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_158728__$1 = (function (){var statearr_158730 = state_158728;(statearr_158730[7] = inst_158689);
(statearr_158730[8] = inst_158688);
return statearr_158730;
})();var statearr_158731_158759 = state_158728__$1;(statearr_158731_158759[2] = null);
(statearr_158731_158759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 2))
{var state_158728__$1 = state_158728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158728__$1,4,ch);
} else
{if((state_val_158729 === 3))
{var inst_158726 = (state_158728[2]);var state_158728__$1 = state_158728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158728__$1,inst_158726);
} else
{if((state_val_158729 === 4))
{var inst_158692 = (state_158728[9]);var inst_158692__$1 = (state_158728[2]);var inst_158693 = (inst_158692__$1 == null);var inst_158694 = cljs.core.not.call(null,inst_158693);var state_158728__$1 = (function (){var statearr_158732 = state_158728;(statearr_158732[9] = inst_158692__$1);
return statearr_158732;
})();if(inst_158694)
{var statearr_158733_158760 = state_158728__$1;(statearr_158733_158760[1] = 5);
} else
{var statearr_158734_158761 = state_158728__$1;(statearr_158734_158761[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 5))
{var inst_158689 = (state_158728[7]);var inst_158696 = (state_158728[10]);var inst_158692 = (state_158728[9]);var inst_158696__$1 = f.call(null,inst_158692);var inst_158697 = cljs.core._EQ_.call(null,inst_158696__$1,inst_158689);var inst_158698 = cljs.core.keyword_identical_QMARK_.call(null,inst_158689,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_158699 = (inst_158697) || (inst_158698);var state_158728__$1 = (function (){var statearr_158735 = state_158728;(statearr_158735[10] = inst_158696__$1);
return statearr_158735;
})();if(cljs.core.truth_(inst_158699))
{var statearr_158736_158762 = state_158728__$1;(statearr_158736_158762[1] = 8);
} else
{var statearr_158737_158763 = state_158728__$1;(statearr_158737_158763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 6))
{var inst_158688 = (state_158728[8]);var inst_158713 = inst_158688.length;var inst_158714 = (inst_158713 > 0);var state_158728__$1 = state_158728;if(cljs.core.truth_(inst_158714))
{var statearr_158739_158764 = state_158728__$1;(statearr_158739_158764[1] = 12);
} else
{var statearr_158740_158765 = state_158728__$1;(statearr_158740_158765[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 7))
{var inst_158724 = (state_158728[2]);var state_158728__$1 = state_158728;var statearr_158741_158766 = state_158728__$1;(statearr_158741_158766[2] = inst_158724);
(statearr_158741_158766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 8))
{var inst_158696 = (state_158728[10]);var inst_158692 = (state_158728[9]);var inst_158688 = (state_158728[8]);var inst_158701 = inst_158688.push(inst_158692);var tmp158738 = inst_158688;var inst_158688__$1 = tmp158738;var inst_158689 = inst_158696;var state_158728__$1 = (function (){var statearr_158742 = state_158728;(statearr_158742[11] = inst_158701);
(statearr_158742[7] = inst_158689);
(statearr_158742[8] = inst_158688__$1);
return statearr_158742;
})();var statearr_158743_158767 = state_158728__$1;(statearr_158743_158767[2] = null);
(statearr_158743_158767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 9))
{var inst_158688 = (state_158728[8]);var inst_158704 = cljs.core.vec.call(null,inst_158688);var state_158728__$1 = state_158728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158728__$1,11,out,inst_158704);
} else
{if((state_val_158729 === 10))
{var inst_158711 = (state_158728[2]);var state_158728__$1 = state_158728;var statearr_158744_158768 = state_158728__$1;(statearr_158744_158768[2] = inst_158711);
(statearr_158744_158768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 11))
{var inst_158696 = (state_158728[10]);var inst_158692 = (state_158728[9]);var inst_158706 = (state_158728[2]);var inst_158707 = [];var inst_158708 = inst_158707.push(inst_158692);var inst_158688 = inst_158707;var inst_158689 = inst_158696;var state_158728__$1 = (function (){var statearr_158745 = state_158728;(statearr_158745[7] = inst_158689);
(statearr_158745[12] = inst_158706);
(statearr_158745[8] = inst_158688);
(statearr_158745[13] = inst_158708);
return statearr_158745;
})();var statearr_158746_158769 = state_158728__$1;(statearr_158746_158769[2] = null);
(statearr_158746_158769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 12))
{var inst_158688 = (state_158728[8]);var inst_158716 = cljs.core.vec.call(null,inst_158688);var state_158728__$1 = state_158728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158728__$1,15,out,inst_158716);
} else
{if((state_val_158729 === 13))
{var state_158728__$1 = state_158728;var statearr_158747_158770 = state_158728__$1;(statearr_158747_158770[2] = null);
(statearr_158747_158770[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 14))
{var inst_158721 = (state_158728[2]);var inst_158722 = cljs.core.async.close_BANG_.call(null,out);var state_158728__$1 = (function (){var statearr_158748 = state_158728;(statearr_158748[14] = inst_158721);
return statearr_158748;
})();var statearr_158749_158771 = state_158728__$1;(statearr_158749_158771[2] = inst_158722);
(statearr_158749_158771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158729 === 15))
{var inst_158718 = (state_158728[2]);var state_158728__$1 = state_158728;var statearr_158750_158772 = state_158728__$1;(statearr_158750_158772[2] = inst_158718);
(statearr_158750_158772[1] = 14);
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
var state_machine__5525__auto____0 = (function (){var statearr_158754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_158754[0] = state_machine__5525__auto__);
(statearr_158754[1] = 1);
return statearr_158754;
});
var state_machine__5525__auto____1 = (function (state_158728){while(true){
var ret_value__5526__auto__ = (function (){try{while(true){
var result__5527__auto__ = switch__5524__auto__.call(null,state_158728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5527__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5527__auto__;
}
break;
}
}catch (e158755){if((e158755 instanceof Object))
{var ex__5528__auto__ = e158755;var statearr_158756_158773 = state_158728;(statearr_158756_158773[5] = ex__5528__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158774 = state_158728;
state_158728 = G__158774;
continue;
}
} else
{return ret_value__5526__auto__;
}
break;
}
});
state_machine__5525__auto__ = function(state_158728){
switch(arguments.length){
case 0:
return state_machine__5525__auto____0.call(this);
case 1:
return state_machine__5525__auto____1.call(this,state_158728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5525__auto____0;
state_machine__5525__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5525__auto____1;
return state_machine__5525__auto__;
})()
;})(switch__5524__auto__))
})();var state__5541__auto__ = (function (){var statearr_158757 = f__5540__auto__.call(null);(statearr_158757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5539__auto___158758);
return statearr_158757;
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