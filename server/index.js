const WebSocket = require("ws");
const mysql = require("mysql");
const DB = require("./db");
const wss = new WebSocket.Server({port:9090,perMessageDeflate:true});

let db = new DB();



wss.on("connection",(ws) => {
    ws.send("Chat starting");
    ws.on("message", (data) => {
        data = JSON.parse(data);
        let ins = `INSERT INTO chat (send_from, send_to, message) VALUES ('${data.send_from}','${data.send_to}','${data.message}')`;
        db.query(ins, (res) => {
            console.log(res);
        });
        let getRow = "SELECT * FROM chat ORDER BY id DESC LIMIT 1";
        db.query(getRow,(res) => {
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                  client.send(JSON.stringify(res[0]));
                }
              });
        })
    })
})

wss.on("listening",(socket) => {
    console.log("Server start listening");
});

wss.on("headers", (header) => {
})


