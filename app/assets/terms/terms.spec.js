describe('testing terms', function() {
  var scope,
  element = '<terms-directive></terms-directive>';
   beforeEach(function () {
     module('app');
     module('terms/view/terms-directive.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('terms directive', function() {
      it('should check terms directive', function() {
          expect(scope.termsVm).toBeDefined();
      });
  });
});
