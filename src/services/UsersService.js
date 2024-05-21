import UsersRepository from "../repositories/UsersRepository.js";
import { bcryptSaltRounds } from "../../config/env.js";
import bcrypt from "bcrypt";

const UserService = {
  async createUser(fastify, email, username, password) {
    try {
      const salt = await bcrypt.genSalt(parseInt(bcryptSaltRounds));
      const hashedPassword = await bcrypt.hash(password, salt);

      return await UsersRepository.createUser(
        fastify,
        email,
        username,
        hashedPassword
      );
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async getAllUsers(fastify) {
    try {
      return await UsersRepository.getAllUsers(fastify);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async updateUsername(fastify, username, email) {
    try {
      return await UsersRepository.updateUsername(fastify, username, email);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default UserService;
