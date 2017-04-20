'use strict';
app.directive('cartDirective', cartDirective);

function cartDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'cart/view/cart-directive.html',
        controller : cartController,
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'cartVm'
      };
      return directive;
}
cartController.$inject = ['$scope'];
function cartController ($scope) {
  let vm = this;
}
