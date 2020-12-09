require('dotenv').config()
const jwt = require('jsonwebtoken')

class AuthenticationController {

    static verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        const token = bearerHeader && bearerHeader.split(' ')[1]
        if (!token) return res.sendStatus(401)
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
          if(err) return res.sendStatus(403)
          req.user = user
          req.token = token
          next();
        })
    }

    static login(request, response) {
        const username = request.body.username
        const password = request.body.password
        if(username !== process.env.ACCESS_USERNAME && password !== process.env.ACCESS_PASSWORD) response.sendStatus(401)
        const user = { name: username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        response.json({ accessToken: accessToken })
    }
}

export default AuthenticationController;