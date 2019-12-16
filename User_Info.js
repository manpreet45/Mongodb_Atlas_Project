// Manpreet Kaur (C0742828)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{ User_id: 'U1' , First_name: 'Davidson' , Last_name:'Sig' , Contact: '4748848358' , Address: ' Toronto', Membership: 'Monthly' },
{ User_id: 'U2' , First_name: 'Kim' , Last_name:'Jonas' , Contact: '1223485585' , Address: 'Kitchener', Membership: 'Weekly' },
{ User_id: 'U3' , First_name: 'Mahira' , Last_name:'Sharma' , Contact: '9876543210' , Address: ' Surrey', Membership: 'Yearly' },
{ User_id: 'U4' , First_name: 'Paras' , Last_name:'Chhabra' , Contact: '8907654123' , Address: ' Brampton', Membership: 'Monthly' },
{ User_id: 'U5' , First_name: 'Siddharth' , Last_name:'Shukla' , Contact: '9871439098' , Address: 'Missisauga', Membership: 'Yearly' },
{ User_id: 'U6' , First_name: 'Shehnaaz' , Last_name:'Gill' , Contact: '6784351881' , Address: ' Vancouver', Membership: 'Student' }
];
dbo.collection("User_Info").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents are inserted");
db.close();
});
});