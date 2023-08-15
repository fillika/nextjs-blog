import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import AvatarImage from "../../components/avatarImage";
import Layout from "../../components/layout";

export default function FirtsPost() {
  function onLoad() {
    console.log(`script loaded correctly, window.FB has been populated`);
  }

  return (
    <Layout home={false}>
      <Head>
        <title>My first post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={onLoad}
      />
      <h1>First post</h1>
      <div>
        My first post. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium et vel magni blanditiis voluptate placeat facilis aliquid
        asperiores animi maiores!
      </div>
      <div>
        <AvatarImage />
      </div>
      <h2>
        <Link href="/">Go back</Link>
      </h2>
    </Layout>
  );
}
