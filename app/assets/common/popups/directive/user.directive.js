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

userController.$inject = ['$scope', 'userService'];
function userController ($scope, userService) {
  let vm = this;
  vm.userLogin = () => {
    let data = {
      login: vm.login,
      password: vm.password
    };
    userService.userLogin(JSON.stringify(data));
  }
  vm.userRegister = () => {
    let data = {
      email: vm.email,
      password: vm.password,
      zip_code: vm.zip_code,
      city: vm.city,
      address: vm.address,
      phone_number: vm.phone_number,
      last_name: vm.last_name,
      first_name: vm.first_name,
      country: vm.country,
      date_of_birth: vm.date_of_birth
    };
    userService.userRegister(JSON.stringify(data))
      .then( (res) => {
        console.log(res);
      })
  }
  }
function link () {

}
