var express = require("express"),
    app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/proximamente.html');
});
router.get('/games', function(req, res) {
	res.sendFile(__dirname + '/views/games.html');
});
router.get('/oldversion', function(req, res) {
	res.sendFile(__dirname + '/views/oscuro.html');
});

router.post('/contact', contact);
router.post('/subscribe', subscribe);

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

function subscribe(req, res) {
	/*console.log(req.body.nombre);
	console.log(req.body.mail);
	console.log(req.body.mensaje);*/
	transporter.sendMail({
    from: 'webpage@includeweb.com.ar',
    to: 'webpage@includeweb.com.ar',
    subject: 'Suscripción',
    text: req.body.mail
  },
  function(error, info){
		if(error){
		  res.send("error");
		}
		else {
		  res.send("hola");
		}
	});
}

function contact(req, res) {
	/*console.log(req.body.nombre);
	console.log(req.body.mail);
	console.log(req.body.mensaje);*/
	transporter.sendMail({
    from: 'webpage@includeweb.com.ar',
    to: 'webpage@includeweb.com.ar',
    subject: 'Consulta',
    text: req.body.nombre+'\n\n'+req.body.mensaje+'\n\n'+req.body.mail
  },
  function(error, info){
		if(error){
		  res.send("error");
		}
		else {
		  res.send("hola");
		}
	});
}