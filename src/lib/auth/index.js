const { userExist } = require("../user");
const { badRequest } = require("../../utils/error");

const register = async ({ name, email, password }) => {
  const hasUser = await userExist(email);
  if (hasUser) throw badRequest("User already exist");
};
