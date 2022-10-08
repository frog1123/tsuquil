import type { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import createPostMutation from '@graphql/mutations/createPost';
import { useMutation } from '@apollo/client';
import { AccentedButton } from './AccentedButton';

export const CreatePost: FC = () => {
  let title: string | undefined, content: string | undefined;

  const getPostInput = (): { title: string; content: string } => {
    title = (document.getElementById('title') as HTMLInputElement)?.value;
    content = (document.getElementById('content') as HTMLInputElement)?.value;

    return { title, content };
  };

  const [_submitPost, { loading }] = useMutation(createPostMutation);

  const submitPost = () => {
    if (getPostInput().title.length !== 0) {
      if (getPostInput().title.length >= 100) return;
      if (getPostInput().content.length >= 500) return;

      _submitPost({ variables: { title: getPostInput()?.title, content: getPostInput()?.content } });

      if (typeof window !== 'undefined') {
        (document.getElementById('title') as HTMLInputElement).value = '';
        (document.getElementById('content') as HTMLInputElement).value = '';
      }
    }
  };

  return (
    <div className='tw-w-[100%] dark:tw-bg-vapor-200 md:tw-rounded-[10px] tw-px-[10px]'>
      <div className='tw-grid tw-grid-flow-row tw-gap-[6px] tw-w-[100%] tw-m-auto tw-my-[10px]'>
        <h4 className='dark:tw-text-white'>share something...</h4>
        <TextareaAutosize
          id='title'
          placeholder='title · required · under 100 chars'
          className='tw-bg-vapor-100 tw-rounded-[6px] tw-py-[2px] tw-pl-[4px] tw-pr-[2px] tw-outline-none tw-overflow-x-hidden tw-text-white tw-resize-none'
        />
        <TextareaAutosize
          id='content'
          placeholder='content · under 500 chars'
          minRows={3}
          className='tw-bg-vapor-100 tw-rounded-[6px] tw-py-[2px] tw-pl-[4px] tw-pr-[2px] tw-outline-none tw-overflow-x-hidden tw-text-white tw-resize-none'
        />
        <div className='tw-flex tw-w-[100%]'>
          <AccentedButton text='submit' onClick={() => submitPost()} color='green' loading={loading} className='tw-w-[100px] tw-h-[30px] tw-ml-auto' />
        </div>
      </div>
    </div>
  );
};
