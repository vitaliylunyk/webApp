// describe('testing loading', function() {
//   var scope,
//   element = '<loading-directive></loading-directive>';
//   beforeEach(function() {
//     module('app');
//     module('common/components/loading/view/loading.html');
//     inject(function($injector) {
//       $rootScope = $injector.get('$rootScope');
//       $compile = $injector.get('$compile');
//       $timeout = $injector.get('$timeout');
//     });
//     scope = $rootScope.$new();
//     element = $compile(element)(scope);
//     scope.$digest();
//   });
//   describe('loading directive', function() {
//     it('should check loading defined', function() {
//       expect(scope.loadingVm).toBeDefined();
//       expect(scope.loadingVm.isRouteLoading).toBe(false);
//     });
//     describe('loading start event', function() {
//       beforeEach(function() {
//         $rootScope.$broadcast('$routeChangeStart');
//       });
//       it('should check loading start event', function() {
//         expect(scope.loadingVm.isRouteLoading).toBe(true);
//       });
//     });
//     describe('loading end event', function() {
//       var timerCallback;
//       beforeEach(function() {
//         scope.loadingVm.isRouteLoading = true;
//         $rootScope.$broadcast('$routeChangeSuccess');
//         timerCallback = jasmine.createSpy("timerCallback");
//         jasmine.clock().install();
//       });
//       afterEach(function() {
//         $timeout.flush();
//         $timeout.verifyNoPendingTasks();
//         jasmine.clock().uninstall();
//       });
//       it('should check loading end event before timeout', function() {
//         expect(scope.loadingVm.isRouteLoading).toBe(true);
//       });
//       it('should check loading end event after timeout', function() {
//         setTimeout(function() {
//           scope.loadingVm.isRouteLoading = false;
//         }, 2001);
//         jasmine.clock().tick(1000);
//         expect(scope.loadingVm.isRouteLoading).toBe(true);
//         jasmine.clock().tick(1001);
//         expect(scope.loadingVm.isRouteLoading).toBe(false);
//       });
//     });
//   });
// });
