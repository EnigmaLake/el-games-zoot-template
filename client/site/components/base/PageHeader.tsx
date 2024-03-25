import { FC, PropsWithChildren } from "react";

import Head from "next/head";

const PageHeader: FC<
  PropsWithChildren<{
    title: string;
    metaDescription?: string;
  }>
> = ({ title, metaDescription }) => {
  return (
    <Head>
      <title>{`Enigma Lake - ${title}`}</title>
      <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
      {metaDescription && <meta name="description" content={metaDescription} />}
    </Head>
  );
};

export default PageHeader;
