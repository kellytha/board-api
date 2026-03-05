const asyncHandler = require("../../core/middlewares/asyncHandler");
const AuthService = require("./auth.service");
const { ok, created } = require("../../core/utils/response");

exports.register = asyncHandler(async (req, res) => {
  const result = await AuthService.register(req.body);
  return created(res, result);
});

exports.login = asyncHandler(async (req, res) => {
  const result = await AuthService.login(req.body);
  return ok(res, result);
});