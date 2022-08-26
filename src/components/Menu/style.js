import styled from "styled-components";
import { device } from "../constants/device";

export const MenuContainer = styled.div`
  background-color: #000000;
  position: fixed;
  height: 100%;
  width: 100%;
  color: #ffffff;
  z-index: 999;
  padding: 46px;
  transition: all 0.3s ease;
  display: ${props => props.isOpen ? "block" : "none"};
  > * {
    cursor: pointer;
  }

  .arrow {
    display: none;
  }

  .show-arrow {
    display: inline-flex;
  }

  .menu__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 34px;
  }

  .menu__list {
    max-height: 100%;
    overflow: scroll;
  }

  .menu__container {
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 60px;
    line-height: 60px;
    border-bottom: 1px solid #a3a3a3;
    gap: 24px;
    padding: 6px 0;
    transition: all 0.3s ease;
    &:hover {
      .arrow {
        display: inline-flex;
      }
    }

    @media ${device.mobile} {
      font-size: 34px;
      line-height: 34px;
    }
  }
`;
