(function() {

	'use strict'

	var artikelverwaltung = angular.module('Artikelverwaltung', ['ngRoute'])

	artikelverwaltung.config(['$routeProvider', initModul])
	function initModul($routeProvider) {
		$routeProvider.when('/artikel/:id', {templateUrl: 'Artikeldetails.html'})
		$routeProvider.when('/', {templateUrl: 'Artikelliste.html'})
		$routeProvider.otherwise('/')
	}


	artikelverwaltung.constant('artikelliste', beispielartikel())
	function beispielartikel() {
		return [
			{artikelnummer: 1001, bezeichnung: 'Sessel', preis: 100.0, bestand: 15},
			{artikelnummer: 1002, bezeichnung: 'Rollliege', preis: 150.0, bestand: 20},
			{artikelnummer: 1003, bezeichnung: 'Tisch', preis: 200.0, bestand: 25}
		]
	}

})()
