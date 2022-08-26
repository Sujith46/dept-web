import Image from "next/image"

import { FooterMenuContainer } from "./style"
import DeptLogo from "../../assets/icons/deptlogo.svg";

const FooterMenu = () => {
    const menu = ["WORK", "SERVICES", "STORIES", "ABOUT", "CAREERS", "CONTACT"];
    return (
        <FooterMenuContainer>
            <Image src={DeptLogo} alt="dept-logo"/>
            <nav className="footer__menu">
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </nav>
        </FooterMenuContainer>
    )
}

export default FooterMenu;