import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-gb">
        <Head>
          <link rel="manifest" href="manifest.json" />
          <link rel="shortcut icon" href="images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
          <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#8f2ee1" />
          <meta name="msapplication-TileColor" content="#8f2ee1" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Source+Sans+Pro:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Script src="https://www.googletagmanager.com/gtag/js?id=UA-116217007-1" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-116217007-1');
        `}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
