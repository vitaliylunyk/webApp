describe('testing notification', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _$rootScope_, _$timeout_) {
   $componentController = _$componentController_;
   $rootScope = _$rootScope_;
   $timeout = _$timeout_;
  }));
  beforeEach(function() {
    ctrl = $componentController('notificationBlock', null, {}, 'notificationVm');
  });
  describe('notification component', function() {
    it('should check notification scope defined', function() {
      expect(ctrl).toBeDefined();
      expect(ctrl.isDisplay).toBe(false);
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
        expect(ctrl.isDisplay).toBe(true);
        expect(ctrl.item).toBe('newName');
        expect(ctrl.productId).toBe('123a');
        expect(ctrl.sellerId).toBe('123b');
        expect(ctrl.userData).toBe('newFirstName newLastName');
      });
    });
    describe('notification working on hide', function () {
      beforeEach(function () {
        ctrl.isDisplay = true;
        $rootScope.$broadcast('hideItem');
      });
      it('should check display field is false', function () {
        expect(ctrl.isDisplay).toBe(true);
        $timeout.flush(10);
        $timeout.verifyNoPendingTasks();
        expect(ctrl.isDisplay).toBe(false);
      });
    });
  });
});
