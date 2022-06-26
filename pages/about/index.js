import styles from "./index.module.css";
import { FaHome, FaGithub } from "react-icons/fa";
import Link from "next/link";
import TopTip from "../../components/toptip/toptip";

export default function About() {
  return (
    <div className={styles.container}>
      {/* 头像 */}
      <div className={styles.name}>幽涯</div>
      <div className={styles.contacts}>
        <TopTip className={styles.contact} tip="Home">
          <Link href="/">
            <a>
              <FaHome />
            </a>
          </Link>
        </TopTip>
        <TopTip className={styles.contact} tip="https://github.com/qiyueximeng">
          <a
            href="https://github.com/qiyueximeng"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </TopTip>
      </div>
      <section className={styles.description}>
        <p>
          我是幽涯，是个前后端都会写一些的工程师，目前就职于字节跳动，除了编程以外，日常喜欢看数和玩游戏多一点。
        </p>
        <p>嗯，先介绍这么多，其他的想到了再补上...</p>
      </section>
    </div>
  );
}
