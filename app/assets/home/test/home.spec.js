describe('testing home', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('homeBlock', null, {}, 'homeVm');
  });
  describe('home component', function() {
      it('should check home scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
