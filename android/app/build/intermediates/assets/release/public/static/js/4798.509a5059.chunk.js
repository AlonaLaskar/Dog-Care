"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[4798],{1180:function(t,e,n){n.r(e),n.d(e,{startInputShims:function(){return y}});var o=n(5971),i=n(7086),r=n(1787),u=n(79),a=(n(2913),new WeakMap),c=function(t,e,n,o,i){void 0===o&&(o=0),void 0===i&&(i=!1),a.has(t)!==n&&(n?s(t,e,o,i):d(t,e))},s=function(t,e,n,o){void 0===o&&(o=!1);var i=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),a.set(t,r);var u="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d(".concat(u,"px,").concat(n,"px,0) scale(0)")},d=function(t,e){var n=a.get(t);n&&(a.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},l="input, textarea, [no-blur], [contenteditable]",f=function(t,e,n,o){var i=t.top,r=t.bottom,u=e.top,a=u+15,c=Math.min(e.bottom,o-n)-50-r,s=a-i,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,i-u),f=Math.abs(l)/.3;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(i-a)}},v="$ionPaddingTimer",m=function(t,e,n){var o=t[v];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset","".concat(e,"px")):t[v]=setTimeout((function(){t.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},h=function(t,e,n){t.addEventListener("focusout",(function(){e&&m(e,0,n)}),{once:!0})},p=0,b="data-ionic-skip-scroll-assist",w=function(t){document.activeElement!==t&&(t.setAttribute(b,"true"),t.focus())},g=function(t,e,n,u,a,s,d){return void 0===d&&(d=!1),(0,o.mG)(void 0,void 0,void 0,(function(){var l,v,b,g,y,E;return(0,o.Jh)(this,(function(S){switch(S.label){case 0:return n||u?(l=function(t,e,n){var o,i=null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t;return f(i.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(t,n||u,a),n&&Math.abs(l.scrollAmount)<4?(w(e),s&&null!==n&&(m(n,p),h(e,n,(function(){return p=0}))),[2]):(c(t,e,!0,l.inputSafeY,d),w(e),(0,r.r)((function(){return t.click()})),s&&n&&(p=l.scrollPadding,m(n,p)),"undefined"===typeof window?[3,3]:(b=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",g),window.removeEventListener("ionKeyboardDidShow",b),n?[4,(0,i.c)(n,0,l.scrollAmount,l.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return c(t,e,!1,l.inputSafeY),w(e),s&&h(e,n,(function(){return p=0})),[2]}}))}))},g=function(){window.removeEventListener("ionKeyboardDidShow",g),window.addEventListener("ionKeyboardDidShow",b)},n?[4,(0,i.g)(n)]:[3,2]))):[2];case 1:if(y=S.sent(),E=y.scrollHeight-y.clientHeight,l.scrollAmount>E-y.scrollTop)return"password"===e.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",g)):window.addEventListener("ionKeyboardDidShow",b),v=setTimeout(b,1e3),[2];S.label=2;case 2:b(),S.label=3;case 3:return[2]}}))}))},y=function(t,e){return(0,o.mG)(void 0,void 0,void 0,(function(){var n,a,s,d,f,v,m,h,p,w,y,E,S,L,k,D,A;return(0,o.Jh)(this,(function(M){switch(M.label){case 0:return n=document,a="ios"===e,s="android"===e,d=t.getNumber("keyboardHeight",290),f=t.getBoolean("scrollAssist",!0),v=t.getBoolean("hideCaretOnScroll",a),m=t.getBoolean("inputBlurring",a),h=t.getBoolean("scrollPadding",!0),p=Array.from(n.querySelectorAll("ion-input, ion-textarea")),w=new WeakMap,y=new WeakMap,[4,u.K.getResizeMode()];case 1:for(E=M.sent(),S=function(t){return(0,o.mG)(void 0,void 0,void 0,(function(){var e,n,a,l,m;return(0,o.Jh)(this,(function(p){switch(p.label){case 0:return[4,new Promise((function(e){return(0,r.c)(t,e)}))];case 1:return p.sent(),e=t.shadowRoot||t,n=e.querySelector("input")||e.querySelector("textarea"),a=(0,i.f)(t),l=a?null:t.closest("ion-footer"),n?(a&&v&&!w.has(t)&&(m=function(t,e,n){if(!n||!e)return function(){};var o=function(n){(function(t){return t===t.getRootNode().activeElement})(e)&&c(t,e,n)},i=function(){return c(t,e,!1)},u=function(){return o(!0)},a=function(){return o(!1)};return(0,r.a)(n,"ionScrollStart",u),(0,r.a)(n,"ionScrollEnd",a),e.addEventListener("blur",i),function(){(0,r.b)(n,"ionScrollStart",u),(0,r.b)(n,"ionScrollEnd",a),e.removeEventListener("blur",i)}}(t,n,a),w.set(t,m)),"date"===n.type||"datetime-local"===n.type||!a&&!l||!f||y.has(t)||(m=function(t,e,n,i,r,a,c,s){void 0===s&&(s=!1);var d=a&&(void 0===c||c.mode===u.a.None),l=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){return e.hasAttribute(b)?(e.removeAttribute(b),[2]):(g(t,e,n,i,r,d,s),[2])}))}))};return t.addEventListener("focusin",l,!0),function(){t.removeEventListener("focusin",l,!0)}}(t,n,a,l,d,h,E,s),y.set(t,m)),[2]):[2]}}))}))},L=function(t){var e;v&&((e=w.get(t))&&e(),w.delete(t));f&&((e=y.get(t))&&e(),y.delete(t))},m&&function(){var t=!0,e=!1,n=document,o=function(){e=!0},i=function(){t=!0},u=function(o){if(e)e=!1;else{var i=n.activeElement;if(i&&!i.matches(l)){var r=o.target;r!==i&&(r.matches(l)||r.closest(l)||(t=!1,setTimeout((function(){t||i.blur()}),50)))}}};(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",u,!1)}(),k=0,D=p;k<D.length;k++)A=D[k],S(A);return n.addEventListener("ionInputDidLoad",(function(t){S(t.detail)})),n.addEventListener("ionInputDidUnload",(function(t){L(t.detail)})),[2]}}))}))}}}]);
//# sourceMappingURL=4798.509a5059.chunk.js.map