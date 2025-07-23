import React from 'react';
import SimpleForm from '../components/BasicForm';
import { Footer, Navbar } from '../components';
import '../styles/bookform.css';

const InfoBasicPlan = () => {
  return (
    <div className="body-form">
      <Navbar />
      <SimpleForm />
      <Footer />
    </div>
  );
};

export default InfoBasicPlan;





