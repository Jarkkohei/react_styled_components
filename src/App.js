import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';

const theme = {
  primary: 'teal',
  secondary: 'green',
  font: 'sans-serif',
}

const Button = styled.button`
  font-family: ${props => props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  /*background: ${props => (props.primary ? 'red' : 'green')};*/
  background: ${props => props.theme.primary};
  color: #fff;
  &:hover{
    background: blue;
  }
`

const H1 = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 3rem;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1>Styled Components</H1>
        <form action="">
          <input type="text" />
          <Button primary>Create</Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
