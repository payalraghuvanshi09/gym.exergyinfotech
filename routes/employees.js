var express = require("express");
const userController = require("../controller/userController");
var router = express.Router();
// const {addemployeeValidation  } = require("../validation/users/employee.v.schema");
// const userController = require('../controller/userController')
const {auth} = require("../middleware/middleware")

router.get("/",auth,userController.getEmployees);
// //  Customer table

router.get("/add",auth,userController.addEmployees);
router.post("/create",auth,userController.createEmployees);
router.get("/edit/:id",auth,userController.editEmployeesById)
router.post("/update",auth,userController.updateEmployeesById)
router.get("/delete/:id",auth,userController.deleteEmployees)

// router.post("/create",userController.)


// // employee table
// router.get("/bank-detail", (req, res, next) => {
//   // console.log("res=====>", res);
//   // console.log("res=====>", res.data);
//   res.render("pages/employee/employee_bank_detail", { title: "Express", data: res.data });
// });
// router.get("/salary", (req, res, next) => {
//   // console.log("res=====>", res);
//   // console.log("res=====>", res.data);
//   res.render("pages/employee/salary", { title: "Express", data: res.data });
// });


module.exports = router;
