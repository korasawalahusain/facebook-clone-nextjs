import Head from "next/head";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/client";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ posts }) {
  const [session, loading] = useSession();

  if (loading) return null;
  if (!session) return <Login />;

  return (
    <div className="bg-gray-100 overflow-hidden h-screen">
      <Head>
        <title>Facebook 2.0</title>
      </Head>
      <Header userImage={session.user.image} />
      <main className="flex">
        <Sidebar userImage={session.user.image} username={session.user.name} />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      posts: docs,
    },
  };
}
