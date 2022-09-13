var express = require("express");
const { checkLoggedIn } = require("../controller/authController");
const authController = require("../controller/authController");
var router = express.Router();
const {auth} = require("../middleware/middleware")

const { addUserValidation } = require("../validation/users/validation.schema");
router.get("/",authController.index)

router.get("/login",authController.main)
router.get("/home",auth,authController.home)

router.post("/login",authController.login)
router.get('/logout',authController.logout)
router.post('/register',addUserValidation,authController.createUser)



module.exports = router;
