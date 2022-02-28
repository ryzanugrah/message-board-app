import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props: {
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
  children: any;
}) {
  const router = useRouter();

  const showHeader =
    router.pathname === '/auth/login' || router.pathname === '/auth/register'
      ? false
      : true;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{props.title}</title>
      </Head>

      {/* @ts-ignore */}
      {showHeader && <Navbar />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
