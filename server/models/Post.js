const { charsets } = require('mime');
const Sequelize = require('sequelize');

// Post란 모듈안에 sequelize 형태를.. class의 형태로
module.exports = class Post extends Sequelize.Model {
    static init(sequelize)
    {
        return super.init({
            // 요게 이제 테이블에 콜론을 그냥 만드는것
            comment : {
                type : Sequelize.STRING(100),
                allowNull:true
            }
        },{
            sequelize,
            timestamps : true, // 등록시간, 수정시간을 알 수 있음
            modelName : 'POST', // 모델 이름
            tableName : 'posts', // 테이블 이름
            charsets : 'utf8' // 인코딩 방식
        })
    }
}