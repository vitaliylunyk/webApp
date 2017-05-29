describe('testing faq', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('faqBlock', null, {}, 'faqVm');
  });
  describe('faq component', function() {
      it('should check faq scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
