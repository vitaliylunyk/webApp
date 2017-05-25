'use strict';
app.controller('footerController', footerController)
  .component('footerBlock', {
      bindings: {},
      templateUrl: 'common/footer/view/footer.html',
      controller : 'footerController as footerVm',
    });

footerController.$inject = ['$scope'];
function footerController ($scope) {
  let vm = this;
}
