'use strict';
app.component('deleteBlock', {
      bindings: {},
      templateUrl: 'common/popups/delete/view/delete-confirm.html',
      controller: deleteController,
      controllerAs: 'deleteVm'
  });

deleteController.$inject = ['$scope', 'userService', 'ngDialog', '$route',
  'currentService', '$location'];
function deleteController ($scope, userService, ngDialog,
   $route, currentService, $location) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.deleteUser = () => {
    currentService.getData('userData')
      .then( (res)=> {
        userService.userDelete(res.token)
          .then( () => {
            currentService.removeData('userData')
              .then( () => {
                $route.reload();
                $location.path("/");
                ngDialog.closeAll();
              })
              .catch( (e) => {
                vm.showError(e);
              });
          })
          .catch( (e) => {
            vm.showError(e);
          });
      });
  }
  vm.cancel = () => {
    ngDialog.closeAll();
  }
}
