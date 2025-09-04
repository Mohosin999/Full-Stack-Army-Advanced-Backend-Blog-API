const findAll = (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const sortType = req.query.sort_type || "dsc";
  const sortBy = req.query.sort_by || "updatedAt";
  const search = req.query.search || "";

  try {
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;
