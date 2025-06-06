const express = require("express");
const router = express.Router();
const pages = require("../controller/controller.js");

router.route("/").get(pages.home);
router.route("/service").get(pages.service);
router.route("/craftmen").get(pages.craftmen);

module.exports = router;