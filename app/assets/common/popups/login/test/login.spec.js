describe('testing login', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('loginBlock', null, {}, 'loginVm');
  });
  describe('login component', function() {
    it('should check login scope defined', function() {
      expect(ctrl).toBeDefined();
    });
  });
});
