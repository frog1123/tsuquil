import { prisma } from '../../index';

export default {
  Query: {
    hello: async (_: any) => {
      return 'hello from graphql';
    }
  },
  Mutation: {
    addHello: async (_: any, { content }: { content: string }) => {
      await prisma.hello.create({
        data: {
          content: `hello ${content}`
        }
      });

      return 'success';
    }
  }
};
