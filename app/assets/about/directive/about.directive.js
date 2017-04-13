'use strict';
app.directive('aboutDirective', aboutDirective);

function aboutDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'about/view/about-directive.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'aboutVm'
      };
      return directive;
  }
