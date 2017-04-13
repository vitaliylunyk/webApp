app.directive('headerDirective', headerDirective);

function headerDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'header/view/header.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'headerVm'
      };
      return directive;
  }
