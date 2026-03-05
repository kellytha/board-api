const prisma = require("../../config/prisma");

exports.createCard = async (data) => {
  return prisma.card.create({
    data
  });
};

exports.getCardsByColumn = async (columnId) => {
  return prisma.card.findMany({
    where: { columnId },
    include: { tags: true }
  });
};

exports.updateCard = async (id, data) => {
  return prisma.card.update({
    where: { id },
    data
  });
};

exports.deleteCard = async (id) => {
  return prisma.card.delete({
    where: { id }
  });
};