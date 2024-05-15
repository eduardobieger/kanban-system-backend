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

fastify.register(jwt, {
  secret: "supersecret",
});

fastify.register(cookie, {
  secret: "supersecret",
  hook: "preHandler",
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
