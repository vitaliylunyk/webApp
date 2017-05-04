'use strict';
app.directive('sellerDirective', sellerDirective);

function sellerDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'product/seller/view/seller-directive.html',
        controller : sellerController,
        link: link,
        controllerAs: 'sellerVm'
      };
      return directive;
  }

sellerController.$inject = ['$scope', 'currentService', 'ngDialog', '$location', 'itemsService'];
function sellerController ($scope, currentService, ngDialog, $location, itemsService) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.setProductId = (id) => {
    currentService.setData('product', id)
      .then( (res) => {
        console.log('set product success');
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.getProductId = () => {
    currentService.getData('seller')
      .then( (res) => {
        vm.sellerId = res;
        vm.getSellerProducts(vm.sellerId);
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.getSellerProducts = (id) => {
    itemsService.getSellerItems(id)
      .then( (res) => {
        if (res) {
          vm.sellerItems = res;
        } else {
          $location.path('/');
        }
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.activate = () => {
    vm.getProductId();
  }
  vm.activate();
}
function link () {

}
