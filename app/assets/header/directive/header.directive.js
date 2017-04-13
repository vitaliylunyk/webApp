app.directive('headerDirective', headerDirective);

function headerDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'header/view/header.html',
        controller : controller,
        controllerAs: 'headerVm',
        link: (scope, el, attr, ctrl) => {

        }
      };
      return directive;
  }

controller.$inject = ['$scope', 'ngDialog'];
function controller ($scope, ngDialog) {
  let vm = this;
  vm.openRegistration = () => {
    ngDialog.open({
      template: '../common/popups/view/registration.html',
       className: 'ngdialog-theme-default'
    });
  }
  vm.openLogin = () => {
    ngDialog.open({
      template: '../common/popups/view/login.html',
      className: 'ngdialog-theme-default'
    });
  }
}
