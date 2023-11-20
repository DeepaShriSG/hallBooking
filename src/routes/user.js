const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");

router.post("/", UserController.bookRooms);
router.get("/",UserController.getAllRoomsData);
router.get("/allcustomers",UserController.getAlluserData)
router.get("/:customer_name",UserController.getCustomerData)

module.exports = router;
