'use strict';
app.directive('loadingDirective', loadingDirective);

function loadingDirective () {
  let directive = {
    restrict:'E',
    templateUrl:'common/components/loading/view/loading.html',
    controller: loadingController,
    controllerAs: 'loadingVm'
    };
    return directive;
}

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
