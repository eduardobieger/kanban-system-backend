import UserService from "../services/UsersService.js";

const UsersController = {
  async createUser(fastify, request) {
    const { email, username, password } = request.body;

    try {
      return await UserService.createUser(fastify, email, username, password);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async getAllUsers(fastify) {
    try {
      return await UserService.getAllUsers(fastify);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default UsersController;
