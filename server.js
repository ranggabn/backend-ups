const express = require("express");
const bodyParser = require("body-parser");

var morgan = require('morgan');
const app = express();
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({limit:'50mb'}))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

//panggil routes
var routes = require('./routes');
routes(app);

app.use('/auth', require('./middleware'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
