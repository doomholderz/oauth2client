const tokenService = require("../services/token")

const authorizationController = async (req, res) => {
    res.render("callback")
    const authorization_code = req.query.code
    if (!authorization_code) {
        const error_code = req.query.error
        if (!error_code) {
            console.log("no error code, no authorization code")
        }
        res.send(error_code)
        //res.send("no authorization code provisioned")
    }
    tokenService(authorization_code)
}

module.exports = authorizationController
