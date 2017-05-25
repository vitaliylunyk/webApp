'use strict';
app.component('footerBlock', {
      bindings: {},
      templateUrl: 'common/footer/view/footer.html',
      controller : footerController,
      controllerAs: 'footerVm'
    });

footerController.$inject = ['$scope'];
function footerController ($scope) {
  let vm = this;
}
