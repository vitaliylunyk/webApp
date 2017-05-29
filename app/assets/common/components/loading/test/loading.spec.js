describe('testing loading', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _$rootScope_, _$timeout_) {
   $componentController = _$componentController_;
   $rootScope = _$rootScope_;
   $timeout = _$timeout_;
  }));
  beforeEach(function() {
    ctrl = $componentController('loadingBlock', null, {}, 'loadingVm');
  });
  describe('loading component', function() {
    it('should check loading defined', function() {
      expect(ctrl).toBeDefined();
      expect(ctrl.isRouteLoading).toBe(false);
    });
    describe('loading start event', function() {
      beforeEach(function() {
        $rootScope.$broadcast('$routeChangeStart');
      });
      it('should check loading start event', function() {
        expect(ctrl.isRouteLoading).toBe(true);
      });
    });
    describe('loading end event', function() {
      beforeEach(function() {
        ctrl.isRouteLoading = true;
        $rootScope.$broadcast('$routeChangeSuccess');
      });
      it('should check loading end event before timeout', function() {
        expect(ctrl.isRouteLoading).toBe(true);
      });
      it('should check loading end event after timeout', function() {
        expect(ctrl.isRouteLoading).toBe(true);
        $timeout.flush(4000);
        $timeout.verifyNoPendingTasks();
        expect(ctrl.isRouteLoading).toBe(false);
      });
    });
  });
});
