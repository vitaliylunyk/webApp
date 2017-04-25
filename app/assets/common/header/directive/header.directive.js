'use strict';
app.directive('headerDirective', headerDirective);

function headerDirective() {
  let directive = {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'common/header/view/header.html',
      controller : headerController,
      controllerAs: 'headerVm',
      link: link
    };
    return directive;
}

headerController.$inject = ['$scope', 'ngDialog', 'currentService', 'accessService', '$location', '$route', 'itemsService'];
function headerController ($scope, ngDialog, currentService, accessService, $location, $route, itemsService) {
  let vm = this;
  vm.getUserData = () => {
     currentService.getData('userData')
    .then( (res) => {
      if (res) {
        accessService.setPermission("access")
        .then( () => {
          vm.userData = res;
          vm.userName = vm.userData.first_name + " " + vm.userData.last_name;
        });
      }
    });
  }
  vm.isEmpty = () => {
    let dataLength = vm.userData ? Object.keys(vm.userData).length : 0;
    if (dataLength && dataLength > 0) {
      return true;
    } else {
      return false;
    }
  };
  vm.openRegistration = () => {
    ngDialog.open({
      template: 'common/popups/view/registration.html',
      className: 'ngdialog-theme-default'
    });
  }
  vm.openLogin = () => {
    ngDialog.open({
      template: 'common/popups/view/login.html',
      className: 'ngdialog-theme-default'
    });
  }
  vm.userLogout = () => {
    currentService.removeData('userData')
    .then( () => {
      accessService.removePermission("access")
        .then( () => {
          $location.path('/');
          $route.reload();
        });
    });
  }
  vm.getCategories = () => {
    itemsService.getCategories()
      .then( (res)=> {
        vm.categories = res;
      });
  }
  vm.activate = () => {
    vm.getUserData();
    vm.getCategories();
  }
  vm.activate();
}
function link () {

}
