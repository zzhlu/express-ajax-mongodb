var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

const insertData = require('./routes/insert');
const selectData = require('./routes/select');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.post('/', insertData.save);
app.get('/data', selectData.save);

app.listen(3000, () => {
  console.log("Server start on 3000...");
});


module.exports = app;
