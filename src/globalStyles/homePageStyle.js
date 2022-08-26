import styled from "styled-components";
import { device } from "../components/constants/device"

export const SectionContainer = styled.div`
    display: flex;

    @media ${device.mobile} {
        flex-direction: column;
    }
`