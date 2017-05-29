describe('testing header', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('headerBlock', null, {}, 'headerVm');
  });
  describe('header component', function() {
    it('should check header component scope defined', function() {
      expect(ctrl).toBeDefined();
    });
  });
});
