import { NextPage } from 'next';
import { Navbar } from '@components/Navbar';

const Post: NextPage<{ post: any }> = ({ post }) => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Post;
