import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>smiley-geek</title>
        <meta
          name="description"
          content="This is a portfolio for Kariuki George Thuo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to smiley-geek hub</h1>

        <p className={styles.description}>
          If you see this page, the site is still under development. Thanks for
          your visit.
        </p>
      </main>
    </div>
  );
};

export default Home;
