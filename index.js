var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

//creo un collegamento con mongodb
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dbmpalestra");//nome db
  var query = { nome: "alex" };  //query
  dbo.collection("progressi").find(query).toArray(function(err, result) {  //nome collection
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
