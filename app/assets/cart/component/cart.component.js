'use strict';
app.controller('cartController', cartController)
  .component('cartBlock', {
      bindings: {},
      templateUrl: 'cart/view/cart.html',
      controller: cartController,
      controllerAs: 'cartVm'
  });

cartController.$inject = ['$scope'];
function cartController ($scope) {
  let vm = this;
}
