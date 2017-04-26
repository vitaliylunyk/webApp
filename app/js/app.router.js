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
      .when('/profile', {
        templateUrl: 'customer/profile/profile.html',
        resolve: {
          checkAccess: checkAccess
        }
      })
      .when('/cart', {
        templateUrl: 'cart/cart.html',
        resolve: {
          checkAccess: checkAccess
        }
      })
      .when('/category/:name*', {
        templateUrl: 'category/category.html'
      })
      .otherwise({redirectTo: '/'});
      $locationProvider.hashPrefix('');
}]);

checkAccess.$inject = ['accessService', '$location'];
function checkAccess (accessService, $location) {
  accessService.checkPermission("access")
    .then( (res) => {
      if (res) {
        return res;
      } else {
        $location.path('/');
        console.log("access denied");
      }
    })
    .catch( (e) => {
      $location.path('/');
      console.log("access denied");
    });
}
