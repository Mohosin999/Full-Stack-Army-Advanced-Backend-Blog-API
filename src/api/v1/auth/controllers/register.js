const register = (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    res.send("register");
  } catch (error) {
    next(error);
  }
};

module.exports = register;
