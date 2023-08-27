const router = require("express").Router()
const transactionRoutes = require("./transactionRoute")
const callbackRoutes = require("./callbackRoute")

router.get("/home", (req, res) => {
    console.log("navigating to /home")
    res.render("home")
})

router.use("/", transactionRoutes)
router.use("/", callbackRoutes)

module.exports = router