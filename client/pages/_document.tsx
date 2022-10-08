import type { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

type TsuquilHtml = (props: React.DetailedHTMLProps<any, HTMLHtmlElement>) => JSX.Element;
const TsuquilHtml: TsuquilHtml = Html;

const Document: NextPage = () => {
  return (
    <TsuquilHtml lang='en' tsuquil='🌊🍃' className='tw-dark'>
      <Head>
        <link rel='icon' type='image' href='logo-round.min.svg' />
      </Head>
      <body dir='ltr' className='dark:tw-bg-vapor-300'>
        <Main />
        <NextScript />
      </body>
    </TsuquilHtml>
  );
};

export default Document;
