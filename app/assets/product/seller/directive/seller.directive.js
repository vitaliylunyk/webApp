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
  vm.getUserData = () => {
    currentService.getData('userData')
      .then( (res) => {
        vm.userRole = res && res.role_id ? res.role_id.type : '';
        vm.userToken = res && res.token ? res.token : '';
      })
      .catch( (e) => {
        vm.showError(e);
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
  vm.productRemove = (id) => {
    itemsService.removeItem(vm.userToken, id)
    .then( () => {
      vm.getSellerProducts(vm.sellerId);
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.isUser = (id) => {
    return vm.userRole == 'admin' || (vm.userRole == 'seller' && (vm.userId == id));
  }
  vm.activate = () => {
    vm.getProductId();
    vm.getUserData();
  }
  vm.activate();
}
function link () {

}
