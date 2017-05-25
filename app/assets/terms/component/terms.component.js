'use strict';
app.controller('termsController', termsController)
  .component('termsBlock', {
      bindings: {},
      templateUrl: 'terms/view/terms.html',
      controller: 'termsController as termsVm'
  });

termsController.$inject = ['$scope'];
function termsController($scope) {
  let vm = this;
}
