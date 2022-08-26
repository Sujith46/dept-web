import styled from "styled-components";
import { device } from "../constants/device";

export const FilterBlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;

  .content__text {
    color: #a3a3a3;
    font-size: 26px;
    line-height: 26px;

    @media ${device.mobile} {
      font-size: 16px;
      line-height: 18px;
    }

    .bold {
      color: #000000;
      border-bottom: 1px solid black;
    }
  }
`;
