var express = require("express");
const userController = require("../controller/userController");
var router = express.Router();
// const {addemployeeValidation  } = require("../validation/users/employee.v.schema");
const {auth} = require("../middleware/middleware")


router.get("/",auth,userController.getCustomers )
//  Customer table
router.get("/add",auth,userController.addCustomers)
router.post("/create",auth,userController.createCustomers)
router.get("/edit/:id",auth,userController.editCustomersById)
router.post("/update",auth,userController.updateCustomersById)
router.get("/delete/:id",auth,userController.deleteCustomers)



module.exports = router;
