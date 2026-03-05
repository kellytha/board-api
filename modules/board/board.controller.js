const boardService = require("./board.service");

exports.createBoard = async (req, res) => {
  const board = await boardService.createBoard(req.user.id, req.body);

  res.status(201).json({
    success: true,
    data: board
  });
};

exports.getBoards = async (req, res) => {
  const boards = await boardService.getBoards(req.user.id);

  res.json({
    success: true,
    data: boards
  });
};

exports.updateBoard = async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body);

  res.json({
    success: true,
    data: board
  });
};

exports.deleteBoard = async (req, res) => {
  await boardService.deleteBoard(req.params.id);

  res.json({
    success: true,
    message: "Board deleted"
  });
};