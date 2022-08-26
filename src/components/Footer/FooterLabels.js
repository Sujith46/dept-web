import { FooterLabelsContainer } from "./style";

const FooterLabels = () => {
    return (
        <FooterLabelsContainer>
            <div className="left__container">
                <div>{'Chamber of Commerce: 63464101'}</div>
                <div>{'VAT: NL 8552.47.502.B01'}</div>
                <div>{'Terms and conditions'}</div>
            </div>
            <div className="right__container">
                <div>{'© 2022 Dept Agency'}</div>
            </div>
        </FooterLabelsContainer>
    )
}

export default FooterLabels;