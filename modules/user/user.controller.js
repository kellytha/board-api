const userService = require('./user.service');
const { httpStatus } = require('../../core/constants');

class UserController {
  async getMe(req, res, next) {
    try {
      const user = await userService.getUserById(req.user.id);
      res.status(httpStatus.OK).json({ user });
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(httpStatus.OK).json({ user });
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(httpStatus.OK).json({ users });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const updated = await userService.updateUser(req.params.id, req.body);
      res.status(httpStatus.OK).json({ user: updated });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      await userService.deleteUser(req.params.id);
      res
        .status(httpStatus.OK)
        .json({ message: 'User deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();