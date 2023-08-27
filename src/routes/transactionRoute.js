const router = require("express").Router()

router.get("/transactions", (req, res) => {
    console.log("navigating to /transactions")
    res.render("transactions")
})

module.exports = router