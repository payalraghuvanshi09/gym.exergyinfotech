var express = require("express");
var router = express.Router();
const userController = require('../controller/userController')
const {auth} = require("../middleware/middleware")

const {  subscriptionValidation } = require("../validation/users/subscription.v.schema");


router.get("/",auth,userController.getSubscriptions )

router.get("/add",auth,userController.addSubscriptions)
router.post("/create",auth,subscriptionValidation,userController.createSubscriptions)
// router.get("/edit:/id",userController.editSubscriptions)
router.get("/edit/:id",auth,userController.editSubscriptionsById)
router.post("/update",auth,userController.updateSubscriptionsById)
router.get("/delete/:id",auth,userController.deleteSubscriptions)



  module.exports = router;