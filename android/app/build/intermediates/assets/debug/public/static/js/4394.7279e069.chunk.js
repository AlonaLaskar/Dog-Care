/*! For license information please see 4394.7279e069.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[4394,6269],{4394:function(t,n,i){i.r(n),i.d(n,{c:function(){return c}});var e=i(3496),o=i(6269),r=i(7169),c=function(t,n){var i,c,a=function(t,e,o){if("undefined"!==typeof document){var r=document.elementFromPoint(t,e);r&&n(r)?r!==i&&(s(),u(r,o)):s()}},u=function(t,n){i=t,c||(c=i);var o=i;(0,e.w)((function(){return o.classList.add("ion-activated")})),n()},s=function(t){if(void 0===t&&(t=!1),i){var n=i;(0,e.w)((function(){return n.classList.remove("ion-activated")})),t&&c!==i&&i.click(),i=void 0}};return(0,r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,o.a)},onMove:function(t){return a(t.currentX,t.currentY,o.b)},onEnd:function(){s(!0),(0,o.h)(),c=void 0}})}},6269:function(t,n,i){i.r(n),i.d(n,{a:function(){return c},b:function(){return a},c:function(){return r},d:function(){return s},h:function(){return u}});var e={getEngine:function(){var t,n=window;return n.TapticEngine||(null===(t=n.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available:function(){var t,n=window;return!!this.getEngine()&&("web"!==(null===(t=n.Capacitor)||void 0===t?void 0:t.getPlatform())||"undefined"!==typeof navigator&&void 0!==navigator.vibrate)},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:i})}},notification:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:i})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=function(){return e.available()},r=function(){o()&&e.selection()},c=function(){o()&&e.selectionStart()},a=function(){o()&&e.selectionChanged()},u=function(){o()&&e.selectionEnd()},s=function(t){o()&&e.impact(t)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0ssY0FBZXRDLEVBQUU4QyxtQkFBd0I5QyxFQUFFK0MsMEJBQTBCLEVBQUVDLGFBQWEsV0FBVyxJQUFJaEQsRUFBRWlDLEtBQUtSLFlBQWdCekIsSUFBYWlDLEtBQUtLLGNBQWV0QyxFQUFFZ0QsZUFBb0JoRCxFQUFFaUQsc0JBQXNCLEdBQU9DLEVBQWdCLFdBQVcsT0FBTzFCLEVBQWFRLFdBQVcsRUFBTW1CLEVBQWdCLFdBQVdELEtBQW1CMUIsRUFBYW1CLFdBQVcsRUFBTXhCLEVBQXFCLFdBQVcrQixLQUFtQjFCLEVBQWFvQixnQkFBZ0IsRUFBTXZCLEVBQXVCLFdBQVc2QixLQUFtQjFCLEVBQWFzQixrQkFBa0IsRUFBTXZCLEVBQW1CLFdBQVcyQixLQUFtQjFCLEVBQWF3QixjQUFjLEVBQU1JLEVBQWEsU0FBU3BELEdBQUdrRCxLQUFtQjFCLEVBQWFlLE9BQU92QyxFQUFFIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2J1dHRvbi1hY3RpdmUtMmZjYmE4M2QuanMiLCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcHRpYy0wMjlhNDZmNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0e3cgYXMgd3JpdGVUYXNrfWZyb21cIi4vaW5kZXgtMzZhNWZkNzUuanNcIjtpbXBvcnR7aCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQsYSBhcyBoYXB0aWNTZWxlY3Rpb25TdGFydCxiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWR9ZnJvbVwiLi9oYXB0aWMtMDI5YTQ2ZjYuanNcIjtpbXBvcnR7Y3JlYXRlR2VzdHVyZX1mcm9tXCIuL2luZGV4LTQyMmI2ZTgzLmpzXCI7dmFyIGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmU9ZnVuY3Rpb24odCxlKXt2YXIgbjt2YXIgcjt2YXIgaT1mdW5jdGlvbih0LHIsaSl7aWYodHlwZW9mIGRvY3VtZW50PT09XCJ1bmRlZmluZWRcIil7cmV0dXJufXZhciBvPWRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodCxyKTtpZighb3x8IWUobykpe2MoKTtyZXR1cm59aWYobyE9PW4pe2MoKTthKG8saSl9fTt2YXIgYT1mdW5jdGlvbih0LGUpe249dDtpZighcil7cj1ufXZhciBpPW47d3JpdGVUYXNrKChmdW5jdGlvbigpe3JldHVybiBpLmNsYXNzTGlzdC5hZGQoXCJpb24tYWN0aXZhdGVkXCIpfSkpO2UoKX07dmFyIGM9ZnVuY3Rpb24odCl7aWYodD09PXZvaWQgMCl7dD1mYWxzZX1pZighbil7cmV0dXJufXZhciBlPW47d3JpdGVUYXNrKChmdW5jdGlvbigpe3JldHVybiBlLmNsYXNzTGlzdC5yZW1vdmUoXCJpb24tYWN0aXZhdGVkXCIpfSkpO2lmKHQmJnIhPT1uKXtuLmNsaWNrKCl9bj11bmRlZmluZWR9O3JldHVybiBjcmVhdGVHZXN0dXJlKHtlbDp0LGdlc3R1cmVOYW1lOlwiYnV0dG9uQWN0aXZlRHJhZ1wiLHRocmVzaG9sZDowLG9uU3RhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuIGkodC5jdXJyZW50WCx0LmN1cnJlbnRZLGhhcHRpY1NlbGVjdGlvblN0YXJ0KX0sb25Nb3ZlOmZ1bmN0aW9uKHQpe3JldHVybiBpKHQuY3VycmVudFgsdC5jdXJyZW50WSxoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKX0sb25FbmQ6ZnVuY3Rpb24oKXtjKHRydWUpO2hhcHRpY1NlbGVjdGlvbkVuZCgpO3I9dW5kZWZpbmVkfX0pfTtleHBvcnR7Y3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSBhcyBjfTsiLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xudmFyIEhhcHRpY0VuZ2luZT17Z2V0RW5naW5lOmZ1bmN0aW9uKCl7dmFyIGk7dmFyIHQ9d2luZG93O3JldHVybiB0LlRhcHRpY0VuZ2luZXx8KChpPXQuQ2FwYWNpdG9yKT09PW51bGx8fGk9PT12b2lkIDA/dm9pZCAwOmkuaXNQbHVnaW5BdmFpbGFibGUoXCJIYXB0aWNzXCIpKSYmdC5DYXBhY2l0b3IuUGx1Z2lucy5IYXB0aWNzfSxhdmFpbGFibGU6ZnVuY3Rpb24oKXt2YXIgaTt2YXIgdD13aW5kb3c7dmFyIGU9dGhpcy5nZXRFbmdpbmUoKTtpZighZSl7cmV0dXJuIGZhbHNlfWlmKCgoaT10LkNhcGFjaXRvcik9PT1udWxsfHxpPT09dm9pZCAwP3ZvaWQgMDppLmdldFBsYXRmb3JtKCkpPT09XCJ3ZWJcIil7cmV0dXJuIHR5cGVvZiBuYXZpZ2F0b3IhPT1cInVuZGVmaW5lZFwiJiZuYXZpZ2F0b3IudmlicmF0ZSE9PXVuZGVmaW5lZH1yZXR1cm4gdHJ1ZX0saXNDb3Jkb3ZhOmZ1bmN0aW9uKCl7cmV0dXJuISF3aW5kb3cuVGFwdGljRW5naW5lfSxpc0NhcGFjaXRvcjpmdW5jdGlvbigpe3ZhciBpPXdpbmRvdztyZXR1cm4hIWkuQ2FwYWNpdG9yfSxpbXBhY3Q6ZnVuY3Rpb24oaSl7dmFyIHQ9dGhpcy5nZXRFbmdpbmUoKTtpZighdCl7cmV0dXJufXZhciBlPXRoaXMuaXNDYXBhY2l0b3IoKT9pLnN0eWxlLnRvVXBwZXJDYXNlKCk6aS5zdHlsZTt0LmltcGFjdCh7c3R5bGU6ZX0pfSxub3RpZmljYXRpb246ZnVuY3Rpb24oaSl7dmFyIHQ9dGhpcy5nZXRFbmdpbmUoKTtpZighdCl7cmV0dXJufXZhciBlPXRoaXMuaXNDYXBhY2l0b3IoKT9pLnN0eWxlLnRvVXBwZXJDYXNlKCk6aS5zdHlsZTt0Lm5vdGlmaWNhdGlvbih7c3R5bGU6ZX0pfSxzZWxlY3Rpb246ZnVuY3Rpb24oKXt0aGlzLmltcGFjdCh7c3R5bGU6XCJsaWdodFwifSl9LHNlbGVjdGlvblN0YXJ0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5nZXRFbmdpbmUoKTtpZighaSl7cmV0dXJufWlmKHRoaXMuaXNDYXBhY2l0b3IoKSl7aS5zZWxlY3Rpb25TdGFydCgpfWVsc2V7aS5nZXN0dXJlU2VsZWN0aW9uU3RhcnQoKX19LHNlbGVjdGlvbkNoYW5nZWQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLmdldEVuZ2luZSgpO2lmKCFpKXtyZXR1cm59aWYodGhpcy5pc0NhcGFjaXRvcigpKXtpLnNlbGVjdGlvbkNoYW5nZWQoKX1lbHNle2kuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKX19LHNlbGVjdGlvbkVuZDpmdW5jdGlvbigpe3ZhciBpPXRoaXMuZ2V0RW5naW5lKCk7aWYoIWkpe3JldHVybn1pZih0aGlzLmlzQ2FwYWNpdG9yKCkpe2kuc2VsZWN0aW9uRW5kKCl9ZWxzZXtpLmdlc3R1cmVTZWxlY3Rpb25FbmQoKX19fTt2YXIgaGFwdGljQXZhaWxhYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIEhhcHRpY0VuZ2luZS5hdmFpbGFibGUoKX07dmFyIGhhcHRpY1NlbGVjdGlvbj1mdW5jdGlvbigpe2hhcHRpY0F2YWlsYWJsZSgpJiZIYXB0aWNFbmdpbmUuc2VsZWN0aW9uKCl9O3ZhciBoYXB0aWNTZWxlY3Rpb25TdGFydD1mdW5jdGlvbigpe2hhcHRpY0F2YWlsYWJsZSgpJiZIYXB0aWNFbmdpbmUuc2VsZWN0aW9uU3RhcnQoKX07dmFyIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQ9ZnVuY3Rpb24oKXtoYXB0aWNBdmFpbGFibGUoKSYmSGFwdGljRW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKX07dmFyIGhhcHRpY1NlbGVjdGlvbkVuZD1mdW5jdGlvbigpe2hhcHRpY0F2YWlsYWJsZSgpJiZIYXB0aWNFbmdpbmUuc2VsZWN0aW9uRW5kKCl9O3ZhciBoYXB0aWNJbXBhY3Q9ZnVuY3Rpb24oaSl7aGFwdGljQXZhaWxhYmxlKCkmJkhhcHRpY0VuZ2luZS5pbXBhY3QoaSl9O2V4cG9ydHtoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYixoYXB0aWNTZWxlY3Rpb24gYXMgYyxoYXB0aWNJbXBhY3QgYXMgZCxoYXB0aWNTZWxlY3Rpb25FbmQgYXMgaH07Il0sIm5hbWVzIjpbImNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUiLCJ0IiwiZSIsIm4iLCJyIiwiaSIsImRvY3VtZW50IiwibyIsImVsZW1lbnRGcm9tUG9pbnQiLCJjIiwiYSIsIndyaXRlVGFzayIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNsaWNrIiwidW5kZWZpbmVkIiwiY3JlYXRlR2VzdHVyZSIsImVsIiwiZ2VzdHVyZU5hbWUiLCJ0aHJlc2hvbGQiLCJvblN0YXJ0IiwiY3VycmVudFgiLCJjdXJyZW50WSIsImhhcHRpY1NlbGVjdGlvblN0YXJ0Iiwib25Nb3ZlIiwiaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCIsIm9uRW5kIiwiaGFwdGljU2VsZWN0aW9uRW5kIiwiSGFwdGljRW5naW5lIiwiZ2V0RW5naW5lIiwid2luZG93IiwiVGFwdGljRW5naW5lIiwiQ2FwYWNpdG9yIiwiaXNQbHVnaW5BdmFpbGFibGUiLCJQbHVnaW5zIiwiSGFwdGljcyIsImF2YWlsYWJsZSIsInRoaXMiLCJnZXRQbGF0Zm9ybSIsIm5hdmlnYXRvciIsInZpYnJhdGUiLCJpc0NvcmRvdmEiLCJpc0NhcGFjaXRvciIsImltcGFjdCIsInN0eWxlIiwidG9VcHBlckNhc2UiLCJub3RpZmljYXRpb24iLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydCIsImdlc3R1cmVTZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkNoYW5nZWQiLCJnZXN0dXJlU2VsZWN0aW9uQ2hhbmdlZCIsInNlbGVjdGlvbkVuZCIsImdlc3R1cmVTZWxlY3Rpb25FbmQiLCJoYXB0aWNBdmFpbGFibGUiLCJoYXB0aWNTZWxlY3Rpb24iLCJoYXB0aWNJbXBhY3QiXSwic291cmNlUm9vdCI6IiJ9