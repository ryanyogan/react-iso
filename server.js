var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');

var app = express();

require('node-jsx').install();

var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes/coreRoutes.js')(app);

app.get('*', function(req, res) {
  res.json({
    "route": "Sorry this page does not exist!"
  });
});

app.listen(port);

console.log('Server is running on Port: ' + port);
