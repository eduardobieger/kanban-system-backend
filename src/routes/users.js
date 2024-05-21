import UsersController from "../controllers/UsersController.js";

export default async function users(fastify) {
  fastify.post("/createUser", async (request, reply) => {
    try {
      await UsersController.createUser(fastify, request);
      reply.code(201).send({ message: "User created" });
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  });

  fastify.get("/getAllUsers", async (request, reply) => {
    try {
      const users = await UsersController.getAllUsers(fastify);
      reply.code(200).send(users);
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  });

  fastify.put("/updateUsername", async (request, reply) => {
    try {
      await UsersController.udpateUsername(fastify, request);
      reply.code(200).send({ message: "User updated" });
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  });
}
