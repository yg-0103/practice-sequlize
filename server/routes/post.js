const express = require("express");
const { Post } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      limit: 10,
      offset: 0,
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      hashTag: req.body.hashTags,
    });

    return res.status(201).json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
