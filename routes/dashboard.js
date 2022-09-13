var express = require("express");
const userController = require("../controller/userController");
var router = express.Router();
const {auth} = require("../middleware/middleware")
// const userController = require('../controller/userController')

router.get("/",auth,userController.dashboard);
// //  Customer table



module.exports = router;
