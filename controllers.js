var app = angular.module('controllers', []);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.songs = [];
	$scope.searchSong = function () {
		console.log('Searched for "' + $scope.song + '" song');
		var apiUrl = "https://api.spotify.com/v1/search?type=track&q=" + $scope.song;
		$http.get(apiUrl)
		.then(function (response) {
			$scope.song = '';
			$scope.songs = response.data.tracks.items;
		});
	}

	$scope.saveSong = function (song) {
		console.log(song);
		if (!localStorage.songs) {
			localStorage.songs = JSON.stringify([]);
		}
		var allSongs = JSON.parse(localStorage.songs);
		allSongs.push(song);
		localStorage.songs = JSON.stringify(allSongs);
		alert("Added to your favorites!");
	};
}]);

app.filter('trusted', ['$sce', function ($sce) {
	return function(url) {
		return $sce.trustAsResourceUrl(url);
    };
}]);

app.controller('PlaylistCtrl', ['$scope', function ($scope) {
	$scope.favorites = JSON.parse(localStorage.songs);
}]);