angular.module('frontApp.controllers').controller('VideosController', 
	function($scope, $http, $location, YouTubeService){
		$scope.username = 'World';

		console.log($scope.username);

	  $scope.sayHello = function() {
	    $scope.greeting = 'Hello ' + $scope.username + '!';
	  };

	  $scope.routeAction = function(view, id) {
	  		var url = 'videos/' + view;
	  		if (angular.isDefined(id)) {
	  			url += '/' + id;
	  		} else {
	  			url = 'videos';
	  		}
	  		$location.url(url);
	  }

	  YouTubeService.getList().then(function(data) {
	  	$scope.videos = data.items;
	  	console.log(data.items);
	  })
});
