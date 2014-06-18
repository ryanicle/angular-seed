angular.module('frontApp.controllers').controller('VideosController', ['$scope', '$http', function($scope, $http){
	$scope.username = 'World';

	console.log($scope.username);

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };

}]);
