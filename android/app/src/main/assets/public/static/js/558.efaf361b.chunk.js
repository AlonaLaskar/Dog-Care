"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[558],{1216:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return r},copyVisualViewport:function(){return D},keyboardDidClose:function(){return w},keyboardDidOpen:function(){return g},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return s},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return h},startKeyboardAssist:function(){return c},trackViewportChanges:function(){return y}});var i=n(79),r=(n(2913),"ionKeyboardDidShow"),o="ionKeyboardDidHide",u={},a={},f=!1,s=function(){u={},a={},f=!1},c=function(e){if(i.K.getEngine())d(e);else{if(!e.visualViewport)return;a=D(e.visualViewport),e.visualViewport.onresize=function(){y(e),g()||b(e)?h(e):w(e)&&p(e)}}},d=function(e){e.addEventListener("keyboardDidShow",(function(t){return h(e,t)})),e.addEventListener("keyboardDidHide",(function(){return p(e)}))},h=function(e,t){l(e,t),f=!0},p=function(e){v(e),f=!1},g=function(){var e=(u.height-a.height)*a.scale;return!f&&u.width===a.width&&e>150},b=function(e){return f&&!w(e)},w=function(e){return f&&a.height===e.innerHeight},l=function(e,t){var n=t?t.keyboardHeight:e.innerHeight-a.height,i=new CustomEvent(r,{detail:{keyboardHeight:n}});e.dispatchEvent(i)},v=function(e){var t=new CustomEvent(o);e.dispatchEvent(t)},y=function(e){u=Object.assign({},a),a=D(e.visualViewport)},D=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzLzU1OC5lZmFmMzYxYi5jaHVuay5qcyIsIm1hcHBpbmdzIjoicWtCQUdrRkEsRyxRQUFrQixzQkFBeUJDLEVBQW1CLHFCQUFvREMsRUFBdUIsQ0FBQyxFQUFNQyxFQUFzQixDQUFDLEVBQU1DLEdBQWEsRUFBVUMsRUFBb0IsV0FBV0gsRUFBdUIsQ0FBQyxFQUFFQyxFQUFzQixDQUFDLEVBQUVDLEdBQWEsQ0FBSyxFQUFNRSxFQUFvQixTQUFTQyxHQUE4QixHQUFyQkMsRUFBQUEsRUFBU0MsWUFBa0JDLEVBQXFCSCxPQUFPLENBQUMsSUFBSUEsRUFBRUksZUFBZ0IsT0FBT1IsRUFBc0JTLEVBQW1CTCxFQUFFSSxnQkFBZ0JKLEVBQUVJLGVBQWVFLFNBQVMsV0FBV0MsRUFBcUJQLEdBQU1RLEtBQW1CQyxFQUFrQlQsR0FBSVUsRUFBZ0JWLEdBQVdXLEVBQWlCWCxJQUFJWSxFQUFpQlosRUFBRyxDQUFDLENBQUMsRUFBTUcsRUFBcUIsU0FBU0gsR0FBR0EsRUFBRWEsaUJBQWlCLG1CQUFtQixTQUFTQyxHQUFHLE9BQU9KLEVBQWdCVixFQUFFYyxFQUFFLElBQUlkLEVBQUVhLGlCQUFpQixtQkFBbUIsV0FBVyxPQUFPRCxFQUFpQlosRUFBRSxHQUFHLEVBQU1VLEVBQWdCLFNBQVNWLEVBQUVjLEdBQUdDLEVBQXNCZixFQUFFYyxHQUFHakIsR0FBYSxDQUFJLEVBQU1lLEVBQWlCLFNBQVNaLEdBQUdnQixFQUF1QmhCLEdBQUdILEdBQWEsQ0FBSyxFQUFNVyxFQUFnQixXQUFXLElBQUlSLEdBQUdMLEVBQXVCc0IsT0FBT3JCLEVBQXNCcUIsUUFBUXJCLEVBQXNCc0IsTUFBTSxPQUFPckIsR0FBY0YsRUFBdUJ3QixRQUFRdkIsRUFBc0J1QixPQUFPbkIsRUFBL2xDLEdBQW1uQyxFQUFNUyxFQUFrQixTQUFTVCxHQUFHLE9BQU9ILElBQWVjLEVBQWlCWCxFQUFFLEVBQU1XLEVBQWlCLFNBQVNYLEdBQUcsT0FBT0gsR0FBY0QsRUFBc0JxQixTQUFTakIsRUFBRW9CLFdBQVcsRUFBTUwsRUFBc0IsU0FBU2YsRUFBRWMsR0FBRyxJQUFJTyxFQUFFUCxFQUFFQSxFQUFFUSxlQUFldEIsRUFBRW9CLFlBQVl4QixFQUFzQnFCLE9BQVdNLEVBQUUsSUFBSUMsWUFBWS9CLEVBQWtCLENBQUNnQyxPQUFPLENBQUNILGVBQWVELEtBQUtyQixFQUFFMEIsY0FBY0gsRUFBRSxFQUFNUCxFQUF1QixTQUFTaEIsR0FBRyxJQUFJYyxFQUFFLElBQUlVLFlBQVk5QixHQUFvQk0sRUFBRTBCLGNBQWNaLEVBQUUsRUFBTVAsRUFBcUIsU0FBU1AsR0FBR0wsRUFBdUJnQyxPQUFPQyxPQUFPLENBQUMsRUFBRWhDLEdBQXVCQSxFQUFzQlMsRUFBbUJMLEVBQUVJLGVBQWUsRUFBTUMsRUFBbUIsU0FBU0wsR0FBRyxNQUFNLENBQUNtQixNQUFNVSxLQUFLQyxNQUFNOUIsRUFBRW1CLE9BQU9GLE9BQU9ZLEtBQUtDLE1BQU05QixFQUFFaUIsUUFBUWMsVUFBVS9CLEVBQUUrQixVQUFVQyxXQUFXaEMsRUFBRWdDLFdBQVdDLFFBQVFqQyxFQUFFaUMsUUFBUUMsU0FBU2xDLEVBQUVrQyxTQUFTaEIsTUFBTWxCLEVBQUVrQixNQUFNLEMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUva2V5Ym9hcmQtOWFkNjE2MTYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydHtLIGFzIEtleWJvYXJkfWZyb21cIi4va2V5Ym9hcmQtODU2YmM5MjkuanNcIjtpbXBvcnRcIi4vaW5kZXgtYjMyY2FkOTguanNcIjt2YXIgS0VZQk9BUkRfRElEX09QRU49XCJpb25LZXlib2FyZERpZFNob3dcIjt2YXIgS0VZQk9BUkRfRElEX0NMT1NFPVwiaW9uS2V5Ym9hcmREaWRIaWRlXCI7dmFyIEtFWUJPQVJEX1RIUkVTSE9MRD0xNTA7dmFyIHByZXZpb3VzVmlzdWFsVmlld3BvcnQ9e307dmFyIGN1cnJlbnRWaXN1YWxWaWV3cG9ydD17fTt2YXIga2V5Ym9hcmRPcGVuPWZhbHNlO3ZhciByZXNldEtleWJvYXJkQXNzaXN0PWZ1bmN0aW9uKCl7cHJldmlvdXNWaXN1YWxWaWV3cG9ydD17fTtjdXJyZW50VmlzdWFsVmlld3BvcnQ9e307a2V5Ym9hcmRPcGVuPWZhbHNlfTt2YXIgc3RhcnRLZXlib2FyZEFzc2lzdD1mdW5jdGlvbihlKXt2YXIgcj1LZXlib2FyZC5nZXRFbmdpbmUoKTtpZihyKXtzdGFydE5hdGl2ZUxpc3RlbmVycyhlKX1lbHNle2lmKCFlLnZpc3VhbFZpZXdwb3J0KXtyZXR1cm59Y3VycmVudFZpc3VhbFZpZXdwb3J0PWNvcHlWaXN1YWxWaWV3cG9ydChlLnZpc3VhbFZpZXdwb3J0KTtlLnZpc3VhbFZpZXdwb3J0Lm9ucmVzaXplPWZ1bmN0aW9uKCl7dHJhY2tWaWV3cG9ydENoYW5nZXMoZSk7aWYoa2V5Ym9hcmREaWRPcGVuKCl8fGtleWJvYXJkRGlkUmVzaXplKGUpKXtzZXRLZXlib2FyZE9wZW4oZSl9ZWxzZSBpZihrZXlib2FyZERpZENsb3NlKGUpKXtzZXRLZXlib2FyZENsb3NlKGUpfX19fTt2YXIgc3RhcnROYXRpdmVMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7ZS5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmREaWRTaG93XCIsKGZ1bmN0aW9uKHIpe3JldHVybiBzZXRLZXlib2FyZE9wZW4oZSxyKX0pKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gc2V0S2V5Ym9hcmRDbG9zZShlKX0pKX07dmFyIHNldEtleWJvYXJkT3Blbj1mdW5jdGlvbihlLHIpe2ZpcmVLZXlib2FyZE9wZW5FdmVudChlLHIpO2tleWJvYXJkT3Blbj10cnVlfTt2YXIgc2V0S2V5Ym9hcmRDbG9zZT1mdW5jdGlvbihlKXtmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50KGUpO2tleWJvYXJkT3Blbj1mYWxzZX07dmFyIGtleWJvYXJkRGlkT3Blbj1mdW5jdGlvbigpe3ZhciBlPShwcmV2aW91c1Zpc3VhbFZpZXdwb3J0LmhlaWdodC1jdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0KSpjdXJyZW50VmlzdWFsVmlld3BvcnQuc2NhbGU7cmV0dXJuIWtleWJvYXJkT3BlbiYmcHJldmlvdXNWaXN1YWxWaWV3cG9ydC53aWR0aD09PWN1cnJlbnRWaXN1YWxWaWV3cG9ydC53aWR0aCYmZT5LRVlCT0FSRF9USFJFU0hPTER9O3ZhciBrZXlib2FyZERpZFJlc2l6ZT1mdW5jdGlvbihlKXtyZXR1cm4ga2V5Ym9hcmRPcGVuJiYha2V5Ym9hcmREaWRDbG9zZShlKX07dmFyIGtleWJvYXJkRGlkQ2xvc2U9ZnVuY3Rpb24oZSl7cmV0dXJuIGtleWJvYXJkT3BlbiYmY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodD09PWUuaW5uZXJIZWlnaHR9O3ZhciBmaXJlS2V5Ym9hcmRPcGVuRXZlbnQ9ZnVuY3Rpb24oZSxyKXt2YXIgdD1yP3Iua2V5Ym9hcmRIZWlnaHQ6ZS5pbm5lckhlaWdodC1jdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0O3ZhciBpPW5ldyBDdXN0b21FdmVudChLRVlCT0FSRF9ESURfT1BFTix7ZGV0YWlsOntrZXlib2FyZEhlaWdodDp0fX0pO2UuZGlzcGF0Y2hFdmVudChpKX07dmFyIGZpcmVLZXlib2FyZENsb3NlRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIHI9bmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9DTE9TRSk7ZS5kaXNwYXRjaEV2ZW50KHIpfTt2YXIgdHJhY2tWaWV3cG9ydENoYW5nZXM9ZnVuY3Rpb24oZSl7cHJldmlvdXNWaXN1YWxWaWV3cG9ydD1PYmplY3QuYXNzaWduKHt9LGN1cnJlbnRWaXN1YWxWaWV3cG9ydCk7Y3VycmVudFZpc3VhbFZpZXdwb3J0PWNvcHlWaXN1YWxWaWV3cG9ydChlLnZpc3VhbFZpZXdwb3J0KX07dmFyIGNvcHlWaXN1YWxWaWV3cG9ydD1mdW5jdGlvbihlKXtyZXR1cm57d2lkdGg6TWF0aC5yb3VuZChlLndpZHRoKSxoZWlnaHQ6TWF0aC5yb3VuZChlLmhlaWdodCksb2Zmc2V0VG9wOmUub2Zmc2V0VG9wLG9mZnNldExlZnQ6ZS5vZmZzZXRMZWZ0LHBhZ2VUb3A6ZS5wYWdlVG9wLHBhZ2VMZWZ0OmUucGFnZUxlZnQsc2NhbGU6ZS5zY2FsZX19O2V4cG9ydHtLRVlCT0FSRF9ESURfQ0xPU0UsS0VZQk9BUkRfRElEX09QRU4sY29weVZpc3VhbFZpZXdwb3J0LGtleWJvYXJkRGlkQ2xvc2Usa2V5Ym9hcmREaWRPcGVuLGtleWJvYXJkRGlkUmVzaXplLHJlc2V0S2V5Ym9hcmRBc3Npc3Qsc2V0S2V5Ym9hcmRDbG9zZSxzZXRLZXlib2FyZE9wZW4sc3RhcnRLZXlib2FyZEFzc2lzdCx0cmFja1ZpZXdwb3J0Q2hhbmdlc307Il0sIm5hbWVzIjpbIktFWUJPQVJEX0RJRF9PUEVOIiwiS0VZQk9BUkRfRElEX0NMT1NFIiwicHJldmlvdXNWaXN1YWxWaWV3cG9ydCIsImN1cnJlbnRWaXN1YWxWaWV3cG9ydCIsImtleWJvYXJkT3BlbiIsInJlc2V0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydEtleWJvYXJkQXNzaXN0IiwiZSIsIktleWJvYXJkIiwiZ2V0RW5naW5lIiwic3RhcnROYXRpdmVMaXN0ZW5lcnMiLCJ2aXN1YWxWaWV3cG9ydCIsImNvcHlWaXN1YWxWaWV3cG9ydCIsIm9ucmVzaXplIiwidHJhY2tWaWV3cG9ydENoYW5nZXMiLCJrZXlib2FyZERpZE9wZW4iLCJrZXlib2FyZERpZFJlc2l6ZSIsInNldEtleWJvYXJkT3BlbiIsImtleWJvYXJkRGlkQ2xvc2UiLCJzZXRLZXlib2FyZENsb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInIiLCJmaXJlS2V5Ym9hcmRPcGVuRXZlbnQiLCJmaXJlS2V5Ym9hcmRDbG9zZUV2ZW50IiwiaGVpZ2h0Iiwic2NhbGUiLCJ3aWR0aCIsImlubmVySGVpZ2h0IiwidCIsImtleWJvYXJkSGVpZ2h0IiwiaSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIk9iamVjdCIsImFzc2lnbiIsIk1hdGgiLCJyb3VuZCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJwYWdlVG9wIiwicGFnZUxlZnQiXSwic291cmNlUm9vdCI6IiJ9