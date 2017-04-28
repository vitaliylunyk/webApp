describe('Testing routes', function() {
    beforeEach(module('windscreens'));

    var location, route, rootScope;

    beforeEach(inject(
        function( _$location_, _$route_, _$rootScope_ ) {
            location = _$location_;
            route = _$route_;
            rootScope = _$rootScope_;
    }));

     describe('about route', function() {
        beforeEach(inject(
            function($httpBackend) {
                $httpBackend.expectGET('/about')
                .respond(200);
            }));

        it('should load the login page on successful load of /about', function() {
            location.path('/about');
            rootScope.$digest();
        });
    });
});
