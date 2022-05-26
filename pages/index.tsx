import Head from 'next/head';
import type { NextPage } from 'next';

import { Slant } from '../components/Slant';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { Description } from '../components/Description';
import { RedirectTool } from '../components/RedirectTool';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Batch 301 &middot; Bulk redirect checker</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta
        name="description"
        content="Batch 301 is a development tool designed to check multiple urls for redirects, it also checks the status code and redirect chain"
      />
      <meta name="author" content="David Hewitt" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mosh1e" />
      <meta name="twitter:creator" content="@mosh1e" />
      <meta name="og:title" content="Batch 301 &middot; Bulk redirect checker" />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="/" />
      <meta property="og:image" content="images/android-chrome-256x256.png" />
      <meta
        name="og:description"
        content="Batch 301 is a development tool designed to check multiple urls for redirects, it also checks the status code and redirect chain"
      />
    </Head>
    <Container>
      <Header role="banner" className="clearfix" />
      <Description>Web development tool to validate a collection of urls redirect chain and status codes.</Description>
      <RedirectTool />
      <Footer role="contentinfo" className="clearfix" />
    </Container>
    <Slant />
  </>
);

export default Home;
