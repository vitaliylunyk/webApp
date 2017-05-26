'use strict';
app.component('registerBlock', {
      bindings: {},
      templateUrl: 'common/popups/register/view/registration.html',
      controller: registerController,
      controllerAs: 'registerVm'
  });

registerController.$inject = ['$scope', 'userService', 'ngDialog', '$route',
  'currentService', '$location'];
function registerController ($scope, userService, ngDialog,
   $route, currentService, $location, itemsService) {
  let vm = this;
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
  vm.activate = () => {
    vm.getCountries();
  }
  vm.$onInit = vm.activate;
}
