const jwt = require("jsonwebtoken");
require("dotenv").config()
const adminAuthentication = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
      if (decoded) {
        // console.log(decoded)
        req.body.admin = decoded.name;
        req.body.adminID = decoded.adminID;
        // console.log(req.body)
        next();
      } else {
        res.status(403).send({ message: "Admin Authorization Error" });
      }
    });
  }else{
    res.status(403).send({ message: "Invalid Token" });
  }
};

module.exports = { adminAuthentication };