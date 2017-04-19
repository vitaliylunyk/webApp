'use strict';
app.factory('userService', userService);

userService.$inject = ['$http'];
function userService ($http) {

  let getCoutriesList = () => {
    return $http.get('http://192.168.2.65:3000/countries')
    .then( (res) => {
      return res.data;
    }).catch( (e) => {
      console.log('error with getting countries ');
    });
  }

  let getCitiesList = (countryId) => {
    return $http.get('http://192.168.2.65:3000/cities/' + countryId)
    .then( (res) => {
      return res.data.cities;
    }).catch( (e) => {
      console.log('error with getting cities ');
    });
  }

  let userLogin = (data) => {
      return $http.post('http://192.168.2.65:3000/authenticate', data)
      .then( (res) => {
        return res.data;
      }).catch( (e) => {
        console.log('error with login ');
      });
  }

  let userRegister =  (data) => {
      return $http.post('http://192.168.2.65:3000/customers', data)
      .then((res) => {
        return res.data;
      })
      .catch( (e) => {
        console.log('error with registration');
      });
  }

  let service = {
    getCoutriesList: getCoutriesList,
    getCitiesList: getCitiesList,
    userLogin: userLogin,
    userRegister: userRegister
  };
  return service;
}
