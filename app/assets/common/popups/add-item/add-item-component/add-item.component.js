'use strict';
app.component('addItemBlock', {
      bindings: {},
      templateUrl: 'common/popups/add-item/view/add-item.html',
      controller: addItemController,
      controllerAs: 'addItemVm'
  });

addItemController.$inject = ['$scope', 'itemsService', 'ngDialog', '$route',
  'currentService', '$location'];
function addItemController ($scope, itemsService, ngDialog,
   $route, currentService, $location) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getCategories = () => {
    itemsService.getCategories()
      .then( (res) => {
        vm.categories = res;
      })
      .catch( (e) => {
          vm.showError(e);
      });
  }
  vm.categorySelected = () => {
    itemsService.getSubcategoriesByCategory(vm.addItem.category_selected._id)
    .then( (res) => {
      vm.subcategories = res;
      vm.subcategory_selected = null;
      vm.show_subcategory = true;
    })
   .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.getUserData = () => {
     currentService.getData('userData')
    .then( (res) => {
      if (res) {
        vm.userData = res;
      }
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.addNewItem = () => {
    let token = vm.userData.token;
    let data = {
      name: vm.addItem.name,
      description: vm.addItem.description,
      image: vm.addItem.image,
      subcategory_id: vm.addItem.subcategory_selected._id,
      seller_id: vm.userData._id,
      count_bought: vm.addItem.count_bought,
      count_sold: vm.addItem.count_sold,
      price_bought: vm.addItem.price_bought,
      price_sold: vm.addItem.price_sold,
    };
    itemsService.addItem(token, data)
      .then( (res) => {
         ngDialog.closeAll();
          ngDialog.open({
            template: 'common/popups/view/success.html',
            className: 'ngdialog-theme-default'
          });
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.activate = () => {
   vm.getCategories();
   vm.getUserData();
   }
  vm.$onInit = vm.activate;
}
