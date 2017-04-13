'use strict';
app.config(['$routeProvider', '$locationProvider',
 ($routeProvider, $locationProvider) => {
  $routeProvider
      .when('/', {
        templateUrl: 'home/home.html'
      })
      .when('/delivery', {
        templateUrl: 'delivery/delivery.html'
      })
      .when('/payments', {
        templateUrl: 'payments/payments.html'
      })
      .when('/about', {
        templateUrl: 'about/about.html'
      })
      .when('/faq', {
        templateUrl: 'faq/faq.html'
      })
      .when('/terms', {
        templateUrl: 'terms/terms.html'
      })
      .otherwise({redirectTo: '/'});
      $locationProvider.hashPrefix('');
}]);
