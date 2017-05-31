'use strict';
app.component('detailsBlock', {
      bindings: {},
      templateUrl: 'product/details/view/details.html',
      controller: detailsController,
      controllerAs: 'detailsVm'
  });

detailsController.$inject = ['$scope', 'currentService', 'ngDialog',
 '$location', 'itemsService', 'userService'];
function detailsController ($scope, currentService, ngDialog,
   $location, itemsService, userService) {
  let vm = this;
  vm.itemsList = [];
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
      userService.getUserInfo(res.token)
        .then( (res) => {
          vm.userRole = res.data && res.data.role_id ? res.data.role_id.type : '';
        });
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
  vm.addTo = (id) => {
    currentService.getData('cart')
      .then( (res) => {
        if (res && res.length) {
          vm.itemsList = [];
          res.forEach( (item) => {
            let data = {
              _id: item._id,
              count: 1
            }
            vm.itemsList.push(data);
          });
        }
        let data = {
          _id: id,
          count: 1
        }
        vm.itemsList.push(data);
        currentService.setData('cart', vm.itemsList)
          .then( (res) => {
            console.log('set product list success');
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
    vm.getProductId();
    vm.getUserData();
  }
  vm.$onInit = vm.activate;
}
