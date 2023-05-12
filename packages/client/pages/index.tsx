import type { AppProps } from 'next/app';

export default function Index({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex p-4">
      <p className="text-red-500">Index</p>
    </div>
  );
}
