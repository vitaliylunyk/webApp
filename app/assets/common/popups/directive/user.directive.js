'use strict';
app.directive('userDirective', userDirective);

function userDirective() {
  let directive = {
      restrict: 'EA',
      scope: true,
      bindToController: true,
      controller : userController,
      controllerAs: 'userVm',
      link: link
    };
    return directive;
}

userController.$inject = ['$scope', 'userService', 'ngDialog', '$route', 'currentService', '$location'];
function userController ($scope, userService, ngDialog, $route, currentService, $location) {
  let vm = this;
  vm.show_city = false;
  vm.country_selected = null;
  vm.city_selected = null;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getCountries = () => {
    userService.getCoutriesList()
      .then( (res) => {
        vm.countries = res;
      })
      .catch( (e) => {
          vm.showError(e);
      });
  }
  vm.countrySelected = () => {
    userService.getCitiesList(vm.country_selected._id)
    .then( (res) => {
      vm.cities = res;
      vm.city_selected = null;
      vm.show_city = true;
    })
    .catch( (e) => {
      vm.showError(e);
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
  vm.userRegister = () => {
    vm.show_city = true;
    let data = {
      email: vm.email,
      password: vm.password,
      zip_code: vm.zip_code,
      city: vm.city,
      address: vm.address,
      phone_number: vm.phone_number,
      last_name: vm.last_name,
      first_name: vm.first_name,
      country: vm.country_selected._id,
      city: vm.city_selected
    };
    if (vm.date_of_birth) {
      data.date_of_birth = vm.date_of_birth
    }
    userService.userRegister(data)
      .then( (res) => {
          ngDialog.closeAll();
          ngDialog.open({
            template: 'common/popups/view/success.html',
            className: 'ngdialog-theme-default'
          });
      })
      .catch( (e) => {
        vm.showError(e);
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
  vm.activate = () => {
    vm.getCountries();
  }
  vm.activate();
}
function link () {

}
