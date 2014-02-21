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
var opt_wrapper_30514 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_30516 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_30515,table_section_wrapper_30515,opt_wrapper_30514,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_30516,table_section_wrapper_30515,cell_wrapper_30516,opt_wrapper_30514,table_section_wrapper_30515,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_30515]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3445__auto__ = div.firstChild;if(cljs.core.truth_(and__3445__auto__))
{return div.firstChild.childNodes;
} else
{return and__3445__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30521 = cljs.core.seq.call(null,tbody);var chunk__30522 = null;var count__30523 = 0;var i__30524 = 0;while(true){
if((i__30524 < count__30523))
{var child = cljs.core._nth.call(null,chunk__30522,i__30524);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30525 = seq__30521;
var G__30526 = chunk__30522;
var G__30527 = count__30523;
var G__30528 = (i__30524 + 1);
seq__30521 = G__30525;
chunk__30522 = G__30526;
count__30523 = G__30527;
i__30524 = G__30528;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30521);if(temp__4092__auto__)
{var seq__30521__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30521__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__30521__$1);{
var G__30529 = cljs.core.chunk_rest.call(null,seq__30521__$1);
var G__30530 = c__4205__auto__;
var G__30531 = cljs.core.count.call(null,c__4205__auto__);
var G__30532 = 0;
seq__30521 = G__30529;
chunk__30522 = G__30530;
count__30523 = G__30531;
i__30524 = G__30532;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30521__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30533 = cljs.core.next.call(null,seq__30521__$1);
var G__30534 = null;
var G__30535 = 0;
var G__30536 = 0;
seq__30521 = G__30533;
chunk__30522 = G__30534;
count__30523 = G__30535;
i__30524 = G__30536;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__30538 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30538,0,null);var start_wrap = cljs.core.nth.call(null,vec__30538,1,null);var end_wrap = cljs.core.nth.call(null,vec__30538,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__30539 = wrapper.lastChild;
var G__30540 = (level - 1);
wrapper = G__30539;
level = G__30540;
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
if(cljs.core.truth_((function (){var and__3445__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3445__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3445__auto__;
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
domina.DomContent = (function (){var obj30542 = {};return obj30542;
})();
domina.nodes = (function nodes(content){if((function (){var and__3445__auto__ = content;if(and__3445__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3445__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4084__auto__ = (((content == null))?null:content);return (function (){var or__3457__auto__ = (domina.nodes[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.nodes["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3445__auto__ = nodeseq;if(and__3445__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3445__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4084__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3457__auto__ = (domina.single_node[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.single_node["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3445__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3445__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3445__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__30543){
var mesg = cljs.core.seq(arglist__30543);
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
log.cljs$lang$applyTo = (function (arglist__30544){
var mesg = cljs.core.seq(arglist__30544);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__30545){
var contents = cljs.core.seq(arglist__30545);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30546_SHARP_){return p1__30546_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30547_SHARP_,p2__30548_SHARP_){return goog.dom.insertChildAt(p1__30547_SHARP_,p2__30548_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30550_SHARP_,p2__30549_SHARP_){return goog.dom.insertSiblingBefore(p2__30549_SHARP_,p1__30550_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30552_SHARP_,p2__30551_SHARP_){return goog.dom.insertSiblingAfter(p2__30551_SHARP_,p1__30552_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30554_SHARP_,p2__30553_SHARP_){return goog.dom.replaceNode(p2__30553_SHARP_,p1__30554_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__30559_30563 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30560_30564 = null;var count__30561_30565 = 0;var i__30562_30566 = 0;while(true){
if((i__30562_30566 < count__30561_30565))
{var n_30567 = cljs.core._nth.call(null,chunk__30560_30564,i__30562_30566);goog.style.setStyle(n_30567,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30568 = seq__30559_30563;
var G__30569 = chunk__30560_30564;
var G__30570 = count__30561_30565;
var G__30571 = (i__30562_30566 + 1);
seq__30559_30563 = G__30568;
chunk__30560_30564 = G__30569;
count__30561_30565 = G__30570;
i__30562_30566 = G__30571;
continue;
}
} else
{var temp__4092__auto___30572 = cljs.core.seq.call(null,seq__30559_30563);if(temp__4092__auto___30572)
{var seq__30559_30573__$1 = temp__4092__auto___30572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30559_30573__$1))
{var c__4205__auto___30574 = cljs.core.chunk_first.call(null,seq__30559_30573__$1);{
var G__30575 = cljs.core.chunk_rest.call(null,seq__30559_30573__$1);
var G__30576 = c__4205__auto___30574;
var G__30577 = cljs.core.count.call(null,c__4205__auto___30574);
var G__30578 = 0;
seq__30559_30563 = G__30575;
chunk__30560_30564 = G__30576;
count__30561_30565 = G__30577;
i__30562_30566 = G__30578;
continue;
}
} else
{var n_30579 = cljs.core.first.call(null,seq__30559_30573__$1);goog.style.setStyle(n_30579,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30580 = cljs.core.next.call(null,seq__30559_30573__$1);
var G__30581 = null;
var G__30582 = 0;
var G__30583 = 0;
seq__30559_30563 = G__30580;
chunk__30560_30564 = G__30581;
count__30561_30565 = G__30582;
i__30562_30566 = G__30583;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30584){
var content = cljs.core.first(arglist__30584);
arglist__30584 = cljs.core.next(arglist__30584);
var name = cljs.core.first(arglist__30584);
var value = cljs.core.rest(arglist__30584);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__30589_30593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30590_30594 = null;var count__30591_30595 = 0;var i__30592_30596 = 0;while(true){
if((i__30592_30596 < count__30591_30595))
{var n_30597 = cljs.core._nth.call(null,chunk__30590_30594,i__30592_30596);n_30597.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30598 = seq__30589_30593;
var G__30599 = chunk__30590_30594;
var G__30600 = count__30591_30595;
var G__30601 = (i__30592_30596 + 1);
seq__30589_30593 = G__30598;
chunk__30590_30594 = G__30599;
count__30591_30595 = G__30600;
i__30592_30596 = G__30601;
continue;
}
} else
{var temp__4092__auto___30602 = cljs.core.seq.call(null,seq__30589_30593);if(temp__4092__auto___30602)
{var seq__30589_30603__$1 = temp__4092__auto___30602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30589_30603__$1))
{var c__4205__auto___30604 = cljs.core.chunk_first.call(null,seq__30589_30603__$1);{
var G__30605 = cljs.core.chunk_rest.call(null,seq__30589_30603__$1);
var G__30606 = c__4205__auto___30604;
var G__30607 = cljs.core.count.call(null,c__4205__auto___30604);
var G__30608 = 0;
seq__30589_30593 = G__30605;
chunk__30590_30594 = G__30606;
count__30591_30595 = G__30607;
i__30592_30596 = G__30608;
continue;
}
} else
{var n_30609 = cljs.core.first.call(null,seq__30589_30603__$1);n_30609.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30610 = cljs.core.next.call(null,seq__30589_30603__$1);
var G__30611 = null;
var G__30612 = 0;
var G__30613 = 0;
seq__30589_30593 = G__30610;
chunk__30590_30594 = G__30611;
count__30591_30595 = G__30612;
i__30592_30596 = G__30613;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30614){
var content = cljs.core.first(arglist__30614);
arglist__30614 = cljs.core.next(arglist__30614);
var name = cljs.core.first(arglist__30614);
var value = cljs.core.rest(arglist__30614);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30619_30623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30620_30624 = null;var count__30621_30625 = 0;var i__30622_30626 = 0;while(true){
if((i__30622_30626 < count__30621_30625))
{var n_30627 = cljs.core._nth.call(null,chunk__30620_30624,i__30622_30626);n_30627.removeAttribute(cljs.core.name.call(null,name));
{
var G__30628 = seq__30619_30623;
var G__30629 = chunk__30620_30624;
var G__30630 = count__30621_30625;
var G__30631 = (i__30622_30626 + 1);
seq__30619_30623 = G__30628;
chunk__30620_30624 = G__30629;
count__30621_30625 = G__30630;
i__30622_30626 = G__30631;
continue;
}
} else
{var temp__4092__auto___30632 = cljs.core.seq.call(null,seq__30619_30623);if(temp__4092__auto___30632)
{var seq__30619_30633__$1 = temp__4092__auto___30632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30619_30633__$1))
{var c__4205__auto___30634 = cljs.core.chunk_first.call(null,seq__30619_30633__$1);{
var G__30635 = cljs.core.chunk_rest.call(null,seq__30619_30633__$1);
var G__30636 = c__4205__auto___30634;
var G__30637 = cljs.core.count.call(null,c__4205__auto___30634);
var G__30638 = 0;
seq__30619_30623 = G__30635;
chunk__30620_30624 = G__30636;
count__30621_30625 = G__30637;
i__30622_30626 = G__30638;
continue;
}
} else
{var n_30639 = cljs.core.first.call(null,seq__30619_30633__$1);n_30639.removeAttribute(cljs.core.name.call(null,name));
{
var G__30640 = cljs.core.next.call(null,seq__30619_30633__$1);
var G__30641 = null;
var G__30642 = 0;
var G__30643 = 0;
seq__30619_30623 = G__30640;
chunk__30620_30624 = G__30641;
count__30621_30625 = G__30642;
i__30622_30626 = G__30643;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30645 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30645,0,null);var v = cljs.core.nth.call(null,vec__30645,1,null);if(cljs.core.truth_((function (){var and__3445__auto__ = k;if(cljs.core.truth_(and__3445__auto__))
{return v;
} else
{return and__3445__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__30646_SHARP_){var attr = attrs__$1.item(p1__30646_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30653_30659 = cljs.core.seq.call(null,styles);var chunk__30654_30660 = null;var count__30655_30661 = 0;var i__30656_30662 = 0;while(true){
if((i__30656_30662 < count__30655_30661))
{var vec__30657_30663 = cljs.core._nth.call(null,chunk__30654_30660,i__30656_30662);var name_30664 = cljs.core.nth.call(null,vec__30657_30663,0,null);var value_30665 = cljs.core.nth.call(null,vec__30657_30663,1,null);domina.set_style_BANG_.call(null,content,name_30664,value_30665);
{
var G__30666 = seq__30653_30659;
var G__30667 = chunk__30654_30660;
var G__30668 = count__30655_30661;
var G__30669 = (i__30656_30662 + 1);
seq__30653_30659 = G__30666;
chunk__30654_30660 = G__30667;
count__30655_30661 = G__30668;
i__30656_30662 = G__30669;
continue;
}
} else
{var temp__4092__auto___30670 = cljs.core.seq.call(null,seq__30653_30659);if(temp__4092__auto___30670)
{var seq__30653_30671__$1 = temp__4092__auto___30670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30653_30671__$1))
{var c__4205__auto___30672 = cljs.core.chunk_first.call(null,seq__30653_30671__$1);{
var G__30673 = cljs.core.chunk_rest.call(null,seq__30653_30671__$1);
var G__30674 = c__4205__auto___30672;
var G__30675 = cljs.core.count.call(null,c__4205__auto___30672);
var G__30676 = 0;
seq__30653_30659 = G__30673;
chunk__30654_30660 = G__30674;
count__30655_30661 = G__30675;
i__30656_30662 = G__30676;
continue;
}
} else
{var vec__30658_30677 = cljs.core.first.call(null,seq__30653_30671__$1);var name_30678 = cljs.core.nth.call(null,vec__30658_30677,0,null);var value_30679 = cljs.core.nth.call(null,vec__30658_30677,1,null);domina.set_style_BANG_.call(null,content,name_30678,value_30679);
{
var G__30680 = cljs.core.next.call(null,seq__30653_30671__$1);
var G__30681 = null;
var G__30682 = 0;
var G__30683 = 0;
seq__30653_30659 = G__30680;
chunk__30654_30660 = G__30681;
count__30655_30661 = G__30682;
i__30656_30662 = G__30683;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30690_30696 = cljs.core.seq.call(null,attrs);var chunk__30691_30697 = null;var count__30692_30698 = 0;var i__30693_30699 = 0;while(true){
if((i__30693_30699 < count__30692_30698))
{var vec__30694_30700 = cljs.core._nth.call(null,chunk__30691_30697,i__30693_30699);var name_30701 = cljs.core.nth.call(null,vec__30694_30700,0,null);var value_30702 = cljs.core.nth.call(null,vec__30694_30700,1,null);domina.set_attr_BANG_.call(null,content,name_30701,value_30702);
{
var G__30703 = seq__30690_30696;
var G__30704 = chunk__30691_30697;
var G__30705 = count__30692_30698;
var G__30706 = (i__30693_30699 + 1);
seq__30690_30696 = G__30703;
chunk__30691_30697 = G__30704;
count__30692_30698 = G__30705;
i__30693_30699 = G__30706;
continue;
}
} else
{var temp__4092__auto___30707 = cljs.core.seq.call(null,seq__30690_30696);if(temp__4092__auto___30707)
{var seq__30690_30708__$1 = temp__4092__auto___30707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30690_30708__$1))
{var c__4205__auto___30709 = cljs.core.chunk_first.call(null,seq__30690_30708__$1);{
var G__30710 = cljs.core.chunk_rest.call(null,seq__30690_30708__$1);
var G__30711 = c__4205__auto___30709;
var G__30712 = cljs.core.count.call(null,c__4205__auto___30709);
var G__30713 = 0;
seq__30690_30696 = G__30710;
chunk__30691_30697 = G__30711;
count__30692_30698 = G__30712;
i__30693_30699 = G__30713;
continue;
}
} else
{var vec__30695_30714 = cljs.core.first.call(null,seq__30690_30708__$1);var name_30715 = cljs.core.nth.call(null,vec__30695_30714,0,null);var value_30716 = cljs.core.nth.call(null,vec__30695_30714,1,null);domina.set_attr_BANG_.call(null,content,name_30715,value_30716);
{
var G__30717 = cljs.core.next.call(null,seq__30690_30708__$1);
var G__30718 = null;
var G__30719 = 0;
var G__30720 = 0;
seq__30690_30696 = G__30717;
chunk__30691_30697 = G__30718;
count__30692_30698 = G__30719;
i__30693_30699 = G__30720;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30725_30729 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30726_30730 = null;var count__30727_30731 = 0;var i__30728_30732 = 0;while(true){
if((i__30728_30732 < count__30727_30731))
{var node_30733 = cljs.core._nth.call(null,chunk__30726_30730,i__30728_30732);goog.dom.classes.add(node_30733,class$);
{
var G__30734 = seq__30725_30729;
var G__30735 = chunk__30726_30730;
var G__30736 = count__30727_30731;
var G__30737 = (i__30728_30732 + 1);
seq__30725_30729 = G__30734;
chunk__30726_30730 = G__30735;
count__30727_30731 = G__30736;
i__30728_30732 = G__30737;
continue;
}
} else
{var temp__4092__auto___30738 = cljs.core.seq.call(null,seq__30725_30729);if(temp__4092__auto___30738)
{var seq__30725_30739__$1 = temp__4092__auto___30738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30725_30739__$1))
{var c__4205__auto___30740 = cljs.core.chunk_first.call(null,seq__30725_30739__$1);{
var G__30741 = cljs.core.chunk_rest.call(null,seq__30725_30739__$1);
var G__30742 = c__4205__auto___30740;
var G__30743 = cljs.core.count.call(null,c__4205__auto___30740);
var G__30744 = 0;
seq__30725_30729 = G__30741;
chunk__30726_30730 = G__30742;
count__30727_30731 = G__30743;
i__30728_30732 = G__30744;
continue;
}
} else
{var node_30745 = cljs.core.first.call(null,seq__30725_30739__$1);goog.dom.classes.add(node_30745,class$);
{
var G__30746 = cljs.core.next.call(null,seq__30725_30739__$1);
var G__30747 = null;
var G__30748 = 0;
var G__30749 = 0;
seq__30725_30729 = G__30746;
chunk__30726_30730 = G__30747;
count__30727_30731 = G__30748;
i__30728_30732 = G__30749;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30754_30758 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30755_30759 = null;var count__30756_30760 = 0;var i__30757_30761 = 0;while(true){
if((i__30757_30761 < count__30756_30760))
{var node_30762 = cljs.core._nth.call(null,chunk__30755_30759,i__30757_30761);goog.dom.classes.remove(node_30762,class$);
{
var G__30763 = seq__30754_30758;
var G__30764 = chunk__30755_30759;
var G__30765 = count__30756_30760;
var G__30766 = (i__30757_30761 + 1);
seq__30754_30758 = G__30763;
chunk__30755_30759 = G__30764;
count__30756_30760 = G__30765;
i__30757_30761 = G__30766;
continue;
}
} else
{var temp__4092__auto___30767 = cljs.core.seq.call(null,seq__30754_30758);if(temp__4092__auto___30767)
{var seq__30754_30768__$1 = temp__4092__auto___30767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30754_30768__$1))
{var c__4205__auto___30769 = cljs.core.chunk_first.call(null,seq__30754_30768__$1);{
var G__30770 = cljs.core.chunk_rest.call(null,seq__30754_30768__$1);
var G__30771 = c__4205__auto___30769;
var G__30772 = cljs.core.count.call(null,c__4205__auto___30769);
var G__30773 = 0;
seq__30754_30758 = G__30770;
chunk__30755_30759 = G__30771;
count__30756_30760 = G__30772;
i__30757_30761 = G__30773;
continue;
}
} else
{var node_30774 = cljs.core.first.call(null,seq__30754_30768__$1);goog.dom.classes.remove(node_30774,class$);
{
var G__30775 = cljs.core.next.call(null,seq__30754_30768__$1);
var G__30776 = null;
var G__30777 = 0;
var G__30778 = 0;
seq__30754_30758 = G__30775;
chunk__30755_30759 = G__30776;
count__30756_30760 = G__30777;
i__30757_30761 = G__30778;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30783_30787 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30784_30788 = null;var count__30785_30789 = 0;var i__30786_30790 = 0;while(true){
if((i__30786_30790 < count__30785_30789))
{var node_30791 = cljs.core._nth.call(null,chunk__30784_30788,i__30786_30790);goog.dom.classes.toggle(node_30791,class$);
{
var G__30792 = seq__30783_30787;
var G__30793 = chunk__30784_30788;
var G__30794 = count__30785_30789;
var G__30795 = (i__30786_30790 + 1);
seq__30783_30787 = G__30792;
chunk__30784_30788 = G__30793;
count__30785_30789 = G__30794;
i__30786_30790 = G__30795;
continue;
}
} else
{var temp__4092__auto___30796 = cljs.core.seq.call(null,seq__30783_30787);if(temp__4092__auto___30796)
{var seq__30783_30797__$1 = temp__4092__auto___30796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30783_30797__$1))
{var c__4205__auto___30798 = cljs.core.chunk_first.call(null,seq__30783_30797__$1);{
var G__30799 = cljs.core.chunk_rest.call(null,seq__30783_30797__$1);
var G__30800 = c__4205__auto___30798;
var G__30801 = cljs.core.count.call(null,c__4205__auto___30798);
var G__30802 = 0;
seq__30783_30787 = G__30799;
chunk__30784_30788 = G__30800;
count__30785_30789 = G__30801;
i__30786_30790 = G__30802;
continue;
}
} else
{var node_30803 = cljs.core.first.call(null,seq__30783_30797__$1);goog.dom.classes.toggle(node_30803,class$);
{
var G__30804 = cljs.core.next.call(null,seq__30783_30797__$1);
var G__30805 = null;
var G__30806 = 0;
var G__30807 = 0;
seq__30783_30787 = G__30804;
chunk__30784_30788 = G__30805;
count__30785_30789 = G__30806;
i__30786_30790 = G__30807;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30816__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30812_30817 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30813_30818 = null;var count__30814_30819 = 0;var i__30815_30820 = 0;while(true){
if((i__30815_30820 < count__30814_30819))
{var node_30821 = cljs.core._nth.call(null,chunk__30813_30818,i__30815_30820);goog.dom.classes.set(node_30821,classes_30816__$1);
{
var G__30822 = seq__30812_30817;
var G__30823 = chunk__30813_30818;
var G__30824 = count__30814_30819;
var G__30825 = (i__30815_30820 + 1);
seq__30812_30817 = G__30822;
chunk__30813_30818 = G__30823;
count__30814_30819 = G__30824;
i__30815_30820 = G__30825;
continue;
}
} else
{var temp__4092__auto___30826 = cljs.core.seq.call(null,seq__30812_30817);if(temp__4092__auto___30826)
{var seq__30812_30827__$1 = temp__4092__auto___30826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30812_30827__$1))
{var c__4205__auto___30828 = cljs.core.chunk_first.call(null,seq__30812_30827__$1);{
var G__30829 = cljs.core.chunk_rest.call(null,seq__30812_30827__$1);
var G__30830 = c__4205__auto___30828;
var G__30831 = cljs.core.count.call(null,c__4205__auto___30828);
var G__30832 = 0;
seq__30812_30817 = G__30829;
chunk__30813_30818 = G__30830;
count__30814_30819 = G__30831;
i__30815_30820 = G__30832;
continue;
}
} else
{var node_30833 = cljs.core.first.call(null,seq__30812_30827__$1);goog.dom.classes.set(node_30833,classes_30816__$1);
{
var G__30834 = cljs.core.next.call(null,seq__30812_30827__$1);
var G__30835 = null;
var G__30836 = 0;
var G__30837 = 0;
seq__30812_30817 = G__30834;
chunk__30813_30818 = G__30835;
count__30814_30819 = G__30836;
i__30815_30820 = G__30837;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30842_30846 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30843_30847 = null;var count__30844_30848 = 0;var i__30845_30849 = 0;while(true){
if((i__30845_30849 < count__30844_30848))
{var node_30850 = cljs.core._nth.call(null,chunk__30843_30847,i__30845_30849);goog.dom.setTextContent(node_30850,value);
{
var G__30851 = seq__30842_30846;
var G__30852 = chunk__30843_30847;
var G__30853 = count__30844_30848;
var G__30854 = (i__30845_30849 + 1);
seq__30842_30846 = G__30851;
chunk__30843_30847 = G__30852;
count__30844_30848 = G__30853;
i__30845_30849 = G__30854;
continue;
}
} else
{var temp__4092__auto___30855 = cljs.core.seq.call(null,seq__30842_30846);if(temp__4092__auto___30855)
{var seq__30842_30856__$1 = temp__4092__auto___30855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30842_30856__$1))
{var c__4205__auto___30857 = cljs.core.chunk_first.call(null,seq__30842_30856__$1);{
var G__30858 = cljs.core.chunk_rest.call(null,seq__30842_30856__$1);
var G__30859 = c__4205__auto___30857;
var G__30860 = cljs.core.count.call(null,c__4205__auto___30857);
var G__30861 = 0;
seq__30842_30846 = G__30858;
chunk__30843_30847 = G__30859;
count__30844_30848 = G__30860;
i__30845_30849 = G__30861;
continue;
}
} else
{var node_30862 = cljs.core.first.call(null,seq__30842_30856__$1);goog.dom.setTextContent(node_30862,value);
{
var G__30863 = cljs.core.next.call(null,seq__30842_30856__$1);
var G__30864 = null;
var G__30865 = 0;
var G__30866 = 0;
seq__30842_30846 = G__30863;
chunk__30843_30847 = G__30864;
count__30844_30848 = G__30865;
i__30845_30849 = G__30866;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30871_30875 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30872_30876 = null;var count__30873_30877 = 0;var i__30874_30878 = 0;while(true){
if((i__30874_30878 < count__30873_30877))
{var node_30879 = cljs.core._nth.call(null,chunk__30872_30876,i__30874_30878);goog.dom.forms.setValue(node_30879,value);
{
var G__30880 = seq__30871_30875;
var G__30881 = chunk__30872_30876;
var G__30882 = count__30873_30877;
var G__30883 = (i__30874_30878 + 1);
seq__30871_30875 = G__30880;
chunk__30872_30876 = G__30881;
count__30873_30877 = G__30882;
i__30874_30878 = G__30883;
continue;
}
} else
{var temp__4092__auto___30884 = cljs.core.seq.call(null,seq__30871_30875);if(temp__4092__auto___30884)
{var seq__30871_30885__$1 = temp__4092__auto___30884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30871_30885__$1))
{var c__4205__auto___30886 = cljs.core.chunk_first.call(null,seq__30871_30885__$1);{
var G__30887 = cljs.core.chunk_rest.call(null,seq__30871_30885__$1);
var G__30888 = c__4205__auto___30886;
var G__30889 = cljs.core.count.call(null,c__4205__auto___30886);
var G__30890 = 0;
seq__30871_30875 = G__30887;
chunk__30872_30876 = G__30888;
count__30873_30877 = G__30889;
i__30874_30878 = G__30890;
continue;
}
} else
{var node_30891 = cljs.core.first.call(null,seq__30871_30885__$1);goog.dom.forms.setValue(node_30891,value);
{
var G__30892 = cljs.core.next.call(null,seq__30871_30885__$1);
var G__30893 = null;
var G__30894 = 0;
var G__30895 = 0;
seq__30871_30875 = G__30892;
chunk__30872_30876 = G__30893;
count__30873_30877 = G__30894;
i__30874_30878 = G__30895;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3445__auto__ = allows_inner_html_QMARK_;if(and__3445__auto__)
{var and__3445__auto____$1 = (function (){var or__3457__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3445__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3445__auto____$1;
}
} else
{return and__3445__auto__;
}
})()))
{var value_30906 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__30902_30907 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30903_30908 = null;var count__30904_30909 = 0;var i__30905_30910 = 0;while(true){
if((i__30905_30910 < count__30904_30909))
{var node_30911 = cljs.core._nth.call(null,chunk__30903_30908,i__30905_30910);node_30911.innerHTML = value_30906;
{
var G__30912 = seq__30902_30907;
var G__30913 = chunk__30903_30908;
var G__30914 = count__30904_30909;
var G__30915 = (i__30905_30910 + 1);
seq__30902_30907 = G__30912;
chunk__30903_30908 = G__30913;
count__30904_30909 = G__30914;
i__30905_30910 = G__30915;
continue;
}
} else
{var temp__4092__auto___30916 = cljs.core.seq.call(null,seq__30902_30907);if(temp__4092__auto___30916)
{var seq__30902_30917__$1 = temp__4092__auto___30916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30902_30917__$1))
{var c__4205__auto___30918 = cljs.core.chunk_first.call(null,seq__30902_30917__$1);{
var G__30919 = cljs.core.chunk_rest.call(null,seq__30902_30917__$1);
var G__30920 = c__4205__auto___30918;
var G__30921 = cljs.core.count.call(null,c__4205__auto___30918);
var G__30922 = 0;
seq__30902_30907 = G__30919;
chunk__30903_30908 = G__30920;
count__30904_30909 = G__30921;
i__30905_30910 = G__30922;
continue;
}
} else
{var node_30923 = cljs.core.first.call(null,seq__30902_30917__$1);node_30923.innerHTML = value_30906;
{
var G__30924 = cljs.core.next.call(null,seq__30902_30917__$1);
var G__30925 = null;
var G__30926 = 0;
var G__30927 = 0;
seq__30902_30907 = G__30924;
chunk__30903_30908 = G__30925;
count__30904_30909 = G__30926;
i__30905_30910 = G__30927;
continue;
}
}
} else
{}
}
break;
}
}catch (e30901){if((e30901 instanceof Error))
{var e_30928 = e30901;domina.replace_children_BANG_.call(null,content,value_30906);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30901;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3445__auto__ = bubble;if(cljs.core.truth_(and__3445__auto__))
{return (value == null);
} else
{return and__3445__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3457__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__30935_30939 = cljs.core.seq.call(null,children);var chunk__30936_30940 = null;var count__30937_30941 = 0;var i__30938_30942 = 0;while(true){
if((i__30938_30942 < count__30937_30941))
{var child_30943 = cljs.core._nth.call(null,chunk__30936_30940,i__30938_30942);frag.appendChild(child_30943);
{
var G__30944 = seq__30935_30939;
var G__30945 = chunk__30936_30940;
var G__30946 = count__30937_30941;
var G__30947 = (i__30938_30942 + 1);
seq__30935_30939 = G__30944;
chunk__30936_30940 = G__30945;
count__30937_30941 = G__30946;
i__30938_30942 = G__30947;
continue;
}
} else
{var temp__4092__auto___30948 = cljs.core.seq.call(null,seq__30935_30939);if(temp__4092__auto___30948)
{var seq__30935_30949__$1 = temp__4092__auto___30948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30935_30949__$1))
{var c__4205__auto___30950 = cljs.core.chunk_first.call(null,seq__30935_30949__$1);{
var G__30951 = cljs.core.chunk_rest.call(null,seq__30935_30949__$1);
var G__30952 = c__4205__auto___30950;
var G__30953 = cljs.core.count.call(null,c__4205__auto___30950);
var G__30954 = 0;
seq__30935_30939 = G__30951;
chunk__30936_30940 = G__30952;
count__30937_30941 = G__30953;
i__30938_30942 = G__30954;
continue;
}
} else
{var child_30955 = cljs.core.first.call(null,seq__30935_30949__$1);frag.appendChild(child_30955);
{
var G__30956 = cljs.core.next.call(null,seq__30935_30949__$1);
var G__30957 = null;
var G__30958 = 0;
var G__30959 = 0;
seq__30935_30939 = G__30956;
chunk__30936_30940 = G__30957;
count__30937_30941 = G__30958;
i__30938_30942 = G__30959;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30929_SHARP_,p2__30930_SHARP_){return f.call(null,p1__30929_SHARP_,p2__30930_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3445__auto__ = obj;if(cljs.core.truth_(and__3445__auto__))
{var and__3445__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3445__auto____$1)
{return obj.length;
} else
{return and__3445__auto____$1;
}
} else
{return and__3445__auto__;
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
{if((function (){var G__30961 = list_thing;if(G__30961)
{var bit__4107__auto__ = (G__30961.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4107__auto__) || (G__30961.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30961);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30961);
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
{if((function (){var G__30962 = content;if(G__30962)
{var bit__4107__auto__ = (G__30962.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4107__auto__) || (G__30962.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30962);
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
{if((function (){var G__30963 = content;if(G__30963)
{var bit__4107__auto__ = (G__30963.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4107__auto__) || (G__30963.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30963);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30963);
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