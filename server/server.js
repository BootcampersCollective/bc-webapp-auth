var express = require ('express');

var app = express ();
const port = 3030;

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/api/google_oauth', function(req, res){
  res.send('Got a GET request at `api/google_oath');
});

app.listen (port, () => {
  console.log('server is up on port' + port);
});
