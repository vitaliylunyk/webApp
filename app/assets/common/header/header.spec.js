// describe('testing header', function() {
//   var scope,
//   element = '<header-directive></header-directive>';
//    beforeEach(function () {
//      module('app');
//      module('common/header/view/header.html');
//      inject(function($injector) {
//        $rootScope = $injector.get('$rootScope');
//        $compile = $injector.get('$compile');
//        $httpBackend = $injector.get('$httpBackend');
//      });
//      scope = $rootScope.$new();
//      element = $compile(element)(scope);
//      scope.$digest();
//      $httpBackend.whenGET('common/popups/view/error.html').respond(200, '');
//    });
//   describe('notification header', function() {
//     it('should check header directive', function() {
//       //because isolated scope
//       expect(scope.$$childTail.headerVm).toBeDefined();
//     });
//     it('should check activate function', function() {
//       describe('from activate call', function() {
//         afterEach(function () {
//             $httpBackend.flush();
//             $httpBackend.verifyNoOutstandingExpectation();
//             $httpBackend.verifyNoOutstandingRequest();
//         });
//         it('should check getUserData function', function() {
//           expect(currentService.getUserData).toHaveBeenCalled();
//         });
//         it('should check getCategories function', function() {
//           var onActivateSpyGetCategories = spyOn(scope.$$childTail.headerVm, 'getCategories');
//           expect(onActivateSpyGetCategories).toHaveBeenCalled();
//         });
//       });
//     });
//   });
// });
