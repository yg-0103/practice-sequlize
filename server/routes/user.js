const express = require("express");
const bycrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (!req.user) return res.json(null);
    const userWithoutPassword = await User.findOne({
      where: { id: user.id },
      attributes: {
        exclude: ["password"],
      },
    });

    return res.json(userWithoutPassword);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
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

      const userWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.json(userWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("success");
});

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
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
