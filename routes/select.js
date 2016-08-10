var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/demo1';

exports.save = function (req, res) {
  var selectData = function (db, callback) {
    var collection = db.collection('mytable');
    var data = {"name":"4"};
    collection.find(data).toArray(function (err, result) {
      if (err) {
        console.log('Error:' + err);
        return;
      }
      callback(result);
    });
  };

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功!");
    selectData(db, function (result) {
      console.log(result);
      db.close();
    });
  });
};