import React from 'react';

import { AutoSlideshow, Footer, Navbar, RehabPlansInfo } from '../components';
import '../styles/bookform.css';

const PlansInfo = () => {
  return (
    <div className="body-form">
      <Navbar />
      <RehabPlansInfo/>
      <AutoSlideshow/>
      <Footer />

    </div>
  );
};

export default PlansInfo;