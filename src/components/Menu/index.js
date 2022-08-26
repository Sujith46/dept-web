import { MenuIcon } from "../../assets/icons/MenuIcon";
import { MenuContainer } from "./style";
import { useContext, useState } from "react";
import { MenuArrowIcon } from "../../assets/icons/MenuArrowIcon";
import DeptLogo from "../../assets/icons/deptlogo.svg";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import Image from "next/image";
import { Context } from "../../state/context";
import { IS_MENU_OPEN } from "../../state/actions";

const Menu = ({ isOpen }) => {
  const menu = [
    "home",
    "work",
    "culture",
    "services",
    "partners",
    "stories",
    "careers",
    "events",
    "contact",
  ];
  const [selected, setSelected] = useState("home");
  const [state, dispatch] = useContext(Context);

  const handleMenuClose = () => {
      dispatch({
          type: IS_MENU_OPEN,
          data: false,
      })
  };

  return (
    <MenuContainer className={`menu ${state.isMenuOpen ? "open" : "close"}`} isOpen={state.isMenuOpen}>
      <div className="menu__header">
        <Image src={DeptLogo} alt="dept-icon" />
        <div className="close-icon" onClick={handleMenuClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="menu__list">
        {menu.map((item, index) => (
          <div
            className="menu__container"
            onClick={() => setSelected(item)}
            key={index}
          >
            {
              <div className={`arrow ${selected === item ? "show-arrow" : ""}`}>
                <MenuArrowIcon />
              </div>
            }
            <div className="menu__text">{item.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </MenuContainer>
  );
};

export default Menu;
