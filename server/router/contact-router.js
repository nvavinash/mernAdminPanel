const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
// const conSchema = require("../validator/auth-validator")
// const validate = require("../middlewares/validate-middleware")

router.route("/contact").post(contactForm);
module.exports = router;