/*! For license information please see 1180.a985bfd0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[1180,7086,79,4798],{7086:function(n,t,e){e.r(t),e.d(t,{I:function(){return c},a:function(){return d},b:function(){return u},c:function(){return m},d:function(){return w},f:function(){return f},g:function(){return s},i:function(){return l},p:function(){return h},r:function(){return p},s:function(){return v}});var o=e(5971),r=e(1787),i=e(704),u="ion-content",c=".ion-content-scroll-host",a="".concat(u,", ").concat(c),l=function(n){return"ION-CONTENT"===n.tagName},s=function(n){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return l(n)?[4,new Promise((function(t){return(0,r.c)(n,t)}))]:[3,2];case 1:return t.sent(),[2,n.getScrollElement()];case 2:return[2,n]}}))}))},d=function(n){var t=n.querySelector(c);return t||n.querySelector(a)},f=function(n){return n.closest(a)},v=function(n,t){return l(n)?n.scrollToTop(t):Promise.resolve(n.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))},m=function(n,t,e,o){return l(n)?n.scrollByPoint(t,e,o):Promise.resolve(n.scrollBy({top:e,left:t,behavior:o>0?"smooth":"auto"}))},h=function(n){return(0,i.b)(n,u)},w=function(n){if(l(n)){var t=n,e=t.scrollY;return t.scrollY=!1,e}return n.style.setProperty("overflow","hidden"),!0},p=function(n,t){l(n)?n.scrollY=t:n.style.removeProperty("overflow")}},1180:function(n,t,e){e.r(t),e.d(t,{startInputShims:function(){return y}});var o=e(5971),r=e(7086),i=e(1787),u=e(79),c=(e(2913),new WeakMap),a=function(n,t,e,o,r){void 0===o&&(o=0),void 0===r&&(r=!1),c.has(n)!==e&&(e?l(n,t,o,r):s(n,t))},l=function(n,t,e,o){void 0===o&&(o=!1);var r=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),r.appendChild(i),c.set(n,i);var u="rtl"===n.ownerDocument.dir?9999:-9999;n.style.pointerEvents="none",t.style.transform="translate3d(".concat(u,"px,").concat(e,"px,0) scale(0)")},s=function(n,t){var e=c.get(n);e&&(c.delete(n),e.remove()),n.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",f=function(n,t,e,o){var r=n.top,i=n.bottom,u=t.top,c=u+15,a=Math.min(t.bottom,o-e)-50-i,l=c-r,s=Math.round(a<0?-a:l>0?-l:0),d=Math.min(s,r-u),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:e,inputSafeY:4-(r-c)}},v="$ionPaddingTimer",m=function(n,t,e){var o=n[v];o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n[v]=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px"),e&&e()}),120)},h=function(n,t,e){n.addEventListener("focusout",(function(){t&&m(t,0,e)}),{once:!0})},w=0,p="data-ionic-skip-scroll-assist",b=function(n){document.activeElement!==n&&(n.setAttribute(p,"true"),n.focus())},g=function(n,t,e,u,c,l,s){return void 0===s&&(s=!1),(0,o.mG)(void 0,void 0,void 0,(function(){var d,v,p,g,y,E;return(0,o.Jh)(this,(function(S){switch(S.label){case 0:return e||u?(d=function(n,t,e){var o,r=null!==(o=n.closest("ion-item,[ion-item]"))&&void 0!==o?o:n;return f(r.getBoundingClientRect(),t.getBoundingClientRect(),e,n.ownerDocument.defaultView.innerHeight)}(n,e||u,c),e&&Math.abs(d.scrollAmount)<4?(b(t),l&&null!==e&&(m(e,w),h(t,e,(function(){return w=0}))),[2]):(a(n,t,!0,d.inputSafeY,s),b(t),(0,i.r)((function(){return n.click()})),l&&e&&(w=d.scrollPadding,m(e,w)),"undefined"===typeof window?[3,3]:(p=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",g),window.removeEventListener("ionKeyboardDidShow",p),e?[4,(0,r.c)(e,0,d.scrollAmount,d.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(n,t,!1,d.inputSafeY),b(t),l&&h(t,e,(function(){return w=0})),[2]}}))}))},g=function(){window.removeEventListener("ionKeyboardDidShow",g),window.addEventListener("ionKeyboardDidShow",p)},e?[4,(0,r.g)(e)]:[3,2]))):[2];case 1:if(y=S.sent(),E=y.scrollHeight-y.clientHeight,d.scrollAmount>E-y.scrollTop)return"password"===t.type?(d.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",g)):window.addEventListener("ionKeyboardDidShow",p),v=setTimeout(p,1e3),[2];S.label=2;case 2:p(),S.label=3;case 3:return[2]}}))}))},y=function(n,t){return(0,o.mG)(void 0,void 0,void 0,(function(){var e,c,l,s,f,v,m,h,w,b,y,E,S,L,P,M,D;return(0,o.Jh)(this,(function(N){switch(N.label){case 0:return e=document,c="ios"===t,l="android"===t,s=n.getNumber("keyboardHeight",290),f=n.getBoolean("scrollAssist",!0),v=n.getBoolean("hideCaretOnScroll",c),m=n.getBoolean("inputBlurring",c),h=n.getBoolean("scrollPadding",!0),w=Array.from(e.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,y=new WeakMap,[4,u.K.getResizeMode()];case 1:for(E=N.sent(),S=function(n){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,e,c,d,m;return(0,o.Jh)(this,(function(w){switch(w.label){case 0:return[4,new Promise((function(t){return(0,i.c)(n,t)}))];case 1:return w.sent(),t=n.shadowRoot||n,e=t.querySelector("input")||t.querySelector("textarea"),c=(0,r.f)(n),d=c?null:n.closest("ion-footer"),e?(c&&v&&!b.has(n)&&(m=function(n,t,e){if(!e||!t)return function(){};var o=function(e){(function(n){return n===n.getRootNode().activeElement})(t)&&a(n,t,e)},r=function(){return a(n,t,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return(0,i.a)(e,"ionScrollStart",u),(0,i.a)(e,"ionScrollEnd",c),t.addEventListener("blur",r),function(){(0,i.b)(e,"ionScrollStart",u),(0,i.b)(e,"ionScrollEnd",c),t.removeEventListener("blur",r)}}(n,e,c),b.set(n,m)),"date"===e.type||"datetime-local"===e.type||!c&&!d||!f||y.has(n)||(m=function(n,t,e,r,i,c,a,l){void 0===l&&(l=!1);var s=c&&(void 0===a||a.mode===u.a.None),d=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){return t.hasAttribute(p)?(t.removeAttribute(p),[2]):(g(n,t,e,r,i,s,l),[2])}))}))};return n.addEventListener("focusin",d,!0),function(){n.removeEventListener("focusin",d,!0)}}(n,e,c,d,s,h,E,l),y.set(n,m)),[2]):[2]}}))}))},L=function(n){var t;v&&((t=b.get(n))&&t(),b.delete(n));f&&((t=y.get(n))&&t(),y.delete(n))},m&&function(){var n=!0,t=!1,e=document,o=function(){t=!0},r=function(){n=!0},u=function(o){if(t)t=!1;else{var r=e.activeElement;if(r&&!r.matches(d)){var i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(n=!1,setTimeout((function(){n||r.blur()}),50)))}}};(0,i.a)(e,"ionScrollStart",o),e.addEventListener("focusin",r,!0),e.addEventListener("touchend",u,!1)}(),P=0,M=w;P<M.length;P++)D=M[P],S(D);return e.addEventListener("ionInputDidLoad",(function(n){S(n.detail)})),e.addEventListener("ionInputDidUnload",(function(n){L(n.detail)})),[2]}}))}))}},79:function(n,t,e){e.r(t),e.d(t,{K:function(){return u},a:function(){return o}});var o,r,i=e(2913);(r=o||(o={})).Body="body",r.Ionic="ionic",r.Native="native",r.None="none";var u={getEngine:function(){var n;return(null===(n=null===i.w||void 0===i.w?void 0:i.w.Capacitor)||void 0===n?void 0:n.isPluginAvailable("Keyboard"))&&(null===i.w||void 0===i.w?void 0:i.w.Capacitor.Plugins.Keyboard)},getResizeMode:function(){var n=this.getEngine();return(null===n||void 0===n?void 0:n.getResizeMode)?n.getResizeMode().catch((function(n){if("UNIMPLEMENTED"!==n.code)throw n})):Promise.resolve(void 0)}}}}]);
//# sourceMappingURL=1180.a985bfd0.chunk.js.map