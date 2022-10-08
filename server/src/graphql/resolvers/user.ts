import { prisma } from '../../index';

export default {
  Query: {
    user: async (_: any, { id }: { id: string }) => {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      });
      if (!user) throw new Error('user not found');

      return user;
    }
  },
  Mutation: {
    registerUser: async (_: any, { username }: { username: string }) => {
      console.log('registeer user');

      await prisma.user
        .create({
          data: {
            username,
            tag: 1123
          }
        })
        .catch(err => {
          throw new Error(err);
        });

      return 'success';
    }
  }
};
