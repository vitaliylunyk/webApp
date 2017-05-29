describe('testing subcategory', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('subCategory component', function() {
    it('should check subCategory scope defined', function() {
      var ctrl = $componentController('subCategoryBlock', null, {}, 'subCategoryVm');
      expect(ctrl).toBeDefined();
      expect(ctrl.itemsCount).toEqual(9);
      expect(ctrl.items).toEqual([]);
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call getUserData function', function() {
      var onGetUserDataSpy = jasmine.createSpy('getUserData');
      var bindings = {getUserData: onGetUserDataSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.getUserData();
      expect(onGetUserDataSpy).toHaveBeenCalled();
    });
    it('should check call getSubcategory function', function() {
      var onGetSubcategorySpy = jasmine.createSpy('getSubcategory');
      var bindings = {getSubcategory: onGetSubcategorySpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.getSubcategory();
      expect(onGetSubcategorySpy).toHaveBeenCalled();
    });
    it('should check call getItemsBySubcategory function', function() {
      var onGetItemsBySubcategorySpy = jasmine.createSpy('getItemsBySubcategory');
      var bindings = {getItemsBySubcategory: onGetItemsBySubcategorySpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.getItemsBySubcategory();
      expect(onGetItemsBySubcategorySpy).toHaveBeenCalled();
      var data = "1a", secondData = "1b";
      ctrl.getItemsBySubcategory(data, secondData);
      expect(onGetItemsBySubcategorySpy).toHaveBeenCalledWith("1a", "1b");
      expect(onGetItemsBySubcategorySpy).not.toHaveBeenCalledWith("");
    });
    it('should check call productRemove function', function() {
      var onProductRemoveSpy = jasmine.createSpy('productRemove');
      var bindings = {productRemove: onProductRemoveSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.productRemove();
      expect(onProductRemoveSpy).toHaveBeenCalled();
      var data = '1a';
      ctrl.productRemove(data);
      expect(onProductRemoveSpy).toHaveBeenCalledWith("1a");
      expect(onProductRemoveSpy).not.toHaveBeenCalledWith("");
    });
    it('should check call setProductId function', function() {
      var onSetProductIdSpy = jasmine.createSpy('setProductId');
      var bindings = {setProductId: onSetProductIdSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.setProductId();
      expect(onSetProductIdSpy).toHaveBeenCalled();
      var data = '1a';
      ctrl.setProductId(data);
      expect(onSetProductIdSpy).toHaveBeenCalledWith("1a");
      expect(onSetProductIdSpy).not.toHaveBeenCalledWith("");
    });
    it('should check call isUser function', function() {
      var onIsUserSpy = jasmine.createSpy('isUser');
      var bindings = {isUser: onIsUserSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.isUser();
      expect(onIsUserSpy).toHaveBeenCalled();
      var data = '1a';
      ctrl.isUser(data);
      expect(onIsUserSpy).toHaveBeenCalledWith("1a");
      expect(onIsUserSpy).not.toHaveBeenCalledWith("");
    });
    it('should check call countSelected function', function() {
      var onCountSelectedSpy = jasmine.createSpy('countSelected');
      var bindings = {countSelected: onCountSelectedSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.countSelected();
      expect(onCountSelectedSpy).toHaveBeenCalled();
    });
    it('should check call loadMore function', function() {
      var onLoadMoreSpy = jasmine.createSpy('loadMore');
      var bindings = {loadMore: onLoadMoreSpy};
      var ctrl = $componentController('subCategoryBlock', null, bindings, 'subCategoryVm');
      ctrl.loadMore();
      expect(onLoadMoreSpy).toHaveBeenCalled();
    });
  });
});
