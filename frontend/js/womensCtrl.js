angular.module('app')
.controller('womensCtrl', function($rootScope, $scope, mainSrvc, $location, $anchorScroll) {

  $scope.test = 'womens working';
  $scope.test2 = mainSrvc.test;


  $scope.getProducts = () => {
    console.log('get products from ctrl');
     mainSrvc.getProducts('Womens', 'New Arrivals').then(function(response) {
       $scope.products = response;
     });
     mainSrvc.getProducts('Womens', 'Training').then(function(response) {
       $scope.product = response;
     });
     mainSrvc.getProducts('Womens', 'Uncommon Solids').then(function(response) {
       $scope.prod = response;
       $location.hash('top');
       $anchorScroll();
     });
   };
   $scope.getProducts();


});
