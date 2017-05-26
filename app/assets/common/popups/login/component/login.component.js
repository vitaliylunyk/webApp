'use strict';
app.component('loginBlock', {
      bindings: {},
      templateUrl: 'common/popups/login/view/login.html',
      controller: loginController,
      controllerAs: 'loginVm'
  });

loginController.$inject = ['$scope', 'userService', 'ngDialog', '$route',
  'currentService'];
function loginController ($scope, userService, ngDialog,
   $route, currentService, $location, itemsService) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.userLogin = () => {
    let data = {
      email: vm.login,
      password: vm.password
    };
    userService.userLogin(data)
    .then( (res) => {
        currentService.setData('userData', res.data)
        .then( (res) => {
          $route.reload();
          ngDialog.closeAll();
        })
        .catch( (e) => {
          vm.showError(e);
        });
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
}
