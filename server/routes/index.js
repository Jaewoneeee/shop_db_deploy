const express = require('express');
const router = express.Router();
const { sequelize, Post } = require('../models');

// db를 초기상태에서 진행할것가에 대한것. 이걸 true로 바꾸면 매번 db가 초기화됨 
sequelize.sync({force : false})
.then(() => {
    // 정상 구동
    console.log('db 실행')
})
.catch((err) => {
    // 에러 발생 
    console.log(err)
})

// 이상태에서 export로 내보내기

router.get('/', async(req, res) => {
    //let post = await POST.findAll();
    //let post = await POST.findOne({});
    let post = await POST.create({
        comment : req.send
    });
    
    req.send()
})

module.exports = router;
