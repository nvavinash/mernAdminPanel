const express = require('express');
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller");
const authControllers= require("../controllers/auth-controller")
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware"); 

// router.get("/",(req,res) =>{
//     res.status(200).send("Welcome to Admin Panel using Router page");
// });

router.route("/").get(authControllers.home);

router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(validate(loginSchema),authControllers.login);
module.exports = router;

