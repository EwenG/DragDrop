// Compiled by ClojureScript 0.0-2156
goog.provide('ewen.dragdrop');
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
goog.require('goog.style');
goog.require('domina.css');
ewen.dragdrop.event_types = (cljs.core.truth_('ontouchstart' in window)?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"touchmove","touchmove",1378440962),new cljs.core.Keyword(null,"over","over",1017327686),new cljs.core.Keyword(null,"touchstart","touchstart",3730278389),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"touchend","touchend",4489339054),new cljs.core.Keyword(null,"click","click",1108654330),"tap"], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"mousemove","mousemove",1601016168),new cljs.core.Keyword(null,"over","over",1017327686),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,"mouseclick","mouseclick",2025167733)], null));
/**
* 
*/
ewen.dragdrop.event_types_s = schema.core.schema_with_name.call(null,cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,ewen.dragdrop.event_types)),new cljs.core.Symbol(null,"event-types-s","event-types-s",944945573,null));
ewen.dragdrop.event__GT_dd_event = (function event__GT_dd_event(event,event_type){return new cljs.core.PersistentArrayMap.fromArray([event_type,domina.events.target.call(null,event),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"clientX","clientX",1874491743).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"clientY","clientY",1874491744).cljs$core$IFn$_invoke$arity$1(event)], true, false);
});
ewen.dragdrop.extract_events = (function() {
var extract_events = null;
var extract_events__1 = (function (event_type){var evt_stream = ewen.flapjax_cljs.receiverE.call(null);var listen_key = domina.events.listen_BANG_.call(null,event_type.call(null,ewen.dragdrop.event_types),((function (evt_stream){
return (function (p1__17555_SHARP_){return ewen.flapjax_cljs.sendEvent.call(null,evt_stream,p1__17555_SHARP_);
});})(evt_stream))
);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evt_stream,(function (){return cljs.core.dorun.call(null,cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key));
})], null);
});
var extract_events__2 = (function (src,event_type){var evt_stream = ewen.flapjax_cljs.receiverE.call(null);var listen_key = domina.events.listen_BANG_.call(null,src,event_type.call(null,ewen.dragdrop.event_types),((function (evt_stream){
return (function (p1__17554_SHARP_){return ewen.flapjax_cljs.sendEvent.call(null,evt_stream,p1__17554_SHARP_);
});})(evt_stream))
);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evt_stream,(function (){return cljs.core.dorun.call(null,cljs.core.map.call(null,domina.events.unlisten_by_key_BANG_,listen_key));
})], null);
});
extract_events = function(src,event_type){
switch(arguments.length){
case 1:
return extract_events__1.call(this,src);
case 2:
return extract_events__2.call(this,src,event_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extract_events.cljs$core$IFn$_invoke$arity$1 = extract_events__1;
extract_events.cljs$core$IFn$_invoke$arity$2 = extract_events__2;
return extract_events;
})()
;
ewen.dragdrop.dropEE = (function dropEE(up_events){return ewen.flapjax_cljs.mapE.call(null,(function (event){domina.events.prevent_default.call(null,event);
return ewen.flapjax_cljs.oneE.call(null,ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drop","drop",1016996449)));
}),up_events);
});
ewen.dragdrop.moveEE = (function moveEE(move_events){return ewen.flapjax_cljs.mapE.call(null,(function (event){domina.events.prevent_default.call(null,event);
return ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"drag","drag",1016996006));
}),move_events);
});
ewen.dragdrop.dragEE = (function dragEE(down_events,move_events){return ewen.flapjax_cljs.mapE.call(null,(function (event){return ewen.flapjax_cljs.mergeE.call(null,ewen.flapjax_cljs.oneE.call(null,ewen.dragdrop.event__GT_dd_event.call(null,event,new cljs.core.Keyword(null,"handle","handle",4084294042))),ewen.dragdrop.moveEE.call(null,move_events));
}),down_events);
});
ewen.dragdrop.create_dd = (function create_dd(down_events,move_events,up_events){return ewen.flapjax_cljs.switchE.call(null,ewen.flapjax_cljs.mergeE.call(null,ewen.dragdrop.dropEE.call(null,up_events),ewen.dragdrop.dragEE.call(null,down_events,move_events)));
});
ewen.dragdrop.E__GT_EE = (function E__GT_EE(E){return ewen.flapjax_cljs.mapE.call(null,(function (p1__17556_SHARP_){return ewen.flapjax_cljs.oneE.call(null,p1__17556_SHARP_);
}),E);
});
ewen.dragdrop.long_press = (function long_press(down_events,up_events,delay_time){var down_EE = ewen.dragdrop.E__GT_EE.call(null,down_events);var delay_fn = ((function (down_EE){
return (function (p1__17557_SHARP_){return ewen.flapjax_cljs.delayE.call(null,p1__17557_SHARP_,ewen.flapjax_cljs.constantB.call(null,delay_time));
});})(down_EE))
;var down_EE__$1 = ewen.flapjax_cljs.mapE.call(null,delay_fn,down_EE);var up_EE = ewen.dragdrop.E__GT_EE.call(null,up_events);return ewen.flapjax_cljs.filterE.call(null,(function (p1__17558_SHARP_){return cljs.core._EQ_.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"down","down",1016993812).cljs$core$IFn$_invoke$arity$1(ewen.dragdrop.event_types)),domina.events.event_type.call(null,p1__17558_SHARP_));
}),ewen.flapjax_cljs.switchE.call(null,ewen.flapjax_cljs.mergeE.call(null,down_EE__$1,up_EE)));
});

//# sourceMappingURL=dragdrop.js.map