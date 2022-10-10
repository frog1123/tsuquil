import type { FC } from 'react';
import { Line } from '@components/Line';

// mock data
const users = [
  { pfp: 'https://pm1.narvii.com/6750/42a66778d4a8d5fb04e38d35930007221a1fa885v2_hq.jpg', username: 'joey' },
  { pfp: 'https://i.ytimg.com/vi/IYA3ZygE4gg/maxresdefault.jpg', username: 'ben' }
];

export const FollowingList: FC = () => {
  return (
    <div className='tw-w-[100%] dark:tw-bg-vapor-200 tw-rounded-[10px] tw-px-[4px] tw-pb-[10px]'>
      <h3 className='gradient-text'>following</h3>
      <Line />
      <div className='tw-grid tw-grid-flow-row tw-gap-[6px] tw-mt-[10px]'>
        {users.map((user, index) => (
          <div className='tw-grid tw-grid-cols-[max-content_max-content] tw-gap-[6px] tw-place-items-center tw-overflow-hidden' key={index}>
            <img src={user.pfp} className='tw-h-[40px] tw-aspect-square tw-overflow-hidden tw-rounded-[50%]' />
            <h4 className='dark:tw-text-white'>{user.username}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
