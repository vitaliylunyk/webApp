describe('testing addItem', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('addItemBlock', null, {}, 'addItemVm');
  });
  describe('addItem component', function() {
    it('should check addItem scope defined', function() {
      expect(ctrl).toBeDefined();
    });
  });
});
