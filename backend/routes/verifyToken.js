const jwt = require('jsonwebtoken');
//as the name implies, this function is there just to verify if the
//token is in the right format of a jwt token and set req.user = user,
//else it will return token invalid message
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}
module.exports = {
    verifyToken, 
}