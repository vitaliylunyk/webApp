describe('testing delivery', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('deliveryBlock', null, {}, 'deliveryVm');
  });
  describe('delivery directive', function() {
      it('should check delivery scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
