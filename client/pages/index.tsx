import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { PostsList } from '@components/PostsList';

const Home: NextPage = () => {
  return (
    <div className='tw-grid tw-grid-cols-[20%_60%_20%]'>
      <div></div>
      <PostsList />
      <div></div>
    </div>
  );
};

export default Home;
