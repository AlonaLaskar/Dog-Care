"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[9159],{9679:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return u}});var r=n(1787),i=n(3127),a=n(7169),u=(n(6005),function(t,e,n,u,c){var o=t.ownerDocument.defaultView,s=(0,i.i)(t),f=function(t){return s?-t.deltaX:t.deltaX},d=function(t){return s?-t.velocityX:t.velocityX};return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return s=(0,i.i)(t),function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(n)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;u(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,i=e/n,a=d(t),u=a>=0&&(a>.2||e>n/2),s=(u?1-i:i)*n,h=0;if(s>5){var l=s/Math.abs(a);h=Math.min(l,540)}c(u,i<=0?.01:(0,r.l)(0,i,.9999),h)}})})}}]);
//# sourceMappingURL=9159.1051d70a.chunk.js.map