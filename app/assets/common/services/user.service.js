'use strict';
app.factory('userService', userService);

userService.$inject = ['$http'];
function userService ($http) {

  let userLogin = (data) => {
      $http.post('http://192.168.2.65:3000/customer/authenticate', data)
      .then( (res) => {
        return res;
      }).catch( (e) => {
        console.log('error with login ' + e.data);
        console.log(e);
      });
  }

  let userRegister =  (data) => {
      $http.post('http://192.168.2.65:3000/customers', data)
      .then((res) => {
        return res;
      })
      .error((e) => {
        console.log('error with registration' + e.message);
      });
  }

  let service = {
    userLogin: userLogin,
    userRegister: userRegister
  };
  return service;
}
