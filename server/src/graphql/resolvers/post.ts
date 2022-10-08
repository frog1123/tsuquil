import { prisma } from '../../index';

export default {
  Query: {
    posts: async (_: any) => {
      const posts = await prisma.post.findMany({});

      console.log(posts);

      return posts;
    }
  },
  Mutation: {
    createPost: async (_: any, { title, content }: { title: string; content: string }) => {
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
