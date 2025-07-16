import React from 'react';
import { AutoSlideshow, Footer, GoogleReviews, Navbar } from "../components";
import "../styles/index.css"; // Updated CSS file

const AboutPage = () => {
  return (
    <>
      <div className="body">
        <Navbar />
        <AutoSlideshow/>
       
        <div className='p-4'>
        <GoogleReviews/></div>
        <div>
</div>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
