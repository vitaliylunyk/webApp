describe('testing register', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('registerBlock', null, {}, 'registerVm');
  });
  describe('register component', function() {
    it('should check register scope defined', function() {
      expect(ctrl).toBeDefined();
    });
  });
});
