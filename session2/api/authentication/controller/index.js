const { checkIfUserExist, newUser } = require("../services");

const loginCtrl = (req, res, next) => {
  // res.send('Ok!');
  const body = req.body;
  const isUser = checkIfUserExist(body);
  if (isUser) {
    next();
  } else {
    res.send({ login: "Invalid Username or Password!" });
  }
};

const signUPCtrl = (req, res, next) => {
  const body = req.body;
  const isUser = checkIfUserExist(body);
  if (!isUser) {
    newUser(req.body);
    next();
  } else {
    res.send({ signUp: "Username already exists!" });
  }
};

module.exports = { loginCtrl, signUPCtrl };
