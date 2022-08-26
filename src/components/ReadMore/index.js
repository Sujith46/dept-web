import { ReadMoreContainer, Round } from "./style"

const ReadMore = ({ className }) => {
    return (
        <ReadMoreContainer className={className}>
            <Round className="round">
                <div className="inner__round"></div>
            </Round>
            <div className="label">Read more</div>
        </ReadMoreContainer>
    )
}

export default ReadMore;