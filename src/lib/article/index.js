const { Article } = require("../../model");

const findAll = async ({
  page = 1,
  limit = 10,
  sortType = "desc",
  sortBy = "updatedAt",
  search = "",
}) => {
  const sortStr = `${sortType === "desc" ? "-" : ""}${sortBy}`;
  console.log(sortStr);

  const articles = await Article.find({
    title: { $regex: search, $options: "i" },
  })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  return articles;
};

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

module.exports = { findAll, create };
