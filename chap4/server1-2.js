const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write("<h1> Hello Node! </h1>");
    res.end("<p>Hello Server!8080</p>");
  })
  .listen(8080, () => {
    //서버 연결
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  res.write("<h1> Hello Node! 헬로우</h1>");
  res.end("<p>Hello Server!8081</p>");
});

server.listen(8081);

//listening이벤트 발생시 실행할 콜백
server.on("listening", () => {
  console.log("8081번 포트에서 서버 대기 중입니다!");
});

//error 이벤트 발생시 실행할 콜백
server.on("error", () => {
  console.error(error);
});
