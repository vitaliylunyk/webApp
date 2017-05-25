'use strict';
app.controller('homeController', homeController)
  .component('homeBlock', {
    bindings: {},
    templateUrl: 'home/view/home.html',
    controller: 'homeController as homeVm'
  });

homeController.$inject = ['$scope'];
function homeController($scope) {
  let vm = this;
}
