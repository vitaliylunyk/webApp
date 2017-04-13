'use strict';
app.directive('paymentsDirective', paymentsDirective);

function paymentsDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'payments/view/payments-directive.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'paymentsVm'
      };
      return directive;
  }
