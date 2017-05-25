'use strict';
app.component('deliveryBlock', {
      bindings: {},
      templateUrl: 'delivery/view/delivery.html',
      controller: deliveryController,
      controllerAs: 'deliveryVm'
  });

deliveryController.$inject = ['$scope'];
function deliveryController($scope) {
  let vm = this;
}
