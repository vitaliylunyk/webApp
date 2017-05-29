describe('testing item details', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('detailsBlock', null, {}, 'detailsVm');
  });
  describe('details component', function() {
      it('should check details scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
