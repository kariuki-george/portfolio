import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://ackee.p.kariukigeorge.me/tracker.js"
            data-ackee-server="https://ackee.p.kariukigeorge.me"
            data-ackee-domain-id="bba72abc-f3b0-482d-b4ac-5efb2e60f17d"
          ></script>
        </Head>
        <body className="bg-black-500 max-w-screen overflow-x-hidden ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// className="bg-white dark:bg-black text-black dark:text-white min-h-screen w-screen max-w-[1400px] m-auto font-noto"
