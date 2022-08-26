import Link from "next/link";
import { useContext } from "react";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { IS_MENU_OPEN } from "../../state/actions";
import { Context } from "../../state/context";

import { HeaderNavContainer } from "./style";

const HeaderNav = () => {
  const navItems = [
    {
      title: "WORK",
      link: "/work",
    },
    {
      title: "CULTURE",
      link: "/culture",
    },
    {
      title: "SERVICES",
      link: "/services",
    },
    {
      title: "INSIGHTS",
      link: "/insights",
    },
    {
      title: "CAREERS",
      link: "/careers",
    },
    {
      title: "CONTACT",
      link: "/contact",
    },
  ];

  const [state, dispatch] = useContext(Context);

  const handleMenuOpen = () => {
    dispatch({
      type: IS_MENU_OPEN,
      data: true,
    })
  }

  return (
    <HeaderNavContainer>
      {navItems.map((menuItem, index) => (
        <li key={index}>
          {menuItem.title}
        </li>
      ))}
      <div className="menu-icon__container" onClick={handleMenuOpen}>
        <MenuIcon />
      </div>
    </HeaderNavContainer>
  );
};

export default HeaderNav;