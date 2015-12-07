

app.controller('DadosCadastroCtrl', function($scope, DB, $route){
	$scope.contatos = {};

var MODELO_CONTATO  = 'contato';
	$scope.buscar = function(){
		DB.read(MODELO_CONTATO).then(function(data){
			$scope.contatos = data.data;
		});
	}

	$scope.excluirContato = function(contato){
		DB.delete(contato, MODELO_CONTATO).then(function(data){
			$scope.buscar();
		});
	}
	
});