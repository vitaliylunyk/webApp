'use strict';
app.factory('accessService', accessService);

accessService.$inject = ['$cookies','$q'];
function accessService ($cookies, $q) {
  let setPermission = (data) => {
    let deferred = $q.defer();
    try {
      deferred.resolve($cookies.put(data, "true"));
    } catch (e) {
      deferred.reject(e);
      console.log('error with setting access');
    }
    return deferred.promise;
  }
  let removePermission = (data) => {
    let deferred = $q.defer();
    try {
      deferred.resolve($cookies.remove(data));
    } catch (e) {
      deferred.reject(e);
      console.log('error with removing access');
    }
    return deferred.promise;
  }
  let checkPermission = (data) => {
    let deferred = $q.defer();
    try {
      deferred.resolve($cookies.get(data));
    } catch (e) {
      deferred.reject(e);
      console.log('error with checking access');
    }
    return deferred.promise;
  }

  let service = {
    setPermission: setPermission,
    checkPermission: checkPermission,
    removePermission: removePermission
  };
  return service;
}
