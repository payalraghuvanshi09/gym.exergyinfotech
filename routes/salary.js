var express = require("express");
var router = express.Router();
const userController = require('../controller/userController')
const {auth} = require("../middleware/middleware")
// salaryValidation
// const {salaryValidation } = require("../validation/users/salary.v.schema");


router.get("/",auth,userController.getSalary )

router.get("/add",auth,userController.addSalary)
router.post("/create",auth,userController.createSalary)
router.get("/edit/:id",auth,userController.editSalaryById)
router.post("/update",auth,userController.updateSalaryById)
router.get("/delete/:id",auth,userController.deleteSalary)

// router.get("/subscription", (req, res, next) => {

  module.exports = router;