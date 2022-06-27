const { appendFile } = require('fs');



var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017"; //mongodb url link



MongoClient.connect(url, function(err, db) {  //to connect with the database

  if (err) throw err;

  var dbo = db.db("Database");

  var myobj = { name: "Kiran", company: "capgemini" };

  dbo.collection("sample").insertOne(myobj, function(err, res) {

    if (err) throw err;

    console.log("1 document inserted");

    db.close(); 

  });

});