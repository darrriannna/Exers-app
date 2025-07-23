import React from 'react';
import { DynamicForm, Footer, Navbar } from '../components';
import '../styles/bookform.css';

const BookReview = () => {
  return (
    <div className='main-book'>
      
      <Navbar />
      <div className='form-wrapper'>
      <h3 className='text-center'>Uppföljning</h3>
      <DynamicForm/></div>
      

      <Footer/>
    </div>
  );
};

export default BookReview;
