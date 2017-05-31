'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './../views/home.html'
  }).state('mens', {
    url: '/mens',
    templateUrl: './../views/mens.html',
    controller: 'mensCtrl'
  }).state('womens', {
    url: '/womens',
    templateUrl: './../views/womens.html',
    controller: 'womensCtrl'
  }).state('kids', {
    url: '/kids',
    templateUrl: './../views/kids.html',
    controller: 'kidsCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: './../views/login.html',
    controller: 'loginCtrl'
  }).state('account', {
    url: '/account', /*/:user_id*/
    templateUrl: './../views/account.html',
    controller: 'accountCtrl'
  }).state('register', {
    url: '/register',
    templateUrl: './../views/register.html',
    controller: 'registerCtrl'
  }).state('singleProduct', {
    url: '/single/product/:id/:mwk', /* /:product_id */
    templateUrl: './../views/singleProduct.html',
    controller: 'singleProductCtrl'
  }).state('cart', {
    url: '/cart',
    templateUrl: './../views/cart.html',
    controller: 'cartCtrl'
  }).state('orders', {
    url: '/orders', /* /:user_id */
    templateUrl: './../views/orders.html',
    controller: 'ordersCtrl'
  }).state('checkout', {
    url: '/checkout',
    templateUrl: './../views/checkout.html',
    controller: 'checkoutCtrl'
  }).state('billing', {
    url: '/billing',
    templateUrl: './../views/billing.html',
    controller: 'billingCtrl'
  }).state("inventory", {
    url: "/inventory",
    templateUrl: "./../views/inventory.html",
    controller: "inventoryCtrl"
  });
});
'use strict';

angular.module('app').controller('billingCtrl', function ($scope, mainSrvc) {

  $scope.checked = true;

  $scope.uspsGround = {
    "name": "USPS Shipping",
    "price": 0.00
  };

  $scope.upsGround = {
    "name": "UPS Ground",
    "price": 7.00
  };

  $scope.upsSecondDay = {
    "name": "UPS Second Day",
    "price": 12.00
  };

  $scope.upsNextDay = {
    "name": "UPS Next Day Delivery",
    "price": 18.00
  };
});
'use strict';

angular.module('app').controller('cartCtrl', function ($scope, mainSrvc) {

  $scope.test = 'cart working';
  $scope.test2 = mainSrvc.test;

  // $scope.getCart = (user) => {
  //   $scope.subtotal = 0;
  //   storeSrvc.getCart(user).then((response) => {
  //     $scope.userCart = response.map(v => {
  //       v.total = v.quantity * v.product_price
  //       $scope.subtotal += v.total
  //       return v
  //     })
  //   });
  // };
  //
  // $scope.deleteItemInCart = (product, item) => {
  //   storeSrvc(product, item).then((response) => {
  //     $scope.response = response;
  //     /*????????????????????*/
  //   });
  // };
  //
  // $scope.createItem = (quantity, purchase, user_id = $scope.userId) => {
  //   storeSrvc.createItem(quantity, purchase, user_id).then(function(response) {
  //     $scope.getCartTotal($scope.userId);
  //   });
  // };
  //
  // $scope.getCartTotal = (user_id = $scope.userId) => {
  //   $scope.cartTotal = 0;
  //   storeSrvc.getCart(user_id).then((response) => {
  //     $scope.cartTotal = response.reduce((acc, value) => {
  //       return value.quantity + acc;
  //     }, 0)
  //   })
  // }
  // $scope.getCartTotal();
});
'use strict';

angular.module('app').controller('checkoutCtrl', function ($scope, mainSrvc) {

  $scope.test = 'checkout working';
  $scope.test2 = mainSrvc.test;

  $scope.uspsGround = {
    "name": "USPS Shipping",
    "price": 0.00
  };

  $scope.upsGround = {
    "name": "UPS Ground",
    "price": 7.00
  };

  $scope.upsSecondDay = {
    "name": "UPS Second Day",
    "price": 12.00
  };

  $scope.upsNextDay = {
    "name": "UPS Next Day Delivery",
    "price": 18.00
  };

  $scope.submitOrder = function () {
    /*talk to Todd about this*/
  };

  $scope.deleteCart = function () {
    storeSrvc.deleteCart().then(function (response) {
      /*may get rid of this alert function*/
      swal({
        title: "Sweet!",
        text: "Thank you for your purchase!",
        imageUrl: "./sweetalert-master/example/images/thumbs-up.jpg",
        timer: 1000,
        showConfirmButton: false
      });
    });
  };
});
"use strict";
'use strict';

angular.module('app').directive('footerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: '../views/directives/footerDirective.html'

  };
});
'use strict';

angular.module('app').directive('headerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: '../views/directives/headerDirective.html'

  };
});
'use strict';

angular.module('app').directive('helpDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/directives/helpDirective.html'
  };
});
'use strict';

angular.module('app').controller('inventoryCtrl', function ($scope, mainSrvc, $stateParams) {

  $scope.getProducts = function () {
    mainSrvc.getProducts("Womens").then(function (response) {
      $scope.product = response;
    });
  };
  $scope.getProducts();
});
'use strict';

angular.module('app').controller('kidsCtrl', function ($scope, mainSrvc) {

  $scope.test = 'kids working';

  $scope.getProducts = function () {
    console.log('get products from ctrl');
    mainSrvc.getProducts('Kids', 'Boys').then(function (response) {
      $scope.products = response;
    });
    mainSrvc.getProducts('Kids', 'Girls').then(function (response) {
      $scope.product = response;
    });
    mainSrvc.getProducts('Kids', 'Baby').then(function (response) {
      $scope.prod = response;
    });
  };
  $scope.getProducts();
});
'use strict';

angular.module('app').controller('loginCtrl', function ($scope, mainSrvc) {

  $scope.test = 'login working';
  $scope.test2 = mainSrvc.test;

  $scope.isShown = true;
  $scope.isShown2 = true;
});
'use strict';

angular.module('app').service('mainSrvc', function ($http) {

  this.test = 'service working';

  // PRODUCTS //////////////////////////////////////////
  this.getProducts = function (mwk, category) {
    return $http({
      method: 'GET',
      url: '/api/products/' + mwk + '/' + category
    }).then(function (response) {
      return response.data;
    });
  };

  this.getSingleProduct = function (param) {
    return $http({
      method: 'GET',
      url: '/api/product/' + param + '/'
    }).then(function (response) {
      return response.data;
    });
  };

  // USERS //////////////////////////////////////////
  this.register = function (user) {
    return $http({
      method: 'POST',
      url: '/api/register',
      data: { user: user }
    }).then(function (response) {
      return response;
    });
  };

  this.login = function (email, password) {
    return $http({
      method: 'POST',
      url: '/login',
      data: {
        email: email,
        password: password
      }
    }).then(function (response) {
      return response.data;
    } /*index number from table*/);
  };

  // CART //////////////////////////////////////////
  this.getCart = function (user) {
    return $http({
      method: 'POST',
      url: '/cart',
      data: { user: user }
    }).then(function (response) {
      return response.data;
    });
  };

  this.deleteCart = function () {
    return $http({
      method: 'DELETE',
      url: '/cart/clear'
    }).then(function (response) {
      return response.data;
    });
  };

  this.deleteItemInCart = function (product, user) {
    return $http({
      method: 'DELETE',
      url: '/cart/clear/' + product + '/' + user
    }).then(function (response) {
      return response;
    });
  };

  this.createCart = function (quantity, purchase, user_id) {
    return $http({
      method: 'POST',
      url: '/create/cart',
      data: {
        quantity: quantity,
        purchase: purchase,
        user_id: user_id
      }
    }).then(function (response) {
      return response;
    });
  };

  // EMAIL LIST //////////////////////////////////////////
  this.addEmail = function (email) {
    return $http({
      method: 'POST',
      url: '/email',
      data: { email: email }
    }).then(function (response) {
      return response;
    });
  }; /*FOR THE FOOTER*/

  // ORDERS //////////////////////////////////////////
  this.getOrders = function (user_id) {
    return $http({
      method: 'GET',
      url: '/orders/' + user_id
    }).then(function (response) {
      return response.data;
    });
  };

  this.submitOrder = function (order) {
    return $http({
      method: 'POST',
      url: '/orders/submit',
      data: { order: order }
    }).then(function (response) {
      return response.data;
    });
  };
  //need to talk to Todd about this
});
'use strict';

angular.module('app').controller('mensCtrl', function ($scope, mainSrvc) {

  $scope.getProducts = function () {
    mainSrvc.getProducts('Mens', 'New Arrivals').then(function (response) {
      $scope.products = response;
    });
    mainSrvc.getProducts('Mens', 'Super Invisible').then(function (response) {
      $scope.prod = response;
    });
  };
  $scope.getProducts();
});
'use strict';

angular.module('app').controller('ordersCtrl', function ($scope, mainSrvc) {

  $scope.test = 'orders working';
  $scope.test2 = mainSrvc.test;

  $scope.getOrders = function (user_id) {
    mainSrvc.getOrders(user_id).then(function (response) {
      $scope.order = response;
    });
  };
});
'use strict';

angular.module('app').directive('randomDirective', function (mainSrvc) {

  return {
    restrict: 'E',
    templateUrl: './views/directives/randomDirective.html',
    // scope: {
    //
    // }
    controller: function controller($scope, $stateParams) {
      $scope.getProducts = function () {
        console.log('stateParams', $stateParams.mwk);
        mainSrvc.getProducts($stateParams.mkw).then(function (response) {
          var arr = [];
          var rand = [];
          for (var i = 0; i < response.length; i++) {
            if (response[i]['mwk'] === 'Mens') {
              arr.push(response[i]);
            }
          }
          for (var j = 0; j < 4; j++) {
            rand.push(arr[Math.floor(arr.length * Math.random())]);
          }
          $scope.random = rand;
        });
      };
      $scope.getProducts();
    }
  };
});
'use strict';

angular.module('app').controller('registerCtrl', function ($scope, mainSrvc) {

  $scope.test = 'register working';
  $scope.test2 = mainSrvc.test;

  $scope.isShown = true;
  $scope.isShown2 = true;

  $scope.register = function () {
    console.log('button working!');
    mainSrvc.register($scope.user).then(function (response) {
      /*may need to set default for newsletter*/
    });
  };
});
'use strict';

angular.module('app').controller('singleProductCtrl', function ($scope, mainSrvc, $stateParams) {

  $scope.pic1 = true;

  $scope.getSingleProduct = function () {
    mainSrvc.getSingleProduct($stateParams.id).then(function (response) {
      $scope.singleProduct = response;
    });
  };
  $scope.getSingleProduct();

  // $scope.getProducts = () => {
  //   mainSrvc.getProducts($stateParams.mwk).then(function(response) {
  //     console.log(response);
  //     $scope.random = response;
  //   });
  // }
  // $scope.getProducts();

  $scope.showHide = function (pic) {
    $scope.pic1 = false;
    $scope.pic2 = false;
    $scope.pic3 = false;
    $scope[pic] = true;
  };
});
'use strict';

angular.module('app').controller('accountCtrl', function ($scope, mainSrvc) {

  $scope.test = 'account working';
  $scope.test2 = mainSrvc.test;

  $scope.isShown = true;
  $scope.isShown2 = true;
  $scope.isShown3 = true;
  $scope.isShown4 = true;
});
'use strict';

angular.module('app').directive('userDataDirective', function () {

  return {
    method: 'E',
    templateUrl: './views/directives/userDataDirective.html'
  };
});
'use strict';

angular.module('app').controller('womensCtrl', function ($scope, mainSrvc) {

  $scope.test = 'womens working';
  $scope.test2 = mainSrvc.test;

  $scope.getProducts = function () {
    console.log('get products from ctrl');
    mainSrvc.getProducts('Womens', 'New Arrivals').then(function (response) {
      $scope.products = response;
    });
    mainSrvc.getProducts('Womens', 'Training').then(function (response) {
      $scope.product = response;
    });
    mainSrvc.getProducts('Womens', 'Uncommon Solids').then(function (response) {
      $scope.prod = response;
    });
  };
  $scope.getProducts();
});
"use strict";

angular.module('app').directive("kidsCarousel", function () {
  return {
    restrict: "E",
    templateUrl: "./views/kidsCarousel.html",
    link: function link(scope, element, attributes) {}
  };
});
"use strict";

angular.module('app').directive("orderSummary", function () {
  return {
    restrict: "E",
    templateUrl: "./views/orderSummary.html"
  };
});
"use strict";

angular.module('app').directive("featured", function () {
  return {
    restrict: "E",
    templateUrl: "./views/featured.html"
  };
});
"use strict";

angular.module('app').directive("punksAndPoets", function () {
  return {
    restrict: "E",
    templateUrl: "./views/punksAndPoets.html"
  };
});
//# sourceMappingURL=bundle.js.map
