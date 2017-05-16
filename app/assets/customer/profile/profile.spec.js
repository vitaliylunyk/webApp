describe('testing profile', function() {
  var scope,
  element = '<profile-directive></profile-directive>';
   beforeEach(function () {
     module('app');
     module('customer/profile/view/profile-directive.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('profile directive', function() {
      // it('should check profile directive', function() {
      // });
  });
});
