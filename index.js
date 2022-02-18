var http = require('http'); // 적절한 응답 결과를 얻으려면 requrie을 통해 http 모듈을 가져와야 한다. 
var dt = require('./myfirstmodule'); // 내가 생성한 myfirstmodule.js 사용하기 

http.createServer(function (req, res) { // require을 통해 가져온 http 모듈을 읽어들이고 http 변수를 통해 접근 가능. http 모듈에서 제공하는 createServer 호출 
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // 요청에 응답 헤더를 보내는 http 모듈의 내장 속성 
  res.write("The date and time are currently:"+dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);
// 8080 포트에 서버 생성 완료 
// res.writeHead(상태코드,헤더정보) 응답 헤더에 정보를 기록하는 메서드. 상태 코드는 200,404,500 등 
// res.write()  본문(body)에 보여지는 부분을 쓰는 메서드 
// res.end() 응답을 종료하는 메서드

