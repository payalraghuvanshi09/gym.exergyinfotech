var express = require("express");
const userController = require("../controller/userController");
const {auth} = require("../middleware/middleware")
var router = express.Router();

router.get("/",auth,userController.getFollowup )
router.get("/add",auth,userController.addFollowup )
router.post("/create",auth,userController.createFollowup )
// router.get("/history/:id",auth,userController.visitorHistory)

module.exports = router;