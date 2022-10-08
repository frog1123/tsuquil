import { Post } from '@prisma/client';
import { prisma } from '../../index';

export default {
  Query: {
    posts: async (_: any, { newest }: { newest: boolean }) => {
      let posts: Post[];
      posts = await prisma.post.findMany({
        orderBy: {
          createdAt: newest ? 'desc' : 'asc' // descending or ascending order
        }
      });

      const postsWithAuthors = posts.map(async (post: Post) => {
        const author = await prisma.user.findUnique({ where: { id: post.authorId } });
        return {
          ...post,
          author: {
            id: post.authorId,
            createdAt: author!.createdAt,
            updatedAt: author!.updatedAt,
            username: author!.username
          }
        };
      });

      return postsWithAuthors;
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
            authorId: '6342010e8e8d983def26ef72'
          }
        })
        .catch(err => {
          throw new Error(err);
        });

      return 'success';
    }
  }
};
