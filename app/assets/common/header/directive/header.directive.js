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

headerController.$inject = ['$scope', 'ngDialog'];
function headerController ($scope, ngDialog) {
  let vm = this;
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
}
function link () {

}
