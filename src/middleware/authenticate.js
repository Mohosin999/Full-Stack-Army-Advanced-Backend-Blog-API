const authenticate = (req, _res, next) => {
  req.user = {
    id: "68ba6d1eb737958e8159379c",
    name: "Mohosin M.",
    email: "mohosin@hasan",
    role: "user",
  };

  next();
};

module.exports = authenticate;
