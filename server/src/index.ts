import { join } from 'path';
import 'dotenv/config';
import gradient from 'gradient-string';

import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import express, { Request as req, Response as res } from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

// rest
import rest_hello from './rest/hello';

// graphql
import gql_hello from './graphql/resolvers/hello';

const color = gradient(['#53e0db', '#6aed80']);

(async () => {
  const app = express();
  app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'https://studio.apollographql.com'] }));
  app.use('/rest', rest_hello);

  const schema = loadSchemaSync(join('src', 'graphql', 'schemas', '*.gql'), { loaders: [new GraphQLFileLoader()] });
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: [gql_hello],
    context: ({ req, res }: { req: req; res: res }) => ({ req, res })
  });

  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: ['http://localhost:3000', 'https://studio.apollographql.com']
    }
  });

  app.listen(process.env.PORT ?? 9000, () => console.log(`🌊🍃 server listening on port ${color(process.env.PORT ?? '9000')}`));
})()
  .catch(err => console.log(err))
  .finally(async () => await prisma.$disconnect());
