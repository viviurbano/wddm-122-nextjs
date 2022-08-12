import styles from '../styles/Home.module.css';

export default function handler(req, res) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.randomImageH1}>
          This is page <strong>2</strong>
        </h1>

        <h2 className={styles.description}>
          This picture is from
          <a href="https://picsum.photos/" target="_blank">
            <code className={styles.code}>this site</code>
          </a>
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://picsum.photos/400/400"></img>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Powered by Viviane Urbano </footer>
    </div>
  );
}
