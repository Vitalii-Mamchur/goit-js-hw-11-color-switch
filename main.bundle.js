!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o={body:document.querySelector("body"),startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')},i={intervalId:null,changingActiv:!1,min:0,max:r.length-1,start:function(){var t=this;this.changingActiv||(this.changingActiv=!0,this.intervalId=setInterval((function(){var n,e,i=r[(n=t.min,e=t.max,Math.floor(Math.random()*(e-n+1)+n))];o.body.style.background=i}),1e3))},stop:function(){clearInterval(this.intervalId),this.intervalId=null,this.changingActiv=!1}};o.startBtn.addEventListener("click",i.start.bind(i)),o.stopBtn.addEventListener("click",i.stop.bind(i))}]);
//# sourceMappingURL=main.bundle.js.map