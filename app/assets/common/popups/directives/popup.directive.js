'use strict';
app.directive('popupsDirective', popupsDirective);

function popupsDirective() {
  let directive = {
        restrict: 'A',
        scope: true,
        bindToController: true,
        link: userLink,
      };
      return directive;
}
function userLink (scope, element, attributes, ctrl) {
  element.bind('change', (e) => {
    console.log("here");
    if (e.target.type == 'file') {
      scope.$apply( () => {
        ctrl.addItem.image = e.target.files[0];
      });
    }
  });
}
