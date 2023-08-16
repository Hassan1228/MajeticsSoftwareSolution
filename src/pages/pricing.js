import Pagebanner2 from "@/components/BannerSection/Pagebanner2";
import CallToSection from "@/components/CallToSection/CallToSection";

import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import PricingOne from "@/components/PricingSection/PricingOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Pricing = () => {
  return (
    <Layout pageTitle="Pricing Page">
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
      <Pagebanner2 title="Pricing Plans" page="Pricing Page" parent="Page" />
      <PricingOne />
      <CallToSection />
      <FooterSeven  normalPadding={false} />
    </Layout>
  );
};

export default Pricing;
