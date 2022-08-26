import Image from "next/image"

import { HeaderContainer } from "./style"
import DeptLogo from "../../assets/icons/deptlogo.svg"
import HeaderNav from "../HeaderNav"

const Header = () => {
    return (
        <HeaderContainer>
            <div className="dept-logo__container">
                {/* <DeptLogo /> */}
                <Image src={DeptLogo} alt="dept-logo"/>
            </div>
            <HeaderNav />
        </HeaderContainer>
    )
}

export default Header;