import Layout from "../../components/layout";

export default function Blogs() {
  return (
    <Layout>
      <section className="flex flex-col items-center p-4">
        <div className="w-3/5 bg-white rounded-sm mb-1 first:mb-0 p-4">
          <h2 className="mb-3">第一篇博客</h2>
          <div className="">
            <div className="">2022-01-01</div>
            {/* // collection // tags // view */}
          </div>
          <p className="">这是第一篇博客的简介</p>
        </div>
      </section>
    </Layout>
  );
}
