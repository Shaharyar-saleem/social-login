const router = require('express').Router();
const passport = require('passport');

router.get("/login/failed", (req, res) => {
    res.status(401).json("Login failed")
})

router.get("/login/success", (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user,
            cookies: req.cookies
        })
    }
})

router.get("logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000");
})

router.get("google", passport.authenticate("google", {scope: ["profile"] }))

router.get("google/callback", passport.authenticate("google/callback", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
}))

module.exports = router;