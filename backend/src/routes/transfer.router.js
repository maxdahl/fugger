const express = require("express");

const router = express.Router();

const { TransferController } = require("../controllers");
const { verifyToken } = require("../middleware/auth.middleware");

// router.get("/", verifyToken, (req, res) => {
//   TransferController.getTransfers(req, res);
// });

router.put("/:transferId", verifyToken, async (req, res) => {
  try {
    await TransferController.updateTransfer(req, res);
  } catch (err) {
    res.status(500).send("500-error");
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    await TransferController.createTransfers(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).send("500-error");
  }
});
module.exports = router;
