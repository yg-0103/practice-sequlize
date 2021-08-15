const express = require("express");
const bycrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  const hashedPassword = await bycrypt.hash(req.body.password, 12);

  await User.create({
    email: req.body.email,
    nickname: req.body.nickname,
    password: hashedPassword,
  });

  res.send("success");
});

module.exports = router;
