const authenticate = (req, _res, next) => {
  req.user = {
    id: "64bfe1b9a12d3c9a0f5c7d12",
    name: "Mohosin Hasan",
    email: "mohosin@hasan",
    role: "user",
  };

  next();
};

module.exports = authenticate;
