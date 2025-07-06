import React from 'react';
import '../styles/index.css';
import RehabPlans from './Plans';

const HeroWithForm = () => {
  return (
    <div>
     <section className="offer-card-wrapper">
      <div className="offer-card">
        <div className="offer-image">
          <img src="./assets/pic-tophome.jpg" alt="Exercise" />
        </div>
        <div className="offer-info-box">

          <p className="offer-price">För bara 299kr</p>
          <h2 className="offer-heading">
          Individuella rehabiliteringsplaner
          skapade av legitimerade experter –  
          direkt till dig.
          </h2>
          <ul className="rehab-plan-checklist">
            <li>Effektiva övningar anpassade efter dig</li>
            <li>Ingen väntetid eller fysisk klinik</li>
            <li>Få hjälp var du än befinner dig – helt digitalt</li>
          </ul>
          <a className="offer-readmore" href="/">LÄS MER</a>
          <button className="offer-button">BESTÄLLA</button>
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

