import type { NextPage } from 'next';
import { PostsList } from '@components/PostsList';
import { CreatePost } from '@components/CreatePost';
import Head from 'next/head';
import { Navbar } from '@components/Navbar';
import { FollowingList } from '@components/FollowingList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tsuquil</title>
      </Head>
      <Navbar />
      <div className='tw-hidden md:tw-px-[20px] md:tw-grid tw-grid-cols-[20%_50%_20%] tw-gap-[5%] tw-w-[100%] tw-mt-[60px] tw-pb-[60px]'>
        <div>
          <FollowingList />
        </div>
        <div className='tw-grid tw-grid-flow-row tw-gap-[8px]'>
          <CreatePost />
          <PostsList />
        </div>
        <div></div>
      </div>
      <div className='md:tw-hidden tw-mt-[60px] tw-pb-[60px]'>
        <div className='tw-grid tw-grid-flow-row tw-gap-[8px]'>
          <CreatePost />
          <PostsList />
        </div>
      </div>
    </>
  );
};

export default Home;
