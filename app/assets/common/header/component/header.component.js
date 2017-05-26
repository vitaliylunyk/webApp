'use strict';
app.component('headerBlock', {
    bindings: {},
    templateUrl: 'common/header/view/header.html',
    controller: headerController,
    controllerAs: 'headerVm'
  });

headerController.$inject = ['$rootScope', '$scope', 'ngDialog', '$timeout',
 'currentService', 'accessService', '$location', '$route', 'itemsService'];
function headerController ($rootScope, $scope, ngDialog, $timeout,
   currentService, accessService, $location, $route, itemsService) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getUserData = () => {
     currentService.getData('userData')
    .then( (res) => {
      if (res) {
        accessService.setPermission("access")
        .then( () => {
          vm.userData = res;
          vm.userName = vm.userData.first_name + " " + vm.userData.last_name;
        })
        .catch( (e) => {
          vm.showError(e);
        });
      }
    })
    .catch( (e) => {
      vm.showError(e);
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
      template: '<register-block></register-block>',
      plain: true,
      className: 'ngdialog-theme-default'
    });
  }
  vm.openLogin = () => {
    ngDialog.open({
      template: '<login-block></login-block>',
      plain: true,
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
        })
        .catch( (e) => {
          vm.showError(e);
        });
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.getCategories = () => {
    itemsService.getCategories()
      .then( (res) => {
        vm.categories = res;
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.setCategory = (category) => {
    currentService.setData('category', category)
      .then( (res) => {
        console.log('set category success');
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.setSubcategory = (subcategory) => {
    currentService.setData('subcategory', subcategory)
      .then( (res) => {
        console.log('set subcategory success');
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.activate = () => {
    vm.getUserData();
    vm.getCategories();
  }
  vm.$onInit = vm.activate;
}
