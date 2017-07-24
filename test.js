// サーバーを立てて、クライアントにテキストでユーザーエージェントを返すプログラム
'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write(req.headers['user-agent']);
    res.end();
});
// ポート番号は 8000 番にする
  const port = 8000;
server.listen(port, () => {
    console.log('Listening on ' + port);
});