import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { firebaseInit } from '../lib/firebase';
import Script from 'next/script';
import Button from '../components/button/button';
import Sidemenu from '../components/sidemenu/sidemenu';

function CustomApp({ Component, pageProps }: AppProps) {
  firebaseInit();

  return (
    <>
      <Head>
        <title>Youngjin's blog</title>
      </Head>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css"
      />
      <main className="app flex flex-col gap-10">
        <nav className="flex w-full p-4 py-3 justify-end gap-4 border-b border-gray-200">
          <Button>로그인</Button>
        </nav>
        <section className="flex flex-col w-full px-[100px] gap-10 h-full mx-auto container">
          <header className="text-[60px] font-light text-center">
            YOUNGJIN'S BLOG
          </header>
          <div className="flex gap-6 h-full">
            <Sidemenu></Sidemenu>
            <div className="w-full flex-2">
              <Component {...pageProps} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CustomApp;
