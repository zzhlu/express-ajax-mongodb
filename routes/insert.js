const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/demo1';

exports.save = function (req, res) {
  const insertData = function (db, callback) {
    const collection = db.collection('mytable');
    const data = req.body;
    collection.insert(data, function (err, result) {
      if (err) {
        console.log('Error:' + err);
        return;
      }
      callback(result);
    });
  };

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功!");
    insertData(db, function (result) {
      console.log("添加成功!");
      db.close();
    });
  });
};