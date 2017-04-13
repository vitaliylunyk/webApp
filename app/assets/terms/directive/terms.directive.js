'use strict';
app.directive('termsDirective', termsDirective);

function termsDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'terms/view/terms-directive.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'termsVm'
      };
      return directive;
  }
