import type { NextPage } from 'next';
import { Line } from '@components/Line';

const Home: NextPage = () => {
  return (
    <div className='tw-grid tw-place-items-center'>
      <h1 className='tw-text-[100px] dark:tw-text-white'>design</h1>
      <div className='tw-w-[90%] tw-grid tw-grid-cols-3'>
        <div>
          <h2 className='tw-text-white tw-m-auto tw-w-[max-content]'>text</h2>
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
      </div>
    </div>
  );
};

export default Home;
