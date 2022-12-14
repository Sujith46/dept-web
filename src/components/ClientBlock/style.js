import styled from "styled-components";
import { device } from "../constants/device";

export const ClientBlockContainer = styled.div`
    background-color: #121212;
    color: #FFFFFF;
    padding: 92px 32px;

    .content {
        margin-bottom: 64px;

        .description {
            font-weight: 200;
        }
    }

    h2 {
        font-size: 34px;
        font-weight: normal;
        line-height: 34px;
        margin-top: 0;
        margin-bottom: 32px;
    }

    .client-logo__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 200px;
        row-gap: 84px;
        padding: 0 226px;

        .img__container {
            width: 172px;
            height: 90px;
        }

        @media ${device.mobile} {
            padding: 0;
            column-gap: 0;

            .img__container {
                width: 120px;
                height: auto;
            }
        }
    }
`