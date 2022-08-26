import Image from "next/image";
import ReadMore from "../ReadMore";
import { BlockContainer, Content, Overlay } from "./style";

const Block = ({ tag, heading, bgImage }) => {
  return (
    <BlockContainer bgImage={bgImage}>
      <div className="block__image">
        <Image src={bgImage} alt="seciton-img" className="bg__image"/>
      </div>
      <Content>
        <div className="content__tag">{tag?.toUpperCase()}</div>
        <h2 className="content__heading">{heading}</h2>
        <ReadMore />
      </Content>
      <Overlay />
    </BlockContainer>
  );
};

export default Block;
