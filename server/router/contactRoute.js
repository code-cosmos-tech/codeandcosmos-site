const contact = require("../controller/contact-controller.js");
const express = require("express");
const contactRouter = express.Router();
const contactSchema = require("../zod-models/model.js");
const validate = require("../middlewares/validator.js");

contactRouter.route("/contact").get((req, res) => {
    res.send("This is contact page.");
}).post(validate(contactSchema), contact);

module.exports = contactRouter;