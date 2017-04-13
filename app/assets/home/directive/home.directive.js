'use strict';
app.directive('homeDirective', homeDirective);

function homeDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'home/view/home-directive.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'homeVm'
      };
      return directive;
  }
