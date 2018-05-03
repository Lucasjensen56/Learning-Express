let http = require("http");

// const PORT = 8080


// // console.logs only show on the browser console. The response is in the browser
// function handleRequest(request, response) {
// 	console.log(request.url);
// 	var url = request.url
// 	response.end("IT works. This the route: " + url)

// }

// let server = http.createServer(handleRequest)


// // code is running here. only console logs will show in terminal
// server.listen(PORT, function() {
//   console.log(`The server is running on port ${PORT}`);


 const PORT = 7000


// console.logs only show on the browser console. The response is in the browser
function handleRequest(request, response) {
	console.log(request.url);
	var url = request.url
	response.end("You look Pretty");

}

let server = http.createServer(handleRequest)


// code is running here. only console logs will show in terminal
server.listen(PORT, function() {
  console.log(`The server is running on port ${PORT}` + ` You look pretty`);

});