var http = require ('http');
http.createServer(function (req,res) {
res.write('<h1>Hello Welcome To Server</h1>')
res.end();
}) .listen(5000)