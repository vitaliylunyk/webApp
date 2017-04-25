'use strict';
app.factory('accessService', accessService);

accessService.$inject = ['$cookies','$q', '$timeout'];
function accessService ($cookies, $q, $timeout) {
  let vm = this;
  let setPermission = (data) => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve($cookies.put(data, "true"));
    }, 10);
    return deferred.promise;
  }
  let removePermission = (data) => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve($cookies.remove(data));
    }, 10);
    return deferred.promise;
  }
  let checkPermission = (data) => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve($cookies.get(data));
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
