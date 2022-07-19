const express = require("express");

const router = express.Router();

const {
  CategoryController,
  DatevAccountController,
} = require("../controllers");
const { verifyToken } = require("../middleware/auth.middleware");

router.get("/", verifyToken, async (req, res) => {
  try {
    await DatevAccountController.getDatevAccounts(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

router.put("/:accountId", verifyToken, async (req, res) => {
  try {
    await CategoryController.updateDatevAccount(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

module.exports = router;
