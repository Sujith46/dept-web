import { GlobalStyles } from "../../globalStyles/theme";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
