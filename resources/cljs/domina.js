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
var opt_wrapper_8520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_8521 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_8522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_8521,table_section_wrapper_8521,opt_wrapper_8520,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_8522,table_section_wrapper_8521,cell_wrapper_8522,opt_wrapper_8520,table_section_wrapper_8521,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_8521]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3391__auto__ = div.firstChild;if(cljs.core.truth_(and__3391__auto__))
{return div.firstChild.childNodes;
} else
{return and__3391__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__8527 = cljs.core.seq.call(null,tbody);var chunk__8528 = null;var count__8529 = 0;var i__8530 = 0;while(true){
if((i__8530 < count__8529))
{var child = cljs.core._nth.call(null,chunk__8528,i__8530);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__8531 = seq__8527;
var G__8532 = chunk__8528;
var G__8533 = count__8529;
var G__8534 = (i__8530 + 1);
seq__8527 = G__8531;
chunk__8528 = G__8532;
count__8529 = G__8533;
i__8530 = G__8534;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8527);if(temp__4092__auto__)
{var seq__8527__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8527__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__8527__$1);{
var G__8535 = cljs.core.chunk_rest.call(null,seq__8527__$1);
var G__8536 = c__4151__auto__;
var G__8537 = cljs.core.count.call(null,c__4151__auto__);
var G__8538 = 0;
seq__8527 = G__8535;
chunk__8528 = G__8536;
count__8529 = G__8537;
i__8530 = G__8538;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__8527__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__8539 = cljs.core.next.call(null,seq__8527__$1);
var G__8540 = null;
var G__8541 = 0;
var G__8542 = 0;
seq__8527 = G__8539;
chunk__8528 = G__8540;
count__8529 = G__8541;
i__8530 = G__8542;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__8544 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__8544,0,null);var start_wrap = cljs.core.nth.call(null,vec__8544,1,null);var end_wrap = cljs.core.nth.call(null,vec__8544,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__8545 = wrapper.lastChild;
var G__8546 = (level - 1);
wrapper = G__8545;
level = G__8546;
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
domina.DomContent = (function (){var obj8548 = {};return obj8548;
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
log_debug.cljs$lang$applyTo = (function (arglist__8549){
var mesg = cljs.core.seq(arglist__8549);
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
log.cljs$lang$applyTo = (function (arglist__8550){
var mesg = cljs.core.seq(arglist__8550);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__8551){
var contents = cljs.core.seq(arglist__8551);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__8552_SHARP_){return p1__8552_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__8553_SHARP_,p2__8554_SHARP_){return goog.dom.insertChildAt(p1__8553_SHARP_,p2__8554_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8556_SHARP_,p2__8555_SHARP_){return goog.dom.insertSiblingBefore(p2__8555_SHARP_,p1__8556_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8558_SHARP_,p2__8557_SHARP_){return goog.dom.insertSiblingAfter(p2__8557_SHARP_,p1__8558_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__8560_SHARP_,p2__8559_SHARP_){return goog.dom.replaceNode(p2__8559_SHARP_,p1__8560_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__8565_8569 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8566_8570 = null;var count__8567_8571 = 0;var i__8568_8572 = 0;while(true){
if((i__8568_8572 < count__8567_8571))
{var n_8573 = cljs.core._nth.call(null,chunk__8566_8570,i__8568_8572);goog.style.setStyle(n_8573,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8574 = seq__8565_8569;
var G__8575 = chunk__8566_8570;
var G__8576 = count__8567_8571;
var G__8577 = (i__8568_8572 + 1);
seq__8565_8569 = G__8574;
chunk__8566_8570 = G__8575;
count__8567_8571 = G__8576;
i__8568_8572 = G__8577;
continue;
}
} else
{var temp__4092__auto___8578 = cljs.core.seq.call(null,seq__8565_8569);if(temp__4092__auto___8578)
{var seq__8565_8579__$1 = temp__4092__auto___8578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8565_8579__$1))
{var c__4151__auto___8580 = cljs.core.chunk_first.call(null,seq__8565_8579__$1);{
var G__8581 = cljs.core.chunk_rest.call(null,seq__8565_8579__$1);
var G__8582 = c__4151__auto___8580;
var G__8583 = cljs.core.count.call(null,c__4151__auto___8580);
var G__8584 = 0;
seq__8565_8569 = G__8581;
chunk__8566_8570 = G__8582;
count__8567_8571 = G__8583;
i__8568_8572 = G__8584;
continue;
}
} else
{var n_8585 = cljs.core.first.call(null,seq__8565_8579__$1);goog.style.setStyle(n_8585,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8586 = cljs.core.next.call(null,seq__8565_8579__$1);
var G__8587 = null;
var G__8588 = 0;
var G__8589 = 0;
seq__8565_8569 = G__8586;
chunk__8566_8570 = G__8587;
count__8567_8571 = G__8588;
i__8568_8572 = G__8589;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8590){
var content = cljs.core.first(arglist__8590);
arglist__8590 = cljs.core.next(arglist__8590);
var name = cljs.core.first(arglist__8590);
var value = cljs.core.rest(arglist__8590);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__8595_8599 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8596_8600 = null;var count__8597_8601 = 0;var i__8598_8602 = 0;while(true){
if((i__8598_8602 < count__8597_8601))
{var n_8603 = cljs.core._nth.call(null,chunk__8596_8600,i__8598_8602);n_8603.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8604 = seq__8595_8599;
var G__8605 = chunk__8596_8600;
var G__8606 = count__8597_8601;
var G__8607 = (i__8598_8602 + 1);
seq__8595_8599 = G__8604;
chunk__8596_8600 = G__8605;
count__8597_8601 = G__8606;
i__8598_8602 = G__8607;
continue;
}
} else
{var temp__4092__auto___8608 = cljs.core.seq.call(null,seq__8595_8599);if(temp__4092__auto___8608)
{var seq__8595_8609__$1 = temp__4092__auto___8608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8595_8609__$1))
{var c__4151__auto___8610 = cljs.core.chunk_first.call(null,seq__8595_8609__$1);{
var G__8611 = cljs.core.chunk_rest.call(null,seq__8595_8609__$1);
var G__8612 = c__4151__auto___8610;
var G__8613 = cljs.core.count.call(null,c__4151__auto___8610);
var G__8614 = 0;
seq__8595_8599 = G__8611;
chunk__8596_8600 = G__8612;
count__8597_8601 = G__8613;
i__8598_8602 = G__8614;
continue;
}
} else
{var n_8615 = cljs.core.first.call(null,seq__8595_8609__$1);n_8615.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8616 = cljs.core.next.call(null,seq__8595_8609__$1);
var G__8617 = null;
var G__8618 = 0;
var G__8619 = 0;
seq__8595_8599 = G__8616;
chunk__8596_8600 = G__8617;
count__8597_8601 = G__8618;
i__8598_8602 = G__8619;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__8620){
var content = cljs.core.first(arglist__8620);
arglist__8620 = cljs.core.next(arglist__8620);
var name = cljs.core.first(arglist__8620);
var value = cljs.core.rest(arglist__8620);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__8625_8629 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8626_8630 = null;var count__8627_8631 = 0;var i__8628_8632 = 0;while(true){
if((i__8628_8632 < count__8627_8631))
{var n_8633 = cljs.core._nth.call(null,chunk__8626_8630,i__8628_8632);n_8633.removeAttribute(cljs.core.name.call(null,name));
{
var G__8634 = seq__8625_8629;
var G__8635 = chunk__8626_8630;
var G__8636 = count__8627_8631;
var G__8637 = (i__8628_8632 + 1);
seq__8625_8629 = G__8634;
chunk__8626_8630 = G__8635;
count__8627_8631 = G__8636;
i__8628_8632 = G__8637;
continue;
}
} else
{var temp__4092__auto___8638 = cljs.core.seq.call(null,seq__8625_8629);if(temp__4092__auto___8638)
{var seq__8625_8639__$1 = temp__4092__auto___8638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8625_8639__$1))
{var c__4151__auto___8640 = cljs.core.chunk_first.call(null,seq__8625_8639__$1);{
var G__8641 = cljs.core.chunk_rest.call(null,seq__8625_8639__$1);
var G__8642 = c__4151__auto___8640;
var G__8643 = cljs.core.count.call(null,c__4151__auto___8640);
var G__8644 = 0;
seq__8625_8629 = G__8641;
chunk__8626_8630 = G__8642;
count__8627_8631 = G__8643;
i__8628_8632 = G__8644;
continue;
}
} else
{var n_8645 = cljs.core.first.call(null,seq__8625_8639__$1);n_8645.removeAttribute(cljs.core.name.call(null,name));
{
var G__8646 = cljs.core.next.call(null,seq__8625_8639__$1);
var G__8647 = null;
var G__8648 = 0;
var G__8649 = 0;
seq__8625_8629 = G__8646;
chunk__8626_8630 = G__8647;
count__8627_8631 = G__8648;
i__8628_8632 = G__8649;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__8651 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__8651,0,null);var v = cljs.core.nth.call(null,vec__8651,1,null);if(cljs.core.truth_((function (){var and__3391__auto__ = k;if(cljs.core.truth_(and__3391__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__8652_SHARP_){var attr = attrs__$1.item(p1__8652_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__8659_8665 = cljs.core.seq.call(null,styles);var chunk__8660_8666 = null;var count__8661_8667 = 0;var i__8662_8668 = 0;while(true){
if((i__8662_8668 < count__8661_8667))
{var vec__8663_8669 = cljs.core._nth.call(null,chunk__8660_8666,i__8662_8668);var name_8670 = cljs.core.nth.call(null,vec__8663_8669,0,null);var value_8671 = cljs.core.nth.call(null,vec__8663_8669,1,null);domina.set_style_BANG_.call(null,content,name_8670,value_8671);
{
var G__8672 = seq__8659_8665;
var G__8673 = chunk__8660_8666;
var G__8674 = count__8661_8667;
var G__8675 = (i__8662_8668 + 1);
seq__8659_8665 = G__8672;
chunk__8660_8666 = G__8673;
count__8661_8667 = G__8674;
i__8662_8668 = G__8675;
continue;
}
} else
{var temp__4092__auto___8676 = cljs.core.seq.call(null,seq__8659_8665);if(temp__4092__auto___8676)
{var seq__8659_8677__$1 = temp__4092__auto___8676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8659_8677__$1))
{var c__4151__auto___8678 = cljs.core.chunk_first.call(null,seq__8659_8677__$1);{
var G__8679 = cljs.core.chunk_rest.call(null,seq__8659_8677__$1);
var G__8680 = c__4151__auto___8678;
var G__8681 = cljs.core.count.call(null,c__4151__auto___8678);
var G__8682 = 0;
seq__8659_8665 = G__8679;
chunk__8660_8666 = G__8680;
count__8661_8667 = G__8681;
i__8662_8668 = G__8682;
continue;
}
} else
{var vec__8664_8683 = cljs.core.first.call(null,seq__8659_8677__$1);var name_8684 = cljs.core.nth.call(null,vec__8664_8683,0,null);var value_8685 = cljs.core.nth.call(null,vec__8664_8683,1,null);domina.set_style_BANG_.call(null,content,name_8684,value_8685);
{
var G__8686 = cljs.core.next.call(null,seq__8659_8677__$1);
var G__8687 = null;
var G__8688 = 0;
var G__8689 = 0;
seq__8659_8665 = G__8686;
chunk__8660_8666 = G__8687;
count__8661_8667 = G__8688;
i__8662_8668 = G__8689;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__8696_8702 = cljs.core.seq.call(null,attrs);var chunk__8697_8703 = null;var count__8698_8704 = 0;var i__8699_8705 = 0;while(true){
if((i__8699_8705 < count__8698_8704))
{var vec__8700_8706 = cljs.core._nth.call(null,chunk__8697_8703,i__8699_8705);var name_8707 = cljs.core.nth.call(null,vec__8700_8706,0,null);var value_8708 = cljs.core.nth.call(null,vec__8700_8706,1,null);domina.set_attr_BANG_.call(null,content,name_8707,value_8708);
{
var G__8709 = seq__8696_8702;
var G__8710 = chunk__8697_8703;
var G__8711 = count__8698_8704;
var G__8712 = (i__8699_8705 + 1);
seq__8696_8702 = G__8709;
chunk__8697_8703 = G__8710;
count__8698_8704 = G__8711;
i__8699_8705 = G__8712;
continue;
}
} else
{var temp__4092__auto___8713 = cljs.core.seq.call(null,seq__8696_8702);if(temp__4092__auto___8713)
{var seq__8696_8714__$1 = temp__4092__auto___8713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8696_8714__$1))
{var c__4151__auto___8715 = cljs.core.chunk_first.call(null,seq__8696_8714__$1);{
var G__8716 = cljs.core.chunk_rest.call(null,seq__8696_8714__$1);
var G__8717 = c__4151__auto___8715;
var G__8718 = cljs.core.count.call(null,c__4151__auto___8715);
var G__8719 = 0;
seq__8696_8702 = G__8716;
chunk__8697_8703 = G__8717;
count__8698_8704 = G__8718;
i__8699_8705 = G__8719;
continue;
}
} else
{var vec__8701_8720 = cljs.core.first.call(null,seq__8696_8714__$1);var name_8721 = cljs.core.nth.call(null,vec__8701_8720,0,null);var value_8722 = cljs.core.nth.call(null,vec__8701_8720,1,null);domina.set_attr_BANG_.call(null,content,name_8721,value_8722);
{
var G__8723 = cljs.core.next.call(null,seq__8696_8714__$1);
var G__8724 = null;
var G__8725 = 0;
var G__8726 = 0;
seq__8696_8702 = G__8723;
chunk__8697_8703 = G__8724;
count__8698_8704 = G__8725;
i__8699_8705 = G__8726;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__8731_8735 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8732_8736 = null;var count__8733_8737 = 0;var i__8734_8738 = 0;while(true){
if((i__8734_8738 < count__8733_8737))
{var node_8739 = cljs.core._nth.call(null,chunk__8732_8736,i__8734_8738);goog.dom.classes.add(node_8739,class$);
{
var G__8740 = seq__8731_8735;
var G__8741 = chunk__8732_8736;
var G__8742 = count__8733_8737;
var G__8743 = (i__8734_8738 + 1);
seq__8731_8735 = G__8740;
chunk__8732_8736 = G__8741;
count__8733_8737 = G__8742;
i__8734_8738 = G__8743;
continue;
}
} else
{var temp__4092__auto___8744 = cljs.core.seq.call(null,seq__8731_8735);if(temp__4092__auto___8744)
{var seq__8731_8745__$1 = temp__4092__auto___8744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8731_8745__$1))
{var c__4151__auto___8746 = cljs.core.chunk_first.call(null,seq__8731_8745__$1);{
var G__8747 = cljs.core.chunk_rest.call(null,seq__8731_8745__$1);
var G__8748 = c__4151__auto___8746;
var G__8749 = cljs.core.count.call(null,c__4151__auto___8746);
var G__8750 = 0;
seq__8731_8735 = G__8747;
chunk__8732_8736 = G__8748;
count__8733_8737 = G__8749;
i__8734_8738 = G__8750;
continue;
}
} else
{var node_8751 = cljs.core.first.call(null,seq__8731_8745__$1);goog.dom.classes.add(node_8751,class$);
{
var G__8752 = cljs.core.next.call(null,seq__8731_8745__$1);
var G__8753 = null;
var G__8754 = 0;
var G__8755 = 0;
seq__8731_8735 = G__8752;
chunk__8732_8736 = G__8753;
count__8733_8737 = G__8754;
i__8734_8738 = G__8755;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__8760_8764 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8761_8765 = null;var count__8762_8766 = 0;var i__8763_8767 = 0;while(true){
if((i__8763_8767 < count__8762_8766))
{var node_8768 = cljs.core._nth.call(null,chunk__8761_8765,i__8763_8767);goog.dom.classes.remove(node_8768,class$);
{
var G__8769 = seq__8760_8764;
var G__8770 = chunk__8761_8765;
var G__8771 = count__8762_8766;
var G__8772 = (i__8763_8767 + 1);
seq__8760_8764 = G__8769;
chunk__8761_8765 = G__8770;
count__8762_8766 = G__8771;
i__8763_8767 = G__8772;
continue;
}
} else
{var temp__4092__auto___8773 = cljs.core.seq.call(null,seq__8760_8764);if(temp__4092__auto___8773)
{var seq__8760_8774__$1 = temp__4092__auto___8773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8760_8774__$1))
{var c__4151__auto___8775 = cljs.core.chunk_first.call(null,seq__8760_8774__$1);{
var G__8776 = cljs.core.chunk_rest.call(null,seq__8760_8774__$1);
var G__8777 = c__4151__auto___8775;
var G__8778 = cljs.core.count.call(null,c__4151__auto___8775);
var G__8779 = 0;
seq__8760_8764 = G__8776;
chunk__8761_8765 = G__8777;
count__8762_8766 = G__8778;
i__8763_8767 = G__8779;
continue;
}
} else
{var node_8780 = cljs.core.first.call(null,seq__8760_8774__$1);goog.dom.classes.remove(node_8780,class$);
{
var G__8781 = cljs.core.next.call(null,seq__8760_8774__$1);
var G__8782 = null;
var G__8783 = 0;
var G__8784 = 0;
seq__8760_8764 = G__8781;
chunk__8761_8765 = G__8782;
count__8762_8766 = G__8783;
i__8763_8767 = G__8784;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__8789_8793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8790_8794 = null;var count__8791_8795 = 0;var i__8792_8796 = 0;while(true){
if((i__8792_8796 < count__8791_8795))
{var node_8797 = cljs.core._nth.call(null,chunk__8790_8794,i__8792_8796);goog.dom.classes.toggle(node_8797,class$);
{
var G__8798 = seq__8789_8793;
var G__8799 = chunk__8790_8794;
var G__8800 = count__8791_8795;
var G__8801 = (i__8792_8796 + 1);
seq__8789_8793 = G__8798;
chunk__8790_8794 = G__8799;
count__8791_8795 = G__8800;
i__8792_8796 = G__8801;
continue;
}
} else
{var temp__4092__auto___8802 = cljs.core.seq.call(null,seq__8789_8793);if(temp__4092__auto___8802)
{var seq__8789_8803__$1 = temp__4092__auto___8802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8789_8803__$1))
{var c__4151__auto___8804 = cljs.core.chunk_first.call(null,seq__8789_8803__$1);{
var G__8805 = cljs.core.chunk_rest.call(null,seq__8789_8803__$1);
var G__8806 = c__4151__auto___8804;
var G__8807 = cljs.core.count.call(null,c__4151__auto___8804);
var G__8808 = 0;
seq__8789_8793 = G__8805;
chunk__8790_8794 = G__8806;
count__8791_8795 = G__8807;
i__8792_8796 = G__8808;
continue;
}
} else
{var node_8809 = cljs.core.first.call(null,seq__8789_8803__$1);goog.dom.classes.toggle(node_8809,class$);
{
var G__8810 = cljs.core.next.call(null,seq__8789_8803__$1);
var G__8811 = null;
var G__8812 = 0;
var G__8813 = 0;
seq__8789_8793 = G__8810;
chunk__8790_8794 = G__8811;
count__8791_8795 = G__8812;
i__8792_8796 = G__8813;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_8822__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__8818_8823 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8819_8824 = null;var count__8820_8825 = 0;var i__8821_8826 = 0;while(true){
if((i__8821_8826 < count__8820_8825))
{var node_8827 = cljs.core._nth.call(null,chunk__8819_8824,i__8821_8826);goog.dom.classes.set(node_8827,classes_8822__$1);
{
var G__8828 = seq__8818_8823;
var G__8829 = chunk__8819_8824;
var G__8830 = count__8820_8825;
var G__8831 = (i__8821_8826 + 1);
seq__8818_8823 = G__8828;
chunk__8819_8824 = G__8829;
count__8820_8825 = G__8830;
i__8821_8826 = G__8831;
continue;
}
} else
{var temp__4092__auto___8832 = cljs.core.seq.call(null,seq__8818_8823);if(temp__4092__auto___8832)
{var seq__8818_8833__$1 = temp__4092__auto___8832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8818_8833__$1))
{var c__4151__auto___8834 = cljs.core.chunk_first.call(null,seq__8818_8833__$1);{
var G__8835 = cljs.core.chunk_rest.call(null,seq__8818_8833__$1);
var G__8836 = c__4151__auto___8834;
var G__8837 = cljs.core.count.call(null,c__4151__auto___8834);
var G__8838 = 0;
seq__8818_8823 = G__8835;
chunk__8819_8824 = G__8836;
count__8820_8825 = G__8837;
i__8821_8826 = G__8838;
continue;
}
} else
{var node_8839 = cljs.core.first.call(null,seq__8818_8833__$1);goog.dom.classes.set(node_8839,classes_8822__$1);
{
var G__8840 = cljs.core.next.call(null,seq__8818_8833__$1);
var G__8841 = null;
var G__8842 = 0;
var G__8843 = 0;
seq__8818_8823 = G__8840;
chunk__8819_8824 = G__8841;
count__8820_8825 = G__8842;
i__8821_8826 = G__8843;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__8848_8852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8849_8853 = null;var count__8850_8854 = 0;var i__8851_8855 = 0;while(true){
if((i__8851_8855 < count__8850_8854))
{var node_8856 = cljs.core._nth.call(null,chunk__8849_8853,i__8851_8855);goog.dom.setTextContent(node_8856,value);
{
var G__8857 = seq__8848_8852;
var G__8858 = chunk__8849_8853;
var G__8859 = count__8850_8854;
var G__8860 = (i__8851_8855 + 1);
seq__8848_8852 = G__8857;
chunk__8849_8853 = G__8858;
count__8850_8854 = G__8859;
i__8851_8855 = G__8860;
continue;
}
} else
{var temp__4092__auto___8861 = cljs.core.seq.call(null,seq__8848_8852);if(temp__4092__auto___8861)
{var seq__8848_8862__$1 = temp__4092__auto___8861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8848_8862__$1))
{var c__4151__auto___8863 = cljs.core.chunk_first.call(null,seq__8848_8862__$1);{
var G__8864 = cljs.core.chunk_rest.call(null,seq__8848_8862__$1);
var G__8865 = c__4151__auto___8863;
var G__8866 = cljs.core.count.call(null,c__4151__auto___8863);
var G__8867 = 0;
seq__8848_8852 = G__8864;
chunk__8849_8853 = G__8865;
count__8850_8854 = G__8866;
i__8851_8855 = G__8867;
continue;
}
} else
{var node_8868 = cljs.core.first.call(null,seq__8848_8862__$1);goog.dom.setTextContent(node_8868,value);
{
var G__8869 = cljs.core.next.call(null,seq__8848_8862__$1);
var G__8870 = null;
var G__8871 = 0;
var G__8872 = 0;
seq__8848_8852 = G__8869;
chunk__8849_8853 = G__8870;
count__8850_8854 = G__8871;
i__8851_8855 = G__8872;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__8877_8881 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8878_8882 = null;var count__8879_8883 = 0;var i__8880_8884 = 0;while(true){
if((i__8880_8884 < count__8879_8883))
{var node_8885 = cljs.core._nth.call(null,chunk__8878_8882,i__8880_8884);goog.dom.forms.setValue(node_8885,value);
{
var G__8886 = seq__8877_8881;
var G__8887 = chunk__8878_8882;
var G__8888 = count__8879_8883;
var G__8889 = (i__8880_8884 + 1);
seq__8877_8881 = G__8886;
chunk__8878_8882 = G__8887;
count__8879_8883 = G__8888;
i__8880_8884 = G__8889;
continue;
}
} else
{var temp__4092__auto___8890 = cljs.core.seq.call(null,seq__8877_8881);if(temp__4092__auto___8890)
{var seq__8877_8891__$1 = temp__4092__auto___8890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8877_8891__$1))
{var c__4151__auto___8892 = cljs.core.chunk_first.call(null,seq__8877_8891__$1);{
var G__8893 = cljs.core.chunk_rest.call(null,seq__8877_8891__$1);
var G__8894 = c__4151__auto___8892;
var G__8895 = cljs.core.count.call(null,c__4151__auto___8892);
var G__8896 = 0;
seq__8877_8881 = G__8893;
chunk__8878_8882 = G__8894;
count__8879_8883 = G__8895;
i__8880_8884 = G__8896;
continue;
}
} else
{var node_8897 = cljs.core.first.call(null,seq__8877_8891__$1);goog.dom.forms.setValue(node_8897,value);
{
var G__8898 = cljs.core.next.call(null,seq__8877_8891__$1);
var G__8899 = null;
var G__8900 = 0;
var G__8901 = 0;
seq__8877_8881 = G__8898;
chunk__8878_8882 = G__8899;
count__8879_8883 = G__8900;
i__8880_8884 = G__8901;
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
{var value_8912 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__8908_8913 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8909_8914 = null;var count__8910_8915 = 0;var i__8911_8916 = 0;while(true){
if((i__8911_8916 < count__8910_8915))
{var node_8917 = cljs.core._nth.call(null,chunk__8909_8914,i__8911_8916);node_8917.innerHTML = value_8912;
{
var G__8918 = seq__8908_8913;
var G__8919 = chunk__8909_8914;
var G__8920 = count__8910_8915;
var G__8921 = (i__8911_8916 + 1);
seq__8908_8913 = G__8918;
chunk__8909_8914 = G__8919;
count__8910_8915 = G__8920;
i__8911_8916 = G__8921;
continue;
}
} else
{var temp__4092__auto___8922 = cljs.core.seq.call(null,seq__8908_8913);if(temp__4092__auto___8922)
{var seq__8908_8923__$1 = temp__4092__auto___8922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8908_8923__$1))
{var c__4151__auto___8924 = cljs.core.chunk_first.call(null,seq__8908_8923__$1);{
var G__8925 = cljs.core.chunk_rest.call(null,seq__8908_8923__$1);
var G__8926 = c__4151__auto___8924;
var G__8927 = cljs.core.count.call(null,c__4151__auto___8924);
var G__8928 = 0;
seq__8908_8913 = G__8925;
chunk__8909_8914 = G__8926;
count__8910_8915 = G__8927;
i__8911_8916 = G__8928;
continue;
}
} else
{var node_8929 = cljs.core.first.call(null,seq__8908_8923__$1);node_8929.innerHTML = value_8912;
{
var G__8930 = cljs.core.next.call(null,seq__8908_8923__$1);
var G__8931 = null;
var G__8932 = 0;
var G__8933 = 0;
seq__8908_8913 = G__8930;
chunk__8909_8914 = G__8931;
count__8910_8915 = G__8932;
i__8911_8916 = G__8933;
continue;
}
}
} else
{}
}
break;
}
}catch (e8907){if((e8907 instanceof Error))
{var e_8934 = e8907;domina.replace_children_BANG_.call(null,content,value_8912);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8907;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__8941_8945 = cljs.core.seq.call(null,children);var chunk__8942_8946 = null;var count__8943_8947 = 0;var i__8944_8948 = 0;while(true){
if((i__8944_8948 < count__8943_8947))
{var child_8949 = cljs.core._nth.call(null,chunk__8942_8946,i__8944_8948);frag.appendChild(child_8949);
{
var G__8950 = seq__8941_8945;
var G__8951 = chunk__8942_8946;
var G__8952 = count__8943_8947;
var G__8953 = (i__8944_8948 + 1);
seq__8941_8945 = G__8950;
chunk__8942_8946 = G__8951;
count__8943_8947 = G__8952;
i__8944_8948 = G__8953;
continue;
}
} else
{var temp__4092__auto___8954 = cljs.core.seq.call(null,seq__8941_8945);if(temp__4092__auto___8954)
{var seq__8941_8955__$1 = temp__4092__auto___8954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8941_8955__$1))
{var c__4151__auto___8956 = cljs.core.chunk_first.call(null,seq__8941_8955__$1);{
var G__8957 = cljs.core.chunk_rest.call(null,seq__8941_8955__$1);
var G__8958 = c__4151__auto___8956;
var G__8959 = cljs.core.count.call(null,c__4151__auto___8956);
var G__8960 = 0;
seq__8941_8945 = G__8957;
chunk__8942_8946 = G__8958;
count__8943_8947 = G__8959;
i__8944_8948 = G__8960;
continue;
}
} else
{var child_8961 = cljs.core.first.call(null,seq__8941_8955__$1);frag.appendChild(child_8961);
{
var G__8962 = cljs.core.next.call(null,seq__8941_8955__$1);
var G__8963 = null;
var G__8964 = 0;
var G__8965 = 0;
seq__8941_8945 = G__8962;
chunk__8942_8946 = G__8963;
count__8943_8947 = G__8964;
i__8944_8948 = G__8965;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8935_SHARP_,p2__8936_SHARP_){return f.call(null,p1__8935_SHARP_,p2__8936_SHARP_);
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
{if((function (){var G__8967 = list_thing;if(G__8967)
{var bit__4053__auto__ = (G__8967.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__8967.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8967);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8967);
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
{if((function (){var G__8968 = content;if(G__8968)
{var bit__4053__auto__ = (G__8968.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__8968.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8968.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8968);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8968);
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
{if((function (){var G__8969 = content;if(G__8969)
{var bit__4053__auto__ = (G__8969.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__8969.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8969);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8969);
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