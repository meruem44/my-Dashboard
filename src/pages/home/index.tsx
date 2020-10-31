import React from 'react';

import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Main from '../../components/Main';
import SideBar from '../../components/SideBar';

const Home: React.FC = () => {
  return (
      <Container>
          <Navbar />
          <Main />
          <SideBar />
      </Container>
  );
}

export default Home;