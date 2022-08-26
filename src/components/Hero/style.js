import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    position: relative;
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
        

        .bold {
            font-weight: bold;
        }
    }

    .content__tag, .content__heading {
        margin-bottom: 32px;
    }
`