describe('testing addItem', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('addItem component', function() {
    it('should check addItem scope defined', function() {
      var ctrl = $componentController('addItemBlock', null, {}, 'addItemVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('addItemBlock', null, bindings, 'addItemVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('addItemBlock', null, bindings, 'addItemVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call getCategories function', function() {
      var onGetCategoriesSpy = jasmine.createSpy('getCategories');
      var bindings = {getCategories: onGetCategoriesSpy};
      var ctrl = $componentController('addItemBlock', null, bindings, 'addItemVm');
      ctrl.getCategories();
      expect(onGetCategoriesSpy).toHaveBeenCalled();
    });
    it('should check call categorySelected function', function() {
      var onCategorySelectedSpy = jasmine.createSpy('categorySelected');
      var bindings = {categorySelected: onCategorySelectedSpy};
      var ctrl = $componentController('addItemBlock', null, bindings, 'addItemVm');
      ctrl.categorySelected();
      expect(onCategorySelectedSpy).toHaveBeenCalled();
    });
    it('should check call addNewItem function', function() {
      var onAddNewItemSpy = jasmine.createSpy('addNewItem');
      var bindings = {addNewItem: onAddNewItemSpy};
      var ctrl = $componentController('addItemBlock', null, bindings, 'addItemVm');
      ctrl.addNewItem();
      expect(onAddNewItemSpy).toHaveBeenCalled();
    });
  });
});
