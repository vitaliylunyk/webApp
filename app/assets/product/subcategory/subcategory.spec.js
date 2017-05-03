describe('categoryDirective', function() {
  module("app");
  inject(function($route) {
   expect($route.routes['/items/:name'].templateUrl).
     toEqual('subcategory/subcategory.html');
   // otherwise redirect to
   expect($route.routes[null].redirectTo).toEqual('/')
 });
});
