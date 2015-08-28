var app = angular.module('controllers', []);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.songs = [];
	$scope.searchSong = function () {
		console.log('Searched for "' + $scope.song + '" song');
		// var song = $scope.song.replace(/\s+/, '');
		var apiUrl = "https://api.spotify.com/v1/search?type=track&q=" + $scope.song;
		console.log(apiUrl);
		$http.get(apiUrl)
		.then(function (response) {
			$scope.song = '';
			$scope.songs = response;
			console.log(response);
		});
	}

	// $scope.photos = [];
	// $scope.searchTag = function () {
	// 	console.log('Searched for "' + $scope.tag + '" tag');
	// 	var tag = $scope.tag.replace(/\s+/, '');
	// 	var apiUrl = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=d8d0d6b44249490bbde6eee4d1968dac&callback=JSON_CALLBACK";
	// 	$http.jsonp(apiUrl).then(function (response) {
	// 		$scope.photos = response.data.data;
	// 		$scope.tag = '';
	// 	});
	// };

	// $scope.savePhoto = function (photo) {

	// 	// localStorage
	// 	// if (!localStorage.photos) {
	// 	// 	localStorage.photos = JSON.stringify([]);
	// 	// }

	// 	// var allPhotos = JSON.parse(localStorage.photos);
	// 	// allPhotos.push(photo);

	// 	// localStorage.photos = JSON.stringify(allPhotos);

	// };
}]);

app.controller('PlaylistCtrl', ['$scope', function ($scope) {

	// $scope.favorites = JSON.parse(localStorage.photos);
}]);