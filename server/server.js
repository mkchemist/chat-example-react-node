const http = require("http");
const fs  = require("fs");


http.createServer((req, res) => {
    fs.readFile("index.html",{encoding:"utf-8"},(err, data) => {
        if(err) {
            throw err;
        }
        res.end(data)
    })
}).listen(9090, () => {
    console.log("Server started at port 9090");
});


