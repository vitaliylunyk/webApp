describe('testing popups', function() {
  var scope,
  element = '<div class="popup-container" user-directive></div>';
  beforeEach(function () {
    module('app');
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $httpBackend.whenGET('common/popups/view/error.html').respond(200, '');
    });
    scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  });
  describe('error popup', function() {
    it('should check error popup', function() {
      //because isolated scope
      expect(scope.$$childTail.userVm).toBeDefined();
    });
  });
});
