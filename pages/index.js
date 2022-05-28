import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../components/layout";
import styles from "../styles/index.module.css";

export async function getServerSideProps(context) {
  const words = [
    "人生本身没有意义，有意义的是这一生经历了什么",
    "人有无限的可能，所以重复的事情要交给机器",
  ];
  const word = words[Math.floor(Math.random() * words.length)];

  return {
    props: {
      word,
    },
  };
}

export default function Home({ word }) {
  return (
    <div className={styles.app}>
      <div id="starsBox">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.name}>{siteTitle}</div>
        <div className={styles.word}>（{word}）</div>
        <div className={styles.line}></div>
        <ul className={styles.list}>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/list">List</Link>
          </li>
          <li>
            <Link href="/thinks">Thinks</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <a target="_blank" href="https://beian.miit.gov.cn/" rel="noreferrer">
          粤ICP备2022057119号-1
        </a>
      </footer>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}
