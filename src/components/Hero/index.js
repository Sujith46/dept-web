import Image from "next/image";

import { HeroContainer, HeroContent } from "./style";

import HeroImg from "../../assets/images/hero.png";
import { Overlay } from "../Block/style";

const Hero = () => {
  return (
    <HeroContainer>
      <Image src={HeroImg} alt="seciton-img" />
      <HeroContent>
        <div className="content__tag">{"WORK"}</div>
        <h2 className="content__heading">
          A selection of projects that{" "}
          <span className="bold">pioneer tech</span> and{" "}
          <span className="bold">marketing</span> to help brands stay ahead.
        </h2>
      </HeroContent>
      <Overlay />
    </HeroContainer>
  );
};

export default Hero;
