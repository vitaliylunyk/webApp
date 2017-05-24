describe('testing profile', function() {
  var scope,
  element = '<profile-directive></profile-directive>';
   beforeEach(function() {
     module('app');
     module('customer/profile/view/profile-directive.html');
     inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $compile = $injector.get('$compile');
       $q = $injector.get('$q');
       userService = $injector.get('userService');
       currentService = $injector.get('currentService');
     });
     scope = $rootScope.$new();
     element = $compile(element)(scope);
     scope.$digest();
   });
  describe('profile directive', function() {
    beforeEach(function() {
      var mockData = {
        token: '123a'
      }
      // spyOn(currentService, 'getData').and.returnValue(mockData);
      spyOn(currentService, 'getData').and.callFake(function(){
        var deferred = $q.defer();
        deferred.resolve(mockData);
        return deferred.promise;
      });
    });
    // it('should check profile directive scope defined', function() {
    //   //because isolated scope
    //   expect(scope.$$childTail.profileVm).toBeDefined();
    // });
    // it('should check activate function', function() {
    //   spyOn(scope.$$childTail.profileVm, 'activate').and.callThrough();
    //   scope.$$childTail.profileVm.activate();
    //   expect(scope.$$childTail.profileVm.activate).toHaveBeenCalled();
    //   // expect(currentService.getData).toBeDefined();
    //   // expect(typeof currentService.getData).toEqual('function');
    //   // expect(currentService.getData).toHaveBeenCalledWith('userData');
    // });
    it('should check getCountries function', function() {
      spyOn(scope.$$childTail.profileVm, 'getCountries').and.callFake(function(){
        return [{name: 'China', id: '1'}, {name: 'Japan', id: '2'}];
      });
      scope.$$childTail.profileVm.getCountries();
      expect(scope.$$childTail.profileVm.getCountries).toHaveBeenCalled();
    });
  });
});
