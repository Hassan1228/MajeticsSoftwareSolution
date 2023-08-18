import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="favicon.ico"
            id="fav-shortcut"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="favicon.ico"
            id="fav-icon"
            type="image/x-icon"
          />
          <link rel="icon" href="favicon.ico" />
          <meta
            name="description"
            content="Linoor is a multipurpose and powerful Digital Services Agency NextJS Template. The template is highly suitable template for companies that offer web design, web development, internet services, digital marketing, SEO services and all other internet marketing and services related agencies and businesses."
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Teko:wght@300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
          <link href="https://db.onlinewebfonts.com/c/5a7db2db0a7c1a9f98bfad78893257cd?family=SuiGenerisRg-Regular" rel="stylesheet"></link>
          <link href="https://db.onlinewebfonts.com/c/1dc67d121b0a0ffd3b0284faf4de4d21?family=HURTMOLD" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css">
        </Head>
        <body>
          <Main />
          <NextScript />
                <Script src="https://unpkg.com/kursor"/>
    <Script
        new kursor({
            type: 1
        })
    />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
