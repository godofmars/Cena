var http = require("http");
var url=require("url");

function start(router){
	function onRequest(req,res){

		var pathname=url.parse(req.url).pathname;
		
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write("Hello World");
		router(pathname);
		res.end();
	};

	http.createServer(onRequest).listen(3000,function(){
		console.log("Server has started on port:" );
	});

}

exports.start=start;
