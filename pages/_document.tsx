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
            data-ackee-domain-id="f7cb3d78-c173-4c08-a4b8-9a9fbc418d65"
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