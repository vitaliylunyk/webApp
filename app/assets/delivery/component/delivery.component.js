'use strict';
app.controller('deliveryController', deliveryController)
  .component('deliveryBlock', {
      bindings: {},
      templateUrl: 'delivery/view/delivery.html',
      controller: 'deliveryController as deliveryVm'
  });

deliveryController.$inject = ['$scope'];
function deliveryController($scope) {
  let vm = this;
}
