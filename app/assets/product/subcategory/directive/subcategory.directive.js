'use strict';
app.directive('subCategoryDirective', subCategoryDirective);

function subCategoryDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'product/subcategory/view/subcategory-directive.html',
        controller : subCategoryController,
        link: subCategoryLink,
        controllerAs: 'subCategoryVm'
      };
      return directive;
  }

subCategoryController.$inject = ['$scope', 'currentService', 'ngDialog', '$location', 'itemsService'];
function subCategoryController ($scope, currentService, ngDialog, $location, itemsService) {
  let vm = this;
  vm.items = [];
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
  vm.getItemsBySubcategory = (id, lastId) => {
    itemsService.getItemsBySubcategory(id, lastId, vm.itemsCount)
      .then( (res)=> {
        res.forEach( (item)=> {
          vm.items.push(item);
        });
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
  vm.countSelected = () => {
    vm.lastId = vm.items[vm.items.length -1]._id;
    vm.getItemsBySubcategory(vm.subcategory.id, vm.lastId);
  }
  vm.loadMore = () => {
    vm.lastId = vm.items[vm.items.length -1]._id;
    vm.getItemsBySubcategory(vm.subcategory.id, vm.lastId);
  }
  vm.activate = () => {
    vm.getSubcategory();
    vm.getUserData();
  }
  vm.activate();
}
function subCategoryLink (scope, element, attributes, ctrl) {
  let raw = element[0].children[0].children[1].children[2];
  angular.element(raw).bind('scroll', () => {
    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
      scope.$apply( () => {
        ctrl.loadMore();
      });
    }
  });
}
