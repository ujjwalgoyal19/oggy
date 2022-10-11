import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Switch from 'app/routes';
import config from './config';
import GlobalStyles from './components/templates/Global.styled';
import NavigationBar from './components/organisms/navigation-bar';
import Footer from 'app/components/organisms/footer';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { useDeviceType } from './hooks/useDeviceType.hook';
import MobileNavigationBar from './components/organisms/mobile-navigation-bar';
import MobileFooter from './components/organisms/mobile-footer';
import Images from './constants/images';

const StyledApp = styled.div`
  position: relative;
`;

export function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Raleway:100,200,300,400,500,600,700,800,900'],
      },
    });
  }, []);
  const device = useDeviceType();
  return (
    <ThemeProvider theme={config.themes.light}>
      <GlobalStyles />
      <StyledApp>
        <Router basename="/">
          {device.greaterThan('md') && (
            <NavigationBar Logo={Images.Logo.Oggy} />
          )}
          {device.lessThan('md') && <MobileNavigationBar />}
          <Switch />
          {device.greaterThan('md') && <Footer />}
          {device.lessThan('md') && <MobileFooter />}
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
