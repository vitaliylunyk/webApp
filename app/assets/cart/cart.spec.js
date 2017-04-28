describe('cartDirective', function() {
  module("app");
  inject(function($route) {
   expect($route.routes['/cart'].templateUrl).
     toEqual('cart/cart.html');
   // otherwise redirect to
   expect($route.routes[null].redirectTo).toEqual('/')
 });
});
