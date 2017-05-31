'use strict';
app.factory('ordersService', ordersService);

ordersService.$inject = ['$http', 'api', '$q'];
function ordersService ($http, api, $q) {
  let makeOrder = (data, token) => {
    let deferred = $q.defer();
    let header = {
      headers: {
        authorization: token
      }
    }
    $http.post(api + '/orders', data, header)
      .then( (res) => {
        deferred.resolve(res);
      })
      .catch( (e) => {
        deferred.reject(e);
        console.log('error with making order');
      });
    return deferred.promise;
  }
  let service = {
    makeOrder: makeOrder
  };
  return service;
}
