const router = require("express").Router();
const controller = require("./auth.controller");
const validate = require("../../core/middlewares/validation.middleware");
const { registerSchema, loginSchema } = require("./auth.schema");

router.post("/register", validate(registerSchema), controller.register);
router.post("/login", validate(loginSchema), controller.login);

module.exports = router;