describe('testing item details', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('details component', function() {
    it('should check details scope defined', function() {
      var ctrl = $componentController('detailsBlock', null, {}, 'detailsVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call activate function', function() {
      var onActivateSpy = jasmine.createSpy('activate');
      var bindings = {activate: onActivateSpy};
      var ctrl = $componentController('detailsBlock', null, bindings, 'detailsVm');
      ctrl.activate();
      expect(onActivateSpy).toHaveBeenCalled();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('detailsBlock', null, bindings, 'detailsVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call getProductId function', function() {
      var onGetProductIdSpy = jasmine.createSpy('getProductId');
      var bindings = {getProductId: onGetProductIdSpy};
      var ctrl = $componentController('detailsBlock', null, bindings, 'detailsVm');
      ctrl.getProductId();
      expect(onGetProductIdSpy).toHaveBeenCalled();
    });
    it('should check call getProduct function', function() {
      var onGetProductSpy = jasmine.createSpy('getProduct');
      var bindings = {getProduct: onGetProductSpy};
      var ctrl = $componentController('detailsBlock', null, bindings, 'detailsVm');
      ctrl.getProduct();
      expect(onGetProductSpy).toHaveBeenCalled();
    });
    it('should check call setSellerId function', function() {
      var onSetSellerIdSpy = jasmine.createSpy('setSellerId');
      var bindings = {setSellerId: onSetSellerIdSpy};
      var ctrl = $componentController('detailsBlock', null, bindings, 'detailsVm');
      ctrl.setSellerId();
      expect(onSetSellerIdSpy).toHaveBeenCalled();
      var data = "1a";
      ctrl.setSellerId(data);
      expect(onSetSellerIdSpy).toHaveBeenCalledWith("1a");
      expect(onSetSellerIdSpy).not.toHaveBeenCalledWith("1b");
    });
  });
});
