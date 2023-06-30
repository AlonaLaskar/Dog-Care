/*! For license information please see 4634.833aaadc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[4634,9383],{4634:function(e,t,o){o.r(t),o.d(t,{ion_popover:function(){return L}});var r=o(5971),i=o(3496),n=o(1604),s=o(1787),a=o(704),p=o(6238),c=o(47),d=o(9383),l=o(6524),h=o(3764),u=(o(2913),function(e,t,o){var r=t.getBoundingClientRect(),i=r.height,n=r.width;"cover"===e&&o&&(n=o.getBoundingClientRect().width);return{contentWidth:n,contentHeight:i}}),v=function(e,t){return t&&"ION-ITEM"===t.tagName?e.findIndex((function(e){return e===t})):-1},f=function(e){var t=(0,s.g)(e).querySelector("button");t&&(0,s.r)((function(){return t.focus()}))},g=function(e){var t=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){var o,i,n,s,a,p,c,d,l;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(i=document.activeElement,n=[],"ION-POPOVER"!==(s=null===(o=t.target)||void 0===o?void 0:o.tagName)&&"ION-ITEM"!==s)return[2];try{n=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(e){}switch(t.key){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"Home":return[3,5];case"End":return[3,6];case"ArrowRight":case" ":case"Enter":return[3,7]}return[3,8];case 1:return[4,e.getParentPopover()];case 2:return r.sent()&&e.dismiss(void 0,void 0,!1),[3,8];case 3:return t.preventDefault(),a=function(e,t){return e[v(e,t)+1]}(n,i),void 0!==a&&f(a),[3,8];case 4:return t.preventDefault(),p=function(e,t){return e[v(e,t)-1]}(n,i),void 0!==p&&f(p),[3,8];case 5:return t.preventDefault(),void 0!==(c=n[0])&&f(c),[3,8];case 6:return t.preventDefault(),void 0!==(d=n[n.length-1])&&f(d),[3,8];case 7:return i&&function(e){return e.hasAttribute("data-ion-popover-trigger")}(i)&&(l=new CustomEvent("ionPopoverActivateTrigger"),i.dispatchEvent(l)),[3,8];case 8:return[2]}}))}))};return e.addEventListener("keydown",t),function(){return e.removeEventListener("keydown",t)}},m=function(e,t,o,r,i,n,s,a,p,c,d){var l,h={top:0,left:0,width:0,height:0};if("event"===n){if(!d)return p;var u=d;h={top:u.clientY,left:u.clientX,width:1,height:1}}else{var v=d,f=c||(null===(l=null===v||void 0===v?void 0:v.detail)||void 0===l?void 0:l.ionShadowTarget)||(null===v||void 0===v?void 0:v.target);if(!f)return p;var g=f.getBoundingClientRect();h={top:g.top,left:g.left,width:g.width,height:g.height}}var m=k(s,h,t,o,r,i,e),b=P(a,s,h,t,o),x=m.top+b.top,T=m.left+b.left,D=y(s,r,i,x,T,t,o,e),E=D.arrowTop,S=D.arrowLeft,A=w(s,a,e);return{top:x,left:T,referenceCoordinates:h,arrowTop:E,arrowLeft:S,originX:A.originX,originY:A.originY}},w=function(e,t,o){switch(e){case"top":return{originX:b(t),originY:"bottom"};case"bottom":return{originX:b(t),originY:"top"};case"left":return{originX:"right",originY:x(t)};case"right":return{originX:"left",originY:x(t)};case"start":return{originX:o?"left":"right",originY:x(t)};case"end":return{originX:o?"right":"left",originY:x(t)}}},b=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},x=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},y=function(e,t,o,r,i,n,s,a){var p={arrowTop:r+s/2-t/2,arrowLeft:i+n-t/2},c={arrowTop:r+s/2-t/2,arrowLeft:i-1.5*t};switch(e){case"top":return{arrowTop:r+s,arrowLeft:i+n/2-t/2};case"bottom":return{arrowTop:r-o,arrowLeft:i+n/2-t/2};case"left":return p;case"right":return c;case"start":return a?c:p;case"end":return a?p:c;default:return{arrowTop:0,arrowLeft:0}}},k=function(e,t,o,r,i,n,s){var a={top:t.top,left:t.left-o-i},p={top:t.top,left:t.left+t.width+i};switch(e){case"top":return{top:t.top-r-n,left:t.left};case"right":return p;case"bottom":return{top:t.top+t.height+n,left:t.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},P=function(e,t,o,r,i){switch(e){case"center":return D(t,o,r,i);case"end":return T(t,o,r,i);default:return{top:0,left:0}}},T=function(e,t,o,r){switch(e){case"start":case"end":case"left":case"right":return{top:-(r-t.height),left:0};default:return{top:0,left:-(o-t.width)}}},D=function(e,t,o,r){switch(e){case"start":case"end":case"left":case"right":return{top:-(r/2-t.height/2),left:0};default:return{top:0,left:-(o/2-t.width/2)}}},E=function(e,t,o,r,i,n,s,a,p,c,d,l,h,u,v){void 0===h&&(h=0),void 0===u&&(u=0),void 0===v&&(v=0);var f,g=h,m=u,w=o,b=t,x=c,y=d,k=!1,P=!1,T=l?l.top+l.height:n/2-a/2,D=l?l.height:0,E=!1;return w<r+p?(w=r,k=!0,x="left"):s+r+w+p>i&&(P=!0,w=i-s-r,x="right"),T+D+a>n&&("top"===e||"bottom"===e)&&(T-a>0?(g=(b=Math.max(12,T-a-D-(v-1)))+a,y="bottom",E=!0):f=r),{top:b,left:w,bottom:f,originX:x,originY:y,checkSafeAreaLeft:k,checkSafeAreaRight:P,arrowTop:g,arrowLeft:m,addPopoverBottomClass:E}},S=function(e,t){var o,r=t.event,i=t.size,n=t.trigger,a=t.reference,p=t.side,c=t.align,d=e.ownerDocument,l="rtl"===d.dir,v=d.defaultView.innerWidth,f=d.defaultView.innerHeight,g=(0,s.g)(e),w=g.querySelector(".popover-content"),b=g.querySelector(".popover-arrow"),x=n||(null===(o=null===r||void 0===r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null===r||void 0===r?void 0:r.target),y=u(i,w,x),k=y.contentWidth,P=y.contentHeight,T=function(e){if(!e)return{arrowWidth:0,arrowHeight:0};var t=e.getBoundingClientRect();return{arrowWidth:t.width,arrowHeight:t.height}}(b),D=T.arrowWidth,S=T.arrowHeight,A=m(l,k,P,D,S,a,p,c,{top:f/2-P/2,left:v/2-k/2,originX:l?"right":"left",originY:"top"},n,r),I="cover"===i?0:5,C="cover"===i?0:25,L=E(p,A.top,A.left,I,v,f,k,P,C,A.originX,A.originY,A.referenceCoordinates,A.arrowTop,A.arrowLeft,S),W=L.originX,O=L.originY,q=L.top,N=L.left,X=L.bottom,Y=L.checkSafeAreaLeft,z=L.checkSafeAreaRight,B=L.arrowTop,H=L.arrowLeft,M=L.addPopoverBottomClass,j=(0,h.c)(),V=(0,h.c)(),F=(0,h.c)();return V.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),F.addElement(g.querySelector(".popover-arrow")).addElement(g.querySelector(".popover-content")).fromTo("opacity",.01,1),j.easing("ease").duration(100).beforeAddWrite((function(){"cover"===i&&e.style.setProperty("--width","".concat(k,"px")),M&&e.classList.add("popover-bottom"),void 0!==X&&w.style.setProperty("bottom","".concat(X,"px"));var t="".concat(N,"px");if(Y&&(t="".concat(N,"px").concat(" + var(--ion-safe-area-left, 0)")),z&&(t="".concat(N,"px").concat(" - var(--ion-safe-area-right, 0)")),w.style.setProperty("top","calc(".concat(q,"px + var(--offset-y, 0))")),w.style.setProperty("left","calc(".concat(t," + var(--offset-x, 0))")),w.style.setProperty("transform-origin","".concat(O," ").concat(W)),null!==b){var o=A.top!==q||A.left!==N,s=function(e,t,o,r){return void 0===t&&(t=!1),!(!o&&!r)&&("top"===e||"bottom"===e||!t)}(p,o,r,n);s?(b.style.setProperty("top","calc(".concat(B,"px + var(--offset-y, 0))")),b.style.setProperty("left","calc(".concat(H,"px + var(--offset-x, 0))"))):b.style.setProperty("display","none")}})).addAnimation([V,F])},A=function(e){var t=(0,s.g)(e),o=t.querySelector(".popover-content"),r=t.querySelector(".popover-arrow"),i=(0,h.c)(),n=(0,h.c)(),a=(0,h.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".popover-arrow")).addElement(t.querySelector(".popover-content")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))})).duration(300).addAnimation([n,a])},I=function(e,t){var o,r=t.event,i=t.size,n=t.trigger,a=t.reference,p=t.side,c=t.align,d=e.ownerDocument,l="rtl"===d.dir,v=d.defaultView.innerWidth,f=d.defaultView.innerHeight,g=(0,s.g)(e),w=g.querySelector(".popover-content"),b=n||(null===(o=null===r||void 0===r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null===r||void 0===r?void 0:r.target),x=u(i,w,b),y=x.contentWidth,k=x.contentHeight,P=m(l,y,k,0,0,a,p,c,{top:f/2-k/2,left:v/2-y/2,originX:l?"right":"left",originY:"top"},n,r),T="cover"===i?0:12,D=E(p,P.top,P.left,T,v,f,y,k,0,P.originX,P.originY,P.referenceCoordinates),S=D.originX,A=D.originY,I=D.top,C=D.left,L=D.bottom,W=(0,h.c)(),O=(0,h.c)(),q=(0,h.c)(),N=(0,h.c)(),X=(0,h.c)();return O.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),q.addElement(g.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),N.addElement(w).beforeStyles({top:"calc(".concat(I,"px + var(--offset-y, 0px))"),left:"calc(".concat(C,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(A," ").concat(S)}).beforeAddWrite((function(){void 0!==L&&w.style.setProperty("bottom","".concat(L,"px"))})).fromTo("transform","scale(0.8)","scale(1)"),X.addElement(g.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((function(){"cover"===i&&e.style.setProperty("--width","".concat(y,"px")),"bottom"===A&&e.classList.add("popover-bottom")})).addAnimation([O,q,N,X])},C=function(e){var t=(0,s.g)(e),o=t.querySelector(".popover-content"),r=(0,h.c)(),i=(0,h.c)(),n=(0,h.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")})).duration(150).addAnimation([i,n])},L=function(){function e(e){var t=this;(0,i.r)(this,e),this.didPresent=(0,i.d)(this,"ionPopoverDidPresent",7),this.willPresent=(0,i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,i.d)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,i.d)(this,"didPresent",7),this.willPresentShorthand=(0,i.d)(this,"willPresent",7),this.willDismissShorthand=(0,i.d)(this,"willDismiss",7),this.didDismissShorthand=(0,i.d)(this,"didDismiss",7),this.ionMount=(0,i.d)(this,"ionMount",7),this.parentPopover=null,this.coreDelegate=(0,n.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=function(){t.dismiss(void 0,p.B)},this.onLifecycle=function(e){var o=t.usersElement,r=W[e.type];if(o&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}},this.configureTriggerInteraction=function(){var e=t,o=e.trigger,i=e.triggerAction,n=e.el,p=e.destroyTriggerInteraction;if(p&&p(),void 0!==o){var c=t.triggerEl=void 0!==o?document.getElementById(o):null;c?t.destroyTriggerInteraction=function(e,t,o){var i=[];switch(t){case"hover":var n;i=[{eventName:"mouseenter",callback:function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return e.stopPropagation(),n&&clearTimeout(n),n=setTimeout((function(){(0,s.r)((function(){o.presentFromTrigger(e),n=void 0}))}),100),[2]}))}))}},{eventName:"mouseleave",callback:function(e){n&&clearTimeout(n);var t=e.relatedTarget;t&&t.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break;case"context-menu":i=[{eventName:"contextmenu",callback:function(e){e.preventDefault(),o.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break;default:i=[{eventName:"click",callback:function(e){return o.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}]}return i.forEach((function(t){var o=t.eventName,r=t.callback;return e.addEventListener(o,r)})),e.setAttribute("data-ion-popover-trigger","true"),function(){i.forEach((function(t){var o=t.eventName,r=t.callback;return e.removeEventListener(o,r)})),e.removeAttribute("data-ion-popover-trigger")}}(c,i,n):(0,a.p)('A trigger element with the ID "'.concat(o,'" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.'),t.el)}},this.configureKeyboardInteraction=function(){var e=t,o=e.destroyKeyboardInteraction,r=e.el;o&&o(),t.destroyKeyboardInteraction=g(r)},this.configureDismissInteraction=function(){var e=t,o=e.destroyDismissInteraction,r=e.parentPopover,i=e.triggerAction,n=e.triggerEl,a=e.el;r&&n&&(o&&o(),t.destroyDismissInteraction=function(e,t,o,r){var i=[],n=(0,s.g)(r).querySelector(".popover-content");i="hover"===t?[{eventName:"mouseenter",callback:function(t){document.elementFromPoint(t.clientX,t.clientY)!==e&&o.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(t){t.target.closest("[data-ion-popover-trigger]")!==e?o.dismiss(void 0,void 0,!1):t.stopPropagation()}}];return i.forEach((function(e){var t=e.eventName,o=e.callback;return n.addEventListener(t,o)})),function(){i.forEach((function(e){var t=e.eventName,o=e.callback;return n.removeEventListener(t,o)}))}}(n,i,a,r))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1}return e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},e.prototype.onIsOpenChange=function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()},e.prototype.connectedCallback=function(){var e=this.configureTriggerInteraction,t=this.el;(0,p.j)(t),e()},e.prototype.disconnectedCallback=function(){var e=this.destroyTriggerInteraction;e&&e()},e.prototype.componentWillLoad=function(){var e=this.el,t=(0,p.k)(e);this.parentPopover=e.closest("ion-popover:not(#".concat(t,")")),void 0===this.alignment&&(this.alignment="ios"===(0,c.b)(this)?"center":"start")},e.prototype.componentDidLoad=function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,s.r)((function(){return e.present()})),t&&(0,s.a)(t,"ionPopoverWillDismiss",(function(){e.dismiss(void 0,void 0,!1)}))},e.prototype.presentFromTrigger=function(e,t){return void 0===t&&(t=!1),(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return this.focusDescendantOnPresent=t,[4,this.present(e)];case 1:return o.sent(),this.focusDescendantOnPresent=!1,[2]}}))}))},e.prototype.getDelegate=function(e){if(void 0===e&&(e=!1),this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,o=this.inline=null!==t&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}},e.prototype.present=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t,o,i,a,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:r.sent(),r.label=2;case 2:return t=this.el,o=this.getDelegate(!0),i=o.inline,a=o.delegate,c=this,[4,(0,n.a)(a,t,this.component,["popover-viewport"],this.componentProps,i)];case 3:return c.usersElement=r.sent(),this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.ionMount.emit(),(0,s.m)(t)?[4,(0,l.e)(this.usersElement)]:[3,5];case 4:return r.sent(),[3,7];case 5:return this.keepContentsMounted?[3,7]:[4,(0,l.w)()];case 6:r.sent(),r.label=7;case 7:return this.currentTransition=(0,p.f)(this,"popoverEnter",S,I,{event:e||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),[4,this.currentTransition];case 8:return r.sent(),this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,p.o)(this.el,this.el),[2]}}))}))},e.prototype.dismiss=function(e,t,o){return void 0===o&&(o=!0),(0,r.mG)(this,void 0,void 0,(function(){var i,s,a,c,d;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:r.sent(),r.label=2;case 2:return s=(i=this).destroyKeyboardInteraction,a=i.destroyDismissInteraction,o&&this.parentPopover&&this.parentPopover.dismiss(e,t,o),this.currentTransition=(0,p.g)(this,e,t,"popoverLeave",A,C,this.event),[4,this.currentTransition];case 3:return(c=r.sent())?(s&&(s(),this.destroyKeyboardInteraction=void 0),a&&(a(),this.destroyDismissInteraction=void 0),d=this.getDelegate().delegate,[4,(0,n.d)(d,this.usersElement)]):[3,5];case 4:r.sent(),r.label=5;case 5:return this.currentTransition=void 0,[2,c]}}))}))},e.prototype.getParentPopover=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2,this.parentPopover]}))}))},e.prototype.onDidDismiss=function(){return(0,p.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return(0,p.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=this,o=(0,c.b)(this),r=this,n=r.onLifecycle,s=r.parentPopover,a=r.dismissOnSelect,p=r.side,l=r.arrow,h=r.htmlAttributes,u=(0,c.a)("desktop"),v=l&&!s;return(0,i.h)(i.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},h,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},(0,d.g)(this.cssClass)),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e["overlay-hidden"]=!0,e["popover-desktop"]=u,e["popover-side-".concat(p)]=!0,e["popover-nested"]=!!s,e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonBackdropTap:this.onBackdropTap}),!s&&(0,i.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,i.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:a?function(){return t.dismiss()}:void 0},v&&(0,i.h)("div",{class:"popover-arrow",part:"arrow"}),(0,i.h)("div",{class:"popover-content",part:"content"},(0,i.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,i.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:!1,configurable:!0}),e}(),W={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};L.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start):dir(rtl){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end):dir(rtl){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}@supports (inset-inline-start: 0){.popover-arrow::after{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.popover-arrow::after{left:3px}:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}[dir=rtl] .popover-arrow::after{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.popover-arrow::after:dir(rtl){left:unset;right:unset;right:3px}}}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start) .popover-arrow:dir(rtl){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end) .popover-arrow:dir(rtl){-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start):dir(rtl){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end):dir(rtl){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}"}},9383:function(e,t,o){o.r(t),o.d(t,{c:function(){return n},g:function(){return s},h:function(){return i},o:function(){return p}});var r=o(5971),i=function(e,t){return null!==t.closest(e)},n=function(e,t){var o;return"string"===typeof e&&e.length>0?Object.assign(((o={"ion-color":!0})["ion-color-".concat(e)]=!0,o),t):t},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,p=function(e,t,o,i){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(r){return null!=e&&"#"!==e[0]&&!a.test(e)&&(n=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,n.push(e,o,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=4634.833aaadc.chunk.js.map