import Image from 'next/image';
import type { FC } from 'react';
import logo from '@public/logo.min.svg';
import Link from 'next/link';
import styles from '@styles/Navbar.module.scss';

export const Navbar: FC = () => {
  return (
    <div className='tw-fixed tw-w-[100%] tw-top-0 tw-z-10 dark:tw-bg-vapor-200 tw-h-[45px] tw-border-[#00000020] tw-border-b-2'>
      <div className='tw-w-[100%] tw-h-[100%] tw-grid tw-grid-cols-[max-content_auto_max-content] md:tw-grid-cols-[200px_auto_200px] lg:tw-grid-cols-[300px_auto_300px]'>
        <Link href='/' className='tw-cursor-pointer'>
          <a>
            <div className='tw-grid tw-h-[100%] tw-grid-cols-[max-content_max-content] tw-place-items-center tw-ml-[10px] tw-gap-[6px]'>
              <div className='tw-h-[26px] md:tw-h-[36px] tw-aspect-square'>
                <Image src={logo} className='tw-rounded-[6px]' />
              </div>
              <span className={`${styles['logo-text']} dark:tw-text-white tw-text-[20px] md:tw-text-[28px] tw-font-medium tw-select-none tw-hidden sm:tw-block`}>tsuquil</span>
            </div>
          </a>
        </Link>
        <div className='tw-m-auto tw-w-[100%] tw-grid tw-place-items-center tw-h-[100%]'>
          <input
            placeholder='search · coming soon'
            className='tw-w-[95%] sm:tw-w-[90%] tw-max-w-[800px] tw-px-[10px] tw-rounded-[10px] tw-bg-vapor-100 dark:tw-text-white tw-border-[#00000000] focus:tw-outline-none tw-border-[2px] tw-duration-100 placeholder:tw-text-gray'
          ></input>
        </div>
      </div>
    </div>
  );
};
