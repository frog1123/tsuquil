import type { FC } from 'react';
import Image from 'next/image';
import dots_loading from '@public/dots-loading.svg';

interface AccentedButtonProps {
  color: 'green' | 'blue';
  className: string;
  onClick: () => void;
  text: string;
  disabled?: boolean;
  loading: boolean;
}

export const AccentedButton: FC<AccentedButtonProps> = ({ color, className, onClick, text, disabled = false, loading }) => {
  return (
    <button
      onClick={() => {
        if (!disabled && !loading) onClick();
      }}
      className={`${className} ${disabled ? (color === 'green' ? 'tw-bg-greendark' : 'tw-bg-bluedark') : color === 'green' ? 'tw-bg-green' : 'tw-bg-blue'} ${
        color === 'green' ? 'hover:tw-bg-greendark' : 'hover:tw-bg-bluedark'
      } tw-duration-300 ${disabled ? 'tw-cursor-default' : 'tw-cursor-pointer'} tw-rounded-[8px]`}
    >
      {loading ? <Image src={dots_loading} className='tw-my-auto tw-mx-auto !tw-mt-[5px]' /> : <p className={`${disabled ? 'tw-text-lightgray tw-opacity-50' : 'tw-text-white'}`}>{text}</p>}
    </button>
  );
};
