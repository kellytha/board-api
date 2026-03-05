const router = require("express").Router();

// module routes
const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/user/user.routes");
const boardRoutes = require("../modules/board/board.routes");
const columnRoutes = require("../modules/column/column.routes");
const cardRoutes = require("../modules/card/card.routes");
const tagRoutes = require("../modules/tag/tag.routes");
const commentRoutes = require("../modules/comment/comment.routes");

// Register routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/boards", boardRoutes);
router.use("/columns", columnRoutes);
router.use("/cards", cardRoutes);
router.use("/tags", tagRoutes);
router.use("/comments", commentRoutes);

module.exports = router;