import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-gb">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Source+Sans+Pro:wght@400;600&display=swap"
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
