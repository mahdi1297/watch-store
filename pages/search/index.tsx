import React, { Suspense } from "react";
import { MainLayout } from "layout/main";
import dynamic from "next/dynamic";

const SearchView = dynamic(() => import("@views/search"), {
  ssr: true,
  suspense: true,
});

const Search = () => {
  return (
    <MainLayout>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchView />
      </Suspense>
    </MainLayout>
  );
};

export default Search;
