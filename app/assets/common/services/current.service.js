'use strict';
app.factory('currentService', currentService);

currentService.$inject = ['$cookies', '$q'];
function currentService ($cookies, $q) {
  let setData = (dataName, userData) => {
    let deferred = $q.defer();
    try {
      deferred.resolve($cookies.putObject(dataName, userData));
    } catch (e) {
      deferred.reject(e);
      console.log('error with setting data');
    }
    return deferred.promise;
  }
  let getData = (dataName) => {
    let deferred = $q.defer();
    try {
        deferred.resolve($cookies.getObject(dataName));
    } catch (e) {
        deferred.reject(e);
        console.log('error with getting data');
    }
    return deferred.promise;
  }
  let removeData = (dataName) => {
    let deferred = $q.defer();
    try {
      deferred.resolve($cookies.remove(dataName));
    } catch (e) {
      deferred.reject(e);
      console.log('error with removing data');
    }
    return deferred.promise;
  }

  let service = {
    setData: setData,
    getData: getData,
    removeData: removeData
  };
  return service;
}
