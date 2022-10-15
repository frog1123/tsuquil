import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import UserContext from '../UserContext';
import { useState } from 'react';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const [value, setValue] = useState({
    reloadPostsList: false,
    setPermPosts: false
  });

  const { start, finish } = new ProgressBar({
    size: '2px',
    color: '#5ee6ae',
    className: 'progress',
    delay: 100
  });

  Router.events.on('routeChangeStart', start);
  Router.events.on('routeChangeComplete', finish);
  Router.events.on('routeChangeError', finish);

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ value, setValue }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ApolloProvider>
  );
};

export default App;
