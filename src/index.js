import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../src/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, PageNotFound, BookBasicPlan, Restrictions, PlansInfo, AboutPage, BookVideo, BookReview } from "./pages";
import { DynamicForm } from './components';
import ScrollToTop from './components/ScrollToTop';

import IntegrityPolicy from "./pages/Policy";
import InfoBasicPlan from './pages/InfoBasic';
import InfoVideoPlan from './pages/InfoVideo';
import InfoReviewPlan from './pages/InfoReview';
 // Import the LoaderProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <ScrollToTop />
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bokanu" element={<BookBasicPlan />} />
          <Route path="/bokanu-samtal" element={<BookVideo />} />
          <Route path="/bokanu-uppfojlning" element={<BookReview />} />
          <Route path="/om-oss" element={<AboutPage/>} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/bestalla" element={<InfoBasicPlan />} />
          <Route path="/bestalla-samtal" element={<InfoVideoPlan />} />
          <Route path="/bestalla-uppfojlning" element={<InfoReviewPlan />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/integrity-policy" element={<IntegrityPolicy />} />
          <Route path="/plan" element={<PlansInfo />} />
          <Route path="/villkor" element={<Restrictions />} />
          <Route path="/product/*" element={<PageNotFound />} />

        </Routes>
    </Provider>
  </BrowserRouter>
);
