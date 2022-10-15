import { FC, useContext, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import postsQuery from '@graphql/queries/posts';
import { Post, PostProps } from '@components/Post';
import Image from 'next/image';
import squares_loading from '@public/squares-loading.svg';
import UserContext from 'UserContext';

export const PostsList: FC = () => {
  const limit = useRef(10);
  const [offset, setOffset] = useState(0);
  const { value, setValue } = useContext(UserContext);
  const { error, loading, data, refetch, fetchMore } = useQuery(postsQuery, { variables: { newest: true, limit: limit.current, offset: 0 }, fetchPolicy: 'cache-and-network' });

  const fetchMorePosts = () => {
    document.getElementById('incremental-load')?.classList.remove('tw-hidden');
    console.log('run');

    return fetchMore({
      variables: {
        limit: limit.current,
        offset: offset + limit.current
      },
      updateQuery: (prev, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        if (fetchMoreResult.posts.length !== 0) setOffset(offset + limit.current);
        return Object.assign({}, prev, {
          posts: [...prev.posts, ...fetchMoreResult.posts]
        });
      }
    });
  };

  if (value.reloadPostsList) refetch({ offset: 0 }).then(() => setValue({ reloadPostsList: false }));
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      if (bottom) fetchMorePosts();
    };
  }

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
      <div id='incremental-load' className='tw-hidden tw-w-[100%] tw-h-[40px]'>
        <div className='tw-w-[40px] tw-h-[40px] tw-m-auto'>
          <Image src={squares_loading} layout='responsive' />
        </div>
      </div>
    </main>
  );
};
