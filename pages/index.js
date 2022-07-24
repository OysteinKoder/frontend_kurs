import Head from "next/head";
import { useRouter } from "next/router";
import nor from "../public/locales/nor/nor";
import en from "../public/locales/en/en";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="homepage for frontend course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}></main>
      <h2>Main Page</h2>
      <footer className={styles.footer}></footer>
    </div>
  );
}
