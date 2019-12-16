// Manpreet Kaur
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var deleteData = {User_id: 'U3'};

dbo.collection("User_Info").deleteOne(deleteData, function(err, res) {
if (err) throw err;
console.log( " Your document is deleted");
db.close();
});
});