import styled from "styled-components";

export const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    .round {
      background-color: #ffffff;
    }
    .label {
      transition: all 0.3s ease;
      transform: translateX(10px);
      font-weight: bold;
    }
  }
`;

export const Round = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #ffffff;
  width: 12px;
  height: 12px;
  transition: all 0.3s ease;

  .inner__round {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;
