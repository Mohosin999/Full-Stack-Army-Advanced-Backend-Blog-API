const { Article } = require("../../model");

/**
 * Find all articles
 */
const findAll = ({
  page = 1,
  limit = 10,
  sortType = "desc",
  sortBy = "updatedAt",
  search = "",
}) => {
  const sortStr = `${sortType === "desc" ? "-" : ""}${sortBy}`;
  const filter = {
    title: { $regex: search, $options: "i" },
  };

  return (
    Article.find(filter)
      // .populate({ path: "author", select: "name" })
      .sort(sortStr)
      .skip(page * limit - limit)
      .limit(limit)
  );
};

/**
 * Count (total articles)
 */
const count = ({ search = "" }) => {
  const filter = {
    title: { $regex: search, $options: "i" },
  };

  return Article.countDocuments(filter);
};

/**
 * Create articles
 */
const create = ({ title, body = "", cover = "", status = "draft", author }) => {
  if (!title || !author) {
    const error = new Error("Invalid parameters");
    error.status = 400;
    throw error;
  }

  const article = new Article({
    title,
    body,
    cover,
    status,
    author: author.id,
  });

  return article.save();
};

module.exports = { findAll, create, count };
