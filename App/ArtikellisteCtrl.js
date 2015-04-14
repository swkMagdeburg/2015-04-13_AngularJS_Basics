(function () {

	'use strict'

	var artikelverwaltung = angular.module('Artikelverwaltung')

	artikelverwaltung.controller('ArtikellisteCtrl', initController)
	initController.$inject = ['artikelliste']
	function initController(artikelliste) {
		var vm = this
		vm.artikel = artikelliste

		return
	}

})()
