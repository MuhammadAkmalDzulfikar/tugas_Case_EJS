const express = require("express");

const {getAllMenu,getMenuByNo,insertMenu,updateMenu,deleteMenu,} = require("../controller.js/menuController");

const router = express.Router();

router.get("/menu",getAllMenu)
router.get("/menu/:no",getMenuByNo);
router.post("/tambahMenu",insertMenu);
router.put("/updateMenu/:no",updateMenu);
router.delete("/deleteMenu/:no",deleteMenu);

module.exports = router;