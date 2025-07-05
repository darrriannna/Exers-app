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
import { Home, PageNotFound, BookTime, MRIbookTime, Restrictions } from "./pages";
import { DynamicForm } from './components';
import ScrollToTop from './components/ScrollToTop';

import IntegrityPolicy from "./pages/Policy";
 // Import the LoaderProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <ScrollToTop />
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bokanu" element={<BookTime />} />

          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/bestalla" element={<MRIbookTime />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/integrity-policy" element={<IntegrityPolicy />} />

          <Route path="/villkor" element={<Restrictions />} />
          <Route path="/product/*" element={<PageNotFound />} />

        </Routes>
    </Provider>
  </BrowserRouter>
);
