import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import LoginButtons from './components/LoginButtons';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f2ef;
`;

const App = () => (
  <AppContainer>
    <Header />
    <LoginButtons />
    <Footer />
  </AppContainer>
);

export default App;
