import Head from 'next/head';
import AboutNine from "@/components/AboutSection/AboutNine";
import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import BlogSeven from "@/components/NewsSection/BlogSeven";

import ProjectSeven from "@/components/ProjectSection/ProjectSeven";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

import SliderSeven from "@/components/SliderSection/SliderSeven";
import SponsorSeven from "@/components/SponsorsSection/SponsorSeven";
import SubscribeTwo from "@/components/SubscribeSection/SubscribeTwo";

import preloader from "@/images/icons/preloader.png";
import React from "react";
import Text from "@/components/Text";




const Home7 = () => {
  return (
    <>
    <Head>
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
        <script src="https://unpkg.com/kursor"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              new kursor({
                type: 1
              });
            `,
          }}
        ></script>
      </Head>
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
   
      <ProjectSeven />
   
   

      <FunFactSeven />
      <SponsorSeven />
   
      <BlogSeven />
      <SubscribeTwo />
      <FooterSeven />
    </Layout>
          </>
  );
};

export default Home7;

// pages/index.js




