describe('testing category', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('category component', function() {
    it('should check category scope defined', function() {
      var ctrl = $componentController('categoryBlock', null, {}, 'categoryVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('categoryBlock', null, bindings, 'categoryVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('categoryBlock', null, bindings, 'categoryVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call getCategory function', function() {
      var onGetCategorySpy = jasmine.createSpy('getCategory');
      var bindings = {getCategory: onGetCategorySpy};
      var ctrl = $componentController('categoryBlock', null, bindings, 'categoryVm');
      ctrl.getCategory();
      expect(onGetCategorySpy).toHaveBeenCalled();
    });
    it('should check call setSubcategory function', function() {
      var onSetSubcategorySpy = jasmine.createSpy('setSubcategory');
      var bindings = {setSubcategory: onSetSubcategorySpy};
      var ctrl = $componentController('categoryBlock', null, bindings, 'categoryVm');
      ctrl.setSubcategory();
      expect(onSetSubcategorySpy).toHaveBeenCalled();
      var data = '1a';
      ctrl.setSubcategory(data);
      expect(onSetSubcategorySpy).toHaveBeenCalledWith('1a');
      expect(onSetSubcategorySpy).not.toHaveBeenCalledWith('1b');
    });
  });
});
