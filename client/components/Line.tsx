import type { FC } from 'react';

interface LineProps {
  className?: string;
}

export const Line: FC<LineProps> = ({ className }) => {
  return <div className={`${className ? className : ''} tw-w-[100%] tw-bg-gray tw-h-[2px] tw-rounded-[6px]`}></div>;
};
