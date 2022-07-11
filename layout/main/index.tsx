import React, { useEffect, useState } from "react";
import Header from "@components/header";
import Footer from "@components/footer";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  const [renderd, setRenderd] = useState(false);

  useEffect(() => {
    setRenderd(true);
  }, []);

  // if (typeof window === "undefined") {
  //   return <></>;
  // } else {
  return (
    <div>
      <Header />
      {children}
      {renderd && <Footer />}
    </div>
  );
  // }
};
