describe('testing delete', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('deleteBlock', null, {}, 'deleteVm');
  });
  describe('delete component', function() {
    it('should check delete scope defined', function() {
      expect(ctrl).toBeDefined();
    });
  });
});
