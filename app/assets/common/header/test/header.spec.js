describe('testing header', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_, _currentService_) {
   $componentController = _$componentController_;
   currentService = _currentService_;
  }));
  describe('header component', function() {
    it('should check header component scope defined', function() {
      var ctrl = $componentController('headerBlock', null, {}, 'headerVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      var errorData = {status: 404, statusText: 'not found'};
      ctrl.showError(errorData);
      expect(onShowErrorSpy).toHaveBeenCalledWith({status: 404, statusText: 'not found'});
      expect(onShowErrorSpy).not.toHaveBeenCalledWith({status: 200, statusText: 'success'});
    });
    it('should check call getUserData function', function() {
      var onGetUserData = jasmine.createSpy('getUserData');
      var bindings = {getUserData: onGetUserData};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.getUserData();
      expect(onGetUserData).toHaveBeenCalled();
    });
    it('should check call openRegistration function', function() {
      var onOpenRegistration = jasmine.createSpy('openRegistration');
      var bindings = {openRegistration: onOpenRegistration};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.openRegistration();
      expect(onOpenRegistration).toHaveBeenCalled();
    });
    it('should check call openLogin function', function() {
      var onOpenLogin = jasmine.createSpy('openLogin');
      var bindings = {openLogin: onOpenLogin};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.openLogin();
      expect(onOpenLogin).toHaveBeenCalled();
    });
    it('should check call isEmpty function', function() {
      var onIsEmpty = jasmine.createSpy('isEmpty');
      var bindings = {isEmpty: onIsEmpty};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.isEmpty();
      expect(onIsEmpty).toHaveBeenCalled();
    });
    it('should check call userLogout function', function() {
      var onUserLogout = jasmine.createSpy('userLogout');
      var bindings = {userLogout: onUserLogout};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.userLogout();
      expect(onUserLogout).toHaveBeenCalled();
    });
    it('should check call getCategories function', function() {
      var onGetCategories = jasmine.createSpy('getCategories');
      var bindings = {getCategories: onGetCategories};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      ctrl.getCategories();
      expect(onGetCategories).toHaveBeenCalled();
    });
    it('should check call setCategory function', function() {
      var onSetCategory = jasmine.createSpy('setCategory');
      var bindings = {setCategory: onSetCategory};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      var data = "1a";
      ctrl.setCategory(data);
      expect(onSetCategory).toHaveBeenCalledWith("1a");
      expect(onSetCategory).not.toHaveBeenCalledWith("1b");
    });
    it('should check call setSubcategory function', function() {
      var onSetSubcategory = jasmine.createSpy('setSubcategory');
      var bindings = {setSubcategory: onSetSubcategory};
      var ctrl = $componentController('headerBlock', null, bindings, 'headerVm');
      var data = "1a";
      ctrl.setSubcategory(data);
      expect(onSetSubcategory).toHaveBeenCalledWith("1a");
      expect(onSetSubcategory).not.toHaveBeenCalledWith("1b");
    });
  });
});
