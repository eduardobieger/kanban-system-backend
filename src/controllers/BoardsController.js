import BoardsService from "../services/BoardsService.js";

const BoardsController = {
  async createBoard(fastify, request) {
    const { title, userId } = request.body;

    try {
      return await BoardsService.createBoard(fastify, title, userId);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async getAllBoards(fastify) {
    try {
      return await BoardsService.getAllBoards(fastify);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default BoardsController;
