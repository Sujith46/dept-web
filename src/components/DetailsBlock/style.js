import styled from "styled-components";

export const DetailedBlockContainer = styled.div`
  padding: 64px 32px;
  background-color: #121212;
  color: #ffffff;
  width: 100%;

  .content__heading,
  .content__description {
    margin-bottom: 12px;
  }

  .content {
    border-bottom: 1px solid #dddddd;
    margin-bottom: 32px;
    font-weight: 200;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;

      .read__more {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .read__more {
      margin-bottom: 36px;
    }
  }
`;
