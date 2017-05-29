describe('testing seller', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('sellerBlock', null, {}, 'sellerVm');
  });
  describe('seller component', function() {
      it('should check seller scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
