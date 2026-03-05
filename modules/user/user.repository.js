const prisma = require('../../core/config/prisma');

class UserRepository {
  async findById(id) {
    return prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
  }

  async createUser(data) {
    return prisma.user.create({ data });
  }

  async getAllUsers() {
    return prisma.user.findMany();
  }

  async updateUser(id, data) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id) {
    return prisma.user.delete({
      where: { id },
    });
  }
}

module.exports = new UserRepository();