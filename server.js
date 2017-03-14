var express = require('express');
var app = express();

app.set('port', 3000);

app.use(express.static('/'));

// app.get('/', function(request, response) {
//   response.render('app');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});

module.exports = app;
