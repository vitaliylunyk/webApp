'use strict';
app.factory('itemsService', itemsService);

itemsService.$inject = ['$http', 'api', '$q'];
function itemsService ($http, api, $q) {
  let vm = this;
  let getCategories = () => {
    let deferred = $q.defer();
    $http.get(api + '/categories/')
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting categories');
    });
    return deferred.promise;
  }
  let service = {
    getCategories: getCategories
  };
  return service;
}
