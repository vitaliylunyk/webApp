'use strict';
app.factory('itemsService', itemsService);

itemsService.$inject = ['$http', 'api', '$q'];
function itemsService ($http, api, $q) {
  let addItem =  (token, data) => {
    let header = {
      headers: {
      authorization: token,
      'Content-Type': undefined
      }
    },
    formData = new FormData();
    formData.append('image', data.image),
    formData.append('name', data.name),
    formData.append('seller_id', data.seller_id),
    formData.append('description', data.description),
    formData.append('subcategory_id', data.subcategory_id),
    formData.append('count_bought', data.count_bought),
    formData.append('count_sold', data.count_sold),
    formData.append('price_bought', data.price_bought),
    formData.append('price_sold', data.price_sold);

    let deferred = $q.defer();
    $http.post(api + '/product', formData, header)
      .then((res) => {
        deferred.resolve(res.data);
      })
      .catch( (e) => {
        deferred.reject(e);
        console.log('error with adding new item');
      });
    return deferred.promise;
  }
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
  let getSubcategoriesByCategory = (categoryId) => {
    let deferred = $q.defer();
    $http.get(api + '/subcategories/' + categoryId)
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting subcategories');
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
  let removeItem = (token, itemId) => {
    let deferred = $q.defer();
    let header = {
      headers: {
      authorization: token
      }
    }
    $http.delete(api + '/product/' + itemId, header)
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with delete item');
    });
    return deferred.promise;
  }
  let service = {
    addItem: addItem,
    getCategories: getCategories,
    getSubcategoriesByCategory: getSubcategoriesByCategory,
    getItemsBySubcategory: getItemsBySubcategory,
    getSellerItems: getSellerItems,
    getItem: getItem,
    removeItem: removeItem
  };
  return service;
}
