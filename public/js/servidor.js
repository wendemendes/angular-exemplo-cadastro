
var app = angular.module('service', []);

app.factory('DB', function($http){
	return {
		read: function(modelo){
			var url = URL('cr', null, modelo);
			return $http.get(url);
		},
		create: function(entity, modelo){
			var url = URL('cr', null, modelo);
			return $http.post(url, entity);
		},
		profile: function(id, modelo){
			var url = URL('upd', id, modelo);
			return $http.get(url);	
		},
		update: function(entity, modelo){
			var url = URL('upd', entity._id.$oid, modelo);
			return $http.put(url, entity);	
		},
		delete: function(entity, modelo){
			var url = URL('upd', entity._id.$oid, modelo);
			return $http.delete(url);		
		}
	}
});


function URL(opt, id, modelo){
	var url = 'https://api.mongolab.com/api/1/databases/agenda/collections/' + modelo;
	switch(opt){
		case 'cr': {
			return url+'?apiKey=Z_4Dm3xwxZcU8K4eiU3ktI-3ceW_MgLq';
		};
		break;
		case 'upd': {
			return url+"/"+id+"?apiKey=Z_4Dm3xwxZcU8K4eiU3ktI-3ceW_MgLq";
		} 
	}
}