import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Switch from 'app/routes';
import config from './config';
import GlobalStyles from './components/templates/Global.styled';
import NavigationBar from './components/organisms/navigation-bar';
import Footer from 'app/components/organisms/footer';

const StyledApp = styled.div``;

export function App() {
  return (
    <ThemeProvider theme={config.themes.light}>
      <GlobalStyles />
      <StyledApp>
        <Router basename="/">
          <NavigationBar Logo={config.images.Oggy.Logo} />
          <Switch />
        </Router>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
