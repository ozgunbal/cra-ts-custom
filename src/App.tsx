import React, { SFC } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoAnimation} infinite 20s linear;
  }
`;

const Link = styled.a`
  color: #61dafb;
`;

const App: SFC = () => {
  return (
    <AppContainer>
      <AppHeader>
        <Logo alt="logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </Link>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
