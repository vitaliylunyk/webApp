'use strict';
app.directive('faqDirective', faqDirective);

function faqDirective() {
  let directive = {
        restrict: 'E',
        templateUrl: 'faq/view/faq-directive.html',
        controller : () => {
            let vm = this;
        },
        link: (scope, el, attr, ctrl) => {

        },
        controllerAs: 'faqVm'
      };
      return directive;
  }
