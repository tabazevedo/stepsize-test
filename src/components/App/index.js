import React from 'react';
import { styled } from 'styletron-react';

const Container = styled('div', {
  padding: '100px',
});

const App = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default App;
