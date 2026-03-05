const prisma = require("../../config/prisma");

exports.createBoard = async (userId, data) => {
  return prisma.board.create({
    data: {
      title: data.title,
      userId
    }
  });
};

exports.getBoards = async (userId) => {
  return prisma.board.findMany({
    where: { userId }
  });
};

exports.updateBoard = async (id, data) => {
  return prisma.board.update({
    where: { id },
    data
  });
};

exports.deleteBoard = async (id) => {
  return prisma.board.delete({
    where: { id }
  });
};