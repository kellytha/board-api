const router = require("express").Router();

const controller = require("./board.controller");
const auth = require("../../core/middlewares/authMiddleware");
const asyncHandler = require("../../core/middlewares/asyncHandler");

router.post("/", auth, asyncHandler(controller.createBoard));
router.get("/", auth, asyncHandler(controller.getBoards));
router.patch("/:id", auth, asyncHandler(controller.updateBoard));
router.delete("/:id", auth, asyncHandler(controller.deleteBoard));

module.exports = router;