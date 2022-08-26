import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 46px;
  background-color: #0e0e0e;
  padding: 90px 36px;
`;

export const FooterMenuContainer = styled.div`
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 120px;

  nav {
    display: flex;
    gap: 20px;
    li {
      list-style: none;
    }
  }
`;

export const FooterMainContainer = styled.div``;
export const Divider = styled.div`
  border-bottom: 1px solid #3e3e3e;
`;

export const FooterLabelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 18px;
  color: #808080;

  .left__container {
    display: flex;
    align-items: center;
    gap: 36px;
  }
`;
