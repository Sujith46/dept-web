import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  padding: 58px;
  background-color: #ffffff;

  h2 {
    font-size: 48px;
    color: #121212;
    max-width: 305px;
    font-weight: 300;
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

  .row-one {
    display: flex;
    gap: 36px;

    &:first-child {
      margin-bottom: 24px;
    }
  }
`;
