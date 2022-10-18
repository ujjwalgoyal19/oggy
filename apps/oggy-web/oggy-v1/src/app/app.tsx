import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Switch from 'app/routes';
import config from './config';
import GlobalStyles from './components/templates/Global.styled';
import WebFont from 'webfontloader';
import { lazy, Suspense, useLayoutEffect } from 'react';
import { useDeviceType } from './hooks/useDeviceType.hook';
import Images from './constants/images';
const MobileNavigationBar = lazy(
  () => import('app/components/organisms/mobile-navigation-bar')
);
const MobileFooter = lazy(() => import('./components/organisms/mobile-footer'));
const NavigationBar = lazy(
  () => import('./components/organisms/navigation-bar')
);
const Footer = lazy(() => import('app/components/organisms/footer'));

const StyledApp = styled.div`
  position: relative;
`;

export function App() {
  useLayoutEffect(() => {
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
          <Suspense>
            {device.greaterThan('md') && (
              <NavigationBar Logo={Images.Logo.Oggy} />
            )}
            {device.lessThan('md') && <MobileNavigationBar />}
            <Switch />
            {device.greaterThan('md') && <Footer />}
            {device.lessThan('md') && <MobileFooter />}
          </Suspense>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
