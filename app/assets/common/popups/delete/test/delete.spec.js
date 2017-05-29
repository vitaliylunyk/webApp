describe('testing delete', function() {
  var $componentController;
  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));
  describe('delete component', function() {
    it('should check delete scope defined', function() {
      var ctrl = $componentController('deleteBlock', null, {}, 'deleteVm');
      expect(ctrl).toBeDefined();
    });
    it('should check call showError function', function() {
      var onShowErrorSpy = jasmine.createSpy('showError');
      var bindings = {showError: onShowErrorSpy};
      var ctrl = $componentController('deleteBlock', null, bindings, 'deleteVm');
      ctrl.showError();
      expect(onShowErrorSpy).toHaveBeenCalled();
    });
    it('should check call deleteUser function', function() {
      var onDeleteUserSpy = jasmine.createSpy('deleteUser');
      var bindings = {deleteUser: onDeleteUserSpy};
      var ctrl = $componentController('deleteBlock', null, bindings, 'deleteVm');
      ctrl.deleteUser();
      expect(onDeleteUserSpy).toHaveBeenCalled();
    });
    it('should check call cancel function', function() {
      var onCancelSpy = jasmine.createSpy('cancel');
      var bindings = {cancel: onCancelSpy};
      var ctrl = $componentController('deleteBlock', null, bindings, 'deleteVm');
      ctrl.cancel();
      expect(onCancelSpy).toHaveBeenCalled();
    });
  });
});
