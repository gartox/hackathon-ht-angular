angular.module('frutosApp') 
	.service('frutosService',function(){
		this.obtieneFrutos = function(){
			return [
				{fruto: 'manzana', vendedor:'Jose Zuñiga'}, 
				{fruto: 'Manzana verde', vendedor: 'Carlos  Hidalgo'},
				{fruto:'Papaya maradol', vendedor:'Carlos Cuauhtemoc Sánchez'},
				{fruto:'Chile Habanero', vendedor:'Jonathan Swift'},
				{fruto:'Naranga cajera', vendedor:'Armando Hoyos'},
				{fruto:'Naranja Agria', vendedor:'Agustin Melgar'},
				{fruto:'Piña', vendedor:'Quintin Arauz'},
				{fruto:'Uva', vendedor:'Lorenzo Iturbide'},
				{fruto:'Platano banano', vendedor:'Ernesto Malda'},
				{fruto:'Platano macho', vendedor:'Jesus Garcia'}
				];
		};
	});