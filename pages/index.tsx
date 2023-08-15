import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! It's me</p>
        <p>Again</p>
        <Link href="/posts/first-post" >Read my first post</Link>
      </section>
    </Layout>
  );
}
