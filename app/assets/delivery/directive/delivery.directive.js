'use strict';
app.directive('deliveryDirective', deliveryDirective);

function deliveryDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'delivery/view/delivery-directive.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'deliveryVm'
      };
      return directive;
  }
