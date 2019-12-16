// Manpreet Kaur (C0742828)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{ Book_id : 'B6' , User_id: ' U7' , Issue_date: '21-November-2019', Due_date: '08-December-2019'},
{ Book_id : 'B7' , User_id: ' U1' , Issue_date: '30-December-2019', Due_date: '12-December-2019'},
{ Book_id : 'B8' , User_id: ' U3' , Issue_date: '05-December-2019', Due_date: '25-December-2019'},
{ Book_id : 'B9' , User_id: ' U4' , Issue_date: '11-December-2019', Due_date: '30-December-2019'},
{ Book_id : 'B10' , User_id: ' U2' , Issue_date: '13-December-2019', Due_date: '01-January-2020'},
{ Book_id : 'B11' , User_id: ' U5' , Issue_date: '15-December-2019', Due_date: '24-January-2020'}
];
dbo.collection("Books_pending").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents are inserted");
db.close();
});
});