'use strict';
app.directive('scrollDirective', scrollDirective);

function scrollDirective() {
  let directive = {
        restrict: 'A',
        link: scrollLink,
      };
      return directive;
}
function scrollLink (scope, element, attributes, fn) {
  let raw = element[0];
  angular.element(raw).bind('scroll', (e) => {
    e.preventDefault();
    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
      scope.$apply( () => {
        scope.$eval(attributes.scrollDirectiveLoad);
      });
    }
  });
}
