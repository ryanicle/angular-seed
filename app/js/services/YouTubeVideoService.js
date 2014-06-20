angular.module('frontApp')
	.factory('YouTubeService', function($http, $q) {
		return {
			getList: function() {
				return $http.get('https://www.googleapis.com/youtube/v3/search', {
		      params: {
		        key: 'AIzaSyBvABoXCuJFzMky2Bk-5ZJCRoamvkGHY-c', // jgthms
		        type: 'video',
		        maxResults: '8',
		        part: 'id,snippet',
		        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
		        q: 'myanmar'
		      }
		    }).then(function(response) {
		    	if (typeof response.data === 'object') {
              return response.data;
          } else {
              return $q.reject(response.data);
          }
		    }, function(response) {
		    	return $q.reject(response.data);
		    });
			},
			getList2: function() {
				return $http.get('https://www.googleapis.com/youtube/v3/search', {
		      params: {
		        key: 'AIzaSyBvABoXCuJFzMky2Bk-5ZJCRoamvkGHY-c', // jgthms
		        type: 'video',
		        maxResults: '8',
		        part: 'id,snippet',
		        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
		        q: 'myanmar'
		      }
		    }).then(function(response) {
		    	if (typeof response.data === 'object') {
              return response.data;
          } else {
              return $q.reject(response.data);
          }
		    }, function(response) {
		    	return $q.reject(response.data);
		    });
			}
		}
	});