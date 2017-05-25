'use strict';
app.controller('faqController', faqController)
  .component('faqBlock', {
      bindings: {},
      templateUrl: 'faq/view/faq.html',
      controller: 'faqController as faqVm'
  });

faqController.$inject = ['$scope'];
function faqController($scope) {
  let vm = this;
}
