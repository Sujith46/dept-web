import ReadMore from "../ReadMore";
import { DetailedBlockContainer } from "./style"

const DetailedBlock = ({ data }) => {
    return (
        <DetailedBlockContainer>
            {data && data.map((item, index) => (
                <div className="content">
                    <div className="content__heading">{item.heading}</div>
                    <div className="content__description">{item.description}</div>
                    <ReadMore className="read__more"/>
                </div>
            ))}
        </DetailedBlockContainer>
    )
}

export default DetailedBlock;