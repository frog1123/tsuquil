import { prisma } from '../../index';

export default {
  Query: {
    posts: async (_: any, { newest }: { newest: boolean }) => {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: newest ? 'desc' : 'asc' // descending or ascending order
        }
      });

      return posts;
    }
  },
  Mutation: {
    createPost: async (_: any, { title, content }: { title: string; content: string }) => {
      if (title.length >= 100) throw new Error('title over 100 characters');
      if (content.length >= 500) throw new Error('content over 500 characters');

      await prisma.post
        .create({
          data: {
            title,
            content,
            authorId: '6341bcf2f39740b552f213b4'
          }
        })
        .catch(err => {
          throw new Error(err);
        });

      return 'success';
    }
  }
};
