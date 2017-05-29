describe('testing footer', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('footer component', function() {
      it('should check footer scope defined', function() {
        var ctrl = $componentController('footerBlock', null, {}, 'footerVm');
        expect(ctrl).toBeDefined();
      });
  });
});
