var http = require('http');
var date=require('./getdate');
// var mongo=require('mongodb');
var mongodbclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/firstmd'

mongodbclient.connect(url, function (err, db) {  //Create database  if is not exist
    if (err) throw err;
    // console.log('Database Created')
    var dbo = db.db('firstmd')

    // var record = { user: 'hussain', pass: 'hussain' };
    // dbo.collection('users').insertOne(record,function(err,res){
    //     if (err) throw err;
    //     console.log('Record Insert');
    //     db.close();
    // });

    // console.log(dbo.collection('first_tab').find({name:'smith'}));
    dbo.collection('users').findOne({ user: 'hussain' }, function (err, res) {
        if (err) throw err;
        var record = { user: res['_id'], msg: 'hi hello',date: date.MyDateTime()};
        dbo.collection('msg_tbl').insertOne(record, function (err, res) {
            if (err) throw err;
            console.log('insert');
            db.close();
        });
    });
    
});

// Table Created--------------------------------------------------
//---------------------------------------------------------------------
// var dbobj=db.db('firstmd')
//   dbobj.createCollection('first_tab',function(err,res){
//     if(err) throw err;
//     console.log('Table Created')
//     db.close();
// });



// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('hussain');
//     res.end()
// }).listen('4000');