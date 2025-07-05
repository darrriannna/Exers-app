import React from 'react';
import '../styles/ad-info.css';

const RehabPlans = () => {
  return (
    <section className="rehab-plan-section">
      <h1 className="rehab-plan-title">Välj din plan</h1>
      <div className="rehab-plan-cards">

        <div className="rehab-plan-card rehab-plan-basic">
          <h2 className="rehab-plan-heading">Individuell rehabiliterings plan</h2>
          <ul className="rehab-plan-checklist">
            <li>Skickas till din e-post efter ifyllt formulär</li>
            <li>Snabb, enkel och personligt anpassad</li>
            <li>Perfekt för dig som vill komma igång direkt utan videosamtal</li>
          </ul>
          <div className="rehab-plan-price">
            <span>299</span><span className="rehab-plan-currency">kr</span>
          </div>
          <div className="rehab-plan-buttons">
            <button className="rehab-plan-button">Beställa</button>
            <a href="/" className="rehab-plan-link">Läs mer</a>
          </div>
        </div>
        <div className="rehab-plan-card rehab-plan-featured">
          <div className="rehab-plan-tag">Kundsfavorit</div>
          <h2 className="rehab-plan-heading">Individuell rehabiliterings plan med Videosamtal</h2>
          <ul className="rehab-plan-checklist">
            <li>Inkluderar 1 videokonsultation (20–30 min) med expert</li>
            <li>Du får därefter ett personligt träningsprogram</li>
            <li>Bäst för dig med mer komplexa besvär eller frågor</li>
          </ul>
          <div className="rehab-plan-price">
            <span>899</span><span className="rehab-plan-currency">kr</span>
          </div>
          <div className="rehab-plan-buttons">
            <button className="rehab-plan-button">Beställa</button>
            <a href="/" className="rehab-plan-link">Läs mer</a>
          </div>
        </div>
        <div className="rehab-plan-card rehab-plan-followup">
          <h2 className="rehab-plan-heading">Uppföljning</h2>
          <p className="rehab-plan-subtitle">Justering av planen vid behov</p>
          <ul className="rehab-plan-checklist">
            <li>Planen uppdateras utifrån dina framsteg</li>
            <li>Säkerställer att träningen följer din utveckling</li>
            <li>För dig som redan har en plan och vill ha nästa steg</li>
          </ul>
          <div className="rehab-plan-price rehab-plan-price-white">
            <span>299</span><span className="rehab-plan-currency">kr</span>
          </div>
          <div className="rehab-plan-buttons">
            <button className="rehab-plan-button rehab-plan-button-light">Beställa</button>
            <a href="/" className="rehab-plan-link rehab-plan-link-white">Läs mer</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RehabPlans;


