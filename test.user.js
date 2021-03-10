// ==UserScript==
// @name    betterEink
// @version 0.1
// @description Script to make web browsing better on e-ink
// @author Anurag
// @match   *://*/*
// ==/UserScript==

(function () {
 var htmls = document.getElementsByTagName('*'); 
 var i = htmls.length - 1; 
 var elem; 
 while (i) {
  elem = htmls[i]; 
  if (elem && elem.style) {
   elem.style.background-color = '#ffffff'; 
   elem.style.color = '#000000'; 
   elem.style.text-shadow = "0.34px 0.34px"; 
  } i--; 
 }
})();
