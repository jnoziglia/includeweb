var express = require("express"),
    app = express();

var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/indexx.html');
});
router.get('/oscuro', function(req, res) {
	res.sendFile(__dirname + '/views/oscuro.html');
});

router.get('/contact', contact);

app.use(express.static('node_modules/materialize-css/bin'));
app.use(express.static('node_modules/materialize-css/font'));
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('public'));

app.use('/', router);

var server = require('http').Server(app);

server.listen(8010, function() {
  console.log("Node server running on http://localhost:8010");
});


function contact(req, res) {
	console.log(req.query.nombre);
	console.log(req.query.mail);
	console.log(req.query.mensaje);
}