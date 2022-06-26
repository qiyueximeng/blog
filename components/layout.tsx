import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const name = "幽涯";
export const siteTitle = "幽涯的网络日志";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link rel="icon" href="/images/abeiduo.jpeg" />
        <meta name="description" content="youya's personal website" />
        <title>{siteTitle}</title>
      </Head>
      <header className="flex justify-between items-center px-6 h-16 z-[999] bg-white shadow-sm">
        <div className="flex items-center cursor-default">
          <Link href="/" passHref>
            <>
              <Image
                priority
                src="/images/abeiduo.jpeg"
                className={utilStyles.borderCircle}
                height={30}
                width={30}
                alt={name}
              />
              <span className="ml-3">{siteTitle}</span>
            </>
          </Link>
        </div>
        <div className="flex">
          <Link href="/blogs" passHref>
            <div className="h-16 p-2 flex items-center hover:cursor-pointer hover:text-sky-700">
              Blogs
            </div>
          </Link>
          <Link href="/list" passHref>
            <div className="h-16 p-2 flex items-center hover:cursor-pointer hover:text-sky-700">
              List
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="flex justify-center items-center h-16">
        <a target="_blank" href="https://beian.miit.gov.cn/" rel="noreferrer">
          粤ICP备2022057119号-1
        </a>
      </footer>
    </div>
  );
}
