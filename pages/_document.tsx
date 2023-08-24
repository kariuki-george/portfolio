import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
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
