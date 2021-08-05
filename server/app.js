const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api/posts", (req, res) => {
  res.json([
    {
      id: 1,
      content: "hello1",
    },
    {
      id: 2,
      content: "hello2",
    },
    {
      id: 3,
      content: "hello3",
    },
    {
      id: 4,
      content: "hello4",
    },
  ]);
});

app.listen(3065, () => {
  console.log("서버 실행 중");
});
