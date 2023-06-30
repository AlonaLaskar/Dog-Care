/*! For license information please see 4662.be17f763.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[4662,9383],{4662:function(t,e,o){o.r(e),o.d(e,{ion_toast:function(){return m}});var i=o(5971),r=o(3496),n=o(345),a=o(704),s=o(6238),l=o(9383),d=o(47),c=o(3764),h=o(1787),u=(o(2913),function(t,e){var o=(0,c.c)(),i=(0,c.c)(),r=(0,h.g)(t).querySelector(".toast-wrapper");switch(i.addElement(r),e){case"top":i.fromTo("transform","translateY(-100%)","translateY(".concat("calc(10px + var(--ion-safe-area-top, 0px))",")"));break;case"middle":var n=Math.floor(t.clientHeight/2-r.clientHeight/2);r.style.top="".concat(n,"px"),i.fromTo("opacity",.01,1);break;default:i.fromTo("transform","translateY(100%)","translateY(".concat("calc(-10px - var(--ion-safe-area-bottom, 0px))",")"))}return o.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(i)}),p=function(t,e){var o=(0,c.c)(),i=(0,c.c)(),r=(0,h.g)(t).querySelector(".toast-wrapper");switch(i.addElement(r),e){case"top":i.fromTo("transform","translateY(".concat("calc(10px + var(--ion-safe-area-top, 0px))",")"),"translateY(-100%)");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("transform","translateY(".concat("calc(-10px - var(--ion-safe-area-bottom, 0px))",")"),"translateY(100%)")}return o.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},b=function(t,e){var o=(0,c.c)(),i=(0,c.c)(),r=(0,h.g)(t).querySelector(".toast-wrapper");switch(i.addElement(r),e){case"top":r.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":var n=Math.floor(t.clientHeight/2-r.clientHeight/2);r.style.top="".concat(n,"px"),i.fromTo("opacity",.01,1);break;default:r.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return o.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(i)},g=function(t){var e=(0,c.c)(),o=(0,c.c)(),i=(0,h.g)(t).querySelector(".toast-wrapper");return o.addElement(i).fromTo("opacity",.99,0),e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},m=function(){function t(t){var e=this;(0,r.r)(this,t),this.didPresent=(0,r.d)(this,"ionToastDidPresent",7),this.willPresent=(0,r.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,r.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,r.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,r.d)(this,"didPresent",7),this.willPresentShorthand=(0,r.d)(this,"willPresent",7),this.willDismissShorthand=(0,r.d)(this,"willDismiss",7),this.didDismissShorthand=(0,r.d)(this,"didDismiss",7),this.delegateController=(0,s.d)(this),this.triggerController=(0,s.e)(),this.customHTMLEnabled=d.c.get("innerHTMLTemplatesEnabled",n.E),this.presented=!1,this.dispatchCancelHandler=function(t){var o=t.detail.role;if((0,s.i)(o)){var i=e.getButtons().find((function(t){return"cancel"===t.role}));e.callButtonHandler(i)}},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=d.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}return t.prototype.onIsOpenChange=function(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()},t.prototype.triggerChanged=function(){var t=this,e=t.trigger,o=t.el,i=t.triggerController;e&&i.addClickListener(o,e)},t.prototype.connectedCallback=function(){(0,s.j)(this.el),this.triggerChanged()},t.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()},t.prototype.componentWillLoad=function(){(0,s.k)(this.el)},t.prototype.present=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t=this;return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:e.sent(),e.label=2;case 2:return[4,this.delegateController.attachViewToDom()];case 3:return e.sent(),this.currentTransition=(0,s.f)(this,"toastEnter",u,b,this.position),[4,this.currentTransition];case 4:return e.sent(),this.revealContentToScreenReader=!0,this.currentTransition=void 0,this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss(void 0,"timeout")}),this.duration)),[2]}}))}))},t.prototype.dismiss=function(t,e){return(0,i.mG)(this,void 0,void 0,(function(){var o;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.durationTimeout&&clearTimeout(this.durationTimeout),this.currentTransition=(0,s.g)(this,t,e,"toastLeave",p,g,this.position),[4,this.currentTransition];case 1:return(o=i.sent())&&(this.delegateController.removeViewFromDom(),this.revealContentToScreenReader=!1),[2,o]}}))}))},t.prototype.onDidDismiss=function(){return(0,s.h)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return(0,s.h)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){return this.buttons?this.buttons.map((function(t){return"string"===typeof t?{text:t}:t})):[]},t.prototype.buttonClick=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(o){switch(o.label){case 0:return e=t.role,(0,s.i)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return o.sent()?[2,this.dismiss(void 0,e)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(o){switch(o.label){case 0:if(!(null===t||void 0===t?void 0:t.handler))return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,(0,s.s)(t.handler)];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}}))}))},t.prototype.renderButtons=function(t,e){var o,i=this;if(0!==t.length){var n=(0,d.b)(this),a=((o={"toast-button-group":!0})["toast-button-group-".concat(e)]=!0,o);return(0,r.h)("div",{class:a},t.map((function(t){return(0,r.h)("button",{type:"button",class:f(t),tabIndex:0,onClick:function(){return i.buttonClick(t)},part:"button"},(0,r.h)("div",{class:"toast-button-inner"},t.icon&&(0,r.h)("ion-icon",{"aria-hidden":"true",icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-button-icon"}),t.text),"md"===n&&(0,r.h)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}},t.prototype.renderToastMessage=function(t,e){void 0===e&&(e=null);var o=this.customHTMLEnabled,i=this.message;return o?(0,r.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:(0,n.a)(i)}):(0,r.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},i)},t.prototype.renderHeader=function(t,e){return void 0===e&&(e=null),(0,r.h)("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)},t.prototype.render=function(){var t,e,o=this,i=o.layout,n=o.el,s=o.revealContentToScreenReader,c=o.header,h=o.message,u=this.getButtons(),p=u.filter((function(t){return"start"===t.side})),b=u.filter((function(t){return"start"!==t.side})),g=(0,d.b)(this),m=((t={"toast-wrapper":!0})["toast-".concat(this.position)]=!0,t["toast-layout-".concat(i)]=!0,t);return"stacked"===i&&p.length>0&&b.length>0&&(0,a.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",n),(0,r.h)(r.H,Object.assign({tabindex:"-1"},this.htmlAttributes,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:(0,l.c)(this.color,Object.assign(Object.assign((e={},e[g]=!0,e),(0,l.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,r.h)("div",{class:m},(0,r.h)("div",{class:"toast-container",part:"container"},this.renderButtons(p,"start"),void 0!==this.icon&&(0,r.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,r.h)("div",{class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!s&&void 0!==c&&this.renderHeader("oldHeader","true"),!s&&void 0!==h&&this.renderToastMessage("oldMessage","true"),s&&void 0!==c&&this.renderHeader("header"),s&&void 0!==h&&this.renderToastMessage("header")),this.renderButtons(b,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:!1,configurable:!0}),t}(),f=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-".concat(t.role)]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),(0,l.g)(t.cssClass))};m.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},9383:function(t,e,o){o.r(e),o.d(e,{c:function(){return n},g:function(){return a},h:function(){return r},o:function(){return l}});var i=o(5971),r=function(t,e){return null!==e.closest(t)},n=function(t,e){var o;return"string"===typeof t&&t.length>0?Object.assign(((o={"ion-color":!0})["ion-color-".concat(t)]=!0,o),e):e},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,l=function(t,e,o,r){return(0,i.mG)(void 0,void 0,void 0,(function(){var n;return(0,i.Jh)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(n=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,n.push(t,o,r)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=4662.be17f763.chunk.js.map