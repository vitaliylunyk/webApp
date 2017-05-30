'use strict';
app.component('sellerBlock', {
      bindings: {},
      templateUrl: 'product/seller/view/seller.html',
      controller: sellerController,
      controllerAs: 'sellerVm'
  });

sellerController.$inject = ['$scope', 'currentService', 'ngDialog', '$location', 'itemsService'];
function sellerController ($scope, currentService, ngDialog, $location, itemsService) {
  let vm = this;
  vm.itemsList = [];
  vm.sellerItems = [];
  vm.itemsCount = 9;
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
  vm.getSellerProducts = (id, lastId) => {
    itemsService.getSellerItems(id, lastId, vm.itemsCount)
      .then( (res) => {
        if (res) {
          res.forEach( (item) => {
            vm.sellerItems.push(item);
          });
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
  vm.addTo = (id) => {
    console.log(id);
  }
  vm.isUser = (id) => {
    return vm.userRole == 'admin' || (vm.userRole == 'seller' && (vm.userId == id));
  }
  vm.isBuyer = () => {
    return vm.userRole == 'buyer';
  }
  vm.countSelected = () => {
    vm.lastId = vm.sellerItems[vm.sellerItems.length -1]._id;
    vm.getSellerProducts(vm.sellerId, vm.lastId);
  }
  vm.loadMore = () => {
    vm.lastId = vm.sellerItems[vm.sellerItems.length -1]._id;
    vm.getSellerProducts(vm.sellerId, vm.lastId);
  }
  vm.activate = () => {
    vm.getProductId();
    vm.getUserData();
  }
  vm.$onInit = vm.activate;
}
