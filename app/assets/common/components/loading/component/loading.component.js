'use strict';
app.controller('loadingController', loadingController)
  .component('loadingBlock', {
      bindings: {},
      templateUrl: 'common/components/loading/view/loading.html',
      controller: loadingController,
      controllerAs: 'loadingVm'
  });

loadingController.$inject = ['$rootScope', '$scope', '$timeout'];
function loadingController ($rootScope, $scope, $timeout) {
  let vm = this;
  vm.isRouteLoading = false;
  $rootScope.$on('$routeChangeStart', () => {
    vm.isRouteLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', () => {
    $timeout(() => {
      vm.isRouteLoading = false;
    }, 2000);
  });
}
