'use strict';
app.config(appRouter);

appRouter.$inject =['$routeProvider', '$locationProvider'];
function appRouter ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
          template: '<header-block></header-block>'+
                    '<home-block></home-block>'+
                    '<footer-block></footer-block>'
        })
        .when('/delivery', {
          template: '<header-block></header-block>'+
                    '<delivery-block></delivery-block>'+
                    '<footer-block></footer-block>'
        })
        .when('/payments', {
          template: '<header-block></header-block>'+
                    '<payments-block></payments-block>'+
                    '<footer-block></footer-block>'
        })
        .when('/about', {
          template: '<header-block></header-block>'+
                    '<about-block></about-block>'+
                    '<footer-block></footer-block>'
        })
        .when('/faq', {
          template: '<header-block></header-block>'+
                    '<faq-block></faq-block>'+
                    '<footer-block></footer-block>'
        })
        .when('/terms', {
          template: '<header-block></header-block>'+
                    '<terms-block></terms-block>'+
                    '<footer-block></footer-block>'
        })
        .when('/profile', {
          templateUrl: 'customer/profile/profile.html',
          resolve: {
            checkAccess: checkAccess
          }
        })
        .when('/cart', {
          template: '<header-block></header-block>'+
                    '<cart-block></cart-block>'+
                    '<footer-block></footer-block>',
          resolve: {
            checkAccess: checkAccess
          }
        })
        .when('/category/:category*', {
          template: '<header-block></header-block>'+
                    '<category-block></category-block>'+
                    '<footer-block></footer-block>',
        })
        .when('/items/:item*', {
          template: '<header-block></header-block>'+
                    '<sub-category-block></sub-category-block>'+
                    '<footer-block></footer-block>',
        })
        .when('/details/:item*', {
          template: '<header-block></header-block>'+
                    '<details-block></details-block>'+
                    '<footer-block></footer-block>',
        })
        .when('/seller/:name*', {
          template: '<header-block></header-block>'+
                    '<seller-block></seller-block>'+
                    '<footer-block></footer-block>',
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
