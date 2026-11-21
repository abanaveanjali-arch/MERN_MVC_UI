const express = require("express");
const {
  displayData,
  addForm,
  addData,
} = require("../controller/empController");

const router = express.Router();
router.get("/", displayData);
router.get("/addForm", addForm);
router.post("/add", addData);

module.exports = router;
