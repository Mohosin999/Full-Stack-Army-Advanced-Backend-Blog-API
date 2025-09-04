const authenticate = (req, _res, next) => {
  req.user = {
    id: "aadffa121afaa",
    name: "Mohosin Hasan",
    email: "mohosin@hasan",
    role: "user",
  };

  next();
};

module.exports = authenticate;
