describe('testing about', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('about component', function() {
      it('should check about scope defined', function() {
         var ctrl = $componentController('aboutBlock', null, {}, 'aboutVm');
          expect(ctrl).toBeDefined();
      });
  });
});
