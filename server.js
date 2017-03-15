var express = require('express');
var mysql = require('mysql');
var app = express();

app.set('port', 3000);

app.use(express.static(__dirname));


 

// app.get('/', function(request, response, next) {
//   console.log('this is a test');
//   next();
// });
 

var dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'todolist'  
}; 

var connection;

connection = mysql.createConnection(dbConfig);

connection.connect(function(err) {                // The server is either down
  if (err) {                                     // or restarting (takes a while sometimes).
    console.log('2. error when connecting to db:', err);
    setTimeout(handleDisconnect, 1000); // We introduce a delay before attempting to reconnect,
  }                                       // to avoid a hot loop, and to allow our node script to
});                                       // process asynchronous requests in the meantime.
                          // If you're also serving http, display a 503 error.
connection.on('error', function(err) {
  console.log('3. db error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {  // Connection to the MySQL server is usually
    handleDisconnect();                       // lost due to either server restart, or a
  } else {                                        // connnection idle timeout (the wait_timeout
    throw err;                                  // server variable configures this)
  }
});

var query = connection.query('SELECT item FROM list');
 // app.get('/', function(request, response) {
 //   response.render('app');
 // });
 
var insert = function(body) {
  connection.query('INSERT INTO list (`item`) VALUES(" + variable + ");');
}; 

app.get('/', function(req, res) {
  return res.send(query);
});

app.post('/', function(req, res) {
  insert(req.data);
}); 
 
// app.get('*', function (req, res) {
//   res.sendFile('/public/index.html');
// }); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});

module.exports = app;
