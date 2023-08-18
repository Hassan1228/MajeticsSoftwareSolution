import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/custom-animate.css";
import "@/vendors/flaticon.css";
import "@/vendors/fontawesome-all.css";
import "@/vendors/linoor-icons.css";
import "@/vendors/reey-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import Script from 'next/script';
const MyApp = ({ Component, pageProps }) => {
  
  return (
     <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
