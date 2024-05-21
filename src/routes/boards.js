import BoardsController from "../controllers/BoardsController.js";

export default async function boards(fastify) {
  fastify.post("/createBoard", async (request, reply) => {
    try {
      await BoardsController.createBoard(fastify, request);
      reply.code(201).send({ message: "Board created" });
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  });

  fastify.get("/getAllBoards", async (request, reply) => {
    try {
      const boards = await BoardsController.getAllBoards(fastify);
      reply.code(200).send(boards);
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  });
}
