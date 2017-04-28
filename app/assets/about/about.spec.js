describe('aboutDirective', function() {
  module("app");
  inject(function($route) {

   expect($route.routes['/about'].templateUrl).
     toEqual('about/about.html');

   // otherwise redirect to
   expect($route.routes[null].redirectTo).toEqual('/')
 });
});
