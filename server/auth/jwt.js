const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const { username, id } = user;
  const accessToken = sign({ username, id }, "JWTSECRET");

  return accessToken;
};

module.exports = { createTokens };
