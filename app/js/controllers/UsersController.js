angular.module('frontApp.controllers')
	.controller('UsersController', 
	function($scope, $http){
		$scope.$on('event:google-plus-signin-success', function (event, authResult) {
	    // User successfully authorized the G+ App!
	    console.log(authResult);
	  });
	  $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
	    // User has not authorized the G+ App!
	    console.log('Not signed into Google Plus.');
	  });

	}
);