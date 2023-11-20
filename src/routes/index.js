const express = require("express");
const router = express.Router();

const UserRoutes = require("./user")
const RoomRoutes = require("./Room")

router.use("/user", UserRoutes)
router.use("/rooms",RoomRoutes)


module.exports = router;