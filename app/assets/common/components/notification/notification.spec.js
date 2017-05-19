describe('testing notification', function() {
  var scope,
  element = '<notification-directive></notification-directive>';
  beforeEach(function () {
    module('app');
    module('common/components/notification/view/notification-directive.html');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $timeout = $injector.get('$timeout');
    });
    scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  });
  describe('notification directive', function() {
    it('should check notification directive', function() {
      //becdause isolated scope
      expect(scope.$$childTail.notificationVm).toBeDefined();
      expect(scope.$$childTail.notificationVm.isDisplay).toBe(false);
    });
    describe('notification working on show', function () {
      beforeEach(function () {
        var broadcastData = {
          name: 'newName',
          _id: '123a',
          seller: [{
            first_name: 'newFirstName',
            last_name: 'newLastName',
            _id: '123b'
        }]};
        $rootScope.$broadcast('newItem', broadcastData);
      });
      it('should check display field is true', function () {
        $timeout.flush(10);
        $timeout.verifyNoPendingTasks();
        expect(scope.$$childTail.notificationVm.isDisplay).toBe(true);
        expect(scope.$$childTail.notificationVm.item).toBe('newName');
        expect(scope.$$childTail.notificationVm.productId).toBe('123a');
        expect(scope.$$childTail.notificationVm.sellerId).toBe('123b');
        expect(scope.$$childTail.notificationVm.userData).toBe('newFirstName newLastName');
      });
    });
    describe('notification working on hide', function () {
      beforeEach(function () {
        scope.$$childTail.notificationVm.isDisplay = true;
        $rootScope.$broadcast('hideItem');
      });
      it('should check display field is false', function () {
        expect(scope.$$childTail.notificationVm.isDisplay).toBe(true);
        $timeout.flush(10);
        $timeout.verifyNoPendingTasks();
        expect(scope.$$childTail.notificationVm.isDisplay).toBe(false);
      });
    });
  });
});
