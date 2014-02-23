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
var opt_wrapper_24576 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_24578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_24577,table_section_wrapper_24577,opt_wrapper_24576,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_24578,table_section_wrapper_24577,cell_wrapper_24578,opt_wrapper_24576,table_section_wrapper_24577,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_24577]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3391__auto__ = div.firstChild;if(cljs.core.truth_(and__3391__auto__))
{return div.firstChild.childNodes;
} else
{return and__3391__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__24583 = cljs.core.seq.call(null,tbody);var chunk__24584 = null;var count__24585 = 0;var i__24586 = 0;while(true){
if((i__24586 < count__24585))
{var child = cljs.core._nth.call(null,chunk__24584,i__24586);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24587 = seq__24583;
var G__24588 = chunk__24584;
var G__24589 = count__24585;
var G__24590 = (i__24586 + 1);
seq__24583 = G__24587;
chunk__24584 = G__24588;
count__24585 = G__24589;
i__24586 = G__24590;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24583);if(temp__4092__auto__)
{var seq__24583__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24583__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__24583__$1);{
var G__24591 = cljs.core.chunk_rest.call(null,seq__24583__$1);
var G__24592 = c__4151__auto__;
var G__24593 = cljs.core.count.call(null,c__4151__auto__);
var G__24594 = 0;
seq__24583 = G__24591;
chunk__24584 = G__24592;
count__24585 = G__24593;
i__24586 = G__24594;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__24583__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24595 = cljs.core.next.call(null,seq__24583__$1);
var G__24596 = null;
var G__24597 = 0;
var G__24598 = 0;
seq__24583 = G__24595;
chunk__24584 = G__24596;
count__24585 = G__24597;
i__24586 = G__24598;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__24600 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__24600,0,null);var start_wrap = cljs.core.nth.call(null,vec__24600,1,null);var end_wrap = cljs.core.nth.call(null,vec__24600,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__24601 = wrapper.lastChild;
var G__24602 = (level - 1);
wrapper = G__24601;
level = G__24602;
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
domina.DomContent = (function (){var obj24604 = {};return obj24604;
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
log_debug.cljs$lang$applyTo = (function (arglist__24605){
var mesg = cljs.core.seq(arglist__24605);
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
log.cljs$lang$applyTo = (function (arglist__24606){
var mesg = cljs.core.seq(arglist__24606);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24607){
var contents = cljs.core.seq(arglist__24607);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__24608_SHARP_){return p1__24608_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__24609_SHARP_,p2__24610_SHARP_){return goog.dom.insertChildAt(p1__24609_SHARP_,p2__24610_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24612_SHARP_,p2__24611_SHARP_){return goog.dom.insertSiblingBefore(p2__24611_SHARP_,p1__24612_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24614_SHARP_,p2__24613_SHARP_){return goog.dom.insertSiblingAfter(p2__24613_SHARP_,p1__24614_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__24616_SHARP_,p2__24615_SHARP_){return goog.dom.replaceNode(p2__24615_SHARP_,p1__24616_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24621_24625 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24622_24626 = null;var count__24623_24627 = 0;var i__24624_24628 = 0;while(true){
if((i__24624_24628 < count__24623_24627))
{var n_24629 = cljs.core._nth.call(null,chunk__24622_24626,i__24624_24628);goog.style.setStyle(n_24629,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24630 = seq__24621_24625;
var G__24631 = chunk__24622_24626;
var G__24632 = count__24623_24627;
var G__24633 = (i__24624_24628 + 1);
seq__24621_24625 = G__24630;
chunk__24622_24626 = G__24631;
count__24623_24627 = G__24632;
i__24624_24628 = G__24633;
continue;
}
} else
{var temp__4092__auto___24634 = cljs.core.seq.call(null,seq__24621_24625);if(temp__4092__auto___24634)
{var seq__24621_24635__$1 = temp__4092__auto___24634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24621_24635__$1))
{var c__4151__auto___24636 = cljs.core.chunk_first.call(null,seq__24621_24635__$1);{
var G__24637 = cljs.core.chunk_rest.call(null,seq__24621_24635__$1);
var G__24638 = c__4151__auto___24636;
var G__24639 = cljs.core.count.call(null,c__4151__auto___24636);
var G__24640 = 0;
seq__24621_24625 = G__24637;
chunk__24622_24626 = G__24638;
count__24623_24627 = G__24639;
i__24624_24628 = G__24640;
continue;
}
} else
{var n_24641 = cljs.core.first.call(null,seq__24621_24635__$1);goog.style.setStyle(n_24641,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24642 = cljs.core.next.call(null,seq__24621_24635__$1);
var G__24643 = null;
var G__24644 = 0;
var G__24645 = 0;
seq__24621_24625 = G__24642;
chunk__24622_24626 = G__24643;
count__24623_24627 = G__24644;
i__24624_24628 = G__24645;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24646){
var content = cljs.core.first(arglist__24646);
arglist__24646 = cljs.core.next(arglist__24646);
var name = cljs.core.first(arglist__24646);
var value = cljs.core.rest(arglist__24646);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24651_24655 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24652_24656 = null;var count__24653_24657 = 0;var i__24654_24658 = 0;while(true){
if((i__24654_24658 < count__24653_24657))
{var n_24659 = cljs.core._nth.call(null,chunk__24652_24656,i__24654_24658);n_24659.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24660 = seq__24651_24655;
var G__24661 = chunk__24652_24656;
var G__24662 = count__24653_24657;
var G__24663 = (i__24654_24658 + 1);
seq__24651_24655 = G__24660;
chunk__24652_24656 = G__24661;
count__24653_24657 = G__24662;
i__24654_24658 = G__24663;
continue;
}
} else
{var temp__4092__auto___24664 = cljs.core.seq.call(null,seq__24651_24655);if(temp__4092__auto___24664)
{var seq__24651_24665__$1 = temp__4092__auto___24664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24651_24665__$1))
{var c__4151__auto___24666 = cljs.core.chunk_first.call(null,seq__24651_24665__$1);{
var G__24667 = cljs.core.chunk_rest.call(null,seq__24651_24665__$1);
var G__24668 = c__4151__auto___24666;
var G__24669 = cljs.core.count.call(null,c__4151__auto___24666);
var G__24670 = 0;
seq__24651_24655 = G__24667;
chunk__24652_24656 = G__24668;
count__24653_24657 = G__24669;
i__24654_24658 = G__24670;
continue;
}
} else
{var n_24671 = cljs.core.first.call(null,seq__24651_24665__$1);n_24671.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24672 = cljs.core.next.call(null,seq__24651_24665__$1);
var G__24673 = null;
var G__24674 = 0;
var G__24675 = 0;
seq__24651_24655 = G__24672;
chunk__24652_24656 = G__24673;
count__24653_24657 = G__24674;
i__24654_24658 = G__24675;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24676){
var content = cljs.core.first(arglist__24676);
arglist__24676 = cljs.core.next(arglist__24676);
var name = cljs.core.first(arglist__24676);
var value = cljs.core.rest(arglist__24676);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24681_24685 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24682_24686 = null;var count__24683_24687 = 0;var i__24684_24688 = 0;while(true){
if((i__24684_24688 < count__24683_24687))
{var n_24689 = cljs.core._nth.call(null,chunk__24682_24686,i__24684_24688);n_24689.removeAttribute(cljs.core.name.call(null,name));
{
var G__24690 = seq__24681_24685;
var G__24691 = chunk__24682_24686;
var G__24692 = count__24683_24687;
var G__24693 = (i__24684_24688 + 1);
seq__24681_24685 = G__24690;
chunk__24682_24686 = G__24691;
count__24683_24687 = G__24692;
i__24684_24688 = G__24693;
continue;
}
} else
{var temp__4092__auto___24694 = cljs.core.seq.call(null,seq__24681_24685);if(temp__4092__auto___24694)
{var seq__24681_24695__$1 = temp__4092__auto___24694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24681_24695__$1))
{var c__4151__auto___24696 = cljs.core.chunk_first.call(null,seq__24681_24695__$1);{
var G__24697 = cljs.core.chunk_rest.call(null,seq__24681_24695__$1);
var G__24698 = c__4151__auto___24696;
var G__24699 = cljs.core.count.call(null,c__4151__auto___24696);
var G__24700 = 0;
seq__24681_24685 = G__24697;
chunk__24682_24686 = G__24698;
count__24683_24687 = G__24699;
i__24684_24688 = G__24700;
continue;
}
} else
{var n_24701 = cljs.core.first.call(null,seq__24681_24695__$1);n_24701.removeAttribute(cljs.core.name.call(null,name));
{
var G__24702 = cljs.core.next.call(null,seq__24681_24695__$1);
var G__24703 = null;
var G__24704 = 0;
var G__24705 = 0;
seq__24681_24685 = G__24702;
chunk__24682_24686 = G__24703;
count__24683_24687 = G__24704;
i__24684_24688 = G__24705;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__24707 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__24707,0,null);var v = cljs.core.nth.call(null,vec__24707,1,null);if(cljs.core.truth_((function (){var and__3391__auto__ = k;if(cljs.core.truth_(and__3391__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__24708_SHARP_){var attr = attrs__$1.item(p1__24708_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24715_24721 = cljs.core.seq.call(null,styles);var chunk__24716_24722 = null;var count__24717_24723 = 0;var i__24718_24724 = 0;while(true){
if((i__24718_24724 < count__24717_24723))
{var vec__24719_24725 = cljs.core._nth.call(null,chunk__24716_24722,i__24718_24724);var name_24726 = cljs.core.nth.call(null,vec__24719_24725,0,null);var value_24727 = cljs.core.nth.call(null,vec__24719_24725,1,null);domina.set_style_BANG_.call(null,content,name_24726,value_24727);
{
var G__24728 = seq__24715_24721;
var G__24729 = chunk__24716_24722;
var G__24730 = count__24717_24723;
var G__24731 = (i__24718_24724 + 1);
seq__24715_24721 = G__24728;
chunk__24716_24722 = G__24729;
count__24717_24723 = G__24730;
i__24718_24724 = G__24731;
continue;
}
} else
{var temp__4092__auto___24732 = cljs.core.seq.call(null,seq__24715_24721);if(temp__4092__auto___24732)
{var seq__24715_24733__$1 = temp__4092__auto___24732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715_24733__$1))
{var c__4151__auto___24734 = cljs.core.chunk_first.call(null,seq__24715_24733__$1);{
var G__24735 = cljs.core.chunk_rest.call(null,seq__24715_24733__$1);
var G__24736 = c__4151__auto___24734;
var G__24737 = cljs.core.count.call(null,c__4151__auto___24734);
var G__24738 = 0;
seq__24715_24721 = G__24735;
chunk__24716_24722 = G__24736;
count__24717_24723 = G__24737;
i__24718_24724 = G__24738;
continue;
}
} else
{var vec__24720_24739 = cljs.core.first.call(null,seq__24715_24733__$1);var name_24740 = cljs.core.nth.call(null,vec__24720_24739,0,null);var value_24741 = cljs.core.nth.call(null,vec__24720_24739,1,null);domina.set_style_BANG_.call(null,content,name_24740,value_24741);
{
var G__24742 = cljs.core.next.call(null,seq__24715_24733__$1);
var G__24743 = null;
var G__24744 = 0;
var G__24745 = 0;
seq__24715_24721 = G__24742;
chunk__24716_24722 = G__24743;
count__24717_24723 = G__24744;
i__24718_24724 = G__24745;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24752_24758 = cljs.core.seq.call(null,attrs);var chunk__24753_24759 = null;var count__24754_24760 = 0;var i__24755_24761 = 0;while(true){
if((i__24755_24761 < count__24754_24760))
{var vec__24756_24762 = cljs.core._nth.call(null,chunk__24753_24759,i__24755_24761);var name_24763 = cljs.core.nth.call(null,vec__24756_24762,0,null);var value_24764 = cljs.core.nth.call(null,vec__24756_24762,1,null);domina.set_attr_BANG_.call(null,content,name_24763,value_24764);
{
var G__24765 = seq__24752_24758;
var G__24766 = chunk__24753_24759;
var G__24767 = count__24754_24760;
var G__24768 = (i__24755_24761 + 1);
seq__24752_24758 = G__24765;
chunk__24753_24759 = G__24766;
count__24754_24760 = G__24767;
i__24755_24761 = G__24768;
continue;
}
} else
{var temp__4092__auto___24769 = cljs.core.seq.call(null,seq__24752_24758);if(temp__4092__auto___24769)
{var seq__24752_24770__$1 = temp__4092__auto___24769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24752_24770__$1))
{var c__4151__auto___24771 = cljs.core.chunk_first.call(null,seq__24752_24770__$1);{
var G__24772 = cljs.core.chunk_rest.call(null,seq__24752_24770__$1);
var G__24773 = c__4151__auto___24771;
var G__24774 = cljs.core.count.call(null,c__4151__auto___24771);
var G__24775 = 0;
seq__24752_24758 = G__24772;
chunk__24753_24759 = G__24773;
count__24754_24760 = G__24774;
i__24755_24761 = G__24775;
continue;
}
} else
{var vec__24757_24776 = cljs.core.first.call(null,seq__24752_24770__$1);var name_24777 = cljs.core.nth.call(null,vec__24757_24776,0,null);var value_24778 = cljs.core.nth.call(null,vec__24757_24776,1,null);domina.set_attr_BANG_.call(null,content,name_24777,value_24778);
{
var G__24779 = cljs.core.next.call(null,seq__24752_24770__$1);
var G__24780 = null;
var G__24781 = 0;
var G__24782 = 0;
seq__24752_24758 = G__24779;
chunk__24753_24759 = G__24780;
count__24754_24760 = G__24781;
i__24755_24761 = G__24782;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24787_24791 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24788_24792 = null;var count__24789_24793 = 0;var i__24790_24794 = 0;while(true){
if((i__24790_24794 < count__24789_24793))
{var node_24795 = cljs.core._nth.call(null,chunk__24788_24792,i__24790_24794);goog.dom.classes.add(node_24795,class$);
{
var G__24796 = seq__24787_24791;
var G__24797 = chunk__24788_24792;
var G__24798 = count__24789_24793;
var G__24799 = (i__24790_24794 + 1);
seq__24787_24791 = G__24796;
chunk__24788_24792 = G__24797;
count__24789_24793 = G__24798;
i__24790_24794 = G__24799;
continue;
}
} else
{var temp__4092__auto___24800 = cljs.core.seq.call(null,seq__24787_24791);if(temp__4092__auto___24800)
{var seq__24787_24801__$1 = temp__4092__auto___24800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24787_24801__$1))
{var c__4151__auto___24802 = cljs.core.chunk_first.call(null,seq__24787_24801__$1);{
var G__24803 = cljs.core.chunk_rest.call(null,seq__24787_24801__$1);
var G__24804 = c__4151__auto___24802;
var G__24805 = cljs.core.count.call(null,c__4151__auto___24802);
var G__24806 = 0;
seq__24787_24791 = G__24803;
chunk__24788_24792 = G__24804;
count__24789_24793 = G__24805;
i__24790_24794 = G__24806;
continue;
}
} else
{var node_24807 = cljs.core.first.call(null,seq__24787_24801__$1);goog.dom.classes.add(node_24807,class$);
{
var G__24808 = cljs.core.next.call(null,seq__24787_24801__$1);
var G__24809 = null;
var G__24810 = 0;
var G__24811 = 0;
seq__24787_24791 = G__24808;
chunk__24788_24792 = G__24809;
count__24789_24793 = G__24810;
i__24790_24794 = G__24811;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24816_24820 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24817_24821 = null;var count__24818_24822 = 0;var i__24819_24823 = 0;while(true){
if((i__24819_24823 < count__24818_24822))
{var node_24824 = cljs.core._nth.call(null,chunk__24817_24821,i__24819_24823);goog.dom.classes.remove(node_24824,class$);
{
var G__24825 = seq__24816_24820;
var G__24826 = chunk__24817_24821;
var G__24827 = count__24818_24822;
var G__24828 = (i__24819_24823 + 1);
seq__24816_24820 = G__24825;
chunk__24817_24821 = G__24826;
count__24818_24822 = G__24827;
i__24819_24823 = G__24828;
continue;
}
} else
{var temp__4092__auto___24829 = cljs.core.seq.call(null,seq__24816_24820);if(temp__4092__auto___24829)
{var seq__24816_24830__$1 = temp__4092__auto___24829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24816_24830__$1))
{var c__4151__auto___24831 = cljs.core.chunk_first.call(null,seq__24816_24830__$1);{
var G__24832 = cljs.core.chunk_rest.call(null,seq__24816_24830__$1);
var G__24833 = c__4151__auto___24831;
var G__24834 = cljs.core.count.call(null,c__4151__auto___24831);
var G__24835 = 0;
seq__24816_24820 = G__24832;
chunk__24817_24821 = G__24833;
count__24818_24822 = G__24834;
i__24819_24823 = G__24835;
continue;
}
} else
{var node_24836 = cljs.core.first.call(null,seq__24816_24830__$1);goog.dom.classes.remove(node_24836,class$);
{
var G__24837 = cljs.core.next.call(null,seq__24816_24830__$1);
var G__24838 = null;
var G__24839 = 0;
var G__24840 = 0;
seq__24816_24820 = G__24837;
chunk__24817_24821 = G__24838;
count__24818_24822 = G__24839;
i__24819_24823 = G__24840;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24845_24849 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24846_24850 = null;var count__24847_24851 = 0;var i__24848_24852 = 0;while(true){
if((i__24848_24852 < count__24847_24851))
{var node_24853 = cljs.core._nth.call(null,chunk__24846_24850,i__24848_24852);goog.dom.classes.toggle(node_24853,class$);
{
var G__24854 = seq__24845_24849;
var G__24855 = chunk__24846_24850;
var G__24856 = count__24847_24851;
var G__24857 = (i__24848_24852 + 1);
seq__24845_24849 = G__24854;
chunk__24846_24850 = G__24855;
count__24847_24851 = G__24856;
i__24848_24852 = G__24857;
continue;
}
} else
{var temp__4092__auto___24858 = cljs.core.seq.call(null,seq__24845_24849);if(temp__4092__auto___24858)
{var seq__24845_24859__$1 = temp__4092__auto___24858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24845_24859__$1))
{var c__4151__auto___24860 = cljs.core.chunk_first.call(null,seq__24845_24859__$1);{
var G__24861 = cljs.core.chunk_rest.call(null,seq__24845_24859__$1);
var G__24862 = c__4151__auto___24860;
var G__24863 = cljs.core.count.call(null,c__4151__auto___24860);
var G__24864 = 0;
seq__24845_24849 = G__24861;
chunk__24846_24850 = G__24862;
count__24847_24851 = G__24863;
i__24848_24852 = G__24864;
continue;
}
} else
{var node_24865 = cljs.core.first.call(null,seq__24845_24859__$1);goog.dom.classes.toggle(node_24865,class$);
{
var G__24866 = cljs.core.next.call(null,seq__24845_24859__$1);
var G__24867 = null;
var G__24868 = 0;
var G__24869 = 0;
seq__24845_24849 = G__24866;
chunk__24846_24850 = G__24867;
count__24847_24851 = G__24868;
i__24848_24852 = G__24869;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24878__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24874_24879 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24875_24880 = null;var count__24876_24881 = 0;var i__24877_24882 = 0;while(true){
if((i__24877_24882 < count__24876_24881))
{var node_24883 = cljs.core._nth.call(null,chunk__24875_24880,i__24877_24882);goog.dom.classes.set(node_24883,classes_24878__$1);
{
var G__24884 = seq__24874_24879;
var G__24885 = chunk__24875_24880;
var G__24886 = count__24876_24881;
var G__24887 = (i__24877_24882 + 1);
seq__24874_24879 = G__24884;
chunk__24875_24880 = G__24885;
count__24876_24881 = G__24886;
i__24877_24882 = G__24887;
continue;
}
} else
{var temp__4092__auto___24888 = cljs.core.seq.call(null,seq__24874_24879);if(temp__4092__auto___24888)
{var seq__24874_24889__$1 = temp__4092__auto___24888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24874_24889__$1))
{var c__4151__auto___24890 = cljs.core.chunk_first.call(null,seq__24874_24889__$1);{
var G__24891 = cljs.core.chunk_rest.call(null,seq__24874_24889__$1);
var G__24892 = c__4151__auto___24890;
var G__24893 = cljs.core.count.call(null,c__4151__auto___24890);
var G__24894 = 0;
seq__24874_24879 = G__24891;
chunk__24875_24880 = G__24892;
count__24876_24881 = G__24893;
i__24877_24882 = G__24894;
continue;
}
} else
{var node_24895 = cljs.core.first.call(null,seq__24874_24889__$1);goog.dom.classes.set(node_24895,classes_24878__$1);
{
var G__24896 = cljs.core.next.call(null,seq__24874_24889__$1);
var G__24897 = null;
var G__24898 = 0;
var G__24899 = 0;
seq__24874_24879 = G__24896;
chunk__24875_24880 = G__24897;
count__24876_24881 = G__24898;
i__24877_24882 = G__24899;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24904_24908 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24905_24909 = null;var count__24906_24910 = 0;var i__24907_24911 = 0;while(true){
if((i__24907_24911 < count__24906_24910))
{var node_24912 = cljs.core._nth.call(null,chunk__24905_24909,i__24907_24911);goog.dom.setTextContent(node_24912,value);
{
var G__24913 = seq__24904_24908;
var G__24914 = chunk__24905_24909;
var G__24915 = count__24906_24910;
var G__24916 = (i__24907_24911 + 1);
seq__24904_24908 = G__24913;
chunk__24905_24909 = G__24914;
count__24906_24910 = G__24915;
i__24907_24911 = G__24916;
continue;
}
} else
{var temp__4092__auto___24917 = cljs.core.seq.call(null,seq__24904_24908);if(temp__4092__auto___24917)
{var seq__24904_24918__$1 = temp__4092__auto___24917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24904_24918__$1))
{var c__4151__auto___24919 = cljs.core.chunk_first.call(null,seq__24904_24918__$1);{
var G__24920 = cljs.core.chunk_rest.call(null,seq__24904_24918__$1);
var G__24921 = c__4151__auto___24919;
var G__24922 = cljs.core.count.call(null,c__4151__auto___24919);
var G__24923 = 0;
seq__24904_24908 = G__24920;
chunk__24905_24909 = G__24921;
count__24906_24910 = G__24922;
i__24907_24911 = G__24923;
continue;
}
} else
{var node_24924 = cljs.core.first.call(null,seq__24904_24918__$1);goog.dom.setTextContent(node_24924,value);
{
var G__24925 = cljs.core.next.call(null,seq__24904_24918__$1);
var G__24926 = null;
var G__24927 = 0;
var G__24928 = 0;
seq__24904_24908 = G__24925;
chunk__24905_24909 = G__24926;
count__24906_24910 = G__24927;
i__24907_24911 = G__24928;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24933_24937 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24934_24938 = null;var count__24935_24939 = 0;var i__24936_24940 = 0;while(true){
if((i__24936_24940 < count__24935_24939))
{var node_24941 = cljs.core._nth.call(null,chunk__24934_24938,i__24936_24940);goog.dom.forms.setValue(node_24941,value);
{
var G__24942 = seq__24933_24937;
var G__24943 = chunk__24934_24938;
var G__24944 = count__24935_24939;
var G__24945 = (i__24936_24940 + 1);
seq__24933_24937 = G__24942;
chunk__24934_24938 = G__24943;
count__24935_24939 = G__24944;
i__24936_24940 = G__24945;
continue;
}
} else
{var temp__4092__auto___24946 = cljs.core.seq.call(null,seq__24933_24937);if(temp__4092__auto___24946)
{var seq__24933_24947__$1 = temp__4092__auto___24946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24933_24947__$1))
{var c__4151__auto___24948 = cljs.core.chunk_first.call(null,seq__24933_24947__$1);{
var G__24949 = cljs.core.chunk_rest.call(null,seq__24933_24947__$1);
var G__24950 = c__4151__auto___24948;
var G__24951 = cljs.core.count.call(null,c__4151__auto___24948);
var G__24952 = 0;
seq__24933_24937 = G__24949;
chunk__24934_24938 = G__24950;
count__24935_24939 = G__24951;
i__24936_24940 = G__24952;
continue;
}
} else
{var node_24953 = cljs.core.first.call(null,seq__24933_24947__$1);goog.dom.forms.setValue(node_24953,value);
{
var G__24954 = cljs.core.next.call(null,seq__24933_24947__$1);
var G__24955 = null;
var G__24956 = 0;
var G__24957 = 0;
seq__24933_24937 = G__24954;
chunk__24934_24938 = G__24955;
count__24935_24939 = G__24956;
i__24936_24940 = G__24957;
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
{var value_24968 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24964_24969 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24965_24970 = null;var count__24966_24971 = 0;var i__24967_24972 = 0;while(true){
if((i__24967_24972 < count__24966_24971))
{var node_24973 = cljs.core._nth.call(null,chunk__24965_24970,i__24967_24972);node_24973.innerHTML = value_24968;
{
var G__24974 = seq__24964_24969;
var G__24975 = chunk__24965_24970;
var G__24976 = count__24966_24971;
var G__24977 = (i__24967_24972 + 1);
seq__24964_24969 = G__24974;
chunk__24965_24970 = G__24975;
count__24966_24971 = G__24976;
i__24967_24972 = G__24977;
continue;
}
} else
{var temp__4092__auto___24978 = cljs.core.seq.call(null,seq__24964_24969);if(temp__4092__auto___24978)
{var seq__24964_24979__$1 = temp__4092__auto___24978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24964_24979__$1))
{var c__4151__auto___24980 = cljs.core.chunk_first.call(null,seq__24964_24979__$1);{
var G__24981 = cljs.core.chunk_rest.call(null,seq__24964_24979__$1);
var G__24982 = c__4151__auto___24980;
var G__24983 = cljs.core.count.call(null,c__4151__auto___24980);
var G__24984 = 0;
seq__24964_24969 = G__24981;
chunk__24965_24970 = G__24982;
count__24966_24971 = G__24983;
i__24967_24972 = G__24984;
continue;
}
} else
{var node_24985 = cljs.core.first.call(null,seq__24964_24979__$1);node_24985.innerHTML = value_24968;
{
var G__24986 = cljs.core.next.call(null,seq__24964_24979__$1);
var G__24987 = null;
var G__24988 = 0;
var G__24989 = 0;
seq__24964_24969 = G__24986;
chunk__24965_24970 = G__24987;
count__24966_24971 = G__24988;
i__24967_24972 = G__24989;
continue;
}
}
} else
{}
}
break;
}
}catch (e24963){if((e24963 instanceof Error))
{var e_24990 = e24963;domina.replace_children_BANG_.call(null,content,value_24968);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24963;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24997_25001 = cljs.core.seq.call(null,children);var chunk__24998_25002 = null;var count__24999_25003 = 0;var i__25000_25004 = 0;while(true){
if((i__25000_25004 < count__24999_25003))
{var child_25005 = cljs.core._nth.call(null,chunk__24998_25002,i__25000_25004);frag.appendChild(child_25005);
{
var G__25006 = seq__24997_25001;
var G__25007 = chunk__24998_25002;
var G__25008 = count__24999_25003;
var G__25009 = (i__25000_25004 + 1);
seq__24997_25001 = G__25006;
chunk__24998_25002 = G__25007;
count__24999_25003 = G__25008;
i__25000_25004 = G__25009;
continue;
}
} else
{var temp__4092__auto___25010 = cljs.core.seq.call(null,seq__24997_25001);if(temp__4092__auto___25010)
{var seq__24997_25011__$1 = temp__4092__auto___25010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24997_25011__$1))
{var c__4151__auto___25012 = cljs.core.chunk_first.call(null,seq__24997_25011__$1);{
var G__25013 = cljs.core.chunk_rest.call(null,seq__24997_25011__$1);
var G__25014 = c__4151__auto___25012;
var G__25015 = cljs.core.count.call(null,c__4151__auto___25012);
var G__25016 = 0;
seq__24997_25001 = G__25013;
chunk__24998_25002 = G__25014;
count__24999_25003 = G__25015;
i__25000_25004 = G__25016;
continue;
}
} else
{var child_25017 = cljs.core.first.call(null,seq__24997_25011__$1);frag.appendChild(child_25017);
{
var G__25018 = cljs.core.next.call(null,seq__24997_25011__$1);
var G__25019 = null;
var G__25020 = 0;
var G__25021 = 0;
seq__24997_25001 = G__25018;
chunk__24998_25002 = G__25019;
count__24999_25003 = G__25020;
i__25000_25004 = G__25021;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__24991_SHARP_,p2__24992_SHARP_){return f.call(null,p1__24991_SHARP_,p2__24992_SHARP_);
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
{if((function (){var G__25023 = list_thing;if(G__25023)
{var bit__4053__auto__ = (G__25023.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__25023.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25023.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25023);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25023);
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
{if((function (){var G__25024 = content;if(G__25024)
{var bit__4053__auto__ = (G__25024.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__25024.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25024.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25024);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25024);
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
{if((function (){var G__25025 = content;if(G__25025)
{var bit__4053__auto__ = (G__25025.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__25025.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25025.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25025);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25025);
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