import type { NextPage } from 'next';
import { PostsList } from '@components/PostsList';
import { CreatePost } from '@components/CreatePost';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tsuquil</title>
      </Head>
      <div className='tw-hidden md:tw-grid tw-grid-cols-[20%_60%_20%] tw-mt-[20px]'>
        <div></div>
        <div className='tw-grid tw-grid-flow-row tw-gap-[8px]'>
          <CreatePost />
          <PostsList />
        </div>
        <div></div>
      </div>
      <div className='md:tw-hidden tw-mt-[20px]'>
        <div className='tw-grid tw-grid-flow-row tw-gap-[8px]'>
          <CreatePost />
          <PostsList />
        </div>
      </div>
    </>
  );
};

export default Home;
