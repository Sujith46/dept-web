import { useState } from "react";
import { GlobalStyles } from "../../globalStyles/theme";
import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";
import Store from "../../state/store";

const Layout = ({ children }) => {
  return (
    <>
      <Store>
        <GlobalStyles />
        <Menu />
        <Header />
        <main>{children}</main>
        <Footer />
      </Store>
    </>
  );
};

export default Layout;
