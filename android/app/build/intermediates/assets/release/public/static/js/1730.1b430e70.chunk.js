/*! For license information please see 1730.1b430e70.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[1730,9383],{3572:function(i,t,n){n.r(t),n.d(t,{ion_loading:function(){return m}});var e=n(5971),o=n(3496),r=n(345),a=n(1787),s=n(6238),d=n(9383),l=n(47),c=n(3764),h=(n(2913),function(i){var t=(0,c.c)(),n=(0,c.c)(),e=(0,c.c)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])}),p=function(i){var t=(0,c.c)(),n=(0,c.c)(),e=(0,c.c)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},u=function(i){var t=(0,c.c)(),n=(0,c.c)(),e=(0,c.c)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},g=function(i){var t=(0,c.c)(),n=(0,c.c)(),e=(0,c.c)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},m=function(){function i(i){var t=this;(0,o.r)(this,i),this.didPresent=(0,o.d)(this,"ionLoadingDidPresent",7),this.willPresent=(0,o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,o.d)(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=(0,o.d)(this,"didPresent",7),this.willPresentShorthand=(0,o.d)(this,"willPresent",7),this.willDismissShorthand=(0,o.d)(this,"willDismiss",7),this.didDismissShorthand=(0,o.d)(this,"didDismiss",7),this.delegateController=(0,s.d)(this),this.triggerController=(0,s.e)(),this.customHTMLEnabled=l.c.get("innerHTMLTemplatesEnabled",r.E),this.presented=!1,this.onBackdropTap=function(){t.dismiss(void 0,s.B)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}return i.prototype.onIsOpenChange=function(i,t){!0===i&&!1===t?this.present():!1===i&&!0===t&&this.dismiss()},i.prototype.triggerChanged=function(){var i=this,t=i.trigger,n=i.el,e=i.triggerController;t&&e.addClickListener(n,t)},i.prototype.connectedCallback=function(){(0,s.j)(this.el),this.triggerChanged()},i.prototype.componentWillLoad=function(){if(void 0===this.spinner){var i=(0,l.b)(this);this.spinner=l.c.get("loadingSpinner",l.c.get("spinner","ios"===i?"lines":"crescent"))}(0,s.k)(this.el)},i.prototype.componentDidLoad=function(){var i=this;!0===this.isOpen&&(0,a.r)((function(){return i.present()}))},i.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()},i.prototype.present=function(){return(0,e.mG)(this,void 0,void 0,(function(){var i=this;return(0,e.Jh)(this,(function(t){switch(t.label){case 0:return void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:t.sent(),t.label=2;case 2:return[4,this.delegateController.attachViewToDom()];case 3:return t.sent(),this.currentTransition=(0,s.f)(this,"loadingEnter",h,u),[4,this.currentTransition];case 4:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)),this.currentTransition=void 0,[2]}}))}))},i.prototype.dismiss=function(i,t){return(0,e.mG)(this,void 0,void 0,(function(){var n;return(0,e.Jh)(this,(function(e){switch(e.label){case 0:return this.durationTimeout&&clearTimeout(this.durationTimeout),this.currentTransition=(0,s.g)(this,i,t,"loadingLeave",p,g),[4,this.currentTransition];case 1:return(n=e.sent())&&this.delegateController.removeViewFromDom(),[2,n]}}))}))},i.prototype.onDidDismiss=function(){return(0,s.h)(this.el,"ionLoadingDidDismiss")},i.prototype.onWillDismiss=function(){return(0,s.h)(this.el,"ionLoadingWillDismiss")},i.prototype.renderLoadingMessage=function(i){var t=this.customHTMLEnabled,n=this.message;return t?(0,o.h)("div",{class:"loading-content",id:i,innerHTML:(0,r.a)(n)}):(0,o.h)("div",{class:"loading-content",id:i},n)},i.prototype.render=function(){var i,t=this,n=t.message,e=t.spinner,r=t.htmlAttributes,a=t.overlayIndex,s=(0,l.b)(this),c="loading-".concat(a,"-msg"),h=void 0!==n?c:null;return(0,o.h)(o.H,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":h,tabindex:"-1"},r,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,d.g)(this.cssClass)),(i={},i[s]=!0,i["overlay-hidden"]=!0,i["loading-translucent"]=this.translucent,i))}),(0,o.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,o.h)("div",{tabindex:"0"}),(0,o.h)("div",{class:"loading-wrapper ion-overlay-wrapper"},e&&(0,o.h)("div",{class:"loading-spinner"},(0,o.h)("ion-spinner",{name:e,"aria-hidden":"true"})),void 0!==n&&this.renderLoadingMessage(c)),(0,o.h)("div",{tabindex:"0"}))},Object.defineProperty(i.prototype,"el",{get:function(){return(0,o.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:!1,configurable:!0}),i}();m.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}"}},9383:function(i,t,n){n.r(t),n.d(t,{c:function(){return r},g:function(){return a},h:function(){return o},o:function(){return d}});var e=n(5971),o=function(i,t){return null!==t.closest(i)},r=function(i,t){var n;return"string"===typeof i&&i.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(i)]=!0,n),t):t},a=function(i){var t={};return function(i){return void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter((function(i){return null!=i})).map((function(i){return i.trim()})).filter((function(i){return""!==i})):[]}(i).forEach((function(i){return t[i]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,d=function(i,t,n,o){return(0,e.mG)(void 0,void 0,void 0,(function(){var r;return(0,e.Jh)(this,(function(e){return null!=i&&"#"!==i[0]&&!s.test(i)&&(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,r.push(i,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=1730.1b430e70.chunk.js.map