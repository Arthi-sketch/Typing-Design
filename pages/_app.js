import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />

        <footer className={styles.footer}>
          <a
            href="https://github.com/Arthi-sketch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.logo}>
              Visit <ArrowRightAltIcon className="arrow" />
              <span >
                <Image
                  src="/git.png"
                  alt="Github Logo"
                  width={50}
                  height={50}
                />
              </span>
            </div>
          </a>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
