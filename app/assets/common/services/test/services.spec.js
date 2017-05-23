describe('test services', function() {
  var userService,
  accessService,
  currentService,
  itemsService,
  $httpBackend,
  api;
  beforeEach(function () {
    module('app');
    inject(function($injector) {
      userService = $injector.get('userService');
      accessService = $injector.get('accessService');
      currentService = $injector.get('currentService');
      itemsService = $injector.get('itemsService');
      $httpBackend = $injector.get('$httpBackend');
      api = $injector.get('api');
    });
  });

  describe('test services defined', function() {
    it('should be defined', function () {
          expect(userService).toBeDefined();
    });
    it('should be defined', function () {
          expect(itemsService).toBeDefined();
    });
    it('should be defined', function () {
          expect(currentService).toBeDefined();
    });
    it('should be defined', function () {
          expect(accessService).toBeDefined();
    });
  });

  describe('test userService requests', function() {
    afterEach(function () {
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it('should get login success',  function() {
      var mockData = {login: 'test@test.com', password: 'password'};
      $httpBackend
        .when('POST', api + '/authenticate')
        .respond(200, {success: true});
      userService.userLogin(mockData)
        .then(function(data) {
          expect(data.data.success).toBeTruthy();
      });
    });
    it('should get register success',  function() {
      var mockData = {email: 'test@test.com', password: 'password'}
      $httpBackend
        .when('POST', api + '/customers')
        .respond(200, {success: true});
      userService.userRegister(mockData)
        .then(function(data) {
          expect(data.success).toBeTruthy();
      });
    });
    it('should get countries list',  function() {
      var mockData = [{name:'china', id: '1'}, {name:'japan', id: '2'}, {name:'the USA', id: '3'}];
      $httpBackend
        .when('GET', api + '/countries')
        .respond(200, mockData);
      userService.getCoutriesList(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should get cities list',  function() {
      var mockData = {cities: ['New York', 'Chicago', 'Los Angeles']},
      countryId = '3';
      $httpBackend
        .when('GET', api + '/cities/' + countryId)
        .respond(200, mockData);
      userService.getCitiesList(countryId)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should get user info',  function() {
      var mockData = {name:'John', lastName: 'Snow'},
      token = '123A';
      $httpBackend
        .when('GET', api + '/customer/')
        .respond(200, mockData);
      userService.getUserInfo(token)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should delete user',  function() {
      var token = '123A';
      $httpBackend
        .when('DELETE', api + '/customer')
        .respond(200, {success: true});
      userService.userDelete(token)
        .then(function(data) {
          expect(data.success).toBeTruthy();
      });
    });
    it('should edit user info',  function() {
      var token = '123A',
      mockData = {lastName: 'Smith'};
      $httpBackend
        .when('PUT', api + '/customer')
        .respond(200, {success: true});
      userService.userEdit(mockData, token)
        .then(function(data) {
          expect(data.success).toBeTruthy();
      });
    });
  });

  describe('test accessService requests', function() {
    it('should set access permission',  function() {
      var mockData = 'test';
      accessService.setPermission(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should check access permission',  function() {
      var mockData = 'test';
      accessService.checkPermission(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should set access permission',  function() {
      var mockData = 'test';
      accessService.removePermission(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
  });

  describe('test currentService requests', function() {
    it('should set access permission',  function() {
      var mockData = 'test';
      currentService.setData(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should check access permission',  function() {
      var mockData = 'test';
      currentService.getData(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should set access permission',  function() {
      var mockData = 'test';
      currentService.removeData(mockData)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
  });
  describe('test itemsService requests', function() {
    afterEach(function () {
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it('should get list of categories',  function() {
      var mockData = [{name: 'Phones', id: '1'}, {name: 'Computers', id: '2'}];
      $httpBackend
        .when('GET', api + '/categories/')
        .respond(200, mockData);
      itemsService.getCategories()
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should get subcategories list',  function() {
      var mockData = [
        {name: 'Apple', id: '1'},
        {name: 'Samsung', id: '2'},
        {name: 'LG', id: '3'}
      ],
      categoryId = '1';
      $httpBackend
        .when('GET', api + '/subcategories/' + categoryId)
        .respond(200, mockData);
      itemsService.getSubcategoriesByCategory(categoryId)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should get items by subcategory list',  function() {
      var mockData = [
        {name: 'Iphone5s', id: '1'},
        {name: 'Iphone6s', id: '2'},
        {name: 'Iphone7', id: '3'}
      ],
      subcategoryId = '1';
      $httpBackend
        .when('GET', api + '/products/?subcategory=1')
        .respond(200, mockData);
      itemsService.getItemsBySubcategory(subcategoryId)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should get items by seller list',  function() {
      var mockData = [
        {name: 'Iphone5s', id: '1'},
        {name: 'Iphone6s', id: '2'},
        {name: 'Iphone7', id: '3'}
      ],
      sellerId = '1';
      $httpBackend
        .when('GET', api + '/products/?seller=1')
        .respond(200, mockData);
      itemsService.getSellerItems(sellerId)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should get item info',  function() {
      var mockData = {
        name: 'Iphone5s',
        id: '1',
        description: 'old phone'
      },
      itemId = '1';
      $httpBackend
        .when('GET', api + '/products/' + itemId)
        .respond(200, mockData);
      itemsService.getItem(itemId)
        .then(function(data) {
          expect(data).toBeTruthy();
      });
    });
    it('should remove item',  function() {
      var itemId = '1',
      token = '123A';
      $httpBackend
        .when('DELETE', api + '/product/' + itemId)
        .respond(200, {success: true});
      itemsService.removeItem(token, itemId)
        .then(function(data) {
          expect(data.success).toBeTruthy();
      });
    });
  });
});
