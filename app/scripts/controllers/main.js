'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cities = [
		{
			city : "Seattle",
			image : "http://goo.gl/mIffQj"
		},
		{
			city : "Tacoma",
			image : "http://goo.gl/YLtGMD"
		},
		{
			city : "Redmond",
			image : "http://goo.gl/wY72hU"
		},
		{
			city : "Bellvue",
			image : "http://goo.gl/ydvsWh"
		},
		{
			city : "Kirkland",
			image : "http://goo.gl/UrHgbk"
		},
		{
			city : "Olympia",
			image : "http://goo.gl/ngqBfj"
		}
	];
	
});

