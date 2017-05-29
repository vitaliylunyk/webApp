'use strict';
app.component('aboutBlock', {
      bindings: {},
      templateUrl: 'about/view/about.html',
      controller: aboutController,
      controllerAs: 'aboutVm'
  });

aboutController.$inject = ['$scope'];
function aboutController($scope) {
  let vm = this;
}
