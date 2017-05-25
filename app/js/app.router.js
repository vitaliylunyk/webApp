'use strict';
app.config(appRouter);

appRouter.$inject =['$routeProvider', '$locationProvider'];
function appRouter ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
          template: '<home-block></home-block>'
        })
        .when('/delivery', {
          template: '<delivery-block></delivery-block>'
        })
        .when('/payments', {
          template: '<payments-block></payments-block>'
        })
        .when('/about', {
          template: '<about-block></about-block>'
        })
        .when('/faq', {
          template: '<faq-block></faq-block>'
        })
        .when('/terms', {
          template: '<terms-block></terms-block>'
        })
        .when('/profile', {
          templateUrl: '<profile-block></profile-block>',
          resolve: {
            checkAccess: checkAccess
          }
        })
        .when('/cart', {
          template: '<cart-block></cart-block>',
          resolve: {
            checkAccess: checkAccess
          }
        })
        .when('/category/:category*', {
          template: '<category-block></category-block>'
        })
        .when('/items/:item*', {
          template: '<sub-category-block></sub-category-block>'
        })
        .when('/details/:item*', {
          template: '<details-block></details-block>'
        })
        .when('/seller/:name*', {
          template: '<seller-block></seller-block>'
        })
        .otherwise({redirectTo: '/'});
        $locationProvider.hashPrefix('');
}

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
