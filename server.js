var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));

var db_config = {
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b4a3bc0c9cb84f',
    password: '9397b521',
    database: 'heroku_5479819faf5a4e1'
};

 //app.get('/', function(request, response) {
   //response.render('app');
 //});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});

module.exports = app;
