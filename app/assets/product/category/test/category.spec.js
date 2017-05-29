describe('testing category', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('categoryBlock', null, {}, 'categoryVm');
  });
  describe('category component', function() {
      it('should check category scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
