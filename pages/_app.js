import Head from "@components/Head";
import Layout from "@components/Layout";
import "@styles/globals.css";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Head
        title={
          router.pathname === "/"
            ? "Home"
            : router.pathname.replace("/", "").toLocaleUpperCase()
        }
      ></Head>
      <Component {...pageProps} />
    </Layout>
  );
}
