'use strict';
app.directive('footerDirective', footerDirective);

function footerDirective() {
  let directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'common/footer/view/footer.html',
        controller : footerController,
        link: link,
        controllerAs: 'footerVm'
      };
      return directive;
  }

footerController.$inject = ['$scope'];
function footerController ($scope) {
  let vm = this;
}
function link () {
}
