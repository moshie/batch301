import type { NextPage } from 'next';

import { Slant } from '../components/Slant';
import { Header } from '../components/Header';
import { Editor } from '../components/Editor';
import { Container } from '../components/Container';
import { Description } from '../components/Description';

const Home: NextPage = () => (
  <>
    <Container>
      <Header role="banner" className="clearfix" />
      <Description>Web development tool to validate a collection of urls redirect chain and status codes.</Description>
      <Editor />
    </Container>
    <Slant />
  </>
);

export default Home;
