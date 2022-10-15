import { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import Head from 'next/head';
import { FollowingList } from '@components/FollowingList';
import client from '../../apollo-client';
import postQuery from '@graphql/queries/post';
import { formatTime } from '@utils/formatTime';
import Link from 'next/link';

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
        <div className='tw-h-[max-content] tw-bg-vapor-200 tw-rounded-[10px] tw-p-[4px]'>
          <div className='tw-w-[100%]'>
            <Link href='/'>
              <a>
                <p className='tw-text-gray tw-ml-auto tw-w-[max-content] hover:tw-text-green'>close</p>
              </a>
            </Link>
          </div>
          <div className='tw-w-[100%] tw-grid tw-grid-cols-[max-content_auto]'>
            <p className='tw-text-gray'>posted by {post.author.username}</p>
            <p className='tw-text-gray tw-ml-auto'>posted {formatTime(post.createdAt)}</p>
          </div>
          <div className='tw-grid tw-grid-rows-[max-content_max-content]'>
            <h3 className='dark:tw-text-white'>title: {post.title}</h3>
            <p className='dark:tw-text-white'>content: {post.content}</p>
          </div>
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
