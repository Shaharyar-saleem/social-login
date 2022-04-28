const passport = require('passport');
const GOOGLE_CLIENT_ID = "79438820321-0ou11ur2vrfnajm88e90lbphi5f3cnuk.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // todo: implement functionality here to store data about the user
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})