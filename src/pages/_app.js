import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import 'util/analytics';
import { ThemeProvider } from 'util/theme';
import createEmotionCache from '../../src/createEmotionCache';
import { CacheProvider } from '@emotion/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const logo = Object.freeze('https://uploads.divjoy.com/logo.svg');
const logoInverted = Object.freeze('https://uploads.divjoy.com/logo-white.svg');

function MyApp({
  Component,

  pageProps,
  ...rest
}) {
  const { emotionCache = clientSideEmotionCache } = rest;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <>
          <Navbar color="default" logo={logo} logoInverted={logoInverted} />
          <Component {...pageProps} />
          <Footer
            bgColor="light"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="Personal Website for Keith Stolte"
            copyright={`© ${new Date().getFullYear()} Keith Stolte`}
            logo={logo}
            logoInverted={logoInverted}
            sticky={true}
          />
        </>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
