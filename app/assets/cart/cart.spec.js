describe('testing cart', function() {
  var scope,
  element = '<cart-directive></cart-directive>';
   beforeEach(function () {
     module('app');
     module('cart/view/cart-directive.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('cart directive', function() {
      it('should check cart directive', function() {
          expect(scope.cartVm).toBeDefined();
      });
  });
});
