// express 모듈 호출
const express = require('express') 
const app = express();
const api = require('./routes/index')

app.use('/api', api);

// 클라이언트랑 충돌 하지 않게
const PORT = 5000;

app.listen( process.env.PORT || PORT , () => {
    console.log(`Server starting at ${PORT}`)
})