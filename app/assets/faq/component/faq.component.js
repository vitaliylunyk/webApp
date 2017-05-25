'use strict';
app.component('faqBlock', {
      bindings: {},
      templateUrl: 'faq/view/faq.html',
      controller: faqController,
      controllerAs: 'faqVm'
  });

faqController.$inject = ['$scope'];
function faqController($scope) {
  let vm = this;
}
