"use strict";(self.webpackChunkdog_sitter_react=self.webpackChunkdog_sitter_react||[]).push([[9434],{9434:function(n,t,e){e.r(t),e.d(t,{Geolocation:function(){return f},GeolocationWeb:function(){return s}});var r=e(4165),a=e(5861),i=e(5671),o=e(3144),u=e(136),c=e(7277),s=function(n){(0,u.Z)(e,n);var t=(0,c.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,o.Z)(e,[{key:"getCurrentPosition",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,e){navigator.geolocation.getCurrentPosition((function(t){n(t)}),(function(n){e(n)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},t))})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"watchPosition",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=navigator.geolocation.watchPosition((function(n){e(n)}),(function(n){e(null,n)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},t)),n.abrupt("return","".concat(a));case 2:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},{key:"clearWatch",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.navigator.geolocation.clearWatch(parseInt(t.id,10));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"checkPermissions",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"!==typeof navigator&&navigator.permissions){n.next=2;break}throw this.unavailable("Permissions API not available in this browser");case 2:return n.next=4,window.navigator.permissions.query({name:"geolocation"});case 4:return t=n.sent,n.abrupt("return",{location:t.state,coarseLocation:t.state});case 6:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"requestPermissions",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:throw this.unimplemented("Not implemented on web.");case 1:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()}]),e}(e(6653).Uw),f=new s}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FDMURDLEtBQU0sZ0JBQ04sT0FGYyxPQUFWTixFQUFVQyxFQUFBTSxLQUFBTixFQUFBbkMsT0FBQSxTQUdULENBQUUwQyxTQUFVUixFQUFXUyxNQUFPQyxlQUFnQlYsRUFBV1MsUUFBTyx3QkFBQVIsRUFBQXJCLE9BQUEsR0FBQW1CLEVBQUEsVUFDeEUseUJBQUFELEVBQUEvQyxNQUFBLEtBQUFDLFVBQUEsRUFYQSxJQVdBLENBQUFFLElBQUEscUJBQUFDLE1BQUEsZUFBQXdELEdBQUF0RCxFQUFBQSxFQUFBQSxJQUFBQyxFQUFBQSxFQUFBQSxLQUFBQyxNQUVELFNBQUFxRCxJQUFBLE9BQUF0RCxFQUFBQSxFQUFBQSxLQUFBSSxNQUFBLFNBQUFtRCxHQUFBLGNBQUFBLEVBQUFqRCxLQUFBaUQsRUFBQWhELE1BQUEsYUFDUXNDLEtBQUtXLGNBQWMsMkJBQTBCLHdCQUFBRCxFQUFBakMsT0FBQSxHQUFBZ0MsRUFBQSxVQUNwRCx5QkFBQUQsRUFBQTVELE1BQUEsS0FBQUMsVUFBQSxFQUpBLE1BSUFQLENBQUEsQ0EzRHlCLEMsUUFBUXNFLElBOEQ5QkMsRUFBYyxJQUFJdkUsQyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvZ2VvbG9jYXRpb24vc3JjL3dlYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIENhbGxiYWNrSUQsXG4gIEdlb2xvY2F0aW9uUGx1Z2luLFxuICBQZXJtaXNzaW9uU3RhdHVzLFxuICBQb3NpdGlvbixcbiAgUG9zaXRpb25PcHRpb25zLFxuICBXYXRjaFBvc2l0aW9uQ2FsbGJhY2ssXG59IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb25XZWIgZXh0ZW5kcyBXZWJQbHVnaW4gaW1wbGVtZW50cyBHZW9sb2NhdGlvblBsdWdpbiB7XG4gIGFzeW5jIGdldEN1cnJlbnRQb3NpdGlvbihvcHRpb25zPzogUG9zaXRpb25PcHRpb25zKTogUHJvbWlzZTxQb3NpdGlvbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICBwb3MgPT4ge1xuICAgICAgICAgIHJlc29sdmUocG9zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogZmFsc2UsXG4gICAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICAgICAgbWF4aW11bUFnZTogMCxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHdhdGNoUG9zaXRpb24oXG4gICAgb3B0aW9uczogUG9zaXRpb25PcHRpb25zLFxuICAgIGNhbGxiYWNrOiBXYXRjaFBvc2l0aW9uQ2FsbGJhY2ssXG4gICk6IFByb21pc2U8Q2FsbGJhY2tJRD4ge1xuICAgIGNvbnN0IGlkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICBwb3MgPT4ge1xuICAgICAgICBjYWxsYmFjayhwb3MpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGVycik7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IGZhbHNlLFxuICAgICAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICAgICAgbWF4aW11bUFnZTogMCxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHJldHVybiBgJHtpZH1gO1xuICB9XG5cbiAgYXN5bmMgY2xlYXJXYXRjaChvcHRpb25zOiB7IGlkOiBzdHJpbmcgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaChwYXJzZUludChvcHRpb25zLmlkLCAxMCkpO1xuICB9XG5cbiAgYXN5bmMgY2hlY2tQZXJtaXNzaW9ucygpOiBQcm9taXNlPFBlcm1pc3Npb25TdGF0dXM+IHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5wZXJtaXNzaW9ucykge1xuICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnUGVybWlzc2lvbnMgQVBJIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGVybWlzc2lvbiA9IGF3YWl0IHdpbmRvdy5uYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe1xuICAgICAgbmFtZTogJ2dlb2xvY2F0aW9uJyxcbiAgICB9KTtcbiAgICByZXR1cm4geyBsb2NhdGlvbjogcGVybWlzc2lvbi5zdGF0ZSwgY29hcnNlTG9jYXRpb246IHBlcm1pc3Npb24uc3RhdGUgfTtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9ucygpOiBQcm9taXNlPFBlcm1pc3Npb25TdGF0dXM+IHtcbiAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbn1cblxuY29uc3QgR2VvbG9jYXRpb24gPSBuZXcgR2VvbG9jYXRpb25XZWIoKTtcblxuZXhwb3J0IHsgR2VvbG9jYXRpb24gfTtcbiJdLCJuYW1lcyI6WyJHZW9sb2NhdGlvbldlYiIsIl9XZWJQbHVnaW4iLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2dldEN1cnJlbnRQb3NpdGlvbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwib3B0aW9ucyIsIndyYXAiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiYWJydXB0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvcyIsImVyciIsIk9iamVjdCIsImFzc2lnbiIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInRpbWVvdXQiLCJtYXhpbXVtQWdlIiwic3RvcCIsIl94IiwiX3dhdGNoUG9zaXRpb24iLCJfY2FsbGVlMiIsImNhbGxiYWNrIiwiaWQiLCJfY29udGV4dDIiLCJ3YXRjaFBvc2l0aW9uIiwiY29uY2F0IiwiX3gyIiwiX3gzIiwiX2NsZWFyV2F0Y2giLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsIndpbmRvdyIsImNsZWFyV2F0Y2giLCJwYXJzZUludCIsIl94NCIsIl9jaGVja1Blcm1pc3Npb25zIiwiX2NhbGxlZTQiLCJwZXJtaXNzaW9uIiwiX2NvbnRleHQ0IiwicGVybWlzc2lvbnMiLCJ0aGlzIiwidW5hdmFpbGFibGUiLCJxdWVyeSIsIm5hbWUiLCJzZW50IiwibG9jYXRpb24iLCJzdGF0ZSIsImNvYXJzZUxvY2F0aW9uIiwiX3JlcXVlc3RQZXJtaXNzaW9ucyIsIl9jYWxsZWU1IiwiX2NvbnRleHQ1IiwidW5pbXBsZW1lbnRlZCIsIldlYlBsdWdpbiIsIkdlb2xvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==