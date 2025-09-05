const articleService = require("../../../../lib/article");

const updateItem = async (req, res, next) => {
  const { id } = req.params;
  const cover = req.body.cover || "";
  const status = req.body.status || "draft";

  try {
    const updatedArticle = await articleService.updateOrCreate(id, {
      title: req.body.title,
      body: req.body.body,
      author: req.user,
      cover,
      status,
    });

    res.status(200).json(updatedArticle);
  } catch (error) {
    next(error);
  }
};

module.exports = updateItem;
