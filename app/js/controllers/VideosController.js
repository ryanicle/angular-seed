angular.module('frontApp.controllers').controller('VideosController', 
	function($scope, $http, $location){
		$scope.username = 'World';

		console.log($scope.username);

	  $scope.sayHello = function() {
	    $scope.greeting = 'Hello ' + $scope.username + '!';
	  };

	  $scope.changeAction = function(view, id) {
	  		var url = 'videos/' + view;
	  		if (id != '') {
	  			url += '/' + id;
	  		}
	  		$location.url(url);
	  }
});
