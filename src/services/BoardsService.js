import BoardsRepository from "../repositories/BoardsRepository.js";

const BoardsService = {
  async createBoard(fastify, title, userId) {
    try {
      return await BoardsRepository.createBoard(fastify, title, userId);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async getAllBoards(fastify) {
    try {
      return await BoardsRepository.getAllBoards(fastify);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default BoardsService;
