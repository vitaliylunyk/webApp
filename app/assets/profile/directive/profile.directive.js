'use strict';
app.directive('profileDirective', profileDirective);

function profileDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'profile/view/profile-directive.html',
        controller : profileControler,
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'profileVm'
      };
      return directive;
}
profileControler.$inject = ['$scope', 'currentService'];
function profileControler ($scope, currentService) {
    let vm = this;
}
