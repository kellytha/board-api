const prisma = require("../../config/database");

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