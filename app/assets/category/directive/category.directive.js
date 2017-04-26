'use strict';
app.directive('categoryDirective', categoryDirective);

function categoryDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'category/view/category-directive.html',
        controller : categoryController,
        link: link,
        controllerAs: 'categoryVm'
      };
      return directive;
  }

categoryController.$inject = ['$scope', 'currentService', 'ngDialog', '$location'];
function categoryController ($scope, currentService, ngDialog, $location) {
  let vm = this;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getCategory = () => {
    currentService.getData('category')
      .then( (res) => {
        if (res) {
          vm.category = res;
        } else {
          $location.path('/');
        }
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.activate = () => {
    vm.getCategory();
  }
  vm.activate();
}
function link () {

}
