var fs = new require("fs");
var http = new require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	fs.createReadStream(__dirname + "/index.html").pipe(res);
}).listen(8888);