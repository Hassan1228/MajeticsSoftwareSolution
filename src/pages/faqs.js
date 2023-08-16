import PageBanner4 from "@/components/BannerSection/PageBanner4";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import GetQuoteThree from "@/components/GetQuote/GetQuoteThree";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

import React from "react";

const faqs = () => {
  return (
    <Layout pageTitle="FAQs">
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
      <PageBanner4 title="FAQs" />
      <FaqsSection />
      <GetQuoteThree />
      <CallToSectionTwo className="alternate" />
      
     <FooterSeven/>
    </Layout>
  );
};

export default faqs;
