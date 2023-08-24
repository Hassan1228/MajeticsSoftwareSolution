import React, { useEffect } from 'react';
import SliderSeven from './SliderSection/SliderSeven';
import Text from './Text';
import AboutNine from './AboutSection/AboutNine';
import ProjectSeven from './ProjectSection/ProjectSeven';
import FunFactSeven from './FunFacts/FunFactSeven';
import SponsorSeven from './SponsorsSection/SponsorSeven';
import BlogSeven from './NewsSection/BlogSeven';
import SubscribeTwo from './SubscribeSection/SubscribeTwo';
import FooterSeven from './MainFooter/FooterSeven';
import headerData from "@/data/header";
import { Image } from "react-bootstrap";




function Home() {
    const { logo7} = headerData;
    useEffect(() => {
        const paperMenu = {
            $window: document.querySelector('#paper-window'),
            $paperFront: document.querySelector('#paper-front'),
            $hamburger: document.querySelector('.hamburger'),
            offset: 1800,
            pageHeight: document.querySelector('#paper-front').offsetHeight,

            open: function () {
                this.$window.classList.add('tilt');
                this.$hamburger.removeEventListener('click', this.open.bind(this));
                document.querySelector('#container').addEventListener('click', this.close.bind(this));
                this.hamburgerFix(true);
                console.log('opening...');
            },
            close: function () {
                this.$window.classList.remove('tilt');
                document.querySelector('#container').removeEventListener('click', this.close.bind(this));
                this.$hamburger.addEventListener('click', this.open.bind(this));
                this.hamburgerFix(false);
                console.log('closing...');
            },
            updateTransformOrigin: function () {
                const scrollTop = this.$window.scrollTop || document.documentElement.scrollTop;
                const equation = (scrollTop + this.offset) / this.pageHeight * 100;
                this.$paperFront.style.transformOrigin = `left ${equation}%`;
            },
            //hamburger icon fix to keep its position
            hamburgerFix: function (opening) {
                if (opening) {
                    this.$hamburger.style.position = 'absolute';
                    this.$hamburger.style.top = this.$window.scrollTop + 30 + 'px';
                } else {
                    setTimeout(() => {
                        this.$hamburger.style.position = 'fixed';
                        this.$hamburger.style.top = '30px';
                    }, 300);
                }
            },
            bindEvents: function () {
                this.$hamburger.addEventListener('click', this.open.bind(this));
                document.querySelector('.close').addEventListener('click', this.close.bind(this));
                this.$window.addEventListener('scroll', this.updateTransformOrigin.bind(this));
            },
            init: function () {
                this.bindEvents();
                this.updateTransformOrigin();
            },
        };

        paperMenu.init();
    }, []);

    return (
        <>
        
            <div id="paper-back">
       
                
                <nav>
                    <div className="close" />
                    <a href="/">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Our Work</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
            <div id="paper-window">
                <div id="paper-front">
                <a href="/" className='nav-logoa'> <Image className="nav-logo1" src={logo7.src} alt="" />
                </a>
                    <div className="hamburger">
                        <span />
                    </div>
                    <div id="container">
                   
                        <section >
                        
                            <SliderSeven />


                            <Text />




                        </section>



                        <AboutNine />
                        <ProjectSeven />
                        <FunFactSeven />
                        <SponsorSeven />

                        <BlogSeven />



                        <section />
                        <SubscribeTwo />
                        <FooterSeven />
                        <section />
                        <section />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
