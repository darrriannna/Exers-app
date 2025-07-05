import React from 'react';
import '../styles/index.css';
import RehabPlans from './Plans';

const HeroWithForm = () => {
  return (
    <div>
<section className="hero">
  <div className="container">
    <div className="hero-content">
      <div className="image-box">
        <img src="./assets/pic-tophome.jpg" alt="Woman exercising" />
      </div>
      <div className="text-box">
        <p className="price">För bara 200kr</p>
        <h1>Få dina personliga övningar från Legitimerad sjukvård online</h1>
        <div className="buttons">
          <div>
          <a href="/" className="link-button">LÄS MER</a>
         </div> <div>
          <button className="main-button">BESTÄLLA</button>
        </div></div>
      </div>
    </div>
  </div>
</section>

<RehabPlans/>
  
  <section className="tagline">
    <p>Ont i rygg, axel eller knä? Vi hjälper dig hemma – av legitimerad vårdpersonal.</p>
  </section>
  
  <section className="features">
    <div className="feature-item">
      <h3>LEGITIMERAD VÅRDPERSONAL</h3>
      <p>Allt tas fram av legitimerad sjukvård – ingen AI, inga gissningar.</p>
    </div>
    <div className="feature-item">
      <h3>TYDLIGA VIDEO-INSTRUKTIONER</h3>
      <p>Alla övningar kommer med korta, tydliga videoklipp så du vet exakt hur du ska göra.</p>
    </div>
    <div className="feature-item">
      <h3>TILLGÄNGLIGT VAR DU ÄN ÄR</h3>
      <p>Hemma, på jobbet eller på semestern – övningarna kommer till dig.</p>
    </div>
  </section>
  </div>
  );
};

export default HeroWithForm;

