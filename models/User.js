const mongoose = require('mongoose')

//스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //스페이스 없애기
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String 
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User } //다른데서도 쓸수 있게