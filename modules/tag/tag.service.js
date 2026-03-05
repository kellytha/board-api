const prisma = require("../../config/prisma");

exports.assignTag = async (cardId, tagId) => {
  return prisma.card.update({
    where: { id: cardId },
    data: {
      tags: {
        connect: { id: tagId }
      }
    }
  });
};