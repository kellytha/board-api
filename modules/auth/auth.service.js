const prisma = require("../../config/prisma");
const bcrypt = require("bcryptjs");
const AppError = require("../../core/errors/AppError");
const jwt = require("../../core/utils/jwt");

exports.register = async (data) => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) throw new AppError("Email already exists", 400);

  const hashed = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed,
    },
  });

  const token = jwt.generateToken({ id: user.id });

  return { user, token };
};

exports.login = async (data) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) throw new AppError("Invalid credentials", 401);

  const match = await bcrypt.compare(data.password, user.password);
  if (!match) throw new AppError("Invalid credentials", 401);

  const token = jwt.generateToken({ id: user.id });

  return { user, token };
};