const authorizationController = require("../controllers/authorization")
const router = require("express").Router()

/*
router.get("/callback", (req, res) => {
    console.log("callback has been called!")
    console.log(req.query.code)
    console.log("navigating to /callback, request assumed to have come from oauth server")
    res.render("callback")
})
*/

router.get("/callback", authorizationController)

module.exports = router