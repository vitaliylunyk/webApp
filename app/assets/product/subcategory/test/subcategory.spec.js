describe('testing subcategory', function() {
  var $componentController,
  ctrl;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  beforeEach(function() {
    ctrl = $componentController('subCategoryBlock', null, {}, 'subCategoryVm');
  });
  describe('subCategory component', function() {
      it('should check subCategory scope defined', function() {
          expect(ctrl).toBeDefined();
      });
  });
});
