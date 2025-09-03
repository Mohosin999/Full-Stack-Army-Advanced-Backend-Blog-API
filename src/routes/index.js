const router = require("express").Router();

router
  .route("/api/v1/articles")
  .get((req, res) => {})
  .post((req, res) => {});

router
  .route("/api/v1/articles/:id")
  .get((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
