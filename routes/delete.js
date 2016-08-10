const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/demo1';

exports.save = function (req, res) {
  const deleteData = function (db, callback) {
    const collection = db.collection('mytable');
    const data = req.body;
    collection.remove(data, function (err, result) {
      if (err) {
        console.log("Error:" + err);
        return;
      }
      callback(result);
    });
  };

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功!");
    deleteData(db, function (result) {
      console.log("删除成功!");
      db.close();
    });
  });
};