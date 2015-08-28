var app = angular.module('spotangular', ['controllers', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainCtrl'
	})
	.when('/playlist', {
		templateUrl: 'templates/playlist.html',
		controller: 'PlaylistCtrl'
	});

	// use the HTML5 History API
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);