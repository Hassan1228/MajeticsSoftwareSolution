

import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import React from "react";

import AboutSix from "@/components/AboutSection/AboutSix";

import AboutSix2 from "@/components/AboutSection/AboutSix2";
import Test from "@/components/Test";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <Style
         font="Rubik, sans-serif"
         bFont="Rubik, sans-serif"
         black="#2a2833"
         text="#74727a"
         base="#ff4b82"
         baseRgb="255, 75, 130"
         scrollToTopColor="#fff"
         blackRgb="42, 40, 51" />
      <HeaderTwo headerStyle="mainmenu-seven" header={7}/>
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About" />
      <Test/>
      <AboutSix/>
      <AboutSix2/>
      <DiscoverSection ShowTitle={false} />
      <TestimonialsSection />

      <FunFacts />
      <ParallaxSection />
      <AgencySection />
      <TeamSectionTwo />
      <SponsorsSectionTwo />
      <FooterSeven />
    </Layout>
  );
};

export default About;
