'use strict';
app.directive('popupsFileDirective', popupsFileDirective);

function popupsFileDirective() {
  let directive = {
        restrict: 'A',
        link: userLink,
      };
      return directive;
}
function userLink (scope, element, attributes) {
  element.bind('change', (e) => {
    e.preventDefault();
    if (e.target.type == 'file') {
      scope.$apply( () => {
        scope.addItemVm.addItem.image = e.target.files[0];
      });
    }
  });
}
