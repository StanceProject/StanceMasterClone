angular.module('app')
.controller('billingCtrl', function($rootScope, $scope, mainSrvc, $location, $anchorScroll, $state, stripe) {

  $scope.total = $rootScope.total;

  $scope.shipping = $rootScope.loggedUser.shipping;

  $scope.showShipping = true;
  $scope.showBilling = false;

  $scope.checked = true;

  $location.hash('top');
  $anchorScroll();


  $scope.uspsGround = {
    "name": "USPS Shipping",
    "price": 0.00
  }

  $scope.upsGround = {
    "name": "UPS Ground",
    "price": 7.00
  }

  $scope.upsSecondDay = {
    "name": "UPS Second Day",
    "price": 12.00
  }

  $scope.upsNextDay = {
    "name": "UPS Next Day Delivery",
    "price": 18.00
  }


  ///////////////STRIPE///////////////

  $scope.zeroOut = function() {
    $scope.cart = [];
    $scope.subTotal = 0;
    $scope.items = 0;
    $scope.total = 0;
  }

  $scope.payment = {};

  $scope.charge = function () {
   return stripe.card.createToken($scope.payment.card)
   .then(function (response) {
     console.log('in charge function', response);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;
      console.log($scope.total);
      mainSrvc.processPayment($scope.total * 100, payment);
   })
   .then(function(payment) {
      // swal({
      //  title: "Thank You!",
      //  text: "Your order will be shipped within 3,000,000 business days.",
      //  imageUrl: "http://www.sv411.com/wp-content/uploads/GoPro-Logo.jpg",
      //  confirmButtonText: "Continue exporing Stripe"
      // })
      // $scope.zeroOut();
      $scope.deleteCart();
      $state.go('orders');
   })
   .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
        console.log('Stripe error: ', err.message);
       }
       else {
        console.log('Other error occurred, possibly with your API', err.message);
       }
     });
  };

  // $scope.submitOrder = () => {
  //   let order = [];
  //   order.push({user_id: $rootScope.loggedUser.id});
  //
  //
  //   mainSrvc.submitOrder(order).then((response) => {
  //
  //   })
  // }

  $scope.deleteCart = () => {
    mainSrvc.deleteCart($rootScope.loggedUser.id).then((response) => {
    /*may get rid of this alert function*/
    $rootScope.refreshHeader();
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
