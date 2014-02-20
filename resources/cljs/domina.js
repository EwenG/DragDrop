// Compiled by ClojureScript 0.0-2156
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_159400 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_159401 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_159402 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_159401,table_section_wrapper_159401,opt_wrapper_159400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_159402,table_section_wrapper_159401,cell_wrapper_159402,opt_wrapper_159400,table_section_wrapper_159401,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_159401]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3391__auto__ = div.firstChild;if(cljs.core.truth_(and__3391__auto__))
{return div.firstChild.childNodes;
} else
{return and__3391__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__159407 = cljs.core.seq.call(null,tbody);var chunk__159408 = null;var count__159409 = 0;var i__159410 = 0;while(true){
if((i__159410 < count__159409))
{var child = cljs.core._nth.call(null,chunk__159408,i__159410);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__159411 = seq__159407;
var G__159412 = chunk__159408;
var G__159413 = count__159409;
var G__159414 = (i__159410 + 1);
seq__159407 = G__159411;
chunk__159408 = G__159412;
count__159409 = G__159413;
i__159410 = G__159414;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__159407);if(temp__4092__auto__)
{var seq__159407__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159407__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__159407__$1);{
var G__159415 = cljs.core.chunk_rest.call(null,seq__159407__$1);
var G__159416 = c__4151__auto__;
var G__159417 = cljs.core.count.call(null,c__4151__auto__);
var G__159418 = 0;
seq__159407 = G__159415;
chunk__159408 = G__159416;
count__159409 = G__159417;
i__159410 = G__159418;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__159407__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__159419 = cljs.core.next.call(null,seq__159407__$1);
var G__159420 = null;
var G__159421 = 0;
var G__159422 = 0;
seq__159407 = G__159419;
chunk__159408 = G__159420;
count__159409 = G__159421;
i__159410 = G__159422;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__159424 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__159424,0,null);var start_wrap = cljs.core.nth.call(null,vec__159424,1,null);var end_wrap = cljs.core.nth.call(null,vec__159424,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__159425 = wrapper.lastChild;
var G__159426 = (level - 1);
wrapper = G__159425;
level = G__159426;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3391__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3391__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj159428 = {};return obj159428;
})();
domina.nodes = (function nodes(content){if((function (){var and__3391__auto__ = content;if(and__3391__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3391__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4030__auto__ = (((content == null))?null:content);return (function (){var or__3403__auto__ = (domina.nodes[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.nodes["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3391__auto__ = nodeseq;if(and__3391__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3391__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4030__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3403__auto__ = (domina.single_node[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.single_node["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3391__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3391__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3391__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__159429){
var mesg = cljs.core.seq(arglist__159429);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__159430){
var mesg = cljs.core.seq(arglist__159430);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__159431){
var contents = cljs.core.seq(arglist__159431);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__159432_SHARP_){return p1__159432_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__159433_SHARP_,p2__159434_SHARP_){return goog.dom.insertChildAt(p1__159433_SHARP_,p2__159434_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__159436_SHARP_,p2__159435_SHARP_){return goog.dom.insertSiblingBefore(p2__159435_SHARP_,p1__159436_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__159438_SHARP_,p2__159437_SHARP_){return goog.dom.insertSiblingAfter(p2__159437_SHARP_,p1__159438_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__159440_SHARP_,p2__159439_SHARP_){return goog.dom.replaceNode(p2__159439_SHARP_,p1__159440_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__159445_159449 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159446_159450 = null;var count__159447_159451 = 0;var i__159448_159452 = 0;while(true){
if((i__159448_159452 < count__159447_159451))
{var n_159453 = cljs.core._nth.call(null,chunk__159446_159450,i__159448_159452);goog.style.setStyle(n_159453,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__159454 = seq__159445_159449;
var G__159455 = chunk__159446_159450;
var G__159456 = count__159447_159451;
var G__159457 = (i__159448_159452 + 1);
seq__159445_159449 = G__159454;
chunk__159446_159450 = G__159455;
count__159447_159451 = G__159456;
i__159448_159452 = G__159457;
continue;
}
} else
{var temp__4092__auto___159458 = cljs.core.seq.call(null,seq__159445_159449);if(temp__4092__auto___159458)
{var seq__159445_159459__$1 = temp__4092__auto___159458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159445_159459__$1))
{var c__4151__auto___159460 = cljs.core.chunk_first.call(null,seq__159445_159459__$1);{
var G__159461 = cljs.core.chunk_rest.call(null,seq__159445_159459__$1);
var G__159462 = c__4151__auto___159460;
var G__159463 = cljs.core.count.call(null,c__4151__auto___159460);
var G__159464 = 0;
seq__159445_159449 = G__159461;
chunk__159446_159450 = G__159462;
count__159447_159451 = G__159463;
i__159448_159452 = G__159464;
continue;
}
} else
{var n_159465 = cljs.core.first.call(null,seq__159445_159459__$1);goog.style.setStyle(n_159465,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__159466 = cljs.core.next.call(null,seq__159445_159459__$1);
var G__159467 = null;
var G__159468 = 0;
var G__159469 = 0;
seq__159445_159449 = G__159466;
chunk__159446_159450 = G__159467;
count__159447_159451 = G__159468;
i__159448_159452 = G__159469;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__159470){
var content = cljs.core.first(arglist__159470);
arglist__159470 = cljs.core.next(arglist__159470);
var name = cljs.core.first(arglist__159470);
var value = cljs.core.rest(arglist__159470);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__159475_159479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159476_159480 = null;var count__159477_159481 = 0;var i__159478_159482 = 0;while(true){
if((i__159478_159482 < count__159477_159481))
{var n_159483 = cljs.core._nth.call(null,chunk__159476_159480,i__159478_159482);n_159483.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__159484 = seq__159475_159479;
var G__159485 = chunk__159476_159480;
var G__159486 = count__159477_159481;
var G__159487 = (i__159478_159482 + 1);
seq__159475_159479 = G__159484;
chunk__159476_159480 = G__159485;
count__159477_159481 = G__159486;
i__159478_159482 = G__159487;
continue;
}
} else
{var temp__4092__auto___159488 = cljs.core.seq.call(null,seq__159475_159479);if(temp__4092__auto___159488)
{var seq__159475_159489__$1 = temp__4092__auto___159488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159475_159489__$1))
{var c__4151__auto___159490 = cljs.core.chunk_first.call(null,seq__159475_159489__$1);{
var G__159491 = cljs.core.chunk_rest.call(null,seq__159475_159489__$1);
var G__159492 = c__4151__auto___159490;
var G__159493 = cljs.core.count.call(null,c__4151__auto___159490);
var G__159494 = 0;
seq__159475_159479 = G__159491;
chunk__159476_159480 = G__159492;
count__159477_159481 = G__159493;
i__159478_159482 = G__159494;
continue;
}
} else
{var n_159495 = cljs.core.first.call(null,seq__159475_159489__$1);n_159495.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__159496 = cljs.core.next.call(null,seq__159475_159489__$1);
var G__159497 = null;
var G__159498 = 0;
var G__159499 = 0;
seq__159475_159479 = G__159496;
chunk__159476_159480 = G__159497;
count__159477_159481 = G__159498;
i__159478_159482 = G__159499;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__159500){
var content = cljs.core.first(arglist__159500);
arglist__159500 = cljs.core.next(arglist__159500);
var name = cljs.core.first(arglist__159500);
var value = cljs.core.rest(arglist__159500);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__159505_159509 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159506_159510 = null;var count__159507_159511 = 0;var i__159508_159512 = 0;while(true){
if((i__159508_159512 < count__159507_159511))
{var n_159513 = cljs.core._nth.call(null,chunk__159506_159510,i__159508_159512);n_159513.removeAttribute(cljs.core.name.call(null,name));
{
var G__159514 = seq__159505_159509;
var G__159515 = chunk__159506_159510;
var G__159516 = count__159507_159511;
var G__159517 = (i__159508_159512 + 1);
seq__159505_159509 = G__159514;
chunk__159506_159510 = G__159515;
count__159507_159511 = G__159516;
i__159508_159512 = G__159517;
continue;
}
} else
{var temp__4092__auto___159518 = cljs.core.seq.call(null,seq__159505_159509);if(temp__4092__auto___159518)
{var seq__159505_159519__$1 = temp__4092__auto___159518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159505_159519__$1))
{var c__4151__auto___159520 = cljs.core.chunk_first.call(null,seq__159505_159519__$1);{
var G__159521 = cljs.core.chunk_rest.call(null,seq__159505_159519__$1);
var G__159522 = c__4151__auto___159520;
var G__159523 = cljs.core.count.call(null,c__4151__auto___159520);
var G__159524 = 0;
seq__159505_159509 = G__159521;
chunk__159506_159510 = G__159522;
count__159507_159511 = G__159523;
i__159508_159512 = G__159524;
continue;
}
} else
{var n_159525 = cljs.core.first.call(null,seq__159505_159519__$1);n_159525.removeAttribute(cljs.core.name.call(null,name));
{
var G__159526 = cljs.core.next.call(null,seq__159505_159519__$1);
var G__159527 = null;
var G__159528 = 0;
var G__159529 = 0;
seq__159505_159509 = G__159526;
chunk__159506_159510 = G__159527;
count__159507_159511 = G__159528;
i__159508_159512 = G__159529;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__159531 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__159531,0,null);var v = cljs.core.nth.call(null,vec__159531,1,null);if(cljs.core.truth_((function (){var and__3391__auto__ = k;if(cljs.core.truth_(and__3391__auto__))
{return v;
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__159532_SHARP_){var attr = attrs__$1.item(p1__159532_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__159539_159545 = cljs.core.seq.call(null,styles);var chunk__159540_159546 = null;var count__159541_159547 = 0;var i__159542_159548 = 0;while(true){
if((i__159542_159548 < count__159541_159547))
{var vec__159543_159549 = cljs.core._nth.call(null,chunk__159540_159546,i__159542_159548);var name_159550 = cljs.core.nth.call(null,vec__159543_159549,0,null);var value_159551 = cljs.core.nth.call(null,vec__159543_159549,1,null);domina.set_style_BANG_.call(null,content,name_159550,value_159551);
{
var G__159552 = seq__159539_159545;
var G__159553 = chunk__159540_159546;
var G__159554 = count__159541_159547;
var G__159555 = (i__159542_159548 + 1);
seq__159539_159545 = G__159552;
chunk__159540_159546 = G__159553;
count__159541_159547 = G__159554;
i__159542_159548 = G__159555;
continue;
}
} else
{var temp__4092__auto___159556 = cljs.core.seq.call(null,seq__159539_159545);if(temp__4092__auto___159556)
{var seq__159539_159557__$1 = temp__4092__auto___159556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159539_159557__$1))
{var c__4151__auto___159558 = cljs.core.chunk_first.call(null,seq__159539_159557__$1);{
var G__159559 = cljs.core.chunk_rest.call(null,seq__159539_159557__$1);
var G__159560 = c__4151__auto___159558;
var G__159561 = cljs.core.count.call(null,c__4151__auto___159558);
var G__159562 = 0;
seq__159539_159545 = G__159559;
chunk__159540_159546 = G__159560;
count__159541_159547 = G__159561;
i__159542_159548 = G__159562;
continue;
}
} else
{var vec__159544_159563 = cljs.core.first.call(null,seq__159539_159557__$1);var name_159564 = cljs.core.nth.call(null,vec__159544_159563,0,null);var value_159565 = cljs.core.nth.call(null,vec__159544_159563,1,null);domina.set_style_BANG_.call(null,content,name_159564,value_159565);
{
var G__159566 = cljs.core.next.call(null,seq__159539_159557__$1);
var G__159567 = null;
var G__159568 = 0;
var G__159569 = 0;
seq__159539_159545 = G__159566;
chunk__159540_159546 = G__159567;
count__159541_159547 = G__159568;
i__159542_159548 = G__159569;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__159576_159582 = cljs.core.seq.call(null,attrs);var chunk__159577_159583 = null;var count__159578_159584 = 0;var i__159579_159585 = 0;while(true){
if((i__159579_159585 < count__159578_159584))
{var vec__159580_159586 = cljs.core._nth.call(null,chunk__159577_159583,i__159579_159585);var name_159587 = cljs.core.nth.call(null,vec__159580_159586,0,null);var value_159588 = cljs.core.nth.call(null,vec__159580_159586,1,null);domina.set_attr_BANG_.call(null,content,name_159587,value_159588);
{
var G__159589 = seq__159576_159582;
var G__159590 = chunk__159577_159583;
var G__159591 = count__159578_159584;
var G__159592 = (i__159579_159585 + 1);
seq__159576_159582 = G__159589;
chunk__159577_159583 = G__159590;
count__159578_159584 = G__159591;
i__159579_159585 = G__159592;
continue;
}
} else
{var temp__4092__auto___159593 = cljs.core.seq.call(null,seq__159576_159582);if(temp__4092__auto___159593)
{var seq__159576_159594__$1 = temp__4092__auto___159593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159576_159594__$1))
{var c__4151__auto___159595 = cljs.core.chunk_first.call(null,seq__159576_159594__$1);{
var G__159596 = cljs.core.chunk_rest.call(null,seq__159576_159594__$1);
var G__159597 = c__4151__auto___159595;
var G__159598 = cljs.core.count.call(null,c__4151__auto___159595);
var G__159599 = 0;
seq__159576_159582 = G__159596;
chunk__159577_159583 = G__159597;
count__159578_159584 = G__159598;
i__159579_159585 = G__159599;
continue;
}
} else
{var vec__159581_159600 = cljs.core.first.call(null,seq__159576_159594__$1);var name_159601 = cljs.core.nth.call(null,vec__159581_159600,0,null);var value_159602 = cljs.core.nth.call(null,vec__159581_159600,1,null);domina.set_attr_BANG_.call(null,content,name_159601,value_159602);
{
var G__159603 = cljs.core.next.call(null,seq__159576_159594__$1);
var G__159604 = null;
var G__159605 = 0;
var G__159606 = 0;
seq__159576_159582 = G__159603;
chunk__159577_159583 = G__159604;
count__159578_159584 = G__159605;
i__159579_159585 = G__159606;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__159611_159615 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159612_159616 = null;var count__159613_159617 = 0;var i__159614_159618 = 0;while(true){
if((i__159614_159618 < count__159613_159617))
{var node_159619 = cljs.core._nth.call(null,chunk__159612_159616,i__159614_159618);goog.dom.classes.add(node_159619,class$);
{
var G__159620 = seq__159611_159615;
var G__159621 = chunk__159612_159616;
var G__159622 = count__159613_159617;
var G__159623 = (i__159614_159618 + 1);
seq__159611_159615 = G__159620;
chunk__159612_159616 = G__159621;
count__159613_159617 = G__159622;
i__159614_159618 = G__159623;
continue;
}
} else
{var temp__4092__auto___159624 = cljs.core.seq.call(null,seq__159611_159615);if(temp__4092__auto___159624)
{var seq__159611_159625__$1 = temp__4092__auto___159624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159611_159625__$1))
{var c__4151__auto___159626 = cljs.core.chunk_first.call(null,seq__159611_159625__$1);{
var G__159627 = cljs.core.chunk_rest.call(null,seq__159611_159625__$1);
var G__159628 = c__4151__auto___159626;
var G__159629 = cljs.core.count.call(null,c__4151__auto___159626);
var G__159630 = 0;
seq__159611_159615 = G__159627;
chunk__159612_159616 = G__159628;
count__159613_159617 = G__159629;
i__159614_159618 = G__159630;
continue;
}
} else
{var node_159631 = cljs.core.first.call(null,seq__159611_159625__$1);goog.dom.classes.add(node_159631,class$);
{
var G__159632 = cljs.core.next.call(null,seq__159611_159625__$1);
var G__159633 = null;
var G__159634 = 0;
var G__159635 = 0;
seq__159611_159615 = G__159632;
chunk__159612_159616 = G__159633;
count__159613_159617 = G__159634;
i__159614_159618 = G__159635;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__159640_159644 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159641_159645 = null;var count__159642_159646 = 0;var i__159643_159647 = 0;while(true){
if((i__159643_159647 < count__159642_159646))
{var node_159648 = cljs.core._nth.call(null,chunk__159641_159645,i__159643_159647);goog.dom.classes.remove(node_159648,class$);
{
var G__159649 = seq__159640_159644;
var G__159650 = chunk__159641_159645;
var G__159651 = count__159642_159646;
var G__159652 = (i__159643_159647 + 1);
seq__159640_159644 = G__159649;
chunk__159641_159645 = G__159650;
count__159642_159646 = G__159651;
i__159643_159647 = G__159652;
continue;
}
} else
{var temp__4092__auto___159653 = cljs.core.seq.call(null,seq__159640_159644);if(temp__4092__auto___159653)
{var seq__159640_159654__$1 = temp__4092__auto___159653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159640_159654__$1))
{var c__4151__auto___159655 = cljs.core.chunk_first.call(null,seq__159640_159654__$1);{
var G__159656 = cljs.core.chunk_rest.call(null,seq__159640_159654__$1);
var G__159657 = c__4151__auto___159655;
var G__159658 = cljs.core.count.call(null,c__4151__auto___159655);
var G__159659 = 0;
seq__159640_159644 = G__159656;
chunk__159641_159645 = G__159657;
count__159642_159646 = G__159658;
i__159643_159647 = G__159659;
continue;
}
} else
{var node_159660 = cljs.core.first.call(null,seq__159640_159654__$1);goog.dom.classes.remove(node_159660,class$);
{
var G__159661 = cljs.core.next.call(null,seq__159640_159654__$1);
var G__159662 = null;
var G__159663 = 0;
var G__159664 = 0;
seq__159640_159644 = G__159661;
chunk__159641_159645 = G__159662;
count__159642_159646 = G__159663;
i__159643_159647 = G__159664;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__159669_159673 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159670_159674 = null;var count__159671_159675 = 0;var i__159672_159676 = 0;while(true){
if((i__159672_159676 < count__159671_159675))
{var node_159677 = cljs.core._nth.call(null,chunk__159670_159674,i__159672_159676);goog.dom.classes.toggle(node_159677,class$);
{
var G__159678 = seq__159669_159673;
var G__159679 = chunk__159670_159674;
var G__159680 = count__159671_159675;
var G__159681 = (i__159672_159676 + 1);
seq__159669_159673 = G__159678;
chunk__159670_159674 = G__159679;
count__159671_159675 = G__159680;
i__159672_159676 = G__159681;
continue;
}
} else
{var temp__4092__auto___159682 = cljs.core.seq.call(null,seq__159669_159673);if(temp__4092__auto___159682)
{var seq__159669_159683__$1 = temp__4092__auto___159682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159669_159683__$1))
{var c__4151__auto___159684 = cljs.core.chunk_first.call(null,seq__159669_159683__$1);{
var G__159685 = cljs.core.chunk_rest.call(null,seq__159669_159683__$1);
var G__159686 = c__4151__auto___159684;
var G__159687 = cljs.core.count.call(null,c__4151__auto___159684);
var G__159688 = 0;
seq__159669_159673 = G__159685;
chunk__159670_159674 = G__159686;
count__159671_159675 = G__159687;
i__159672_159676 = G__159688;
continue;
}
} else
{var node_159689 = cljs.core.first.call(null,seq__159669_159683__$1);goog.dom.classes.toggle(node_159689,class$);
{
var G__159690 = cljs.core.next.call(null,seq__159669_159683__$1);
var G__159691 = null;
var G__159692 = 0;
var G__159693 = 0;
seq__159669_159673 = G__159690;
chunk__159670_159674 = G__159691;
count__159671_159675 = G__159692;
i__159672_159676 = G__159693;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_159702__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__159698_159703 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159699_159704 = null;var count__159700_159705 = 0;var i__159701_159706 = 0;while(true){
if((i__159701_159706 < count__159700_159705))
{var node_159707 = cljs.core._nth.call(null,chunk__159699_159704,i__159701_159706);goog.dom.classes.set(node_159707,classes_159702__$1);
{
var G__159708 = seq__159698_159703;
var G__159709 = chunk__159699_159704;
var G__159710 = count__159700_159705;
var G__159711 = (i__159701_159706 + 1);
seq__159698_159703 = G__159708;
chunk__159699_159704 = G__159709;
count__159700_159705 = G__159710;
i__159701_159706 = G__159711;
continue;
}
} else
{var temp__4092__auto___159712 = cljs.core.seq.call(null,seq__159698_159703);if(temp__4092__auto___159712)
{var seq__159698_159713__$1 = temp__4092__auto___159712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159698_159713__$1))
{var c__4151__auto___159714 = cljs.core.chunk_first.call(null,seq__159698_159713__$1);{
var G__159715 = cljs.core.chunk_rest.call(null,seq__159698_159713__$1);
var G__159716 = c__4151__auto___159714;
var G__159717 = cljs.core.count.call(null,c__4151__auto___159714);
var G__159718 = 0;
seq__159698_159703 = G__159715;
chunk__159699_159704 = G__159716;
count__159700_159705 = G__159717;
i__159701_159706 = G__159718;
continue;
}
} else
{var node_159719 = cljs.core.first.call(null,seq__159698_159713__$1);goog.dom.classes.set(node_159719,classes_159702__$1);
{
var G__159720 = cljs.core.next.call(null,seq__159698_159713__$1);
var G__159721 = null;
var G__159722 = 0;
var G__159723 = 0;
seq__159698_159703 = G__159720;
chunk__159699_159704 = G__159721;
count__159700_159705 = G__159722;
i__159701_159706 = G__159723;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__159728_159732 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159729_159733 = null;var count__159730_159734 = 0;var i__159731_159735 = 0;while(true){
if((i__159731_159735 < count__159730_159734))
{var node_159736 = cljs.core._nth.call(null,chunk__159729_159733,i__159731_159735);goog.dom.setTextContent(node_159736,value);
{
var G__159737 = seq__159728_159732;
var G__159738 = chunk__159729_159733;
var G__159739 = count__159730_159734;
var G__159740 = (i__159731_159735 + 1);
seq__159728_159732 = G__159737;
chunk__159729_159733 = G__159738;
count__159730_159734 = G__159739;
i__159731_159735 = G__159740;
continue;
}
} else
{var temp__4092__auto___159741 = cljs.core.seq.call(null,seq__159728_159732);if(temp__4092__auto___159741)
{var seq__159728_159742__$1 = temp__4092__auto___159741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159728_159742__$1))
{var c__4151__auto___159743 = cljs.core.chunk_first.call(null,seq__159728_159742__$1);{
var G__159744 = cljs.core.chunk_rest.call(null,seq__159728_159742__$1);
var G__159745 = c__4151__auto___159743;
var G__159746 = cljs.core.count.call(null,c__4151__auto___159743);
var G__159747 = 0;
seq__159728_159732 = G__159744;
chunk__159729_159733 = G__159745;
count__159730_159734 = G__159746;
i__159731_159735 = G__159747;
continue;
}
} else
{var node_159748 = cljs.core.first.call(null,seq__159728_159742__$1);goog.dom.setTextContent(node_159748,value);
{
var G__159749 = cljs.core.next.call(null,seq__159728_159742__$1);
var G__159750 = null;
var G__159751 = 0;
var G__159752 = 0;
seq__159728_159732 = G__159749;
chunk__159729_159733 = G__159750;
count__159730_159734 = G__159751;
i__159731_159735 = G__159752;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__159757_159761 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159758_159762 = null;var count__159759_159763 = 0;var i__159760_159764 = 0;while(true){
if((i__159760_159764 < count__159759_159763))
{var node_159765 = cljs.core._nth.call(null,chunk__159758_159762,i__159760_159764);goog.dom.forms.setValue(node_159765,value);
{
var G__159766 = seq__159757_159761;
var G__159767 = chunk__159758_159762;
var G__159768 = count__159759_159763;
var G__159769 = (i__159760_159764 + 1);
seq__159757_159761 = G__159766;
chunk__159758_159762 = G__159767;
count__159759_159763 = G__159768;
i__159760_159764 = G__159769;
continue;
}
} else
{var temp__4092__auto___159770 = cljs.core.seq.call(null,seq__159757_159761);if(temp__4092__auto___159770)
{var seq__159757_159771__$1 = temp__4092__auto___159770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159757_159771__$1))
{var c__4151__auto___159772 = cljs.core.chunk_first.call(null,seq__159757_159771__$1);{
var G__159773 = cljs.core.chunk_rest.call(null,seq__159757_159771__$1);
var G__159774 = c__4151__auto___159772;
var G__159775 = cljs.core.count.call(null,c__4151__auto___159772);
var G__159776 = 0;
seq__159757_159761 = G__159773;
chunk__159758_159762 = G__159774;
count__159759_159763 = G__159775;
i__159760_159764 = G__159776;
continue;
}
} else
{var node_159777 = cljs.core.first.call(null,seq__159757_159771__$1);goog.dom.forms.setValue(node_159777,value);
{
var G__159778 = cljs.core.next.call(null,seq__159757_159771__$1);
var G__159779 = null;
var G__159780 = 0;
var G__159781 = 0;
seq__159757_159761 = G__159778;
chunk__159758_159762 = G__159779;
count__159759_159763 = G__159780;
i__159760_159764 = G__159781;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3391__auto__ = allows_inner_html_QMARK_;if(and__3391__auto__)
{var and__3391__auto____$1 = (function (){var or__3403__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3391__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{var value_159792 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__159788_159793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__159789_159794 = null;var count__159790_159795 = 0;var i__159791_159796 = 0;while(true){
if((i__159791_159796 < count__159790_159795))
{var node_159797 = cljs.core._nth.call(null,chunk__159789_159794,i__159791_159796);node_159797.innerHTML = value_159792;
{
var G__159798 = seq__159788_159793;
var G__159799 = chunk__159789_159794;
var G__159800 = count__159790_159795;
var G__159801 = (i__159791_159796 + 1);
seq__159788_159793 = G__159798;
chunk__159789_159794 = G__159799;
count__159790_159795 = G__159800;
i__159791_159796 = G__159801;
continue;
}
} else
{var temp__4092__auto___159802 = cljs.core.seq.call(null,seq__159788_159793);if(temp__4092__auto___159802)
{var seq__159788_159803__$1 = temp__4092__auto___159802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159788_159803__$1))
{var c__4151__auto___159804 = cljs.core.chunk_first.call(null,seq__159788_159803__$1);{
var G__159805 = cljs.core.chunk_rest.call(null,seq__159788_159803__$1);
var G__159806 = c__4151__auto___159804;
var G__159807 = cljs.core.count.call(null,c__4151__auto___159804);
var G__159808 = 0;
seq__159788_159793 = G__159805;
chunk__159789_159794 = G__159806;
count__159790_159795 = G__159807;
i__159791_159796 = G__159808;
continue;
}
} else
{var node_159809 = cljs.core.first.call(null,seq__159788_159803__$1);node_159809.innerHTML = value_159792;
{
var G__159810 = cljs.core.next.call(null,seq__159788_159803__$1);
var G__159811 = null;
var G__159812 = 0;
var G__159813 = 0;
seq__159788_159793 = G__159810;
chunk__159789_159794 = G__159811;
count__159790_159795 = G__159812;
i__159791_159796 = G__159813;
continue;
}
}
} else
{}
}
break;
}
}catch (e159787){if((e159787 instanceof Error))
{var e_159814 = e159787;domina.replace_children_BANG_.call(null,content,value_159792);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159787;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3391__auto__ = bubble;if(cljs.core.truth_(and__3391__auto__))
{return (value == null);
} else
{return and__3391__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3403__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__159821_159825 = cljs.core.seq.call(null,children);var chunk__159822_159826 = null;var count__159823_159827 = 0;var i__159824_159828 = 0;while(true){
if((i__159824_159828 < count__159823_159827))
{var child_159829 = cljs.core._nth.call(null,chunk__159822_159826,i__159824_159828);frag.appendChild(child_159829);
{
var G__159830 = seq__159821_159825;
var G__159831 = chunk__159822_159826;
var G__159832 = count__159823_159827;
var G__159833 = (i__159824_159828 + 1);
seq__159821_159825 = G__159830;
chunk__159822_159826 = G__159831;
count__159823_159827 = G__159832;
i__159824_159828 = G__159833;
continue;
}
} else
{var temp__4092__auto___159834 = cljs.core.seq.call(null,seq__159821_159825);if(temp__4092__auto___159834)
{var seq__159821_159835__$1 = temp__4092__auto___159834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__159821_159835__$1))
{var c__4151__auto___159836 = cljs.core.chunk_first.call(null,seq__159821_159835__$1);{
var G__159837 = cljs.core.chunk_rest.call(null,seq__159821_159835__$1);
var G__159838 = c__4151__auto___159836;
var G__159839 = cljs.core.count.call(null,c__4151__auto___159836);
var G__159840 = 0;
seq__159821_159825 = G__159837;
chunk__159822_159826 = G__159838;
count__159823_159827 = G__159839;
i__159824_159828 = G__159840;
continue;
}
} else
{var child_159841 = cljs.core.first.call(null,seq__159821_159835__$1);frag.appendChild(child_159841);
{
var G__159842 = cljs.core.next.call(null,seq__159821_159835__$1);
var G__159843 = null;
var G__159844 = 0;
var G__159845 = 0;
seq__159821_159825 = G__159842;
chunk__159822_159826 = G__159843;
count__159823_159827 = G__159844;
i__159824_159828 = G__159845;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__159815_SHARP_,p2__159816_SHARP_){return f.call(null,p1__159815_SHARP_,p2__159816_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3391__auto__ = obj;if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3391__auto____$1)
{return obj.length;
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__159847 = list_thing;if(G__159847)
{var bit__4053__auto__ = (G__159847.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__159847.cljs$core$ISeqable$))
{return true;
} else
{if((!G__159847.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__159847);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__159847);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__159848 = content;if(G__159848)
{var bit__4053__auto__ = (G__159848.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__159848.cljs$core$ISeqable$))
{return true;
} else
{if((!G__159848.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__159848);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__159848);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__159849 = content;if(G__159849)
{var bit__4053__auto__ = (G__159849.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__159849.cljs$core$ISeqable$))
{return true;
} else
{if((!G__159849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__159849);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__159849);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map