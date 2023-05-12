import type { AppProps } from 'next/app';

import '../styles.css';

export default function Index({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
