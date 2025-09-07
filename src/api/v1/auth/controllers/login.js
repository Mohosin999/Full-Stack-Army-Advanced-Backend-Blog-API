const login = (req, res, next) => {
  try {
    res.send("Login");
  } catch (error) {
    next(error);
  }
};

module.exports = login;
