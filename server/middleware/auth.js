const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증처리
  // 클라이언트 쿠키에서 토큰 가져오기
  let token = req.cookies.x_auth;

  // 토큰을 decode한 후 user 찾기
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    //유저 없으면 인증 no
    if (!user) return res.json({ isAuth: false, error: true });

    //유저가 있으면 인증 ok
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
