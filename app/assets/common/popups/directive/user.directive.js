'use strict';
app.directive('userDirective', userDirective);

function userDirective() {
  let directive = {
      restrict: 'EA',
      scope: true,
      bindToController: true,
      controller : userController,
      controllerAs: 'userVm',
      link: userLink
    };
    return directive;
}

userController.$inject = [
  '$scope',
  'userService',
  'ngDialog',
  '$route',
  'currentService',
  '$location',
  'itemsService'
];
function userController ($scope, userService, ngDialog,
   $route, currentService, $location, itemsService) {
  let vm = this;
  vm.country_selected = null;
  vm.city_selected = null;
  vm.addItem = {};
  vm.addItem.category_selected = null;
  vm.addItem.subcategory_selected = null;
  vm.showError = (errorData) => {
    ngDialog.closeAll();
    ngDialog.open({
      template: 'common/popups/view/error.html',
      className: 'ngdialog-theme-default',
      data: errorData
    });
  }
  vm.getUserData = () => {
     currentService.getData('userData')
    .then( (res) => {
      if (res) {
        vm.userData = res;
      }
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.getCountries = () => {
    userService.getCoutriesList()
      .then( (res) => {
        vm.countries = res;
      })
      .catch( (e) => {
          vm.showError(e);
      });
  }
  vm.getCategories = () => {
    itemsService.getCategories()
      .then( (res) => {
        vm.categories = res;
      })
      .catch( (e) => {
          vm.showError(e);
      });
  }
  vm.countrySelected = () => {
    userService.getCitiesList(vm.country_selected._id)
    .then( (res) => {
      vm.cities = res;
      vm.city_selected = null;
      vm.show_city = true;
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.categorySelected = () => {
    itemsService.getSubcategoriesByCategory(vm.addItem.category_selected._id)
    .then( (res) => {
      vm.subcategories = res;
      vm.subcategory_selected = null;
      vm.show_subcategory = true;
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.userLogin = () => {
    let data = {
      email: vm.login,
      password: vm.password
    };
    userService.userLogin(data)
    .then( (res) => {
        currentService.setData('userData', res.data)
        .then( (res) => {
          $route.reload();
          ngDialog.closeAll();
        })
        .catch( (e) => {
          vm.showError(e);
        });
    })
    .catch( (e) => {
      vm.showError(e);
    });
  }
  vm.userRegister = () => {
    vm.show_city = true;
    let data = {
      email: vm.email,
      password: vm.password,
      zip_code: vm.zip_code,
      city: vm.city,
      address: vm.address,
      phone_number: vm.phone_number,
      last_name: vm.last_name,
      first_name: vm.first_name,
      country: vm.country_selected._id,
      city: vm.city_selected
    };
    if (vm.date_of_birth) {
      data.date_of_birth = vm.date_of_birth
    }
    userService.userRegister(data)
      .then( (res) => {
          ngDialog.closeAll();
          ngDialog.open({
            template: 'common/popups/view/success.html',
            className: 'ngdialog-theme-default'
          });
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.deleteUser = () => {
    currentService.getData('userData')
      .then( (res)=> {
        userService.userDelete(res.token)
          .then( () => {
            currentService.removeData('userData')
              .then( () => {
                $route.reload();
                $location.path("/");
                ngDialog.closeAll();
              })
              .catch( (e) => {
                vm.showError(e);
              });
          })
          .catch( (e) => {
            vm.showError(e);
          });
      });
  }
  vm.addNewItem = () => {
    let token = vm.userData.token;
    let data = {
      name: vm.addItem.name,
      description: vm.addItem.description,
      image: vm.addItem.image,
      subcategory_id: vm.addItem.subcategory_selected._id,
      seller_id: vm.userData._id,
      count_bought: vm.addItem.count_bought,
      count_sold: vm.addItem.count_sold,
      price_bought: vm.addItem.price_bought,
      price_sold: vm.addItem.price_sold,
    };
    itemsService.addItem(token, data)
      .then( (res) => {
          ngDialog.closeAll();
          ngDialog.open({
            template: 'common/popups/view/success.html',
            className: 'ngdialog-theme-default'
          });
      })
      .catch( (e) => {
        vm.showError(e);
      });
  }
  vm.cancel = () => {
    ngDialog.closeAll();
  }
  vm.activate = () => {
    vm.getCountries();
    vm.getCategories();
    vm.getUserData();
  }
  vm.activate();
}
function userLink (scope, element, attributes, ctrl) {
  element.bind('change', (e) => {
    if (e.target.type == 'file') {
      scope.$apply( () => {
        ctrl.addItem.image = e.target.files[0];
      });
    }
  });
}
