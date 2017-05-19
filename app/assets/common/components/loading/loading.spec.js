describe('testing loading', function() {
  var scope,
  element = '<loading-directive></loading-directive>';
  beforeEach(function () {
    module('app');
    module('common/components/loading/view/loading.html');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $timeout = $injector.get('$timeout');
    });
    scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  });
  describe('loading directive', function() {
    it('should check loading defined', function() {
      expect(scope.loadingVm).toBeDefined();
      expect(scope.loadingVm.isRouteLoading).toBe(false);
    });
    describe('loading start event', function () {
      beforeEach(function () {
        scope.loadingVm.isRouteLoading = true;
        $rootScope.$broadcast('$routeChangeStart');
      });
      it('should check loading start event', function() {
        expect(scope.loadingVm.isRouteLoading).toBe(true);
      });
    });
    describe('loading end event after timeout', function () {
      beforeEach(function () {
        scope.loadingVm.isRouteLoading = true;
        $rootScope.$broadcast('$routeChangeSuccess');
      });
      it('should check loading end event after timeout', function () {
        expect(scope.loadingVm.isRouteLoading).toBe(true);
        $timeout.flush(2000);
        $timeout.verifyNoPendingTasks();
        expect(scope.loadingVm.isRouteLoading).toBe(false);
      });
    });
  });
});
