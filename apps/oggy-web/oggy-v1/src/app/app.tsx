import styled from 'styled-components';
import Footer from './components/footer';
import NavigationBar from './components/navigation-bar';
import Home from './pages/home';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NavigationBar />
      <Home />
      <Footer />
    </StyledApp>
  );
}

export default App;
