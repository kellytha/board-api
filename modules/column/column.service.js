const prisma = require("../../config/prisma");

exports.createColumn = async (data) => {
  return prisma.column.create({
    data
  });
};

exports.updateColumn = async (id, data) => {
  return prisma.column.update({
    where: { id },
    data
  });
};

exports.deleteColumn = async (id) => {
  return prisma.column.delete({
    where: { id }
  });
};