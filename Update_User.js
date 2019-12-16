// Manpreet Kaur (742828)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var updateData = {First_name:'Davidson'};
var newValues={$set:{Membership:"Senior_citizen"}};
dbo.collection("User_Info").updateOne(updateData,newValues, function(err, res) {
if (err) throw err;
console.log( " Your document is updated");
db.close();
});
});