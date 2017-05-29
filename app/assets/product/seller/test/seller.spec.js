describe('testing seller', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('seller component', function() {
    it('should check seller scope defined', function() {
      var ctrl = $componentController('sellerBlock', null, {}, 'sellerVm');
      expect(ctrl).toBeDefined();
      expect(ctrl.itemsCount).toEqual(9);
      expect(ctrl.sellerItems).toEqual([]);
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call getUserData function', function() {
      var onGetUserDataSpy = jasmine.createSpy('getUserData');
      var bindings = {getUserData: onGetUserDataSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.getUserData();
      expect(onGetUserDataSpy).toHaveBeenCalled();
    });
    it('should check call setProductId function', function() {
      var onSetProductIdSpy = jasmine.createSpy('setProductId');
      var bindings = {setProductId: onSetProductIdSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.setProductId();
      expect(onSetProductIdSpy).toHaveBeenCalled();
      var data = '1a';
      ctrl.setProductId(data);
      expect(onSetProductIdSpy).toHaveBeenCalledWith("1a");
      expect(onSetProductIdSpy).not.toHaveBeenCalledWith("");
    });
    it('should check call getProductId function', function() {
      var onGetProductIdSpy = jasmine.createSpy('getProductId');
      var bindings = {getProductId: onGetProductIdSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.getProductId();
      expect(onGetProductIdSpy).toHaveBeenCalled();
    });
    it('should check call getSellerProducts function', function() {
      var onGetSellerProductsSpy = jasmine.createSpy('getSellerProducts');
      var bindings = {getSellerProducts: onGetSellerProductsSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.getSellerProducts();
      expect(onGetSellerProductsSpy).toHaveBeenCalled();
      var data = "1a", secondData = "1b";
      ctrl.getSellerProducts(data, secondData);
      expect(onGetSellerProductsSpy).toHaveBeenCalledWith("1a", "1b");
      expect(onGetSellerProductsSpy).not.toHaveBeenCalledWith("");
    });
    it('should check call productRemove function', function() {
      var onProductRemoveSpy = jasmine.createSpy('productRemove');
      var bindings = {productRemove: onProductRemoveSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.productRemove();
      expect(onProductRemoveSpy).toHaveBeenCalled();
      var data = '1a';
      ctrl.productRemove(data);
      expect(onProductRemoveSpy).toHaveBeenCalledWith("1a");
      expect(onProductRemoveSpy).not.toHaveBeenCalledWith("");
    });
    it('should check call isUser function', function() {
      var onIsUserSpy = jasmine.createSpy('isUser');
      var bindings = {isUser: onIsUserSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
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
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.countSelected();
      expect(onCountSelectedSpy).toHaveBeenCalled();
    });
    it('should check call loadMore function', function() {
      var onLoadMoreSpy = jasmine.createSpy('loadMore');
      var bindings = {loadMore: onLoadMoreSpy};
      var ctrl = $componentController('sellerBlock', null, bindings, 'sellerVm');
      ctrl.loadMore();
      expect(onLoadMoreSpy).toHaveBeenCalled();
    });
  });
});
