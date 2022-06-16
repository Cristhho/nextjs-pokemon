import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name='author' content='Christian Ochoa' />
        <meta name='description' content='Información sobre el pokemon ____' />
        <meta name='keywords' content='____,pokemon,pokedex' />
      </Head>

      <main>
        { children }
      </main>
    </>
  );
}