describe('testing routes', function() {
  beforeEach(function () {
    module('app');
    inject(function($injector) {
      $route = $injector.get('$route');
    });
  });

  it('should test about route', function() {
    expect($route.routes['/about'].template).
      toEqual('<about-block></about-block>');
  });
  it('should test home route', function() {
    expect($route.routes['/'].template).
      toEqual('<home-block></home-block>');
  });
  it('should test payments route', function() {
    expect($route.routes['/payments'].template).
      toEqual('<payments-block></payments-block>');
  });
  it('should test delivery route', function() {
    expect($route.routes['/delivery'].template).
      toEqual('<delivery-block></delivery-block>');
  });
  it('should test faq route', function() {
    expect($route.routes['/faq'].template).
      toEqual('<faq-block></faq-block>');
  });
  it('should test terms route', function() {
    expect($route.routes['/terms'].template).
      toEqual('<terms-block></terms-block>');
  });
  it('should test profile route', function() {
    expect($route.routes['/profile'].template).
      toEqual('<profile-block></profile-block>');
  });
  it('should test cart route', function() {
    expect($route.routes['/cart'].template).
      toEqual('<cart-block></cart-block>');
  });
  it('should test category route', function() {
    expect($route.routes['/category/:category*'].template).
      toEqual('<category-block></category-block>');
  });
  it('should test subcategory route', function() {
    expect($route.routes['/items/:item*'].template).
      toEqual('<sub-category-block></sub-category-block>');
  });
  it('should test item details route', function() {
    expect($route.routes['/details/:item*'].template).
      toEqual('<details-block></details-block>');
  });
  it('should test seller route', function() {
    expect($route.routes['/seller/:name*'].template).
      toEqual('<seller-block></seller-block>');
  });
  it('should test default route', function() {
    expect($route.routes[null].redirectTo).toEqual('/');
  });
});
