const articleService = require("../../../../lib/article");

const findAll = async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const sortType = req.query.sort_type || "desc";
  const sortBy = req.query.sort_by || "updatedAt";
  const search = req.query.search || "";

  try {
    // data
    const articles = await articleService.findAll({
      page,
      limit,
      sortType,
      sortBy,
      search,
    });
    const data = articles.map((article) => ({
      ...article._doc,
      link: `/articles/${article.id}`,
    }));

    // pagination
    const totalItems = await articleService.count({ search });
    const totalPage = Math.ceil(totalItems / limit);

    const pagination = {
      page,
      limit,
      totalItems,
      totalPage,
    };

    if (page < totalPage) {
      pagination.next = page + 1;
    }

    if (page > 1) {
      pagination.prev = page - 1;
    }

    // HATEOAS links
    const links = {
      self: req.url,
    };

    res.status(200).json({ data, pagination });
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;
