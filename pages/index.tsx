import type { NextPage } from "next";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@views/home"), {
  suspense: true,
  // @ts-ignore
  loading({ error, isLoading }) {
    if (error) {
      return {
        notFound: true,
      };
    }
    if (isLoading) {
      return <h1>loading...</h1>;
    }
  },
});

const Home: NextPage = () => {
  return (
    <>
      <HomeView />
    </>
  );
};

export default Home;
