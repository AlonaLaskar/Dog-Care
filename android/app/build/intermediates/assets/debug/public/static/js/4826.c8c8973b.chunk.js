/*! For license information please see 4826.c8c8973b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[4826],{4826:function(t,e,r){r.r(e),r.d(e,{scopeCss:function(){return B}});var n=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<r;e++)for(var c=arguments[e],o=0,i=c.length;o<i;o++,s++)n[s]=c[o];return n},s="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+s+i,"gim"),u=new RegExp("("+o+i,"gim"),l=new RegExp("("+c+i,"gim"),f=s+"-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,v=/::slotted/gim,m=/:host-context/gim,_=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S="%BLOCK%",W=function(t,e){var r=k(t),n=0;return r.escapedString.replace(w,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var c=t[2],o="",i=t[4],a="";i&&i.startsWith("{"+S)&&(o=r.blocks[n++],i=i.substring(8),a="{");var u=e({selector:c,content:o});return""+t[1]+u.selector+t[3]+a+u.content+i}))},k=function(t){for(var e=t.split(b),r=[],n=[],s=0,c=[],o=0;o<e.length;o++){var i=e[o];"}"===i&&s--,s>0?c.push(i):(c.length>0&&(n.push(c.join("")),r.push(S),c=[]),r.push(i)),"{"===i&&s++}return c.length>0&&(n.push(c.join("")),r.push(S)),{escapedString:r.join(""),blocks:n}},O=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],c=0;c<n.length;c++){var o=n[c].trim();if(!o)break;s.push(r(f,o,t[3]))}return s.join(",")}return f+t[3]}))},j=function(t,e,r){return t+e.replace(s,"")+r},E=function(t,e,r){return e.indexOf(s)>-1?j(t,e,r):t+e+r+", "+e+" "+t+r},R=function(t,e){var r=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!r.test(t)},C=function(t,e,r){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}));for(var n,s="."+e,c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(f)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n="."+r;return t.replace(p,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var c=t.replace(g,"");if(c.length>0){var o=c.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+s+o[2]+o[3])}}return n},o=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+r+"__";return e.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var c="__ph-"+r+"__";return e.push(s),r++,n+c})),placeholders:e}}(t),i="",a=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=o.content).indexOf(f)>-1);null!==(n=u.exec(t));){var h=n[1],d=t.slice(a,n.index).trim();i+=((l=l||d.indexOf(f)>-1)?c(d):d)+" "+h+" ",a=u.lastIndex}var v,m=t.substring(a);return i+=(l=l||m.indexOf(f)>-1)?c(m):m,v=o.placeholders,i.replace(/__ph-(\d+)__/g,(function(t,e){return v[+e]}))},T=function t(e,r,n,s,c){return W(e,(function(e){var c=e.selector,o=e.content;return"@"!==e.selector[0]?c=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():R(t,e)?C(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=t(e.content,r,n,s)),{selector:c.replace(/\s{2,}/g," ").trim(),content:o}}))},L=function(t,e,r,n,i){var p=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),c=t[3],o=r+s+c,i="",a=t[4]-1;a>=0;a--){var u=t[5][a];if("}"===u||","===u)break;i=u+i}var l=i+o,p=""+i.trimRight()+o.trim();if(l.trim()!==p.trim()){var h=p+", "+l;n.push({orgSelector:l,updatedSelector:h})}return o}return f+t[3]})),{selectors:n,cssText:t}}(t=function(t){return O(t,u,E)}(t=function(t){return O(t,a,j)}(t=t.replace(m,o).replace(d,s).replace(v,c))),n);return t=function(t){return h.reduce((function(t,e){return t.replace(e," ")}),t)}(t=p.cssText),e&&(t=T(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},B=function(t,e,r){var s=e+"-h",c=e+"-s",o=t.match(x)||[];t=function(t){return t.replace(_,"")}(t);var i=[];if(r){var a=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=W(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,a),t):t}))}var u=L(t,e,s,c);return t=n([u.cssText],o).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=4826.c8c8973b.chunk.js.map