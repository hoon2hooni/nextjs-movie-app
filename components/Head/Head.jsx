import Head from "next/head";

export default function Home({ title }) {
  return (
    <Head>
      <title> {`${title} | Next Movie`}</title>
    </Head>
  );
}
