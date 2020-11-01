const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

const parseCookies = (cookie = "") => {
  return cookie
    .split(";") //쿠키간 구분자인 ;를 기준으로 나눈 배열을 만듭니다. a=b ; c=d
    .map((v) => v.split("=")) //각 배열의 요소를 다시 =를 기준으로 나눈 배열로 만듭니다.
    .reduce((acc, [k, v]) => {
      //acc의 배열을 각 값으로 재조립하는 과정 acc다음인자는 map으로 만들어진 배열의 요소를 감안해서 생각한다.
      //예를들어 k라면 k는 map으로 만들어진 배열의 요소이고 [k,v]는 map으로 만들어진 배열의 요소를 이루는 요소의 형태이다. 위의 연산을 통해 무조건 2값이므로 [k, v]로 나타낼 수 있고 각 값을 이용해서 acc배열을 재구성한다.
      acc[k.trim()] = decodeURIComponent(v); //encodeURIComponent나 비슷한 방법으로 생성된 URI 컴포넌트를 해독합니다.
      return acc;
    }, {});
};

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    //주소가 /login으로 시작하는 경우
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      // 쿠키 유효 시간을 현재 시간 +5분으로 설정
      expires.setMinutes(expires.getMinutes() + 5);
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toUTCString()}; HttpOnly; path=/`,
      });
      res.end();
      //name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      try {
        const data = await fs.readFile("./cookie2.html");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(err.message);
      }
    }
  })
  .listen(8084, () => {
    console.log("8084번 포트에서 서버 대기 중입니다!");
  });
