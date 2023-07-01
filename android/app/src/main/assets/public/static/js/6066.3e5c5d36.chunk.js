/*! For license information please see 6066.3e5c5d36.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[6066,1588,9383],{6066:function(n,r,e){e.r(r),e.d(r,{ion_spinner:function(){return o}});var t=e(3496),i=e(9383),s=e(47),a=e(1588),o=function(){function n(n){(0,t.r)(this,n),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}return n.prototype.getName=function(){var n=this.name||s.c.get("spinner"),r=(0,s.b)(this);return n||("ios"===r?"lines":"circular")},n.prototype.render=function(){var n,r,e=this,o=(0,s.b)(e),f=e.getName(),u=null!==(r=a.S[f])&&void 0!==r?r:a.S.lines,p="number"===typeof e.duration&&e.duration>10?e.duration:u.dur,m=[];if(void 0!==u.circles)for(var d=0;d<u.circles;d++)m.push(c(u,p,d,u.circles));else if(void 0!==u.lines)for(d=0;d<u.lines;d++)m.push(l(u,p,d,u.lines));return(0,t.h)(t.H,{class:(0,i.c)(e.color,(n={},n[o]=!0,n["spinner-".concat(f)]=!0,n["spinner-paused"]=e.paused||s.c.getBoolean("_testing"),n)),role:"progressbar",style:u.elmDuration?{animationDuration:p+"ms"}:{}},m)},n}(),c=function(n,r,e,i){var s=n.fn(r,e,i);return s.style["animation-duration"]=r+"ms",(0,t.h)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},(0,t.h)("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:n.elmDuration?{animationDuration:r+"ms"}:{}}))},l=function(n,r,e,i){var s=n.fn(r,e,i);return s.style["animation-duration"]=r+"ms",(0,t.h)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},(0,t.h)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},1588:function(n,r,e){e.r(r),e.d(r,{S:function(){return t}});var t={bubbles:{dur:1e3,circles:9,fn:function(n,r,e){var t="".concat(n*r/e-n,"ms"),i=2*Math.PI*r/e;return{r:5,style:{top:"".concat(32*Math.sin(i),"%"),left:"".concat(32*Math.cos(i),"%"),"animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(n,r,e){var t=r/e,i="".concat(n*t-n,"ms"),s=2*Math.PI*t;return{r:5,style:{top:"".concat(32*Math.sin(s),"%"),left:"".concat(32*Math.cos(s),"%"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,r){var e=-110*r+"ms";return{r:6,style:{left:"".concat(32-32*r,"%"),"animation-delay":e}}}},lines:{dur:1e3,lines:8,fn:function(n,r,e){return{y1:14,y2:26,style:{transform:"rotate(".concat(360/e*r+(r<e/2?180:-180),"deg)"),"animation-delay":"".concat(n*r/e-n,"ms")}}}},"lines-small":{dur:1e3,lines:8,fn:function(n,r,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(360/e*r+(r<e/2?180:-180),"deg)"),"animation-delay":"".concat(n*r/e-n,"ms")}}}},"lines-sharp":{dur:1e3,lines:12,fn:function(n,r,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(n*r/e-n,"ms")}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:function(n,r,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(n*r/e-n,"ms")}}}}}},9383:function(n,r,e){e.r(r),e.d(r,{c:function(){return s},g:function(){return a},h:function(){return i},o:function(){return c}});var t=e(5971),i=function(n,r){return null!==r.closest(n)},s=function(n,r){var e;return"string"===typeof n&&n.length>0?Object.assign(((e={"ion-color":!0})["ion-color-".concat(n)]=!0,e),r):r},a=function(n){var r={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return r[n]=!0})),r},o=/^[a-z][a-z0-9+\-.]*:/,c=function(n,r,e,i){return(0,t.mG)(void 0,void 0,void 0,(function(){var s;return(0,t.Jh)(this,(function(t){return null!=n&&"#"!==n[0]&&!o.test(n)&&(s=document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[2,s.push(n,e,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=6066.3e5c5d36.chunk.js.map