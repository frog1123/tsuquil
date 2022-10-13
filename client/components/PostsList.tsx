import type { FC } from 'react';
import { useQuery } from '@apollo/client';
import postsQuery from '@graphql/queries/posts';
import { Post, PostProps } from '@components/Post';
import Image from 'next/image';
import squares_loading from '@public/squares-loading.svg';

export const PostsList: FC = () => {
  const { error, loading, data } = useQuery(postsQuery, { variables: { newest: true } });
  console.log(data);

  if (loading || typeof data === 'undefined') {
    return (
      <main>
        <div className='tw-w-[40px] tw-h-[40px] tw-m-auto'>
          <Image src={squares_loading} layout='responsive' />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h3 className='dark:tw-text-white tw-m-auto tw-w-[max-content]'>something went wrong :/</h3>
      </main>
    );
  }

  if (data.posts.length === 0) {
    return (
      <main>
        <h3 className='dark:tw-text-white tw-m-auto tw-w-[max-content]'>no posts :(</h3>
      </main>
    );
  }

  return (
    <main className='tw-grid tw-gap-[4px] md:tw-gap-[8px]'>
      {data.posts.map((post: PostProps) => (
        <Post {...post} key={post.id} />
      ))}
    </main>
  );
};
