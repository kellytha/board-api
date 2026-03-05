const { ApiError } = require('../../core/errors');
const { httpStatus } = require('../../core/constants');
const userRepository = require('./user.repository');

class UserService {
  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    return user;
  }

  async getAllUsers() {
    return await userRepository.getAllUsers();
  }

  async updateUser(id, data) {
    const existing = await userRepository.findById(id);
    if (!existing) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    return await userRepository.updateUser(id, data);
  }

  async deleteUser(id) {
    const existing = await userRepository.findById(id);
    if (!existing) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    return await userRepository.deleteUser(id);
  }
}

module.exports = new UserService();