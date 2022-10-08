import type { FC } from 'react';

export interface PostProps {
  id: string;
  title: string;
  content?: string;
}

export const Post: FC<PostProps> = ({ title, content }) => {
  return (
    <div className='dark:tw-bg-vapor-200 md:tw-rounded-[10px] tw-w-[100%] tw-h-[max-content] tw-p-[4px] tw-break-words tw-overflow-hidden'>
      <h4 className='dark:tw-text-white'>{title}</h4>
      <p className='dark:tw-text-white tw-whitespace-pre'>{content}</p>
    </div>
  );
};
