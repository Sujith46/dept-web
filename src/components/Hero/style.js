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
`

export const HeroContent = styled.div`
    position: absolute;
    bottom: 0;
    color: #FFFFFF;
    padding: 0 32px;
    bottom: 32px;
    z-index: 2;

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

    .content__tag, .content__heading {
        margin-bottom: 32px;
    }
`