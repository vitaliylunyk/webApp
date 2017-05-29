describe('testing profile', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('profileBlock', null, {}, 'profileVm');
  });
  describe('profile component', function() {
    it('should check profile scope defined', function() {
      expect(ctrl).toBeDefined();
    });
  });
});
