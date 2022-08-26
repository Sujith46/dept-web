import styled from "styled-components";
import { device } from "../constants/device";

export const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;

  li {
    list-style: none;
    position: relative;
    font-weight: 200;

    @media ${device.mobile} {
      display: none;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      margin-bottom: -4px;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }

  .menu-icon__container {
    display: block;
    border-bottom: none;
    transform: none
  }
`;
