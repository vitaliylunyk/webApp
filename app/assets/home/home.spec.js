describe('testing home', function() {
  var scope,
  element = '<home-directive></home-directive>';
   beforeEach(function () {
     module('app');
     module('home/view/home-directive.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('home directive', function() {
      it('should check home directive', function() {
          expect(scope.homeVm).toBeDefined();
      });
  });
});
