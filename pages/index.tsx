import Image from "next/image";
import Layout, { name } from "../components/layout";
import styles from "../styles/index.module.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import TopTip from "../components/toptip/toptip";
import utilStyles from "../styles/utils.module.css";

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

const descriptions = [
  "我是幽涯，是个软件工程师，目前就职于字节跳动。除了编程以外，在空闲的时间喜欢看看书和玩玩游戏。",
  "嗯，先介绍那么多。剩下的想到再补上吧...",
];

export default function Home({ word }) {
  return (
    <Layout>
      <main className="bg-white py-4">
        {/* <div id="starsBox">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div> */}
        <section className="flex items-center py-12 m-auto w-4/5">
          <div className="px-8 w-2/6 flex flex-col items-center">
            <Image
              priority
              src="/images/abeiduo.jpeg"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt={name}
            />
            <h1 className="mt-4 mb-6">{name}</h1>
            <div className="mb-4 text-center text-gray-400">{word}</div>
            <div className="flex justify-center items-center">
              <TopTip tip="qiyueximeng@gmail.com">
                <a href="mailto:qiyueximeng@gmail.com">
                  <FaEnvelope />
                </a>
              </TopTip>
              <TopTip className="ml-2" tip="https://github.com/qiyueximeng">
                <a
                  href="https://github.com/qiyueximeng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </TopTip>
            </div>
          </div>
          <div className="px-8 w-4/6">
            {descriptions.map((desc) => (
              <p className="mb-2 text-xl opacity-80">{desc}</p>
            ))}
          </div>
        </section>
      </main>

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
    </Layout>
  );
}
