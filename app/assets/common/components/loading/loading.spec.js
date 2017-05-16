describe('testing loading', function() {
  var scope,
  element = '<loading-directive></loading-directive>';
  beforeEach(function () {
    module('app');
    module('common/components/loading/view/loading.html');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $templateCache = $injector.get('$templateCache');
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
    it('should check loading start event', function() {
      $rootScope.$broadcast('$routeChangeStart');
      expect(scope.loadingVm.isRouteLoading).toBe(true);
    });
    it('should check loading end event', function() {
      $rootScope.$broadcast('$routeChangeStart');
      $rootScope.$broadcast('$routeChangeSuccess');
      expect(scope.loadingVm.isRouteLoading).toBe(true);
    });
    // it('should check loading end event after 2 seconds', function() {
    //   $rootScope.$broadcast('$routeChangeStart');
    //   $rootScope.$broadcast('$routeChangeSuccess');
    //   $timeout.flush(2001);
    //   expect(scope.loadingVm.isRouteLoading).toBe(false);
    //   console.info(scope.loadingVm);
    // });
  });
});
