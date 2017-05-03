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
  vm.activate = () => {
    vm.getSubcategory();
  }
  vm.activate();
}
function link () {

}
