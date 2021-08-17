const passport = require("passport");
const { User } = require("../models");
const local = require("./local");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: id });
      done(null, user); // req.user 를 만든다
    } catch (e) {
      console.error(e);
      done(e);
    }
  });

  local();
};
