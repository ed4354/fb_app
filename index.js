const express = require("express");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const app = express();
const port = 3000;

passport.use(
  new FacebookStrategy(
    {
      clientID: "2287013654662872",
      clientSecret: "38b7035159d30af1ec7e0b89cc43a794",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      // if (profile) {
      //   facebookId = profile.id;
      //   return cb(null, user);
      // } else {
      //   return done(null, false);
      // }
      console.log("profile ", profile)
      return cb(null, false)
    }
  )
);

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    console.log("req - ", req);
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
