var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.get('/style.css', function (req, res) {
  res.sendFile(__dirname + '/style.css');
})
app.get('/minions.jpg', function (req, res) {
  res.sendFile(__dirname + '/minions.jpg');
})
app.get('/dashboard', function (req, res) {
  res.sendFile(__dirname + '/dashboard.html');
})
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post("/login", function(req, res) {
  if (req.body.name === 'John Doe' && req.body.email === 'john@requantive.com')
    {
      res.redirect('/dashboard')
    } else {
      res.send("Incorrect Credentials. Please try again.")
    }
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
