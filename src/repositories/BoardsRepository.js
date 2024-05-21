const BoardsRepository = {
  async createBoard(fastify, title, userId) {
    try {
      await fastify.pg.query(
        "INSERT INTO boards (title, user_id) VALUES ($1, $2)",
        [title, userId]
      );
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async getAllBoards(fastify) {
    try {
      const { rows } = await fastify.pg.query("SELECT * FROM boards");

      return rows;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default BoardsRepository;
