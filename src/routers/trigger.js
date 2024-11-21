const express = require("express");
const router = express.Router();

const triggerController = require("../app/controllers/TriggerController");

router.get("/", triggerController.triggerDate);

module.exports = router;
