import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta
            name="title"
            content="Mission KAS - Start your KAS preparation with us"
          />
          <meta
            name="description"
            content="Smart and focused training to the aspirants to succeed in the KAS examination."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://missionkas.com/" />
          <meta
            property="og:title"
            content="Mission KAS - Start your KAS preparation with us"
          />
          <meta
            property="og:description"
            content="Smart and focused training to the aspirants to succeed in the KAS examination."
          />
          <meta property="og:image" content="/summary_image.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_image.png" />
          <meta property="twitter:url" content="https://missionkas.com/" />
          <meta
            property="twitter:title"
            content="Mission KAS - Start your KAS preparation with us"
          />
          <meta
            property="twitter:description"
            content="Smart and focused training to the aspirants to succeed in the KAS examination."
          />
          <meta property="twitter:image" content="summary_image.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
