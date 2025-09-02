const authenticate = (req, _res, next) => {
  req.user = {
    id: 1,
    name: "Mohosin",
  };
  next();
};

module.exports = authenticate;
