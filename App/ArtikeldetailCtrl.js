(function () {

	'use strict'

	var artikelverwaltung = angular.module('Artikelverwaltung')

	artikelverwaltung.controller('ArtikeldetailCtrl', initController)
	initController.$inject = ['artikelliste', '$routeParams']
	function initController(beispiele, $routeParams) {
		var vm = this
		vm.artikelnummer = $routeParams.id

		vm.bezeichnung = null
		vm.preis = null
		vm.bestand = null

		activate(vm.artikelnummer)
		return

		function activate(artnr) {
			var artikel = beispiele.filter(function (a) {return a.artikelnummer == artnr})
			if(artikel) {
				vm.bezeichnung = artikel[0].bezeichnung
				vm.preis = artikel[0].preis
				vm.bestand = artikel[0].bestand
			}
		}
	}
})()
