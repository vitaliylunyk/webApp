'use strict';
app.factory('accessService', accessService);

accessService.$inject = ['$q', '$timeout'];
function accessService ($q, $timeout) {
  let vm = this;
  vm.access = false;
  let setPermission = () => {
    let deferred = $q.defer();
    vm.access = true;
    $timeout(() => {
      deferred.resolve(vm.access);
    }, 10);
    return deferred.promise;
  }
  let removePermission = () => {
    let deferred = $q.defer();
    vm.access = false;
    $timeout(() => {
      deferred.resolve(vm.access);
    }, 10);
    return deferred.promise;
  }
  let checkPermission = () => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve(vm.access);
    }, 10);
    return deferred.promise;
  }

  let service = {
    setPermission: setPermission,
    checkPermission: checkPermission,
    removePermission: removePermission
  };
  return service;
}
