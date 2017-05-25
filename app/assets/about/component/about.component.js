'use strict';
app.controller('aboutController', aboutController)
  .component('aboutBlock', {
      bindings: {},
      templateUrl: 'about/view/about.html',
      controller: 'aboutController as aboutVm'
  });

aboutController.$inject = ['$scope'];
function aboutController($scope) {
  let vm = this;
}
