app.directive('footerDirective', footerDirective);

function footerDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'footer/view/footer.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'footerVm'
      };
      return directive;
  }
