const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportSetup = require('./passport');
const authRoot = require('./routes/auth')
const app = express();

app.use(
    cookieSession({
        name: "sessoon",
        keys: ["user"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin : "http://localhost: 3000",
    method : "GET, POST, PUT, OPTIONS",
    credentials: true,
}));

app.use("/auth", authRoot);

app.listen("5000", ()=>{
    console.log("Server is running")
})