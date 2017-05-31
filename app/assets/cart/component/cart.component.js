'use strict';
app.component('cartBlock', {
      bindings: {},
      templateUrl: 'cart/view/cart.html',
      controller: cartController,
      controllerAs: 'cartVm'
  });

cartController.$inject = ['$scope', 'ngDialog', 'currentService', 'itemsService'];
function cartController ($scope, ngDialog, currentService, itemsService) {
  let vm = this;
  vm.itemsList = [];
  vm.itemsInCart = [];
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getItems = () => {
    currentService.getData('cart')
      .then( (res) => {
        vm.itemsList = [];
        if (res && res.length) {
          res.forEach( (item) => {
            vm.itemsList.push(item);
          });
          vm.getItemsList();
        }
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.getItemsList = () => {
    vm.itemsInCart = [];
    vm.itemsList.forEach( (item) => {
      itemsService.getItem(item)
        .then( (res) => {
          if (res) {
            vm.item = res[0];
            vm.sellerName = vm.item.seller[0].first_name + " "
             + vm.item.seller[0].last_name;
            vm.sellerId = vm.item.seller[0]._id;
            vm.itemsInCart.push(vm.item);
          }
        })
        .catch( (e) => {
          vm.showError(e);
        });
    })
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
  vm.productRemove = (id) => {
    let index = vm.itemsList.indexOf(id);
    vm.itemsList.splice(index, 1);
    currentService.setData('cart', vm.itemsList)
      .then( (res) => {
        console.log('set product list success');
        vm.getItems();
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.activate = () => {
    vm.getItems();
  }
  vm.$onInit = vm.activate;
}
