'use strict';

angular.module('zyringApp').factory('CityProfile', ['$resource', function ($resource) {
	return $resource('http://spidey.zyring.com/cities/:cityId');
}]);