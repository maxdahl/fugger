const express = require("express");

const router = express.Router();

const { AnalysisController } = require("../controllers");
const { verifyToken } = require("../middleware/auth.middleware");

router.get("/", verifyToken, async (req, res) => {
  try {
    await AnalysisController.getAnalysisData(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

router.get("/budgets", verifyToken, async (req, res) => {
  try {
    await AnalysisController.getBudgetData(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    await AnalysisController.postAnalysisData(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

module.exports = router;
