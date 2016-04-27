(function() {

	angular
		.module('app.maps.ctrl', [])
		.controller('MapsCtrl', MapsCtrl)

	MapsCtrl.$inject = ['$scope', '$stateParams']
	function MapsCtrl($scope, $stateParams) {
		var vm = this;

		$scope.map = { center: { latitude: $stateParams.lat, longitude: $stateParams.lng }, zoom: 8 };
		$scope.marker = {
			id: 0,
			coords: {
				latitude: $stateParams.lat,
				longitude: $stateParams.lng
			},
			options: { draggable: true },
			events: {
				dragend: function (marker, eventName, args) {
					$log.log('marker dragend');
					var lat = marker.getPosition().lat();
					var lon = marker.getPosition().lng();
					$log.log(lat);
					$log.log(lon);

					$scope.marker.options = {
						draggable: true,
						labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
						labelAnchor: "100 0",
						labelClass: "marker-labels"
					};
				}
			}
		};
	}

})();