import { useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/index.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const words = [
  "人生本身没有意义，有意义的是这一生经历了什么",
  "人有无限的可能，所以重复的事情要交给机器",
];

export default function Home({ allPostsData }) {
  return (
    <div className={styles.app}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.name}>{siteTitle}</div>
        <div className={styles.word}>
          （{words[Math.floor(Math.random() * words.length)]}）
        </div>
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

      <footer className={styles.footer}>备案信息展示</footer>

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
