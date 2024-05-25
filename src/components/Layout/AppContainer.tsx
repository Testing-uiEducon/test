import React, { PropsWithChildren, useEffect, useRef } from "react";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

const AppContainer = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const mainContentRef = useRef<any>(null);
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [router.asPath]);
  return (
    <div
      className="h-[calc(100vh-64px-16px)] overflow-scroll"
      ref={mainContentRef}
    >
      {children}
      <Footer />
    </div>
  );
};

export default AppContainer;
