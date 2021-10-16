const users = [
  { username: "Manav", pass: "Hello" },
  { username: "test", pass: "test" },
]; //save pass in encypted form in future

const checkIfUserExist = (body) => {
  let isAuth = false;
  users.forEach((user) => {
    if (body.username === user.username && body.pass === user.pass) {
      isAuth = true;
    }
  });
  return isAuth;
};
const newUser = (body) => {
  users.push(body);
};

module.exports = { checkIfUserExist, newUser };
