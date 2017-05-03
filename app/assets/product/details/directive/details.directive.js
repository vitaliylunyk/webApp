'use strict';
app.directive('detailsDirective', detailsDirective);

function detailsDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        bindToController: true,
        templateUrl: 'product/details/view/details-directive.html',
        controller : detailsController,
        link: link,
        controllerAs: 'detailsVm'
      };
      return directive;
  }

detailsController.$inject = ['$scope', 'currentService', 'ngDialog', '$location'];
function detailsController ($scope, currentService, ngDialog, $location) {
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
  vm.setSubcategory = (subcategory) => {
    currentService.setData('subcategory', subcategory)
      .then( (res) => {
        console.log('set subcategory success');
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
