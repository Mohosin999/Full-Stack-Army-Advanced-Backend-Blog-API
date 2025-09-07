const User = require("../../model/User");

const checkUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user ? true : false;
};

module.exports = { checkUserByEmail };
