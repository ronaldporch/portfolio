var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

var transportUrl = "smtps://user%40gmail.com:password@smtp.gmail.com"
var transporter = nodemailer.createTransport(transportUrl)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendEmail', function(req, res, next){
	var mailOptions = {
		from: '"' + req.body.name + '" <' + req.body.email + '>',
		to: 'dada5714@gmail.com',
		subject: 'Email from ' + req.body.name,
		text: req.body.email_body,
		html: "<h2>You received an email from " + req.body.name + ".</h2>" + req.body.email_body + "<h5>Respond at this email: " + req.body.email + "</h5>",
	}
	transporter.sendMail(mailOptions, function(err, info){
		if(err){
			return console.log(err)
		}
		console.log('Message Sent: ' + info.response)
		return res.json({success: true})
	})
})

module.exports = router;
