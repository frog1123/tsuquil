import type { FC } from 'react';
import { useQuery } from '@apollo/client';
import postsQuery from '@graphql/queries/posts';
import { Post, PostProps } from '@components/Post';

export const PostsList: FC = () => {
  const { error, loading, data } = useQuery(postsQuery);

  if (loading || typeof data === 'undefined') {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>something went wrong :/</h1>
      </div>
    );
  }

  return (
    <div className='tw-grid tw-gap-[8px]'>
      {data.posts.map((post: PostProps) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};
