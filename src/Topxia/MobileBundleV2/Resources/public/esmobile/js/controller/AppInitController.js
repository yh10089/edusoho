app.controller('AppInitController', ['$scope', '$ionicHistory', '$state', 'sideDelegate', AppInitController]);

function baseController($scope)
{
	this.getService = function(name) {
		return angular.injector(["AppService", "ng"]).get(name);
	}
}

function AppInitController($scope, $ionicHistory, $state, sideDelegate)
{	
	$scope.toggle = function() {
	    sideDelegate.toggleMenu();
	};

	$scope.showMyView = function(state) {
		if ($scope.user) {
			$state.go(state);
		} else {
			$state.go("login");
		}
	}
}