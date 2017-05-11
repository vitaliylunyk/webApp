'use strict';
app.directive('subCategoryDirective', subCategoryDirective);

function subCategoryDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'product/subcategory/view/subcategory-directive.html',
        controller : subCategoryController,
        link: link,
        controllerAs: 'subCategoryVm'
      };
      return directive;
  }

subCategoryController.$inject = ['$scope', 'currentService', 'ngDialog', '$location', 'itemsService'];
function subCategoryController ($scope, currentService, ngDialog, $location, itemsService) {
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
        vm.userId = res && res._id ? res._id : '';
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.getSubcategory = () => {
    currentService.getData('subcategory')
      .then( (res) => {
        if (res) {
          vm.subcategory = res;
          vm.getItemsBySubcategory(vm.subcategory.id);
        } else {
          $location.path('/');
        }
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.getItemsBySubcategory = (id) => {
    itemsService.getItemsBySubcategory(id)
      .then( (res)=> {
        vm.items = res;
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.productRemove = (id) => {
    itemsService.removeItem(vm.userToken, id)
    .then( () => {
      vm.getItemsBySubcategory(vm.subcategory.id);
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
  vm.isUser = (id) => {
    return vm.userRole == 'admin' || (vm.userRole == 'seller' && (vm.userId == id));
  }
  vm.activate = () => {
    vm.getSubcategory();
    vm.getUserData();
  }
  vm.activate();
}
function link () {

}
