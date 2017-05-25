'use strict';
app.component('detailsBlock', {
      bindings: {},
      templateUrl: 'product/details/view/details.html',
      controller: detailsController,
      controllerAs: 'detailsVm'
  });

detailsController.$inject = ['$scope', 'currentService', 'ngDialog', '$location', 'itemsService'];
function detailsController ($scope, currentService, ngDialog, $location, itemsService) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getProductId = () => {
    currentService.getData('product')
      .then( (res) => {
        vm.itemId = res;
        vm.getProduct(vm.itemId);
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.getProduct = (id) => {
    itemsService.getItem(id)
      .then( (res) => {
        if (res) {
          vm.item = res[0];
          vm.sellerName = vm.item.seller[0].first_name + " "
           + vm.item.seller[0].last_name;
          vm.sellerId = vm.item.seller[0]._id;
        } else {
          $location.path('/');
        }
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.setSellerId = (id) => {
    currentService.setData('seller', id)
      .then( (res) => {
        console.log('set seller success');
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.activate = () => {
    vm.getProductId();
  }
  vm.$onInit = vm.activate;
}
