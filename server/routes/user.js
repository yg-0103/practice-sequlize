const express = require("express");
const bycrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (serverError, user, clientError) => {
    if (serverError) {
      console.error(err);
      return next(err);
    }
    if (clientError) {
      return res.status(401).send(clientError.reason);
    }

    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      return res.json(user);
    });
  })(req, res, next);
});

router.post("/", async (req, res, next) => {
  try {
    // 이메일 중복 찾기
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다");
    }
    const hashedPassword = await bycrypt.hash(req.body.password, 12);

    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    res.send("success");
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
