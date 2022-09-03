import styled, { ThemeProvider } from 'styled-components';
import * as config from './config';
import GlobalStyles from './components/templates/Global.styled';
// import Footer from './components/footer';
// import NavigationBar from './components/navigation-bar';
import NavigationBar from './components/organisms/navigation-bar';
import Home from './pages/home';

const StyledApp = styled.div``;

export function App() {
  return (
    <ThemeProvider theme={config.themes.light}>
      <GlobalStyles />
      <StyledApp>
        <NavigationBar Logo={config.images.Oggy.Logo} />
        <Home />
        {/* <Footer /> */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
