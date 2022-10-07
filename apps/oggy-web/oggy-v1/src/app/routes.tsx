import { Routes, Route } from 'react-router-dom';
import Home from 'app/pages/home';
import RestaurantPage from 'app/pages/restaurant-page';
import SearchResultPage from 'app/pages/search-result-page';
import Page404 from 'app/pages/page404';
import LoginRegistrationPage from './pages/login-registration-page';
import Login from './external-login/pages/Login.js';
import Signup from './external-login/pages/Signup.js';
import PDFEmbed from './components/atoms/pdfembed';

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<LoginRegistrationPage />} />
      <Route path="/register" element={<Signup setAuth="false" />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
      <Route path="/error" element={<Page404 />} />
      <Route path="/login" element={<Login setAuth="false" />} />
      <Route path="/signup" element={<Signup setAuth="false" />} />
      <Route
        path="/privacyPolicy"
        element={
          <PDFEmbed File="https://cdn.oggy.co.in/documents/privacyPolicy.pdf" />
        }
      />
      <Route
        path="/termsAndConditions"
        element={
          <PDFEmbed File="https://cdn.oggy.co.in/documents/termsOfUse.pdf" />
        }
      />
    </Routes>
  );
};

export default Switch;
