'use strict';
app.factory('itemsService', itemsService);

itemsService.$inject = ['$http'];
function itemsService ($http) {
  let vm = this;
  let getCategories = () => {
    return $http.get('http://192.168.2.65:3000/categories/')
    .then( (res) => {
      return res.data;
    }).catch( (e) => {
      console.log('error with getting categories');
    });
  }
  let service = {
    getCategories: getCategories
  };
  return service;
}
