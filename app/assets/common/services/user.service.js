'use strict';
app.factory('userService', userService);

userService.$inject = ['$http', 'api', '$q'];
function userService ($http, api, $q) {
  let vm = this;
  let getCoutriesList = () => {
    let deferred = $q.defer();
    $http.get(api + '/countries')
    .then( (res) => {
      deferred.resolve(res.data);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting countries');
    });
    return deferred.promise;
  }

  let getCitiesList = (countryId) => {
    let deferred = $q.defer();
    $http.get(api + '/cities/' + countryId)
    .then( (res) => {
      deferred.resolve(res.data.cities);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting cities');
    });
    return deferred.promise;
  }

  let getUserInfo = (token) => {
    let deferred = $q.defer();
    let header = {
      headers: {
      authorization: token
      }
    }
    $http.get(api + '/customer/', header)
    .then( (res) => {
      deferred.resolve(res);
    })
    .catch( (e) => {
      deferred.reject(e);
      console.log('error with getting user');
    });
    return deferred.promise;
  }

  let userLogin = (data) => {
    let deferred = $q.defer();
    $http.post(api + '/authenticate', data)
      .then( (res) => {
        deferred.resolve(res);
      })
      .catch( (e) => {
        deferred.reject(e);
        console.log('error with login');
      });
    return deferred.promise;
  }

  let userRegister =  (data) => {
    let deferred = $q.defer();
    $http.post(api + '/customers', data)
      .then((res) => {
        deferred.resolve(res.data);
      })
      .catch( (e) => {
        deferred.reject(e);
        console.log('error with registration');
      });
    return deferred.promise;
  }

  let userDelete = (token) => {
    let deferred = $q.defer();
    let header = {
      headers: {
      authorization: token
      }
    }
    $http.delete(api + '/customer', header)
      .then( (res) => {
        deferred.resolve(res.data);
      })
      .catch( (e) => {
        deferred.reject(e);
        console.log('error with deleting user');
      });
    return deferred.promise;
  }

  let userEdit = (userData, token) => {
    let deferred = $q.defer();
    let header = {
      headers: {
        authorization: token
      }
    }
    $http.put(api + '/customer', userData, header)
      .then( (res) => {
        deferred.resolve(res.data);
      })
      .catch( (e) => {
        deferred.reject(e);
        console.log('error with editing user info');
      });
    return deferred.promise;
  }

  let service = {
    getCoutriesList: getCoutriesList,
    getCitiesList: getCitiesList,
    userLogin: userLogin,
    userRegister: userRegister,
    getUserInfo: getUserInfo,
    userDelete: userDelete,
    userEdit: userEdit
  };
  return service;
}
