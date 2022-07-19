const express = require("express");

const router = express.Router();

const { BudgetController } = require("../controllers");
const { verifyToken } = require("../middleware/auth.middleware");

// router.get("/", verifyToken, (req, res) => {
//   BudgetController.getBudgets(req, res);
// });

router.put("/:budgetId", verifyToken, async (req, res) => {
  try {
    await BudgetController.updateBudget(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    await BudgetController.createBudget(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

module.exports = router;
