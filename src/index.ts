require("dotenv").config();
import PoolRequest from "./pool";
import http from "http";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";
import cors from "cors";
import { json } from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloExpress } from "@apollo/server/express4";

import app from "./app";

const typeArrays = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
  typeDefs: typeArrays,
  resolvers: resolversArray,
});

const pool = new PoolRequest();
pool.connect({
  host: process.env.DATABASE_host,
  port: process.env.DATABASE_port
    ? parseInt(process.env.DATABASE_port)
    : undefined,
  database: process.env.DATABASE_database,
  user: process.env.DATABASE_user,
  password: process.env.DATABASE_password,
});

const httpServer = http.createServer(app);

const apolloServer = new ApolloServer({ schema });
async function server() {
  await apolloServer.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    apolloExpress(apolloServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, () => resolve())
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
server();
