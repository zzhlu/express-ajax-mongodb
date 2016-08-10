const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/demo1';

exports.save = function (req, res) {
  const updateData = function (db, callback) {
    const collection = db.collection('mytable');
    const data = req.body;
    const updateStr = {$set: {"_id": '5'}};
    collection.updateMany(data, updateStr, {safe: true}, function (err, result) {
      if (err) {
        console.log('Error' + err);
        return;
      }
      callback(result);
    });
  };

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功!");
    updateData(db, function (result) {
      console.log(result);
      db.close();
    });
  });
};