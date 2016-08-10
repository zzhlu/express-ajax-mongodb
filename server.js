const express = require('express');
const bodyParser = require('body-parser');

const insertData = require('./routes/insert');
const selectData = require('./routes/select');
const deleteData = require('./routes/delete');
const updateData = require('./routes/update');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.post('/', insertData.save);
app.post('/data', selectData.save);
app.delete('/', deleteData.save);
app.put('/', updateData.save);

app.listen(3000, () => {
  console.log("Server start on 3000...");
});

module.exports = app;
