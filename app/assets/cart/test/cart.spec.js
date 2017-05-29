describe('testing cart', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('cart component', function() {
      it('should check cart scope defined', function() {
        var ctrl = $componentController('cartBlock', null, {}, 'cartVm');
        expect(ctrl).toBeDefined();
      });
  });
});
