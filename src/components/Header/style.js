import styled from "styled-components";
import { device } from "../constants/device";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 56px;
  background-color: #121212;

  > * {
    cursor: pointer;
  }

  @media ${device.mobile} {
    padding: 36px 20px;
  }
`;
