var shapeMatchUpApp = angular.module('shapeMatchUpApp', [
     'ngRoute',
     'shapeMatchUpControllers'
]);

shapeMatchUpApp.config(['$routeProvider',
    function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'views/home/home.html'
			})
			.when('/newgame', {
				templateUrl: 'views/newgame/newgame.html',
				controller: 'NewGameController'
			})
			.when('/instructions', {
				templateUrl: 'views/instructions/instructions.html'
			})
			.when('/aboutautism', {
				templateUrl: 'views/aboutautism/aboutautism.html'
			})
			.when('/aboutgame', {
				templateUrl: 'views/aboutgame/aboutgame.html'
			})
			.when('/startgame', {
				templateUrl: 'views/startgame/startgame.html',
				controller: 'StartGameController'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}
]);