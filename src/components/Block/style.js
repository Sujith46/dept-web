import styled from "styled-components";
import { device } from "../constants/device";

export const BlockContainer = styled.div`
  display: flex;
  position: relative;

  .block__image {
    display: flex;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  color: #ffffff;
  padding: 0 32px;
  bottom: 32px;
  z-index: 2;

  /* h2 {
        margin: 0;
    } */

  .content__tag,
  .content__link {
    font-size: 16px;
    line-height: 16px;
  }

  .content__heading {
    font-size: 48px;
    line-height: 48px;

    @media ${device.mobile} {
      font-size: 26px;
      line-height: 26px;
    }
  }

  .content__tag,
  .content__heading {
    margin-bottom: 16px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    358.53deg,
    rgba(0, 0, 0, 0.33) 1.79%,
    rgba(0, 0, 0, 0) 99.33%
  );
`;
