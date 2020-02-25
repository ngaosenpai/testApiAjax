const router = require("express").Router()

const controller = require("../controllers/login.controller.js")
const validate = require("../middlewares/validate.login.js")

router.get("/", controller.index)
router.post("/", validate.postLogin, controller.post)

module.exports = router