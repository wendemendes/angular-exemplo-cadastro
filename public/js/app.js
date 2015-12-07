var app = angular.module('app', ['ngRoute', 'controller', 'service']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/dados-cadastro', {
		templateUrl: 'views/dados-cadastro.html',
		controller: 'DadosCadastroCtrl'
	})
	.when('/cadastro-contato', {
		templateUrl: 'views/cadastro-contato.html',
		controller: 'CadastroContatoCtrl'
	})
	.when('/cadastro-contato/:id', {
		templateUrl: 'views/cadastro-contato.html',
		controller: 'CadastroContatoCtrl'
	})

	.otherwise({redirectTo: '/'});
});