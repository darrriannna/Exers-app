import React from 'react';
import SimpleForm from '../components/MRIForm';
import { Footer, Navbar } from '../components';
import '../styles/bookform.css';

const MRIbookTime = () => {
  return (
    <div className="body-form">
      <Navbar />
      <SimpleForm />
      <Footer />
    </div>
  );
};

export default MRIbookTime;





