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
import gql_post from './graphql/resolvers/post';
import gql_user from './graphql/resolvers/user';

const color = gradient(['#53e0db', '#6aed80']);
const devOrigins = ['http://localhost:3000', 'https://studio.apollographql.com'];
const prodOrigins = ['https://tsuquil.cloud', 'https://staging.tsuquil.cloud'];

(async () => {
  const app = express();
  app.use(cors({ credentials: true, origin: process.env.NODE_ENV === 'production' ? prodOrigins : devOrigins }));
  app.use('/rest', rest_hello);

  const schema = loadSchemaSync(join('src', 'graphql', 'schemas', '*.gql'), { loaders: [new GraphQLFileLoader()] });
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: [gql_post, gql_user],
    context: ({ req, res }: { req: req; res: res }) => ({ req, res })
  });

  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: process.env.NODE_ENV === 'production' ? prodOrigins : devOrigins
    }
  });

  app.listen(process.env.PORT ?? 9000, () => console.log(`🌊🍃 server listening on port ${color(process.env.PORT ?? '9000')}`));
})()
  .catch(err => console.log(err))
  .finally(async () => await prisma.$disconnect());
