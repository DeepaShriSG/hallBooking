const express = require("express")
const RoomController = require("../controller/Room")

const router = express.Router();


router.post("/",RoomController.createRooms);
router.get("/", RoomController.getAllRooms);


module.exports = router;