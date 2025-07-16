import React from 'react';
import '../styles/ad-info.css';

const RehabPlansInfo = () => {
  return (
    <section className="rehab-plan-section">
      <h2 className="rehab-plan-title">Mer om våra planer</h2>
      <div className="rehab-plan-cards">

        {/* Plan 1 */}
        <div className="rehab-plan-card-info rehab-plan-basic">
          <h2 className="rehab-plan-heading">Individuell rehabiliterings plan</h2>
          <ul className="rehab-plan-checklist">
            <li>En helt individanpassad rehabiliteringsplan.</li>
            <li>Baserad på ditt ifyllda formulär med symtom, smärta och sjukdomshistoria.</li>
            <li>Levereras via e-post inom 48 timmar.</li>
          </ul>
          <p className="rehab-plan-subtitle">
             <strong>Så fungerar det:</strong><br />
            Fyll i vårt formulär med detaljer om din smärta och bakgrund.<br />
            En legitimerad naprapat/fysioterapeut analyserar dina uppgifter.<br />
            Du får en skräddarsydd plan – ingen bokning krävs.
          </p>
          <p className="rehab-plan-subtitle">
             <strong>Passar dig som:</strong><br />
            Vill ha ett snabbt och prisvärt träningsprogram utan att boka tid.
          </p>
          <div className="rehab-plan-price">
            <span>299</span><span className="rehab-plan-currency">kr</span>
          </div>
          <div className="rehab-plan-buttons">
            <button className="rehab-plan-button">Beställa</button>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="rehab-plan-card-info rehab-plan-featured">
          <div className="rehab-plan-tag">Kundsfavorit</div>
          <h2 className="rehab-plan-heading">Individuell rehabiliterings plan med Videosamtal</h2>
          <ul className="rehab-plan-checklist">
            <li>Allt i den vanliga Individuella Rehabiliteringsplanen.</li>
            <li>Ett 20–30 minuters videosamtal med en legitimerad naprapat eller fysioterapeut innan planen skapas.</li>
          </ul>
          <p className="rehab-plan-subtitle">
             <strong>Så fungerar det:</strong><br />
            Boka en tid för videosamtal.<br />
            Diskutera dina besvär direkt med en expert.<br />
            Få ett ännu mer målinriktat träningsprogram.
          </p>
          <p className="rehab-plan-subtitle">
             <strong>Varför videosamtal?</strong><br />
            Ger bättre förståelse för din situation och möjlighet att förtydliga symtom.
          </p>
          <p className="rehab-plan-subtitle">
             <strong>Passar dig som:</strong><br />
            Vill prata med en expert innan träningsplanen tas fram.
          </p>
          <div className="rehab-plan-price">
            <span>899</span><span className="rehab-plan-currency">kr</span>
          </div>
          <div className="rehab-plan-buttons">
            <button className="rehab-plan-button">Beställa</button>
          </div>
        </div>

        {/* Plan 3 */}
        <div className="rehab-plan-card-info rehab-plan-followup-info">
          <h2 className="rehab-plan-heading">Uppföljning</h2>
          <p className="rehab-plan-subtitle">Justering av planen vid behov</p>
          <ul className="rehab-plan-checklist">
            <li>Genomgång av dina framsteg.</li>
            <li>Uppdaterad plan baserat på dina nya behov eller förbättringar.</li>
            <li>Möjlighet till uppföljningsformulär eller samtal beroende på val.</li>
          </ul>
          <p className="rehab-plan-subtitle">
             <strong>Så fungerar det:</strong><br />
            Skicka en uppdatering om dina framsteg efter 2–4 veckor.<br />
            En specialist analyserar och justerar planen.<br />
            Du får en ny version anpassad för fortsatt utveckling.
          </p>
          <p className="rehab-plan-subtitle">
             <strong>Varför uppföljning?</strong><br />
            Kroppen förändras under rehabiliteringen – din plan bör göra detsamma.
          </p>
          <p className="rehab-plan-subtitle">
             <strong>Passar dig som:</strong><br />
            Vill fortsätta utvecklas och få vägledning i nästa steg.
          </p>
          <div className="rehab-plan-price rehab-plan-price-white">
            <span>299</span><span className="rehab-plan-currency">kr</span>
          </div>
          <div className="rehab-plan-buttons">
            <button className="rehab-plan-button rehab-plan-button-light">Beställa</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RehabPlansInfo;
