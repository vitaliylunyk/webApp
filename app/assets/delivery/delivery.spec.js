describe('deliveryDirective', function() {
  module("app");
  inject(function($route) {
   expect($route.routes['/delivery'].templateUrl).
     toEqual('customer/profile/profile.html');
   // otherwise redirect to
   expect($route.routes[null].redirectTo).toEqual('/')
 });
});
