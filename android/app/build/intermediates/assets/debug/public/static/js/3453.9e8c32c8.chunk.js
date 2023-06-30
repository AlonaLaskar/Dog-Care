/*! For license information please see 3453.9e8c32c8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[3453,9383],{3453:function(t,e,n){n.r(e),n.d(e,{ion_datetime_button:function(){return l}});var i=n(5971),a=n(3496),o=n(1787),r=n(704),s=n(9383),d=n(47),c=n(4449),l=function(){function t(t){var e=this;(0,a.r)(this,t),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=function(t){return void 0===t||null===t?[]:Array.isArray(t)?t:[t]},this.setDateTimeText=function(){var t=e,n=t.datetimeEl,i=t.datetimePresentation;if(n){var a=n.value,o=n.locale,s=n.hourCycle,d=n.preferWheel,l=n.multiple,u=n.titleSelectedDatesFormatter,m=e.getParsedDateValues(a),p=(0,c.q)(m.length>0?m:[(0,c.t)()])[0],h=(0,c.J)(o,s);switch(e.dateText=e.timeText=void 0,i){case"date-time":case"time-date":var f=(0,c.T)(o,p),b=(0,c.K)(o,p,h);d?e.dateText="".concat(f," ").concat(b):(e.dateText=f,e.timeText=b);break;case"date":if(l&&1!==m.length){var v="".concat(m.length," days");if(void 0!==u)try{v=u(m)}catch(t){(0,r.a)("Exception in provided `titleSelectedDatesFormatter`: ",t)}e.dateText=v}else e.dateText=(0,c.T)(o,p);break;case"time":e.timeText=(0,c.K)(o,p,h);break;case"month-year":e.dateText=(0,c.G)(o,p);break;case"month":e.dateText=(0,c.S)(o,p,{month:"long"});break;case"year":e.dateText=(0,c.S)(o,p,{year:"numeric"})}}},this.waitForDatetimeChanges=function(){return(0,i.mG)(e,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(e){return(t=this.datetimeEl)?[2,new Promise((function(e){(0,o.a)(t,"ionRender",e,{once:!0})}))]:[2,Promise.resolve()]}))}))},this.handleDateClick=function(t){return(0,i.mG)(e,void 0,void 0,(function(){var e,n,a,o,r;return(0,i.Jh)(this,(function(i){if(n=(e=this).datetimeEl,a=e.datetimePresentation,!n)return[2];switch(o=!1,a){case"date-time":case"time-date":r="date"!==n.presentation,!n.preferWheel&&r&&(n.presentation="date",o=!0)}return this.selectedButton="date",this.presentOverlay(t,o,this.dateTargetEl),[2]}))}))},this.handleTimeClick=function(t){var n=e,i=n.datetimeEl,a=n.datetimePresentation;if(i){var o=!1;switch(a){case"date-time":case"time-date":"time"!==i.presentation&&(i.presentation="time",o=!0)}e.selectedButton="time",e.presentOverlay(t,o,e.timeTargetEl)}},this.presentOverlay=function(t,n,a){return(0,i.mG)(e,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return(e=this.overlayEl)?"ION-POPOVER"!==e.tagName?[3,3]:n?[4,this.waitForDatetimeChanges()]:[3,2]:[2];case 1:i.sent(),i.label=2;case 2:return e.present(Object.assign(Object.assign({},t),{detail:{ionShadowTarget:a}})),[3,4];case 3:e.present(),i.label=4;case 4:return[2]}}))}))},this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}return t.prototype.componentWillLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e,n,a,s=this;return(0,i.Jh)(this,(function(i){return(t=this.datetime)?(e=this.datetimeEl=document.getElementById(t))?"ION-DATETIME"!==e.tagName?((0,r.a)("Expected an ion-datetime instance for ID '".concat(t,"' but received '").concat(e.tagName.toLowerCase(),"' instead."),e),[2]):(n=new IntersectionObserver((function(t){var e=t[0];s.datetimeActive=e.isIntersecting}),{threshold:.01}),n.observe(e),(a=this.overlayEl=e.closest("ion-modal, ion-popover"))&&a.classList.add("ion-datetime-button-overlay"),(0,o.c)(e,(function(){var t=s.datetimePresentation=e.presentation||"date-time";switch(s.setDateTimeText(),(0,o.a)(e,"ionValueChange",s.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})),[2]):((0,r.a)("No ion-datetime instance found for ID '".concat(t,"'."),this.el),[2]):((0,r.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el),[2])}))}))},t.prototype.render=function(){var t,e=this,n=this,i=n.color,o=n.dateText,r=n.timeText,c=n.selectedButton,l=n.datetimeActive,u=n.disabled,m=(0,d.b)(this);return(0,a.h)(a.H,{class:(0,s.c)(i,(t={},t[m]=!0,t["".concat(c,"-active")]=l,t["datetime-button-disabled"]=u,t))},o&&(0,a.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":l?"true":"false",onClick:this.handleDateClick,disabled:u,part:"native",ref:function(t){return e.dateTargetEl=t}},(0,a.h)("slot",{name:"date-target"},o),"md"===m&&(0,a.h)("ion-ripple-effect",null)),r&&(0,a.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":l?"true":"false",onClick:this.handleTimeClick,disabled:u,part:"native",ref:function(t){return e.timeTargetEl=t}},(0,a.h)("slot",{name:"time-target"},r),"md"===m&&(0,a.h)("ion-ripple-effect",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.f)(this)},enumerable:!1,configurable:!0}),t}();l.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}},9383:function(t,e,n){n.r(e),n.d(e,{c:function(){return o},g:function(){return r},h:function(){return a},o:function(){return d}});var i=n(5971),a=function(t,e){return null!==e.closest(t)},o=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),e):e},r=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,n,a){return(0,i.mG)(void 0,void 0,void 0,(function(){var o;return(0,i.Jh)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,n,a)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=3453.9e8c32c8.chunk.js.map