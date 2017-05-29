'use strict';
app.component('cartBlock', {
      bindings: {},
      templateUrl: 'cart/view/cart.html',
      controller: cartController,
      controllerAs: 'cartVm'
  });

cartController.$inject = ['$scope'];
function cartController ($scope) {
  let vm = this;
}
