let http = require("http");



 const PORT = 7500


// console.logs only show on the browser console. The response is in the browser
function handleRequest(request, response) {
	console.log(request.url);
	var url = request.url
	response.end("Ew... What is that?");

}

let server = http.createServer(handleRequest)


// code is running here. only console logs will show in terminal
server.listen(PORT, function() {
  console.log(`The server is running on port ${PORT}` + ` Ew... What is that?`);

});