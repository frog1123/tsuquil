import type { NextPage } from 'next';
import { PostsList } from '@components/PostsList';
import { CreatePost } from '@components/CreatePost';

const Home: NextPage = () => {
  return (
    <>
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
