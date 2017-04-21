'use strict';
app.directive('profileDirective', profileDirective);

function profileDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'customer/profile/view/profile-directive.html',
        controller : profileControler,
        link: profileLink,
        controllerAs: 'profileVm'
      };
      return directive;
}
profileControler.$inject = ['$scope', 'currentService', 'ngDialog', 'userService', '$route'];
function profileControler ($scope, currentService, ngDialog, userService, $route) {
    let vm = this;
    vm.confirmDelete = () => {
      ngDialog.open({
        template: 'common/popups/view/delete-confirm.html',
        className: 'ngdialog-theme-default'
      });
    }
    vm.getUserData = () => {
       currentService.getData('userData')
      .then( (res) => {
        if (res) {
          vm.userData = res;
        }
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
    vm.activate = () => {
      vm.getUserData();
    }
    vm.activate();
}

function profileLink () {

}
