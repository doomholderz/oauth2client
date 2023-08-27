const axios = require("axios")

const tokenService = async (authorization_code) => {

    const access_token_return = await axios.post("http://localhost:3000/oauth/token", {"grant_type": "code", "code": `${authorization_code}`, "redirect_uri": "http://localhost:5000/callback", "client_id": "test", "client_secret": "test_client_secret"})

    const access_token_obj = access_token_return.data
    const access_token = access_token_obj.access_token
    console.log("token: " + access_token)
    
    // now we have the access token, we need to store this in a database alongside the user_id that this belongs to

    // to do this, we need users and sessions in the client application
    // we won't worry about registration right now as I cannot be arsed
    // we also need to consider how client_id and client_secret are both genreated by the server, requested by the client, and stored by the client (this is more secrets manager than database'd)
    
    // storeAccessToken(user_id, access_token)
    // res.redirect("/transactions")

    // we then need to consider access pattern for transactions - it should grab the data it needs - but when? and should this data be cached?
    // I'd have thought that we wait until loading /transactions (at least initially) before the request to oauth2server for user transaction information is made, but in a more mature setup I'd assume this is fetched asynchronously and loaded into 'cache'/database to reduce response times and network load

    // also I've just realised we're not actually doing the redirect_uri route here - we're just responding directly back to the post request. surely this is a better pattern? the request could be coming from anywehere, but anyone can change redirect_uri in the /token request so this isn't a source of truth in any way (unless this was set during client registration in oauth2server?)

}

module.exports = tokenService