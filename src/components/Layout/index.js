import { GlobalStyles } from "../../globalStyles/theme";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
