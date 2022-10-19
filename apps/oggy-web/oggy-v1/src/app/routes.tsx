import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('app/pages/home'));
const RestaurantPage = lazy(() => import('app/pages/restaurant-page'));
const SearchResultPage = lazy(() => import('app/pages/search-result-page'));
const Page404 = lazy(() => import('app/pages/page404'));
const LoginRegistrationPage = lazy(
  () => import('./pages/login-registration-page')
);
const Login = lazy(() => import('./external-login/pages/Login.js'));
const Signup = lazy(() => import('./external-login/pages/Signup.js'));
const PDFEmbed = lazy(() => import('./components/atoms/pdfembed'));

const Switch = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginRegistrationPage />} />
        <Route path="/register" element={<Signup setAuth="false" />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route
          path="/restaurant/:restaurantId/:section"
          element={<RestaurantPage />}
        />
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
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
    </Suspense>
  );
};

export default Switch;
