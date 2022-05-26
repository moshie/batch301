import type { NextPage } from 'next';

import { Slant } from '../components/Slant';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { Description } from '../components/Description';
import { RedirectTool } from '../components/RedirectTool';

const Home: NextPage = () => (
  <>
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
