'use strict';
app.controller('paymentsController', paymentsController)
  .component('paymentsBlock', {
      bindings: {},
      templateUrl: 'payments/view/payments.html',
      controller: 'paymentsController as paymentsVm'
  });

paymentsController.$inject = ['$scope'];
function paymentsController($scope) {
  let vm = this;
}
