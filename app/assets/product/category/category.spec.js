describe('categoryDirective', function() {
  module("app");
  inject(function($route) {
   expect($route.routes['/category/:name'].templateUrl).
     toEqual('category/category.html');
   // otherwise redirect to
   expect($route.routes[null].redirectTo).toEqual('/')
 });
});
