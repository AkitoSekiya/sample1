const http = require("http");

const server = http.createServer((request, response) => {
    response.writehead(200,{
        "Content-Type": "text/html"
    });


});

