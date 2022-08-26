import Head from "next/head";
import Image from "next/image";
import Block from "../components/Block";

import Layout from "../components/Layout";

import SlidngImg from "../assets/images/imgone.png";
import ComputerGuy from "../assets/images/imgTwo.png";
import Lights from "../assets/images/imagethree.png";
import GirlWall from "../assets/images/imagefour.png";
import GuyToWall from "../assets/images/guy.png";
import StreetLamp from "../assets/images/imagefive.png";
import VectorImg from "../assets/images/imagesix.png";
import Orange from "../assets/images/imageseven.png";
import ManHeadphone from "../assets/images/imageeight.png";
import Server from "../assets/images/imagetwelve.png";
import Sauce from "../assets/images/imagenine.png";

import MeetingGuys from "../assets/images/imageten.png";
import BooksStack from "../assets/images/imageeleven.png";

import { SectionContainer } from "../globalStyles/homePageStyle";
import DetailedBlock from "../components/DetailsBlock";
import { companydetails } from "../components/constants/companydetails";
import { details } from "../components/constants/details";
import TestimonialBlock from "../components/TestimonialBlock";
import ClientBlock from "../components/ClientBlock";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="home__root">
      <Layout>
        <Hero />
        <SectionContainer>
          <Block
            tag="BOL.COM"
            heading="A Summer island in the Netherlands"
            bgImage={SlidngImg}
          />
          <Block
            tag="KEMPEN"
            heading="Not some average banking website"
            bgImage={ComputerGuy}
          />
        </SectionContainer>
        <SectionContainer>
          <Block
            tag="PHILIPS"
            heading="Beautiful design meets innovative technology"
            bgImage={Lights}
          />
          <Block
            tag="GEMEENTEMUSEUM"
            heading="A 100 years of Mondriaan & De Stijl"
            bgImage={GirlWall}
          />
        </SectionContainer>
        <SectionContainer>
          <Block
            tag="FLORENSIS"
            heading="Rethinking the entire online ecosystem"
            bgImage={GuyToWall}
          />
          <DetailedBlock data={companydetails} />
        </SectionContainer>
        <SectionContainer>
          <Block
            tag="BE LIGHTNING"
            heading="Delivering clarity on a global scale"
            bgImage={StreetLamp}
          />
          <Block
            tag="TUI"
            heading="Swipe to find your next holiday destination"
            bgImage={VectorImg}
          />
        </SectionContainer>
        <SectionContainer>
          <DetailedBlock data={details} />
          <Block
            tag="FLORENSIS"
            heading="Rethinking the entire online ecosystem"
            bgImage={GuyToWall}
          />
        </SectionContainer>
        <SectionContainer>
          <Block
            tag="CHOCOMEL"
            heading="A campaign for the limited edition letter packs"
            bgImage={Orange}
          />
          <Block
            tag="JBL"
            heading="Live like a champion with Jerome Boateng"
            bgImage={ManHeadphone}
          />
        </SectionContainer>
        <SectionContainer>
          <Block
            tag="ZALANDO"
            heading="Innovative SEO and content strategy for Zalando"
            bgImage={MeetingGuys}
          />
          <Block
            tag="JBL"
            heading="The search of the most influential book ever"
            bgImage={BooksStack}
          />
        </SectionContainer>
        <TestimonialBlock />
        <SectionContainer>
        <Block
            tag="LIBERTY GLOBAL "
            heading="Delivering complex commerce solutions"
            bgImage={Server}
          />
          <Block
            tag="ARLA"
            heading="Swipe to find your next holiday destination"
            bgImage={Sauce}
          />
        </SectionContainer>
        <ClientBlock />
        <Contact />
      </Layout>
    </div>
  );
}
