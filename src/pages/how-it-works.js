import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import HowItWorksPage from "@/components/HowItWorks/HowItWorksPage";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";

import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import React from "react";

const HowItWorks = () => {
  return (
    <Layout pageTitle="How It Works">
          <Style
            font="Rubik, sans-serif"
            bFont="Rubik, sans-serif"
            black="#2a2833"
            text="#74727a"
            base="#ff4b82"
            baseRgb="255, 75, 130"
            scrollToTopColor="#fff"
            blackRgb="42, 40, 51"  />
      <HeaderTwo  headerStyle="mainmenu-seven" header={7} />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="How It Works" />
      <HowItWorksPage />
      <SponsorsSection />
      <ParallaxSection />
      <FeatureEight />
      <CallToSection />
      <FooterSeven normalPadding={false} />
    </Layout>
  );
};

export default HowItWorks;
