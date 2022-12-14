import { Post } from '@prisma/client';
import { prisma } from '../../index';

export default {
  Query: {
    posts: async (_: any, { newest, offset, limit }: { newest: boolean; offset: number; limit: number }) => {
      let posts: Post[];
      posts = await prisma.post.findMany({
        orderBy: {
          createdAt: newest ? 'desc' : 'asc' // descending or ascending order
        },
        skip: offset,
        take: limit
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
    },
    post: async (_: any, { id }: { id: string }) => {
      const post = await prisma.post.findUnique({
        where: {
          id
        }
      });

      if (!post) throw new Error('post not found');

      const postAuthor = await prisma.user.findUnique({
        where: {
          id: post.authorId
        }
      });

      return {
        ...post,
        author: postAuthor
      };
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
            authorId: '6342010e8e8d983def26ef72' // TODO: change later when add users
          }
        })
        .catch(err => {
          throw new Error(err);
        });

      return 'success';
    }
  }
};
