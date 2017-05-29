describe('testing payments', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('paymentsBlock', null, {}, 'paymentsVm');
  });
  describe('payments component', function() {
      it('should check payments scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
