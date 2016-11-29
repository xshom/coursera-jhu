(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

LCController.$inject = ['$scope'];
function LCController($scope) {

  $scope.sItems = '';
  $scope.message = '';

  $scope.showMessage = function() {
    var items = $scope.sItems.split(',');
    var counter = 0;
    for (var i=0; i < items.length; i++) {
      if (items[i] !== "" && items[i] !== " " ) counter += 1;
    };

    if (counter = 0) {
      $scope.message = 'Please enter data first';
      

    }
    else if (counter < 4) {
      $scope.message = "Enjoy";


    }
    else if (counter > 3) {
      $scope.message = "Too much";


    }


  };
}


})();
