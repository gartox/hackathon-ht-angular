angular.module('frutosApp')
	.controller('TodosLosFrutosCtrl', function($scope, frutosService){
		$scope.frutos=  frutosService.obtieneFrutos();
		
		$scope.agregarFrutos = function(){

			var NuevoFruto = {
				fruto: $scope.nuevoFrutoNombre,
				vendedor: $scope.nuevoFrutoVendedor
			
			};
			$scope.frutos.push(NuevoFruto);
			$scope.nuevoFrutoNombre= "";
			$scope.nuevoFrutoVendedor = "";
		};
	});
  
