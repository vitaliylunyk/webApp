describe('testing login', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('login component', function() {
    it('should check login scope defined', function() {
      var ctrl = $componentController('loginBlock', null, {}, 'loginVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('loginBlock', null, bindings, 'loginVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call userLogin function', function() {
      var onUserLoginSpy = jasmine.createSpy('userLogin');
      var bindings = {userLogin: onUserLoginSpy};
      var ctrl = $componentController('loginBlock', null, bindings, 'loginVm');
      ctrl.userLogin();
      expect(onUserLoginSpy).toHaveBeenCalled();
    });
  });
});
