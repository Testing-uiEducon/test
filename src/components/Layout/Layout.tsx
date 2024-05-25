import React, { PropsWithChildren } from "react";
import Navbar from "@/components/NavBar/Navbar";
import AppContainer from "./AppContainer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <AppContainer>{children}</AppContainer>
    </>
  );
};
export default Layout;
