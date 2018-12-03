//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});
//listen to port 3000 by default
var port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server running ${port}`);
});
 
module.exports = app;

