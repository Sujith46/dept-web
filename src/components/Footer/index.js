import FooterLabels from "./FooterLabels";
import FooterMenu from "./FooterMenu";
import { Divider, FooterContainer, FooterMainContainer } from "./style";

const Footer = () => {
  return (
    <FooterMainContainer>
      <FooterContainer>
          <FooterMenu />
          <Divider />
          <FooterLabels />
      </FooterContainer>
    </FooterMainContainer>
  );
};

export default Footer;
