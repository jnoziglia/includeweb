var express = require("express"),
    app = express();

var router = express.Router();


router.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static('node_modules/materialize-css/bin'));

app.use('/', router);

var server = require('http').Server(app);

server.listen(8080, function() {
  console.log("Node server running on http://localhost:8000");
});