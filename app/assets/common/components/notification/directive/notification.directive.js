'use strict';
app.directive('notificationDirective', notificationDirective);

function notificationDirective() {
  let directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'common/components/notification/view/notification-directive.html',
      controller : notificationController,
      controllerAs: 'notificationVm'
    };
    return directive;
}

notificationController.$inject = ['$rootScope', '$scope', '$timeout'];
function notificationController ($rootScope, $scope, $timeout) {
  let vm = this;
  vm.isDisplay = false;
  $rootScope.$on('newItem', (e, data) => {
    $timeout( () => {
      vm.userData = data.seller[0].first_name + " "
        + data.seller[0].last_name;
      vm.item = data.name;
      vm.isDisplay = true;
    }, 10);
  });
  $rootScope.$on('hideItem', (e, data) => {
    $timeout( () => {
      vm.isDisplay = false;
    }, 10);
  });
}
