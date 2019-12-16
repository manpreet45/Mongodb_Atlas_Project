// Manpreet Kaur (742828)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");

dbo.collection("User_Info").find({}, { projection: { _id: 0, User_id: 1, Membership: 1 } }).toArray(function(err, result) {
if (err) throw err;
console.log(result);
db.close();
});
});