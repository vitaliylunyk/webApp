'use strict';
app.component('cartBlock', {
      bindings: {},
      templateUrl: 'cart/view/cart.html',
      controller: cartController,
      controllerAs: 'cartVm'
  });

cartController.$inject = ['$scope', 'ngDialog', 'currentService', 'itemsService',
                          '$route', 'ordersService'];
function cartController ($scope, ngDialog, currentService,
   itemsService, $route, ordersService) {
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
    if (vm.itemsList.length) {
      vm.itemsList.forEach( (item) => {
        itemsService.getItem(item._id)
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
      });
    }
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
        $route.reload();
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.makeOrder = () => {
    let data = {
      items: vm.itemsList
    }
    ordersService.makeOrder(data, vm.userToken)
      .then( (res) => {
        currentService.removeData('cart')
        .then( (res) => {
          console.log('order success');
          $route.reload();
          ngDialog.closeAll();
          ngDialog.open({
            template: 'common/popups/view/success.html',
            className: 'ngdialog-theme-default'
          });
        })
        .catch( (e) => {
          vm.showError(e);
        });
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.isBuyer = () => {
    return vm.userRole == 'buyer';
  }
  vm.activate = () => {
    vm.getUserData();
    vm.getItems();
  }
  vm.$onInit = vm.activate;
}
