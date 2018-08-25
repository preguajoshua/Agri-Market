//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/loginsignup.html'));
});
app.get('/searcheditems', function(req, res){
  res.sendFile(path.join(__dirname, 'views/searcheditems.html'));
});
app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, 'views/home.html'));
});
// app.get('/loginsignup', function(req, res){
//   res.sendFile(path.join(__dirname, 'views/loginsignup.html'));
// });
app.get('/itemdetails', function(req, res){
  res.sendFile(path.join(__dirname, 'views/itemdetails.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});