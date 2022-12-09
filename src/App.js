import React from 'react';
import './App.css';
import BasicCalculator from './pages/basic-calculator/basic-calculator.component';
import { ThemeProvider } from "styled-components";
import { THEME } from "./app/app.types.js";
import { useSelector } from 'react-redux';
import { selectTheme } from './app/redux/theme.slice';
import styled from 'styled-components';

const AppContainer = styled.div`
    background-color: ${props=>props.theme.background.main};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const App = () => {
  const theme = useSelector(selectTheme);
  console.log(THEME[1]);

  return (
    <ThemeProvider theme={
      theme === 1 ? THEME[0]: (theme===2 ? THEME[1]:THEME[2])
    }>
      <AppContainer>
        <BasicCalculator/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
