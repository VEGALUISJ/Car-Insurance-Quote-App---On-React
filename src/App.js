import React from 'react'
import Header from "./components/Header"
import Form from "./components/Form"

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FromContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header 
        tittle = 'Car Insurance Quote App'
      />

    <FromContainer>
      <Form/>
    </FromContainer>

    </Container>
  );
}

export default App;
