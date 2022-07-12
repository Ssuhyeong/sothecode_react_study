const express = require('express');
const app = express();
const indexRouter = require('.//Router/index');

app.use('/api', indexRouter);

const port=3002;
app.listen(port, () => {console.log(`Listening on port ${port}`)});
