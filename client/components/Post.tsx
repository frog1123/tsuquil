import type { FC } from 'react';
import { formatTime } from '@utils/formatTime';

export interface PostProps {
  id: string;
  title: string;
  content?: string;
  createdAt: string;
  author: {
    username: string;
    createdAt: string;
  };
}

export const Post: FC<PostProps> = ({ title, content, createdAt, author }) => {
  return (
    <div className='dark:tw-bg-vapor-200 md:tw-rounded-[10px] tw-w-[100%] tw-h-[max-content] tw-p-[4px] tw-break-words tw-overflow-hidden'>
      <div className='tw-w-[100%] tw-grid tw-grid-cols-[max-content_auto]'>
        <p className='tw-text-gray'>posted by {author.username}</p>
        <p className='tw-text-gray tw-ml-auto'>posted {formatTime(createdAt)}</p>
      </div>
      <h4 className='dark:tw-text-white'>{title}</h4>
      <p className='dark:tw-text-white tw-whitespace-pre'>{content}</p>
    </div>
  );
};
