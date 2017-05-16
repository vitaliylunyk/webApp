describe('test userService', function() {
  var api;
  beforeEach(function () {
    module('app');
    inject(function($injector) {
      api = $injector.get('api');
    });
  });
  it('should be defined', function () {
    expect(api).toBeDefined();
  });
});
