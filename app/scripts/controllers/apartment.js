'use strict';


angular.module('zyringApp').controller('ApartmentCtrl', ['$scope', '$routeParams', 'CityProfile', function ($scope, $routeParams, CityProfile) {
	var cityName = $routeParams.cityName;
	$scope.cityInfo = CityProfile.query({cityId : cityName});
	$scope.cityInfo.save;
	$('#dynamicCity').text(cityName);
}]);



