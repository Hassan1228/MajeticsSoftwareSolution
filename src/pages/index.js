import AboutEight from "@/components/AboutSection/AboutEight";
import AboutNine from "@/components/AboutSection/AboutNine";
import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import BlogSeven from "@/components/NewsSection/BlogSeven";
import PricingTwo from "@/components/PricingSection/PricingTwo";
import ProjectSeven from "@/components/ProjectSection/ProjectSeven";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

import SliderSeven from "@/components/SliderSection/SliderSeven";
import SponsorSeven from "@/components/SponsorsSection/SponsorSeven";
import SubscribeTwo from "@/components/SubscribeSection/SubscribeTwo";

import preloader from "@/images/icons/preloader.png";
import React from "react";
import Text from "@/components/Text";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import AboutSection from "@/components/AboutSection/AboutSection";

const Home7 = () => {
  return (
    <Layout pageTitle="Home " preloader={preloader}>
      <Style
        font="Rubik, sans-serif"
        bFont="Rubik, sans-serif"
        black="#2a2833"
        text="#74727a"
        base="#ff4b82"
        baseRgb="255, 75, 130"
        scrollToTopColor="#fff"
        blackRgb="42, 40, 51"
      />
      <HeaderTwo headerStyle="mainmenu-seven" header={7} />
      <MobileMenu />
      <SearchPopup />
      <SliderSeven />
      <Text/>
     
      <AboutNine />
      <AboutEight />
      <ProjectSeven />
      <WeDOSection/>
      <AboutSection/>
      <PricingTwo />
      <FunFactSeven />
      <SponsorSeven />
      <TestimonialsSection />
      <BlogSeven />
      <SubscribeTwo />
      <FooterSeven />
    </Layout>
  );
};

export default Home7;
