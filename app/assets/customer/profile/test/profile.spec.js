describe('testing profile', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('profile component', function() {
    it('should check profile scope defined', function() {
      var ctrl = $componentController('profileBlock', null, {}, 'profileVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call getCountries function', function() {
      var onGetCountriesSpy = jasmine.createSpy('getCountries');
      var bindings = {getCountries: onGetCountriesSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.getCountries();
      expect(onGetCountriesSpy).toHaveBeenCalled();
    });
    it('should check call getCities function', function() {
      var onGetCitiesSpy = jasmine.createSpy('getCities');
      var bindings = {getCities: onGetCitiesSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.getCities();
      expect(onGetCitiesSpy).toHaveBeenCalled();
    });
    it('should check call confirmDelete function', function() {
      var onConfirmDeleteSpy = jasmine.createSpy('confirmDelete');
      var bindings = {confirmDelete: onConfirmDeleteSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.confirmDelete();
      expect(onConfirmDeleteSpy).toHaveBeenCalled();
    });
    it('should check call addItem function', function() {
      var onAddItemSpy = jasmine.createSpy('addItem');
      var bindings = {addItem: onAddItemSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.addItem();
      expect(onAddItemSpy).toHaveBeenCalled();
    });
    it('should check call getUserData function', function() {
      var onGetUserDataSpy = jasmine.createSpy('getUserData');
      var bindings = {getUserData: onGetUserDataSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.getUserData();
      expect(onGetUserDataSpy).toHaveBeenCalled();
    });
    it('should check call showInput function', function() {
      var onShowInputSpy = jasmine.createSpy('showInput');
      var bindings = {showInput: onShowInputSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.showInput();
      expect(onShowInputSpy).toHaveBeenCalled();
    });
    it('should check call editUserInfo function', function() {
      var onEditUserInfoSpy = jasmine.createSpy('editUserInfo');
      var bindings = {editUserInfo: onEditUserInfoSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.editUserInfo();
      expect(onEditUserInfoSpy).toHaveBeenCalled();
    });
    it('should check call isUser function', function() {
      var onIsUserSpy = jasmine.createSpy('isUser');
      var bindings = {isUser: onIsUserSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.isUser();
      expect(onIsUserSpy).toHaveBeenCalled();
    });
    it('should check call changePassword function', function() {
      var onChangePasswordSpy = jasmine.createSpy('ichangePassword');
      var bindings = {changePassword: onChangePasswordSpy};
      var ctrl = $componentController('profileBlock', null, bindings, 'profileVm');
      ctrl.changePassword();
      expect(onChangePasswordSpy).toHaveBeenCalled();
    });
  });
});
