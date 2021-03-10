// ==UserScript==
// @name    e-ink browser test script
// @version 0.1
// @description Script to make web browsing better on e-ink
// @author Anurag
// @match   *
// ==/UserScript==

(function () {
 var htmls = document.getElementsByTagName('*'); var i = htmls.length - 1; var elem; while (i) { elem = htmls[i]; if (elem && elem.style) { elem.style.background = '#fff'; elem.style.color = '#000'; elem.style.wordWrap = "break-word"; elem.style.whiteSpace = "pre-wrap"; if(['PRE', 'CODE'].indexOf(elem.tagName) > -1) { elem.style.whiteSpace = "pre-wrap"; } } i--; }
 })
 ();

