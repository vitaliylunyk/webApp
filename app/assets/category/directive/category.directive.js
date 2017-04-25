'use strict';
app.directive('categoryDirective', categoryDirective);

function categoryDirective() {
  let directive = {
        restrict: 'E',
        scope: true,
        bindToController: true,
        templateUrl: 'category/view/category-directive.html',
        controller : categoryController,
        link: link,
        controllerAs: 'categoryVm'
      };
      return directive;
  }

categoryController.$inject = ['$scope'];
function categoryController ($scope) {
  let vm = this;
  vm.setCategory = (category) => {
    vm.category = category;
  }
}
function link () {

}
