import React, { Suspense } from "react";
import { MainLayout } from "layout/main";
import dynamic from "next/dynamic";
import SearchContextProvider from "@stores/search.store";

const SearchView = dynamic(() => import("@views/search"), {
  ssr: true,
  suspense: true,
});

const Search = () => {
  return (
    <MainLayout>
      <SearchContextProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <SearchView />
        </Suspense>
      </SearchContextProvider>
    </MainLayout>
  );
};

export default Search;
