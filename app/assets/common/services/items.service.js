'use strict';
app.factory('itemsService', itemsService);

itemsService.$inject = ['$http', 'api', '$q'];
function itemsService ($http, api, $q) {
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

  let getItemsBySubcategory = (subcategoryId) => {
    let deferred = $q.defer();
    $http.get(api + '/products/bysubcategory/' + subcategoryId)
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting items');
    });
    return deferred.promise;
  }
  let getSellerItems = (sellerId) => {
    let deferred = $q.defer();
    $http.get(api + '/products/byseller/' + sellerId)
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting items');
    });
    return deferred.promise;
  }
  let getItem = (itemId) => {
    let deferred = $q.defer();
    $http.get(api + '/products/' + itemId)
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting item info');
    });
    return deferred.promise;
  }
  let service = {
    getCategories: getCategories,
    getItemsBySubcategory: getItemsBySubcategory,
    getSellerItems: getSellerItems,
    getItem: getItem
  };
  return service;
}
