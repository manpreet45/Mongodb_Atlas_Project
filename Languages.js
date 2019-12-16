// Manpreet Kaur (C0742828)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{ Languages_Id: 'Lg1', Language: 'English', Available_books: '45'},
{ Languages_Id: 'Lg2', Language: 'French', Available_books: '36' },
{ Languages_Id: 'Lg3', Language: 'Hindi', Available_books: '55'},
{ Languages_Id: 'Lg4', Language: 'Punjabi', Available_books: '50'},
{ Languages_Id: 'Lg5', Language: 'Spanish', Available_books: '35'},
{ Languages_Id: 'Lg6', Language: 'Russian', Available_books: '42'}
];
dbo.collection("Languages").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents are inserted");
db.close();
});
});