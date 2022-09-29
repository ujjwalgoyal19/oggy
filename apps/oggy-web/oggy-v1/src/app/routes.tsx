import { Routes, Route } from 'react-router-dom';
import Home from 'app/pages/home';
import RestaurantPage from 'app/pages/restaurant-page';
import SearchResultPage from 'app/pages/search-result-page';
import Page404 from 'app/pages/page404';
import LoginRegistrationPage from './pages/login-registration-page';

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<LoginRegistrationPage />} />
      <Route path="/register" element={<LoginRegistrationPage />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
      <Route path="/error" element={<Page404 />} />
    </Routes>
  );
};

export default Switch;
