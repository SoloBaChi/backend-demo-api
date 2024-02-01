
const express = require("express");

const router = express.Router();

const { createOne,getAllUsers }  = require( "../controllers/user.controller");


router.post("/send-email",createOne);
router.get("/all-users",getAllUsers)

module.exports = router;

