var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var fs = require("fs");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/vendor", express.static(__dirname + "/vendor"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/locales", express.static(__dirname + "/locales"));
app.use("/utils", express.static(__dirname + "/utils"));
app.use("/", express.static(__dirname + "/"));

app.get("/", (req, res) => {
  console.log("접속되었습니다!!!!!!!!!");
  fs.readFile("index.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
  //res.sendFile('index.html', { root: __dirname });
});

const port = process.env.PORT || 3000;
//3000번 port에 서버
app.listen(port, () => {
  console.log("Express server");
});
