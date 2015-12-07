

app.controller('CadastroContatoCtrl', function($scope, DB, $route, $routeParams){
	
    var MODELO_CONTATO  = 'contato';

	if($routeParams.id != undefined){
		DB.profile($routeParams.id, MODELO_CONTATO).then(function(data){
			$scope.contato = data.data;
		});
	}



	$scope.salvar = function(contato){
		if(contato.id == undefined){
			DB.create(contato, MODELO_CONTATO).then(function(data){
				$route.reload();
			});
		}else{		
			DB.update(contato, MODELO_CONTATO).then(function(data){
			});		
		}		
	}
});