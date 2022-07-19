const express = require("express");

const router = express.Router();

const { UserController } = require("../controllers");
const { verifyToken } = require("../middleware/auth.middleware");

router.put("/", verifyToken, async (req, res) => {
  try {
    await UserController.changeUser(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

module.exports = router;
