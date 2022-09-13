var express = require("express");
const userController = require("../controller/userController");
const {auth} = require("../middleware/middleware")
var router = express.Router();
router.get("/add",auth,userController.addVisitors)
router.get("/",auth,userController.getVisitors);
router.get("/:id",auth,userController.getVisitorsById);
router.post("/create",auth,userController.createVisitors);
router.get("/edit/:id",auth,userController.editVisitorsById)
router.post("/update",auth,userController.updateVisitorsById)
router.get("/delete/:id",auth,userController.deleteVisitors)
router.get("/history/:id",auth,userController.visitorHistoryById)


module.exports = router;