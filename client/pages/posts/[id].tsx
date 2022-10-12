import { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import Head from 'next/head';
import { FollowingList } from '@components/FollowingList';
import client from '../../apollo-client';
import postQuery from '@graphql/queries/post';

interface Post {
  title: string;
  content?: string;
  createdAt: string;
  author: {
    username: string;
  };
}

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Navbar />
      <div className='tw-hidden md:tw-px-[20px] md:tw-grid tw-grid-cols-[20%_50%_20%] tw-gap-[5%] tw-w-[100%] tw-mt-[60px] tw-pb-[60px]'>
        <div>
          <FollowingList />
        </div>
        <div>
          <h1>title: {post.title}</h1>
          <h1>content: {post.content}</h1>
          <h1>author: {post.author.username}</h1>
          <h1>createdAt {post.createdAt}</h1>
        </div>
      </div>
      <div className='md:tw-hidden tw-mt-[60px] tw-pb-[60px]'>
        <div>
          <h1>title: {post.title}</h1>
          <h1>content: {post.content}</h1>
          <h1>author: {post.author.username}</h1>
          <h1>createdAt {post.createdAt}</h1>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const { data } = await client.query({ query: postQuery, variables: { postId: params.id } });

  return { props: { post: data.post } };
};

export default Post;
