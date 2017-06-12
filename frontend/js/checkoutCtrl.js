       angular.module('app')
.controller('checkoutCtrl', function($rootScope, $scope, mainSrvc) {

  $scope.test = 'checkout working';
  $scope.test2 = mainSrvc.test;

$scope.showShipping = false;
$scope.showBilling = false;

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


  $scope.submitOrder = () => {
    /*talk to Todd about this*/
  };


$scope.addShipping = () => {
  if($scope.shipping.keep){
  $rootScope.loggedUser.shipping = $scope.shipping;
  $rootScope.loggedUser.shipping.method = $scope.shippingMethod;
  }
}

});
