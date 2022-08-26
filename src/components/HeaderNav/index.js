import Link from "next/link";

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
  return (
    <HeaderNavContainer>
      {navItems.map((menuItem, index) => (
        <li key={index}>
          {menuItem.title}
        </li>
      ))}
    </HeaderNavContainer>
  );
};

export default HeaderNav;