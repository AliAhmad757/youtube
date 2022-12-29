import React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../Utility/createEmotionCache';
import "../styles/globals.css";
import Layout from "../Components/Layout"
const clientSideEmotionCache = createEmotionCache();
const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
};

export default MyApp;