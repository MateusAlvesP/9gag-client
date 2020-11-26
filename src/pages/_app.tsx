/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// import '../assets/styles/globals.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import AppContext from '../context/AppContext';
import useTheme from '../hooks/useTheme';
import { GlobalStyle } from '../themes/GlobalStyle';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => {
  const { theme, setTheme } = useTheme();
  const ThemeSelector = (dark, light) => (theme.name === 'dark' ? dark : light);
  const [title, setTitle] = useState<string>('Θαλία - Go Fun The World');

  return (
    <AppContext.Provider
      value={{
        setTheme,
        ThemeSelector,
        title,
        setTitle,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>{title}</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MyApp;
