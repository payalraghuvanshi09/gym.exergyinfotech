var express = require("express");
var router = express.Router();
const userController = require('../controller/userController')
const {addattendanceValidation } = require("../validation/users/attandance.v.schema");
 const {auth} = require("../middleware/middleware")


router.get("/",auth,userController.getAttendance )

router.get("/add",auth,userController.addAttendance)
router.post("/create",auth,addattendanceValidation,userController.createAttendance)
router.get("/edit/:id",auth,userController.editAttendanceById)
router.post("/update",auth,userController.updateAttendanceById)
router.get("/delete/:id",auth,userController.deleteAttendance)
// router.get("/subscription", (req, res, next) => {

  module.exports = router;