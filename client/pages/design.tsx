import type { NextPage } from 'next';
import { Line } from '@components/Line';
import { AccentedButton } from '@components/AccentedButton';
import logo from '@public/logo.min.svg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='tw-grid tw-place-items-center'>
      <div className='tw-grid tw-grid-flow-col tw-gap-[10px]'>
        <div className='tw-w-[100px] tw-h-[100%] tw-flex'>
          <img src='/logo.min.svg' className='tw-my-[auto] tw-rounded-[20px] float-animation' />
        </div>
        <h1 className='tw-text-[100px] dark:tw-text-white'>design</h1>
      </div>
      <div className='tw-w-[90%] tw-grid tw-grid-flow-row xl:tw-grid-cols-3 tw-gap-[100px]'>
        <div>
          <h2 className='tw-text-white tw-m-auto tw-w-[max-content] gradient-text'>text</h2>
          <Line className='tw-mb-[10px]' />
          <div className='tw-grid tw-grid-flow-row tw-gap-[20px]'>
            <div>
              <h1 className='dark:tw-text-white'>header 1</h1>
              <p className='tw-text-gray'>h1 · 50px</p>
            </div>
            <div>
              <h2 className='dark:tw-text-white'>header 2</h2>
              <p className='tw-text-gray'>h2 · 40px</p>
            </div>
            <div>
              <h3 className='dark:tw-text-white'>header 3</h3>
              <p className='tw-text-gray'>h3 · 28px</p>
            </div>
            <div>
              <h4 className='dark:tw-text-white'>header 4</h4>
              <p className='tw-text-gray'>h4 · 20px</p>
            </div>
            <div>
              <p className='dark:tw-text-white'>paragraph</p>
              <p className='tw-text-gray'>p · 14px</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='tw-text-white tw-m-auto tw-w-[max-content] gradient-text'>buttons</h2>
          <Line className='tw-mb-[20px]' />
          <div className='tw-grid tw-grid-cols-2 '>
            <div className='tw-grid tw-grid-flow-row tw-gap-[20px] tw-px-[10px]'>
              <div className='tw-grid tw-grid-flow-row tw-gap-[4px]'>
                <p className='tw-text-gray tw-ml-[6px]'>green · #5ee6ae</p>
                <AccentedButton color='green' loading={false} text='button' onClick={() => alert('hello')} className='tw-w-[120px] tw-h-[40px]' />
              </div>
              <div className='tw-grid tw-grid-flow-row tw-gap-[4px]'>
                <p className='tw-text-gray tw-ml-[6px]'>disabled</p>
                <AccentedButton color='green' loading={false} disabled text='button' onClick={() => {}} className='tw-w-[120px] tw-h-[40px] tw-bg-accentdark' />
              </div>
              <div className='tw-grid tw-grid-flow-row tw-gap-[4px]'>
                <p className='tw-text-gray tw-ml-[6px]'>loading</p>
                <AccentedButton color='green' loading={true} text='button' onClick={() => {}} className='tw-w-[120px] tw-h-[40px] tw-bg-accentdark' />
              </div>
            </div>
            <div className='tw-grid tw-grid-flow-row tw-gap-[20px] tw-px-[10px]'>
              <div className='tw-grid tw-grid-flow-row tw-gap-[4px]'>
                <p className='tw-text-gray tw-ml-[6px]'>blue · #53e0db</p>
                <AccentedButton color='blue' loading={false} text='button' onClick={() => alert('hello')} className='tw-w-[120px] tw-h-[40px]' />
              </div>
              <div className='tw-grid tw-grid-flow-row tw-gap-[4px]'>
                <p className='tw-text-gray tw-ml-[6px]'>disabled</p>
                <AccentedButton color='blue' loading={false} disabled text='button' onClick={() => {}} className='tw-w-[120px] tw-h-[40px] tw-bg-accentdark' />
              </div>
              <div className='tw-grid tw-grid-flow-row tw-gap-[4px]'>
                <p className='tw-text-gray tw-ml-[6px]'>loading</p>
                <AccentedButton color='blue' loading={true} text='button' onClick={() => {}} className='tw-w-[120px] tw-h-[40px] tw-bg-accentdark' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='tw-text-white tw-m-auto tw-w-[max-content] gradient-text'>colors</h2>
          <Line className='tw-mb-[20px]' />
          <div className='tw-grid tw-grid-cols-2 tw-gap-[20px]'>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-green tw-rounded-[8px]'></div>
              <p className='tw-text-gray'>green · #5ee6ae</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-greendark tw-rounded-[8px]'></div>
              <p className='tw-text-gray'>greendark · #168c5b</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-blue tw-rounded-[8px]'></div>
              <p className='tw-text-gray'>blue · #53e0db</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-bluedark tw-rounded-[8px]'></div>
              <p className='tw-text-gray'>bluedark · #17827e</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-white tw-rounded-[8px] tw-border-gray tw-border-2'></div>
              <p className='tw-text-gray'>white · #ffffff</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-gray tw-rounded-[8px]'></div>
              <p className='tw-text-gray'>gray · #878787</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-lightgray tw-rounded-[8px]'></div>
              <p className='tw-text-gray'>lightgray · #f2f2f2</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-vapor-100 tw-rounded-[8px] tw-border-gray dark:tw-border-2'></div>
              <p className='tw-text-gray'>vapor 100 · #0b1014</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-vapor-200 tw-rounded-[8px] tw-border-gray dark:tw-border-2'></div>
              <p className='tw-text-gray'>vapor 200 · #1c2933</p>
            </div>
            <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-gap-[10px]'>
              <div className='tw-h-[60px] tw-w-[60px] tw-bg-vapor-300 tw-rounded-[8px] tw-border-gray dark:tw-border-2'></div>
              <p className='tw-text-gray'>vapor 300 · #0b1014</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
