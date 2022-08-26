import styled from "styled-components";
import { device } from "../constants/device";

export const ContactContainer = styled.div`
  display: flex;
  padding: 58px;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 48px 36px;
    flex-direction: column;
    gap: 36px;
  }

  h2 {
    font-size: 48px;
    color: #121212;
    max-width: 305px;
    font-weight: 300;

    @media ${device.mobile} {
      font-size: 26px;
      line-height: 26px;
    }
  }
`;

export const ContactFormContainer = styled.div`
  width: 100%;
  padding: 0 64px;
  .input__container {
    width: 100%;
    max-width: 300px;
    width: 100%;

    .label {
      margin-bottom: 12px;
    }
    &.textarea {
        margin-bottom: 54px;
    }
  }

  @media ${device.mobile} {
    padding: 0;
    button {
      width: 100%;
    }
  }

  .row-one {
    display: flex;
    gap: 36px;

    &:first-child {
      margin-bottom: 24px;
    }

    @media ${device.mobile} {
      flex-direction: column;
    }
  }
`;
