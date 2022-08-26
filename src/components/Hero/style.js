import styled from "styled-components";
import { device } from "../constants/device";

export const HeroContainer = styled.div`
  display: flex;
  position: relative;
  background: url("/hero.png");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 628px;
  width: 100%;

  @media ${device.mobile} {
    background-size: cover;
    background-position: center;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  color: #ffffff;
  padding: 0 32px;
  bottom: 32px;
  z-index: 2;

  .content__tag {
    animation-duration: 0.6s;
    animation-name: slide-up;
    animation-timing-function: ease-in-out;
  }

  .content__heading {
    animation-duration: 0.8s;
    animation-name: slide-up;
    animation-timing-function: ease-in-out;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .content__heading {
    font-size: 34px;
    line-height: 34px;
    font-weight: 300;
    max-width: 580px;

    @media ${device.mobile} {
      font-size: 34px;
      line-height: 34px;
    }

    .bold {
      font-weight: bold;
    }
  }

  .content__tag,
  .content__heading {
    margin-bottom: 32px;
  }
`;
