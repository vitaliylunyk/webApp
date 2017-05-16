describe('testing header', function() {
  var scope,
  element = '<header-directive></header-directive>';
   beforeEach(function () {
     module('app');
     module('common/header/view/header.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('notification header', function() {
      // it('should check header directive', function() {
      //
      // });
  });
});
