import React from 'react';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import RootLayout from '@components/Layouts/RootLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </RecoilRoot>
  );
}
