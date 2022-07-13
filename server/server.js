const express = require('express');
const app = express();
const indexRouter = require('.//Router/index');

app.use('/api', indexRouter);

const port=3002;  // React가 3000번 포트를 사용하기 때문에 node 서버가 사용하 포트넘버는 다른 걸로
app.listen(port, () => {console.log(`Listening on port ${port}`)});
