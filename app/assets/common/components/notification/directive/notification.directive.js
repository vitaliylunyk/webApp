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

notificationController.$inject = [
  '$rootScope',
  '$scope',
  '$timeout',
  'currentService',
  'ngDialog'
];
function notificationController ($rootScope, $scope, $timeout,
   currentService, ngDialog) {
  let vm = this;
  vm.isDisplay = false;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.setSellerId = () => {
    currentService.setData('seller', vm.sellerId)
      .then( (res) => {
        console.log('set seller success');
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.setProductId = () => {
    currentService.setData('product',vm.productId)
      .then( (res) => {
        console.log('set product success');
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  $rootScope.$on('newItem', (e, data) => {
    $timeout( () => {
      vm.userData = data.seller[0].first_name + " "
        + data.seller[0].last_name;
      vm.item = data.name;
      vm.sellerId = data.seller[0]._id;
      vm.productId = data._id;
      vm.isDisplay = true;
    }, 10);
  });
  $rootScope.$on('hideItem', (e, data) => {
    $timeout( () => {
      vm.isDisplay = false;
    }, 10);
  });
}
