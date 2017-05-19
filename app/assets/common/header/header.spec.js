describe('testing header', function() {
  var scope,
  element = '<header-directive></header-directive>';
   beforeEach(function () {
     module('app');
     module('common/header/view/header.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
       $httpBackend = $injector.get('$httpBackend');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
   afterEach(function () {
       $httpBackend.flush();
       $httpBackend.verifyNoOutstandingExpectation();
       $httpBackend.verifyNoOutstandingRequest();
   });
  describe('notification header', function() {
    beforeEach(function () {
      module('app');
      module('common/popups/view/error.html');
    });
    it('should check header directive', function() {
      //because isolated scope
      expect(scope.$$childTail.headerVm).toBeDefined();
    });
    it('should check activate function', function() {
      $httpBackend.whenGET('common/popups/view/error.html').respond(200, '');
      var onActivateSpy = spyOn(scope.$$childTail.headerVm, 'activate').and.callThrough();
      expect(onActivateSpy).toHaveBeenCalled();
      describe('from activate call', function() {
        it('should check getUserData function', function() {
          $httpBackend.whenGET('common/popups/view/error.html').respond(200, '');
          var onActivateSpyGetUserData = spyOn(scope.$$childTail.headerVm, 'getUserData').and.callThrough();
          expect(onActivateSpyGetUserData).toHaveBeenCalled();
        });
        it('should check getCategories function', function() {
          $httpBackend.whenGET('common/popups/view/error.html').respond(200, '');
          var onActivateSpyGetCategories = spyOn(scope.$$childTail.headerVm, 'getCategories').and.callThrough();
          expect(onActivateSpyGetCategories).toHaveBeenCalled();
        });
      });
    });
  });
});
