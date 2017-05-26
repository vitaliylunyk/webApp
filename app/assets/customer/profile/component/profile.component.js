'use strict';
app.component('profileBlock', {
      bindings: {},
      templateUrl: 'customer/profile/view/profile.html',
      controller: profileController,
      controllerAs: 'profileVm'
  });

profileController.$inject = ['$scope', 'currentService', 'ngDialog', 'userService', '$route'];
function profileController ($scope, currentService, ngDialog, userService, $route) {
    let vm = this;
    vm.getCountries = () => {
      userService.getCoutriesList()
        .then( (res) => {
          vm.countries = res;
        });
    }
    vm.getCities = () => {
      userService.getCitiesList(vm.userData.country._id)
      .then( (res) => {
        vm.cities = res;
      });
    }
    vm.confirmDelete = () => {
      ngDialog.open({
        template: '<delete-block></delete-block>',
        plain: true,
        className: 'ngdialog-theme-default'
      });
    }
    vm.addItem = () => {
      ngDialog.open({
        template: '<add-item-block></add-item-block>',
        plain: true,
        className: 'ngdialog-theme-default'
      });
    }
    vm.getUserData = () => {
       currentService.getData('userData')
      .then( (res) => {
          userService.getUserInfo(res.token)
            .then( (res) => {
              vm.userData = res.data;
              vm.userRole = res.data && res.data.role_id ? res.data.role_id.type : '';
              vm.getCountries();
              vm.getCities();
            });
      });
    }
    vm.showInput = (e) => {
      angular.element(e.target.parentNode.parentNode)[0].classList.add("edit");
    }
    vm.editUserInfo = (e) => {
      angular.element(e.target.parentNode.parentNode)[0].classList.remove("edit");
      let data = {
        first_name: vm.userData.first_name,
        last_name: vm.userData.last_name,
         phone_number: vm.userData.phone_number,
         email: vm.userData.email,
         address: vm.userData.address,
         city: vm.userData.city,
         country: vm.userData.country,
         zip_code: vm.userData.zip_code,
      }
      if (vm.userData.date_of_birth) {
        data.date_of_birth = vm.userData.date_of_birth;
      }
      currentService.getData('userData')
        .then( (res)=> {
          userService.userEdit(data, res.token)
            .then( (res) => {
              $route.reload();
            });
        });
    }
    vm.isUser = () => {
      return vm.userRole == 'seller';
    }
    vm.changePassword = () => {
      let data = {
        password: vm.userData.password
      }
      currentService.getData('userData')
        .then( (res)=> {
          userService.userChangePassword(data, res.token)
            .then( (res) => {
              $route.reload();
            });
        });
    }
    vm.activate = () => {
      vm.getUserData();
    }
    vm.$onInit = vm.activate;
}
