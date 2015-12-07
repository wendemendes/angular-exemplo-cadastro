// var http = require('http');

// var server = http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type':'text/html'});
// 	res.end('<h1>Hello World</h1>');
// });

// var port = Number(process.env.PORT || 3000);

// server.listen(port);

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response) {
//   response.render('view/index.html');
// });

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

// app.get('/', function(request, response) {
//   //response.send('Ola mundo');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});