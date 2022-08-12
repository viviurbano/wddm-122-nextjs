import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WDD 121 Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is a <span>Next.js</span> project!
        </h1>

        <p className={styles.description}>
          In this project, only the routes were explored.
        </p>

        <div className={styles.grid}>
          <a href="/randomImages1" target="_blank">
            <h2>
              Check out the page <strong>1</strong> &rarr;
            </h2>
            <p>You will see a random image</p>
          </a>
        </div>
        <div className={styles.grid}>
          <a href="/randomImages2" target="_blank">
            <h2>
              Check out the page <strong>2</strong> &rarr;
            </h2>
            <p>You will see a random image</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Powered by Viviane Urbano</footer>
    </div>
  );
}