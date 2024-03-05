const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const aboutController = require("../controllers/aboutController");

router.get("/", customerController.homepage);
router.get("/add", customerController.addCustomer);
router.post("/add", customerController.postCustomer);
router.get("/view/:id", customerController.view);
router.get("/edit/:id", customerController.edit);
router.post("/edit/:id", customerController.editPost);
router.post("/delete/:id", customerController.deleteCustomer);

router.get("/about", aboutController.about);

module.exports = router;
