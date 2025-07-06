import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import '../styles/index.css';
import GoogleReviews from './Reviews';


const Home = () => {
 

  // Animation settings
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="main">
        <div>
   
     <motion.div {...fadeIn} transition={{ delay: 1.4 }}>
          </motion.div>
          <GoogleReviews/>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

