import type { FC } from 'react';

export interface PostProps {
  title: string;
  content?: string;
}

export const Post: FC<PostProps> = ({ title, content }) => {
  return (
    <div className='dark:tw-bg-vapor-200 tw-rounded-[10px] tw-w-[100%] tw-h-[max-content] tw-p-[4px]'>
      <h3 className='dark:tw-text-white'>{title}</h3>
      <p className='dark:tw-text-white'>{content}</p>
    </div>
  );
};
