const authenticate = (req, _res, next) => {
  req.user = {
    id: "68b936757f4e3bae41628f8a",
    name: "Mohosin Hasan",
    email: "mohosin@hasan",
    role: "user",
  };

  next();
};

module.exports = authenticate;
