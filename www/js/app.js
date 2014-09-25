angular.module('demo-app', [])
// .controller('demoCtrl', function($scope, $q, utils) {
// 	//utils.loadCustomers();

// 	var myPromise = utils.loadCustomers()

// 	myPromise.then(function (response) {
// 		$scope.customerData = response.data;
// 		console.log('Customer data:', $scope.customerData);

// 		return response;
// 	})

// 	.then(function (p) {
// 		console.log('Chained.' + p);
// 	})

// 	.catch (
// 		function(e) {
// 			console.log('Error! Error! e')
// 		}
// 	)

// 	// var anotherPromise = utils.loadCustomers();
// 	// var allPromises = $q.add([myPromise, anotherPromise]);
// 	// allPromises.then( function () {
// 	// 	console.log('All done!');
// 	// })
// 	// .catch( function (e) {
// 	// 	console.log("ERROR");
// 	// })

// })

// .factory('utils', function ($http) {
// 	// return {
// 	// 	loadCustomers: function () {
// 	// 		$http.get('customers.json')

// 	// 		.then(function (response) {
// 	// 			console.log('Customer data:', response)
// 	// 		})
// 	// 		;
// 	// 	}
// 	// }

// 	return {
// 		loadCustomers: function () {
// 			return $http.get('customers.json');
// 		}
// 	}
// })


.directive('abcLogo', function () {
	return {
		restrict: 'E',
		templateUrl: 'abcLogo.html',
		transclude: true
		// probably a more organized url later
	}
})

.directive('abcPhoneNumber', function () {
	return {
		restrict: 'E',
		templateUrl: 'abcPhoneNumber.html',
		scope: {
			abcNum: '=',
			editable: '='
		}
	}
})

.controller('demoCtrl', function($scope, getJSON) {
	$scope.isEditable = false;

	var jsonPromise = getJSON.loadCustomers();

	jsonPromise.then(function (response) {
		$scope.customers = response.data;
		return response;
	})
})

.factory('getJSON', function($http) {
	return {
		loadCustomers: function () {
			return $http.get('customers.json');
		}
	}
})
;

