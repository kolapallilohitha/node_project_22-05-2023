const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  console.log(req.body, res);
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    console.log("token=========", token);
 
  if (!token) {
    return res.status(403).send({Message: "A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({Message: "Invalid Token"});
  }
  return next();
};

module.exports = verifyToken;