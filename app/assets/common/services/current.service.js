'use strict';
app.factory('currentService', currentService);

currentService.$inject = ['$cookies', '$q', '$timeout'];
function currentService ($cookies, $q, $timeout) {
  let setData = (dataName, userData) => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve($cookies.putObject(dataName, userData));
    }, 10);
    return deferred.promise;
  }
  let getData = (dataName) => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve($cookies.getObject(dataName));
    }, 10);
    return deferred.promise;
  }
  let removeData = (dataName) => {
    let deferred = $q.defer();
    $timeout(() => {
      deferred.resolve($cookies.remove(dataName));
    }, 10);
    return deferred.promise;
  }

  let service = {
    setData: setData,
    getData: getData,
    removeData: removeData
  };
  return service;
}
