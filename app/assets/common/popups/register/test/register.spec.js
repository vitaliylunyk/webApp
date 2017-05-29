describe('testing register', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('register component', function() {
    it('should check register scope defined', function() {
      var ctrl = $componentController('registerBlock', null, {}, 'registerVm');
      expect(ctrl).toBeDefined();
      expect(ctrl.country_selected).toBe(null);
      expect(ctrl.city_selected).toBe(null);
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('registerBlock', null, bindings, 'registerVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call getCountries function', function() {
      var onGetCountriesSpy = jasmine.createSpy('getCountries');
      var bindings = {getCountries: onGetCountriesSpy};
      var ctrl = $componentController('registerBlock', null, bindings, 'registerVm');
      ctrl.getCountries();
      expect(onGetCountriesSpy).toHaveBeenCalled();
    });
    it('should check call countrySelected function', function() {
      var onCountrySelectedSpy = jasmine.createSpy('countrySelected');
      var bindings = {countrySelected: onCountrySelectedSpy};
      var ctrl = $componentController('registerBlock', null, bindings, 'registerVm');
      ctrl.countrySelected();
      expect(onCountrySelectedSpy).toHaveBeenCalled();
    });
    it('should check call userRegister function', function() {
      var onUserRegisterSpy = jasmine.createSpy('userRegister');
      var bindings = {userRegister: onUserRegisterSpy};
      var ctrl = $componentController('registerBlock', null, bindings, 'registerVm');
      ctrl.userRegister();
      expect(onUserRegisterSpy).toHaveBeenCalled();
    });
  });
});
