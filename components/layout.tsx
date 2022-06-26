import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const name = "幽涯";
export const siteTitle = "幽涯的网络日志";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/keqing.jpeg" />
        <meta name="description" content="youya's personal website" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <>
              <Image
                priority
                src="/images/keqing.jpeg"
                className={utilStyles.borderCircle}
                height={30}
                width={30}
                alt={name}
              />
              <span className={styles.name}>{siteTitle}</span>
            </>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/blogs" passHref>
            <div className={styles.menuItem}>Blogs</div>
          </Link>
          <Link href="/list" passHref>
            <div className={styles.menuItem}>List</div>
          </Link>
        </div>
      </header>

      <main className={styles.center}>{children}</main>

      <footer className={styles.footer}>
        <a target="_blank" href="https://beian.miit.gov.cn/" rel="noreferrer">
          粤ICP备2022057119号-1
        </a>
      </footer>
    </div>
  );
}
