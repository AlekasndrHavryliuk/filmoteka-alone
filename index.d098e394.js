!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("7FbzN"),i("j22lP"),i("91Bki"),i("lHIzZ"),i("4Nugj"),i("5118m"),i("8WIIC");var o,a=i("bpxeT"),u=i("2TvXO"),c=i("91Bki"),f=i("4Nugj"),l={},d={},s=i("l5bVx");d=function(t){var n=void 0===t?"undefined":e(s)(t);return null!=t&&("object"==n||"function"==n)};var v,p={},b={};v="object"==typeof t&&t&&t.Object===Object&&t;var g="object"==typeof self&&self&&self.Object===Object&&self,y=v||g||Function("return this")();b=y;p=function(){return b.Date.now()};var m={},h={},x={},j=/\s/;x=function(e){for(var t=e.length;t--&&j.test(e.charAt(t)););return t};var w=/^\s+/;h=function(e){return e?e.slice(0,x(e)+1).replace(w,""):e};var T,O={},E=(s=i("l5bVx"),{});T=b.Symbol;var N={},M=Object.prototype,S=M.hasOwnProperty,D=M.toString,L=T?T.toStringTag:void 0;N=function(e){var t=S.call(e,L),n=e[L];try{e[L]=void 0;var r=!0}catch(e){}var i=D.call(e);return r&&(t?e[L]=n:delete e[L]),i};var k={},I=Object.prototype.toString;k=function(e){return I.call(e)};var P=T?T.toStringTag:void 0;E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":P&&P in Object(e)?N(e):k(e)};var W={};W=function(e){return null!=e&&"object"==typeof e};O=function(t){return"symbol"==(void 0===t?"undefined":e(s)(t))||W(t)&&"[object Symbol]"==E(t)};var _=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,F=/^0o[0-7]+$/i,U=parseInt;m=function(e){if("number"==typeof e)return e;if(O(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=h(e);var n=B.test(e);return n||F.test(e)?U(e.slice(2),n?2:8):_.test(e)?NaN:+e};var $=Math.max,q=Math.min;l=function(e,t,n){var r,i,o,a,u,c,f=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function g(e){return f=e,u=setTimeout(h,t),l?b(e):a}function y(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-f>=o}function h(){var e=p();if(y(e))return x(e);u=setTimeout(h,function(e){var n=t-(e-c);return s?q(n,o-(e-f)):n}(e))}function x(e){return u=void 0,v&&r?b(e):(r=i=void 0,a)}function j(){var e=p(),n=y(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return g(c);if(s)return clearTimeout(u),u=setTimeout(h,t),b(c)}return void 0===u&&(u=setTimeout(h,t)),a}return t=m(t)||0,d(n)&&(l=!!n.leading,o=(s="maxWait"in n)?$(m(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=c=i=u=void 0},j.flush=function(){return void 0===u?a:x(p())},j};o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return d(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),l(e,t,{leading:r,maxWait:t,trailing:i})};var z,C=i("34hLa"),R=i("5118m"),V=(z=e(a)(e(u).mark((function t(){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!document.location.href.includes("index")){t.next=9;break}return t.next=3,C.loadData.genres();case 3:return t.next=5,C.loadData.trends();case 5:c.modalPopup.addModalListeners(),R.render.loadMoreBtn(),f.refs.galleryEl.addEventListener("click",c.modalPopup.open),f.refs.inputSearchEl.addEventListener("input",e(o)(C.loadData.searchMovies,1e3));case 9:case"end":return t.stop()}}),t)}))),function(){return z.apply(this,arguments)});window.addEventListener("load",V)}();
//# sourceMappingURL=index.d098e394.js.map