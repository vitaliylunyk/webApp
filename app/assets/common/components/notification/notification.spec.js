describe('testing notification', function() {
  var scope,
  element = '<notification-directive></notification-directive>';
   beforeEach(function () {
     module('app');
     module('common/components/notification/view/notification-directive.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('notification directive', function() {
      // it('should check notification directive', function() {
      //     expect(scope.notificationVm).toBeDefined();
      // });
  });
});
