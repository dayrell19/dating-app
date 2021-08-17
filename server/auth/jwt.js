const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const { username, id } = user;
  const accessToken = sign({ username, id }, "JWTSECRET");

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.headers.accesstoken;

  if (!accessToken)
    return res.status(400).json({ error: "User not authenticated" });

  try {
    const validToken = verify(accessToken, "JWTSECRET");
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };
