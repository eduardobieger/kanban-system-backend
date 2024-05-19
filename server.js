import Fastify from "fastify";
import cors from "@fastify/cors";
import postgres from "@fastify/postgres";
import jwt from "@fastify/jwt";
import cookie from "@fastify/cookie";
import {
  databaseUrl,
  databasePort,
  databaseName,
  databaseUser,
  databasePassword,
} from "./config/env.js";
import users from "./src/routes/users.js";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

fastify.register(cors, {
  origin: true,
  methods: "GET, PUT, POST, DELETE",
  allowedHeaders: "Content-Type",
  credentials: true,
});

fastify.register(postgres, {
  connectionString: `postgres://${databaseUser}:${databasePassword}@${databaseUrl}:${databasePort}/${databaseName}`,
});

fastify.register(jwt, {
  secret: "supersecret",
});

fastify.register(cookie, {
  secret: "supersecret",
  hook: "preHandler",
});

fastify.register(
  async function (apiRoutes) {
    apiRoutes.register(users, { prefix: "/users" });
  },
  { prefix: "/api" }
);

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
