describe('testing terms', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('termsBlock', null, {}, 'termsVm');
  });
  describe('terms component', function() {
      it('should check terms scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
